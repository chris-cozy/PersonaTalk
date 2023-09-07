const passport = require("passport");
const User = require("../models/user");

async function registerUser(req, res) {
  const { username, password, display_name } = req.body;
  const newUser = new User({ username: username, display_name: display_name });

  User.register(newUser, password, (err, user) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    passport.authenticate("local")(req, res, () => {
      res.status(201).json({ message: "Registration successful" });
    });
  });
}

module.exports = {
  registerUser,
};
