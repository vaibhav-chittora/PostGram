import express from "express";
import { s3Uploader } from "../../config/multerConfig.js";
import {
  createPost,
  deletePost,
  findAllPosts,
  updatePost,
} from "../../controllers/postController.js";
import { validate } from "../../validators/zodValidator.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";
import { isAuthenticated } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  isAuthenticated,
  s3Uploader.single("image"),
  validate(zodPostSchema),
  createPost
);

router.get("/", findAllPosts);

router.put("/:id", s3Uploader.single("image"), updatePost);

router.delete("/:id", deletePost);

export default router;
