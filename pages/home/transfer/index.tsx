import MainLayout from "../../../components/MainLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader } from "../../../components/base/Loader";

interface Players {
  display_name: string;
  image_path: string;
  short_team_name: string;
  position_id: number;
  player_id: number;
  id: number;
  rating: string;
  player_position: string;
  team: string;
  player_name: string;
  starting: string;
}
interface Team {
  goalkeepers: [];
}

const Index = () => {
  const [openTab, setOpenTab] = useState(1);
  const [players, setPlayers] = useState([]);
  const { data: session }: any = useSession();
  const [isFetching, setIsFetching] = useState(0);
  const [message, setMessage] = useState("");
  const [teams, setTeams] = useState({
    subs: [],
    goalkeepers: [],
    midfielders: [],
    forwards: [],
    defenders: [],
  });
  const [isLoading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  const fetchByPos = async (id: number) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BASE_URL}get/all/players/${id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data.token}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await res.data;
    setPlayers(response);
    console.log(players);
    setIsFetching(0);
    setLoading(0);
  };
  const addToSquad = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.post(
        `${process.env.BASE_URL}select/squad`,
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
      const res = await axios.get(`${process.env.BASE_URL}get/my/squad`, {
        headers: {
          Authorization: `Bearer ${session?.data.token}`,
          "content-type": "application/json",
        },
      });
      const response = await res.data;
      console.log(response);
      return response;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setTeams(FavouritesFromApi);
    };
    getFavourites();
  }, [session]);
  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BASE_URL}get/my/squad`, {
      headers: {
        Authorization: `Bearer ${session?.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data;
    return response;
  };

  const getFavourites = async () => {
    const FavouritesFromApi = await fetchAll();
    setTeams(FavouritesFromApi);
    console.log(teams);
  };
  return (
    <MainLayout>
      <div className="container  mx-auto  pt-10  lg:px-2 lg:flex">
        <div className="container max-w-4xl mt-4 ">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-semibold ml-5 text-xl sm:text-3xl text-gray-700  text-center">
              Transfer
            </h1>
          </div>

          <hr className="my-5 rounded-lg border-b-2 border-gray-300 mx-4 sm:mx-auto " />
          <div className="container  mx-auto  py-4   rounded-md lg:px-2 flex items-center  justify-between flex-wrap">
            <h1 className="font-medium text-sm text-center mx-auto text-gray-700 w-full py-2 px-2">
              To change your captain use the menu which appears when clicking on
              the players's shirt
            </h1>

            <h1 className="font-bold text-xl text-center text-gray-100 w-full py-3 px-2 shadow-xl shadow-[#4f38a4] bg-[#6E4BEC]/50">
              Gameweek 27:{" "}
              <span className="pl-3 font-normal">Sat 6 Mar 12:00</span>
            </h1>

            <div className="w-full items-center mt-10 flex-grow flex md:justify-between mx-auto md:w-auto">
              <button
                className=" hover:scale-110 focus:outline-none flex justify-center mx-auto px-5 sm:px-20 lg:px-24 py-2 sm:py-5 cursor-pointer                                
                                hover:bg-blue-500 bg-[#E2E2E2]  rounded-md
                                text-gray-800/80 
                                 duration-200 ease-in-out 
                                 transition"
              >
                <div className="font-sans text-sm font-medium ">Auto Pick</div>
              </button>

              <button
                className=" hover:scale-110 focus:outline-none flex justify-center mx-auto px-7 sm:px-20  lg:px-28 py-2 sm:py-5 cursor-pointer                                
                                hover:bg-blue-500 bg-[#E2E2E2]  rounded-md
                                text-gray-800/80 
                                 duration-200 ease-in-out 
                                 transition"
              >
                <div className="font-sans text-sm font-medium ">Reset</div>
              </button>

              <button
                className=" hover:scale-110 focus:outline-none flex justify-center mx-auto px-3 sm:px-16 lg:px-20 py-2 sm:py-5 cursor-pointer                                 
                                hover:bg-blue-500 bg-[#6E4BEC]/50 shadow-lg shadow-[#5e42c3]/50 rounded-md
                                text-gray-100 
                                 duration-200 ease-in-out 
                                 transition"
              >
                <div className="font-sans text-sm font-medium ">
                  Play Wildcard
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="  px-1  mt-2">
              <div className="rounded-sm border-y-2 w-full  px-3 sm:px-16 lg:px-20 py-2 sm:py-2 border-gray-400">
                <div className="flex items-center ">
                  <div className="justify-center w-full pb-2  mx-auto">
                    <div className=" w-full text-center">
                      <p className="focus:outline-none text-md leading-normal font-medium pt-2 text-gray-700">
                        Free Transfer
                      </p>
                    </div>

                    <div className=" text-center pt-3">
                      <p className="focus:outline-none  text-2xl font-medium leading-5 text-gray-800">
                        2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  px-1 mt-2 ">
              <div className=" rounded-sm border-y-2  px-3 sm:px-16 lg:px-20 py-2 sm:py-2 w-full border-gray-400">
                <div className="flex items-center  border-gray-400 border-xl ">
                  <div className="text-center w-full pb-2">
                    <div className=" w-full">
                      <p className="focus:outline-none text-md leading-normal font-medium pt-2 text-gray-700">
                        Cost
                      </p>
                    </div>

                    <div className=" text-center pt-3">
                      <p className="focus:outline-none  text-2xl font-medium leading-5 text-gray-800">
                        0 pts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  px-1  mt-2">
              <div className=" rounded-sm border-y-2  px-3 sm:px-16 lg:px-20 py-2 sm:py-2 w-full border-gray-400">
                <div className="flex items-center  border-gray-400  ">
                  <div className="text-center w-full pb-2">
                    <div className=" w-full">
                      <p className="focus:outline-none text-md font-medium leading-normal pt-2 text-gray-700">
                        Money Remaining
                      </p>
                    </div>

                    <div className=" text-center pt-3">
                      <p className="focus:outline-none  text-2xl font-medium leading-5 text-[#6544DE]">
                        13.7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container  h-3/4   sm:ml-4 lg:ml-5 mt-10 mb-20  px-2 py-6 lg:px  w-auto "
            style={{
              backgroundImage: 'url("/img/pitch-md.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="flex justify-center items-center mb-3  mx-auto mt-12">
              <div className="inline-flex rounded border border-red-800">
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
              <div className="inline-flex rounded border border-red-800 -ml-1">
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
                <div className="relative flex flex-col min-w-0 break-words  w-full  rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="flex   py-10 mx-auto">
                          {teams.goalkeepers.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
                                <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-8 sm:h-12 mx-auto z-0"
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
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex   py-10 mx-auto">
                          {teams.defenders.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3  rounded mt-5 mx-auto text-center hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
                                <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-8 sm:h-12 mx-auto z-0"
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
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1  px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex   py-10 mx-auto">
                          {teams.midfielders.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-1  rounded mt-5 mx-auto  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
                                <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-8 sm:h-12 mx-auto z-0"
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
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex   py-10 mx-auto">
                          {teams.forwards.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3 rounded mt-5 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
                                <div className="-mt-[4rem] ">
                                  <svg
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-8 sm:h-12 mx-auto z-0"
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
                                </div>

                                <div>
                                  <h1 className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1  px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                    {item.player_name}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <div className=" mx-auto">
                          <div className="pt-4">
                            <div className="-mx-4 sm:-mx-8 px-1 sm:px-8 py-4 overflow-x-auto scrollbar-hide">
                              <div className="inline-block min-w-full shadow rounded-lg h-[42rem]">
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-red-700">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Squad Members
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {teams.subs.map(
                                      (item: Players, player_id: number) => (
                                        <tr key={player_id} className="">
                                          <td
                                            key={player_id}
                                            className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle"
                                          >
                                            <div className=" w-full flex">
                                              <p
                                                tabIndex={0}
                                                className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                              >
                                                <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                                  info_outline
                                                </span>

                                                <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
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

                                              <div className="ml-5 pl-3 mb-2">
                                                <p
                                                  tabIndex={0}
                                                  className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                                >
                                                  {item.player_name}
                                                </p>
                                                <p
                                                  tabIndex={0}
                                                  className="focus:outline-none text-xs leading-normal  text-gray-900"
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
                                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                            <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                              5.4
                                            </p>
                                          </td>
                                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                            <p className="text-gray-900 whitespace-no-wrap text-center">
                                              15.4
                                            </p>
                                          </td>
                                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                            <p className="text-gray-900 whitespace-no-wrap text-center">
                                              84
                                            </p>
                                          </td>
                                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                            <p className="text-gray-900 whitespace-no-wrap text-center">
                                              AVL (H)
                                            </p>
                                          </td>
                                        </tr>
                                      )
                                    )}
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
          <div className="w-full mx-auto   flex-1 svelte-1l8159u">
            <button
              className="text-base shadow hover:scale-110 focus:outline-none flex mx-auto px-10 sm:px-28 py-5 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-[#E2E2E2] text-gray-600
										duration-200 ease-in-out 
										transition"
            >
              <div className="font-sans text-sm font-normal px-8">
                Make Transfer
              </div>
            </button>
          </div>
        </div>

        <div className="container max-w-sm   shadow-indigo-500/50 md:w-3/5 sm:ml-12 mt-10 mb-20    w-auto">
          <div className="px-1">
            <div className="p-5 w-full pb-10 ">
              <h1 className="font-semibold text-xl text-gray-700  ">
                Player Selection
              </h1>
              <h1 className="font-medium text-sm mb-10 text-gray-700  ">
                View
              </h1>

              <div className="w-full  flex-1 svelte-1l8159u">
                <label className="text-gray-700 font-medium text-sm mb-2 ">
                  Sorted by
                </label>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="">Total Point</option>
                    <option value="02">Goals</option>
                    <option value="03">Female</option>
                    <option value="04">Prefer not to state</option>
                  </select>
                </div>
              </div>

              <div className="w-full  flex-1 svelte-1l8159u">
                <label className="text-gray-700 font-medium text-sm mb-2 ">
                  Search
                </label>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value=""></option>
                    <option value="02">Goals</option>
                    <option value="03">Female</option>
                    <option value="04">Prefer not to state</option>
                  </select>
                </div>
              </div>

              <div className="w-full  flex-1 svelte-1l8159u">
                <label className="text-gray-700 font-medium text-sm mb-2 ">
                  Max cost{" "}
                  <span className="block font-normal text-gray-500">
                    Between 3.8 and 12.5
                  </span>
                </label>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="">12.5</option>
                    <option value="02">Goals</option>
                    <option value="03">Female</option>
                    <option value="04">Prefer not to state</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-auto">
            <div>
              <div className=" px-1 sm:px-6 py-2 overflow-x-auto">
                <div className="inline-block min-w-full   overflow-x-auto  w-full ">
                  <h1 className="font-normal text-sm mb-1 text-center text-gray-700  ">
                    563 players shown
                  </h1>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-[#A7030A]">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
                          Goal Keeper
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
                          **
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-[#347E25]">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
                          Defenders
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
                          **
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-[#513C9D]">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
                          Midfelders
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90  uppercase tracking-wider">
                          **
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-[#A7030A]">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-semibold italic text-gray-100 uppercase tracking-wider">
                          Forwarders
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-normal italic  text-gray-100/90 uppercase tracking-wider">
                          **
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3 border-b border-gray-200  text-sm align-middle">
                          <div className=" w-full flex">
                            <p className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="align-middle mt-2"
                              >
                                <circle cx="12" cy="12" r="10" fill="#A7030A" />
                                <path
                                  d="M11 7H13V9H11V7Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  d="M11 11H13V17H11V11Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.41 7.58997 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.58997 4 4 7.59 4 12Z"
                                  fill="white"
                                  fillOpacity="0.54"
                                />
                              </svg>

                              <div className="flex-shrink-0 w-10 h-10 ml-3 hidden sm:table-cell">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                  alt=""
                                />
                              </div>
                            </p>

                            <div className="ml-2 pl-2 mb-2">
                              <p className="focus:outline-none text-sm font-normal leading-5 text-gray-900">
                                C. Ronaldo
                              </p>
                              <p className="focus:outline-none text-xs leading-normal  text-gray-900">
                                JUV
                                <span className="ml-4">FWD</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-1 border-b border-gray-200  text-sm align-middle">
                          <p className="text-gray-900 whitespace-no-wrap  py-2 text-center">
                            5.4
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex w-full mx-auto md:flex-row py-2 justify-between">
                    <div className="flex">
                      <div className="w-full mx-2  svelte-1l8159u pt-2">
                        <button
                          className="text-base  hover:scale-110 focus:outline-none flex text-center px mx-auto px-2 py-1 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#C4C4C4] text-gray-500 shadow-xs
												duration-200 ease-in-out 
												transition"
                        >
                          <span className="material-icons">
                            keyboard_double_arrow_left
                          </span>
                        </button>
                      </div>
                      <div className="w-full mx-2  svelte-1l8159u">
                        <button
                          className="text-base  hover:scale-110 focus:outline-none flex text-center px mx-auto px-2 py-3 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#C4C4C4] text-gray-500 shadow-xs
												duration-200 ease-in-out 
												transition"
                        >
                          <span className="material-icons">arrow_back_ios</span>
                        </button>
                      </div>
                    </div>

                    <h1 className="font-normal text-sm text-center text-gray-700  pt-4 ">
                      1 of 19
                    </h1>

                    <div className="flex">
                      <div className="w-full mx-2  svelte-1l8159u">
                        <button
                          className="text-base  hover:scale-110 focus:outline-none flex text-center px mx-auto px-2 py-3 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#FFF] text-[#5B3CBF]/50 shadow-md
												duration-200 ease-in-out 
												transition"
                        >
                          <span className="material-icons">
                            arrow_forward_ios
                          </span>
                        </button>
                      </div>
                      <div className="w-full mx-2  svelte-1l8159u pt-2">
                        <button
                          className="text-base  hover:scale-110 focus:outline-none flex text-center px mx-auto px-2 py-1 rounded-3xl font-bold cursor-pointer 
												
												hover:bg-blue-500 
												bg-[#FFF] text-[#5B3CBF]/50 shadow-md
												duration-200 ease-in-out 
												transition"
                        >
                          <span className="material-icons">
                            keyboard_double_arrow_right
                          </span>
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

export default Index;
