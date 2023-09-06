const mongoose = require("../config/database");
const Response = require("./response");
const uniqueIdentifier = require("../services/uniqueIdentifier");

const conversationSchema = new mongoose.Schema({
  conversation_id: {
    type: String,
    required: false,
    default: uniqueIdentifier.generateUniqueId(),
  },
  username: {
    type: String,
    required: true,
  },
  agent_name: {
    type: String,
    required: true,
  },
  messages: { type: [Response.schema], default: [] },
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
