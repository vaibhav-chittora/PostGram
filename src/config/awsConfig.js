import AWS from "aws-sdk";
import  { AWS_REGION } from "./serverConfig.js";

export const s3 = new AWS.S3({
  region: AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  
});

