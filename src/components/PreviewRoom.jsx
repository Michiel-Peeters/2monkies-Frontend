import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/Logo_Transparant.png";
import { updateSeconds } from "../redux/slices/playing.js";

const PreviewRoom = () => {
  const { id } = useParams();
  const game = useSelector(
    (state) =>
      state.persistedReducer.playingState.filter(
        ({ gameInfo: { roomId } }) => roomId == id
      )[0]
  );

  const [seconds, setSeconds] = useState(game.gameInfo.seconds);
  const [playTime, setPlayTime] = useState(
    new Date(seconds * 1000).toISOString().substr(11, 8)
  );

  const { data, isError, isLoading } = useGetRoomByIdQuery(id, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const dispatch = useDispatch();

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
      dispatch(
        updateSeconds({
          roomId,
          seconds,
        })
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="container__medium">
      <section className="playroom">
        <div className="heading">
          <img src={logo} alt="" className="heading__img" />

          <div className="heading__items">
            <Link to="/rooms" className="button button__logout">
              Back
            </Link>
          </div>
        </div>
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

export default PreviewRoom;
