import React from "react";

const DefaultTips = ({ setTip }) => {
  return (
    <ul className="content__tips__list">
      <li>
        <button
          className="content__tips__button"
          onClick={(e) => setTip(e.target.innerText)}
        >
          default tip 1
        </button>
      </li>
      <li>
        <button
          className="content__tips__button"
          onClick={(e) => setTip(e.target.innerText)}
        >
          default tip 2
        </button>
      </li>
      <li>
        <button
          className="content__tips__button"
          onClick={(e) => setTip(e.target.innerText)}
        >
          default tip 3
        </button>
      </li>
      <li>
        <button
          className="content__tips__button"
          onClick={(e) => setTip(e.target.innerText)}
        >
          default tip 4
        </button>
      </li>
      <li>
        <button
          className="content__tips__button"
          onClick={(e) => setTip(e.target.innerText)}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          id?
        </button>
      </li>
    </ul>
  );
};

export default DefaultTips;
