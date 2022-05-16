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
    <DataContainer data-aos="fade-up-left">
      <Title>Age Group</Title>
      <PointsContainer>
        <Point>
          <Mark />
          <Text>
            According to this data people in the age group 30 to 40 are in
            mojority in this dataset.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            This can mean anything this data is coming from multiple sources.
            People in age group 20 to 40 are more likely to be using these
            services and sharing their data.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Now if we see infection trends we can clearly see that people in age
            group 70 - 80 are most vulnerable.
          </Text>
        </Point>
        <Point>
          <Mark />
          <Text>
            Now an interesting trend is that as we go above in age group
            difference between infected and people with symptoms is decreasing
            at one point it is larger than people with symptoms.
          </Text>
        </Point>
      </PointsContainer>
    </DataContainer>
  );
}
