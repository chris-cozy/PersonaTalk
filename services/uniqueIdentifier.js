const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

function generateUniqueId() {
  return uuidv4();
}

function generateSecretKey(length) {
  return crypto.randomBytes(length).toString("hex");
}

module.exports = {
  generateUniqueId,
  generateSecretKey,
};
