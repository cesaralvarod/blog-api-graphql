const { User } = require("../../models");
const { createJWTToken } = require("../../utils/auth");

const findUser = async (params = {}, verifiedUser) => {
  if (!verifiedUser) throw new Error("Token not valid");

  return await User.findOne(params);
};

const findUserByID = async (id = "", verifiedUser) => {
  if (!verifiedUser) throw new Error("Token not valid");

  return await User.findById(id);
};

const getAllUsers = async (verifiedUser) => {
  if (!verifiedUser) throw new Error("Token not valid");

  return await User.find();
};

const createUser = async (params) => {
  const { username, email, password, displayName } = params;

  const newUser = await User.create({
    username,
    email,
    password,
    displayName,
  });

  const token = createJWTToken(newUser);

  return token;
};

module.exports = { findUser, findUserByID, getAllUsers, createUser };
