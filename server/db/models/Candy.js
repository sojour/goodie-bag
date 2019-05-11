const Sequelize = require('sequelize');
const db = require('../database');

const Candies = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://target.scene7.com/is/image/Target/GUEST_4662b911-9f99-48ec-a2af-79c6855bb3d2?wid=488&hei=488&fmt=pjpeg'
  }
});

module.exports = Candies
