import React from "react";
import logo from "../images/Logo_Transparant.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const user = useSelector((state) => state.userState)[0].user;
  console.log(user);

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
          <a
            href="https://wdev2.be/fs_michiel/eindwerk/admin"
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
