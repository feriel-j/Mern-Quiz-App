import React from "react";
import { useParams, useLocation } from "react-router-dom";

import QuestionCard from "../questions/QuetionCard";

const QuizDetails = () => {
  const location = useLocation();
  const { quiz } = location.state;
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1 className="question-list">{quiz?.name}</h1>
      <QuestionCard questions={quiz?.questions} />
    </div>
  );
};

export default QuizDetails;
