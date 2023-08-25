const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

// Define routes related to chat
router.post("/completion", chatController.generateChatResponse);

module.exports = router;
