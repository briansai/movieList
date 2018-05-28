const models = require('models');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000);

app.get('/search', function(req, res) {
  console.log(req.body);
  
  models.watched(req.body, function(err, result) {
    if (err) {
      res.set(headers);
      res.sendStatus(404)
    } 

    console.log(result);

    // if (null, result) {
    //   res.set(headers);
    //   res.sendStatus(200).json(result);
    // }
  })
})