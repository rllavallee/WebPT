var express = require('express');
var app = express();
const PORT = 3000;

//app.get('/', function (req, res) {
//	res.send('heelo express!');
//});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started');
});
