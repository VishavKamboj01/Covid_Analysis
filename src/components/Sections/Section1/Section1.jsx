import React, { Fragment } from "react";
import LineChart from "../../Charts/Line/LineChart";
import PolarChart from "../../Charts/Polar/PolarChart";
import BackToSections from "../BackToSections";

import { lineChartBeforeData, lineChartAfterData } from "./lineChartData";

export default function Section1() {
  return (
    <Fragment>
      <LineChart
        beforeData={lineChartBeforeData}
        afterData={lineChartAfterData}
        showInfo={true}
      />
      <PolarChart />
      <BackToSections />
    </Fragment>
  );
}
