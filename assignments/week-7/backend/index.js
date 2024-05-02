const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express());
app.use(cors());

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});