const lineChartBeforeData = {
  labels: [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Month wise 2020 cases",
      data: [66, 1100, 340, 257, 552, 460, 749, 4389, 2064, 1410],
      fill: false,
      borderColor: "rgba(64, 223, 239, 0.6)",
      tension: 0.2,
    },
  ],
};

const lineChartAfterData = {
  labels: [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "North America",
      data: [12, 850, 201, 126, 300, 303, 536, 3360, 1544, 1163],
      fill: false,
      borderColor: "rgba(125, 30, 106, 0.6)",
      tension: 0.2,
    },
    {
      label: "South America",
      data: [1, 110, 32, 27, 54, 31, 30, 49, 28, 39],
      fill: false,
      borderColor: "rgba(238, 176, 176, 0.6)",
      tension: 0.2,
    },
    {
      label: "Europe",
      data: [2, 99, 78, 43, 111, 62, 115, 696, 374, 152],
      fill: false,
      borderColor: "rgba(253, 93, 93, 0.6)",
      tension: 0.2,
    },
    {
      label: "Africa",
      data: [0, 1, 2, 15, 25, 15, 4, 12, 4, 10],
      fill: false,
      borderColor: "rgba(21, 19, 60, 0.6)",
      tension: 0.2,
    },
    {
      label: "Asia",
      data: [5, 15, 13, 37, 40, 39, 51, 99, 75, 21],
      fill: false,
      borderColor: "rgb(255, 196, 221)",
      tension: 0.2,
    },
    {
      label: "Other Contries",
      data: [0, 4, 0, 0, 11, 6, 2, 134, 5, 4],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.2,
    },
  ],
};

export { lineChartBeforeData, lineChartAfterData };
