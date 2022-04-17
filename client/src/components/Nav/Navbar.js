import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

import { logout } from "../../JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <div className="header">
        <Link className="link-logo" to="/">
          <img src="./images/logo.png" alt="logo" />
        </Link>
        {isAuth ? (
          <div className="log-btn">
            <button
              onClick={() => {
                navigate("/profil");
              }}
              className="log-bt"
            >
              Profil
            </button>
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
              className="log-bt"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="log-btn">
            <button className="log-bt">
              <Link to="login">Sign In </Link>
            </button>

            <button className="log-bt">
              {" "}
              <Link to="register">Sign Up </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
