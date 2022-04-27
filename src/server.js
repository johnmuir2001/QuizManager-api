require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./_helpers/db");

const app = express();

connection(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).send({ message: "Server is up!" })
})

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port)