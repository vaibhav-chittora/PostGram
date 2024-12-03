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
import { isAdmin, isAuthenticated } from "../../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /posts:
 *   post:
 *     description: Create a new post
 *     responses:
 *       201:
 *         description: Post Created
 *
 */
router.post(
  "/",
  isAuthenticated,
  s3Uploader.single("image"),
  validate(zodPostSchema),
  createPost
);

/**
 * @openapi
 * /findAllPosts:
 *   get:
 *     description: Get all posts
 *     responses:
 *       200:
 *         description: Posts Found
 *
 */

router.get("/", findAllPosts);

/**
 * @openapi
 * /posts/{id}:
 *    put:
 *      description: Update a post
 *      responses:
 *        201:
 *          description: Post Updated
 */
router.put(
  "/:id",
  isAuthenticated,
  isAdmin,
  s3Uploader.single("image"),
  updatePost
);

/**
 * @openapi
 * /posts/{id}:
 *    delete:
 *      description: Delete a post
 *      responses:
 *        204:
 *          description: Post Deleted
 */
router.delete("/:id", isAuthenticated, deletePost);

export default router;
