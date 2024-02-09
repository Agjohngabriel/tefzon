import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/base/Loader";

import MainLayout from "../../../components/MainLayout";
import { format, parseISO } from "date-fns";

const FormattedDate = ({ date }: any) => {
  const formatDate = (dateString: string) => {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, "EEE dd MMMM yyyy | h:mmaaa");
  };

  return <span>{formatDate(date)}</span>;
};

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
interface DataItem {
  name: string;
  starting_at: any;
  result_info: any;
  round_id: number;
  participants: string;
  visitorTeam: string;
}
interface GroupedData {
  [key: string]: DataItem[];
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [leagueId, setLeagueId] = useState("9");
  const [active, setActive] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();

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
        setFixtures(FavouritesFromApi);
      };

      getFixtures();
    }

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
  }, [leagueId, session]);

  const goBack = () => {
    Router.push("/home");
  };

 const data: DataItem[] = fixtures || [];

 // Sorting the array by the "date" property
 const sortedData = [...data].sort(
   (a, b) =>
     new Date(a.starting_at).getTime() - new Date(b.starting_at).getTime()
 );

 // const groupedData: GroupedData = sortedData.reduce((acc, item) => {
 //   const date = item.starting_at;
 //   if (!acc[date]) {
 //     acc[date] = [];
 //   }
 //   acc[date].push(item);
 //   return acc;
 // }, {});

 interface GroupedData {
   [key: string]: any[]; // Adjust 'any' to the actual type of the array elements
 }

 const groupedData: GroupedData = sortedData.reduce(
   (acc: GroupedData, item) => {
     const date = item.starting_at as string; // Adjust the type accordingly
     if (!acc[date]) {
       acc[date] = [];
     }
     acc[date].push(item);
     return acc;
   },
   {}
 );

  return (
    <MainLayout>
      <div className="container">
        <div className="sm:ml-5 lg:ml-20">
          <button
            onClick={goBack}
            className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-sm font-montserrat px-4 mb-5 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
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
                  fill="CurrentColor"
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
            Matches
          </button>
        </div>

        <div className="container mt-5 lg:max-w-6xl bg-[#fff] border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20  mb-5 px-2 py-3 lg:p-10 ">
          <div className=" text-gray-600 ">
            <h1 className="font-regular font-oswald text-base sm:text-2xl text-[#240155] pb-2 sm:pb-5 ">
              Matches
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
                className="block w-full py-2 pr-5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="block relative flex items-center mb-5 "></div>
            <div className="flex overflow-y-auto lg:overflow-visible  whitespace-nowrap scrollbar-hide inset-x-0">
              {leagues.slice(0, 8).map((item: LiveLeague) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setLeagueId(item.league_id);
                    const fetchFix = async () => {
                      setIsLoading(true);
                      const res = await axios.get(
                        `${process.env.BACKEND_URL}/get-matches?id=${leagueId}`
                      );

                      const response = await res.data.data;
                      setIsLoading(false);
                      return response;
                    };

                    const getFix = async () => {
                      const FavouritesFromApi = await fetchFix();
                      console.log(FavouritesFromApi);
                      setFixtures(FavouritesFromApi);
                    };

                    getFix();
                  }}
                  className={`flex group hover:bg-purple-500 hover:shadow-lg  hover-dark-shadow rounded-full mx-1 transition-all 	duration-300 cursor-pointer justify-center bg-[#240155]/10`}
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
              <div className="relative inline-block group   w-full">
                <button
                  type="button"
                  // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                  className="flex items-center gap-x-2 w-full px-2 py-1 text-xs font-regular text-[#795DE0] transition-colors cursor-pointer rounded-md text-left"
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

                <div className=" hidden group-hover:block absolute lg:-right-0 z-[100] lg:w-[67rem] font-[Lato] p-2  origin-top-right bg-[#F8F8F8] rounded-md shadow-xl">
                  <div className="grid items-center grid-cols-2 gap-4 mx-auto md:grid-cols-4 lg:grid-cols-7 p-3">
                    {leagues.map((item: LiveLeague) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setLeagueId(item.league_id);
                          const fetchFix = async () => {
                            setIsLoading(true);
                            const res = await axios.get(
                              `${process.env.BACKEND_URL}/get-matches?id=${leagueId}`
                            );

                            const response = await res.data.data;
                            setIsLoading(false);
                            return response;
                          };

                          const getFix = async () => {
                            const FavouritesFromApi = await fetchFix();
                            console.log(FavouritesFromApi);
                            setFixtures(FavouritesFromApi);
                          };

                          getFix();
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
          {/* <div className="flex flex-col  space-y-4 max-w-3xl mx-auto py-1">
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
          </div> */}

          {Object.entries(groupedData).map(([date, items]) => (
            <div key={date}>
              <p className="text-xs text-gray-800 font-inter text-center  py-2 bg-gradient-to-r from-[#D9DADD] via-indigo-100 to-[#D9DADD]  mx-auto tracking-wider my-3">
                <FormattedDate date={date} />
              </p>

              <table className=" py-3 w-full  text-xs  sm:text-sm mx-auto leading-normal cursor-pointer">
                {items.map((item: Fixtures, round_id) => (
                  <tr key={round_id} className="mx-auto gap-x-1 w-full">
                    <td className="lg:px-4 py-2 lg:text-sm font-medium whitespace-nowrap w-[20rem]">
                      <div className="flex items-center gap-x-1 justify-end ">
                        <p className="hidden sm:block text-gray-900 whitespace-nowrap text-right">
                          {item.participants[0]["name" as any]}
                        </p>
                        <p className="sm:hidden text-gray-900 whitespace-nowrap text-right">
                          {item.participants[0]["name" as any].slice(0, 16)}
                        </p>

                        <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell">
                          <img
                            className="w-full h-full rounded-full"
                            src={item.participants[0]["image_path" as any]}
                            alt={item.participants[0]["name" as any]}
                          />
                        </div>
                      </div>
                    </td>
                    <td className=" py-2 text-sm whitespace-nowrap w-[5rem]">
                      <p className="tracking-tight px-2  text-gray-600 whitespace-nowrap text-center border  py-2 rounded-md border-gray-300">
                        {item.result_info === null
                          ? item.starting_at.slice(11, 16)
                          : item.starting_at.slice(11, 16)}
                      </p>
                    </td>

                    <td className="lg:px-4 py-2 lg:text-sm font-medium whitespace-nowrap w-[20rem]">
                      <div className="flex items-center gap-x-1 justify-start">
                        <div className="flex-shrink-0 w-5 sm:w-7 h-5 sm:h-7  sm:table-cell ">
                          <img
                            className="w-full h-full rounded-full"
                            src={item.participants[1]["image_path" as any]}
                            alt={item.participants[1]["name" as any]}
                          />
                        </div>

                        <p className="hidden sm:block text-gray-900 whitespace-nowrap text-right">
                          {item.participants[1]["name" as any]}
                        </p>
                        <p className="sm:hidden text-gray-900 whitespace-nowrap text-right">
                          {item.participants[1]["name" as any].slice(0, 16)}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
