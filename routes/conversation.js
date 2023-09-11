const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationController");
const { ensureAuthenticated, checkRole } = require("../middleware/auth");

// GET /v1/conversation/:username/:agent_name
router.get(
  "/",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.getConversation
);

router.delete(
  "/",
  ensureAuthenticated,
  checkRole(["user", "developer", "admin"]),
  conversationController.dweleteConversation
);

module.exports = router;
