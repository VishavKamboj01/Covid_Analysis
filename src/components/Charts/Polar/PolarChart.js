import React, { useState } from "react";
import { PolarArea } from "react-chartjs-2";
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

export default function PolarChart() {
  const [toggle, setToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const data = {
    labels: [
      "North America",
      "Europe",
      "South America",
      "Asia",
      "Africa",
      "Other Countries",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [1.093, 1.702, 0.897, 3.156, 1.574, 2.822],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(121, 218, 232)",
        ],
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
    <ChartSection id="PolarSection">
      <DataContainer data-aos="fade-right">
        <Title>Cases in region</Title>
        <PointsContainer>
          <Point>
            <Mark />
            <Text>
              This Pie chart shows the Infected people among the total number of
              people in a perticular region.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              These calculations are purely based on records given in the
              dataset.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>If we positivity rate Asia is at the top.</Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              We can actually make the comparison using eleminate option.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              Between North America and Europe, Europe has most positve rates.
              Also, between Asia Africa, Asia has more positive rates.
            </Text>
          </Point>
        </PointsContainer>
      </DataContainer>
      <ChartContainer data-aos="fade-left">
        <PolarArea type="polarArea" data={data} />
      </ChartContainer>
      {/* <ToggleContainer>
        {toggle ? (
          <ToggleSwitch animate onClick={handleToggleOff} />
        ) : (
          <ToggleSwitch2 animate={!firstRender} onClick={handleToggleOn} />
        )}
      </ToggleContainer> */}
    </ChartSection>
  );
}
