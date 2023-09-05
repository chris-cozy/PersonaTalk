const mongoose = require("../config/database");

const agentSchema = new mongoose.Schema({
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
