const chatService = require("../services/chatService");
const User = require("../models/user");
const Agent = require("../models/agent");

// Create a response for the given message using conversation history
async function generateChatResponse(req, res) {
  const { username, agent_name, message } = req.body;

  try {
    const user = await User.findOne({ username: username });
    const agent = await Agent.findOne({ agent_name: agent_name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    const response = await chatService.generateResponse(
      username,
      agent_name,
      message
    );
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  generateChatResponse,
};
