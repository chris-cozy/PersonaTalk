const passport = require("passport");
const User = require("../models/user");

async function registerUser(req, res) {
  console.log(req.body);
  const { username, password, display_name } = req.body;
  const newUser = new User({
    username: username,
    password: password,
    display_name: display_name,
  });

  User.register(newUser, password, (err, user) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    passport.authenticate("local")(req, res, () => {
      res.status(201).json({ message: "Registration successful" });
    });
  });
}

async function getCurrentUser(req, res) {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // The authenticated user's information is available in req.user
    const currentUser = req.user;
    res.json(currentUser);
  } else {
    // If the user is not authenticated, return an error or an appropriate response
    res.status(401).json({ message: "Not authenticated" });
  }
}

module.exports = {
  registerUser,
  getCurrentUser,
};
