import React, { useState } from "react";
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
  const [tip, setTip] = useState("");
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
            <TipForm tip={tip} setTip={setTip} />
            <DefaultTips setTip={setTip} />
          </div>
        </div>
      </details>
    </div>
  );
};

export default Room;
