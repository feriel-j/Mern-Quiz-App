import React from "react";
import "./quizList.css";
import { Input } from "antd";

const SearchQuiz = ({ settext }) => {
  const { Search } = Input;
  return (
    <div>
      <Search
        className="s-btn"
        placeholder="Search by Quiz Name"
        enterButton
        onChange={(e) => settext(e.target.value)}
      />
      ,
    </div>
  );
};

export default SearchQuiz;
