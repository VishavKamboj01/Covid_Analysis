import React, { Fragment } from "react";
import BarChart from "../../Charts/Bar/BarChart";
import Thankyou from "../Thankyou";

import {
  barChartBeforeData,
  barChartAfterData,
  barChart1BeforeData,
  barChart1AfterData,
  barChart2BeforeData,
  barChart2AfterData,
  barChart3BeforeData,
  barChart3AfterData,
} from "./barChartData.js";

import BarChart1Points from "./BarChart1Points";
import BarChart2Points from "./BarChart2Points";
import BarChart3Points from "./BarChart3Points";
import BarChart4Points from "./BarChart4Points";

export default function Section4() {
  return (
    <Fragment>
      <BarChart
        beforeData={barChartBeforeData}
        afterData={barChartAfterData}
        showInfo={true}
        alternate={false}
        animation="fade-up-left"
      >
        <BarChart1Points />
      </BarChart>

      <BarChart
        beforeData={barChart1BeforeData}
        afterData={barChart1AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-up"
      >
        <BarChart2Points />
      </BarChart>

      <BarChart
        beforeData={barChart2BeforeData}
        afterData={barChart2AfterData}
        showInfo={true}
        alternate={false}
        animation="fade-left"
      >
        <BarChart3Points />
      </BarChart>

      <BarChart
        beforeData={barChart3BeforeData}
        afterData={barChart3AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-up"
      >
        <BarChart4Points />
      </BarChart>
      <Thankyou />
    </Fragment>
  );
}
