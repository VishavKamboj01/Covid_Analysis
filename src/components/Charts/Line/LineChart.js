import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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

export default function LineChart({ beforeData, afterData, showInfo }) {
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
    <ChartSection id="LineSection">
      <ChartContainer data-aos="zoom-in">
        <Line
          type="line"
          data={currentData}
          options={{
            animations: {
              tension: 0.2,
            },
            transitions: {
              show: {
                animations: {
                  x: {
                    from: 0,
                  },
                  y: {
                    from: 400,
                  },
                },
              },
              hide: {
                animations: {
                  x: {
                    to: 0,
                  },
                  y: {
                    to: 400,
                  },
                },
              },
            },
          }}
        />
      </ChartContainer>
      {showInfo && (
        <DataContainer data-aos="fade-left">
          <Title>Monthy Spread</Title>
          <PointsContainer>
            <Point>
              <Mark />
              <Text>
                From this plot we can see the spread of COVID-19 throughout the
                year.
              </Text>
            </Point>
            <Point>
              <Mark />
              <Text>
                We can see spread of COVID-19 in different regions all around
                the world.
              </Text>
            </Point>
            <Point>
              <Mark />
              <Text>
                By carefully observing the graph, we can see the spike in number
                of cases at different intervals during the year.
              </Text>
            </Point>
            <Point>
              <Mark />
              <Text>
                We can actully visual the waves of COVID in different regions.
              </Text>
            </Point>
            <Point>
              <Mark />
              <Text>
                By the same method we can visualize the data of different in a
                perticular region.
              </Text>
            </Point>
          </PointsContainer>
        </DataContainer>
      )}

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
