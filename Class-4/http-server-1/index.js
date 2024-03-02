const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', function (req, res) {
    console.log(req.body);
    res.send("Hello world");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});