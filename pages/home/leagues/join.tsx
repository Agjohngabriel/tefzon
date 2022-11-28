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
        <div className="inline-flex rounded -ml-1">
          <Link href="/home/account/status" passHref>
            <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2  ">
              Home
            </a>
          </Link>
          <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
            navigate_next
          </span>

          <Link href="/home/leagues" passHref>
            <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
              Leagues
            </a>
          </Link>
          <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
            navigate_next
          </span>

          <Link href="/home/leagues" passHref>
            <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
              Join
            </a>
          </Link>
        </div>
        <div className=" container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  sm:px-4 py-6 lg:px-10  w-auto">
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
