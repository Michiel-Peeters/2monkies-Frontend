import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Logo_Transparant.png";
import store from "../../redux";
import { useLoginMutation } from "../../redux/api/loginAPI";
import userSlice from "../../redux/slices/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login({ email, password });
    store.dispatch(userSlice.actions.addUser(data));
    console.log(data);
    navigate("/rooms");
  };

  return (
    <>
      <div className="container__small">
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" className="login__form__img" />

          <input
            type="text"
            className="login__form__input"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="login__form__input"
            placeholder="Wachtwoord"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__form__button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
