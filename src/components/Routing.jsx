import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as views } from "../types/RouteTypes.js";
import Index from "../views/Index.jsx";
import Rooms from "../views/Rooms.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={views.INDEX} element={<Index />} />
        <Route path={views.ROOMS} element={<Rooms />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
