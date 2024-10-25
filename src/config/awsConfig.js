import AWS from "aws-sdk";
import serverConfig from "./serverConfig";

const s3 = AWS.S3({
  region: serverConfig.AWS_REGION,
});


export default s3