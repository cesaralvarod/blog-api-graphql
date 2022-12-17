const { GraphQLList, GraphQLID } = require("graphql");
const {
  getAllUsers,
  findUserByID,
} = require("../../services/users/users.services");
const { UserType } = require("../typedef");

const users = {
  type: new GraphQLList(UserType),
  description: "Get all users.",
  resolve: (_, args, { verifiedUser }) => getAllUsers(verifiedUser),
};

const user = {
  type: UserType,
  description: "Get one user by id.",
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: (_, args, { verifiedUser }) => findUserByID(args.id, verifiedUser),
};

module.exports = { users, user };
