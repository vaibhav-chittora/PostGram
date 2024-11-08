import {
  createPostService,
  deletePostByIdService,
  findAllPostsService,
  updatePostByIdService,
} from "../services/postService.js";

export async function createPost(req, res) {
  console.log(req.file);
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

    const paginatedPosts = await findAllPostsService(offset, limit);
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
}

// expected URl -> /api/v1/post/:id
export async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const deletedPost = await deletePostByIdService(postId);
    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post Deleted Successfully.",
      data: deletedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
}

export async function updatePost(req, res) {
  try {
    console.log("req updated file - ", req.file);
    const updateObject = req.body;
    const postId = req.params.id;
    if (req.file) {
      updateObject.image = req.file.location;
    }
    const response = await updatePostByIdService(postId, updateObject);

    return res.status(200).json({
      success: true,
      message: "Post Updated Successfully.",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
}
