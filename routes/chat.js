const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

// POST /v1/chat/completion
router.post(
  "/completion",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  chatController.generateChatResponse
);

// Add more routes as needed for chat-related operations

module.exports = router;
