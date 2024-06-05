import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const createUser = async (
    username: string,
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
) => {
    const res = await client.user.create({
        data: {
            username: username,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
    });
    console.log(res);
}

export const createTodo = async (
    title: string,
    description: string,
    id: number
) => {
    const res = await client.todo.create({
        data: {
            title: title,
            description: description,
            userId: id
        }
    });
    console.log(res);
}

export const updateUser = async (
    userId: number,
    username?: string,
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string
) => {
    const res = await client.user.update({
        where: {
            id: userId
        },
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

export const todoComplete = async (
    id: number,
    done: boolean,
) => {
    const res = await client.todo.update({
        where: {
            id: id
        },
        data: {
            done: true
        }
    });
    console.log(res);
}

export const todoUpdate = async (
    id: number,
    title?: string,
    description?: string,
) => {
    const res = await client.todo.update({
        where: {
            id: id
        },
        data: {
            title: title,
            description: description
        }
    });
    console.log(res);
}

export const deleteUser = async (
    id: number
) => {
    const res = await client.user.delete({
        where: {
            id: id
        }
    });
    console.log(res);
}

export const deleteTodo = async (
    id: number
) => {
    const res = await client.todo.delete({
        where: {
            id: id
        }
    });
    console.log(res);
}

export const getUser = async (
    id: number
) => {
    const user = await client.user.findUnique({
        where: {
            id: id
        }
    });
    console.log(user);
}
export const allUsers = async () => {
    const user = await client.user.findMany();
    console.log(user);
}

export const getTodo = async (
    id: number
) => {
    const user = await client.todo.findUnique({
        where: {
            id: id
        }
    });
    console.log(user);
}

export const allTodos = async () => {
    const todo = await client.todo.findMany();
    console.log(todo);
}