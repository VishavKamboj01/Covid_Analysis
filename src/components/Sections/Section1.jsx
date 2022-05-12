import React, { Fragment } from "react";
import BarChart from "../Charts/Bar/BarChart";
import LineChart from "../Charts/Line/LineChart";
import PolarChart from "../Charts/Polar/PolarChart";
import ScatterChart from "../Charts/Scatter/ScatterChart";

export default function Section1() {
  return (
    <Fragment>
      <BarChart />
      <LineChart />
      <PolarChart />
      <ScatterChart />
    </Fragment>
  );
}
