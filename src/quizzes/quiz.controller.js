const Quiz = require("./quiz.model");

// gets all quizzes but only returns titles and IDs
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({}, {"questions": 0});
        return res.status(200).send(quizzes);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

exports.getQuizById = async (req, res) => {
    try {
        const _id = req.params.id;
        const singleQuiz = await Quiz.findOne({_id})
        if(!singleQuiz){
            return res.status(401).send({})
        } else {
            return res.status(200).send(singleQuiz)
        }
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

// add quiz and handle errors
exports.addQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body);
        return res.status(201).send(quiz);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}