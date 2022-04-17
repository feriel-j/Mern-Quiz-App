import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuizz } from "../JS/userSlice/quizSlice";
import "./profil.css";
import QuizCardd from "./QuizCardd";
import axios from "axios";
import Swal from "sweetalert2";

const Profil = ({ ping, setping }) => {
  const dispatch = useDispatch();

  const quizs = useSelector((state) => state.quiz.quiz);
  const user = useSelector((state) => state.user.user);
  const [visible, setVisible] = useState(false);
  const [quiz, setQuiz] = useState({
    name: "",
    img: "",
    subject: "",
    overview: "",
  });
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("file", file);
  //   const { data } = await axios.post(
  //     "http://localhost:5000/story/uploads",
  //     bodyFormData
  //   );
  //   console.log(data);
  //   setQuiz({ ...quiz, img: data });
  // };
  return (
    <div className="profil">
      <h1>
        {user ? (
          `Hello ${user?.name}`
        ) : (
          <img
            src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
            alt="loading"
          />
        )}
      </h1>

      <Button
        shape="round"
        className="btn-add"
        type="primary"
        onClick={() => setVisible(true)}
      >
        Create Quiz
      </Button>
      <Modal
        title=" ADD QUIZ"
        centered
        visible={visible}
        onOk={() => {
          setVisible(false);
          dispatch(addQuizz(quiz));

          setping(!ping);
          Swal.fire("Quiz added..");
        }}
        onCancel={() => setVisible(false)}
      >
        <div className="input-sect">
          <input
            // type="file"
            // name="file"
            // placeholder="cover"
            // onChange={uploadFileHandler}
            type="text"
            placeholder="Enter an image"
            onChange={(e) => setQuiz({ ...quiz, img: e.target.value })}
          />
          <input
            type="text"
            placeholder="Quiz name"
            onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="subject"
            onChange={(e) => setQuiz({ ...quiz, subject: e.target.value })}
          />
          <input
            type="text"
            placeholder="Overview"
            onChange={(e) => setQuiz({ ...quiz, overview: e.target.value })}
          />
        </div>
      </Modal>
      <div className="quiz-list-auth">
        {quizs ? (
          quizs?.map((el) => (
            <QuizCardd quiz={el} ping={ping} setping={setping} />
          ))
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

export default Profil;
