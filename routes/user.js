const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET /v1/user
router.get("/", userController.getAllUsers);

// GET /v1/user/:username
router.get("/:username", userController.getUserByUsername);

// Add more routes as needed for user-related operations

module.exports = router;
