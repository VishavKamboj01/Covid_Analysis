const barChartBeforeData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [12.9367, 26.9327],

      label: "Risk Infection (Heart Disease)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(51, 60, 131, 0.7)",
      fill: true,
    },
  ],
};

const barChartAfterData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [0.3563, 2.5998],
      label: "Risk Mortality (Heart Disease)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
      fill: true,
    },
  ],
};

const barChart1BeforeData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [13.115, 19.1073],

      label: "Risk Infection (Lung Disease)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(253, 111, 150, 0.8)",
      fill: true,
    },
  ],
};

const barChart1AfterData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [0.3788, 1.7559],

      label: "Risk Mortality (Lung Disease)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(149, 218, 193, 0.9)",
      fill: true,
    },
  ],
};

const barChart2BeforeData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [12.9343, 17.3551],

      label: "Risk Infection (Diabetes)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(0, 175, 193, 0.8)",
      fill: true,
    },
  ],
};

const barChart2AfterData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [0.3202, 1.6161],

      label: "Risk Mortality",
      borderColor: "#3333ff",
      backgroundColor: "rgba(226, 215, 132, 0.9)",
      fill: true,
    },
  ],
};

const barChart3BeforeData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [13.1396, 14.0318],

      label: "Risk Infection (Other Chronic Diseases)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(51, 60, 131, 0.7)",
      fill: true,
    },
  ],
};

const barChart3AfterData = {
  labels: ["No", "Yes"],
  datasets: [
    {
      data: [0.3813, 0.6303],
      label: "Risk Mortality (Other Chronic Diseases)",
      borderColor: "#3333ff",
      backgroundColor: "rgba(255, 123, 169, 0.6)",
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
};
