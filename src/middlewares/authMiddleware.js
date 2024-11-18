import { verifyJWT } from "../utils/jwt.js";
import { checkIfUserExist } from "../services/userService.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).json({
      status: 404,
      message: "Token is Required",
    });
  }
  try {
    const response = verifyJWT(token);

    const doesUserExist = await checkIfUserExist(response.email);

    if (!doesUserExist) {
      req.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    req.user = response;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};
