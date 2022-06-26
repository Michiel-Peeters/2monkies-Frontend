import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Logo_Transparant.png";
import store from "../../redux";
import {
  useLoginGroupMutation,
  useLoginMutation,
} from "../../redux/api/loginAPI";
import userSlice from "../../redux/slices/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const [loginGroup] = useLoginGroupMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, isError } = await login({ username, password });
    const { data: user } = await loginGroup({ username, password });
    console.log(data);
    console.log(user);
    if (data) {
      store.dispatch(userSlice.actions.addUser(user));
      navigate("/rooms");
    }
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
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
