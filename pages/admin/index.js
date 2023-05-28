import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import SideNavigation from "../../components/SideNavigation";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Average Electric Usage",
    },
  },
};

const labels = [
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
  "2:00 p.m.",
  "3:00 p.m.",
];

const data = {
  labels,
  datasets: [
    {
      label: "kWh",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

const bar_options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Average Electric Usage Saved",
    },
  },
};

const bar_labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const bar_data = {
  labels,
  datasets: [
    {
      label: "Average expenditure",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Current expenditure",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Admin() {
  const newLocal = "text-primary-600";
  return (
    <>
      <SideNavigation>
        <div className="px-4 py-4 min-h-[100vh] space-y-4 text-primary-800 ">
          <div>
            <h1 className="text-4xl font-semibold">
              Hi, <span className="gradient-title">Eleanor Hotel</span>
            </h1>
            <h2 className="text-2xl">
              Welcome Back to EcoPay <span className={newLocal}>👋</span>
            </h2>
            <h2 className="text-lg">
              /<span className="underline">Dashboard</span>
            </h2>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg py-3 px-3 space-y-4">
              <div>
                <Line
                  options={options}
                  data={data}
                  className="h-[10rem] col-span-1"
                />
              </div>
              <div>
                <Bar
                  options={bar_options}
                  data={bar_data}
                  className="h-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </SideNavigation>
    </>
  );
}
