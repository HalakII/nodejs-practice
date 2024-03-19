const express = require("express");
const controllers = require("../controllers/user");
const wrapper = require("../helpers/wrapper");

const authRouter = express.Router();

authRouter.post("/signup", wrapper(controllers.createUser));

module.exports = authRouter;
