import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import TipForm from "./TipForm";
import DefaultTips from "./DefaultTips";

const Room = () => {
  return (
    <div className="escape__rooms__room">
      <details>
        <summary>
          Room 2
          <Link
            to={"/room1"}
            target={"_blank"}
            className="button button__preview"
          >
            Preview
          </Link>
        </summary>
        <div className="content">
          <Timer />
          <div className="content__tips">
            <TipForm />
            <DefaultTips />
          </div>
        </div>
      </details>
    </div>
  );
};

export default Room;
