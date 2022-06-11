import React from "react";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ maxTime }) => {
  console.log(maxTime);
  let [seconds, setSeconds] = useState(maxTime * 60);
  const [playTime, setPlayTime] = useState(
    new Date(seconds * 1000).toISOString().substr(11, 8)
  );
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(false);

  let timerInterval = null;

  useEffect(() => {
    if (play) {
      setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
    }
  }, [seconds, play, pause, stop]);

  const playHandler = () => {
    setPlay(true);
    setPause(false);
    setStop(false);
    timerInterval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  };
  const pauseHandler = () => {
    setPlay(false);
    setPause(true);
    setStop(false);
    clearInterval(timerInterval);
  };
  const stopHandler = () => {
    setPlay(false);
    setPause(false);
    setStop(true);
    clearInterval(timerInterval);
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
