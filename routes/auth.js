const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.registerUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Login successful" });
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.json({ message: "Logout successful" });
    }
  });
});

router.get("/current", authController.getCurrentUser);

module.exports = router;
