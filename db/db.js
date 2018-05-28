const mysql = require('mysql');

exports.con = mysql.creactConnection({
  'host': 'localhost',
  'user': 'student',
  'password': 'student'
})