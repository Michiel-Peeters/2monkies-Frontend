import React from "react";

const DefaultTips = ({ setTip, defaultTips }) => {
  console.log(defaultTips);
  return (
    <ul className="content__tips__list">
      {defaultTips.map(({ id, description }) => {
        return (
          <li key={id}>
            <button
              className="content__tips__button"
              onClick={(e) => setTip(e.target.innerText)}
            >
              {description}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DefaultTips;
