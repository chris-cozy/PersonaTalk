const mongoose = require("../config/database");
const responseSchema = require("./response"); // Import the Response schema

const conversationSchema = new mongoose.Schema({
  conversation_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  agent_name: {
    type: String,
    required: true,
  },
  messages: [responseSchema], // Use an array of Response schema objects
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
