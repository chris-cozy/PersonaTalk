// conversationController.js
const Conversation = require("../models/conversation");

// Controller function to get conversation history
exports.getConversationHistory = (req, res) => {
  // Assuming you have a method to retrieve conversation history from the database
  Conversation.find()
    .then((conversation) => {
      res.status(200).json(conversation);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error retrieving conversation history" });
    });
};
