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
      <Title>Contact with covid positive person</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            This graph shows if a person had a contact with a COVID infected
            person or not.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person having a contact with a COVID infected person has 60% more
            chances than the person who haven't had any contact with an infected
            person.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Person not having contact with COVID infected person has only 10%
            chances to get infected.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Risk mortality is higher if a person have contact with a COVID
            infected person.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
