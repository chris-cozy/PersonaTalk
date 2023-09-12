const mongoose = require("../config/database");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  display_name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "developer", "admin"],
    default: "user",
  },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
