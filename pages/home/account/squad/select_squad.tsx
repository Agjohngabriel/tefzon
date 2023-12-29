import MainLayout from "../../../../components/MainLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader } from "../../../../components/base/Loader";
import Router from "next/router";

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
  team_short_code: string;
}

interface LiveLeague {
  id: number;
  player_id: number;
  name: string;
  current_season_id: string;
}

const SquadSelection = () => {
  const [dropDown1, setDropDown1] = useState(false);
  const [league, setLeague] = useState("All League");
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const { data: session }: any = useSession();
  const [isFetching, setIsFetching] = useState(0);
  const [message, setMessage] = useState("");
  const [seasonId, setSeasonId] = useState("");
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  const fetchClubs = async (seasonId: String) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.SPORTS_URL}/teams/seasons/${seasonId}?api_token=${process.env.SPORTS_APIKEY}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response = await res.data.data;
    console.log(response);
    setClubs(response);
    setIsFetching(0);
    setLoading(0);
  };

  const fetchByPos = async (id: number) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BACKEND_URL}/get/all/players/season/${seasonId}/team/:team_id/players/${id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await res.data.data;
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
          Authorization: `Bearer ${session?.user.token}`,
          "content-type": "application/json",
        },
      }
    );
    const response = await res.data.data;
    console.log(response);
    setPlayers(response);
    setIsFetching(0);
    setLoading(0);
  };

  const clear = async () => {
    setLoading(1);
    const res = await axios.get(`${process.env.BACKEND_URL}/reset/team`, {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
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
            Authorization: `Bearer ${session?.user.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data.data;
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
            Authorization: `Bearer ${session?.user.token}`,
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
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
            "content-type": "application/json",
          },
        });
        const response = await res.data.data;
        return response.subs;
      };

      const getFavourites = async () => {
        const FavouritesFromApi = await fetchAll();
        setTeams(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      const fetchAllLeague = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/get/leagues/live`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
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

  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad   `, {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data.data;
    return response.subs;
  };

  const getFavourites = async () => {
    const FavouritesFromApi = await fetchAll();
    setTeams(FavouritesFromApi);
    console.log(teams);
  };

  const goToSelectCaptain = () => {
    Router.push("/home/account/squad/select_captain");
  };

  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <div className="container flex flex-wrap items-center justify-between px-6 pt-10 mx-auto lg:px-20">
        <div className="flex items-center flex-shrink-0 mr-6 text-gray-600">
          <h1 className="text-xl text-center font-oswald sm:text-4xl text-black-0">
            Team Selection
          </h1>
        </div>
        <div className="items-center flex-grow block mx-7 sm:w-full md:flex md:justify-end md:w-auto">
          <div>
            <button
              onClick={() => {
                
                goToSelectCaptain;
              }}
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#795DE0] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
            >
              <span className="text-sm font-montserrat text-black-150">
                Next
              </span>
            </button>
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
              // onClick={autoComplete}
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
              // onClick={clear}
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
            className="container w-auto px-2 py-6 mt-10 mb-20 lg:max-w-4xl h-4/4 md:w-4/5 sm:ml-4 lg:ml-24 lg:px-10 "
            style={{
              backgroundImage: 'url("/img/pitch-lg.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="relative flex flex-col w-full min-w-0 break-words rounded">
                  <div className="flex-auto px-4">
                    <div className="tab-content tab-space">
                      <div className="flex py-6 mx-32">
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
                              <div className="mt-[3rem] ">
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-[4.6rem] w-[4rem] rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mx-auto mb-1">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] sm:text-xs py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#6544DE] flex justify-center text-center"
                                >
                                  {item.player_name}
                                </p>
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                                >
                                  {item.team_short_code}
                                </p>
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
                              <div className="mt-[3rem] ">
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-[4.6rem] w-[4rem] rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mx-auto mb-1">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] sm:text-xs py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#6544DE] flex justify-center text-center"
                                >
                                  {item.player_name}
                                </p>
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                                >
                                  {item.team_short_code}
                                </p>
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
                              <div className="mt-[2rem] ">
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-[4.6rem] w-[4rem] rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mx-auto mb-1">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] sm:text-xs py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#6544DE] flex justify-center text-center"
                                >
                                  {item.player_name}
                                </p>
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                                >
                                  {item.team_short_code}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="flex py-16 mx-auto">
                        {teams
                          .filter(
                            (e: Players) => e.player_position === "Forward"
                          )
                          .map((item: Players, position_id) => (
                            <div
                              key={position_id}
                              className="h-10 p-3 mx-auto mt-2  transition duration-500 transform rounded cursor-pointer hover:scale-105"
                            >
                              <div className="mt-[2rem] ">
                                <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                  <div className=" h-[4.6rem] w-[4rem] rounded-full mx-auto">
                                    <img
                                      className="rounded-full object-cover object-center"
                                      src={item.image_path}
                                      alt={item.player_name}
                                      title={item.player_name}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mx-auto mb-1">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] sm:text-xs py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#6544DE] flex justify-center text-center"
                                >
                                  {item.player_name}
                                </p>
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                                >
                                  {item.team_short_code}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container w-auto max-w-sm px-1 mt-10 mb-20 shadow-indigo-500/50 md:w-3/5 sm:ml-5  lg:px-5">
            <div className="px-1">
              <div className="w-full px-2 py-5 pb-10 bg-gray-100 border rounded-sm shadow-xl lg:p-5 ">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-xl">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="relative flex">
                        <input
                          className="w-full h-10 px-2  mr-3 text-xs bg-white font-arcon focus:outline-none hover:cursor-pointer"
                          name="search"
                          // onChange={() => fetchByName(name)}
                          // value={name}
                          // onInput={(e) => setName(e.currentTarget.value)}
                          placeholder="Search"
                        />

                        <button
                          className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2   cursor-pointer                                 
                                hover:bg-blue-500 
                                text-[#240155] border border-[#8139E6]
                                 duration-200 ease-in-out 
                                 transition"
                        >
                          <div className="text-sm font-arcon">Reset</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex py-7 mx-auto md:flex-row ">
                  <div className="flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(24)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">GK</div>
                    </button>
                  </div>
                  <div className="flex-1 svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(25)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">DEF</div>
                    </button>
                  </div>

                  <div className="flex-1 w-full svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(26)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">MID</div>
                    </button>
                  </div>

                  <div className="flex-1 w-full svelte-1l8159u">
                    <button
                      onClick={() => fetchByPos(27)}
                      className="flex justify-center px-4 py-2 text-base text-gray-900 transition duration-200 ease-in-out bg-white cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
                    >
                      <div className="text-sm font-arcon">FWD</div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-1">
                  <div className="flex-1 w-full  svelte-1l8159u">
                    <h1 className=" text-base text-gray-600 ">League</h1>

                    <div className="relative inline-block group  my-2 w-full">
                      <button
                        type="button"
                        // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                        className="flex items-center justify-between w-full px-2 py-3 text-xs font-regular text-gray-400 transition-colors cursor-pointer bg-white border border-gray-100 rounded-md shadow-sm text-left"
                      >
                        {league}
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
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

                      <div className=" hidden group-hover:block absolute lg:-right-7 z-[100] lg:w-48 font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl">
                        <input
                          id="search-input"
                          className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                          type="text"
                          placeholder="Search items"
                          autoComplete="off"
                        />
                        <div className=" h-[12rem] overflow-hidden overflow-y-auto scrollbar-hide">
                          {leagues.map((item: LiveLeague) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setLeague(item.name);
                                setSeasonId(item.current_season_id);
                                const seasonId = item.current_season_id;
                                fetchClubs(seasonId);
                              }}
                              className="text-left w-full block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full  svelte-1l8159u">
                    <h1 className=" text-base text-gray-600 "> Club</h1>

                    <div className="relative inline-block group  my-2 w-full">
                      <button
                        type="button"
                        // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                        className="flex items-center justify-between w-full px-2 py-3 text-xs font-regular text-gray-400 transition-colors cursor-pointer bg-white border border-gray-100 rounded-md shadow-sm text-left"
                      >
                        {clubs}
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
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

                      <div className=" hidden group-hover:block absolute lg:-right-7 z-[100] lg:w-48 font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl">
                        <input
                          id="search-input"
                          className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                          type="text"
                          placeholder="Search items"
                          autoComplete="off"
                        />
                        <div className=" h-[12rem] overflow-hidden overflow-y-auto scrollbar-hide">
                          {clubs.map((item: LiveLeague) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setLeague(item.name);
                                const seasonId = item.current_season_id;
                                fetchClubs(seasonId);
                              }}
                              className="text-left w-full block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-gradient-to-br from-[#2B1872] to-[#6A43FA]  border-inherit rounded-xl h-96 overflow-y-auto scrollbar-hide drop-shadow shadow-lg shadow-white px-4 py-3 lg:px-5">
              {isFetching === 1 ? (
                <span className="text-white opacity-50">Loading.....</span>
              ) : (
                ""
              )}

              {players.map((item: Players, index) => (
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
