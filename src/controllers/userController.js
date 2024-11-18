import {
  signInUserService,
  signUpUserService,
} from "../services/userService.js";

export async function getProfile(req, res) {
  //un-implemented
  res.status(501).json({
    success: false,
    message: "Not Implemented",
  });
}

export async function signUp(req, res) {
  try {
    // const { username, email, password } = req.body;
    const user = await signUpUserService(req.body);

    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function signIn(req, res) {
  try {
    const response = await signInUserService(req.body);
    console.log("Req Body - ", req.body);
    return res.status(200).json({
      success: true,
      message: "User Signed in successfully.",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
