const mongoose = require("../config/database");
const uniqueIdentifier = require("../services/uniqueIdentifier");

const responseSchema = new mongoose.Schema({
  response_id: {
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
  initial_message: {
    type: String,
    required: true,
  },
  message_reply: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
