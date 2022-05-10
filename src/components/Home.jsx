import { Button } from "@mui/material";
import React, { Fragment } from "react";
import BarChart from "./Charts/Bar/BarChart";
import LineChart from "./Charts/Line/LineChart";
import PolarChart from "./Charts/Polar/PolarChart";
import Header from "./Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <BarChart />
      <LineChart />
      <PolarChart />
    </Fragment>
  );
}
