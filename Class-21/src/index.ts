import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});

async function createUserTable() {
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

async function insertUserTable(username: string, email: string, password: string) {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
    `, [username, email, password]);
    console.log(result);
    await client.end();
}

// createUserTable();
insertUserTable('user1', 'userone@email.com', 'user1pass');