const express = require("express");
const quizzRouter = express.Router();
const Quizz = require("../models/Quizz");

const { questionsRules, validation } = require("../middelwares/validator");

//create quizz and save it
//methode: post
//req.body

quizzRouter.post("/", async (req, res) => {
  try {
    const newQuizz = new Quizz(req.body);
    let result = await newQuizz.save();
    res.send({ result: result, msg: "quiz is added.." });
  } catch (error) {
    res.status(400).send({ msg: "can not add quizz" });
    console.log(error);
  }
});

// get all quizzs
//methode: get
quizzRouter.get("/", async (req, res) => {
  try {
    let result = await Quizz.find();
    res.status(200).send({ quizs: result, msg: "All quizzs" });
  } catch (error) {
    res.status(400).send({ msg: "can not get all quizzs" });
    console.log(error);
  }
});

//get one quizz
//methode: get
//params
quizzRouter.get("/:id", async (req, res) => {
  try {
    let result = await Quizz.findOne({ _id: req.params.id });
    res.status(200).send({ quizzs: result, msg: " the quizz" });
  } catch (error) {
    res.status(400).send({ msg: "can not find this quizz" });
    console.log(error);
  }
});
//update quizz
//methode: put
//params
//req.body
quizzRouter.put("/:id", async (req, res) => {
  try {
    let result = await Quizz.findOneAndUpdate(
      {
        _id: req.params.id,
      },

      { $set: { ...req.body } }
    );
    res.send({ quizzUpdated: result, msg: "quizz updated" });
  } catch (error) {
    res.status(400).send({ msg: "can not modify the quizz" });
    console.log(error);
  }
});
//delete quizz
//methode:delete
//params

quizzRouter.delete("/:id", async (req, res) => {
  try {
    await Quizz.findOneAndDelete({ _id: req.params.id });
    res.send({ msg: "quizz deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete the quizz" });
    console.log(error);
  }
});

//Add & update questions
//put
//http://localhost:5000/quizz/question/quizid/userid

quizzRouter.post("/question/:id/:userId", async (req, res) => {
  try {
    const quiz = await Quizz.findById(req.params.id);
    const newQuestion = {
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      correctAnswer: req.body.correctAnswer,
    };

    quiz.questions.unshift(newQuestion);
    await quiz.save();
    
    res.status(200).json(quiz.questions);
  } catch (error) {
    res.status(500).send("Server Error");
    console.log(error.message);
  }
});

// //delete question
// //put
// //http://localhost:5000/quizz/question/postid /commentid/userid

quizzRouter.delete(
  "/question/:id/:questionid/:userid",

  async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      const question = quiz.questions.find(
        (question) => question.id === req.params.questionid
      );
      if (!question) {
        return res.status(404).json({ msg: "question does not exist" });
      }

      const removeindex = quiz.questions
        .map((question) => question.user.toString())
        .indexOf(req.params.userid);
      quiz.questions.splice(removeindex, 1);
      await quiz.save();
      res.json(quiz.questions);
    } catch (error) {
      res.status(500).send({ error: error });
      console.log(error);
    }
  }
);

module.exports = quizzRouter;
