import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

export const s3Uploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_BUCKET_NAME,
    // acl: "public-read", //access control list(ACL)
    key: function (req, file, cb) {
      console.log("req File - ", req.file);
      if (!file) {
        console.log("File Not found", file);
        return cb(new Error("File Not Found"));
      }
      if (file.mimetype === "image/jpeg" && file.mimetype === "image/png") {
        return cb(new Error("File Format Not Supported, try jpeg or png"));
      }
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); //key should be unique

      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
      );
    },
  }),
}); //multer acts as a middleware
