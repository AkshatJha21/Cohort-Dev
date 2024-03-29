const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Authorization: Bearer eYwewqer.qwrwqe.rwq.erwq.erqw
    const tokenArray = token.split(" ");
    const jwtToken = tokenArray[1];

    const decodedToken = jwt.verify(jwtToken, JWT_SECRET);

    if (decodedToken.username) {
        req.username = decodedToken.username;
        next();
    } else {
        res.status(403).json({
            message: "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;