const express = require("express");

const app = express();

function isOld(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

function isOldMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Not old enough to ride"
        })
    }
}

// ORDER MATTERS

app.use(isOldMiddleware);

app.get('/ride2', (req, res) => {
    res.status(200).json({
        msg: "You have been on ride 2"
    })
});

app.get('/ride1', (req, res) => {
    res.status(200).json({
        msg: "You have been on ride 1"
    });
        
});

app.listen(3000);