const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/todos', (req, res) => {

})

app.post('/todo', (req, res) => {

})

app.put('/done', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})