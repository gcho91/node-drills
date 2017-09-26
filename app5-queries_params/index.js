var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());

// app.get('/data', function(req, res, next) {
// 	// console.log(data);
// 	res.status(200).json(data);
// });

//vvvvvvvWHATTTTT?????VVVVV//
app.get('/data', function(req, res, next) {
	var query = Object.keys(req.query)[0];
	data = req.query[query] ? data.filter(function(elem) {
		return elem[query] === req.query[query]
	}) : data;
	res.status(200).json(data);
})


//create an endpoint to get one item by index/id
//use req.params

app.get('/data/:id', function(req, res, next) {
	console.log('params :', req.params.id)
	res.status(200).json(data[req.params.id])

})

//below example of how to do params if not indexing//
// app.get('/data/:sex', function(req, res, next) {
// 	// console.log('params :', req.params.id)
// 	res.status(200).json(data.filter(x => x.sex === req.params.sex ))
// })



app.post('/job', function(req, res, next) {
	// console.log(req.body);
	data.push(req.body);
	res.status(200).json(data);
});




app.delete('/data/:id', function(req, res, next) {
	// console.log(req.body);
	data.splice(req.params.id, 1),
	res.status(200).json(data);
})



app.listen(port, function() {
	console.log('Listening on port',port);
})
