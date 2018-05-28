const db = require('../db/db.js');

module.exports = {
  watched: function(callback) {
    const query = 'SELECT movie FROM movies WHERE added = true;'

    db.query(query, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }

    })
  }   
}