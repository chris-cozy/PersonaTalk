// Import any required modules or models
const Conversation = require("../models/conversation");

// Get all conversations
async function getAllConversations(req, res) {
  try {
    const conversations = await Conversation.find();
    if (conversations.length > 0) {
      res.status(200).json(conversations);
    } else {
      return res.status(404).json({ message: "No conversations found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Delete all conversations
async function deleteAllConversations(req, res) {
  try {
    await Conversation.deleteMany({});
    res.status(204).json({ message: "All conversations deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get all of a user's conversations
async function getUsersConversations(req, res) {
  const username = req.params.username;
  try {
    const conversations = await Conversation.find({
      username: username,
    });
    if (conversations.length > 0) {
      res.status(200).json(conversations);
    } else {
      return res.status(404).json({ message: "No conversations found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteUsersConversations(req, res) {
  const username = req.params.username;
  try {
    const deletedConversations = await Conversation.deleteMany({
      username: username,
    });
    if (!deletedConversations) {
      return res.status(404).json({ message: "No conversations found" });
    }
    res.status(204).json({ message: "Conversations successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get the entire conversation between a user and an agent
async function getSpecificConversation(req, res) {
  const username = req.params.username;
  const agentName = req.params.agent_name;
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

async function deleteSpecificConversation(req, res) {
  const username = req.params.username;
  const agentName = req.params.agent_name;
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
  getAllConversations,
  deleteAllConversations,
  getUsersConversations,
  deleteUsersConversations,
  getSpecificConversation,
  deleteSpecificConversation,
};
