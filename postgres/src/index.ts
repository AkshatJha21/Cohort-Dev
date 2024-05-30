import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://AkshatJha21:2uB4qKzDrCbl@ep-late-silence-a5zjp6xu.us-east-2.aws.neon.tech/project1-db?sslmode=require'
});

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
        );
    `)
    console.log(result);
    await client.end();
}

async function insertUser(username: string, email: string, password: string) {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email ,password) VALUES ($1, $2, $3);"
    const values = [username, email, password];
    const result = await client.query(insertQuery, values);
    console.log(result);
    await client.end();
}

async function findUser(email: string) {
    await client.connect();
    const query = 'SELECT * FROM users WHERE email =  $1';
    const result = await client.query(query, [email]);

    if (result.rows.length > 0) {
        console.log("User found: ", result.rows[0]);
        await client.end();
        return result.rows[0];
    } else {
        console.log("User not found!");
        await client.end();
        return null;
    }
}

// createUsersTable();
// insertUser('augustWalker', 'augustwalker@cia.com', 'augw1234');
findUser('ethanhunt@mf.com');