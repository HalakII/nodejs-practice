const { User } = require("../models/user");

const getUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

module.exports = {
  getUser,
  createUser,
};
