import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart2Points() {
  return (
    <DataContainer data-aos="fade-up">
      <Title>Number of people came in contact</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph illustrates persons having contacts in their day to day
            life.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            You can see higher contacts has higher risk infection and risk
            mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            More than 18 contacts have highest mortality and infection.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            This graph shows that if you have lower number of contacts with
            other people, you are less likely to get infected.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
