import Post from "../schema/post.js";

export async function createPost(caption, image, user) {
  try {
    const newPost = await Post.create({ caption, image, user });
    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export async function findAllPosts(offset, limit) {
  try {
    const posts = await Post.find().sort({ createdAt : -1 }).skip(offset).limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function countAllPosts(){
  try {
    const totalPosts = await Post.countDocuments();
    return totalPosts;
  } catch (error) {
    console.log(error);
  }
}

export async function findPostById(id) {
  try {
    const post = Post.find(id);
    return post;
  } catch (error) {
    console.loh(error);
  }
}

export async function findPostByID(id) {
  try {
    const post = Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
  }
}
