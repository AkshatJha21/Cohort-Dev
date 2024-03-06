const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
    })
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('todos.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const jsonData = JSON.parse(data);
        if (id < 0 || id >= jsonData.length) {
            res.status(404).send('Todo not found (id is out of range)');
        }
        const todo = jsonData[id];
        res.status(200).json(todo);
    })
});

app.post('/todos', (req, res) => {
    const body = req.body;

    fs.readFile('todos.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let todoList = JSON.parse(data);
        todoList.push(body);

        const todo = JSON.stringify(todoList);

        fs.writeFile('todos.json', todo, (err) => {
            if(err) {
                console.log(err);
                return;
            }
            res.status(200).send('Todo added');
        })
    });

});

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
});