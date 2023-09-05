const chatService = require("../services/chatService");

// Create a response for the given message using conversation history
async function generateChatResponse(req, res) {
  const { username, agent_name, message } = req.body;
  try {
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
