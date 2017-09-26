var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data.js');

var port = 3000;

var app = express();
app.use(bodyParser.json());


app.get('/data', function(req, res, next) {
  // console.log(data)
  res.status(200).json(data);
})

app.post('/data', function(req, res, next) {
  // console.log(req.body)
  data.push(req.body);
  res.status(200).json(data);
})


app.listen(port, function() {
  console.log(`Listening on Port ${port}!!!`)
})
