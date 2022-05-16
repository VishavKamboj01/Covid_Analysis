const barChartBeforeData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [
        13.28, 12.4, 12.82, 13.07, 13.33, 13.8, 14.14, 15.69, 19.76, 42.04,
        72.71,
      ],
      label: "Risk Infection in % (House Count)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChartAfterData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [0.58, 0.49, 0.31, 0.27, 0.28, 0.3, 0.34, 0.49, 0.67, 1.43, 1.88],
      label: "Risk Mortality",
      borderColor: "#3333ff",
      backgroundColor: "rgb(111, 223, 223)",
      fill: true,
    },
  ],
};

const barChart1BeforeData = {
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
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ],
  datasets: [
    {
      data: [
        8.9056, 9.1958, 9.2186, 9.949, 11.2257, 11.4545, 11.9123, 12.9821,
        13.8212, 15.6588, 16.55, 17.1228, 17.8563, 17.7313, 17.9938, 18.9431,
        19.1625, 21.8729, 29.9481, 24.2529, 23.3765,
      ],
      label: "Risk Infection in % (Contacts Count)",
      borderColor: "#3333ff",
      backgroundColor: "rgb(111, 223, 223)",
      fill: true,
    },
  ],
};

const barChart1AfterData = {
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
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ],
  datasets: [
    {
      data: [
        0.5899, 0.4594, 0.3906, 0.3929, 0.3747, 0.371, 0.332, 0.3533, 0.3193,
        0.3506, 0.2901, 0.3611, 0.3038, 0.3248, 0.3, 0.3439, 0.4469, 0.3847,
        0.7425, 0.4121, 0.2892,
      ],

      label: "Risk Mortality",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart2BeforeData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [10.5781, 64.6156],

      label: "Risk Infection (Contacts)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(252, 79, 79,0.7)",
      fill: true,
    },
  ],
};

const barChart2AfterData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [0.3957, 0.4645],

      label: "Risk Mortality (Covid-19 Contacts)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart3BeforeData = {
  labels: [
    "Home",
    "Never",
    "Stopped",
    "Travel Critical",
    "Travel Non-Critical",
  ],
  datasets: [
    {
      data: [9.3918, 10.0524, 8.0107, 23.0089, 19.3699],
      label: "Risk Infection (Working)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(247, 110, 17,0.6)",
      fill: true,
    },
  ],
};

const barChart3AfterData = {
  labels: [
    "Home",
    "Never",
    "Stopped",
    "Travel Critical",
    "Travel Non-Critical",
  ],
  datasets: [
    {
      data: [0.3671, 0.8088, 0.2715, 0.2813, 0.337],
      label: "Risk Mortality (Working)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart4BeforeData = {
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
        8.8905, 15.4807, 13.9776, 12.8232, 12.2781, 12.6737, 11.5752, 20.2528,
        19.7602, 29.5255, 36.2429,
      ],
      label: "Risk Infection (Age)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart4AfterData = {
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
        0.062, 0.0557, 0.0571, 0.0582, 0.4402, 0.3551, 1.1331, 2.6809, 7.0471,
        7.6303, 12.8886,
      ],
      label: "Risk Mortality (Age)",
      borderColor: "#3333ff",
      backgroundColor: "rgb(255, 188, 128)",
      fill: true,
    },
  ],
};

const barChart5BeforeData = {
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
        27.22, 28.04, 33.03, 32.54, 38.18, 33.9, 41.73, 38.26, 43.95, 37.39,
        47.53, 39.36, 46.81, 46.23, 50.16,
      ],
      label: "Risk Infected",
      borderColor: "#3333ff",
      backgroundColor: "rgba(226, 215, 132, 0.9)",
      fill: true,
    },
  ],
};

const barChart5AfterData = {
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
        0.4826, 0.5202, 0.6134, 0.6848, 0.8258, 0.7848, 1.1664, 0.7887, 2.1185,
        0.5308, 2.1105, 1.5421, 2.7644, 1.8459, 2.0475,
      ],
      label: "Risk Mortality",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      fill: true,
    },
  ],
};

export {
  barChartBeforeData,
  barChartAfterData,
  barChart1BeforeData,
  barChart1AfterData,
  barChart2BeforeData,
  barChart2AfterData,
  barChart3BeforeData,
  barChart3AfterData,
  barChart4BeforeData,
  barChart4AfterData,
  barChart5BeforeData,
  barChart5AfterData,
};
