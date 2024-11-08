import express from "express";
import { s3Uploader } from "../../config/multerConfig.js";
import {
  createPost,
  deletePost,
  findAllPosts,
  updatePost,
} from "../../controllers/postController.js";

const router = express.Router();

router.post("/", s3Uploader.single("image"), createPost);

router.get("/", findAllPosts);

router.put("/:id", s3Uploader.single("image"), updatePost);

router.delete("/:id", deletePost);

export default router;
