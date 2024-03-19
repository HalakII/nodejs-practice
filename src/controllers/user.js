const service = require("../service/user");

const createUser = async (req, res) => {
  const createdUser = await service.createUser(req.body);
  res.json({
    createdUser,
  });
};

module.exports = {
  createUser,
};
