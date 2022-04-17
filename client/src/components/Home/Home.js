import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  return (
    <div className="home-page">
      <h1>Welcome to quiz-lab</h1>
      <h3>We are glad you have chosen to have fun with us! </h3>
      <img
        src="https://ichef.bbci.co.uk/images/ic/1280xn/p08m28s0.jpg"
        alt=""
      />
      <div className="btn-home">
        {isAuth ? (
          <button
            onClick={() => {
              navigate("/profil");
            }}
          >
            Create a Quiz
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Create a Quiz
          </button>
        )}

        <button
          onClick={() => {
            navigate("/quizs");
          }}
        >
          Play now
        </button>
      </div>
    </div>
  );
};

export default Home;
