const express = require("express");
const session = require("express-session");
const uniqueIdentifier = require("./services/uniqueIdentifier");
const passport = require("passport");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: true }));

require("dotenv").config();

// Initialize Passport.js and session middleware
app.use(
  session({
    secret: uniqueIdentifier.generateSecretKey(32),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Include the Passport local configuration
require("./middleware/passport-local");

// Import route files
const agentRoutes = require("./routes/agent");
const userRoutes = require("./routes/user");
const conversationRoutes = require("./routes/conversation");
const chatRoutes = require("./routes/chat");
const authRoutes = require("./routes/auth");

// Mount routers onto specific paths
app.use("/v1/agent", agentRoutes);
app.use("/v1/user", userRoutes);
app.use("/v1/conversation", conversationRoutes);
app.use("/v1/chat", chatRoutes);
app.use("/v1/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
