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
  team_short_code: string;
  starting: string;
  is_captain: boolean;
  is_vice_captain: boolean;
}

const SaveTeam = () => {
  const [openTab, setOpenTab] = useState(1);
  const [detail, setDetail] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session }: any = useSession();
  const [teams, setTeams] = useState({
    subs: [],
    goalkeepers: [],
    midfielders: [],
    forwards: [],
    defenders: [],
  });
  const [details, setDetails] = useState([]);
  const [isLoading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });
  const [active, setActive] = useState(false);

  const selectCap = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/select/captain/${id}`,
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
      setDetail(false)
      setError(false);
    
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
            Authorization: `Bearer ${session?.data.data.token}`,
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

  const remove = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/remove/player/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
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

  const playerDetails = async (id: number) => {
    try {
      setLoading(1);
      setLoading(1);
      const respo = await axios.get(
        `${process.env.BACKEND_URL}/get/player/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await respo.data;
      setLoading(0);
      setDetails(response);
      setDetail(true);
      setActive(!active);
      console.log(details);
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
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
          },
        });
        const response = await res.data.data;
        return response;
      };

      const getFavourites = async () => {
        const FavouritesFromApi = await fetchAll();
        setTeams(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);

  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
      headers: {
        Authorization: `Bearer ${session?.data.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data.data;
    return response;
  };

  const getFavourites = async () => {
    const FavouritesFromApi = await fetchAll();
    setTeams(FavouritesFromApi);
  };
  console.log(teams);
  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <form className="py-2">
        <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
              Your Squad
            </h1>
          </div>
          {/* <div className="mx-7 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
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
          </div> */}
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
            {error === true && (
              <p className="text-sm text-gray-100 font-arcon text-center  max-w-lg mb-5 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
                {errorMsg.message}
              </p>
            )}
            {message !== "" ? (
              <p className="text-sm text-gray-100 font-arcon text-center  max-w-lg mb-5 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
                {message}
              </p>
            ) : (
              <p className="text-xs text-gray-100 font-arcon text-center  max-w-2xl mb-5 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
                To change your captain use the menu which appears when clicking
                on the players's shirt
              </p>
            )}

            <div>
              <div className="flex mt-[5rem]  py-10 mx-auto">
                {teams.goalkeepers.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
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
                        {/* <svg
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
                        </svg> */}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center p-0.5  -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]"
                      >
                        {item.team_short_code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-16 mx-auto sm:w-3/4">
                {teams.defenders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
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
                        {/* <svg
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
                        </svg> */}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                      >
                        {item.team_short_code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-16 sm:mx-auto -mx-3 sm:w-3/4">
                {teams.midfielders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
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
                        {/* <svg
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
                        </svg> */}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                      >
                        {item.team_short_code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   pt-16 mx-auto sm:w-3/4">
                {teams.forwards.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
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
                        {/* <svg
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
                        </svg> */}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                      >
                        {item.team_short_code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <hr className="mt-10  rounded-lg border-b border-white mx-4 lg:mx-28" />
              <p className="text-sm text-gray-100 font-arcon font-bold text-center  max-w-lg my-3 tracking-wider px-2 mx-auto lg:px-1 ">
                Substitutions
              </p>
              <hr className="mb-6 rounded-lg border-b border-white mx-4 lg:mx-28" />
              <div className="flex   py-12 sm:mx-auto -mx-3 sm:w-3/4">
                {teams.subs.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
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
                        {/* <svg
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
                        </svg> */}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center p-1  -mb-6 leading-normal  text-gray-100 bg-[#33175A]"
                      >
                        {item.team_short_code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>

      {detail && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
              &#8203;
            </span>

            <div className="relative inline-block  pt-5 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  sm:my-8 w-full sm:max-w-lg sm:p-6 md:p-8 sm:align-middle">
              <div className="flex items-end justify-end">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDetail(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-2 inline-flex items-center "
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
              </div>

              <div className="flex py-3 px-2  ">
                <h2 className="text-3xl px-5 font-bold text-[#240155]  leading-5 ">
                  {details["name" as any]}
                </h2>
              </div>

              {/* table */}
              <section className="py-3">
                <img
                  src={details["image_path" as any]}
                  alt={details["name" as any]}
                  className="mx-auto w-[7rem] lg:w-[8rem] mt-5 rounded-full"
                />
                <div className="flex justify-between items-center mx-auto px-20 w-[25rem] mt-4">
                  {/* <div className="flex gap-1 items-center">
                    <img
                      src=""
                      alt="size"
                      className="w-screen lg:w-full px-3"
                    />
                    Arsenal
                  </div> */}

                  <button className="bg-[#F0F0F0] py-1 px-2 rounded-md text-xs">
                    {details["position_id" as any] === 24 && (
                      <span>Goalkeeper</span>
                    )}
                    {details["position_id" as any] === 25 && (
                      <span>Defender</span>
                    )}
                    {details["position_id" as any] === 26 && (
                      <span>Midfielder</span>
                    )}
                    {details["position_id" as any] === 27 && (
                      <span>Forward</span>
                    )}
                  </button>
                </div>
                <button
                  className="my-7 bg-[#9783E3] text-[#fff] text-center hover:bg-gay-200 font-light text-xs px-4 py-2 sm:py-4  rounded shadow hover:shadow-md outline-none focus:outline-none   w-full ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => selectCap(details["id" as any])}
                >
                  Make Captain
                </button>

                {/* <div className="flex justify-between items-center mx-auto  w-full mt-4">
                  <h2 className="font-semibold">Upcoming Fixtures</h2>

                  <button className="flex gap-x-2 items-center py-1 px-2 rounded-md text-xs">
                    See all
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2008 5.82902L19.2008 12.0004M19.2008 12.0004L13.2008 18.1719M19.2008 12.0004L4.80078 12.0004"
                        stroke="#240155"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-x-3">
                  <div className="text-xs items-center">
                    <img
                      src=""
                      alt="size"
                      className="w-screen lg:w-full px-3"
                    />
                    Arsenal
                  </div>
                  <div className="text-xs items-center">
                    <img
                      src=""
                      alt="size"
                      className="w-screen lg:w-full px-3"
                    />
                    Arsenal
                  </div>
                  <div className="text-xs items-center">
                    <img
                      src=""
                      alt="size"
                      className="w-screen lg:w-full px-3"
                    />
                    Arsenal
                  </div>
                </div> */}
              </section>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default SaveTeam;
