// Import any required modules or models
const User = require("../models/user");

// Get all users' information
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "User(s) not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Delete all users
async function deleteAllUsers(req, res) {
  try {
    await User.deleteMany({}); // Delete all users in the database
    res.status(204).json({ message: "All users deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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

async function deleteUserByName(req, res) {
  try {
    const username = req.params.username;
    const deletedUser = await User.findOneAndDelete({
      username: username,
    });

    if (deletedUser) {
      res.status(204).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  deleteAllUsers,
  deleteUserByName,
};
