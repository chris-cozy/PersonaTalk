const mongoose = require("../config/database");

const responseSchema = new mongoose.Schema({
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
