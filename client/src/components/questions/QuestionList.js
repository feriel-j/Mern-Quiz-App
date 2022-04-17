import React from "react";
import { useParams, useLocation } from "react-router-dom";
import QuetionCard from "./QuetionCard";

const QuestionList = () => {
  const location = useLocation();
  const { quiz } = location.state;
  const params = useParams();
  console.log(quiz);

  return (
    <div>
      <h1 className="question-list">{quiz?.name}</h1>
      <div className="question-card-1">
        {/* {quiz?.questions?.map((el) => (
          <QuetionCard Q={el} questions={quiz?.questions} />
        ))} */}
        <QuetionCard questions={quiz?.questions} />
      </div>
    </div>
  );
};

export default QuestionList;
