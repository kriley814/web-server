var express = require('express');
var app = express();

var PORT = process.env.port || 3000;

var middleware = require('./middleware.js');


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

// Tell Express want to expose entire folder
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});
