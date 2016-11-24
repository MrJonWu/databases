var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
//server/db/index.js uses the mysql npm module to connect to the database server running on your computer

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat4'
});

connection.connect();

module.exports = connection;

