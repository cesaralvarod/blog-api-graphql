const { GraphQLString } = require("graphql");
const { signIn } = require("../../services/authentication/auth.service");

const login = {
  type: GraphQLString,
  description: "Login an user.",
  args: {
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  resolve: (_, args) => signIn(args),
};

module.exports = { login };
