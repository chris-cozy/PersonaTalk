const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const { ensureAuthenticated } = require("../middleware/auth");

// POST /v1/chat/completion
router.post(
  "/completion",
  ensureAuthenticated,
  chatController.generateChatResponse
);

// Add more routes as needed for chat-related operations

module.exports = router;
