import { Button } from "@mui/material";
import React, { Fragment } from "react";
import BarChart from "./Charts/Bar/BarChart";
import Header from "./Header/Header";
import NavigationBar from "./navbar/NavigationBar";

export default function Home() {
  return (
    <Fragment>
      <NavigationBar />
      <Header />
      <BarChart />
    </Fragment>
  );
}
