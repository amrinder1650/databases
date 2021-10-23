var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  define: {
    timestamps: false
  }
});

module.exports = db;