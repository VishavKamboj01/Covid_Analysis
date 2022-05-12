import React, { Fragment, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import NavigationBar from "./components/navbar/NavigationBar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <NavigationBar />
      <Home />
    </Fragment>
  );
}

export default App;
