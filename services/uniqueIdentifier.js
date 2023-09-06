const { v4: uuidv4 } = require("uuid");

function generateUniqueId() {
  return uuidv4();
}

module.exports = {
  generateUniqueId,
};
