const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/register",
  checkRole(["user", "developer", "admin"]),
  authController.registerUser
);

router.post(
  "/login",
  checkRole(["user", "developer", "admin"]),
  passport.authenticate("local"),
  (req, res) => {
    res.json({ message: "Login successful" });
  }
);

router.get("/logout", checkRole(["user", "developer", "admin"]), (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.json({ message: "Logout successful" });
    }
  });
});

router.get(
  "/current",
  checkRole(["user", "developer", "admin"]),
  authController.getCurrentUser
);

module.exports = router;
