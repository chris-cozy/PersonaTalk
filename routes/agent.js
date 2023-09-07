const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");
const { ensureAuthenticated } = require("../middleware/auth");

// GET /v1/agent
router.get("/", ensureAuthenticated, agentController.getAllAgents);

// GET /v1/agent/:agent_name
router.get("/:agent_name", ensureAuthenticated, agentController.getAgentByName);

// POST /v1/agent (Create a new agent)
router.post("/", ensureAuthenticated, agentController.createAgent);

module.exports = router;
