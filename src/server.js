require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./_helpers/db");
const userRouter = require("./users/user.routes");
const quizRouter = require("./quizzes/quiz.routes");
const app = express();

// connect to mongoDB
connection(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

// api routes
app.use("/users", userRouter);
app.use("/quiz", quizRouter);

// server test
app.get("/health", (req, res) => {
    res.status(200).send({ message: "Server is up!" });
})

const port = process.env.PORT || 8080;
app.listen(port);