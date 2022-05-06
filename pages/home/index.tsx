import Layout from "../../components/Layouts";

const Index = () => {
  return (
    <Layout>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
        <div className="flex">
          <div className=" w-3/4 ">
            <div className=" border-t-4 border-indigo-500 bg-white shadow-xl  py-10 px-10 w-full">
              <div className="flex flex-col space-y-4">
                <h1 className="font-montserrat text-2xl text-gray-800 w-4/6 ">
                  Fantasy Premier Leauge
                </h1>
                <p className="font-arcon text-sm text-gray-500  w-full">
                  The official fantasy football game of the premier leauge is
                  also the world's biggest
                </p>
                <a
                  href="##"
                  className="w-full sm:w-auto bg-[#EEEEEE] text-gray-700  hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-gray-100  inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <div className="font-arcon text-sm font-normal px-10">
                    Play Fantasy Premier Leauge
                  </div>
                </a>
              </div>
            </div>

            <div className=" border-t-4 border-indigo-500 bg-white shadow-xl mt-3 py-10 px-10 w-full">
              <div className="flex flex-col space-y-4">
                <h1 className="font-montserrat text-2xl text-gray-800 w-4/6 ">
                  Fantasy Premier Leauge
                </h1>
                <p className="font-arcon text-sm text-gray-500  w-full">
                  The official fantasy football game of the premier leauge is
                  also the world's biggest
                </p>
                <a
                  href="##"
                  className="w-full sm:w-auto bg-[#EEEEEE] text-gray-700  hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-gray-100  inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <div className="font-arcon text-sm font-normal px-10">
                    Play Fantasy Premier Leauge
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#EEEEEE] border shadow-xl ml-10 py-5 px-3 w-1/4 h-64">
            <p className="font-arcon text-sm p-2  text-gray-700  w-full">
              You are lodge in as kolawole Olagoke!
            </p>

            <div className="flex pt-4 justify-center">
              <a
                href="##"
                className="w-full md:w-auto sm:w-auto  bg-gradient-to-br from-[#4624C2] to-[#7F5BFF] text-gray-200 shadow-inner rounded hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 inline-flex items-center justify-center px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <div className="font-arcon text-sm font-normal px-7">
                  Manage Profile
                </div>
              </a>
            </div>

            <div className="flex pt-4 justify-center">
              <a
                href="##"
                className="w-full md:w-auto sm:w-auto bg-gradient-to-br from-[#4624C2] to-[#7F5BFF] text-gray-200 shadow-inner rounded hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 inline-flex items-center justify-center px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <div className="font-arcon text-sm font-normal px-12">
                  Sign Out
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

        <div className="w-full flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
