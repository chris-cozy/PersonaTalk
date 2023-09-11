// Import any required modules or models
const Conversation = require("../models/conversation");

// Get the entire conversation between a user and an agent
async function getConversation(req, res) {
  const username = req.body.username;
  const agentName = req.body.agent_name;
  try {
    const conversation = await Conversation.findOne({
      username: username,
      agent_name: agentName,
    });
    if (!conversation || conversation.messages.length === 0) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.status(200).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteConversation(req, res) {
  const username = req.body.username;
  const agentName = req.body.agent_name;
  try {
    const deletedConversation = await Conversation.findOneAndDelete({
      username: username,
      agent_name: agentName,
    });
    if (!deletedConversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.status(204).json({ message: "Conversation successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Implement other conversation-related controller functions as needed

module.exports = {
  getConversation,
  deleteConversation,
};
