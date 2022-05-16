import React, { Fragment } from "react";
import BarChart from "../../Charts/Bar/BarChart";
import BackToSections from "../BackToSections";

import {
  barChartBeforeData,
  barChartAfterData,
  barChart2BeforeData,
  barChart2AfterData,
  barChart3BeforeData,
  barChart3AfterData,
  barChart4BeforeData,
  barChart4AfterData,
} from "./barChartData.js";

import BarChart1Points from "./BarChart1Points";
import BarChart2Points from "./BarChart2Points";
import BarChart3Points from "./BarChart3Points";
import BarChart4Points from "./BarChart4Points";

export default function Section2() {
  return (
    <Fragment>
      <BarChart
        beforeData={barChartBeforeData}
        afterData={barChartAfterData}
        showInfo={true}
        alternate={false}
        animation="fade-left"
      >
        <BarChart1Points />
      </BarChart>

      <BarChart
        beforeData={barChart2BeforeData}
        afterData={barChart2AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-up-right"
      >
        <BarChart2Points />
      </BarChart>

      <BarChart
        beforeData={barChart3BeforeData}
        afterData={barChart3AfterData}
        showInfo={true}
        alternate={false}
        animation="fade-left"
      >
        <BarChart3Points />
      </BarChart>

      <BarChart
        beforeData={barChart4BeforeData}
        afterData={barChart4AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-right"
      >
        <BarChart4Points />
      </BarChart>
      <BackToSections />
    </Fragment>
  );
}
