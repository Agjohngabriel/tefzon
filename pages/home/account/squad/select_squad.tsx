import MainLayout from "../../../../components/MainLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader } from "../../../../components/base/Loader";

interface Players {
  display_name: string;
  image_path: string;
  short_team_name: string;
  position_id: number;
  player_id: number;
  rating: string;
  player_position: string;
  team: string;
  player_name: string;
}

const SquadSelection = () => {
  const [openTab, setOpenTab] = useState(1);
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const { data: session }: any = useSession();
  const [isFetching, setIsFetching] = useState(0);
  const [message, setMessage] = useState("");
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  const fetchByPos = async (id: number) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BACKEND_URL}/get/all/players/${id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data.token}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await res.data;
    console.log(response);
    setPlayers(response);
    setIsFetching(0);
    setLoading(0);
  };

  const fetchByName = async (name: String) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BACKEND_URL}/search/player?query=${name}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data.token}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await res.data;
    console.log(response);
    setPlayers(response);
    setIsFetching(0);
    setLoading(0);
  };

  const clear = async () => {
    setLoading(1);
    const res = await axios.get(`${process.env.BACKEND_URL}/reset/team`, {
      headers: {
        Authorization: `Bearer ${session?.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data;
    console.log(response);
    setMessage(response.message);
    setTeams([]);
    setLoading(0);
  };
  const autoComplete = async () => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/use-autocomplete`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
      setError(false);
      getFavourites();
      setLoading(0);
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setMessage("");
      setError(true);
      setErrorMsg(errorMessage);
    }
  };
  const addToSquad = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.post(
        `${process.env.BACKEND_URL}/add/player`,
        {
          player_id: id,
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
      setMessage(response.message);
      setError(false);
      getFavourites();
      setLoading(0);
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setMessage("");
      setError(true);
      setErrorMsg(errorMessage);
    }
  };
  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
        headers: {
          Authorization: `Bearer ${session?.data.token}`,
          "content-type": "application/json",
        },
      });
      const response = await res.data;
      return response.subs;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setTeams(FavouritesFromApi);
    };
    getFavourites();
  }, [session]);
  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
      headers: {
        Authorization: `Bearer ${session?.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data;
    return response.subs;
  };

  const getFavourites = async () => {
    const FavouritesFromApi = await fetchAll();
    setTeams(FavouritesFromApi);
    console.log(teams);
  };

  // const [openTab, setOpenTab] = useState(1);
  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <div className="container flex flex-wrap items-center justify-between px-6 pt-10 mx-auto lg:px-20">
        <div className="flex items-center flex-shrink-0 mr-6 text-gray-600">
          <h1 className="text-xl text-center font-oswald sm:text-4xl text-black-0">
            Squad Selection
          </h1>
        </div>
        <div className="items-center flex-grow block mx-7 sm:w-full md:flex md:justify-end md:w-auto">
          <div>
            <Link href="/home/account/squad/starting">
              <a
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#4AAE75] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
              >
                <span className="text-sm font-montserrat text-black-150">
                  Next
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <hr className="mx-4 my-6 border-b-2 rounded-lg border-violet-500 lg:mx-28" />

      <div className="container max-w-6xl  bg-[#6E4BEC7D]/70 py-4 mb-10  rounded-md shadow-2xl shadow-gray-700/90 px-2 lg:px-2 flex items-center mx-auto justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 ml-6 text-gray-600">
          <h1 className="text-xl text-center text-white font-arcon sm:text-2xl">
            Players: ({teams.length}/15)
          </h1>
        </div>
        <div className="items-center flex-grow block sm:w-full md:flex md:justify-end md:w-auto">
          <div>
            <button
              onClick={autoComplete}
              className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-3   cursor-pointer                                 
                                hover:bg-blue-500 
                                text-white/80 border border-[#E3EBFA]
                                 duration-200 ease-in-out 
                                 transition"
            >
              <div className="font-arcon text-sm text-[#E3EBFA]">
                Auto Complete
              </div>
            </button>
          </div>
          <div>
            <button
              onClick={clear}
              className="flex justify-center px-6 py-3 ml-5 transition duration-200 ease-in-out cursor-pointer hover:scale-110 focus:outline-none hover:bg-white/20  text-white/50"
            >
              <div className="text-sm text-white font-arcon">Clear Team</div>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {error === true && (
          <p className="max-w-3xl px-2 py-3 ml-24 -mb-8 text-sm tracking-wider text-center bg-red-800 font-arcon text-black-0 lg:px-1 ">
            {errorMsg.message}
          </p>
        )}
        {message !== "" && (
          <p className="text-sm font-arcon text-black-0 text-center max-w-3xl -mb-8 py-3 bg-[#6E4BEC7D]/70 ml-24 tracking-wider px-2  lg:px-1 ">
            {message}
          </p>
        )}

        <div className="md:flex ">
          <div
            className="container w-auto px-2 py-6 mt-10 mb-20 lg:max-w-4xl h-3/4 md:w-4/5 sm:ml-4 lg:ml-24 lg:px-10 "
            style={{
              backgroundImage: 'url("/img/pitch-md.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="flex items-center justify-center mx-auto mt-12 mb-3">
              <div className="inline-flex border border-red-800 rounded">
                <input
                  type="radio"
                  name="room_type"
                  id="fixtures"
                  hidden
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  role="tablist"
                />
                <label
                  htmlFor="fixtures"
                  className={
                    "radio text-center text-sm font-arcon  self-center py-3 px-12 border cursor-pointer  hover:opacity-75 " +
                    (openTab === 1
                      ? "text-[#A7030A] bg-white border-[#A7030A]"
                      : "text-white bg-[#A7030A] border-[#A7030A]")
                  }
                >
                  Pitch View
                </label>
              </div>
              <div className="inline-flex -ml-1 border border-red-800 rounded">
                <input
                  type="radio"
                  name="room_type"
                  id="fdr"
                  hidden
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  role="tablist"
                />
                <label
                  htmlFor="fdr"
                  className={
                    "radio text-center text-sm font-arcon  self-center py-3 px-12 border cursor-pointer  hover:opacity-75 " +
                    (openTab === 2
                      ? "text-[#A7030A] bg-white border-[#A7030A]"
                      : "text-white bg-[#A7030A] border-[#A7030A]")
                  }
                >
                  List View
                </label>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="relative flex flex-col w-full min-w-0 break-words rounded">
                  <div className="flex-auto px-4">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="flex py-10 mx-32">
                          {teams
                            .filter(
                              (e: Players) => e.player_position === "GoalKeeper"
                            )
                            .map((item: Players, position_id) => (
                              <div
                                key={position_id}
                                className="h-10 p-3 mx-auto mt-2  transition duration-500 transform rounded cursor-pointer hover:scale-105"
                              >
                                {/* <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-0 h-8 mx-auto sm:h-12"
                                  >
                                    <path
                                      d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
                                      fill="#276556"
                                    />
                                    <path
                                      d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
                                      stroke="white"
                                      strokeWidth="0.5"
                                    />
                                    <path
                                      d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div> */}
                                <div className="mt-[2rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-24 w-20 rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="flex py-10 mx-auto">
                          {teams
                            .filter(
                              (e: Players) => e.player_position === "Defender"
                            )
                            .map((item: Players, position_id) => (
                              <div
                                key={position_id}
                                className="h-10 p-3 mx-auto mt-2  transition duration-500 transform rounded cursor-pointer hover:scale-105"
                              >
                                {/* <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-0 h-8 mx-auto sm:h-12"
                                  >
                                    <path
                                      d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
                                      fill="#276556"
                                    />
                                    <path
                                      d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
                                      stroke="white"
                                      strokeWidth="0.5"
                                    />
                                    <path
                                      d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div> */}
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-24 w-20 rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="flex py-10 mx-auto">
                          {teams
                            .filter(
                              (e: Players) => e.player_position === "Midfielder"
                            )
                            .map((item: Players, position_id) => (
                              <div
                                key={position_id}
                                className="h-10 p-3 mx-auto mt-2  transition duration-500 transform rounded cursor-pointer hover:scale-105"
                              >
                                {/* <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-0 h-8 mx-auto sm:h-12"
                                  >
                                    <path
                                      d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
                                      fill="#276556"
                                    />
                                    <path
                                      d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
                                      stroke="white"
                                      strokeWidth="0.5"
                                    />
                                    <path
                                      d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div> */}
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-24 w-20 rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="flex py-10 mx-auto">
                          {teams
                            .filter(
                              (e: Players) => e.player_position === "Forward"
                            )
                            .map((item: Players, position_id) => (
                              <div
                              key={position_id}
                              className="h-10 p-3 mx-auto mt-2  transition duration-500 transform rounded cursor-pointer hover:scale-105"
                            >
                              {/* <div className="-mt-[4rem] ">
                                <svg
                                  viewBox="0 0 52 51"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="z-0 h-8 mx-auto sm:h-12"
                                >
                                  <path
                                    d="M6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599L46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60398 6.83159 5.66999Z"
                                    fill="#276556"
                                  />
                                  <path
                                    d="M10.5718 25.2839H0.286133V22.4819L3.09133 10.34C3.09133 10.34 4.96146 6.60399 6.83159 5.66999C8.70172 4.73599 19.9225 1 19.9225 1C24.4581 3.13173 26.9271 4.60372 33.0134 1L42.3641 4.73599C42.3641 4.73599 45.1693 7.53798 46.1043 8.47198C47.0394 9.40598 48.9095 12.208 49.8446 14.076C50.7796 15.944 51.7147 25.2839 51.7147 25.2839L49.8446 26.2179H41.429L40.4939 22.4819V50.5019H10.5718V25.2839ZM10.5718 25.2839V22.4819"
                                    stroke="white"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M27.0071 19.5599L25.6397 19.5599V24.9746L20.2188 24.9746V26.3404L25.6397 26.3404V31.7551L27.0071 31.7551L27.0071 26.3404H32.4279V24.9746H27.0071L27.0071 19.5599Z"
                                    fill="white"
                                  />
                                </svg>
                              </div> */}
                              <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                <div className=" h-24 w-20 rounded-full mx-auto">
                                  <img
                                    className="rounded-full object-cover object-center"
                                    src={item.image_path}
                                    alt={item.player_name}
                                    title={item.player_name}
                                  />
                                </div>
                              </div>

                              <div>
                                <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                  {item.player_name}
                                </h1>
                              </div>
                            </div>
                            ))}
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <div className="mx-auto ">
                          <div className="pt-4">
                            <div className="px-1 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 scrollbar-hide">
                              <div className="inline-block min-w-full shadow rounded-lg h-[42rem]">
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-red-700">
                                      <th className="px-5 py-3 text-xs tracking-wider text-center text-white uppercase border-b-2 border-gray-200 font-arcon">
                                        Squad Members
                                      </th>
                                      <th className="px-5 py-3 text-xs tracking-wider text-center text-white uppercase border-b-2 border-gray-200 font-arcon">
                                        ₦
                                      </th>
                                      <th className="hidden px-5 py-3 text-xs tracking-wider text-center text-white uppercase border-b-2 border-gray-200 font-arcon lg:table-cell">
                                        SB
                                      </th>
                                      <th className="hidden px-5 py-3 text-xs tracking-wider text-center text-white uppercase border-b-2 border-gray-200 font-arcon lg:table-cell">
                                        TP
                                      </th>
                                      <th className="hidden px-5 py-3 text-xs tracking-wider text-center text-white uppercase border-b-2 border-gray-200 font-arcon lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {teams.map((item: Players, position_id) => (
                                      <tr key={position_id} className="">
                                        <td
                                          key={position_id}
                                          className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                        >
                                          <div className="flex w-full ">
                                            <p
                                              tabIndex={0}
                                              className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                            >
                                              <span className="text-2xl text-red-500 align-middle material-icons">
                                                info_outline
                                              </span>

                                              <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                                <svg
                                                  width="43"
                                                  height="40"
                                                  viewBox="0 0 43 40"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                    fill="#276556"
                                                  />
                                                  <path
                                                    d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                    stroke="white"
                                                    strokeWidth="0.5"
                                                  />
                                                </svg>
                                              </span>
                                            </p>

                                            <div className="pl-3 mb-2 ml-5">
                                              <p
                                                tabIndex={0}
                                                className="text-sm leading-5 text-gray-900 focus:outline-none font-arcon"
                                              >
                                                {item.player_name}
                                              </p>
                                              <p
                                                tabIndex={0}
                                                className="text-xs leading-normal text-gray-900 focus:outline-none"
                                              >
                                                {item.team}
                                                <span className="ml-4">
                                                  {item.player_position ===
                                                    "GoalKeeper" && "GK"}
                                                  {item.player_position ===
                                                    "Defender" && "DEF"}
                                                  {item.player_position ===
                                                    "Midfielder" && "MID"}
                                                  {item.player_position ===
                                                    "Forward" && "FWD"}
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                          <p className="py-2 text-center text-gray-900 whitespace-no-wrap border-l border-gray-400">
                                            5.4
                                          </p>
                                        </td>
                                        <td className="hidden px-5 py-2 text-sm align-middle bg-white border-b border-gray-200 lg:table-cell">
                                          <p className="text-center text-gray-900 whitespace-no-wrap">
                                            15.4
                                          </p>
                                        </td>
                                        <td className="hidden px-5 py-2 text-sm align-middle bg-white border-b border-gray-200 lg:table-cell">
                                          <p className="text-center text-gray-900 whitespace-no-wrap">
                                            84
                                          </p>
                                        </td>
                                        <td className="hidden px-5 py-2 text-sm align-middle bg-white border-b border-gray-200 lg:table-cell">
                                          <p className="text-center text-gray-900 whitespace-no-wrap">
                                            AVL (H)
                                          </p>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container w-auto max-w-sm px-1 mt-10 mb-20 shadow-indigo-500/50 md:w-3/5 sm:ml-5 xl:ml-8 lg:px-5">
            <div className="px-1">
              <div className="w-full px-2 py-5 pb-10 bg-gray-100 border rounded-sm shadow-xl lg:p-5 ">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-xl">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="relative flex">
                        <input
                          type="text"
                          className="w-full h-10 px-2 mt-2 mr-3 text-xs bg-white font-arcon focus:outline-none hover:cursor-pointer"
                          name="search"
                          onChange={() => fetchByName(name)}
                          value={name}
                          onInput={(e) => setName(e.currentTarget.value)}
                          placeholder="Search"
                        />

                        <button
                          className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2   mb-2 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-[#240155] border border-[#8139E6]
                                 duration-200 ease-in-out 
                                 transition"
                        >
                          <div className="text-sm font-arcon">Search</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex py-10 mx-auto md:flex-row ">
                  <div className="flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(1)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">GK</div>
                    </button>
                  </div>
                  <div className="flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(2)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">DEF</div>
                    </button>
                  </div>

                  <div className="flex-1 w-full svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(3)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">MID</div>
                    </button>
                  </div>

                  <div className="flex-1 w-full svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(4)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">FWD</div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 w-full lg:mx-2 svelte-1l8159u">
                    <label className="mb-2 ml-1 text-sm text-gray-600 font-arcon">
                      Sort by
                    </label>
                    <div className="flex p-1 my-2 bg-white border border-gray-200 rounded svelte-1l8159u">
                      <select className="w-full px-3 py-2 transition-colors bg-white rounded-md cursor-pointer form-select font-arcon focus:outline-none focus:border-indigo-500">
                        <option value="">Total Point</option>
                        <option value="02">Goals</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="flex-1 w-full mx-2 svelte-1l8159u">
                    <label className="mb-2 ml-1 text-sm text-gray-600 font-arcon">
                      Max Cost
                    </label>
                    <div className="flex p-1 my-2 bg-white border border-gray-200 rounded svelte-1l8159u">
                      <select className="w-full px-3 py-2 transition-colors bg-white rounded-md cursor-pointer form-select font-arcon focus:outline-none focus:border-indigo-500">
                        <option value="">3.00</option>
                        <option value="02">Free</option>
                      </select>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="container bg-gradient-to-br from-[#2B1872] to-[#6A43FA]  border-inherit rounded-xl h-96 overflow-y-auto scrollbar-hide drop-shadow shadow-lg shadow-white px-4 py-3 lg:px-5">
              {isFetching === 1 ? (
                <span className="text-white opacity-50">Loading.....</span>
              ) : (
                ""
              )}

              {players.slice(0, 70).map((item: Players, index) => (
                <button
                  onClick={() => addToSquad(item.player_id)}
                  className="px-1 pt-3 "
                  key={index}
                >
                  <div className="flex items-center w-full border-b border-gray-300">
                    <div className="flex items-start justify-end ">
                      <div className="flex w-full ">
                        <p
                          tabIndex={0}
                          className="flex text-xs leading-normal text-left text-gray-500 focus:outline-none"
                        >
                          <span className="text-2xl text-red-500 align-middle material-icons">
                            info_outline
                          </span>

                          <span className="flex-shrink-0 mb-2 ml-2 border-l border-gray-400 w-7 h-7">
                            <img
                              className="w-full h-full ml-2 rounded-full"
                              src={item.image_path}
                              alt={item.display_name}
                            />
                          </span>
                        </p>

                        <div className="ml-5 border-l border-gray-400 pl-2  w-[8rem] mb-2">
                          <p
                            tabIndex={0}
                            className="text-xs leading-5 text-white focus:outline-none font-arcon"
                          >
                            {item.display_name}
                          </p>
                          <p
                            tabIndex={0}
                            className="text-xs leading-normal text-white focus:outline-none"
                          >
                            {item.short_team_name}{" "}
                            <span className="ml-4">
                              {item.position_id === 1 && "GK"}
                              {item.position_id === 2 && "DEF"}
                              {item.position_id === 3 && "MID"}
                              {item.position_id === 4 && "FWD"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex-auto w-24 py-2 ml-2 text-right border-l ">
                        <p
                          tabIndex={0}
                          className="px-4 leading-5 text-white focus:outline-none text-md font-arcon"
                        >
                          {item.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SquadSelection;
