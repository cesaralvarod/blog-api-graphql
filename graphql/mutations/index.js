const { login } = require("./auth");
const { createPost, updatePost, deletePost } = require("./posts");
const { register } = require("./users");

module.exports = {
  login,
  register,
  createPost,
  updatePost,
  deletePost,
};
