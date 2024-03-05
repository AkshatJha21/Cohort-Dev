const express = require("express");

const app = express();
const port = 3000;

var todos = [
    {
        title: "Do task 1",
        description: "Complete task 1 before 6pm"
    },
];

function newTodo(title, description) {
    todos.push({title, description});
};

app.get('/todos', function(req, res) {
    res.json(todos).status(200);
});

app.get('/todos/:id', function(req, res) {
    const id = req.params.id;
    if (id < 0 || id >= todos.length) {
        res.send('Todo not found (id is out of range)').status(404);
    }
    const todoById = todos[id];
    res.json(todoById).status(200);
});

newTodo("Make food", "Finish before 10pm");

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
});