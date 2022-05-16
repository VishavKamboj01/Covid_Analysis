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
    <DataContainer data-aos="fade-left">
      <Title>Working Type</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph depicts working type of people and their Risk of being
            infected and Risk mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Persons who are travel critical and travel non-critical have higher
            risk infection.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            People who never work have higher Risk mortality because they are
            very unfit.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Persons who are working from home or stopped working have very less
            Risk infection and Risk mortality.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
