import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import Info from "../components/index/Info";
import Room from "../components/index/Room";
import { useGetRoomsQuery } from "../redux/api/roomAPI";
import store from "../redux";
import userSlice from "../redux/slices/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  console.log(store.getState().userState.length);

  const [user, setUser] = useState(store.getState().userState.length);

  const { data, isError, isLoading } = useGetRoomsQuery(undefined, {
    pollingInterval: 5000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (store.getState().userState.length == 0) {
      console.log("redirect");
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container__medium">
        {user && (
          <section className="escape">
            <Welcome />
            <Info />
            <div className="escape__rooms">
              {data &&
                data["hydra:member"].map((room) => {
                  return <Room key={room.id} room={room} />;
                })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Rooms;
