import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart1Points() {
  return (
    <DataContainer data-aos="fade-right">
      <Title>Gender</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            We can clearly see that there are more number of females as compared
            to males.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>We can see that male infection rate is high.</Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            This data put our positive rate between 1 and 1.2 percent.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            In this graph number of people having reported symptoms and people
            that actually had COVID.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
