var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, rows) => {
        if (err) {
          res.writeHead(404);
          res.end(err);
        } else {
          console.log(rows);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(rows);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = '';
      request.on('data', chunk => {
        body += chunk.toString();
      });
      request.on('end', () => {
        var message = JSON.parse(body);
        //push message to messages sql table
        response.writeHead(201, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(
          //get all messages from messages sql table
          // using models
        ));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

