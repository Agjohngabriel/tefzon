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
          Authorization: `Bearer ${session?.data.data.token}`,
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
          Authorization: `Bearer ${session?.data.data.token}`,
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
        Authorization: `Bearer ${session?.data.data.token}`,
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

  const eleven =
    teams.goalkeepers.length +
    teams.midfielders.length +
    teams.forwards.length +
    teams.defenders.length;
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
              backgroundImage: 'url("/img/pitch-lg.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="flex justify-center items-center mb-3  mx-auto mt-12">
              <div className="container max-w-sm  bg-[#6E4BEC7D]/70 py-4 mb-10  rounded-md shadow-2xl shadow-gray-700/90 px-2 lg:px-2 flex items-center mx-auto justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 mx-auto text-gray-600">
                  <h1 className="text-xl text-center text-white font-arcon sm:text-2xl">
                    Players: ({eleven} /11)
                  </h1>
                </div>
                {/* <div className="items-center flex-grow block sm:w-full md:flex md:justify-end md:w-auto">
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
                        Reset
                      </div>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="relative flex flex-col min-w-0 break-words  w-full  rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space">
                      <div id="link1">
                        <div className="flex   py-6 mx-auto">
                          {teams.goalkeepers.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3  rounded mt-2 mx-auto  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
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
                                  <h1 className="focus:outline-none text-center text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                  {item.player_name.split(" ", 1)}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex   pt-16 mx-12">
                          {teams.defenders.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3  rounded mt- mx-auto text-center hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
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
                                  <h1 className="focus:outline-none text-center text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                  {item.player_name.split(" ", 1)}
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
                                className="p-1  rounded mt-10 mx-auto  h-10 hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
                                <div className="mt-[0rem] -mb-16 -translate-y-1/2 transform mx-auto">
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
                                  <h1 className="focus:outline-none text-center text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                  {item.player_name.split(" ", 1)}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex   pt-10 pb-2 mx-9">
                          {teams.forwards.map(
                            (item: Players, player_id: number) => (
                              <div
                                key={player_id}
                                className="p-3 rounded mt-5 mx-auto    hover:scale-105 transition transform duration-500 cursor-pointer"
                              >
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
                                  <h1 className="focus:outline-none text-center text-[.65rem] sm:text-xs font-arcon py-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]">
                                  {item.player_name.split(" ", 1)}
                                  </h1>
                                </div>
                              </div>
                            )
                          )}
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

                <div className="flex mx-auto md:flex-row py-6 ">
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
              </div>
            </div>

            <div className="container bg-gradient-to-br from-[#2B1872] to-[#6A43FA]  border-inherit rounded-xl h-[38rem] overflow-y-auto scrollbar-hide drop-shadow shadow-lg shadow-white px-4 py-3 lg:px-5">
              {isFetching === 1 ? (
                <span className="text-white opacity-50">Loading.....</span>
              ) : (
                ""
              )}
              <div className="flex items-center border-b border-gray-300 w-full">
                <div className="flex items-start justify-end  ">
                  <div className=" w-full flex">
                    <div className="pl-2  w-[8rem] mb-2">
                      <p className="focus:outline-none text-lg font-bold leading-normal  text-white">
                        Substitution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

                      <div className=" ml-2 py-2  flex-auto w-24">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-md font-arcon leading-5 border-l  text-white"
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

export default Starting;
