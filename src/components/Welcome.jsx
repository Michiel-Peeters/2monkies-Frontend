import React from "react";
import logo from "../images/Logo_Transparant.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="heading">
        <img src={logo} alt="" className="heading__img" />

        <div className="heading__items">
          <p className="heading__items__user">
            Welkom <span>NAME</span>
          </p>
          <a
            href="http://localhost:8000/admin"
            target={"_blank"}
            className="button button__admin"
          >
            Admin
          </a>
          <Link to="/" className="button button__logout">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
