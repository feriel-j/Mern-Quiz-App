import React, { useState } from "react";
import "./log.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../JS/userSlice/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="register-form">
      <h1>Log In </h1>
      <form onSubmit={(e) => e.preventDefault()} className="signup">
        <input
          type="email"
          required
          placeholder="example@gmail.com..."
          onChange={(e) => setlogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          required
          placeholder="Please fill in your address..."
          onChange={(e) => setlogin({ ...login, password: e.target.value })}
        />
        <button
          onClick={() => {
            dispatch(userLogin(login));

            setTimeout(() => {
              navigate("/profil");
            }, 1000);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Log In
        </button>

        <p className="pass">Forgot your password?</p>
        <br />
        <h6>
          Don't Have an account <Link to="/register">Register now</Link>
        </h6>
        <br />
      </form>
    </div>
  );
};

export default Login;
