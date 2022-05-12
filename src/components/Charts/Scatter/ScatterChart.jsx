import React, { useState } from "react";
import { Scatter } from "react-chartjs-2";
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
export default function ScatterChart() {
  const [toggle, setToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const data = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const handleToggleOn = () => {
    setToggle(true);
    console.log("Change the chart");
  };

  const handleToggleOff = () => {
    setToggle(false);
    setFirstRender(false);
    console.log("Revert the chart");
  };

  return (
    <ChartSection id="BarSection">
      <ChartContainer>
        <Scatter
          type="scatter"
          options={{
            scales: {
              x: {
                type: "linear",
                position: "bottom",
              },
            },
          }}
          data={data}
        />
      </ChartContainer>
      <DataContainer>
        <Title>How has COVID-19 impacted Americans?</Title>
        <PointsContainer>
          <Point>
            <Mark />
            <Text>
              Nearly one out of every 715 people in the US died from coronavirus
              in 2021. That's 464,000 people.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              In 2021, 34 million Americans tested positive for COVID-19, up 70%
              from 20 million in 2020.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              As of January 31, 2022, 75% of the population had received at
              least one COVID-19 vaccine. Twenty-seven percent had received a
              booster shot.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              Personal healthcare spending was $3.4 trillion in 2020, a 4.5%
              increase from 2019.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              Twenty-eight million Americans (8.6% of the population) did not
              have health insurance in 2020, up from 8% in 2019.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              The federal government spent $141 billion on public health in 2021
              — a 21% decrease from 2020, but more than double its 2019 public
              health spending.
            </Text>
          </Point>
        </PointsContainer>
      </DataContainer>
      <ToggleContainer>
        {toggle ? (
          <ToggleSwitch animate onClick={handleToggleOff} />
        ) : (
          <ToggleSwitch2 animate={!firstRender} onClick={handleToggleOn} />
        )}
      </ToggleContainer>
    </ChartSection>
  );
}
