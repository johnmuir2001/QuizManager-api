const Quiz = require("./quiz.model");




exports.addQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body);
        return res.status(201).send(quiz)
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}