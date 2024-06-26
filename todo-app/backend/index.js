const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const todos = await todo.find();

    res.status(200).json({
        todos
    });
})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "Todo created"
    })
})

app.put('/done', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id,
    }, {
        completed: true
    });

    res.status(200).json({
        msg: "Todo updated"
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})