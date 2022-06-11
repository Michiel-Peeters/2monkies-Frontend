import React from "react";
import Welcome from "../components/Welcome";
import Info from "../components/index/Info";
import Room from "../components/index/Room";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <div className="container__medium">
        <section className="escape">
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
