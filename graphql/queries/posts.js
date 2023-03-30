const { GraphQLList, GraphQLID } = require('graphql')
const {
  getAllPosts,
  findPostById,
} = require('../../services/posts/posts.service')
const { PostType } = require('../typedef')

const posts = {
  type: new GraphQLList(PostType),
  description: 'Get all posts.',
  resolve: () => getAllPosts(),
}

const post = {
  type: PostType,
  description: 'Find post by id.',
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: (_, args) => findPostById(args.id),
}

module.exports = { posts, post }
