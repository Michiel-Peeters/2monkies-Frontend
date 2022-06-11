import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo_Transparant.png";

const Login = () => {
  return (
    <>
      <div className="container__small">
        <form action="" className="login__form">
          <img src={logo} alt="Logo" className="login__form__img" />

          <input
            type="text"
            className="login__form__input"
            placeholder="Naam"
          />

          <input
            type="password"
            className="login__form__input"
            placeholder="Wachtwoord"
          />

          <Link to="/rooms" className="login__form__button">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
