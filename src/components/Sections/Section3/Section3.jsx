import React, { Fragment } from "react";
import BarChart from "../../Charts/Bar/BarChart";
import BackToSections from "../BackToSections";
import {
  barChartBeforeData,
  barChartAfterData,
  barChart1BeforeData,
  barChart1AfterData,
  barChart2BeforeData,
  barChart2AfterData,
  barChart3BeforeData,
  barChart3AfterData,
  barChart4BeforeData,
  barChart4AfterData,
  barChart5BeforeData,
  barChart5AfterData,
} from "../Section3/barChartData";

import BarChart1Points from "./BarChart1Points";
import BarChart2Points from "./BarChart2Points";
import BarChart3Points from "./BarChart3Points";
import BarChart4Points from "./BarChart4Points";
import BarChart5Points from "./BarChart5Points";
import BarChart6Points from "./BarChart6Points";

export default function Section3() {
  return (
    <Fragment>
      <BarChart
        beforeData={barChartBeforeData}
        afterData={barChartAfterData}
        showInfo={true}
        alternate={false}
        animation="fade-up"
      >
        <BarChart1Points />
      </BarChart>
      <BarChart
        beforeData={barChart1BeforeData}
        afterData={barChart1AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-right"
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

      <BarChart
        beforeData={barChart4BeforeData}
        afterData={barChart4AfterData}
        showInfo={true}
        alternate={false}
        animation="fade-up"
      >
        <BarChart5Points />
      </BarChart>

      <BarChart
        beforeData={barChart5BeforeData}
        afterData={barChart5AfterData}
        showInfo={true}
        alternate={true}
        animation="fade-right"
      >
        <BarChart6Points />
      </BarChart>
      <BackToSections />
    </Fragment>
  );
}
