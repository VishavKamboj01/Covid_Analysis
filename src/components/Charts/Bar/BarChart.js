import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import {
  ChartContainer,
  ChartSection,
  DataContainer,
  Point,
  PointsContainer,
  Text,
  Title,
  Mark,
  ToggleContainer,
  ToggleSwitch,
  ToggleSwitch2,
} from "../styles";

export default function BarChart({
  beforeData,
  afterData,
  showInfo,
  alternate,
  children,
  animation,
}) {
  const [toggle, setToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [currentData, setCurrentData] = useState(beforeData);

  const handleToggleOn = () => {
    setToggle(true);
    setCurrentData(afterData);
  };

  const handleToggleOff = () => {
    setToggle(false);
    setFirstRender(false);
    setCurrentData(beforeData);
  };

  return (
    <div style={{ display: "inline" }}>
      {!alternate ? (
        <ChartSection id="BarSection">
          {children}

          <ChartContainer data-aos={animation}>
            <Bar
              type="bar"
              width={100}
              height={400}
              options={{
                title: {
                  display: true,
                  text: "COVID-19 Cases of Last 3 Months",
                  fontSize: 15,
                },
                legend: {
                  display: true, //Is the legend shown?
                  position: "top", //Position of the legend.
                },
                maintainAspectRatio: false,
              }}
              data={currentData}
            />
          </ChartContainer>

          <ToggleContainer>
            {toggle ? (
              <ToggleSwitch animate onClick={handleToggleOff} />
            ) : (
              <ToggleSwitch2 animate={!firstRender} onClick={handleToggleOn} />
            )}
          </ToggleContainer>
        </ChartSection>
      ) : (
        <ChartSection id="BarSection">
          <ChartContainer data-aos={animation}>
            <Bar
              type="bar"
              width={100}
              height={400}
              options={{
                title: {
                  display: true,
                  text: "COVID-19 Cases of Last 3 Months",
                  fontSize: 15,
                },
                legend: {
                  display: true, //Is the legend shown?
                  position: "top", //Position of the legend.
                },
                maintainAspectRatio: false,
              }}
              data={currentData}
            />
          </ChartContainer>
          {children}
          <ToggleContainer>
            {toggle ? (
              <ToggleSwitch animate onClick={handleToggleOff} />
            ) : (
              <ToggleSwitch2 animate={!firstRender} onClick={handleToggleOn} />
            )}
          </ToggleContainer>
        </ChartSection>
      )}
    </div>
  );
}
