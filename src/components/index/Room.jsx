import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import TipForm from "./TipForm";
import DefaultTips from "./DefaultTips";

const Room = ({
  room: {
    id,
    name,
    difficulty: { maxTime },
  },
}) => {
  return (
    <div className="escape__rooms__room">
      <details>
        <summary>
          {name}
          <Link
            to={`/${name}`}
            target={"_blank"}
            className="button button__preview"
          >
            Preview
          </Link>
        </summary>
        <div className="content">
          <Timer maxTime={maxTime} />
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
