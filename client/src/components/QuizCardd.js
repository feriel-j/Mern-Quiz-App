import { Card, Modal, Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quizzDelete, QuizzUpdate } from "../JS/userSlice/quizSlice";
import AddQuestion from "./questions/AddQuestion";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const QuizCardd = ({ quiz, ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  const [visible, setVisible] = useState(false);
  const [quizUpdated, setQuizUpdated] = useState({});
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 20 }}
      cover={<img alt="example" src={quiz?.img} className="img-card" />}
    >
      <div className="btns-cardd">
        <Button
          type="primary"
          onClick={() => {
            dispatch(quizzDelete(quiz?.quiz?._id));
            setping(!ping);
            Swal.fire("Quiz deleted..");
          }}
        >
          <DeleteOutlined />
        </Button>
        <AddQuestion
          ping={ping}
          setping={setping}
          quiz={quiz}
          userId={user?._id}
        />

        <Button type="primary" onClick={() => setVisible(true)}>
          <EditOutlined />
        </Button>
        <Modal
          title=" UPDATE QUIZ"
          centered
          visible={visible}
          onOk={() => {
            setVisible(false);
            dispatch(QuizzUpdate({ id: quiz?.quiz?._id, quiz: quizUpdated }));
            setping(!ping);
            Swal.fire("Quiz updated..");
          }}
          onCancel={() => setVisible(false)}
        >
          <div className="input-sect">
            <input
              type="text"
              placeholder="image"
              onChange={(e) =>
                setQuizUpdated({ ...quizUpdated, img: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Quiz name"
              onChange={(e) =>
                setQuizUpdated({ ...quizUpdated, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="subject"
              onChange={(e) =>
                setQuizUpdated({ ...quizUpdated, subject: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Overview"
              onChange={(e) =>
                setQuizUpdated({ ...quizUpdated, overview: e.target.value })
              }
            />
          </div>
        </Modal>
      </div>
      <Link to={`/questionlist/${quiz?._id}`} state={(quiz = { quiz })}>
        <Button className="cont">Continue</Button>
      </Link>
    </Card>
  );
};

export default QuizCardd;
