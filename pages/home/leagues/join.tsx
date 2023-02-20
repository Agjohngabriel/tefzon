import Link from "next/link";
import Router from "next/router";
import MainLayout from "../../../components/MainLayout";

const Join = () => {
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };

  const goToPublic = () => {
    Router.push("/home/leagues/join_public");
  };

  return (
    <MainLayout>
      <div className="py-2">
        <div className=" container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  sm:px-4 py-6 lg:px-10  w-auto">
          <div className="ml-3 md:ml-5   flex items-center py-2 overflow-x-auto whitespace-nowrap">
            <Link href="/home" passHref>
              <a className="text-[#240155] dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            </Link>
            <span className="mx-2 text-[#8139E6] dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <Link href="/home/leagues" passHref>
              <a className="text-[#240155] dark:text-gray-200 ">Leagues</a>
            </Link>

            <span className="mx-2 text-[#8139E6] dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <h1 className="text-gray-600 dark:text-blue-400">Join</h1>
          </div>
          <div className="flex">
            <div className="  ">
              <div className="  py-2 md:py-5 px-1 w-full">
                <div className="flex flex-col space-y-4 mb-5 pl-4">
                  <h1 className="font-montserrat text-2xl sm:text-3xl  font-bold text-black-150 md:w-4/6  ">
                    Choose a league type to join
                  </h1>
                  <p className="font-arcon text-xs sm:px-3   text-black-0  w-full">
                    Join a private or public league to compete against friends
                    and other game players.
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-0">
                  <div className="col-span-12 sm:col-span-12 md:col-span-12  px-2 py-2">
                    {/* <!-- Start Card List --> */}
                    <div className="rounded-xl ">
                      <div className="grid grid-cols-1 gap-6   grid-cols-2 mt-6">
                        {/* <!-- Start Navitem --> */}
                        <button
                          onClick={goToPrivate}
                          className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                        >
                          <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <p className="font-arcon text-xs sm:text-sm sm:px-8 py-2 text-black-0 px-2  w-full">
                              Join a private league if somebody has given you a
                              code to enter
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm mt-3 text-center font-semibold">
                            <div className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none">
                              Join private league
                              <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                                arrow_forward
                              </span>
                            </div>
                          </p>
                        </button>

                        <button
                          onClick={goToPublic}
                          className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                        >
                          <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <p className="font-arcon text-xs sm:text-sm sm:px-8 py-2 text-black-0 px-2  w-full">
                              Join a public league to play a small randomly
                              selected group of game players
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm mt-3 text-center font-semibold">
                            <div className="font-montserrat flex  items-center text-black-150 rounded  focus:outline-none">
                              Join public league
                              <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                                arrow_forward
                              </span>
                            </div>
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Join;
