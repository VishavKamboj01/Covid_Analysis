import React from "react";
import {
  DataContainer,
  Title,
  PointsContainer,
  Point,
  Mark,
  Text,
} from "../../Charts/styles";

export default function BarChart5Points() {
  return (
    <DataContainer data-aos="zoom-in">
      <Title>Risk rate w.r.t age</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph shows Risk infection and Risk mortality according to age
            of a person.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Group of people with age more than 60 have higher risk to infection
            and risk mortality.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Age group of 20 to 50 have much lower risk infection as compared to
            other age groups.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Persons having age more than 90 have the highest Risk mortality of
            more than 10.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
