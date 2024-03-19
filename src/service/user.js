const repositories = require("../repositories/user");
const error = require("../helpers/error");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  const foundUser = await repositories.getUser(data.email);
  if (foundUser) {
    throw error(409, `${foundUser.email} is already used`);
  }
  const hashedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));

  const readyUserData = {
    ...data,
    password: hashedPassword,
  };
  const createUser = await repositories.createUser(readyUserData);
  return createUser;
};

module.exports = {
  createUser,
};
