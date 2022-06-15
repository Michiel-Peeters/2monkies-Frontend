import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const PlayRoom = () => {
  const [seconds, setSeconds] = useState(0);
  const [playTime, setPlayTime] = useState(
    new Date(seconds * 1000).toISOString().substr(11, 8)
  );

  const { id } = useParams();
  const { data, isError, isLoading } = useGetRoomByIdQuery(id, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const game = useSelector(
    (state) =>
      state.persistedReducer.playingState.filter(
        ({ gameInfo: { roomId } }) => roomId == id
      )[0]
  );
  console.log(game);

  useEffect(() => {
    if (game) {
      setSeconds((prev) => (prev = game.gameInfo.seconds));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
      setPlayTime(new Date(seconds * 1000).toISOString().substr(11, 8));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  setInterval(() => {
    window.location.reload(false);
  }, 5000);

  return (
    <div className="container__medium">
      <section className="playroom">
        {!game && (
          <div className="playroom__content">
            <h2 className="playroom__content__welkom">Lets Play</h2>
            <h3 className="playroom__content__name">{data?.name}</h3>
          </div>
        )}
        {game && (
          <div className="playroom__play">
            <h2 className="playroom__play__timer">{playTime}</h2>
            <h3 className="playroom__play__currenttip">
              {game.gameInfo.currentTip}
            </h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default PlayRoom;
