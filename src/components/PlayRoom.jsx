import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";
import { useDispatch, useSelector } from "react-redux";
import { useGetGamesQuery } from "../redux/api/gameAPI";

const PlayRoom = () => {
  const [seconds, setSeconds] = useState(10);
  const [playTime, setPlayTime] = useState(0);
  const [isActive, setIsactive] = useState(false);
  const [activeGame, setActiveGame] = useState([]);
  const [rerender, setRerender] = useState(0);

  const { playroomid } = useParams();
  const { data } = useGetRoomByIdQuery(playroomid);

  const { data: gameData } = useGetGamesQuery(undefined, {
    pollingInterval: 1000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (gameData) {
      setActiveGame(
        gameData["hydra:member"].filter(
          ({ active, room: { id } }) => active == 1 && id == playroomid
        )
      );
      if (activeGame.length > 0) {
        setIsactive(true);
      } else {
        setIsactive(false);
      }
    }
  }, [rerender]);

  useEffect(() => {
    setInterval(() => {
      setRerender((prev) => prev + 1);
    }, 500);
  }, []);

  return (
    <div className="container__medium">
      <section className="playroom">
        {!isActive && (
          <div className="playroom__content">
            <h2 className="playroom__content__welkom">Lets Play</h2>
            <h3 className="playroom__content__name">{data?.name}</h3>
          </div>
        )}

        {isActive &&
          activeGame.map(({ currentTip }) => {
            return (
              <div className="playroom__play">
                <h2 className="playroom__play__timer">{data?.name}</h2>
                <h3 className="playroom__play__currenttip">{currentTip}</h3>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default PlayRoom;
