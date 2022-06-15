import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentTip } from "../../redux/slices/playing";

const TipForm = ({ tip, setTip, roomId }) => {
  const dispatch = useDispatch();

  return (
    <form
      action=""
      className="content__tips__form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          updateCurrentTip({
            roomId,
            currentTip: tip,
          })
        );
      }}
    >
      <textarea
        name="tip"
        id="tip"
        cols="30"
        rows="7"
        placeholder="Fill in a Tip"
        value={tip}
        onChange={(e) => {
          setTip(e.target.value);
        }}
      ></textarea>
      <div className="form__buttons">
        <button
          type="text"
          className="button button__clear"
          onClick={() => setTip("")}
        >
          Clear
        </button>
        <button
          type="submit"
          className="button button__submit"
          onClick={() => {
            setTimeout(() => setTip(""), 100);
          }}
        >
          verzend
        </button>
      </div>
    </form>
  );
};

export default TipForm;
