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

// POST /v1/agent (Create a new agent)
router.post(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  agentController.createAgent
);

// DELETE /v1/agent (Delete all agents)
router.delete(
  "/",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  agentController.deleteAllAgents
);

// GET /v1/agent/:agent_name
router.get(
  "/:agent_name",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  agentController.getAgentByName
);

// DELETE /v1/agent/:agent_name (Delete a single agent by name)
router.delete(
  "/:agent_name",
  ensureAuthenticated,
  checkRole(["developer", "admin"]),
  agentController.deleteAgentByName
);

module.exports = router;
