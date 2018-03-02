const generateMsg = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date()
  };
};

module.exports = { generateMsg };
