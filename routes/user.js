const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes related to agents
router.get("/", userController.getUsersInformation);

module.exports = router;
