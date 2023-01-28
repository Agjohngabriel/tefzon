import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../../../../components/base/Loader";
import FavouriteLeague from "../../../../components/form/FavouriteLeagues";
import MainLayout from "../../../../components/MainLayout";

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
  is_captain: boolean;
  is_vice_captain: boolean;
}

const SaveTeam = () => {
  const [openTab, setOpenTab] = useState(1);
  const [message, setMessage] = useState("");
  const { data: session }: any = useSession();
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
  const [active, setActive] = useState(false);
  const playerDetails = () => {
    setActive(!active);
  };

  const selectCap = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/select/captain/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response);
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

  const selectViceCap = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/select/vice-captain/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response);
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
  };
  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <form className="py-2">
        <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
              MY SQUAD
            </h1>
          </div>
          <div className="mx-7 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
            <div>
              <Link href="/home">
                <a
                  className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#4AAE75] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
                >
                  <span className="font-montserrat text-sm text-black-150">
                    Save
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 rounded-lg border-b-2 border-violet-500 mx-4 lg:mx-28" />

        <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-2xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20 px-2 py-2 w-auto">
          <div
            className="rounded-2xl border shadow-xl py-16 px-5 w-full "
            style={{
              backgroundImage: 'url("/img/pitch-lg.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <p className="text-sm text-gray-100 font-arcon text-center  max-w-lg mb-5 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
              Tiger FC
            </p>
            {error === true && (
              <p className="text-sm font-arcon text-red-0 text-center max-w-3xl -mb-8 py-3 mx-auto tracking-wider px-2  lg:px-1 ">
                {errorMsg.message}
              </p>
            )}
            {message !== "" && (
              <p className="text-sm font-arcon text-white text-center max-w-3xl -mb-8 py-3  mx-auto tracking-wider px-2  lg:px-1 ">
                {message}
              </p>
            )}

            <div className={openTab === 1 ? "block" : "hidden"}>
              <div className="flex mt-[5rem]  py-10 mx-auto">
                {teams.goalkeepers.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={playerDetails}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                        <div className=" h-24 w-24 rounded-full mx-auto">
                          <img
                            className="rounded-full object-cover object-center"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A] flex text-center"
                      >
                        {item.player_name.split(" ", 1)}
                        <svg
                          viewBox="0 0 53 51"
                          fill="none"
                          className=" h-2 sm:h-4 px-1 mx-auto z-0"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                            fill={
                              item.is_captain
                                ? "#ff6c37"
                                : item.is_vice_captain
                                ? "#fdd663"
                                : "#03A9F4"
                            }
                          />
                          <path
                            d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        {item.rating}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-14 mx-auto sm:w-3/4">
                {teams.defenders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={playerDetails}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                        <div className=" h-24 w-24 rounded-full mx-auto">
                          <img
                            className="rounded-full object-cover object-center"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A] flex text-center"
                      >
                        {item.player_name.split(" ", 1)}
                        <svg
                          viewBox="0 0 53 51"
                          fill="none"
                          className=" h-2 sm:h-4 px-1 mx-auto z-0"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                            fill={
                              item.is_captain
                                ? "#ff6c37"
                                : item.is_vice_captain
                                ? "#fdd663"
                                : "#03A9F4"
                            }
                          />
                          <path
                            d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        {item.rating}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-12 sm:mx-auto -mx-3 sm:w-3/4">
                {teams.midfielders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={playerDetails}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                        <div className=" h-24 w-24 rounded-full mx-auto">
                          <img
                            className="rounded-full object-cover object-center"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A] flex text-center"
                      >
                        {item.player_name.split(" ", 1)}
                        <svg
                          viewBox="0 0 53 51"
                          fill="none"
                          className=" h-2 sm:h-4 px-1 mx-auto z-0"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                            fill={
                              item.is_captain
                                ? "#ff6c37"
                                : item.is_vice_captain
                                ? "#fdd663"
                                : "#03A9F4"
                            }
                          />
                          <path
                            d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        {item.rating}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   pt-12 mx-auto sm:w-3/4">
                {teams.forwards.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={playerDetails}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                        <div className=" h-24 w-24 rounded-full mx-auto">
                          <img
                            className="rounded-full object-cover object-center"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A] flex text-center"
                      >
                        {item.player_name.split(" ", 1)}
                        <svg
                          viewBox="0 0 53 51"
                          fill="none"
                          className=" h-2 sm:h-4 px-1 mx-auto z-0"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                            fill={
                              item.is_captain
                                ? "#ff6c37"
                                : item.is_vice_captain
                                ? "#fdd663"
                                : "#03A9F4"
                            }
                          />
                          <path
                            d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        {item.rating}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <hr className="mt-6  rounded-lg border-b border-white mx-4 lg:mx-28" />
              <p className="text-sm text-gray-100 font-arcon font-bold text-center  max-w-lg my-3 tracking-wider px-2 mx-auto lg:px-1 ">
                Substitutions
              </p>
              <hr className="mb-6 rounded-lg border-b border-white mx-4 lg:mx-28" />
              <div className="flex   py-12 sm:mx-auto -mx-3 sm:w-3/4">
                {teams.subs.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={playerDetails}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <div className="mt-[1rem] -mb-16 -translate-y-1/2 transform mx-auto">
                        <div className=" h-24 w-24 rounded-full mx-auto">
                          <img
                            className="rounded-full object-cover object-center"
                            src={item.image_path}
                            alt={item.player_name}
                            title={item.player_name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-4 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A] flex text-center"
                      >
                        {item.player_name.split(" ", 1)}
                        <svg
                          viewBox="0 0 53 51"
                          fill="none"
                          className=" h-2 sm:h-4 px-1 mx-auto z-0"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                            fill={
                              item.is_captain
                                ? "#ff6c37"
                                : item.is_vice_captain
                                ? "#fdd663"
                                : "#03A9F4"
                            }
                          />
                          <path
                            d="M11.2572 24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334C42.9614 4.36334 45.7588 7.15757 46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544ZM11.2572 24.8544V22.0601"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </svg>
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        {item.rating}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`${
                active ? "" : "hidden"
              } overflow-x-hidden overflow-y-auto fixed h-modal top-3 left-0 right-0 md:inset-0 z-50 justify-center bg-gray-500/50  items-center`}
            >
              <div className="relative w-full max-w-md px-4 h-full  mx-auto sm:mt-8">
                {!isLoading && (
                  <>
                    {teams.forwards.map(
                      (item: Players, player_id: number) => (
                        <div
                          key={player_id}
                          className=" flex flex-col bg-white mb-4 px- rounded-3xl  relative "
                        >
                          <div className="flex  rounded-3xl bg-gray-100 dark:bg-gray-700  flex-col items-center py-4">
                            <button
                              type="button"
                              onClick={() => {
                                setActive(!active);
                              }}
                              className="text-gray-400 bg-gray-200 hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto mr-3 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-toggle="default-modal"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>

                            <div className="-mt-4 h-[12rem] w-[12rem] rounded-full border-2 border-white shadow-md mx-auto">
                              <img
                                className="rounded-full object-cover object-center"
                                // src="https://api.lorem.space/image/face?w=260&h=260&hash=bart89fe"
                                // alt="Kobe Bryant"
                                // title="Kobe Bryant"
                                src={item.image_path}
                                alt={item.player_name}
                                title={item.player_name}
                              />
                            </div>

                            <span className="font-oswald mt-2">Michele</span>
                          </div>

                          <div className="flex mt-2  justify-between px-6">
                            <button
                              onClick={() => selectCap(item.id)}
                              className="flex items-center justify-between px-4 py-4 border cursor-pointer rounded-xl dark:border-gray-700"
                            >
                              <div className="flex flex-col items-center ">
                                <h2 className="text-sm font-medium text-gray-700  dark:text-gray-200">
                                  Make Captain
                                </h2>
                              </div>
                            </button>

                            <button
                              onClick={() => selectViceCap(item.id)}
                              className="flex items-center justify-between px-4 py-4 border dark:border-gray-700 cursor-pointer rounded-xl"
                            >
                              <h2 className="text-sm font-medium text-gray-700  dark:text-gray-200">
                                Make Vice Captain
                              </h2>
                            </button>

                            <button className="flex items-center justify-between px-4 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                              <div className="flex flex-col items-center space-y-1">
                                <h2 className="text-sm font-medium text-gray-700  dark:text-gray-200">
                                  Remove
                                </h2>
                              </div>
                            </button>
                          </div>

                          <div className="p-8 mt-2 space-y-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200 ">
                              <p className="textlg sm:text-xl">Position</p>

                              <h2 className="text-xl font-semibold text-gray-500  dark:text-gray-300">
                                Free
                              </h2>
                            </div>
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                              <p className="textlg sm:text-xl">Rating</p>

                              <h2 className="text-xl font-semibold text-gray-500  dark:text-gray-300">
                                Free
                              </h2>
                            </div>

                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                              <p className="textlg sm:text-xl">Value</p>

                              <h2 className="text-xl font-semibold text-gray-500  dark:text-gray-300">
                                Free
                              </h2>
                            </div>

                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                              <p className="textlg sm:text-xl">Nationality</p>

                              <h2 className="text-xl font-semibold text-gray-500  dark:text-gray-300">
                                Free
                              </h2>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>

            <div className={openTab === 2 ? "block" : "hidden"}>
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
                          {teams.goalkeepers.map(
                            (item: Players, player_id: number) => (
                              <tr key={player_id} className="">
                                <td
                                  key={player_id}
                                  className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                >
                                  <div className="flex w-full ">
                                    <p
                                      tabIndex={0}
                                      className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                    >
                                      <span className="text-2xl text-green align-middle material-icons">
                                        info_outline
                                      </span>

                                      <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                        <div className="mt-[2.5rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                          <div className=" h-20 w-12 rounded-full mx-auto">
                                            <img
                                              className="rounded-full object-cover object-center"
                                              src={item.image_path}
                                              alt={item.player_name}
                                              title={item.player_name}
                                            />
                                          </div>
                                        </div>
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
                                          {item.player_position === "Forward" &&
                                            "FWD"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                  <p className="py-2 text-center text-gray-900 whitespace-no-wrap px-1 border-gray-400">
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
                            )
                          )}
                          {teams.defenders.map(
                            (item: Players, player_id: number) => (
                              <tr key={player_id} className="">
                                <td
                                  key={player_id}
                                  className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                >
                                  <div className="flex w-full ">
                                    <p
                                      tabIndex={0}
                                      className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                    >
                                      <span className="text-2xl text-green align-middle material-icons">
                                        info_outline
                                      </span>

                                      <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                        <div className="mt-[2.5rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                          <div className=" h-20 w-12 rounded-full mx-auto">
                                            <img
                                              className="rounded-full object-cover object-center"
                                              src={item.image_path}
                                              alt={item.player_name}
                                              title={item.player_name}
                                            />
                                          </div>
                                        </div>
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
                                          {item.player_position === "Forward" &&
                                            "FWD"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                  <p className="py-2 text-center text-gray-900 whitespace-no-wrap px-1 border-gray-400">
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
                            )
                          )}
                          {teams.midfielders.map(
                            (item: Players, player_id: number) => (
                              <tr key={player_id} className="">
                                <td
                                  key={player_id}
                                  className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                >
                                  <div className="flex w-full ">
                                    <p
                                      tabIndex={0}
                                      className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                    >
                                      <span className="text-2xl text-green align-middle material-icons">
                                        info_outline
                                      </span>

                                      <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                        <div className="mt-[2.5rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                          <div className=" h-20 w-12 rounded-full mx-auto">
                                            <img
                                              className="rounded-full object-cover object-center"
                                              src={item.image_path}
                                              alt={item.player_name}
                                              title={item.player_name}
                                            />
                                          </div>
                                        </div>
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
                                          {item.player_position === "Forward" &&
                                            "FWD"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                  <p className="py-2 text-center text-gray-900 whitespace-no-wrap px-1 border-gray-400">
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
                            )
                          )}
                          {teams.forwards.map(
                            (item: Players, player_id: number) => (
                              <tr key={player_id} className="">
                                <td
                                  key={player_id}
                                  className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                >
                                  <div className="flex w-full ">
                                    <p
                                      tabIndex={0}
                                      className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                    >
                                      <span className="text-2xl text-green align-middle material-icons">
                                        info_outline
                                      </span>

                                      <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                        <div className="mt-[2.5rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                          <div className=" h-20 w-12 rounded-full mx-auto">
                                            <img
                                              className="rounded-full object-cover object-center"
                                              src={item.image_path}
                                              alt={item.player_name}
                                              title={item.player_name}
                                            />
                                          </div>
                                        </div>
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
                                          {item.player_position === "Forward" &&
                                            "FWD"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                  <p className="py-2 text-center text-gray-900 whitespace-no-wrap px-1 border-gray-400">
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
                            )
                          )}
                          {teams.subs.map(
                            (item: Players, player_id: number) => (
                              <tr key={player_id} className="">
                                <td
                                  key={player_id}
                                  className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200"
                                >
                                  <div className="flex w-full ">
                                    <p
                                      tabIndex={0}
                                      className="flex text-xs leading-normal text-left text-gray-500 align-middle focus:outline-none"
                                    >
                                      <span className="text-2xl  align-middle material-icons">
                                        info_outline
                                      </span>

                                      <span className="flex-shrink-0 w-10 h-10 mb-2 ml-4">
                                        <div className="mt-[2.5rem] -mb-16 -translate-y-1/2 transform mx-auto">
                                          <div className=" h-20 w-12 rounded-full mx-auto">
                                            <img
                                              className="rounded-full object-cover object-center"
                                              src={item.image_path}
                                              alt={item.player_name}
                                              title={item.player_name}
                                            />
                                          </div>
                                        </div>
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
                                          {item.player_position === "Forward" &&
                                            "FWD"}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-2 text-sm align-middle bg-white border-b border-gray-200">
                                  <p className="py-2 text-center text-gray-900 whitespace-no-wrap px-1 border-gray-400">
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
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center  bg-gray-800/90 sm:w-[21rem] rounded-3xl mx-auto mt-6">
              <div
                className={`inline-flex rounded-3xl ${
                  openTab === 1
                    ? "text-gray-800 bg-white "
                    : "text-white bg-gray-800/20"
                } `}
              >
                <input
                  type="radio"
                  name="room_type"
                  id="fixtures"
                  // checked
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
                    "radio text-center  self-center py-2 sm:py-3 px-4 sm:px-12 cursor-pointer  hover:opacity-75 "
                  }
                >
                  Pitch View
                </label>
              </div>
              <div
                className={`inline-flex rounded-3xl ${
                  openTab === 2
                    ? "text-gray-800 bg-white "
                    : "text-white bg-gray-800/20"
                } -ml-1`}
              >
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
                    "radio text-center  self-center py-2 sm:py-3 px-4 sm:px-12 cursor-pointer   hover:opacity-75 "
                  }
                >
                  List View
                </label>
              </div>
              {/* <div
                className={`inline-flex rounded-3xl ${
                  openTab === 3
                    ? "text-gray-800 bg-white "
                    : "text-white bg-gray-800/20"
                } -ml-1`}
              >
                <input
                  type="radio"
                  name="room_type"
                  id="date"
                  hidden
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  role="tablist"
                />
                <label
                  htmlFor="date"
                  className={
                    "radio text-center  self-center py-2 sm:py-3 px-8 sm:px-12 cursor-pointer   hover:opacity-75 "
                  }
                >
                  Date
                </label>
              </div> */}
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SaveTeam;
