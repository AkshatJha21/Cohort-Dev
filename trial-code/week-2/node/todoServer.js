const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

var todos = [
    {
        title: "Do task 1",
        description: "Complete task 1 before 6pm",
        completed: true
    },
    {
        title: "Do task 2",
        description: "Do not complete immediately",
        completed: false
    }
];

function newTodo(title, description, completed) {
    todos.push({title, description, completed});
};

function updateTodo(id, title, desc, status) {
    if (id >= 0 && id < todos.length) {
        todos[id].title = title;
        todos[id].description = desc;
        todos[id].completed = status;
    } else {
        console.log('Invalid index');
    }
}

function deleteTodo(id) {
    todos.pop(id);
}

app.get('/todos', function(req, res) {
    res.json(todos).status(200);
});

app.get('/todos/:id', function(req, res) {
    const id = req.params.id;
    if (id < 0 || id >= todos.length) {
        res.status(404).send('Todo not found (id is out of range)');
    }
    const todoById = todos[id];
    res.status(200).json(todoById);
});

app.post('/todos', (req, res) => {
    const body = req.body;
    newTodo(body.title, body.description, body.completed);
    const newTodoId = todos.length - 1;
    res.status(201).send(`Created with id: ${newTodoId}`);
});

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if (id < 0 || id >= todos.length) {
        res.status(404).send('Todo not found (id is out of range)');
    }
    updateTodo(id, body.title, body.description, body.completed);
    res.status(200).send('Todo found and updated');
});

app.delete('/todos/:id', function(req, res) {
    const id = req.params.id;
    if (id < 0 || id >= todos.length) {
        res.status(404).send('Todo not found (id is out of range)');
    }
    deleteTodo(id);
    res.status(200).send("Deleted successfully");
});

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
});