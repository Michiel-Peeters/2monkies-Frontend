import React from "react";
import Welcome from "../components/Welcome";
import Info from "../components/index/Info";
import Room from "../components/index/Room";
import { useGetRoomsQuery } from "../redux/api/roomAPI";

const Rooms = () => {
  const { data, isError, isLoading } = useGetRoomsQuery(undefined);

  return (
    <>
      <div className="container__medium">
        <section className="escape">
          <Welcome />
          <Info />
          <div className="escape__rooms">
            {data &&
              data["hydra:member"].map((room) => {
                return <Room room={room} />;
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Rooms;
