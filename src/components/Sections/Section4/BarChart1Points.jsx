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
    <DataContainer data-aos="fade-up-right">
      <Title>Heart Disease</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph shows that the people having a heart disease are more
            likely to have Risk mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            People having heart disease have 2.3 more Risk mortality than people
            not having a heart disease.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Risk infection is also way higher of the people who have a heart
            disease.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            People having COVID-19 with heart conditions are less likely to
            recover as compared to people with no heart diseases.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
