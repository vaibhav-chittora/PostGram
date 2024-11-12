import {
  countAllPosts,
  createPost,
  deletePostById,
  findAllPosts,
  updatePostById,
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  try {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    const post = await createPost(caption, image);
    //   const user = createPostObject.user;

    return post;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPostsService = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit);

  //calculate total posts and total pages
  const totalPosts = await countAllPosts(); //created a new method to count all the posts in repository layer

  const totalPages = Math.ceil(totalPosts / limit);

  return {
    posts,
    totalPages,
    totalPosts,
  };
};

// delete Post service
export const deletePostByIdService = async (id) => {
  //call the repository layer function
  const response = await deletePostById(id);
  console.log("Deleted Response - ", response);
  return response;
};

//update Post Service
export const updatePostByIdService = async (id, updateObject) => {
  //call the repository layer function
  const post = await updatePostById(id, updateObject);
  console.log("Updated Post - ", post);
  return post;
};
