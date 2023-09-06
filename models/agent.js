const mongoose = require("../config/database");
const uniqueIdentifier = require("../services/uniqueIdentifier");

const agentSchema = new mongoose.Schema({
  agent_id: {
    type: String,
    required: false,
    default: uniqueIdentifier.generateUniqueId(),
  },
  agent_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  persona: {
    type: String,
    required: true,
  },
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
