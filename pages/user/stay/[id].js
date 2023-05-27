import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import BottomNavigation from "../../../components/BottomNavigation";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Electric Usage",
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
      label: "kiloWatt Hour",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
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

const UserStayDetail = () => {
  return (
    <div className="px-4 py-4 bg-primary-100 h-[100vh] space-y-4 text-primary-800 ">
      <div>
        <h1 className="text-4xl font-semibold">Hi, Eugene</h1>
        <h2 className="text-2xl">
          Your <span className="font-semibold">current</span> stay at{" "}
          <span className="font-semibold underline">Eleanor Hotel</span>
        </h2>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Details</h2>
        <div className="bg-primary-200 rounded-lg py-3 px-3 space-y-2">
          <h3 className="text-xl font-medium">
            From 14 June 2023 - 15 June 2023
          </h3>
          <div className="grid grid-cols-2">
            <div className="text-left">
              <p>Room Number</p>
              <p>Guest Name</p>
              <p>Check in time</p>
              <p>Checkout time</p>
              <p>Current electric usage</p>
            </div>
            <div className="text-left">
              <p>: 100</p>
              <p>: Eugene Goh</p>
              <p>: 1:00 p.m.</p>
              <p>: 11:43 a.m.</p>
              <p>:</p>
            </div>
          </div>
          <Line options={options} data={data} className="h-[10rem]" />
          <div className="grid grid-cols-2">
            <div className="text-left">
              <p>Electricity Saved</p>
              <p>Estimate Cashback</p>
            </div>
            <div className="text-left">
              <p>: 163.5 kWh</p>
              <p>: RM 20.00</p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <button className="bg-secondary-500 text-secondary-100 font-medium px-6 py-2 rounded-full">
              Check Cashback
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default UserStayDetail;
