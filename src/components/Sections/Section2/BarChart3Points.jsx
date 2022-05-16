import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart3Points() {
  return (
    <DataContainer data-aos="flip-up">
      <Title>Members in a House</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            In this graph the count of members in house is shown i.e there are
            more than 3 lakh house hold with 2 members living in them.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            We can say people living in set of 2 to 3 and 10 to 11 are more
            likely to have COVID.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            There are instances many people are living together may be because
            of less space, thats why COVID cases are increasing.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>Members more than 9 have higher risk infection.</Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
