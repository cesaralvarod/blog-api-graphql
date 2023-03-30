const { GraphQLString, GraphQLID } = require('graphql')
const {
  createNewPost,
  updatePostById,
  deletePostById,
} = require('../../services/posts/posts.service')
const { PostType } = require('../typedef')

const createPost = {
  type: PostType,
  description: 'Create a new post.',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (_, args, { verifiedUser }) => createNewPost(args, verifiedUser),
}

const updatePost = {
  type: PostType,
  description: 'Update post.',
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (_, args, { verifiedUser }) =>
    updatePostById(args.id, args, verifiedUser),
}

const deletePost = {
  type: PostType,
  description: 'Delete post.',
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_, args, { verifiedUser }) => deletePostById(args.id, verifiedUser),
}

module.exports = { createPost, updatePost, deletePost }
