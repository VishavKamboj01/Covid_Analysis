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
    <DataContainer data-aos="fade-left">
      <Title>Lung Disease</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph shows Risk infection and Risk mortality of people having
            lung diseases.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            People having lung disease have 1.4 more Risk mortality than people
            not having any lung disease.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Risk infection is also way higher of the people who have a lung
            disease.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            People having COVID-19 with heart conditions are less likely to
            recover as compared to people with no lung diseases.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
