import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

export const s3Uploader = multer({ 
    Storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        acl: "public-read", //access control list(ACL)
        key: function (req, file, cb) {
            console.log(file);
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); //key should be unique

            cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
        },
    }),

}); //multer acts as a middleware

