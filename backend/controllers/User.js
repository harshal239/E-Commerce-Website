const User = require("../models/User");
const generateToken = require("../Utils/generateToken");

const registerUser = async (req, res) => {
  const { name, username, password, email, mobile, isAdmin } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(403).json({ Message: "User Already Exists !" });
    }

    const user = await User.create({
      name,
      username,
      password,
      email,
      mobile,
      isAdmin,
    });

    if (user) {
      res.status(201).json({
        name: user.name,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        name: user.name,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(404).json({ Message: "Invalid Email Address" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUser,
  loginUser,
};
