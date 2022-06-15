import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGame } from "../../redux/slices/playing.js";

const Timer = ({ maxTime, roomId, roomName }) => {
  const time = maxTime;
  const [seconds, setSeconds] = useState(time * 60);
  const [playTime, setPlayTime] = useState(
    new Date(seconds * 1000).toISOString().substr(11, 8)
  );
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev - 1);
        setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
    if (stop) {
      setSeconds(time * 60);
      setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
    }
  });

  const startingGame = useSelector((state) => state.playingState);
  const dispatch = useDispatch();

  const playHandler = () => {
    setPlay(true);
    dispatch(
      addGame({
        name: "test",
        roomId,
      })
    );
    setPause(false);
    setStop(false);
  };
  const pauseHandler = () => {
    setPlay(false);
    setPause(true);
    setStop(false);
  };
  const stopHandler = () => {
    setPlay(false);
    setPause(false);
    setStop(true);
  };

  return (
    <div className="content__timer">
      <p className="content__timer__time">{playTime}</p>
      <div className="content__timer__buttons">
        <button
          className="button button__play"
          disabled={play}
          onClick={playHandler}
        >
          play
        </button>

        <button className="button button__pause" onClick={pauseHandler}>
          pauze
        </button>
        <button className="button button__stop" onClick={stopHandler}>
          stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
