const barChartBeforeData = {
  labels: ["Female", "Male", "Others"],
  datasets: [
    {
      data: [637389, 382573, 3460],
      label: "Total People",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.6)",
      fill: true,
    },
  ],
};

const barChartAfterData = {
  labels: ["Female", "Male", "Others"],
  datasets: [
    {
      data: [13172, 9631, 138],
      label: "Symptoms",
      borderColor: "#3333ff",
      backgroundColor: "rgba(253, 93, 93, 0.6)",
      fill: true,
    },
    {
      data: [4027, 7091, 17],
      label: "Infected",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.6)",
      fill: true,
    },
  ],
};

const barChart2BeforeData = {
  labels: [
    "0-10",
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "50-60",
    "60-70",
    "70-80",
    "80-90",
    "90-100",
    "100-110",
  ],
  datasets: [
    {
      data: [
        5514, 33178, 211556, 294651, 212912, 129464, 79020, 32083, 6148, 1311,
        107,
      ],
      label: "Total",
      borderColor: "#3333ff",
      backgroundColor: "rgba(235, 83, 83, 0.6)",
      fill: true,
    },
  ],
};

const barChart2AfterData = {
  labels: [
    "0-10",
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "50-60",
    "60-70",
    "70-80",
    "80-90",
    "90-100",
    "100-110",
  ],
  datasets: [
    {
      data: [82, 1548, 6001, 6263, 3660, 2206, 1139, 1693, 264, 78, 7],
      label: "Covid-19 Symptoms",
      borderColor: "#3333ff",
      backgroundColor: "rgba(101, 193, 140, 0.9)",
      fill: true,
    },
    {
      data: [21, 524, 1667, 1651, 1287, 1403, 1072, 3644, 483, 183, 10],
      label: "Infected",
      borderColor: "#3333ff",
      backgroundColor: "rgb(224, 216, 176)",
      fill: true,
    },
  ],
};

const barChart3BeforeData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [
        96768, 330528, 214160, 200349, 97315, 37563, 13850, 6434, 2622, 3036,
        3255,
      ],
      label: "Total (House Count)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart3AfterData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [0.99, 0.93, 1.0, 0.96, 1.19, 1.42, 1.65, 2.92, 6.21, 20.52, 27.77],
      label: "Infected",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      fill: true,
    },
  ],
};

const barChart4BeforeData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [7463, 6637, 2243, 2912, 1879, 1369, 702, 747, 165, 1942, 120],
      label: "Total (Public Transport)",
      borderColor: "#3333ff",
      backgroundColor: "rgb(111, 223, 223)",
      fill: true,
    },
  ],
};

const barChart4AfterData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ],
  datasets: [
    {
      data: [
        4.38, 4.23, 7.44, 6.62, 9.68, 6.64, 12.82, 8.83, 16.36, 7.0, 11.66,
        6.21, 15.73, 14.31, 18.58,
      ],
      label: "Infected",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      fill: true,
    },
  ],
};

export {
  barChartBeforeData,
  barChartAfterData,
  barChart2BeforeData,
  barChart2AfterData,
  barChart3BeforeData,
  barChart3AfterData,
  barChart4BeforeData,
  barChart4AfterData,
};
