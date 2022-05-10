import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  BarChartContainer,
  BarChartSection,
  DataContainer,
  Text,
  Title,
} from "./styles";

export default function BarChart() {
  const barChartData = {
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: "Infected People",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
      {
        data: [1216410, 1371390, 1477380],
        label: "Deaths People",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <BarChartSection>
      <DataContainer>
        <Title>Section Title</Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quae vel aut, accus amus optio eius nemo atque, qui busdam porro iusto
          dolo ribus conse ctetur, digni ssimos illum tenetur culpa officia.
          Dicta, necessi tatibus voluptate. Ad pariatur eum qui itaque dolores
          asperiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt quae vel aut, accus amus optio eius nemo atque, qui busdam
          porro iusto dolo ribus conse ctetur, digni ssimos illum tenetur culpa
          officia. Dicta, necessi tatibus voluptate. Ad pariatur eum qui itaque
          dolores asperiores.
        </Text>
      </DataContainer>
      <BarChartContainer>
        <Bar
          type="bar"
          width={100}
          height={400}
          options={{
            title: {
              display: true,
              text: "COVID-19 Cases of Last 3 Months",
              fontSize: 15,
            },
            legend: {
              display: true, //Is the legend shown?
              position: "top", //Position of the legend.
            },
            maintainAspectRatio: false,
          }}
          data={barChartData}
        />
      </BarChartContainer>
    </BarChartSection>
  );
}
