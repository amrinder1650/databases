var User = require('../models/User');
var Message = require('../models/Message');
var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      Message.sync()
        .then(() => {
          return Message.findAll();
        }).then((messages) => {
          messages = JSON.stringify(messages);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(messages);
        }).catch(function(err) {
          console.error(err);
        });
    },
    post: function (req, res) {
      Message.sync()
        .then(() => {
          return User.findAll({ where: {username: req.body.username} });
        }).then((userID) => {
          let id = userID[0].dataValues.id;
          return Message.create({
            message: req.body.message,
            roomname: req.body.roomname,
            userid: id
          });
        }).then(() => {
          return Message.findAll();
        }).then((messages) => {
          messages = JSON.stringify(messages);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(messages);
        }).catch(function(err) {
          console.error(err);
        });
    }
  },

  users: {
    get: function (req, res) {
      User.sync()
        .then(() => {
          return User.findAll();
        }).then((users) => {
          users = JSON.stringify(users);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(users);
        }).catch(function(err) {
          console.error(err);
        });
    },
    post: function (req, res) {
      User.sync()
        .then(() => {
          return User.create({
            username: req.body.username
          });
        }).then(() => {
          return User.findAll();
        }).then((users) => {
          users = JSON.stringify(users);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(users);
        }).catch(function(err) {
          console.error(err);
        });
    }
  }
};

