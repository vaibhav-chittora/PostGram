import { createPost, findAllPosts } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  //   const user = createPostObject.user;

  const post = await createPost(caption, image);
  return post;
};

export const findAllPostsService = async (post) => {
  const posts = await findAllPosts(post);
  return posts;
};
