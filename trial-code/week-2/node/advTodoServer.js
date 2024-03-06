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

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
});