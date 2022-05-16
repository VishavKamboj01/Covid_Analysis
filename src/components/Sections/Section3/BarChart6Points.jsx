import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart6Points() {
  return (
    <DataContainer data-aos="zoom-in">
      <Title>Risk of Public Transport</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph illustrates that Risk of getting infected while
            travelling in public transports.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Using more than 8 public transport gives higher risk infection and
            risk mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person using less than 5 public transports have the lowest Risk
            mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person using more than 13 public transport have more than 3.0 Risk
            mortality.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
