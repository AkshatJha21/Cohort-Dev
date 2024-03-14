const jwt = require("jsonwebtoken");
const jwtKey = "secret";
const zod = require("zod");

const schema = zod.object({
    username: zod.string().email({ message: "Invalid email" }),
    password: zod.string().min(6, { message: "Must be 6 or more characters." })
});

function signJwt(username, password) {
    const checkedUsername = schema.safeParse(username);
    const checkedPassword = schema.safeParse(password);

    const data = {
        checkedUsername,
        checkedPassword
    };

    const token = jwt.sign(data, jwtKey);

    return token;
}

function verifyJwt(token) {
    const verified = jwt.verify(token, jwtKey);
    
    return verified;
}

function decodeJwt(token) {
    
}