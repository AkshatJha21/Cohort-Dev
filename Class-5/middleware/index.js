const express = require('express');

const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != 'akshat' || password != 'passkey1') {
        res.status(400).json({
            msg: "Incorrect headers"
        });
        return;
    }
    
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Invalid params"
        });
        return;
    }

    res.json({
        msg: "Health OK"
    });
});

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port);
});