var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, rows) => {
        if (err) {
          res.writeHead(404);
          res.end(err);
        } else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(rows);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, rows) => {
        if (err) {
          res.writeHead(404);
          res.end(err);
        } else {
          res.writeHead(201, {'Content-Type': 'application/json'});
          res.end(rows);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, rows) => {
        if (err) {
          res.writeHead(404);
          res.end(err);
        } else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(rows);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err, rows) => {
        if (err) {
          res.writeHead(404);
          res.end(err);
        } else {
          res.writeHead(201, {'Content-Type': 'application/json'});
          res.end(rows);
        }
      });
    }
  }
};

