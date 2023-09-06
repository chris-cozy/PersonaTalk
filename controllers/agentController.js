// Import any required modules or models
const Agent = require("../models/agent");

// Get all agents' information
async function getAllAgents(req, res) {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get specified agent's information by name
async function getAgentByName(req, res) {
  const agentName = req.params.agent_name;
  try {
    const agent = await Agent.findOne({ agent_name: agentName });
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    res.status(200).json(agent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Create a new agent
async function createAgent(req, res) {
  const { agent_name, description, persona } = req.body;

  try {
    const agent = new Agent({ agent_name, description, persona });
    await agent.save();
    res.status(201).json(agent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllAgents,
  getAgentByName,
  createAgent,
};
