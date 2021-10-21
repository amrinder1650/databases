var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM MESSAGES', function (err, rows) {
        callback(err, JSON.stringify(rows));
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var message = JSON.parse(message);
      var queryString = `insert into messages (message, roomname, userid) values ('${message.message}', '${message.roomname}', (select users.id from users where users.username = '${message.username}'));`;
      db.query(queryString, () => {
        db.query('SELECT * FROM MESSAGES', function (err, rows) {
          callback(err, JSON.stringify(rows));
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM USERS', function (err, rows) {
        callback(err, JSON.stringify(rows));
      });
    },
    post: function (message, callback) {
      var message = JSON.parse(message);
      var queryString = `insert ignore into users (username) values ('${message.username}');`;
      db.query(queryString, () => {
        db.query('SELECT * FROM USERS', function (err, rows) {
          callback(err, JSON.stringify(rows));
        });
      });
    }
  }
};

