import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/base/Loader";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  code: number;
  entry_fee: string;
  created_at: string;
}

const JoinPrivate = () => {
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();
  const [message, setMessage] = useState("");
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
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      console.log(response);
      setMessage(response.message);
      // getFavourites();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  };

  const goBack = () => {
    Router.push("/home/leagues/join");
  };
  return (
    <MainLayout>
      <div className="py-4">
        {isLoading === 1 && <Loader />}

        <div className="max-w-sm sm:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-5 sm:px-10 py-5 my-5 items-center justify-center w-auto">
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
              {message && (
                <div className="bg-indigo-400 w-1/2 text-center rounded shadow-md">
                  <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                    {message}
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
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPrivate;
