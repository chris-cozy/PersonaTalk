const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET /v1/user
router.get("/", userController.getAllUsers);

// GET /v1/user/:username
router.get("/:username", userController.getUserByUsername);

// POST /v1/user (Create a new user)
router.post("/", userController.createUser);

module.exports = router;
