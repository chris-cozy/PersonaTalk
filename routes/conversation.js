const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");
const { ensureAuthenticated } = require("../middleware/auth");

// GET /v1/conversation/:username/:agent_name
router.get("/", ensureAuthenticated, conversationController.getConversation);

// Add more routes as needed for conversation-related operations

module.exports = router;
