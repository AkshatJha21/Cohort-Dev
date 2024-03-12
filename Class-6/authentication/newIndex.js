const jwt = require('jsonwebtoken');

const value = {
    name: 'akshat',
    accountNumber: 123123123
}

const token = jwt.sign(value, "secret");
console.log(token);

const verified = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWtzaGF0IiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTAyNTI0NDd9.-DYGVGzdQUfLs_zLLHzsVynk2ORLpZVwe2YoEuCLAXg", "secret");
console.log(verified);