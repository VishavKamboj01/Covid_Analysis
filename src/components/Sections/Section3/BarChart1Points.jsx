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
      <Title>House Count</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            These graphs shows Risk Infection and Risk Mortality number of
            persons in the house.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            House having more than 9 memebers have higher risk infection and
            mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Around 30% people are living in set of two. This percentage is more
            than any other set we have in this population.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            We see a decrease in risk infection and mortality because there are
            chances they have space in there house for isolation so it prevents
            the virus to spread.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
