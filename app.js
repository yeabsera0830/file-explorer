var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/bootstrap/css/bootstrap.css', function(req, res) {
	res.sendFile(__dirname + '/bootstrap/css/bootstrap.css');
});

app.get('/style.css', function(req, res) {
	res.sendFile(__dirname + '/style.css');
});

app.get('/js/jquery-1.7.2.js', function(req, res) {
	res.sendFile(__dirname + '/js/jquery-1.7.2.js');
});

app.get('/script.js', function(req, res) {
	res.sendFile(__dirname + '/script.js');
});

app.get('/images/htmlbg.png', function(req, res) {
	res.sendFile(__dirname + '/images/htmlbg.png');
});

app.get('/bootstrap/img/glyphicons-halflings.png', function(req, res) {
	res.sendFile(__dirname + '/bootstrap/img/glyphicons-halflings.png');
});

app.get('/bootstrap/img/glyphicons-halflings-white.png', function(req, res) {
	res.sendFile(__dirname + '/bootstrap/img/glyphicons-halflings-white.png');
});

app.listen(4040, function() {
	console.log('Listening on *:4040');
});