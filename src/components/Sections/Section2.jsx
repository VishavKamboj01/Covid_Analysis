import React, { Fragment } from "react";
import BarChart from "../Charts/Bar/BarChart";
import LineChart from "../Charts/Line/LineChart";
import PolarChart from "../Charts/Polar/PolarChart";
import ScatterChart from "../Charts/Scatter/ScatterChart";

export default function Section2() {
  return (
    <Fragment>
      <ScatterChart />
      <LineChart />
      <BarChart />
      <PolarChart />
    </Fragment>
  );
}
