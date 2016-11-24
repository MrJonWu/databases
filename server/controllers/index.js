//server/controllers/index.js defines the messages and users controllers that your application will use.
var models = require('../models');
var connection = require('../db/index');

module.exports = {
  messages: {
    get: function (req, res) {
      req.on('data', function(err, data) {
        console.log(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var test = {
        username: req.body.username,
        message: req.body.message,
        roomname: req.body.roomname
      };
      connection.query('INSERT INTO messages SET texty = ?', test.message, function(error) {
        if (error){
          console.log(error.message);
        } else {
          console.log('successful post');
          console.log(test.message);
          res.writeHead(201, 'success');
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      req.on('data', function(err, data) {
        console.log(data);
      });
    },
    post: function (req, res) {
      console.log('yeyey', req.body);
      var test = req.body.username;
      console.log(test);
      connection.query('INSERT INTO users SET name = ?', test, function(error) {
        if (error) {
          console.log(error.message);
        } else {
          console.log('success');
          res.writeHead(201, 'success');
          res.end();
        }
      })
      // connection.query('', function(err, rows) {
      //   console.log(rows);
      // });
    }
  }
};

