import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Loader } from "../../../../components/base/Loader";
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
const SelectVice = () => {
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

  const selectCap = async (id: number) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BASE_URL}select/vice-captain/${id}`,
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
      console.log(teams);
    };
    getFavourites();
  }, []);
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
      {isLoading === 1 && <Loader />}
      <form>
        <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-4xl text-black-0  text-center">
              Select Your Vice Captain
            </h1>
          </div>
          <div className="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
            <div>
              <Link href="/home/account/squad/name_team">
                <a
                  className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                      hover:bg-blue-500 shadow-inner 
                                      bg-[#4AAE75] text-gray-200
                                      duration-200 ease-in-out 
                                      transition"
                >
                  <span className="font-montserrat text-sm text-black-150">
                    Save Team
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto" />

        <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
          <div
            className="rounded-2xl border shadow-xl py-20 px-5 w-full "
            style={{
              backgroundImage: 'url("/img/pitch-lg.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <p className="text-sm text-gray-100 font-arcon text-center  max-w-3xl mb-5 py-5 bg-[#6E4BEC7D]/70 tracking-wider px-2 mx-auto lg:px-1 ">
              Your Vice Captain's point will be doubled
            </p>
            {error === true && (
              <p className="text-sm font-arcon text-red-0 text-center max-w-3xl -mb-8 py-3 ml-24 tracking-wider px-2  lg:px-1 ">
                {errorMsg.message}
              </p>
            )}
            {message !== "" && (
              <p className="text-sm font-arcon text-white text-center max-w-3xl -mb-8 py-3  ml-24 tracking-wider px-2  lg:px-1 ">
                {message}
              </p>
            )}
            <div className={"mt-20" + (openTab === 1 ? "block" : "hidden")}>
              <div className="flex mt-[7rem]  py-10 mx-auto">
                {teams.goalkeepers.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    onClick={() => selectCap(item.id)}
                    className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <svg
                        width="43"
                        height="41"
                        viewBox="0 0 53 51"
                        fill="none"
                        className=" mx-auto z-0"
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
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs font-arcon py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
                      >
                        {item.player_name}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        11.9
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-10 mx-auto w-1/2">
                {teams.defenders.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    onClick={() => selectCap(item.id)}
                    className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <svg
                        width="43"
                        height="41"
                        viewBox="0 0 53 51"
                        fill="none"
                        className=" mx-auto z-0"
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
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs font-arcon py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
                      >
                        {item.player_name}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        11.9
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-10 mx-auto w-3/4">
                {teams.midfielders.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    onClick={() => selectCap(item.id)}
                    className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <svg
                        width="43"
                        height="41"
                        viewBox="0 0 53 51"
                        fill="none"
                        className=" mx-auto z-0"
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
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs font-arcon py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
                      >
                        {item.player_name}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        11.9
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex   py-10 mx-auto w-1/2">
                {teams.forwards.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    onClick={() => selectCap(item.id)}
                    className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <svg
                        width="43"
                        height="41"
                        viewBox="0 0 53 51"
                        fill="none"
                        className=" mx-auto z-0"
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
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs font-arcon py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
                      >
                        {item.player_name}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        11.9
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <hr />
              <div className="flex py-10 mx-auto">
                {teams.subs.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    onClick={() => selectCap(item.id)}
                    className="p-3  rounded mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-mt-[3rem] ">
                      <svg
                        width="43"
                        height="41"
                        viewBox="0 0 53 51"
                        fill="none"
                        className=" mx-auto z-0"
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
                    </div>
                    <div className="w-full mx-auto -mt-1    mb-1">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs font-arcon py-1 mt-1 -ml-9 pl-5 tracking-wider rounded text-gray-100 bg-[#33175A]"
                      >
                        {item.player_name}
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center  -ml-9 -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                      >
                        11.9
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SelectVice;
