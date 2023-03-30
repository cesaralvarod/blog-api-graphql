const { GraphQLString } = require('graphql')
const { createUser } = require('../../services/users/users.services')

const register = {
  type: GraphQLString,
  description: 'Register a new user.',
  args: {
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    displayName: {
      type: GraphQLString,
    },
  },
  resolve: (_, args) => createUser(args),
}

module.exports = { register }
