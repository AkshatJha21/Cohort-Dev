import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.findMany

const insertUser = async (username: string, password: string, email: string, firstName: string, lastName: string) => {
    const res = await client.user.create({
        data: {
            username,
            email,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}

// insertUser('john', 'johnpass', 'johndoe@email.com', 'John', 'Doe');

