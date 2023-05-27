import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const UserDashboard = () => {
  return (
    <div className="px-4 py-4 bg-stone-100 h-[100vh] space-y-4">
      <div>
        <h1 className="text-4xl font-semibold">Hi, Eugene</h1>
        <h2 className="text-2xl">Welcome Back</h2>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Current Stay</h2>
        <div className="bg-stone-200 rounded-lg py-2 px-2 h-[12rem] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Hotel Eleanor - Room 204</h3>
            <h4 className="text-sm">14 June 2023 - 15 June 2023</h4>
          </div>

          <div>
            <p className="text-md">
              Electricity Used: <span className="text-green-600">50 kWh</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Past Stay</h2>
        <div className="overflow-x-scroll">
          <div className="flex gap-2 w-[60rem]">
            {[1, 1, 1, 1, 1].map((index) => (
              <div
                className="bg-stone-200 rounded-lg py-2 px-2 h-[10rem] w-1/2 flex flex-col justify-between"
                key={index}
              >
                <div>
                  <h3 className="text-lg font-semibold">Hotel Eleanor</h3>
                  <h4 className="text-sm">1 May 2023</h4>
                  <h4 className="text-sm">2 months ago</h4>
                </div>
                <div className="flex">
                  <a className="ml-auto">
                    <ArrowRightCircleIcon className="w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
