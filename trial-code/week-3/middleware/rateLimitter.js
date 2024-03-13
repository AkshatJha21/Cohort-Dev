const express = require("express");

const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

function rateLimitter(req, res, next) {
    const userId = req.headers["user-id"];

    if (numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] += 1;
        if (numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("Too many requests");
        } else {
            next();
        }
    } else {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
}

app.use(rateLimitter);

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'John' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
})

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
});