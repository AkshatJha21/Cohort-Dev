import express from "express";
import { allTodos, allUsers, createTodo, createUser, deleteTodo, deleteUser, todoComplete, todoUpdate, updateUser } from "./db";

const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
    try {
        const users = await allUsers();
        res.status(200).json({
            list: users
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await allTodos();
        res.status(200).json({
            list: todos
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.post('/add_user', async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body;
    try {
        const newUser = await createUser(
            username,
            email,
            password,
            firstName,
            lastName,
        );
        res.status(200).json({
            msg: "User added successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.get('/new_todo', async (req, res) => {
    const { title, description, userId } = req.body;
    try {
        const newTodo = await createTodo(
            title,
            description,
            userId
        );
        res.status(200).json({
            msg: "Todo added successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.put('/edit_user', async (req, res) => {
    const { id, username, email, password, firstName, lastName } = req.body;
    try {
        const update = await updateUser(
            id,
            username,
            email,
            password,
            firstName,
            lastName,
        );
        res.status(200).json({
            msg: "User updated successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.post('/done', async (req, res) => {
    const { id } = req.body;
    try {
        const complete = await todoComplete(
            id
        );
        res.status(200).json({
            msg: "Todo done"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.put('/edit_todo', async (req, res) => {
    const { id, title, description } = req.body;
    try {
        const update = await todoUpdate(
            id,
            title,
            description
        );
        res.status(200).json({
            msg: "Todo updated successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.put('/delete_user', async (req, res) => {
    const { id } = req.body;
    try {
        const user = await deleteUser(id);
        res.status(200).json({
            msg: "User deleted successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.put('/delete_todo', async (req, res) => {
    const { id } = req.body;
    try {
        const todo = await deleteTodo(id);
        res.status(200).json({
            msg: "Todo deleted successfully"
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});