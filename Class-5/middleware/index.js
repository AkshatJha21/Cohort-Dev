const express = require('express');

const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
    if (req.headers.username != 'akshat' || req.headers.password != 'passkey1') {
        res.status(403).json({
            msg: "Incorrect headers"
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    if (req.query.kidneyId != 1 && req.query.kidneyId != 2) {
        res.status(400).json({
            msg: "Invalid params"
        });
    } else {
        next();
    }
}

app.use(userMiddleware);
app.use(kidneyMiddleware);

app.get("/health-checkup", (req, res) => {
    res.json({
        msg: "Health OK"
    });
});

//GLOBAL CATCHES
app.use(function(err, req, res, next) {
    res.status(500).send('Internal Server Error');
});

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port);
});