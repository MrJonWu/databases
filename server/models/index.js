//server/models/index.js defines the messages and users models that your application will use.
var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('yo');
    }, // a function which produces all the messages
    post: function () {
      console.log('yo post', request, response, data);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      console.log('yo post', request, response, data);
    }
  }
};

