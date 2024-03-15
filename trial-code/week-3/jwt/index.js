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
    let verified = true;
    try {
        jwt.verify(token, jwtKey);
    } catch (error) {
        verified = false;
    }
    return verified;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);

    if (decoded) {
        return true;
    } else {
        return false;
    }
}