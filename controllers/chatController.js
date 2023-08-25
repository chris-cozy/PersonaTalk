// chatController.js
const OpenAI = require("openai"); // Assuming you're using OpenAI API
const Response = require("../models/conversation");

// Controller function to generate a chat response
exports.generateChatResponse = (req, res) => {
  const { message } = req.body;

  // Assuming you have an OpenAI API key and setup
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Assuming you have a conversation history setup
  const conversationHistory = ["User: Hi there!", "Agent: Hello!"];

  // Combine message with conversation history
  const conversation = [...conversationHistory, `User: ${message}`];

  // Call OpenAI API to generate response
  openai
    .complete({
      prompt: conversation.join("\n"),
      max_tokens: 50, // Adjust as needed
    })
    .then((response) => {
      // Save the response to the database
      const newResponse = new Response({
        initial_message: message,
        message_reply: response.choices[0].text,
        timestamp: new Date(),
      });

      newResponse
        .save()
        .then((savedResponse) => {
          res.status(200).json(savedResponse);
        })
        .catch((err) => {
          res.status(500).json({ message: "Error saving response" });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error generating response" });
    });
};
