import Router from "next/router";
import MainLayout from "../../../components/MainLayout";

const Join = () => {
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };

  const goToPublic = () => {
    Router.push("/home/leagues/join_public");
  };

  const goBack = () => {
    Router.push("/home/leagues");
  };

  return (
    <MainLayout>
      <div className="py-2">
        <div className=" container max-w-5xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20 px-2 sm:px-4 py-6 lg:px-10  w-auto">
          <button
            onClick={goBack}
            className="flex items-center gap-x-2 bg-[#F0F0F0] text-[#333333] active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-5 ease-linear transition-all duration-150"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_432_19217)">
                <path
                  d="M-3.35782e-07 12.0028L3.84095 15.8438L3.84095 12.7588L24 12.7588L24 11.2468L3.84095 11.2468L3.84095 8.16179L-3.35782e-07 12.0028Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_432_19217">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(24 24) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
            Back
          </button>
          <div className="flex">
            <div className="  ">
              <div className="  py-2 md:py-5 px-1 w-full">
                <div className="flex flex-col space-y-4 mb-5 pl-4">
                  <h1 className="font-montserrat px-1 text-xl sm:text-3xl  font-bold text-black-150 md:w-4/6  ">
                    Choose a league type to join
                  </h1>
                  <p className="font-arcon text-xs px-1 sm:px-3   text-black-0  w-full">
                    Join a private or public league to compete against friends
                    and other game players.
                  </p>
                </div>
                <div className="grid grid-cols-12 gap-0">
                  <div className="col-span-12 sm:col-span-12 md:col-span-12  px-2 py-2">
                    {/* <!-- Start Card List --> */}
                    <div className="rounded-xl ">
                      <div className="grid grid-cols-1 gap-6   sm:grid-cols-2 mt-6">
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
