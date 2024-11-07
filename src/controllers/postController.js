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

//expected url -> /api/v1/posts?limit=10&offset=0
export async function findAllPosts(req, res) {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedPosts = findAllPostsService(offset, limit);
    return res.status(200).json({
      success: true,
      message: "All Post fetched Successfully",
      data: paginatedPosts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }

  // const post = await findAllPostsService();
  // return res.json({
  //   success: true,
  //   message: "Posts fetched Successfully",
  // });
}
