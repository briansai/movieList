const db = require('../db/db.js');

module.exports = {
  get: db.query   
}