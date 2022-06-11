import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Skeleton from "./components/Skeleton";
import Routing from "./components/Routing";

import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Skeleton>
          <Routing />
        </Skeleton>
      </Router>
    </>
  );
};

export default App;
