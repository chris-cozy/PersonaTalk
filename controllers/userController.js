// Import any required modules or models
const User = require("../models/user");

// Get all users' information
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get specified user's information by username
async function getUserByUsername(req, res) {
  const username = req.params.username;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Create a new user
async function createUser(req, res) {
  const { username, password, display_name } = req.body;

  try {
    const user = new User({ username, password, display_name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
};
