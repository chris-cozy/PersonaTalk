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

// DELETE /v1/user (Delete all users)
router.delete(
  "/",
  ensureAuthenticated,
  checkRole(["developer, admin"]),
  userController.deleteAllUsers
);

// GET /v1/user/:username
router.get(
  "/:username",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  userController.getUserByUsername
);

// DELETE /v1/user/:username (Delete a single user by name)
router.delete(
  "/:username",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  agentController.deleteUserByName
);

module.exports = router;
