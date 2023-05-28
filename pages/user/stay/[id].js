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
import { FaBed, FaClock, FaUserAlt } from "react-icons/fa";

import { AiOutlineCheckCircle } from "react-icons/ai";
import BottomNavigation from "../../../components/BottomNavigation";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

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
      borderColor: "#27767a",
      backgroundColor: "#f3fafa",
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
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/user/cashback-success");
  };
  return (
    <div className="px-4 pt-4 pb-40 bg-primary-50 min-h-[100vh] space-y-10 text-primary-800">
      <div>
        <h1 className="text-4xl font-semibold bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          Hi,{" "}
          <span className="bg-clip-text bg-gradient-to-br from-primary-300 to-primary-700 text-transparent">
            Eugene
          </span>
        </h1>
        <h2 className="text-2xl">
          Your <span className="font-semibold">current</span> stay at{" "}
          <span className="font-semibold underline">Eleanor Hotel</span>
        </h2>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Details</h2>
        <div className="bg-primary-50 rounded-md py-5 px-4 space-y-2 shadow-xl">
          <h3 className="text-xl font-semibold gradient-title">
            From 14 June 2023 - 15 June 2023
          </h3>
          <div className="grid grid-cols-2">
            <div className="text-left text-primary-600">
              <p className="flex items-center gap-2">
                <FaBed /> Room No
              </p>
              <p className="flex items-center gap-2">
                <FaUserAlt /> Guest
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Check in time
              </p>
              <p className="flex items-center gap-2">
                <FaClock /> Checkout time
              </p>
            </div>
            <div className="text-left">
              <p>: 100</p>
              <p>: Eugene Goh</p>
              <p>: 1:00 p.m.</p>
              <p>: 11:43 a.m.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Energy Consumption</h2>
        <div className="bg-primary-50 rounded-md py-5 px-4 space-y-2 shadow-xl">
          <Line options={options} data={data} className="h-[10rem]" />
          <div className="grid grid-cols-2">
            <div className="text-left text-primary-600">
              <p>Electricity Saved</p>
              <p>Estimate Cashback</p>
            </div>
            <div className="text-left">
              <p>: 163.5 kWh</p>
              <p>: RM 20.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4">
        <button
          className="bg-primary-700 text-secondary-100 font-medium px-6 py-2 rounded-md"
          onClick={handleButtonClick}
        >
          Check Cashback 🎉
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default UserStayDetail;
