import mongoose from "mongoose";
import { DbUrl } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(DbUrl);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("something went wrong while connecting to MongoDB");
    console.log(error);
  }
}
