const express = require("express");

const UserRouter = express.Router();
const { registerUser, getUsers, getUser } = require("../controllers/User");

UserRouter.route("/").post(registerUser).get(getUsers);

UserRouter.route("/:id").get(getUser);

module.exports = UserRouter;
