import SideNavigation from '../../components/SideNavigation'
import Head from 'next/head'
import Image from 'next/image'
import { Heading } from '@chakra-ui/react'
import { Line, Bar } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

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
      text: "Overall Electric Usage",
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

import { faker } from "@faker-js/faker";
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const bar_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const bar_data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Admin() {
  const newLocal = "text-primary-600";
  return (
    <>
      <SideNavigation>
        <div className="px-4 py-4  h-[100vh] space-y-4 text-primary-800 ">
          <div>
            <h1 className="text-4xl font-semibold">Hi, Eugene</h1>
            <h2 className="text-2xl">
              Welcome Back Admin <span className={newLocal}>👋</span>
            </h2>
          </div>
          <div className="space-y-2">
            <div className=" rounded-lg py-3 px-3 space-y-2">
              <div className="grid grid-col-2">

                <Line options={options} data={data} className="h-[10rem] col-span-1" />
                <Bar options={bar_options} data={bar_data} className="h-[10rem]" />

              </div>
            </div>
          </div>
        </div>
      </SideNavigation>
    </>
  )
}
