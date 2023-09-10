const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

// GET /v1/user
router.get(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  userController.getAllUsers
);

// GET /v1/user/:username
router.get(
  "/:username",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  userController.getUserByUsername
);

module.exports = router;
