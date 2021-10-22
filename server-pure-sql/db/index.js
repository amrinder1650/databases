var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = db;



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


