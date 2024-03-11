const express = require("express");

const app = express();
const port = 3000;

let requestCount = 0;

function requestCounter(req, res, next) {
    requestCount += 1;
    next();
}

app.use(requestCounter);

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});
  
app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});
  
app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestCount });
});

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port);
});