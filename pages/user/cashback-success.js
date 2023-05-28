import BottomNavigation from "../../components/BottomNavigation";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    // Handle navigation to the shopping page
    router.push("/user");
  };

  return (
    <div className="bg-primary-50 min-h-screen px-4 py-4 text-primary-800 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center justify-center mt-8 text-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-green-500 w-24 h-24"
          >
            <path
              className="fill-current"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            />
          </svg>
          <h1 className="text-2xl font-bold mt-4 gradient-title">
            Cashback Successful!
          </h1>
          <p className="text-lg mt-2 text-center">
            You have received cashback for your purchase.
          </p>
          <div className="grid grid-cols-2">
            <div className="text-left space-y-2">
              <p className="text-lg mt-2">Amount</p>
              <p className="text-lg mt-2">Account Number</p>
              <p className="text-lg mt-2">Account Name</p>
              <p className="text-lg mt-2">Transaction Time</p>
              <p className="text-lg mt-2">Transaction ID</p>
            </div>

            <div className="text-left space-y-2">
              <p className="text-lg mt-2">: RM 10.00</p>
              <p className="text-lg mt-2">: 1234 5678</p>
              <p className="text-lg mt-2">: Ray</p>
              <p className="text-lg mt-2">: 10:00 a.m. 19/05/23</p>
              <p className="text-lg mt-2">: 98723138</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-16">
        <button
          className="bg-primary-700 text-secondary-100 font-medium px-6 py-2 rounded-md"
          onClick={handleContinueShopping}
        >
          Return to Home 🏠
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Success;
