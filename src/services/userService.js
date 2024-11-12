import { createUser } from "../repositories/userRepository.js";

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
