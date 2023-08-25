const mongoose = require("../config/database");
const responseSchema = require("./response"); // Import the Response schema

const conversationSchema = new mongoose.Schema({
  messages: [responseSchema], // Use an array of Response schema objects
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
