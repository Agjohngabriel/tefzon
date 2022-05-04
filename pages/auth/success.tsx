import MainLayout from "../../components/MainLayout";

import Link from "next/link";

const Success = () => {
  return (
    <MainLayout>
      <div>
        <div className="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
          <h1 className="font-oswald text-2xl text-gray-700 pb-10 text-center">
            Your Account
          </h1>

          <div className="flex items-center justify-center pb-20 ">
            <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg pb-10 ">
              <div className="mt-10 -translate-y-1/2 transform">
                <img
                  src="/img/edit.png"
                  alt="edit"
                  title="edit"
                  className="mx-auto"
                />
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h1 className="font-montserrat text-2xl text-gray-700 w-4/6 text-center">
                  Thanks For Registering
                </h1>
                <p className="font-arcon text-sm text-gray-500 text-center w-5/6">
                  Please check the message sent to kolagk@gmail.com. Confirming
                  the message allow you to complete the process.
                </p>
                <Link href="/auth/email">
                  <div className="w-full sm:w-auto bg-indigo-500 text-gray-200 shadow-inner rounded hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div className="font-montserrat text-sm font-semibold px-10">
                      Go To Email
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-60 max-w-lg rounded-lg border-b-2 border-violet-500 mx-auto" />
      </div>
    </MainLayout>
  );
};

export default Success;
