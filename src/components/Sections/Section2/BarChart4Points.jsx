import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart4Points() {
  return (
    <DataContainer data-aos="zoom-in-left">
      <Title>Public Transport Count</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph depicts person using public transport in their daily
            life.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Public transport count more than 12 have higher cases of COVID-19.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Public transport count less than 7 have less cases of COVID-19.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person using more than 15 public transport have 18 percent of
            COVID-19 cases.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
