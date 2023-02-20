import { useState } from "react";
import MainLayout from "../../../components/MainLayout";

const Index = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <MainLayout>
      <div className="container lg:max-w-7xl flex flex-wrap     mx-auto   px-auto py-2  lg:py-12 lg:px-10 ">
        <section className="container px-4 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h1 className="font-semibold text-xl sm:text-3xl text-[#33175A]  text-center">
                  Statistic
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-6 md:flex md:items-center md:justify-between ">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                className={
                  "px-5 py-2 text-xs font-medium text-[#33175A] transition-colors duration-200 sm:text-sm " +
                  (openTab === 1 ? "bg-gray-100 " : "bg-white ")
                }
              >
                Team
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                className={
                  "px-5 py-2 text-xs font-medium text-[#33175A] transition-colors duration-200 sm:text-sm " +
                  (openTab === 2 ? "bg-gray-100 " : "bg-white ")
                }
              >
                Players
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                className={
                  "px-5 py-2 text-xs font-medium text-[#33175A] transition-colors duration-200 sm:text-sm " +
                  (openTab === 3 ? "bg-gray-100 " : "bg-white ")
                }
              >
                Ranks
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                className={
                  "px-5 py-2 text-xs font-medium text-[#33175A] transition-colors duration-200 sm:text-sm " +
                  (openTab === 4 ? "bg-gray-100 " : "bg-white ")
                }
              >
                Players Point
              </button>
            </div>

            <div
              className={
                openTab === 1
                  ? "block relative flex items-center mt-4 md:mt-0"
                  : "hidden"
              }
            >
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
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          {/* Team statistics */}
          <div className={openTab === 1 ? "block mx-auto " : "hidden"}>
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          M.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          W.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          D.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          L.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          NW
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          G.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          A.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden md:table-cell">
                          +/-.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Pts.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L1
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L2
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L3
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L4
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L5
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* all players statistics */}
          <div className={openTab === 2 ? "block mx-auto " : "hidden"}>
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Players
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          M.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          W.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          D.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          L.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          NW
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          G.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden lg:table-cell">
                          A.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden md:table-cell">
                          +/-.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Pts.
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L1
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L2
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L3
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L4
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider hidden xl:table-cell">
                          L5
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">1º</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            10
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            0
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            18
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            7
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            11
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            26
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            L
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            D
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            W
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Ranks Statistics */}
          <div
            className={
              openTab === 3
                ? "block container lg:max-w-7xl flex flex-wrap  justify-between   mx-auto mt-1 mb-2"
                : "hidden"
            }
          >
            <div className="py-1 w-full sm:max-w-lg xl:max-w-xl">
              <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
                <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
                  Top Scorers
                </h1>
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="w-full leading-normal">
                    <thead>
                      <tr className="rounded-2xl">
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          #Rank
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Team Name
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Goals
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="py-1 w-full sm:max-w-lg xl:max-w-xl">
              <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
                <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
                  Assists
                </h1>
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="rounded-2xl">
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          #Rank
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Team Name
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Assists
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º{" "}
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1º
                          <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                            arrow_drop_up
                          </span>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8 Goals
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="py-1 max-w-xl sm:max-w-2xl xl:max-w-3xl  ">
              <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
                <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
                  Cards
                </h1>
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="rounded-2xl">
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Team Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Yellow Card
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Red card
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            A.Banabas
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Funny Team
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            8
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Player point */}
          <div
            className={
              openTab === 4
                ? "block container lg:max-w-7xl flex flex-wrap     mx-auto mt-14 mb-2  px-auto py-2 lg:py-5 lg:px-10 "
                : "hidden"
            }
          >
            <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
              <div className="-mb-10 -translate-y-1/2 transform">
                <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
                  <img
                    className="rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kobe Bryant"
                    title="Kobe Bryant"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-center text-base font-bold">Kobe Bryant</h3>
                <span className="text-sm">Forward</span>
              </div>
              <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-lg">
                <li className="flex flex-col">
                  <span className="font-bold">PTS</span> 30.00
                </li>
                <li className=" flex flex-col">
                  <span className="font-bold">AST</span> 4
                </li>
              </ul>
            </div>

            <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
              <div className="-mb-10 -translate-y-1/2 transform">
                <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
                  <img
                    className="rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kobe Bryant"
                    title="Kobe Bryant"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-center text-base font-bold">Kobe Bryant</h3>
                <span className="text-sm">Forward</span>
              </div>
              <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-lg">
                <li className="flex flex-col">
                  <span className="font-bold">PTS</span> 30.00
                </li>
                <li className=" flex flex-col">
                  <span className="font-bold">AST</span> 4
                </li>
              </ul>
            </div>
            <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
              <div className="-mb-10 -translate-y-1/2 transform">
                <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
                  <img
                    className="rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kobe Bryant"
                    title="Kobe Bryant"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-center text-base font-bold">Kobe Bryant</h3>
                <span className="text-sm">Forward</span>
              </div>
              <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-lg">
                <li className="flex flex-col">
                  <span className="font-bold">PTS</span> 30.00
                </li>
                <li className=" flex flex-col">
                  <span className="font-bold">AST</span> 4
                </li>
              </ul>
            </div>

            <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
              <div className="-mb-10 -translate-y-1/2 transform">
                <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
                  <img
                    className="rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kobe Bryant"
                    title="Kobe Bryant"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-center text-base font-bold">Kobe Bryant</h3>
                <span className="text-sm">Forward</span>
              </div>
              <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-lg">
                <li className="flex flex-col">
                  <span className="font-bold">PTS</span> 30.00
                </li>
                <li className=" flex flex-col">
                  <span className="font-bold">AST</span> 4
                </li>
              </ul>
            </div>

            <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
              <div className="-mb-10 -translate-y-1/2 transform">
                <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
                  <img
                    className="rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kobe Bryant"
                    title="Kobe Bryant"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-center text-base font-bold">Kobe Bryant</h3>
                <span className="text-sm">Forward</span>
              </div>
              <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-lg">
                <li className="flex flex-col">
                  <span className="font-bold">PTS</span> 30.00
                </li>
                <li className=" flex flex-col">
                  <span className="font-bold">AST</span> 4
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
