const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// GET /v1/agent
router.get("/", agentController.getAllAgents);

// GET /v1/agent/:agent_name
router.get("/:agent_name", agentController.getAgentByName);

// POST /v1/agent (Create a new agent)
router.post("/", agentController.createAgent);

module.exports = router;
