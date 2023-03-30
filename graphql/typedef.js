const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'The user type',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
})

const PostType = new GraphQLObjectType({
  name: 'PostType',
  description: 'The post type',
  fields: {
    authorId: { type: GraphQLID },
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
})

module.exports = {
  UserType,
  PostType,
}
