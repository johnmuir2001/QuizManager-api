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

// get quiz by id and return that quiz
exports.getQuizById = async (req, res) => {
    try {
        const _id = req.params.id;
        const singleQuiz = await Quiz.findOne({_id});
        if(!singleQuiz){
            return res.status(401).send({});
        } else {
            return res.status(200).send(singleQuiz);
        }
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

// find question by id and update questions stats
exports.updateQuestionStat = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedStats = await Quiz.updateOne({ "questions._id": _id}, {$set: { "questions.$.stats": req.body}});

        return res.status(200).send(updatedStats);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

// find quiz by id update quiz stats
exports.updateQuizStat = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedStats = await Quiz.updateOne({_id}, {$inc: { "stats.plays": 1}});

        return res.status(200).send(updatedStats);
    } catch (error) {
        return res.status(500).send({ message: error });
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

// update quiz by ID and handle errors
exports.updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await Quiz.updateOne({ _id: req.params.id }, req.body);

        if(updatedQuiz.modifiedCount > 0){
            res.status(200).send(updatedQuiz)
        } else {
            throw new Error("update unsuccessful")
        }
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

// delete quiz by ID
exports.deleteQuiz = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedQuiz = await Quiz.deleteOne({_id});
        return res.status(201).send(deletedQuiz);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}