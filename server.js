var express = require('express');
var app = express();
const PORT = 3000;

var todos = [{
	id: 1,
	description: 'Meet mom for lucnh',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Feed the cat',
	completed: true
}];

// GET /todos
app.get('/todos', function (req, res) {
   res.json(todos);
});

// GET /todos/:id

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started!');
});
