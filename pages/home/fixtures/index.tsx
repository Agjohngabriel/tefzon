import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/base/Loader";

import MainLayout from "../../../components/MainLayout";

interface Fixtures {
  time: any;
  scores: any;
  round_id: number;
  localTeam: string;
  visitorTeam: string;
}
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const { data: session }: any = useSession();
  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        setIsLoading(true);
        const res = await axios.get(`${process.env.BACKEND_URL}/get-fixtures`, {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
            "content-type": "application/json",
          },
        });

        const response = await res.data;
        setIsLoading(false);
        return response;
      };

      const getFixtures = async () => {
        const FavouritesFromApi = await fetchAll();
        console.log(FavouritesFromApi);
        setFixtures(FavouritesFromApi);
      };

      getFixtures();
    }
  }, []);

  return (
    <MainLayout>
      <div className="py-5">
        <div className="ml-5 sm:ml-20 flex items-center py-2 overflow-x-auto whitespace-nowrap mb-1 sm:mb-4">
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

          <h1 className="text-gray-600 dark:text-blue-400">Fixtures</h1>
        </div>

        <div className="container lg:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20  mb-5 px-2 py-3 lg:px-10 ">
          <div className="flex flex-col pt-5 sm:pt-10 space-y-4 max-w-3xl mx-auto">
            <div className="  ">
              <div className="mx-auto flex items-center  justify-between text-gray-600 ">
                <h1 className="font-oswald text-2xl sm:text-4xl text-gray-700 pb-2 sm:pb-5 text-center">
                  Fixtures
                </h1>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-3xl px-">
                  <select className="form-select w-full px-10 py-2 text-sm  font-arcon text-black-150 opacity-100 rounded-3xl focus:outline-none bg-white focus:border-indigo-500 transition-colors cursor-pointer border border-gray-100">
                    <option value="">Choose a League</option>
                    <option value="">Choose a League</option>
                    <option value="">Choose a League</option>
                  </select>
                </div>
              </div>

              {/*synce set*/}
              <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Sun{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        11{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Mon{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        12{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Tue{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        13
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16">
                  <span className="flex h-3 w-3 absolute -top-1 -right-1">
                    <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
                  </span>
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-100 text-sm"> Wed </p>
                      <p className="text-gray-100  mt-3 font-bold"> 14 </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Thu{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        15{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Fri{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        16{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                        {" "}
                        Sat{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        17{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="mx-auto text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-white text-gray-700
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex font-arcon text-xs font-medium sm:                                                                                                                                                                                                     py-1">
                  <span className=" material-icons hover:text-white">
                    calendar_month
                  </span>
                  <span className="pl-3 hidden sm:block pt-1">
                    Sync to Calendar
                  </span>
                </div>
              </button>
            </div>
            <div className="flex  items-center w-full mx-auto sm:flex-row py-2 sm:py-10">
              <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
                <button
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-indigo-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
                >
                  <div className="flex items-center -mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 sm:w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>

                    <span className="mx-1  text-xs sm:text-sm">previous</span>
                  </div>
                </button>
              </div>
              <h1 className="font-bold text-xs sm:text-xl text-center text-gray-100 w-4/6 sm:w-full py-3 px-2 shadow-xl shadow-[#4f38a4] bg-[#6E4BEC]/50">
                Gameweek 27:
                <span className="pl-3 font-normal">Sat 6 Mar 12:00</span>
              </h1>

              <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
                <button
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-indigo-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
                >
                  <div className="flex items-center -mx-1">
                    <span className="mx-1 text-xs sm:text-sm">Next</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 sm:w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" ">
            {/* <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
              Sunday 21 February 2022
            </p> */}

            <div className="w-full leading-normal cursor-pointer">
              {fixtures.map((item: Fixtures, round_id) => (
                <div
                  key={round_id}
                  className="px-5 py-3  border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto"
                >
                  <div className="flex items-center ">
                    <div className="mr-1">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.localTeam["data" as any]["name" as any]}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell">
                      <img
                        className="w-full h-full rounded-full"
                        src={item.localTeam["data" as any]["logo_path" as any]}
                        alt={item.localTeam["data" as any]["name" as any]}
                      />
                    </div>
                  </div>
                  <p className="mx-2 sm:mx-4 tracking-tight px-2 sm:px-4 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                    {item.scores.ft_score === null
                      ? item.time.starting_at.date
                      : item.scores.ft_score}
                  </p>
                  <div className="flex items-center float-right">
                    <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell mr-1">
                      <img
                        className="w-full h-full rounded-full"
                        src={
                          item.visitorTeam["data" as any]["logo_path" as any]
                        }
                        alt={item.visitorTeam["data" as any]["name" as any]}
                      />
                    </div>
                    <div className="">
                      <p className="text-gray-900 whitespace-no-wrap text-right">
                        {item.visitorTeam["data" as any]["name" as any]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
