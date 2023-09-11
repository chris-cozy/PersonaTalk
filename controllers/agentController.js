// Import any required modules or models
const Agent = require("../models/agent");

// Get all agents' information
async function getAllAgents(req, res) {
  try {
    const agents = await Agent.find();
    if (agents.length() > 0) {
      res.status(200).json(agents);
    } else {
      res.status(404).json({ message: "Agent(s) not found" });
    }
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

// Delete all agents
async function deleteAllAgents(req, res) {
  try {
    await Agent.deleteMany({}); // Delete all agents in the database
    res.status(204).json({ message: "All agents deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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

async function deleteAgentByName(req, res) {
  try {
    const agentName = req.params.agent_name;
    const deletedAgent = await Agent.findOneAndDelete({
      agent_name: agentName,
    });

    if (deletedAgent) {
      res.status(204).json({ message: "Agent deleted successfully" });
    } else {
      res.status(404).json({ message: "Agent not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllAgents,
  getAgentByName,
  createAgent,
  deleteAllAgents,
  deleteAgentByName,
};
