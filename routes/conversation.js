const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

// GET /v1/conversation
router.get(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  conversationController.getAllConversations
);

// DELETE /v1/conversation
router.delete(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  conversationController.deleteAllConversations
);

// GET /v1/conversation/:username
router.get(
  "/:username",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.getUsersConversations
);

// DELETE /v1/conversation/:username
router.delete(
  "/:username",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.deleteUsersConversations
);

// GET /v1/conversation/:username/:agent_name
router.get(
  "/:username/:agent_name",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.getSpecificConversation
);

// DELETE /v1/conversation/:username/:agent_name
router.delete(
  "/:username/:agent_name",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.deleteSpecificConversation
);

module.exports = router;
