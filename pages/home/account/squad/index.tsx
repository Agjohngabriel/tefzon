import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Loader } from "../../../../components/base/Loader";
import MainLayout from "../../../../components/MainLayout";
import Router from "next/router";
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
      setDetail(false);
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
  const goToSelectSqaud = () => {
    Router.push("/home/account/squad/select_squad");
  };
  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}

      <div className="px-3 lg:px-20 py-10">
        <div className="bg-[#fff] rounded p-2   sm:px-10 sm:py-7 items-center  flex justify-between ">
          <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
            Your Squad
          </h1>

          <button
            onClick={() => goToSelectSqaud()}
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-1 sm:px-3 py-3 rounded font-semibold sm:font-bold cursor-pointer hover:bg-blue-100  text-[#795DE0] bg-[#E4ECFB] duration-200 ease-in-out transition"
          >
            <span className="text-xs sm:text-sm font-montserrat text-black-150">
              Transfer in / out players
            </span>
          </button>
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
              <p className="text-xs flex lg:flex-row flex-col items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-lg mb-5 py-5 bg-[#FEF8EC] text-red-500 tracking-wider px-2 mx-auto lg:px-1 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
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
              <p className="text-xs text-[#DB9816] flex lg:flex-row flex-col items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-lg mb-5 py-5 bg-[#FEF8EC] tracking-wider px-2 mx-auto lg:px-1 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8L8 11M8 5.77637V5.75M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    stroke="#DB9816"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                <span> {message}</span>
              </p>
            ) : (
              <div className="text-xs text-[#DB9816] flex lg:flex-row flex-col items-center gap-x-1 justify-center rounded font-arcon text-center  max-w-2xl mb-5 py-5 bg-[#FEF8EC] tracking-wider px-2 mx-auto lg:px-1 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9"
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
              <div className="flex justify-center mt-[5rem]  pb-8 mx-auto">
                {teams.goalkeepers.map((item: Players, player_id: number) => (
                  <button
                    type="button"
                    key={player_id}
                    onClick={() => playerDetails(item.player_id)}
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src={item.image_path}
                        alt={item.player_name}
                        title={item.player_name}
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {item.player_name.split(" ", 1)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex py-12 mx-auto sm:w-3/4">
                {teams.defenders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src={item.image_path}
                        alt={item.player_name}
                        title={item.player_name}
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {item.player_name.split(" ", 1)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex  py-12 sm:mx-auto -mx-4 sm:w-3/4">
                {teams.midfielders.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src={item.image_path}
                        alt={item.player_name}
                        title={item.player_name}
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {item.player_name.split(" ", 1)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex pt-12 mx-auto sm:w-3/4">
                {teams.forwards.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src={item.image_path}
                        alt={item.player_name}
                        title={item.player_name}
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {item.player_name.split(" ", 1)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="bg-[#605E6333] h-20">
              <div className="flex justify-between  mt-10 sm:mx-auto mx-3 sm:w-3/4">
                {teams.subs.map((item: Players, player_id: number) => (
                  <button
                    key={player_id}
                    type="button"
                    onClick={() => playerDetails(item.player_id)}
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="rounded-full bg-[#fff] -translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src={item.image_path}
                        alt={item.player_name}
                        title={item.player_name}
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {item.player_name.split(" ", 1)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-base px-3 sm:mx-auto sm:w-[47rem]">
                <h2 className="text-center font-medium py-1">1 - FWD</h2>
                <h2 className="text-center font-medium py-1">2 - MID</h2>
                <h2 className="text-center font-medium py-1">3 - DEF</h2>
                <h2 className="text-center font-medium py-1">4 - GK</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {detail && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
              &#8203;
            </span>

            <div className="relative inline-block  pt-5 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  sm:my-8 w-full sm:max-w-md sm:p-6 md:p-8 sm:align-middle">
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

              {/* table */}
              <section className="px-3">
                <img
                  src={details["image_path" as any]}
                  alt={details["name" as any]}
                  className="mx-auto w-[5rem] sm:w-[7rem] rounded-full"
                />
                <div className="flex justify-between items-center mx-auto justify-center mt-3">
                  <h2 className="text-xs sm:text-sm font-semibold text-[#000] flex leading-5 ">
                    {details["name" as any]}
                  </h2>

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

                <div className="space-y-2 my-4 border rounded-md p-5">
                  <button
                    onClick={() => selectCap(details["id" as any])}
                    className=" flex  items-center bg-white rounded-md text-[#94A3B8] justify-between cursor-pointer w-full hover:text-[#795DE0]"
                  >
                    <p className="text-xs  font-semibold text-left font-inter  text-[#000] ">
                      Make Captain
                    </p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                        fill="CurrentColor  "
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => selectViceCap(details["id" as any])}
                    className=" flex  items-center bg-white text-[#94A3B8] rounded-md justify-between cursor-pointer w-full hover:text-[#795DE0]"
                  >
                    <p className="text-xs  font-semibold text-left font-inter  text-[#000] ">
                      Make Vice Captain
                    </p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                        fill="CurrentColor  "
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="mt-3 bg-[#9783E3] text-[#fff] text-center hover:bg-gay-200  text-xs px-4 py-2 sm:py-3  rounded shadow hover:shadow-md outline-none focus:outline-none   w-full ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => remove(details["id" as any])}
                >
                  Substitube
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
