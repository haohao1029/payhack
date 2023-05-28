import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { AiFillClockCircle } from "react-icons/ai";
import BottomNavigation from "../../components/BottomNavigation";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import Link from "next/link";
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
    <div className="px-4 py-4 bg-gradient-to-br from-primary-50 via-primary-50 to-primary-100 space-y-4 text-primary-700">
      <div>
        <h1 className="text-4xl font-semibold">
          Hi,{" "}
          <span className="bg-clip-text bg-gradient-to-br from-primary-300 to-primary-700 text-transparent">
            Eugene
          </span>
        </h1>
        <h2 className="text-2xl">Welcome Back</h2>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Current Accommodation</h2>
        <div
          className="rounded-lg py-3 px-3 h-[12rem] flex flex-col justify-between shadow-sm hover:shadow-md hover:cursor-pointer relative"
          onClick={() => {
            router.push("/user/stay/1");
          }}
        >
          <div
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1610392734074-02f696fd30a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
              filter: "brightness(40%)",
            }}
          ></div>

          {/* Card content */}
          <div className="relative z-10 text-primary-700">
            <h3 className="text-xl font-semibold text-white">
              Hotel Eleanor - Room 204
            </h3>
            <h4 className="text-sm text-primary-500">
              14 June 2023 - 15 June 2023
            </h4>

            <div className="mt-auto pt-5">
              <p className="text-md text-primary-500 font-semibold">
                <AiFillClockCircle />
                <span className="text-primary-100 font-medium"> 1.5 Hour</span>
              </p>
              <div className="flex justify-between items-center font-semibold pt-2">
                <p className="text-md text-primary-500 font-medium">
                  <GiElectric />{" "}
                  <span className="text-primary-100 font-medium">50 kWh</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Previous Stays</h2>
        <div className="overflow-x-scroll">
          <div className="flex gap-2 w-[60rem]">
            {[1, 1, 1, 1, 1].map((index) => (
              <div
                className="relative bg-gradient-to-br from-primary-200 via-primary-300 to-primary-600 rounded-lg py-2 px-2 h-[10rem] w-1/2 flex flex-col justify-between shadow-sm"
                key={index}
              >
                <div
                  className="absolute top-0 left-0 h-full w-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1590490359854-dfba19688d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80')`,
                    filter: "brightness(40%)",
                  }}
                ></div>
                <div className="z-10 text-primary-500">
                  <h3 className="text-lg font-semibold pb-3 text-white">
                    Hotel Eleanor
                  </h3>
                  <h4 className="text-sm text-primary-400">
                    <BsFillCalendarDateFill />
                    <span className="text-white">1 May 2023</span>
                  </h4>
                  <h4 className="text-sm text-white">2 months ago</h4>
                </div>
                <div className="flex text-gray-200 z-10">
                  <Link href="/user/stay/1" legacyBehavior>
                    <a className="ml-auto pr-1">
                      <ArrowRightCircleIcon className="w-6" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-primary-700">Articles</h2>

        <div className="overflow-x-scroll text-primary-800">
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
