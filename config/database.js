const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env

// Get the MongoDB connection string from environment variables
const mongoURI = process.env.MONGO_URI;

// Set up options for the mongoose connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// Connect to MongoDB
mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
