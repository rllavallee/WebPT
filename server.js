var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 3000;

var todoNextId = 1;

app.use(bodyParser.json());

var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
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
app.get('/todos/:id', function (req, res) {
	
	var todoId = parseInt(req.params.id);
	var matchedTodo;

	todos.forEach(function (todo) {

		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	})

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function (req, res) {
	var id = req.query.id;
	console.log('id: '+id)
	//var params = req.params();
	//console.log(req.body.name);
   //res.json(todos);
   //console.log(req);
   var body = req.body;
   console.log('body: ' + body);
   console.log('description: ' + body.description);
   res.json(body);
});


app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started!');
});
