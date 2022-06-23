import React from "react";
import logo from "../images/Logo_Transparant.png";
import store from "../redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../redux/slices/user";

const Welcome = () => {
  const user = useSelector((state) => state.userState)[0].user;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    store.dispatch(userSlice.actions.removeUser());
    navigate("/");
  };

  return (
    <>
      <div className="heading">
        <img src={logo} alt="" className="heading__img" />

        <div className="heading__items">
          <p className="heading__items__user">
            Welkom{" "}
            <span>
              {user.firstName} {user.lastName}
            </span>
          </p>

          {user.roles.includes("ROLE_ADMIN") && (
            <a
              href="https://wdev2.be/fs_michiel/eindwerk/admin"
              target={"_blank"}
              className="button button__admin"
            >
              Admin
            </a>
          )}
          <form action="" onSubmit={handleSubmit}>
            <button type="submit" className="button button__logout">
              logout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Welcome;
