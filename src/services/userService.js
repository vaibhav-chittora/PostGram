import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import { generateJwtToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const signUpUserService = async (userObject) => {
  try {
    // const username = userObject.username;
    // const email = userObject.email;
    // const password = userObject.password;

    const user = await createUser(userObject);
    return user;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "User with this email or username already exists",
      };
    }
    // console.log("service error", error);
    throw error;
  }
};

export const signInUserService = async (userDetails) => {
  try {
    // first we need to check if the user already exists -

    const user = await findUserByEmail(userDetails.email);
    if (!user) {
      throw {
        status: 400,
        message: "User not found",
      };
    }

    const isPasswordValid = bcrypt.compareSync(
      userDetails.password,
      user.password
    );

    if (!isPasswordValid) {
      throw {
        status: 400,
        message: "Password is not valid",
      };
    }

    const token = generateJwtToken({
      email: user.email,
      _id: user._id,
      username: user.username,
    });

    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
