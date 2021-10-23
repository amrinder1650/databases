var db = require('../db');
var Sequelize = require('sequelize');

var User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = User;