const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

// GET /v1/agent
router.get(
  "/",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  agentController.getAllAgents
);

// GET /v1/agent/:agent_name
router.get(
  "/:agent_name",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  agentController.getAgentByName
);

// POST /v1/agent (Create a new agent)
router.post(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  agentController.createAgent
);

module.exports = router;
