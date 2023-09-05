const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// GET /v1/agent
router.get("/", agentController.getAllAgents);

// GET /v1/agent/:agent_name
router.get("/:agent_name", agentController.getAgentByName);

// Add more routes as needed for agent-related operations

module.exports = router;
