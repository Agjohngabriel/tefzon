import MainLayout from "../../../../components/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader } from "../../../../components/base/Loader";
import Router from "next/router";

interface Players {
  display_name: string;
  image_path: string;
  team_name: string;
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

interface Clubs {
  id: any;
  name: string;
  short_code: string;
}

const SquadSelection = () => {
  const [poxi, setPoxi] = useState("");
  const [name, setName] = useState("");
  const [openTab, setOpenTab] = useState(1);
  const [league, setLeague] = useState("All League");
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [club, setClub] = useState("All Clubs");
  const [clubId, setClubId] = useState("3468");
  const { data: session }: any = useSession();
  const [isFetching, setIsFetching] = useState(0);
  const [message, setMessage] = useState("");
  const [seasonId, setSeasonId] = useState("21638");
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
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

      const fetchClubs = async (seasonId: String) => {
        const respol = await axios.get(
          `${process.env.BACKEND_URL}/get/league/teams/${seasonId}`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const responses = await respol.data.data;
        return responses;
      };
      const getFetchClubs = async () => {
        const ClubsFromApi = await fetchClubs(seasonId);
        setClubs(ClubsFromApi);
      };
      getFetchClubs();
    }
  }, [seasonId, session]);

  const fetchByPos = async (id: number) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BACKEND_URL}/get/all/players/season/${seasonId}/team/${clubId}/players/${id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data.data.token}`,
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
          Authorization: `Bearer ${session?.data.data.token}`,
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
        Authorization: `Bearer ${session?.data.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data;
    console.log(response);
    setMessage(response.message);
    setTeams([]);
    setLoading(0);
  };

  const confirm = async () => {
    if (session) {
      try {
        setLoading(1);

        const res = await fetch(`${process.env.BACKEND_URL}/squad/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.data.data.token}`,
          },
        });

        const result = await res.json();
        setMessage(result.message);
        setError(false);
        Router.push("/home/account/squad");
        setLoading(0);
      } catch (e: any) {
        setLoading(0);
        const errorMessage = e.response.data;
        console.log(errorMessage);
        setMessage("");
        setError(true);
        setErrorMsg(errorMessage);
      }
    }
  };

  const autoComplete = async () => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/use-autocomplete`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
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
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
      setError(false);
      getFavourites();
      setOpenTab(1);
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

  const remove = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.delete(
        `${process.env.BACKEND_URL}/remove/player/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );

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
  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad   `, {
      headers: {
        Authorization: `Bearer ${session?.data.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data.data;
    return response.subs;
  };

  const fetchClubs = async (seasonId: String) => {
    setLoading(1);
    setIsFetching(1);
    const res = await axios.get(
      `${process.env.BACKEND_URL}/get/league/teams/${seasonId}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data.data.token}`,
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response = await res.data.data;

    setClubs(response);
    setIsFetching(0);
    setLoading(0);
  };

  const getFavourites = async () => {
    const FavouritesFromApi = await fetchAll();
    setTeams(FavouritesFromApi);
    console.log(teams);
  };

  const goalkeepers = teams
    .filter((e: Players) => e.player_position === "GoalKeeper")
    .map((item: Players, position_id) => (
      <div
        key={position_id}
        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
      ></div>
    ));

  const defenders = teams
    .filter((e: Players) => e.player_position === "Defender")
    .map((item: Players, position_id) => (
      <div
        key={position_id}
        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
      ></div>
    ));

  const midfielders = teams
    .filter((e: Players) => e.player_position === "Midfielder")
    .map((item: Players, position_id) => (
      <div
        key={position_id}
        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
      ></div>
    ));
  const forwarders = teams
    .filter((e: Players) => e.player_position === "Forward")
    .map((item: Players, position_id) => (
      <div
        key={position_id}
        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
      ></div>
    ));

  const goalkeepersLength = goalkeepers.length;
  const defendersLength = defenders.length;
  const midfieldersLength = midfielders.length;
  const forwardersLength = forwarders.length;

  const [searchQuery, setSearchQuery] = useState("");

  // Assuming `leagues` is your array of data fetched/mapped from API

  // Filter the data based on the search query
  const filteredLeagues = leagues.filter((item: Clubs) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [clubQuery, setClubQuery] = useState("");

   const filteredClubs = clubs.filter((item: Clubs) =>
     item.name.toLowerCase().includes(clubQuery.toLowerCase())
   );


  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <div className={openTab === 1 ? "block animate-fade-in-up" : "hidden"}>
        <div className="px-3 lg:px-20 py-4 sm:py-10">
          <div className="flex justify-between items-center pb-5">
            <button
              onClick={() => Router.back()}
              className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-base font-montserrat px-4  rounded outline-none focus:outline-none ease-linear transition-all duration-150"
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
              Select Squad
            </button>
            <button
              onClick={clear}
              className=" hover:scale-110 focus:outline-none flex justify-center py-2 sm:py-3 px-2 bg-[#f3f4f6] text-red-500 rounded-lg cursor-pointer "
            >
              <div className="text-xs sm:text-sm  font-lato">Reset Team</div>
            </button>
          </div>
          <div className="bg-[#fff] rounded p-2  sm:px-10 sm:py-7 items-center  flex justify-between ">
            <h1 className="text-sm text-center text-black-0 font-semibold font-lato sm:text-2xl">
              Players: ({teams.length}/15)
            </h1>

            {teams.length === 15 ? (
              <button
                onClick={() => confirm()}
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-2 sm:px-3 py-3 rounded font-semibold sm:font-bold cursor-pointer hover:bg-blue-100  text-[#795DE0] bg-[#E4ECFB] duration-200 ease-in-out transition"
              >
                <span className="text-xs sm:text-sm font-montserrat text-black-150">
                  Confirm Selection
                </span>
              </button>
            ) : (
              <button
                disabled
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-2 sm:px-3 py-3 rounded font-semibold sm:font-bold cursor-pointer hover:bg-blue-100  text-[#795DE0] bg-[#E4ECFB] duration-200 ease-in-out transition"
              >
                <span className="text-xs sm:text-sm font-montserrat text-black-150">
                  Confirm Selection
                </span>
              </button>
            )}
          </div>

          <div className="container  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded shadow-2xl shadow-indigo-500/50  mt-10 mb-20  w-auto">
            <div
              className="rounded border shadow-xl pb-16 px-5 w-full  "
              style={{
                backgroundImage: 'url("/img/pitch.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              {error === true && (
                <p className="text-xs flex  items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-lg mb-5 py-5 bg-[#FEF8EC] text-red-500 tracking-wider px-2 mx-auto lg:px-1 ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="w-7 h-7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8L8 11M8 5.77637V5.75M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
                      stroke="CurrentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span> {errorMsg.message}</span>
                </p>
              )}
              {message !== "" ? (
                <p className="text-xs text-[#DB9816] flex  items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-lg mb-5 py-5 bg-[#FEF8EC] tracking-wider px-2 mx-auto lg:px-1 ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                  >
                    <path
                      d="M8 8L8 11M8 5.77637V5.75M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
                      stroke="#DB9816"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span> {message}</span>
                </p>
              ) : (
                <div className="text-xs text-[#DB9816] flex  items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-2xl mb-5 py-5 bg-[#FEF8EC] tracking-wider px-2 mx-auto lg:px-1 ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                  >
                    <path
                      d="M8 8L8 11M8 5.77637V5.75M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
                      stroke="#DB9816"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    {" "}
                    To change your captain use the menu which appears when
                    clicking on the players's shirt
                  </p>
                </div>
              )}
              <div>
                <div className="flex justify-center mt-[5rem]  py-8 mx-auto sm:w-1/4">
                  {teams
                    .filter((e: Players) => e.player_position === "GoalKeeper")
                    .map((item: Players, position_id) => (
                      <div
                        key={position_id}
                        className=" rounded m10-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto relative">
                          <img
                            className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                          <button
                            type="button"
                            onClick={() => remove(item.player_id)}
                            className="absolute -right-1 -top-10 bg-white rounded-full p-2 cursor-pointer group"
                          >
                            <svg
                              className="h-4 w-4 group-hover:opacity-50"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="10" cy="10" r="10" fill="white" />
                              <path
                                d="M15.0012 6.00714L13.9929 5L10.0046 8.99285L6.00714 5L5.00115 6.00714L8.99857 10L5.01027 13.9929L6.01856 15L10.0069 11.0071L14.0043 15L15.0103 13.9929L11.0129 10L15.0012 6.00714Z"
                                fill="#FF6B00"
                                stroke="#FF4B26"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="w-full mx-auto ">
                          <p className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center">
                            {item.player_name.split(" ", 1)}
                          </p>
                          <p className="focus:outline-none text-[.55rem] text-center rounded p-0.5 w-[3rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                            {item.team_short_code}
                          </p>
                        </div>
                      </div>
                    ))}
                  {goalkeepersLength < 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(24);
                        setPoxi("24");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.45rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add GoalKeeper
                        </p>
                      </div>
                    </button>
                  )}
                  {goalkeepersLength < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(24);
                        setPoxi("24");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.45rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add GoalKeeper
                        </p>
                      </div>
                    </button>
                  )}
                </div>

                <div className="flex py-12 mx-auto mt-[2rem] sm:w-3/4">
                  {teams
                    .filter((e: Players) => e.player_position === "Defender")
                    .map((item: Players, position_id) => (
                      <button
                        key={position_id}
                        type="button"
                        // onClick={() => playerDetails(item.player_id)}
                        className=" rounded m10-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto relative">
                          <img
                            className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                          <button
                            type="button"
                            onClick={() => remove(item.player_id)}
                            className="absolute -right-1 -top-10 bg-white rounded-full p-2 cursor-pointer group"
                          >
                            <svg
                              className="h-4 w-4 group-hover:opacity-50"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="10" cy="10" r="10" fill="white" />
                              <path
                                d="M15.0012 6.00714L13.9929 5L10.0046 8.99285L6.00714 5L5.00115 6.00714L8.99857 10L5.01027 13.9929L6.01856 15L10.0069 11.0071L14.0043 15L15.0103 13.9929L11.0129 10L15.0012 6.00714Z"
                                fill="#FF6B00"
                                stroke="#FF4B26"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="w-full mx-auto ">
                          <p className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center">
                            {item.player_name.split(" ", 1)}
                          </p>
                          <p className="focus:outline-none text-[.55rem] text-center rounded p-0.5 w-[3rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                            {item.team_short_code}
                          </p>
                        </div>
                      </button>
                    ))}
                  {defendersLength < 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(25);
                        setPoxi("25");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Defender
                        </p>
                      </div>
                    </button>
                  )}
                  {defendersLength < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(25);
                        setPoxi("25");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Defender
                        </p>
                      </div>
                    </button>
                  )}
                  {defendersLength < 3 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(25);
                        setPoxi("25");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Defender
                        </p>
                      </div>
                    </button>
                  )}
                  {defendersLength < 4 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(25);
                        setPoxi("25");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Defender
                        </p>
                      </div>
                    </button>
                  )}
                  {defendersLength < 5 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(25);
                        setPoxi("25");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Defender
                        </p>
                      </div>
                    </button>
                  )}
                </div>

                <div className="flex  py-12 mt-[2rem] sm:mx-auto -mx-4 sm:w-3/4">
                  {teams
                    .filter((e: Players) => e.player_position === "Midfielder")
                    .map((item: Players, position_id) => (
                      <button
                        key={position_id}
                        type="button"
                        // onClick={() => playerDetails(item.player_id)}
                        className=" rounded m10-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto relative">
                          <img
                            className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                          <button
                            type="button"
                            onClick={() => remove(item.player_id)}
                            className="absolute -right-1 -top-10 bg-white rounded-full p-2 cursor-pointer group"
                          >
                            <svg
                              className="h-4 w-4 group-hover:opacity-50"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="10" cy="10" r="10" fill="white" />
                              <path
                                d="M15.0012 6.00714L13.9929 5L10.0046 8.99285L6.00714 5L5.00115 6.00714L8.99857 10L5.01027 13.9929L6.01856 15L10.0069 11.0071L14.0043 15L15.0103 13.9929L11.0129 10L15.0012 6.00714Z"
                                fill="#FF6B00"
                                stroke="#FF4B26"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="w-full mx-auto ">
                          <p className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center">
                            {item.player_name.split(" ", 1)}
                          </p>
                          <p className="focus:outline-none text-[.55rem] text-center rounded p-0.5 w-[3rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                            {item.team_short_code}
                          </p>
                        </div>
                      </button>
                    ))}

                  {midfieldersLength < 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(26);
                        setPoxi("26");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Midfielder
                        </p>
                      </div>
                    </button>
                  )}
                  {midfieldersLength < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(26);
                        setPoxi("26");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Midfielder
                        </p>
                      </div>
                    </button>
                  )}
                  {midfieldersLength < 3 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(26);
                        setPoxi("26");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Midfielder
                        </p>
                      </div>
                    </button>
                  )}
                  {midfieldersLength < 4 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(26);
                        setPoxi("26");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Midfielder
                        </p>
                      </div>
                    </button>
                  )}
                  {midfieldersLength < 5 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(26);
                        setPoxi("26");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Midfielder
                        </p>
                      </div>
                    </button>
                  )}
                </div>

                <div className="flex pt-12 mx-auto sm:w-3/4">
                  {teams
                    .filter((e: Players) => e.player_position === "Forward")
                    .map((item: Players, position_id) => (
                      <button
                        key={position_id}
                        type="button"
                        // onClick={() => playerDetails(item.player_id)}
                        className=" rounded m10-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto relative">
                          <img
                            className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                          <button
                            type="button"
                            onClick={() => remove(item.player_id)}
                            className="absolute -right-1 -top-10 bg-white rounded-full p-2 cursor-pointer group"
                          >
                            <svg
                              className="h-4 w-4 group-hover:opacity-50"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="10" cy="10" r="10" fill="white" />
                              <path
                                d="M15.0012 6.00714L13.9929 5L10.0046 8.99285L6.00714 5L5.00115 6.00714L8.99857 10L5.01027 13.9929L6.01856 15L10.0069 11.0071L14.0043 15L15.0103 13.9929L11.0129 10L15.0012 6.00714Z"
                                fill="#FF6B00"
                                stroke="#FF4B26"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="w-full mx-auto ">
                          <p className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center">
                            {item.player_name.split(" ", 1)}
                          </p>
                          <p className="focus:outline-none text-[.55rem] text-center rounded p-0.5 w-[3rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                            {item.team_short_code}
                          </p>
                        </div>
                      </button>
                    ))}
                  {forwardersLength < 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(27);
                        setPoxi("27");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Forward
                        </p>
                      </div>
                    </button>
                  )}
                  {forwardersLength < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(27);
                        setPoxi("27");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Forward
                        </p>
                      </div>
                    </button>
                  )}
                  {forwardersLength < 3 && (
                    <button
                      type="button"
                      onClick={() => {
                        fetchByPos(27);
                        setPoxi("27");
                        setOpenTab(2);
                      }}
                      className=" rounded mt-10 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                          src="/img/Polo.svg"
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p className="focus:outline-none text-[.35rem] sm:text-[.50rem] text-center rounded p-0.5 sm:w-[4rem]  mx-auto  -mb-6  leading-normal  text-[#240155] bg-[#fff]">
                          Add Forward
                        </p>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={openTab === 2 ? "block animate-fade-in-up" : "hidden"}>
        <div className="px-3 lg:px-20 py-4 sm:py-10">
          <div className="md:flex justify-between items-center ">
            <button
              onClick={() => setOpenTab(1)}
              className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-base font-inter px-4  rounded outline-none focus:outline-none ease-linear transition-all duration-150"
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
              Add Player
            </button>
            <div className="relative flex items-center">
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
                //onChange={() => fetchByName(name)}
                //value={name}
                //onInput={(e) => setName(e.currentTarget.value)}
                placeholder="Search for a player"
                className="block w-full py-2 sm:py-3 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="bg-[#fff] rounded  p-2   sm:px-10 my-2 flex justify-between ">
            <div className="text-left space-y-1 p-1">
              <h2 className="text-xs font-light text-[#94A3B8]">Position</h2>
              <h2 className="text-xs font-light text-[#3A3A3A]">
                {(poxi as any) === "24" && <span>Goalkeeper</span>}
                {(poxi as any) === "25" && <span>Defender</span>}
                {(poxi as any) === "26" && <span>Midfielder</span>}
                {(poxi as any) === "27" && <span>Forward</span>}
              </h2>
            </div>
            <div className="text-center space-y-1 p-1 ">
              <h2 className="text-xs font-light text-[#94A3B8]">League</h2>
              <div className="relative inline-block group  my-2 w-full">
                <button
                  type="button"
                  // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                  className="flex items-center justify-between w-full px-2  text-xs font-regular text-gray-400 transition-colors cursor-pointer bg-white  text-left"
                >
                  {league}
                  <svg
                    className="h-5 w-5 flex-none "
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.3999 5.30001L3.9999 3.70001L5.5999 5.30001"
                      stroke="#94A3B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.6001 7.69999L4.0001 9.29999L2.4001 7.69999"
                      stroke="#94A3B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}

                <div className=" hidden group-hover:block absolute lg:-right-7 z-[100] lg:w-56 font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl">
                  <input
                    id="search-input"
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="Search items"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className=" h-[12rem] overflow-hidden overflow-y-auto scrollbar-hide">
                    {filteredLeagues.map((item: LiveLeague) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setLeague(item.name);
                          setSeasonId(item.current_season_id);
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
            <div className="text-center space-y-1 p-1">
              <h2 className="text-xs font-light">Clubs</h2>
              <div className="relative inline-block group  my-2 w-full">
                <button
                  type="button"
                  // className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
                  className="flex items-center justify-between w-full px-2  text-xs font-regular text-gray-400 transition-colors cursor-pointer bg-white  text-left"
                >
                  {club}
                  <svg
                    className="h-5 w-5 flex-none "
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.3999 5.30001L3.9999 3.70001L5.5999 5.30001"
                      stroke="#94A3B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.6001 7.69999L4.0001 9.29999L2.4001 7.69999"
                      stroke="#94A3B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}

                <div className=" hidden group-hover:block absolute lg:-right-7 z-[100] lg:w-56 font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl">
                  <input
                    id="search-input"
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="Search items"
                    autoComplete="off"
                    value={clubQuery}
                    onChange={(e) => setClubQuery(e.target.value)}
                  />
                  <div className=" h-[12rem] overflow-hidden overflow-y-auto scrollbar-hide">
                    {filteredClubs.map((item: Clubs) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setClub(item.name);
                          setClubId(item.id);
                          fetchByPos(poxi as any);
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

          <div className="bg-white rounded  p-2 sm:p-10 pb-5  ">
            {isFetching === 1 ? (
              <span className="text-white opacity-50">Loading.....</span>
            ) : (
              ""
            )}

            {players.map((item: Players, index) => (
              <button
                onClick={() => addToSquad(item.player_id)}
                className="px-2 py-1 w-full rounded hover:bg-[#d9dadd]"
                key={index}
              >
                <div className="flex items-center gap-x-2 w-full ">
                  <p className="flex text-xs leading-normal text-left text-gray-500 focus:outline-none">
                    <span className="flex-shrink-0  w-7 h-7">
                      <img
                        className="w-full h-full bg-white rounded-full"
                        src={item.image_path}
                        alt={item.display_name}
                      />
                    </span>
                  </p>

                  <div>
                    <p className="text-xs leading-5 text-[#] focus:outline-none font-lato">
                      {item.display_name}
                    </p>
                    <p className="text-xs leading-normal text-left text-[#94A3B8] focus:outline-none">
                      {item.team_name}{" "}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SquadSelection;
