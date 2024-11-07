import {
  createPostService,
  findAllPostsService,
} from "../services/postService.js";

export async function createPost(req, res) {
  const post = await createPostService({
    caption: req.body.caption,
    image: req.file.location,
  });

  return res.status(201).json({
    success: true,
    message: "Post created Successfully",
    data: post,
  });
}

export async function findAllPosts(req, res) {
  const post = await findAllPostsService();
  return res.json({
    success: true,
    message: "Posts fetched Successfully",
  });
}
