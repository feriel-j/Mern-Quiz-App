import { Button } from "antd";
import React, { useState } from "react";
import "./questionCard.css";

const QuetionCard = ({ questions }) => {
  const [cureentQ, setCurrentQ] = useState(0);
  const [showresult, setshowresult] = useState(false);
  const [score, setscore] = useState(0);
  const handleAnswerBtnClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("correct answer");
      setscore(score + 1);
    }

    const nextQuestion = cureentQ + 1;
    if (nextQuestion < questions.length) {
      setCurrentQ(nextQuestion);
    } else {
      setshowresult(true);
    }
  };

  return (
    <>
      {showresult ? (
        <div className="result">
          <h1>
            your score is
            <span className="space">
              {score} / {questions.length}
            </span>
          </h1>
          <h2>See you next time !</h2>
          <br />
          <h3>🦋🦋🦋🦋</h3>
        </div>
      ) : (
        <div className="ques-card">
          <div className="head-card">
            <h1>
              Question
              <span className="space">
                {cureentQ + 1}/{questions?.length}
              </span>
            </h1>
            <h3>{questions[cureentQ]?.question}</h3>
          </div>
          <div className="options">
            <button
              onClick={() => {
                handleAnswerBtnClick(questions?.option1?.isCorrect);
              }}
            >
              {" "}
              <span>1-</span> {questions[cureentQ]?.option1}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(questions?.option2?.isCorrect);
              }}
            >
              {" "}
              <span>2-</span> {questions[cureentQ]?.option2}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(questions?.option3?.isCorrect);
              }}
            >
              <span>3-</span> {questions[cureentQ]?.option3}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(questions?.option4?.isCorrect);

                console.log(questions?.option4?.isCorrect);
              }}
            >
              {" "}
              <span>4-</span> {questions[cureentQ]?.option4}
            </button>
          </div>
          <br />
          <Button
            type="primary"
            className="next"
            onClick={() => {
              handleAnswerBtnClick();
            }}
          >
            next
          </Button>
        </div>
      )}
    </>
  );
};

export default QuetionCard;
