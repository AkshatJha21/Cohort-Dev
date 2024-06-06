import express from "express";
import { allTodos, allUsers, createTodo, createUser, deleteTodo, deleteUser, getUser, todoComplete, todoUpdate, updateUser } from "./db";

const app = express();
const port = 3000;
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await allUsers();
        res.status(200).json({
            users
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
    const { email, name } = req.body;
    try {
        const newUser = await createUser(
            email,
            name
        );
        res.status(200).json({
            msg: "User added successfully",
            newUser
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.post('/add_todo', async (req, res) => {
    const { title, description, userId } = req.body;
    try {
        const newTodo = await createTodo(
            title,
            description,
            userId
        );
        res.status(200).json({
            msg: "Todo added successfully",
            newTodo
        });
    } catch (error) {
        res.status(411).json({
            msg: "Error: " + error
        });
    }
});

app.put('/edit_user', async (req, res) => {
    const { id, email, name } = req.body;
    try {
        const update = await updateUser(
            id,
            email,
            name
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

app.delete('/delete_user', async (req, res) => {
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

app.delete('/delete_todo', async (req, res) => {
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