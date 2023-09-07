const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.registerUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Login successful" });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logout successful" });
});

module.exports = router;
