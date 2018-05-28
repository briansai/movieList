const models = require('models');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000);

app.get('/search', function(req, res) {
  console.log(req.body);

  // const query = 'SELECT movie FROM movies WHERE movie = ' + req.body
  // db.query(req.body, function(err, result) {
  //   if (err) {
  //     res.sendStatus(500)
  //   };
  //   if (null, result) {
  //     res.sendStatus(200).json({result: result});
  //   }
  // })
})