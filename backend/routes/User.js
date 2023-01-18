const express = require("express");

const UserRouter = express.Router();
const {
  registerUser,
  getUsers,
  getUser,
  loginUser,
} = require("../controllers/User");

UserRouter.route("/").get(getUsers);
UserRouter.route("/register").post(registerUser);
UserRouter.route("/login").post(loginUser);

UserRouter.route("/:id").get(getUser);

module.exports = UserRouter;
