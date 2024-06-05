import express from "express";
import { allTodos, allUsers } from "./db";

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

app.post('/add_user', (req, res) => {
    
    try {
        
    } catch (error) {
        
    }
});

app.get('/new_todo', (req, res) => {

});

app.put('/edit_user', (req, res) => {

});

app.put('/edit_todo', (req, res) => {

});

app.put('/delete_user', (req, res) => {

});

app.put('/delete_todo', (req, res) => {

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});