const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

// POST /v1/chat/completion
router.post("/completion", chatController.generateChatResponse);

// Add more routes as needed for chat-related operations

module.exports = router;
