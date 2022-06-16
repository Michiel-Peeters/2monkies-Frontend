import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGame,
  stopGame,
  updateSeconds,
} from "../../redux/slices/playing.js";
import {
  usePatchGameMutation,
  usePostGameMutation,
} from "../../redux/api/gameAPI.js";

const Timer = ({
  maxTime,
  roomId,
  roomName,
  gameId,
  setGameId,
  seconds,
  setSeconds,
}) => {
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
    if (stop || seconds == 0) {
      setSeconds(maxTime * 60);
      setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
    }
  });

  const [postGame] = usePostGameMutation();
  const [patchGame] = usePatchGameMutation();

  const getTimeNow = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + " " + time;
  };

  const playHandler = async () => {
    setPlay(true);
    const { data } = await postGame({
      user: "/api/users/1",
      room: `/api/rooms/${roomId}`,
      startDate: getTimeNow(),
      endDate: getTimeNow(),
      currentTip: "",
      seconds: seconds,
      active: 1,
    });
    setGameId(data.id);
    // dispatch(
    //   addGame({
    //     roomId,
    //     roomName,
    //     currentTip: "",
    //     seconds,
    //   })
    // );
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
    console.log(gameId);
    patchGame({
      gameId,
      body: { active: 0, endDate: getTimeNow(), currentTip: "" },
    });
    setSeconds(maxTime * 60);
    setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
  };

  if (seconds == 0) {
    stopHandler();
  }

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
