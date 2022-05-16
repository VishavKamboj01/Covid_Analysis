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
    <DataContainer data-aos="fade-up">
      <Title>Diabetes</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph shows about the people having diabetes and their risk to
            get infected.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Diabetes patiants have higher risk of infection and risk of
            mortality from COVID.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            As we can observe from the graph the difference of risk infection
            and mortality in asthma patiants and non diabetes patiants is high.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
