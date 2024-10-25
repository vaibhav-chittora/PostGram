import dotenv from "dotenv";
dotenv.config();

export const DbUrl = process.env.DB_URL;

export const AWS_REGION = process.env.AWS_REGION;
