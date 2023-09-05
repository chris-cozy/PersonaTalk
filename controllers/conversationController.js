// Import any required modules or models
const Conversation = require("../models/conversation");

// Get the entire conversation between a user and an agent
async function getConversation(req, res) {
  const username = req.params.username;
  const agentName = req.params.agent_name;
  try {
    const conversation = await Conversation.find({
      username: username,
      agent_name: agentName,
    });
    if (!conversation || conversation.length === 0) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.status(200).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Implement other conversation-related controller functions as needed

module.exports = {
  getConversation,
};
