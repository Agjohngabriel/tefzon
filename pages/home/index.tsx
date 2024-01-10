import axios from "axios";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../components/base/Loader";
import MainLayout from "../../components/MainLayout";

interface Fixtures {
  starting_at: any;
  result_info: any;
  round_id: number;
  participants: string;
  visitorTeam: string;
}
interface LiveLeague {
  id: number;
  league_id: any;
  name: string;
}
interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  code: number;
  type: string;
}
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [leagueId, setLeagueId] = useState("9");
  const [active, setActive] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [league, setLeague] = useState([]);
  const { data: session }: any = useSession();
  console.log(leagueId);
  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        setIsLoading(true);
        const res = await axios.get(
          `${process.env.BACKEND_URL}/get-matches?id=${leagueId}`
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
  }, [leagueId, session]);

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

  const goToMatches = () => {
    Router.push("/home/fixtures");
  };

  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(`${process.env.BACKEND_URL}/user/leagues`, {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
          },
        });
        const response = await res.data.data;
        console.log(response);
        return response;
      };

      const getFavourites = async () => {
        const FavouritesFromApi = await fetchAll();
        setLeague(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);

  const goToHistory = () => {
    Router.push("/home/history");
  };

  return (
    <MainLayout>
      <div className="container  lg:max-w-6xl bg-[#fff] border-inherit rounded-b-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20   px-2 py-3 lg:py-10 lg:px-32 ">
        <div className=" text-gray-600 ">
          <div className="flex justify-between items-center">
            <h1 className="font-thin font-oswald text-base sm:text-2xl text-[#240155] pb-2 sm:pb-5 ">
              Active Leagues
            </h1>
            <button
              onClick={goToHistory}
              className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-semibold text-sm font-montserrat px-4 mb-5 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              See all
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1998 5.82853L19.1998 12M19.1998 12L13.1998 18.1714M19.1998 12L4.7998 12"
                  stroke="CurrentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {league.map((item: Team, index) => (
            <div
              key={index}
              className="w-full flex flex-col p-1 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg mb-5"
            >
              <div className="flex flex-row items-center justify-between ">
                <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                  <p className="rounded-lg font-[Oswald] text-2xl  py-1 px-4  text-[#240155] bg-[#795DE029]">
                    {item.name.split(" ").map((i) => i.charAt(0))}
                  </p>

                  <div className="flex flex-col">
                    <div className="text-[#3A3A3A] font-normal leading-none">
                      {item.name}
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <h2 className="font-inter text-xs text-[#94A3B8]">
                        {item.type === (1 as any) ? (
                          <span className="flex gax-x-2">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.30039 4.39995V3.94281C3.30039 2.42335 4.50468 1.19995 6.00039 1.19995C7.49611 1.19995 8.70039 2.42335 8.70039 3.94281V4.39995M3.30039 4.39995C2.80539 4.39995 2.40039 4.81138 2.40039 5.31424V9.88566C2.40039 10.3885 2.80539 10.7999 3.30039 10.7999H8.70039C9.19539 10.7999 9.60039 10.3885 9.60039 9.88566V5.31424C9.60039 4.81138 9.19539 4.39995 8.70039 4.39995M3.30039 4.39995H8.70039M6.00039 8.09995V6.89995"
                                stroke="#795DE0"
                                strokeLinecap="round"
                              />
                            </svg>
                            Private league
                          </span>
                        ) : (
                          "Public leagues"
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
                <Link
                  href={{
                    pathname: "/home/history/details",
                    query: { id: item.id },
                  }}
                >
                  <a className="flex-no-shrink py-2 text-sm  ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17L14.58 11.9992L10 7"
                        stroke="#94A3B8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h1 className="font-thin font-oswald text-base sm:text-2xl text-[#240155] pb-2 sm:pb-5 ">
              Matches
            </h1>
            <button
              onClick={goToMatches}
              className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-semibold text-sm font-montserrat px-4 mb-5 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              See all
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1998 5.82853L19.1998 12M19.1998 12L13.1998 18.1714M19.1998 12L4.7998 12"
                  stroke="CurrentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

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
              className="block w-full py-2 pr-5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="block relative flex items-center mb-5 "></div>
          <div className="flex overflow-y-auto   whitespace-nowrap scrollbar-hide inset-x-0">
            {leagues.map((item: LiveLeague) => (
              <div
                key={item.id}
                onClick={() => {
                  // setLeagueId(item.league_id);
                  // setActive(true);
                  // fetchClubs(seasonId);
                }}
                className={`${
                  active ? "bg-purple-500 " : ""
                }flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center bg-[#240155]/10`}
              >
                <div className="flex items-center px-4 py-1 w-max">
                  <div className="text-center">
                    <p className="text-[#240155] group-hover:text-gray-100 text-sm transition-all w-full	duration-300">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  space-y-4 max-w-3xl mx-auto py-1">
          <div className="flex  items-center justify-center mx-auto sm:flex-row py-2 ">
            <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        hover:text-blue-500 text-[#795DE0]
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex items-center lg:gap-x-2">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.7 11.2L4.5 8.00005L7.7 4.80005M12.5 11.2L9.3 8.00005L12.5 4.80005"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mx-1  text-xs sm:text-sm">Prev</span>
                </div>
              </button>
            </div>
            <h1 className="font-regular text-xs sm:text-base text-center text-[#475569] w-4/6 sm:w-full py-3 px-2">
              Gameweek 27
            </h1>

            <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                  hover:text-blue-500 text-[#795DE0] 
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex items-center lg:gap-x-2">
                  <span className="mx-1 text-xs sm:text-sm">Next</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.3 4.79995L12.5 7.99995L9.3 11.2M4.5 4.79995L7.7 7.99995L4.5 11.2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className=" ">
          {/* <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-[#D9DADD] via-indigo-200 to-[#D9DADD]  mx-auto tracking-wider mb-3">
              Sunday 21 February 2022
            </p> */}

          <table className="md:px-5 py-3 min-w-full  text-xs  sm:text-sm mx-auto leading-normal cursor-pointer">
            {fixtures.slice(0, 5).map((item: Fixtures, round_id) => (
              <tr key={round_id} className="">
                <td className="px-1 lg:px-5 py-2 lg:text-sm font-medium whitespace-nowrap">
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
                <td className="lg:px-4 py-2 text-sm whitespace-nowrap">
                  <p className="tracking-tight px-2 sm:px-4 text-gray-600 whitespace-no-wrap text-center border  py-2 rounded-md border-gray-300">
                    {item.result_info === null
                      ? item.starting_at.slice(11, 16)
                      : item.starting_at.slice(11, 16)}
                  </p>
                </td>

                <td className="px-1 lg:px-4 py-2 lg:text-sm whitespace-nowrap">
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
    </MainLayout>
  );
};

export default Index;
