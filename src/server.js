require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./_helpers/db");
const userRouter = require("./users/user.routes");

const app = express();

// connect to mongoDB
connection(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

// api routes
app.use("/users", userRouter);

// server test
app.get("/health", (req, res) => {
    res.status(200).send({ message: "Server is up!" });
})

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port);