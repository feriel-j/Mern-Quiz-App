import React from "react";
import "./quizcard.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="card-description">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={quiz?.img} />}
      >
        {" "}
        <div className="card-detail">
          <h1>{quiz?.name}</h1>
          <p>{quiz?.overview?.slice(0, 50) + "..."}</p>
          <h4>{quiz?.questions?.length} Q</h4>
        </div>
      </Card>
      <Link to={`/details/${quiz?._id}`} state={(quiz = { quiz })}>
        <button className="take-quiz">Take the Quiz</button>
      </Link>
    </div>
  );
};

export default QuizCard;
