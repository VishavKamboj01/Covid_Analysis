import React, { Fragment } from "react";
import About from "./About";
import SectionBanner from "./Banner/SectionBanner";

export default function Body() {
  return (
    <Fragment>
      <About />
      <SectionBanner />
    </Fragment>
  );
}
