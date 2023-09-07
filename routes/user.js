const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { ensureAuthenticated } = require("../middleware/auth");

// GET /v1/user
router.get("/", ensureAuthenticated, userController.getAllUsers);

// GET /v1/user/:username
router.get("/:username", ensureAuthenticated, userController.getUserByUsername);

module.exports = router;
