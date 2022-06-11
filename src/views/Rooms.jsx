import React from "react";
import Welcome from "../components/Welcome";
import Info from "../components/index/Info";
import Room from "../components/index/Room";
import { useGetDifficultiesQuery } from "../redux/api/difficultyAPI";

const Rooms = () => {
  const { data, isError, isLoading } = useGetDifficultiesQuery(undefined);

  return (
    <>
      <div className="container__medium">
        <section className="escape">
          {isError && <p>Error...</p>}
          {isLoading && <p>Loading...</p>}
          {data &&
            data["hydra:member"].map(({ id, name }) => {
              return (
                <h1>
                  {id} {name}
                </h1>
              );
            })}
          <Welcome />
          <Info />
          <div className="escape__rooms">
            <Room />
            <Room />
            <Room />
          </div>
        </section>
      </div>
    </>
  );
};

export default Rooms;
