const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// Define routes related to agents
router.get("/", agentController.getAgentInformation);

module.exports = router;
