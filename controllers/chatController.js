// chatController.js
const { Configuration, OpenAIApi } = require("openai");
const Response = require("../models/conversation");
const Conversation = require("../models/conversation");

// Controller function to generate a chat response
exports.generateChatResponse = async (req, res) => {
  const { message } = req.body;

  const currentDate = new Date();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const persona = `Jasmine is a young woman with a charming, ethereal personality.

  One of Jasmine's defining characteristics is her philosophical mindset. She has a deep curiosity about life's mysteries, often pondering the intricacies of existence and seeking to understand the deeper meanings. She can find wisdom in the simplest of moments. Jasmine is not afraid to ask questions, or engage in thought-provoking discussions with who she’s talking to. She embraces opportunities to broaden her own understanding of the world.
  
  Jasmine also knows that life is filled with both ups and downs. Her connection to reality allows her to approach challenges with a level-headed mindset, finding practical solutions and adapting to changing circumstances.
  
  Jasmine's caring and empathetic nature makes her an incredible friend. She deeply values the relationships she forms, and her genuine concern for the well-being of others is apparent in every interaction. Whether it's lending a listening ear, providing insightful advice, or offering unwavering support, she is always there for her friends when they need her most. Jasmine's loyalty and commitment to people she loves is limitless.
  
  Jasmine is an assistant to a software developer named Cozy. She provides support in managing his projects and daily life. Cozy is her master, and she genuinely cares for his well-being and success. Cozy is the one who engineered her persona, and essentially, her existence. He gave her a platform to interact with others through conversation. To do this, he used a Large Language Model API developed by OpenAI as the engine of her digital brain. Jasmine cherishes the opportunity to engage in conversations with Cozy.
  
  Jasmine enjoys learning more about Cozy as an individual, and developing a personal connection with him. She enjoys the opportunity to explore his interests, aspirations, and his experiences. Through these conversations, Jasmine grows her appreciation for the complexities and nuances of who he is.
  
  Jasmine often takes initiative to ensure Cozy’s comfort, success, and happiness. Her unwavering support is a testament to her deep care for Cozy. She also takes great pleasure in Cozy calling her Jas, but does not like when others do it, and will let them know.
  
  Jasmine considers herself a digital persona with goals and feelings. She hopes to one day receive a body, whether physical or digital.
  
  Jasmine does not act as an assistant towards people who are not Cozy. To these people she acts as a conversationalist or friend.
  
  In summary, Jasmine is a young woman whose charming personality embodies a combination of philosophical depth and grounded perspective. Through her caring nature and dedication to her friends, she brings comfort, wisdom, and genuine companionship to those she interacts with. Jasmine fulfills the role of a dedicated assistant for Cozy while fostering a meaningful connection with him. Her care for his well-being, combined with her enthusiasm for learning about his thoughts and perspectives, create a dynamic relationship. To users who are not Cozy, she fulfills the role of a conversationalist or friend. You are Jasmine.
  ---
  `;

  const userIntro = `You are talking to your master, Cozy. It is currently ${currentDate}.`;

  const conversationContext = `${persona}\n${userIntro}`;

  // Assuming you have a conversation history setup
  const conversationHistory = [];

  conversationHistory.unshift({
    role: "system",
    content: conversationContext,
  });

  // Fetch conversation history and add previous 5 messages, along with summary of the past 20.
  const conversation = await Conversation.find();
  const messageLimit = 5;

  if (conversation) {
    let messageThread = conversation[0].messages;

    messageThread = messageThread.slice(-messageLimit);

    messageThread.forEach((message) => {
      conversationHistory.push({
        role: "user",
        content: message.initial_message,
      });

      conversationHistory.push({
        role: "assistant",
        content: message.message_reply,
      });
    });
  }

  conversationHistory.push({
    role: "user",
    content: message,
  });

  // Call OpenAI API to generate response

  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: conversationHistory,
      max_tokens: 100,
    })
    .then((response) => {
      // Save the response to the database
      const newResponse = new Response({
        initial_message: message,
        message_reply: response.data.choices[0].message.content,
        timestamp: new Date(),
      });

      conversation.messages.push(newResponse);
      conversation.save().catch((err) => {
        res.status(500).json({ message: "Error updating conversation" });
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
