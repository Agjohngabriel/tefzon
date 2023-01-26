import Link from "next/link";
import { useState } from "react";
import MainLayout from "../../../../components/MainLayout";

const SaveTeam = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <MainLayout>
      <form>
        <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
              MY SQUAD
            </h1>
          </div>
          <div className="mx-7 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
            <div>
              <Link href="/home/account/squad/select_squad">
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
              Tiger FC
            </p>

            <div className={"mt-20" + (openTab === 1 ? "block" : "hidden")}>
              <div className="flex mt-[7rem]  py-10 mx-auto">
                <div className="p-3  rounded mt-2 mx-auto   h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[3rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto  z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex   py-10 mx-auto sm:w-1/2">
                <div className="p-3  rounded mt-2  mx-auto   h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[3rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[3rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[3rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex   py-10 sm:mx-auto -mx-3 sm:w-3/4">
                <div className="p-1  rounded mt-5 mx-auto  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-1  rounded mt-1 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-1  rounded mt-1 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-1  rounded mt-5 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex   py-10 mx-auto sm:w-1/2">
                <div className="p-3  rounded -mt-5 mx-auto   h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-3  rounded mt-2 mx-auto h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>

                <div className="p-3  rounded -mt-5 mx-auto   h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className="-mt-[4rem] ">
                    <svg
                      viewBox="0 0 53 51"
                      fill="none"
                      className=" h-8 sm:h-12 mx-auto z-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.52733 5.29475C9.39228 4.36334 20.582 0.637695 20.582 0.637695C25.105 2.76353 27.5672 4.23143 33.6366 0.637695L42.9614 4.36334L46.6913 8.08898C47.6238 9.02039 49.4887 11.8146 50.4212 13.6774C51.3537 15.5403 52.2861 24.8544 52.2861 24.8544L50.4212 25.7858H42.0289L41.0964 22.0601V50.0025H11.2572V24.8544H1V22.0601L3.79743 9.9518C3.79743 9.9518 5.66238 6.22616 7.52733 5.29475Z"
                        fill="#03A9F4"
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
                      className="focus:outline-none text-[.65rem] sm:text-xs font-arcon py-1 mt-1 px-1.5 sm:px-3  tracking-wider rounded text-gray-100 bg-[#33175A]"
                    >
                      C. Ronaldo
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center   -mb-6 font-arcon leading-normal  text-gray-100 bg-[#33175A]/100 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                    >
                      11.9
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-3 bg-gray-800/90 sm:w-[30rem] rounded-3xl mx-auto mt-12">
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
              <div
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
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SaveTeam;
