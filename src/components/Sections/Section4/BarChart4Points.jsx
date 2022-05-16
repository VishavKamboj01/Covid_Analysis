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
    <DataContainer data-aos="zoom-in">
      <Title>Other Chronic Diseases</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph depicts risk infection and risk mortality of people
            having other chronic diseases.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person having chronic diseases have quite more risk of Mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            As we can see from the graph difference in risk infection of having
            chronic diseases and not having chronic disease is very less.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Chronic diseases doesn't have that much impact on a person having
            COVID.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
