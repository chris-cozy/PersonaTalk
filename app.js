const express = require("express");
const app = express();
app.use(express.json());

// Import route files
const agentRoutes = require("./routes/agent");
const userRoutes = require("./routes/user");
const conversationRoutes = require("./routes/conversation");
const chatRoutes = require("./routes/chat");

// Mount routers onto specific paths
app.use("/v1/agent", agentRoutes);
app.use("/v1/user", userRoutes);
app.use("/v1/conversation", conversationRoutes);
app.use("/v1/chat", chatRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
