const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [
        {
            questionText: {
                type: String,
                required: true
            },
            answerOptions: [
                {
                    answerText: {
                        type: String,
                        required: true
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true,
                        default: false
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model("Quiz", quizSchema);