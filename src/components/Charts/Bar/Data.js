const barChartBeforeData = {
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

const barChartAfterData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      data: [11066490, 10331691, 11237119],
      label: "Infected People",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      fill: true,
    },
    {
      data: [10416410, 2871390, 2216410],
      label: "Deaths People",
      borderColor: "#ff3333",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      fill: true,
    },
  ],
};

export { barChartBeforeData, barChartAfterData };
