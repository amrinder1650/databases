var db = require('../db');
var Sequelize = require('sequelize');

var Message = db.define('Message', {
  userid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = Message;