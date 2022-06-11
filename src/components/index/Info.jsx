import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info">
      <Link to="/info" target="_blank" className="info__button">
        ?
      </Link>
    </div>
  );
};

export default Info;
