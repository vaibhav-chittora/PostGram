import express from "express";
import { s3Uploader } from "../../config/multerConfig.js";
import { createPost, findAllPosts } from "../../controllers/postController.js";

const router = express.Router();

router.post("/", s3Uploader.single("image"), createPost);

router.get("/", findAllPosts);

export default router;
