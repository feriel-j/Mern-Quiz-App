import { Modal, Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { questionAdd } from "../../JS/userSlice/quizSlice";

const AddQuestion = ({ ping, setping, quiz, userId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [quest, setquest] = useState({});
  const handleAlert = () => {
    setping(!ping);

    Swal.fire("You have reached 5 questions! Cannot add more");
  };
  const handleAdd = () => {
    dispatch(questionAdd({ quizId: quiz._id, userId: userId, quest: quest }));
    setping(!ping);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          if (quiz?.questions.length < 4) {
            setVisible(true);
          } else {
            handleAlert();
          }
        }}
      >
        Add Question
      </Button>
      <Modal
        title=" Add Question"
        centered
        visible={visible}
        onOk={() => {
          handleAdd();
          setVisible(false);
          Swal.fire("Question added..");
        }}
        onCancel={() => setVisible(false)}
      >
        <div className="input-sect">
          <input
            type="text"
            placeholder="Question"
            onChange={(e) => setquest({ ...quest, question: e.target.value })}
          />
          <input
            type="text"
            placeholder="option-1"
            onChange={(e) => setquest({ ...quest, option1: e.target.value })}
          />
          <input
            type="text"
            placeholder="option-2"
            onChange={(e) => setquest({ ...quest, option2: e.target.value })}
          />
          <input
            type="text"
            placeholder="option-3"
            onChange={(e) => setquest({ ...quest, option3: e.target.value })}
          />
          <input
            type="text"
            placeholder="option-4"
            onChange={(e) => setquest({ ...quest, option4: e.target.value })}
          />
          <input
            type="text"
            placeholder="Correct answer"
            onChange={(e) =>
              setquest({ ...quest, correctAnswer: e.target.value })
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddQuestion;
