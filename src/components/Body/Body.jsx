import React, { Fragment } from "react";
import About from "./About";
import SectionBanner from "./Banner/SectionBanner";

export default function Body({ onSectionChange }) {
  return (
    <Fragment>
      <About />
      <SectionBanner onSectionChange={onSectionChange} />
    </Fragment>
  );
}
