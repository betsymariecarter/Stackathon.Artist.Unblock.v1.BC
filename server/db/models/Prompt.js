const Sequelize = require("sequelize");
const db = require("../db");

const Prompt = db.define("prompt", {
  shortPrompt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("practice", "creative", "doodle", "other"),
    allowNull: false,
  },
  expandedPrompt: {
    type: Sequelize.TEXT,
  },
});

module.exports = Prompt;
