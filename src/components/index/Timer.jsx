import React from "react";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ maxTime }) => {
  const time = maxTime;
  let [seconds, setSeconds] = useState(time * 60);
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
  });

  const playHandler = () => {
    setPlay(true);
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
    setSeconds(time * 60);
  };

  return (
    <div className="content__timer">
      <p className="content__timer__time">{playTime}</p>
      <div className="content__timer__buttons">
        {!play && (
          <button
            className="button button__play"
            disabled={play}
            onClick={playHandler}
          >
            play
          </button>
        )}
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
