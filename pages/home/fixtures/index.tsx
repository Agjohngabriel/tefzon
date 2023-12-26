import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/base/Loader";

import MainLayout from "../../../components/MainLayout";

interface Fixtures {
  starting_at: any;
  result_info: any;
  round_id: number;
  participants: string;
  visitorTeam: string;
}
interface LiveLeague {
  id: number;
  name: string;
}
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();

  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        setIsLoading(true);
        const res = await axios.get(
          `${process.env.BACKEND_URL}/get-matches?id=9`
        );

        const response = await res.data.data;
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
  }, [session]);

  useEffect(() => {
    if (session) {
      const fetchAllLeague = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/get/leagues/live`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );
        const response = await res.data;
        return response.data;
      };

      const getFetchAllLeague = async () => {
        const LeaguesFromApi = await fetchAllLeague();
        setLeagues(LeaguesFromApi);
      };
      getFetchAllLeague();
    }
  }, [session]);

  return (
    <MainLayout>
      <div className="container  py-10">
        <div className="pl-5 lg:pl-20 text-gray-600 ">
          <h1 className="font-semibold text-base sm:text-2xl text-[#000000] pb-2 sm:pb-5 ">
            Fixtures & Results
          </h1>
          <div className="block relative flex items-center mb-5 ">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              value=""
              placeholder="search for league e.g.  Saudi Pro League"
              className="block w-full py-3 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="block relative flex items-center mb-5 "></div>
          <div className="flex overflow-y-auto lg:overflow-visible  whitespace-nowrap scrollbar-hide inset-x-0">
            {leagues.slice(0, 8).map((item: LiveLeague) => (
              <div
                key={item.id}
                onClick={() => {
                  // setActive(true);
                  // fetchClubs(seasonId);
                }}
                className={`${
                  active ? "bg-purple-500 " : ""
                }flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center bg-[#FFFFFF]`}
              >
                <div className="flex items-center px-4 py-2 w-max">
                  <div className="text-center">
                    <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all w-full	duration-300">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="relative inline-block group   w-full">
              <button
                type="button"
                // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                className="flex items-center gap-x-2 w-full px-2 py-3 text-xs font-regular text-[#795DE0] transition-colors cursor-pointer rounded-md text-left"
              >
                See More
                <svg
                  className="h-5 w-5 flex-none text-[#795DE0]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}

              <div className=" hidden group-hover:block absolute lg:-right-0 z-[100] lg:w-[75rem] font-[Lato] p-2  origin-top-right bg-[#F8F8F8] rounded-md shadow-xl">
                <div className="grid items-center grid-cols-2 gap-4 mx-auto md:grid-cols-4 lg:grid-cols-7 p-5">
                  {leagues.map((item: LiveLeague) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        // setActive(true);
                        // fetchClubs(seasonId);
                      }}
                      className={`${
                        active ? "bg-purple-500 " : ""
                      } flex hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center bg-[#FFF] hover:text-gray-100`}
                    >
                      <div className="flex items-center px-2 py-2 w-max ">
                        <div className="text-center">
                          <p className="text-gray-900    text-xs transition-all w-full	duration-300">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 lg:max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20  mb-5 px-2 py-3 lg:px-10 ">
          <div className="flex flex-col  space-y-4 max-w-3xl mx-auto">
            <div className="flex  items-center w-full mx-auto sm:flex-row py-2 sm:py-10">
              <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
                <button
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-indigo-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
                >
                  <div className="flex items-center gap-x-10">
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
              <h1 className="font-bold text-xs sm:text-xl text-center text-gray-900 w-4/6 sm:w-full py-3 px-2">
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
                  <div className="flex items-center gap-x-10">
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

            <table className="md:px-5 py-3 w-full  text-xs  sm:text-sm mx-auto leading-normal cursor-pointer">
              {fixtures.map((item: Fixtures, round_id) => (
                <tr key={round_id} className="border-b border-gray-300">
                  <td className="px-5 py-2 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center justify-end ">
                      <div className="mr-1">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.participants[0]["name" as any]}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.participants[0]["image_path" as any]}
                          alt={item.participants[0]["name" as any]}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    <p className="tracking-tight px-2 sm:px-4 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      {item.result_info === null
                        ? item.starting_at.slice(11, 16)
                        : item.result_info}
                    </p>
                  </td>

                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    <div className="flex items-center  justify-start">
                      <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell mr-1">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.participants[1]["image_path" as any]}
                          alt={item.participants[1]["name" as any]}
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          {item.participants[1]["name" as any]}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
