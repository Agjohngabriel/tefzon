import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  code: number;
  type: string;
}

const Index = () => {
  const [openTab, setOpenTab] = useState(1);
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });


  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(`${process.env.BACKEND_URL}/user/leagues-history`, {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
          },
        });
        const response = await res.data.data;
        console.log(response);
        return response;
      };

      const getFavourites = async () => {
        const FavouritesFromApi = await fetchAll();
        setLeagues(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);
  return (
    <MainLayout>
      <div className="container lg:max-w-7xl flex flex-wrap     mx-auto   px-auto py-2  lg:py-12 lg:px-10 ">
        <section className="container px-4 mx-auto">
          {/* History */}
          <div className={openTab === 1 ? "block mx-auto " : "hidden"}>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-x-3">
                  <h1 className="font-semibold text-xl sm:text-3xl text-[#000]  text-center font-[Oswald]">
                    History
                  </h1>
                </div>
              </div>
            </div>

            <hr className="my-6 rounded-lg border-b-2 border-violet-500 " />

            <div className="block relative flex items-center my-5 ">
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
                value=""
                placeholder="Search"
                className="block w-full py-3 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-[56rem] placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 rounded-3xl border shadow-2xl p-2 sm:p-10 pb-5 max-w-4xl ">
              <div className="mb-10">
                <h1 className="font-inter text-sm sm:text-xl font-semibold text-[#3A3A3A] w-4/6 mb-5">
                  Today Oct 19, 2023
                </h1>

                {leagues.map((item: Team, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[40rem] flex flex-col p-2 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg mb-5"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between ">
                      <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                        <p className="rounded-lg font-[Oswald] text-2xl  p-2  text-[#240155] bg-[#795DE029]">
                          {item.name.split(" ").map((i) => i.charAt(0))}
                        </p>

                        <div className="flex flex-col">
                          <div className="text-[#3A3A3A] font-normal pb-1 leading-none">
                            {item.name}
                          </div>
                          <div className="flex gap-x-2 items-center">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.0863 11.9095C11.814 11.9553 11.6303 12.2131 11.676 12.4854C11.7218 12.7578 11.9796 12.9415 12.252 12.8957L12.0863 11.9095ZM11.3435 8.25752C11.0673 8.25752 10.8435 8.48138 10.8435 8.75752C10.8435 9.03366 11.0673 9.25752 11.3435 9.25752V8.25752ZM10.7282 7.19104C11.6202 7.19104 12.343 6.4678 12.343 5.57593H11.343C11.343 5.91578 11.0677 6.19104 10.7282 6.19104V7.19104ZM9.11346 5.57593C9.11346 6.4678 9.83629 7.19104 10.7282 7.19104V6.19104C10.3888 6.19104 10.1135 5.91578 10.1135 5.57593H9.11346ZM10.7282 3.96083C9.83629 3.96083 9.11346 4.68407 9.11346 5.57593H10.1135C10.1135 5.23609 10.3888 4.96083 10.7282 4.96083V3.96083ZM12.343 5.57593C12.343 4.68407 11.6202 3.96083 10.7282 3.96083V4.96083C11.0677 4.96083 11.343 5.23609 11.343 5.57593H12.343ZM13.5 10.612C13.5 10.9252 13.3999 11.192 13.198 11.4037C12.9917 11.6202 12.6432 11.816 12.0863 11.9095L12.252 12.8957C12.9628 12.7763 13.5297 12.5051 13.9219 12.0937C14.3185 11.6775 14.5 11.1555 14.5 10.612H13.5ZM11.3435 9.25752C11.9873 9.25752 12.5487 9.44052 12.9357 9.71067C13.3244 9.98199 13.5 10.3085 13.5 10.612H14.5C14.5 9.89134 14.0809 9.29057 13.5081 8.8907C12.9336 8.48966 12.1668 8.25752 11.3435 8.25752V9.25752ZM7.00836 5.45551C7.00836 6.22683 6.4921 6.68973 5.92789 6.68973V7.68973C7.10941 7.68973 8.00836 6.71176 8.00836 5.45551H7.00836ZM5.92789 6.68973C5.36367 6.68973 4.84742 6.22683 4.84742 5.45551H3.84742C3.84742 6.71176 4.74636 7.68973 5.92789 7.68973V6.68973ZM4.84742 5.45551C4.84742 5.07023 4.97892 4.79907 5.15893 4.62398C5.34203 4.4459 5.60766 4.33594 5.92789 4.33594V3.33594C5.37524 3.33594 4.85064 3.52886 4.46172 3.90712C4.06972 4.28838 3.84742 4.827 3.84742 5.45551H4.84742ZM5.92789 4.33594C6.24811 4.33594 6.51374 4.4459 6.69684 4.62398C6.87686 4.79907 7.00836 5.07023 7.00836 5.45551H8.00836C8.00836 4.827 7.78605 4.28838 7.39405 3.90712C7.00513 3.52886 6.48053 3.33594 5.92789 3.33594V4.33594ZM9.54685 11.2812C9.54685 11.5679 9.39344 11.8925 8.85555 12.1729C8.30112 12.462 7.38669 12.6693 6.02342 12.6693V13.6693C7.46436 13.6693 8.56164 13.4539 9.31787 13.0596C10.0906 12.6567 10.5468 12.0373 10.5468 11.2812H9.54685ZM6.02342 12.6693C4.66015 12.6693 3.74573 12.462 3.19129 12.1729C2.6534 11.8925 2.5 11.5679 2.5 11.2812H1.5C1.5 12.0373 1.95621 12.6567 2.72898 13.0596C3.4852 13.4539 4.58249 13.6693 6.02342 13.6693V12.6693ZM2.5 11.2812C2.5 11.068 2.70328 10.7214 3.39084 10.3987C4.03874 10.0947 4.96895 9.8931 6.02342 9.8931V8.8931C4.85582 8.8931 3.77432 9.11416 2.96602 9.49347C2.1974 9.85416 1.5 10.4516 1.5 11.2812H2.5ZM6.02342 9.8931C7.07789 9.8931 8.0081 10.0947 8.656 10.3987C9.34357 10.7214 9.54685 11.068 9.54685 11.2812H10.5468C10.5468 10.4516 9.84945 9.85416 9.08082 9.49347C8.27253 9.11416 7.19103 8.8931 6.02342 8.8931V9.8931Z"
                                fill="#795DE0"
                              />
                            </svg>
                            <h2 className="text-xs text-[#94A3B8]">
                              {item.participants} managers
                            </h2>
                          </div>
                        </div>
                      </div>
                      <button
                        // onClick={() =>
                        //   joinLeague({ id: item.id, code: item.code })
                        // }

                        className="flex-no-shrink py-2 text-sm  "
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17L14.58 11.9992L10 7"
                            stroke="#94A3B8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Leauge statistics */}
          <div className={openTab === 2 ? "block mx-auto " : "hidden"}>
            <div className="bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 rounded-3xl border shadow-2xl p-2 sm:p-10  max-w-4xl ">
              <div className="relative md:rounded-r-2xl ">
                <h1 className="font-Montserrat font-semibold text-xl sm:text-4xl text-[#000]  mx-auto text-left">
                  Big Gees League
                </h1>
                <p className="font-Montserrat text-xs sm:text-base  text-[#808080] sm:pb-5 mx-auto text-left">
                  Last updated: Friday 27 Oct 23:56
                </p>
                <table className="w-full">
                  <thead className="w-1/2 bg-gradient-to-r from-[#EFEFEF] bg-[#EFEFEF]">
                    <tr>
                      <th
                        className="p-2 text-center text-sm font-montserrat text-gray-900"
                        title="position"
                      >
                        Rank
                      </th>
                      <th
                        className="p-1 text-left w-2/3 text-sm font-montserrat text-gray-900"
                        title="club"
                      >
                        Managers
                      </th>

                      <th
                        className="p-1 text-center text-sm pr-4 font-montserrat text-black-0"
                        title="points"
                      >
                        Total Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="border-b border-gray-300 py-1 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                    >
                      <td className="p-1 text-sm font-normal">
                        1
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                          arrow_drop_up
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                    <tr
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      className="border-b border-gray-300 py-1 cursor-pointer"
                    >
                      <td className="p-1 text-sm font-normal">
                        2
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                          arrow_drop_up
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                    <tr
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      className="border-b border-gray-300 py-1 cursor-pointer"
                    >
                      <td className="p-1 text-sm font-normal">
                        3
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-[#FF6B00] ">
                          arrow_drop_down
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                    <tr
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      className="border-b border-gray-300 py-1 cursor-pointer"
                    >
                      <td className="p-1 text-sm font-normal">
                        4
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-[#FF6B00] ">
                          arrow_drop_down
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                    <tr
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      className="border-b border-gray-300 py-1 cursor-pointer"
                    >
                      <td className="p-1 text-sm font-normal">
                        5
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                          arrow_drop_up
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                    <tr
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      className="border-b border-gray-300 py-1 bg-[#9783E3] cursor-pointer"
                    >
                      <td className="p-1 text-sm font-normal">
                        6
                        <span className=" align-middle  material-icons text-2xl sm:text-3xl text-[#FF6B00] ">
                          arrow_drop_down
                        </span>
                      </td>
                      <td className="p-1 text-left ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            Aswinram
                          </div>
                          <div> Aswinram R</div>
                        </p>
                      </td>
                      <td className="p-1 text-center text-sm font-arcon text-black-0">
                        {" "}
                        56
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Team Statistics */}
          <div
            className={
              openTab === 3
                ? "block container lg:max-w-7xl    mx-auto mt-1 mb-2"
                : "hidden"
            }
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className="flex items-center gap-x-2 bg-[#F0F0F0] text-[#333333] active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
                    fill="#333333"
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
              Back
            </button>

            <h2 className="text-base my-5 font-medium font-montserrat leading-tight tracking-tighter text-gray-900  sm:text-xl lg:text-3xl animate-fade-in-up">
              Points - Gabby
            </h2>
            <div className="bg-[#F8F8F8] rounded-xl border shadow-2xl shadow-[#766AA480] p-2   sm:px-10 max-w-4xl flex justify-between ">
              <div className="text-center space-y-1 p-4">
                <h2 className="text-xs font-light text-[#94A3B8]">
                  Average Point
                </h2>
                <h2 className="text-xl font-regular">44</h2>
              </div>
              <div className="text-center space-y-2 bg-[#795DE0] rounded-xl p-4 text-[#fff]">
                <h2 className="text-xs font-light">Your Score</h2>
                <h2 className="text-xl font-medium">78</h2>
              </div>
              <div className="text-center space-y-1 p-4">
                <h2 className="text-xs font-light">Highest Point</h2>
                <h2 className="text-xl font-regular">80</h2>
              </div>
            </div>

            <div className="container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded shadow-2xl shadow-indigo-500/50  mt-10 mb-20  w-auto">
              <div
                className="rounded border shadow-xl py-16 px-5 w-full  "
                style={{
                  backgroundImage: 'url("/img/pitch-md.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div>
                  <div className="flex justify-center mt-[5rem]  py-16 mx-auto">
                    {/* {teams.goalkeepers.map((item: Players, player_id: number) => ( */}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>
                  </div>

                  <div className="flex   py-12 mx-auto sm:w-3/4">
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>
                  </div>

                  <div className="flex   py-16 sm:mx-auto -mx-3 sm:w-3/4">
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>
                  </div>

                  <div className="flex   pt-16 mx-auto sm:w-3/4">
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>{" "}
                    <button
                      type="button"
                      className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                    >
                      <div className="-my-[1.5rem] mx-auto">
                        <img
                          className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                          src="/img/Vector 11.svg"
                          // alt={item.player_name}
                          // title={item.player_name}

                          alt=""
                        />
                      </div>
                      <div className="w-full mx-auto ">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                        >
                          {/* {item.player_name.split(" ", 1)} */}Peter Cech
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                        >
                          {/* {item.rating} */}5
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="bg-[#605E6333] h-20">
                  <div className="flex justify-between  mt-10 sm:mx-auto -mx-3 sm:w-3/4">
                    <div>
                      <button
                        type="button"
                        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto">
                          <img
                            className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                            src="/img/Vector 11.svg"
                            // alt={item.player_name}
                            // title={item.player_name}

                            alt=""
                          />
                        </div>
                        <div className="w-full mx-auto ">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                          >
                            {/* {item.player_name.split(" ", 1)} */}Peter Cech
                          </p>
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                          >
                            {/* {item.rating} */}5
                          </p>
                        </div>
                      </button>
                      <h2 className="text-center font-medium py-1">GK</h2>
                    </div>
                    <div>
                      <button
                        type="button"
                        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto">
                          <img
                            className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                            src="/img/Vector 11.svg"
                            // alt={item.player_name}
                            // title={item.player_name}

                            alt=""
                          />
                        </div>
                        <div className="w-full mx-auto ">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                          >
                            {/* {item.player_name.split(" ", 1)} */}Peter Cech
                          </p>
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                          >
                            {/* {item.rating} */}5
                          </p>
                        </div>
                      </button>
                      <h2 className="text-center font-medium py-1">1 - FWD</h2>
                    </div>{" "}
                    <div>
                      <button
                        type="button"
                        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto">
                          <img
                            className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                            src="/img/Vector 11.svg"
                            // alt={item.player_name}
                            // title={item.player_name}

                            alt=""
                          />
                        </div>
                        <div className="w-full mx-auto ">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                          >
                            {/* {item.player_name.split(" ", 1)} */}Peter Cech
                          </p>
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                          >
                            {/* {item.rating} */}5
                          </p>
                        </div>
                      </button>
                      <h2 className="text-center font-medium py-1">2-DEF</h2>
                    </div>{" "}
                    <div>
                      <button
                        type="button"
                        className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                      >
                        <div className="-my-[1.5rem] mx-auto">
                          <img
                            className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3.2rem]"
                            src="/img/Vector 11.svg"
                            // alt={item.player_name}
                            // title={item.player_name}

                            alt=""
                          />
                        </div>
                        <div className="w-full mx-auto ">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded-t text-gray-100 bg-[#6544DE] flex justify-center text-center"
                          >
                            {/* {item.player_name.split(" ", 1)} */}Peter Cech
                          </p>
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-[.65rem] text-center rounded-b py-0.5   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#41279E]"
                          >
                            {/* {item.rating} */}5
                          </p>
                        </div>
                      </button>
                      <h2 className="text-center font-medium py-1">3-MID</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
