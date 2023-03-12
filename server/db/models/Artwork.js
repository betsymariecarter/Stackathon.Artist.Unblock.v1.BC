const Sequelize = require('sequelize')
const db = require('../db')

const Artwork = db.define('artwork', {
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: "Untitled"
  },
  description: {
    type: Sequelize.TEXT,
  },
  medium: {
    type: Sequelize.STRING,
  },
})

module.exports = Artwork