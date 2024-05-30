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

async function insertUser() {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, email ,password)
        VALUES ('johnWick', 'johnWick@email.com', 'john1234');
    `);
    console.log(result);
    await client.end();
}

// createUsersTable();
insertUser();