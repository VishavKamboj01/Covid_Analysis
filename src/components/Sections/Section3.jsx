import React, { Fragment } from "react";
import BarChart from "../Charts/Bar/BarChart";
import LineChart from "../Charts/Line/LineChart";
import PolarChart from "../Charts/Polar/PolarChart";
import ScatterChart from "../Charts/Scatter/ScatterChart";
import BackToSections from "./BackToSections";

export default function Section3() {
  return (
    <Fragment>
      <LineChart />
      <PolarChart />
      <BarChart />
      <ScatterChart />
      <BackToSections />
    </Fragment>
  );
}
