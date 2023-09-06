const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// GET /v1/conversation/:username/:agent_name
router.get("/", conversationController.getConversation);

// Add more routes as needed for conversation-related operations

module.exports = router;
