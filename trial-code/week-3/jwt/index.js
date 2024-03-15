const jwt = require("jsonwebtoken");
const jwtKey = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const checkedUsername = emailSchema.safeParse(username);
    const checkedPassword = passwordSchema.safeParse(password);

    if (!checkedUsername.success || !checkedPassword.success) {
        return null;
    }

    const data = {
        checkedUsername,
        checkedPassword
    }

    const signature = jwt.sign(data, jwtKey);

    return signature;
}

function verifyJwt(token) {
    const verified = jwt.verify(token, jwtKey);
    
    return verified;
}

function decodeJwt(token) {
    
}