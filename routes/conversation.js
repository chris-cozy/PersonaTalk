const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");

// Define routes related to conversation
router.get("/", conversationController.getConversationHistory);

module.exports = router;
