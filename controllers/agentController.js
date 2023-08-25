// agentController.js
const Agent = require("../models/agent");

// Controller function to get agent information
exports.getAgentInformation = (req, res) => {
  // Assuming you have a method to retrieve agent data from the database
  Agent.findOne({
    /* query parameters */
  })
    .then((agent) => {
      if (!agent) {
        return res.status(404).json({ message: "Agent not found" });
      }
      res.status(200).json(agent);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving agent information" });
    });
};
