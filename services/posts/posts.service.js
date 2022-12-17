const Post = require("../../models/post/Post");

const getAllPosts = async () => {
  return await Post.find();
};

const createNewPost = async (params, verifiedUser) => {
  if (!verifiedUser) throw new Error("Unauthorized");

  const { user } = verifiedUser;

  const { title, body, authorId, description } = params;

  const newPost = await Post.create({
    title,
    body,
    authorId,
    description,
    authorId: user._id,
  });

  return newPost;
};

const findPostById = async (id) => {
  return await Post.findById(id);
};

const updatePostById = async (id, params, verifiedUser) => {
  if (!verifiedUser) throw new Error("Unauthorized");

  const { user } = verifiedUser;

  const post = await findPostById(id);

  if (!post) throw new Error("Post doesn't exist");

  if (post.authorId.toString() !== user._id)
    throw new Error("You can't modify this post");

  delete params.id;

  const updatedPost = await Post.findByIdAndUpdate(id, params, { new: true });

  return updatedPost;
};

const deletePostById = async (id, verifiedUser) => {
  if (!verifiedUser) throw new Error("Unauthorized");

  const { user } = verifiedUser;

  const post = await findPostById(id);

  if (!post) throw new Error("Post doesn't exist");

  if (post.authorId.toString() !== user._id)
    throw new Error("You can't modify this post");

  const deletedPost = await Post.findByIdAndDelete(id);

  return deletedPost;
};

module.exports = {
  getAllPosts,
  createNewPost,
  findPostById,
  updatePostById,
  deletePostById,
};
