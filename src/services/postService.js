import { countAllPosts, createPost, findAllPosts } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  //   const user = createPostObject.user;

  const post = await createPost(caption, image);
  return post;
};

export const findAllPostsService = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit)

  //calculate total posts and total pages
  const totalPosts = await countAllPosts() //created a new method to count all the posts in repository layer

  const totalPages = Math.ceil(totalPosts / limit) 

  return {
    posts, totalPages, totalPosts
  };
};
