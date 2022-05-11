import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  ChartContainer,
  ChartSection,
  DataContainer,
  Point,
  PointsContainer,
  Text,
  Title,
  Mark,
} from "../styles";

export default function PolarChart() {
  const data = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  return (
    <ChartSection id="PolarSection">
      <DataContainer>
        <Title>Section Title</Title>
        <PointsContainer>
          <Point>
            <Mark />
            <Text>
              Nearly one out of every 715 people in the US died from coronavirus
              in 2021. That's 464,000 people.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              In 2021, 34 million Americans tested positive for COVID-19, up 70%
              from 20 million in 2020.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              As of January 31, 2022, 75% of the population had received at
              least one COVID-19 vaccine. Twenty-seven percent had received a
              booster shot.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              Personal healthcare spending was $3.4 trillion in 2020, a 4.5%
              increase from 2019.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              Twenty-eight million Americans (8.6% of the population) did not
              have health insurance in 2020, up from 8% in 2019.
            </Text>
          </Point>
          <Point>
            <Mark />
            <Text>
              The federal government spent $141 billion on public health in 2021
              — a 21% decrease from 2020, but more than double its 2019 public
              health spending.
            </Text>
          </Point>
        </PointsContainer>
      </DataContainer>
      <ChartContainer>
        <PolarArea type="polarArea" data={data} style={{ width: "30%" }} />
      </ChartContainer>
    </ChartSection>
  );
}
