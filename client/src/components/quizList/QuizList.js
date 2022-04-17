import React from "react";
import { useSelector } from "react-redux";
import QuizCard from "../quizCard/QuizCard";
import SearchQuiz from "./SearchQuiz";

const QuizList = ({ text, settext }) => {
  const quizs = useSelector((state) => state.quiz.quiz);

  return (
    <div className="quizs-page">
      <div className="desc">
        <SearchQuiz text={text} settext={settext} />
        <h1>How to start</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis,
          quidem maiores provident facilis architecto. Ratione excepturi natus
          nesciunt, facilis assumenda alias dolores? Aspernatur fugiat placeat
          necessitatibus nostrum praesentium facilis.
        </p>
      </div>
      <div className="quizz-list">
        {quizs ? (
          quizs
            ?.filter((el) =>
              el?.name?.toUpperCase().includes(text?.toUpperCase())
            )
            ?.map((el) => <QuizCard quiz={el} />)
        ) : (
          <img
            src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default QuizList;
