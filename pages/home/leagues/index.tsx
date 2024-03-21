import MainLayout from "../../../components/MainLayout";
import Router from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

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
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };

  const goToPublic = () => {
    Router.push("/home/leagues/join_public");
  };

  const goToCreate = () => {
    Router.push("/home/leagues/create");
  };
  const goToCreatePrivate = () => {
    Router.push("/home/leagues/create_private");
  };
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
        const res = await axios.get(`${process.env.BACKEND_URL}/user/leagues`, {
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

  const [modal, setModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  return (
    <MainLayout>
      <div className="container font-montserrat lg:max-w-6xl bg-[#fff] border-inherit rounded-b-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20   px-2 py-3 lg:py-10 lg:px-32 ">
        <div className={openTab === 1 ? "block mx-auto " : "hidden"}>
          <div className="  ">
            {error === true && (
              <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                  {errorMsg.message}
                </h1>
              </div>
            )}
            {message && (
              <div className="bg-indigo-400 w-1/2 text-center rounded shadow-md">
                <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                  {message}
                </h1>
              </div>
            )}

            {leagues.length === 0 ? (
              <div className="mx-auto   py-5 px-2 w-full">
                <div className="flex flex-col space-y-4 justify-center max-w-2xl mx-auto">
                  <div className=" ">
                    <img
                      src="/img/league.png"
                      alt="soccer"
                      className="mx-auto animate-up-down"
                    />
                  </div>
                  <h1 className="font-oswald text-center text-[#3A3A3A] text-2xl sm:text-3xl text-black-150   ">
                    Create or Join leagues
                  </h1>

                  <p className="font-inter text-[#808080] text-xs sm:text-sm text-center  w-full">
                    Winning is better when you’re competing with friends. Join a
                    league or create a new one.
                  </p>
                  {/* <!-- Start Navitem --> */}
                  <button
                    onClick={() => {
                      setCreateModal(true);
                    }}
                    className="p-4  flex flex-col items-center bg-[#795DE0] text-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    Create a new league
                  </button>
                  <button
                    onClick={() => {
                      setModal(true);
                    }}
                    className="p-4  flex flex-col items-center border border-[#795DE0] text-[#795DE0] rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    Join a league
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
                {/* <!-- Start Navitem --> */}
                <div className="py-10">
                  {leagues
                    .filter((item: Team) => item.type === (1 as any))
                    .map((item: Team, index) => (
                      <div
                        key={index}
                        className="w-full  flex flex-col p-1 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg mb-5"
                      >
                        <div className="flex flex-col sm:flex-row items-center justify-between ">
                          <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                            <p className="rounded-lg font-[Oswald] text-2xl py-1 px-2 text-[#240155] bg-[#795DE029]">
                              {item.name.split(" ").map((i) => i.charAt(0))}
                            </p>

                            <div className="flex flex-col">
                              <div className="text-[#3A3A3A] font-normal pb-1 leading-none">
                                {item.name}
                              </div>
                              <div className="flex gap-x-2 items-center">
                                <h2 className="text-xs text-[#94A3B8]">
                                  <span className="flex items-center gax-x-2">
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M3.30039 4.39995V3.94281C3.30039 2.42335 4.50468 1.19995 6.00039 1.19995C7.49611 1.19995 8.70039 2.42335 8.70039 3.94281V4.39995M3.30039 4.39995C2.80539 4.39995 2.40039 4.81138 2.40039 5.31424V9.88566C2.40039 10.3885 2.80539 10.7999 3.30039 10.7999H8.70039C9.19539 10.7999 9.60039 10.3885 9.60039 9.88566V5.31424C9.60039 4.81138 9.19539 4.39995 8.70039 4.39995M3.30039 4.39995H8.70039M6.00039 8.09995V6.89995"
                                        stroke="#795DE0"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                    Private league
                                  </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={{
                              pathname: "/home/history/details",
                              query: { id: item.id },
                            }}
                          >
                            <span className="flex-no-shrink py-2 text-sm  ">
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
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}

                  <div className=" flex items-center gap-x-4  py-1 px-1 w-full">
                    <button
                      onClick={() => {
                        setModal(true);
                      }}
                      className="py-4 px-10 flex flex-col items-center border border-[#795DE0] text-[#795DE0] rounded-md justify-center shadow-xl cursor-pointer"
                    >
                      Join a league
                    </button>{" "}
                    <button
                      onClick={() => {
                        setCreateModal(true);
                      }}
                      className="p-4  flex flex-col items-center bg-[#795DE0] text-white rounded-md justify-center shadow-xl cursor-pointer"
                    >
                      Create a new league
                    </button>
                  </div>
                </div>
                <div className="py-10">
                  {leagues
                    .filter((item: Team) => item.type === (0 as any))
                    .map((item: Team, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col p-1 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg mb-5"
                      >
                        <div className="flex flex-row items-center justify-between ">
                          <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                            <p className="rounded-lg font-[Oswald] text-2xl py-1 px-2 text-[#240155] bg-[#795DE029]">
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
                                  Public leagues
                                </h2>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={{
                              pathname: "/home/history/details",
                              query: { id: item.id },
                            }}
                          >
                            <span className="flex-no-shrink py-2 text-sm ">
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
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-5 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-xl sm:p-8  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2"></div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>{" "}
              <div className="flex items-start justify-between ">
                <div className=" font-semibold py-2">
                  <p className="text-4xl font-oswald  text-[#240155] ">
                    Join a League
                  </p>
                  <p className="text-left text-[#94A3B8] text-sm font-normal">
                    Choose the type of league to join
                  </p>
                </div>
              </div>
              <div className="space-y-2 my-4">
                <button
                  onClick={goToPrivate}
                  className=" flex  items-center bg-white rounded-md text-[#94A3B8] justify-between cursor-pointer w-full"
                >
                  <div className=" font-normal py-2">
                    <p className="text-xl text-left font-inter  text-[#795DE0] ">
                      Private league
                    </p>
                    <p className="text-left text-[#94A3B8] text-sm font-normal">
                      Managers require invitational codes to join.
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:text-[#795DE0]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                      fill="CurrentColor  "
                    />
                  </svg>
                </button>

                <button
                  onClick={goToPublic}
                  className=" flex  items-center bg-white text-[#94A3B8] rounded-md justify-between cursor-pointer w-full"
                >
                  <div className=" font-normal py-2">
                    <p className="text-xl text-left font-inter  text-[#795DE0] ">
                      Public league
                    </p>
                    <p className="text-left text-[#94A3B8] text-sm font-normal">
                      Managers do not require invitational codes to join.
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:text-[#795DE0]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                      fill="CurrentColor  "
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {createModal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-5 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-xl sm:p-8  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2"></div>
                <button
                  onClick={() => {
                    setCreateModal(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </div>{" "}
              <div className="flex items-start justify-between ">
                <div className=" font-semibold py-2">
                  <p className="text-4xl font-oswald  text-[#240155] ">
                    Create a League
                  </p>
                  <p className="text-left text-[#94A3B8] text-sm font-normal">
                    Choose the type of league to create
                  </p>
                </div>
              </div>
              <div className="space-y-2 my-4">
                <button
                  onClick={goToCreatePrivate}
                  className=" flex  items-center bg-white rounded-md text-[#94A3B8] justify-between cursor-pointer w-full"
                >
                  <div className=" font-normal py-2">
                    <p className="text-xl text-left font-inter  text-[#795DE0] ">
                      Private league
                    </p>
                    <p className="text-left text-[#94A3B8] text-sm font-normal">
                      Managers require invitational codes to join.
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:text-[#795DE0]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                      fill="CurrentColor  "
                    />
                  </svg>
                </button>

                <button
                  onClick={goToCreate}
                  className=" flex  items-center bg-white text-[#94A3B8] rounded-md justify-between cursor-pointer w-full"
                >
                  <div className=" font-normal py-2">
                    <p className="text-xl text-left font-inter  text-[#795DE0] ">
                      Public league
                    </p>
                    <p className="text-left text-[#94A3B8] text-sm font-normal">
                      Managers do not require invitational codes to join.
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:text-[#795DE0]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                      fill="CurrentColor  "
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Index;
