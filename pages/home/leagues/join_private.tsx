import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/base/Loader";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  entry_type: string;
  type: string;
  start: string;
  id: number;
  code: number;
}

const JoinPrivate = () => {
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });
  const [isLoading, setLoading] = useState(0);

  const joinLeague = async ({ id, code }: any) => {
    try {
      setLoading(1);
      const res = await axios.post(
        `${process.env.BACKEND_URL}/join/private/league`,
        {
          id: id,
          code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      console.log(response);
      // setMessage(response.message);
      // getFavourites();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(
        `${process.env.BACKEND_URL}/private-leagues`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await res.data;
      console.log(response);
      return response;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setLeagues(FavouritesFromApi);
    };
    getFavourites();
  }, [session]);
  return (
    <MainLayout>
      <div className="py-2">
        {isLoading === 1 && <Loader />}
        <div className="inline-flex rounded -ml-1">
          <Link href="/home" passHref>
            <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2 ">
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
              Join Private
            </a>
          </Link>
        </div>
        <div className="max-w-sm sm:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-5 sm:px-10 py-5 my-5 items-center justify-center w-auto">
          <div className="   py-1 px-1 w-full">
            <div className="flex flex-col space-y-4 mb-5">
              <h1 className="font-montserrat sm:mt-5 text-xl sm:text-3xl font-bold text-black-150 w-4/6 ">
                Join private league
              </h1>
              {error === true && (
                <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                  <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                    {errorMsg.message}
                  </h1>
                </div>
              )}

              <div className="flex flex-col md:flex-row pt-2">
                <div className="w-full sm:mx-2 flex-1 svelte-1l8159u">
                  <label className="text-black-150 font-montserrat text-[1rem] mb-2 ml-1">
                    Search league to join
                  </label>
                  <div className=" my-2  flex  rounded svelte-1l8159u">
                    <form className=" flex w-full">
                    
                      <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search live league"
                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="w-full sm:mx-2 flex-1 svelte-1l8159u">
                  <label className="text-black-150 font-montserrat text-[1rem] mb-2 ml-1">
                    Join league with a code
                  </label>
                  <div className=" my-2  flex  svelte-1l8159u">
                    <form className=" flex w-full">
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter league code"
                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Join League
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full sm:w-3/4 ">
              <h1 className="font-montserrat text-[1rem]  text-black-0 w-4/6 tracking-tighter">
                List of live leagues
              </h1>
              <div className="flex flex-col space-y-4  animated fadeIn faster  py-4 inset-0  outline-none focus:outline-none ">
                {leagues.map((item: Team, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-3 sm:p-6 bg-white shadow-md hover:shodow-lg rounded-2xl"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <div className="flex justify-between justify-center space-x-3 py-2 sm:space-x-9  items-center">
                        <p className="rounded-2xl  px-3 border border-blue-100 text-blue-400 bg-blue-50 -rotate-90">
                          {item.entry_type}
                        </p>

                        <div className="flex flex-col">
                          <div className="font-medium leading-none">
                            {item.name}
                          </div>
                        </div>

                        <div className="flex flex-col ">
                          <div className="font-medium leading-none">
                            {item.type}
                          </div>
                        </div>
                        <div className="flex flex-col ">
                          <p className="text-sm text-gray-600 leading-none mt-1">
                            {item.start}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          joinLeague({ id: item.id, code: item.code })
                        }
                        className="flex-no-shrink  bg-[#6E4BEC] px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-[#E7EEFB] text-white rounded-full"
                      >
                        Join League
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="flex items-center font-montserrat text-sm  text-[#240155] rounded  focus:outline-none"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPrivate;
