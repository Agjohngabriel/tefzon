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

const Starting = () => {
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
      `${process.env.BACKEND_URL}/get/all/players/${id}`,
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
        `${process.env.BACKEND_URL}/select/squad`,
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
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
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
      {isLoading === 1 && <Loader />}
      <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
          <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
            Starting Eleven
          </h1>
        </div>
        <div className="mx-7 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
          <div>
            <Link href="/home/account/squad/select_captain">
              <a
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#4AAE75] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
              >
                <span className="font-montserrat text-sm text-black-150">
                  Next
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-6 rounded-lg border-b-2 border-violet-500 mx-4 lg:mx-28" />

      <div className="container">
        {error === true && (
          <p className="text-sm font-arcon text-black-0 text-center max-w-3xl -mb-8 py-3 bg-red-800 ml-5 lg:ml-24 tracking-wider px-2  lg:px-1 ">
            {errorMsg.message}
          </p>
        )}
        {message !== "" && (
          <p className="text-sm font-arcon text-black-0 text-center max-w-3xl -mb-8 py-3 bg-[#6E4BEC7D]/70 ml-5 lg:ml-24 tracking-wider px-2  lg:px-1 ">
            {message}
          </p>
        )}

        <div className="md:flex ">
          <div
            className="container  lg:max-w-4xl h-3/4  md:w-4/5 sm:ml-4 lg:ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto "
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

          <div className="container max-w-sm   shadow-indigo-500/50  md:w-3/5  sm:ml-5  xl:ml-8 mt-10 mb-20 px-1   lg:px-5  w-auto">
            <div className="px-1">
              <div className="bg-gray-100 rounded-sm border shadow-xl py-5 px-2 lg:p-5 w-full pb-10 ">
                <div className="max-w-md mx-auto scrollbar-hide overflow-hidden md:max-w-xl">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="relative flex">
                        <input
                          type="text"
                          className="bg-white h-10 w-full font-arcon text-xs px-2 mr-3 mt-2 focus:outline-none hover:cursor-pointer"
                          name="search"
                          placeholder="Search"
                        />

                        <button
                          className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2   mb-2 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-[#240155] border border-[#8139E6]
                                 duration-200 ease-in-out 
                                 transition"
                        >
                          <div className="font-arcon text-sm">Reset</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mx-auto md:flex-row py-10 ">
                  <div className=" flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(1)}
                      className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <div className="font-arcon text-sm">GK</div>
                    </button>
                  </div>
                  <div className="flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(2)}
                      className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <div className="font-arcon text-sm">DEF</div>
                    </button>
                  </div>

                  <div className="w-full flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(3)}
                      className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <div className="font-arcon text-sm">MID</div>
                    </button>
                  </div>

                  <div className="w-full  flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(4)}
                      className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <div className="font-arcon text-sm">FWD</div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="w-full lg:mx-2 flex-1 svelte-1l8159u">
                    <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                      Sort by
                    </label>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                      <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">Total Point</option>
                        <option value="02">Goals</option>
                        <option value="03">Female</option>
                        <option value="04">Prefer not to state</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full mx-2 flex-1 svelte-1l8159u">
                    <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                      Max Cost
                    </label>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                      <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">3.00</option>
                        <option value="02">Free</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-gradient-to-br from-[#2B1872] to-[#6A43FA]  border-inherit rounded-xl h-64 overflow-y-auto scrollbar-hide drop-shadow shadow-lg shadow-white px-4 py-3 lg:px-5">
              {isFetching === 1 ? (
                <span className="text-white opacity-50">Loading.....</span>
              ) : (
                ""
              )}

              {teams.subs.map((item: Players, index: number) => (
                <button
                  onClick={() => addToSquad(item.player_id)}
                  className=" pt-3 px-1"
                  key={index}
                >
                  <div className="flex items-center border-b border-gray-300 w-full">
                    <div className="flex items-start justify-end  ">
                      <div className=" w-full flex">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                        >
                          <span className=" align-middle  material-icons text-2xl text-red-500 ">
                            info_outline
                          </span>

                          <span className="flex-shrink-0 w-7 h-7 ml-2 border-l  border-gray-400 mb-2">
                            <img
                              className="w-full h-full rounded-full ml-2"
                              src={item.image_path}
                              alt={item.display_name}
                            />
                          </span>
                        </p>

                        <div className="ml-5 border-l border-gray-400 pl-2  w-[8rem] mb-2">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-xs font-arcon leading-5 text-white"
                          >
                            {item.player_name}
                          </p>
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-xs leading-normal  text-white"
                          >
                            {item.team}{" "}
                            <span className="ml-4">
                              {item.position_id === 1 && "GK"}
                              {item.position_id === 2 && "DEF"}
                              {item.position_id === 3 && "MID"}
                              {item.position_id === 4 && "FWD"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className=" ml-2 py-2 border-l text-right  flex-auto w-24">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-md font-arcon leading-5  px-4 text-white"
                        >
                          {item.starting}
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

export default Starting;
