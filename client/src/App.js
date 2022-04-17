import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import QuizList from "./components/quizList/QuizList";
import Home from "./components/Home/Home";
import { quizzget } from "./JS/userSlice/quizSlice";
import QuizDetails from "./components/quizDetails/QuizDetails";
import QuestionList from "./components/questions/QuestionList";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(quizzget());
  }, [ping]);

  const [text, settext] = useState("");

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/quizs"
          element={<QuizList text={text} settext={settext} />}
        ></Route>
        <Route path="/details/:id" element={<QuizDetails />}></Route>
        <Route path="/questionlist/:id" element={<QuestionList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
