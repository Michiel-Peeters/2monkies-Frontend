import React from "react";

const TipForm = () => {
  return (
    <form
      action=""
      className="content__tips__form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <textarea
        name="tip"
        id="tip"
        cols="30"
        rows="7"
        placeholder="Fill in a Tip"
      ></textarea>
      <div className="form__buttons">
        <button className="button button__clear">Clear</button>
        <button type="submit" className="button button__submit">
          verzend
        </button>
      </div>
    </form>
  );
};

export default TipForm;
