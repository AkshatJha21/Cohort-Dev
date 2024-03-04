const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const filePath = './files/';

function listFiles(path) {
    const files = fs.readdirSync(path);
    return files;
}

app.get('/files', function(req, res) {
    const files = listFiles(filePath);
    res.json({files}).status(200);
});

app.get('/files/:filename', function(req, res) {
    const filename = req.params.filename;
    let dir = filePath + filename
    fs.readFile(dir, "utf-8", function(err, data) {
        if (err) {
            res.status(404).send('File not found');
        }
        res.send(data).status(200);
    });
});

app.get('*', function(req, res) {
    res.status(404).send('404 - Not Found')
});

app.listen(port, function(req, res) {
    console.log("Listening on port " + port);
});