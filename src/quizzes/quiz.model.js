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
            ],
            stats: {
                totalRight: {
                    type: Number,
                    default: 0
                },
                totalWrong: {
                    type: Number,
                    default: 0
                },
            }
        }
    ],
    stats: {
        plays: {
            type: Number,
            default: 0
        },
        totalQuestions: {
            type: Number,
            default: 0
        }
    }
    
});

module.exports = mongoose.model("Quiz", quizSchema);