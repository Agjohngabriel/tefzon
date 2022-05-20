import MainLayout from "../../../../components/MainLayout";
import { useState } from "react";

const SquadSelection = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <MainLayout>
      <div className="container max-w-6xl mx-auto  pt-10  lg:px-2 flex items-center  justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
          <h1 className="font-oswald text-4xl text-gray-700  text-centeru">
            Squad Selection
          </h1>
        </div>
        <div className="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
          <div>
            <button
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#4AAE75] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
              type="submit"
            >
              <div className="font-montserrat text-sm text-black-150">Next</div>
            </button>
          </div>
        </div>
      </div>

      <hr className="my-5 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto" />

      <div className="container max-w-6xl mx-auto bg-[#6E4BEC7D]/70 py-4 mb-10  rounded-md shadow-2xl shadow-gray-700/90 lg:px-2 flex items-center  justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
          <h1 className="font-arcon px-4 text-2xl text-white  text-center">
            Players: (0/15)
          </h1>
        </div>
        <div className="w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
          <div>
            <button
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
              className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-3  ml-5 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-white/50 
                                 duration-200 ease-in-out 
                                 transition"
            >
              <div className="font-arcon text-sm text-white">Clear Team</div>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-sm font-arcon text-black-0 text-center max-w-3xl -mb-8 py-3 bg-[#6E4BEC7D]/70 ml-24 tracking-wider px-2  lg:px-1 ">
          C. Ronaldo has been added to your Squad
        </p>
        <div className="flex ">
          <div
            className="container  max-w-4xl h-3/4  ml-24 mt-10 mb-20  px-2 py-6 lg:px-1  "
            style={{
              backgroundImage: 'url("/img/pitch-md.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "fit",
            }}
          >
            <div className="flex justify-center items-center mb-3  mx-auto mt-12">
              <div className="inline-flex rounded border border-red-500">
                <input
                  type="radio"
                  name="room_type"
                  id="fixtures"
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
                  className="radio text-center text-sm font-arcon text-red-500 self-center py-3 px-12 cursor-pointer bg-white  hover:opacity-75"
                >
                  Pitch View
                </label>
              </div>
              <div className="inline-flex rounded border border-red-800 -ml-1">
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
                  className="radio text-center text-sm font-arcon text-white self-center py-3 px-12 cursor-pointer bg-red-800  hover:opacity-75"
                >
                  List View
                </label>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="relative flex flex-col min-w-0 break-words  w-full  rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="flex   py-10 mx-auto">
                          <div className="p-3 bg-gray-800/90 rounded mt-24 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                GK
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex   py-10 mx-auto w-1/2">
                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                DEF
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                DEF
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                DEF
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex   py-10 mx-auto w-3/4">
                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                MID
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                MID
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                MID
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded  mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                MID
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex   py-10 mx-auto w-1/2">
                          <div className="p-3  rounded -mt-2 mx-auto space-x-6  h-10 hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <button>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  className="absolute ml-2  z-10"
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

                              <svg
                                width="53"
                                height="51"
                                viewBox="0 0 53 51"
                                fill="none"
                                className=" mx-auto z-0"
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
                            <div className="w-full mx-auto -mt-1 -ml-8   mb-2">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-sm font-light pt-2 mt-1 -ml-9 pl-4 leading-5 rounded text-white bg-[#33175A]"
                              >
                                C. Ronaldo
                              </p>
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-xs text-center pb-1 -ml-9 -mb-6 font-light leading-normal  text-white bg-[#33175A]/50 bg-gradient-to-l from-[#6E4BEC7D]/50 via-[#F2F6FF]/50 to-[#6E4BEC7D]/50"
                              >
                                11.9
                              </p>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded mt-8 mx-auto space-x-6 h-8 align-baseline shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                FWD
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded mt-8 mx-auto space-x-6 h-8 align-baseline shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                FWD
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex   py-10 mx-auto w-3/5">
                          <div className="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                GK
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                DEF
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                MID
                              </h1>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-800/90 rounded mt-20 mx-auto space-x-6  shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                            <div className="-mt-[4rem] ">
                              <svg
                                width="52"
                                height="51"
                                viewBox="0 0 52 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
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
                            </div>

                            <div>
                              <h1 className="text-md -ml-3 font-arcon text-white mt-1 -mb-2 ">
                                FWD
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <div className=" mx-auto">
                          <div className="pt-4">
                            <div className="-mx-4 sm:-mx-8 px-1 sm:px-8 py-4 overflow-x-auto">
                              <div className="inline-block min-w-full shadow rounded-lg h-[42rem]">
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-red-700">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Goal Keeper
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-[#347E25]">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Defenders
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#347E25] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#347E25] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#347E25] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#347E25] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-[#513C9D]">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Midfelders
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-[#513C9D] ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-red-700">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Forwards
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="min-w-full leading-normal">
                                  <thead>
                                    <tr className="bg-[#347E25]">
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        Subs
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider">
                                        ₦
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        SB
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        TP
                                      </th>
                                      <th className="px-5 py-3 border-b-2 border-gray-200  text-center text-xs font-arcon text-white uppercase tracking-wider hidden lg:table-cell">
                                        Fix
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                    <tr className="">
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <div className=" w-full flex">
                                          <p
                                            tabIndex={0}
                                            className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex align-middle"
                                          >
                                            <span className=" align-middle  material-icons text-2xl text-red-500 ">
                                              info_outline
                                            </span>

                                            <span className="flex-shrink-0 w-10 h-10 ml-4  mb-2">
                                              <svg
                                                width="43"
                                                height="40"
                                                viewBox="0 0 43 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281L37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793Z"
                                                  fill="#276556"
                                                />
                                                <path
                                                  d="M9.26667 19.7355H1V17.5601L3.25455 8.13353C3.25455 8.13353 4.75758 5.23305 6.26061 4.50793C7.76364 3.78281 16.7818 0.882324 16.7818 0.882324C20.4271 2.53732 22.4114 3.68011 27.303 0.882324L34.8182 3.78281C34.8182 3.78281 37.0727 5.95817 37.8242 6.68329C38.5758 7.40841 40.0788 9.58377 40.8303 11.034C41.5818 12.4842 42.3333 19.7355 42.3333 19.7355L40.8303 20.4606H34.0667L33.3151 17.5601V39.3137H9.26667V19.7355ZM9.26667 19.7355V17.5601"
                                                  stroke="white"
                                                  strokeWidth="0.5"
                                                />
                                              </svg>
                                            </span>
                                          </p>

                                          <div className="ml-5 pl-3 mb-2">
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-sm font-arcon leading-5 text-gray-900"
                                            >
                                              C. Ronaldo
                                            </p>
                                            <p
                                              tabIndex={0}
                                              className="focus:outline-none text-xs leading-normal  text-gray-900"
                                            >
                                              JUV
                                              <span className="ml-4">FWD</span>
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle">
                                        <p className="text-gray-900 whitespace-no-wrap border-l border-gray-400 py-2 text-center">
                                          5.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          15.4
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          84
                                        </p>
                                      </td>
                                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm align-middle hidden lg:table-cell">
                                        <p className="text-gray-900 whitespace-no-wrap text-center">
                                          AVL (H)
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-sm   shadow-indigo-500/50 md:w-3/5 ml-12 mt-10 mb-20    w-auto">
            <div className="px-1">
              <div className="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
                <div className="max-w-md mx-autooverflow-hidden md:max-w-xl">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="relative flex">
                        <input
                          type="text"
                          className="bg-white h-10 w-full font-arcon text-xs px-2 mr-3 focus:outline-none hover:cursor-pointer"
                          name="search"
                          placeholder="Search"
                        />

                        <button
                          className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2  -mt-2 mb-2 cursor-pointer                                 
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

                <div className="flex flex-col md:flex-row py-10 ">
                  <div className=" flex-1 svelte-1l8159u">
                    <button
                      className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <div className="font-arcon text-sm ">ALL</div>
                    </button>
                  </div>
                  <div className=" flex-1 svelte-1l8159u">
                    <button
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

                <div className="flex flex-col md:flex-row">
                  <div className="w-full mx-2 flex-1 svelte-1l8159u">
                    <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                      Sort by
                    </label>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                      <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">Total Point</option>
                        <option value="02">Goals</option>
                        <option value="03">Female</option>
                        <option value="04">Prefer not to state</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full mx-2 flex-1 svelte-1l8159u">
                    <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                      Max Cost
                    </label>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                      <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">3.00</option>
                        <option value="02">Free</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container bg-gradient-to-br from-[#2B1872] to-[#6A43FA]  border-inherit rounded-xl drop-shadow shadow-lg shadow-white px-4 py-3 lg:px-5">
              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-3 px-1 ">
                <div className="flex items-center border-b border-gray-300 ">
                  <div className="flex items-start justify-between w-full ">
                    <div className=" w-full flex">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs text-left leading-normal text-gray-500 flex"
                      >
                        <span className=" align-middle  material-icons text-2xl text-red-500 ">
                          info_outline
                        </span>

                        <span className="flex-shrink-0 w-10 h-10 ml-2 border-l border-gray-400 mb-2">
                          <img
                            className="w-full h-full rounded-full ml-2"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </span>
                      </p>

                      <div className="ml-5 border-l border-gray-400 pl-3 mb-2">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-arcon leading-5 text-white"
                        >
                          C. Ronaldo
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal  text-white"
                        >
                          JUV <span className="ml-4">FWD</span>
                        </p>
                      </div>
                    </div>

                    <div className=" pt-3 border-l text-right">
                      <p
                        tabIndex={0}
                        className="focus:outline-none  text-md font-arcon leading-5 ml-2 px-4 text-white"
                      >
                        99
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-2  w-auto">
        <div className="flex flex-col  pt-10 space-y-4 max-w-3xl mx-auto">
          <div className="mx-auto flex-1 svelte-1l8159u ">
            <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
              <h1 className="font-oswald text-4xl text-gray-700  text-centeru">
                Fixtures
              </h1>
            </div>
            {/* <button
              className="text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-white text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
            >
              <div className="flex font-arcon text-xs font-medium py-1">
                <span className=" material-icons hover:text-white">
                  calendar_month
                </span>
                <span className="pl-3  pt-1">Sync to Calendar</span>
              </div>
            </button> */}
          </div>
          <div className="flex flex-col w-full md:flex-row py-10">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
              >
                <div className="flex font-arcon text-xs font-semibold ">
                  <span className=" material-icons hover:text-white">
                    arrow_backward
                  </span>{" "}
                  <span className="pt-1">Previous</span>
                </div>
              </button>
            </div>
            <h1 className="font-bold text-sm text-center text-gray-700 w-4/6 pt-3 px-5 ">
              Gameweek 20 - Tue 26 Jan 17:30
            </h1>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
              >
                <div className="flex font-arcon text-xs font-semibold px-5">
                  <span className="pt-1"> Next</span>
                  <span className="ml-20 material-icons hover:text-white ">
                    arrow_forward
                  </span>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Sunday 21 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Monday 22 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Sunday 27 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-gray-900 whitespace-no-wrap text-right">
                    Team 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SquadSelection;
