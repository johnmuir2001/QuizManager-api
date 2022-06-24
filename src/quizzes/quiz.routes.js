const express = require("express");
const quizRouter = express.Router();
const Role = require("../_helpers/role");
const authorise = require("../_helpers/authorise");
const {
    getAllQuizzes,
    getQuizById,
    updateQuestionStat,
    updateQuizStat,
    addQuiz,
    updateQuiz,
    deleteQuiz
} = require("./quiz.controller");

// quiz routes
quizRouter.get("/", getAllQuizzes); // Get all quizzes - all users have access
quizRouter.get("/:id", getQuizById); // Get single quiz - all users have access
quizRouter.patch("/updateQuestionStat/:id", updateQuestionStat); // Update question stats - all users have access
quizRouter.patch("/updateQuizStat/:id", updateQuizStat); // Update quiz stats - all users have access
quizRouter.post("/addQuiz", addQuiz); // Add quiz - only Super Admin can add quiz
quizRouter.put("/update/:id", updateQuiz); // Update quiz - only Super Admin can edit quiz
quizRouter.delete("/delete/:id", deleteQuiz); // Delete quiz - only Super Admin can edit quiz

module.exports = quizRouter;