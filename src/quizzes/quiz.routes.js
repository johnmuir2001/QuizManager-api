const express = require("express");
const quizRouter = express.Router();
const Role = require("../_helpers/role");
const authorise = require("../_helpers/authorise");
const {
    addQuiz
} = require("./quiz.controller");

// quiz routes
//quizRouter.get("/", getAllQuizzes); // Get all quizzes - all users have access
//quizRouter.get("/:id", getQuizById); // Get single quiz - all users have access
quizRouter.post("/addQuiz", authorise(Role.SuperAdmin), addQuiz) // Add quiz - only Super Admin can add quiz
//quizRouter.put("/update/:id", authorise(Role.SuperAdmin), updateQuiz) // Update quiz - only Super Admin can edit quiz

module.exports = quizRouter;