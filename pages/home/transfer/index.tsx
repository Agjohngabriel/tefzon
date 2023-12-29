import MainLayout from "../../../components/MainLayout";
import { useEffect, useState } from "react";

import axios from "axios";
import { useSession } from "next-auth/react";

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
  starting: string;
}
interface Team {
  goalkeepers: [];
}

const Index = () => {
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
          Authorization: `Bearer ${session?.data.token}`,
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
            Authorization: `Bearer ${session?.data.token}`,
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
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
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
    }
  }, [session]);
  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/get/my/squad`, {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
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

  const goToTransferNews = () => {
    Router.push("/home/transfer/news");
  };
  const goToMakeTransfer = () => {
    Router.push("/home/transfer/make_transfer");
  };
  return (
    <MainLayout>
      <div className="container lg:max-w-7xl flex flex-wrap     mx-auto   px-auto py-2  lg:py-12 lg:px-10 ">
        <section className="container px-4 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h1 className="font-semibold text-xl sm:text-3xl text-[#33175A]  text-center">
                  Transfer
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-6 md:flex md:items-center md:justify-between ">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
              <button className="px-5 py-2 text-xs font-medium text-px-2 sm:[#331py-2 sm:75A] transition-colors duration-200 sm:text-xs sm:text-sm  bg-gray-100 ">
                Transfers
              </button>

              <button
                onClick={goToTransferNews}
                className="px-5 py-2 text-xs font-medium text-px-2 sm:[#331py-2 sm:75A] transition-colors duration-200 sm:text-xs sm:text-sm  "
              >
                News
              </button>

              <button
                onClick={goToMakeTransfer}
                className="px-5 py-2 text-xs font-medium text-px-2 sm:[#331py-2 sm:75A] transition-colors duration-200 sm:text-xs sm:text-sm  "
              >
                Make Transfer
              </button>
            </div>

            <div className="relative flex items-center mt-4 md:mt-0">
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
          <div className="mx-auto ">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full sm shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#33175A] uppercase tracking-wider">
                          From
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#33175A] uppercase tracking-wider table-cell">
                          To
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-[#33175A] uppercase tracking-wider table-cell">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10 Feb
                          </p>
                        </td>
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 sm:w-10 h-5 sm:h-10">
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
                        <td className="px-2 sm:px-5 py-2 sm:py-5 border-b border-gray-200 bg-white text-xs sm:text-sm  table-cell">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
