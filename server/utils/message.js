const uuidv4 = require("uuid/v4");

const generateMsg = (from, text) => {
  return {
    msgId: uuidv4(),
    from,
    text,
    createdAt: new Date()
  };
};

module.exports = { generateMsg };
