import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";
import { useDispatch, useSelector } from "react-redux";

const PlayRoom = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetRoomByIdQuery(id, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const game = useSelector((state) => state.playingState);

  console.log(game);
  return (
    <div className="container__medium">
      {data && (
        <section className="playroom">
          <div className="playroom__content">
            <h2 className="playroom__content__welkom">Lets Play</h2>
            <h3 className="playroom__content__name">{data.name}</h3>
          </div>
        </section>
      )}
    </div>
  );
};

export default PlayRoom;
