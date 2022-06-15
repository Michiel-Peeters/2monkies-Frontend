import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as views } from "../types/RouteTypes.js";
import Index from "../views/Index.jsx";
import Rooms from "../views/Rooms.jsx";
import PlayRoom from "./PlayRoom.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={views.INDEX} element={<Index />} />
        <Route path={views.ROOMS}>
          <Route index element={<Rooms />} />
          <Route path={views.ROOMS + "/:id"} element={<PlayRoom />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
