import { EllipsisVerticalIcon, EyeIcon } from "@heroicons/react/24/outline";

import SideNavigation from "../../../components/SideNavigation";
import clsx from "clsx";

const UserStayInformation = [
  {
    roomNumber: 100,
    customerName: "Eugene",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 350,
    currentUsageHour: "8:30 Hour",
  },
  {
    roomNumber: 101,
    customerName: "Raymond",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 250,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 102,
    customerName: "Ray",
    checkInDate: "19 June 2023",
    checkOutDate: "-",
    currentUsageKw: 150,
    currentUsageHour: "7:45 Hour",
  },
  {
    roomNumber: 103,
    customerName: "Kingsley",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 90,
    currentUsageHour: "5:30 Hour",
  },
  {
    roomNumber: 104,
    customerName: "Ryan",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 40,
    currentUsageHour: "3:30 Hour",
  },
  {
    roomNumber: 200,
    customerName: "Ariana",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 220,
    currentUsageHour: "8:30 Hour",
  },
  {
    roomNumber: 201,
    customerName: "Vincent",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 130,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 202,
    customerName: "Eugene",
    checkInDate: "19 July 2023",
    checkOutDate: "-",
    currentUsageKw: 50,
    currentUsageHour: "7:45 Hour",
  },
  {
    roomNumber: 101,
    customerName: "Raymond",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 250,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 102,
    customerName: "Ray",
    checkInDate: "19 June 2023",
    checkOutDate: "-",
    currentUsageKw: 150,
    currentUsageHour: "7:45 Hour",
  },
  {
    roomNumber: 103,
    customerName: "Kingsley",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 90,
    currentUsageHour: "5:30 Hour",
  },
  {
    roomNumber: 104,
    customerName: "Ryan",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 40,
    currentUsageHour: "3:30 Hour",
  },
  {
    roomNumber: 200,
    customerName: "Ariana",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 220,
    currentUsageHour: "8:30 Hour",
  },
  {
    roomNumber: 201,
    customerName: "Vincent",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 130,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 202,
    customerName: "Eugene",
    checkInDate: "19 July 2023",
    checkOutDate: "-",
    currentUsageKw: 50,
    currentUsageHour: "7:45 Hour",
  },
  {
    roomNumber: 101,
    customerName: "Raymond",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 250,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 102,
    customerName: "Ray",
    checkInDate: "19 June 2023",
    checkOutDate: "-",
    currentUsageKw: 150,
    currentUsageHour: "7:45 Hour",
  },
  {
    roomNumber: 103,
    customerName: "Kingsley",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 90,
    currentUsageHour: "5:30 Hour",
  },
  {
    roomNumber: 104,
    customerName: "Ryan",
    checkInDate: "14 June 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 40,
    currentUsageHour: "3:30 Hour",
  },
  {
    roomNumber: 200,
    customerName: "Ariana",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 220,
    currentUsageHour: "8:30 Hour",
  },
  {
    roomNumber: 201,
    customerName: "Vincent",
    checkInDate: "14 July 2023",
    checkOutDate: "15 June 2023",
    currentUsageKw: 130,
    currentUsageHour: "6:30 Hour",
  },
  {
    roomNumber: 202,
    customerName: "Eugene",
    checkInDate: "19 July 2023",
    checkOutDate: "-",
    currentUsageKw: 50,
    currentUsageHour: "7:45 Hour",
  },
];

const TableHeader = ({ className, children }) => {
  return (
    <th
      className={clsx(
        className,
        "text-left px-2 py-4 font-bold text-sm leading-5"
      )}
    >
      {children}
    </th>
  );
};

const TableData = ({ className, children }) => {
  return (
    <td
      className={clsx(
        className,
        "text-left px-2 py-4 text-sm leading-5 font-medium"
      )}
    >
      {children}
    </td>
  );
};

const AdminStayList = () => {
  return (
    <div>
      <SideNavigation>
        <div className="px-4 py-4 min-h-[100vh] space-y-4 text-primary-800">
          <div>
            <h1 className="text-4xl font-semibold">
              Hi, <span className="gradient-title">Eleanor Hotel</span>
            </h1>
            <h2 className="text-lg">
              /<span className="underline">Accommodation</span>
            </h2>
          </div>
          <h1 className="text-2xl font-semibold">Accommodation Information</h1>
          <div>
            <table className="table-auto w-[550px] md:w-full">
              <thead>
                <tr className="bg-primary-100">
                  <TableHeader className="rounded-l-[0.625rem]">
                    Room Number
                  </TableHeader>
                  <TableHeader>Customer Name</TableHeader>
                  <TableHeader>Check in date</TableHeader>
                  <TableHeader>Check out date</TableHeader>
                  <TableHeader>Current Usage (kWh)</TableHeader>
                  <TableHeader>Current Usage (Hour)</TableHeader>
                  <TableHeader className="rounded-r-[0.625rem]">
                    Actions
                  </TableHeader>
                </tr>
              </thead>
              <tbody>
                {UserStayInformation.map((usi, index) => {
                  return (
                    <tr className="border-b border-primary-300" key={index}>
                      <TableData>{usi.roomNumber}</TableData>
                      <TableData>{usi.customerName}</TableData>
                      <TableData>{usi.checkInDate}</TableData>
                      <TableData>{usi.checkOutDate}</TableData>
                      <TableData
                        className={clsx(
                          usi.currentUsageKw < 100
                            ? "text-green-600"
                            : "text-red-500"
                        )}
                      >
                        {usi.currentUsageKw} kWh
                      </TableData>
                      <TableData>{usi.currentUsageHour}</TableData>
                      <TableData>
                        <div className="flex gap-2">
                          <EyeIcon className="w-6" />
                          <EllipsisVerticalIcon className="w-6" />
                        </div>
                      </TableData>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </SideNavigation>
    </div>
  );
};

export default AdminStayList;
