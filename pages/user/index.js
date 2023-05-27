import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import BottomNavigation from "../../components/BottomNavigation";
import { useRouter } from "next/router";

const articleTitles = [
  "How to reduce electricity consumption in a small apartment",
  "Path to zero carbon footprint",
  "Sustainable living in the city",
  "City living with zero carbon footprint",
  "Hotel Eleanor - Room 204",
];

const UserDashboard = () => {
  const router = useRouter();

  return (
    <div className="px-4 py-4 bg-gradient-to-br from-primary-50 via-primary-50 to-primary-100 space-y-4 text-primary-800">
      <div>
        <h1 className="text-4xl font-semibold">
          Hi,{" "}
          <span className=" bg-clip-text bg-gradient-to-br from-primary-300 to-primary-700 text-transparent">
            Eugene
          </span>
        </h1>
        <h2 className="text-2xl">Welcome Back</h2>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Current Stay</h2>
        <div
          className="bg-gradient-to-br from-primary-200 via-primary-300 to-primary-600 rounded-lg py-3 px-3 h-[12rem] flex flex-col justify-between shadow-sm hover:shadow-md hover:cursor-pointer"
          onClick={() => {
            router.push("/user/stay/1");
          }}
        >
          <div>
            <h3 className="text-lg font-semibold">Hotel Eleanor - Room 204</h3>
            <h4 className="text-sm">14 June 2023 - 15 June 2023</h4>
          </div>

          <div>
            <p className="text-md">
              Device turned on for:
              <span className="text-primary-100 font-medium"> 1 : 30 Hour</span>
            </p>
            <div className="flex justify-between items-center">
              <p className="text-md">
                Electricity Used:{" "}
                <span className="text-primary-100 font-medium">50 kWh</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Past Stay</h2>
        <div className="overflow-x-scroll">
          <div className="flex gap-2 w-[60rem]">
            {[1, 1, 1, 1, 1].map((index) => (
              <div
                className="bg-gradient-to-br from-primary-200 via-primary-300 to-primary-600 rounded-lg py-2 px-2 h-[10rem] w-1/2 flex flex-col justify-between shadow-sm"
                key={index}
              >
                <div>
                  <h3 className="text-lg font-semibold">Hotel Eleanor</h3>
                  <h4 className="text-sm">1 May 2023</h4>
                  <h4 className="text-sm">2 months ago</h4>
                </div>
                <div className="flex">
                  <a
                    className="ml-auto pr-1"
                    onClick={() => router.push("/user/stay/1")}
                  >
                    <ArrowRightCircleIcon className="w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold">Articles</h2>

        <div className="overflow-x-scroll">
          <div className="space-y-2">
            {articleTitles.map((index) => (
              <div
                className="bg-gradient-to-br from-primary-200 via-primary-300 to-primary-600 rounded-lg py-2 px-2 h-[10rem] flex flex-col justify-between shadow-sm"
                key={index}
              >
                <div>
                  <h3 className="text-lg font-semibold">
                    How to reduce electricity consumption in a small apartment
                  </h3>
                  <h4 className="text-sm">1 May 2023</h4>
                  <h4 className="text-sm">Robin May</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default UserDashboard;
