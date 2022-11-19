import type { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";
import SlashScreen from "../components/SlashScreen";
import { motion } from "framer-motion";
import axios from "axios";

const Home: NextPage = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const fetchAll = async () => {
      // setIsLoading(true);
      const res = await axios.get(
        `${process.env.SPORTS_URL}/news/fixtures?api_token=${process.env.SPORTS_APIKEY}`
      );
      const response = await res.data;
      setIsLoading(false);
      console.log(response);
    };
  }, []);

  const goToRegister = () => {
    Router.push("/account/auth/signup");
  };
  const goToLogin = () => {
    Router.push("/account/auth/login");
  };
  const goToNews = () => {
    Router.push("/account/home/news");
  };
  const goToScout = () => {
    Router.push("/home/scout");
  };
  const goToFixtures = () => {
    Router.push("/home/fixtures");
  };
  const goToStats = () => {
    Router.push("/home/statistics");
  };
  const [text, count] = useTypewriter({
    words: ["TO PLAY WITH PLEASURE"],
    loop: true,
    delaySpeed: 2000,
  });
  return isLoading ? (
    <div className="h-screen snap-y snap-mandatory z-0">
      <div className="snap-center">
        <SlashScreen />
      </div>
    </div>
  ) : (
    <GuestLayout>
      <div className="container px-5 md:px-12 py-2 md:py-10 lg:py-2  mx-auto ">
        <div className="z-0 md:flex shadow-2xl rounded-2xl shadow-indigo-500/50 px-10 md:px-14 lg:px-20 h-3/4 flex flex-col text-center md:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <div className="mt-10 md:mt-14 lg:mt-20 mb-12 lg:w-3/5">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-tighter text-gray-800 font-oswald animate-fade-in-up">
              FANTASY SOCCER <br /> <span>{text}</span>
              <Cursor cursorColor="bg-primary-200" />
            </h2>
            <p className="text-gray-700 font-nunito text-1xl animate-fade-in-down">
              Listen to the songs at tip of your finger, feel the vibes and
              dance.Listen to the songs at tip of your finger, feel the vibes
              and dance. Listen to the songs at tip of your finger.
            </p>
            <div className="flex mt-5 md:mt-10">
              <Button
                Onclick={goToRegister}
                title="Register"
                bgcolor="bg-primary-200"
                color="text-white"
                opacity="opacity-100"
                width="md:w-40"
              />

              <button
                onClick={goToLogin}
                type="button"
                className="flex items-center py-2 ml-4 text-gray-600 rounded md:px-8 sm:ml-0 sm:px-6 focus:outline-none animate-wiggle "
              >
                Login to play
                <span className="ml-2 material-icons hover:text-green ">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="lg:mt-20 lg:w-1/2">
            <div className="mt-3 ">
              <img
                src="/img/soccer 1.png"
                alt="soccer"
                className="relative  animate-up-down"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixtures */}
      <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4">
        <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-4/12">
          <div
            aria-hidden="true"
            className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-10"
          ></div>

          <div className="relative p-6 space-y-6 lg:p-8">
            <div className="container  ">
              <div className="flex flex-col  pt-6 space-y-4 max-w-3xl mx-auto">
                <div className="mx-auto flex-1 svelte-1l8159u ">
                  <div className="flex items-center flex-shrink-0 text-gray-600 ">
                    <h1 className="font-oswald text-xl sm:text-3xl text-gray-700 sm:pb-5 mx-auto text-center">
                      Top Fixtures
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pt-5 ">
                <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
                  2022-23 English Premier League
                </p>

                <div className="w-full leading-normal ">
                  <div className="px-1 py-3 border-b border-gray-300  text-xs  flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 py-3 border-b border-gray-300  text-xs flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 ">
                <p className="text-xs text-gray-800 font-arcon text-center   py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
                  2022-23 Italian Serie A
                </p>

                <div className="w-full leading-normal ">
                  <div className="px-1 py-3 border-b border-gray-300  text-xs  flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 py-3 border-b border-gray-300  text-xs  flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 ">
                <p className="text-xs text-gray-900 font-arcon  text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
                  2022-23 Spanish LaLiga
                </p>

                <div className="w-full leading-normal ">
                  <div className="px-1 py-3 border-b border-gray-300  text-xs  flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 py-3 border-b border-gray-300  text-xs  flex justify-center mx-auto">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <p className="text-gray-900 whitespace-no-wrap">
                          lookester city
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="mx-2 sm:mx-5 tracking-tight px-2 sm:px-3 text-gray-600 whitespace-no-wrap text-center border  py-2  border-gray-300">
                      19:00
                    </p>
                    <div className="flex items-center float-right">
                      <div className="flex-shrink-0 w-6 sm:w-9 h-6 sm:h-9  sm:table-cell mr-3">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-gray-900 whitespace-no-wrap text-right">
                          Teamchester city
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={goToFixtures}
              className="block w-full py-3 px-6 text-center rounded-xl transition  active:text-purple-800 focus:text-indigo-600"
            >
              <div className="flex text-purple-700 font-arcon text-xs font-semibold px-5 justify-end">
                <span className="pt-1"> View All Fixtures</span>
                <span className="ml-4 material-icons hover:text-white ">
                  arrow_forward
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="relative group md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 ">
            <h1 className="font-oswald text-xl sm:text-sm text-gray-700 sm:pb-5 mx-auto text-left">
              English Premier League
            </h1>
            <table className="w-full">
              <thead className="w-1/2 bg-gradient-to-r from-indigo-500 bg-[#EFEFEF]">
                <tr>
                  <th
                    className="p-2 text-center text-sm font-montserrat text-gray-100"
                    title="position"
                  >
                    Pos
                  </th>
                  <th
                    className="p-1 text-left w-2/3 text-sm font-montserrat text-gray-100"
                    title="club"
                  >
                    Club
                  </th>
                  <th
                    className="p-1 text-center text-sm font-montserrat text-black-0"
                    title="played"
                  >
                    PL
                  </th>
                  <th
                    className="p-1 text-center  text-sm  font-montserrat text-black-0"
                    title="Goal Different"
                  >
                    GD
                  </th>
                  <th
                    className="p-1 text-center text-sm pr-4 font-montserrat text-black-0"
                    title="points"
                  >
                    PTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    1
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +13
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    2
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +10
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    3
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +4
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
              </tbody>
            </table>

            <h1 className="font-oswald text-xl sm:text-sm text-gray-700 sm:pt-5 sm:pb-3 mx-auto text-left">
              Spanish LaLiga
            </h1>
            <table className="w-full">
              <thead className="w-1/2 bg-gradient-to-r from-indigo-500 bg-[#EFEFEF]">
                <tr>
                  <th
                    className="p-2 text-center text-sm font-montserrat text-gray-100"
                    title="position"
                  >
                    Pos
                  </th>
                  <th
                    className="p-1 text-left w-2/3 text-sm font-montserrat text-gray-100"
                    title="club"
                  >
                    Club
                  </th>
                  <th
                    className="p-1 text-center text-sm font-montserrat text-black-0"
                    title="played"
                  >
                    PL
                  </th>
                  <th
                    className="p-1 text-center  text-sm  font-montserrat text-black-0"
                    title="Goal Different"
                  >
                    GD
                  </th>
                  <th
                    className="p-1 text-center text-sm pr-4 font-montserrat text-black-0"
                    title="points"
                  >
                    PTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    1
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +13
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    2
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +10
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
                <tr className="border-b border-gray-300 py-1">
                  <td className="p-1 text-sm font-normal">
                    3
                    <span className=" align-middle  material-icons text-2xl sm:text-3xl text-green ">
                      arrow_drop_up
                    </span>
                  </td>
                  <td className="p-1 text-left ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                    >
                      Aswinram
                    </p>
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    {" "}
                    56
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    +4
                  </td>
                  <td className="p-1 text-center text-sm font-arcon text-black-0">
                    316
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={goToStats}
              className="block w-full py-4 px-6 text-center rounded-xl transition  active:text-purple-800 focus:text-indigo-600"
            >
              <div className="flex text-purple-700 font-arcon text-xs font-semibold px-5 justify-end">
                <span className="pt-1"> View All Tables</span>
                <span className="ml-4 material-icons hover:text-purple-500">
                  arrow_forward
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* News */}
      <main className="mt-10 px-2 sm:px-10 lg:px-20 mx-auto">
        <div className="block flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
          <a
            className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-[14em] lg:h-[24em] "
            href="news"
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                ["background-image" as any]:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH71wcIXi2rjtErIquFlztPXoZEK7YXns3gw&usqp=CAU"
              className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              alt=""
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-xl  lg:text-3xl font-semibold text-gray-100 leading-tight">
                Pellentesque a consectetur velit, ac molestie ipsum. Donec
                sodales, massa et auctor.
              </h2>
              <div className="flex mt-3">
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="w-full md:w-1/3 relative rounded  h-[14em] lg:h-[24em] "
            href="news"
          >
            <div
              className="absolute left-0 top-0 w-full h-full z-10"
              style={{
                ["background-image" as any]:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQdAW5NZJYumPzuko_vFu_5gObIiYZDSzZw&usqp=CAU"
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
                alt=""
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <h2 className="text-xl md:text-sm lg:text-2xl  font-semibold text-gray-100 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div className="flex mt-3">
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      {" "}
                      Chrishell Staus{" "}
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {" "}
                      15 Aug{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="block sm:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10 ">
          {/* <!-- post cards --> */}
          <div className="w-full  lg:w-2/3">
            <a
              className="block rounded w-full lg:flex mb-10"
              href="./blog-single-1.html"
            >
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  ["background-image" as any]:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi6JWYdxOxusw0CB9sYcqJ6uM5wlb_OEmZg&usqp=CAU')",
                }}
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-xl lg:text-2xl mb-2">
                    Aliquam venenatis nisl id purus.
                  </div>
                  <p className="text-gray-700 text-base">
                    Duis euismod est quis lacus elementum, eu laoreet dolor
                    consectetur. Pellentesque sed neque vel tellus lacinia
                    elementum. Proin consequat ullamcorper eleifend.
                  </p>
                </div>
                <div className="flex mt-3">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- right sidebar --> */}
          <div className="w-full sm:w-3/5 lg:w-1/3 pl-3  ">
            {/* <!-- topics --> */}
            <div className="py-8 shadow px-3">
              <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                Top Headlines
              </h5>
              <ul>
                <li className="px-1 py-2 border-b border-t border-white hover:border-gray-200 text-sm lg:text-base transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                    Emery appointed as new Aston Villa manager
                  </a>
                </li>
                <li className="px-1 py-2 border-b border-t border-white hover:border-gray-200 text-sm lg:text-base  transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                    Pep jokes Haaland must lay off carbs during WC
                  </a>
                </li>
                <li className="px-1 py-2 border-b border-t border-white hover:border-gray-200 text-sm lg:text-base transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                    Man Utd legend Carrick named new 'Boro boss
                  </a>
                </li>
                <li className="px-1 py-2 border-b border-t border-white hover:border-gray-200 text-sm lg:text-base transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                    Ukraine's top club want Iran out of World Cup
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- divider --> */}
            <div className="border border-dotted"></div>
          </div>
        </div>
      </main>

      {/* <!-- recent posts --> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto sm:px-10 lg:px-20"
      >
        {/* <!-- recent posts --> */}
        <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-3xl">Latest news</h2>
          <button
            onClick={goToNews}
            className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
          >
            View all
          </button>
        </div>
        <div className="block space-x-0 flex flex-col md:flex-row lg:space-x-6">
          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYCFWlY5LgkkD2QAkQ6RIXHuYDJpu5RTXFg&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p className="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStohCvtIt7EAC57otkuzuh2kvFNkEuiUa-1g&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p className="text-gray-700 mt-2 ">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbPzQlLjiwL1j51gAhRYFr3BGkrALrqVF-Q&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p className="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>
        </div>
        {/* <!-- end recent posts --> */}
      </motion.div>

      {/* video */}
      <div className="py-5 flex  items-center justify-center">
        <div className="grid grid-cols-12 gap-6 lg:gap-5 gap-y-4 w-full px-12 lg:max-w-7xl">
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <div className="w-full flex flex-col">
              <div className="relative">
                <iframe
                  className="w-full aspect-video ... rounded-lg h-auto"
                  src="https://static.vecteezy.com/system/resources/previews/004/213/949/mp4/sport-stadium-background-flashing-lights-glowing-stadium-lights-free-video.mp4"
                ></iframe>

                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  1:15
                </p>
              </div>

              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <a href="#">
                    <p className="text-indigo-500 text-sm font-semibold">
                      Learn CSS Box Model in 8 Minutes
                    </p>
                  </a>

                  <p className="text-gray-400 text-xs mt-1">3 years ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <div className="w-full flex flex-col">
              <div className="relative">
                <iframe
                  className="w-full aspect-video ... rounded-lg h-auto"
                  src="https://static.vecteezy.com/system/resources/previews/011/440/388/mp4/aerial-view-of-amateur-football-field-amateur-football-match-free-video.mp4"
                ></iframe>

                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  1:15
                </p>
              </div>

              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <a href="#">
                    <p className="text-indigo-500 text-sm font-semibold">
                      Learn CSS Box Model in 8 Minutes
                    </p>
                  </a>

                  <p className="text-gray-400 text-xs mt-1">3 years ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <div className="w-full flex flex-col">
              <div className="relative ">
                <iframe
                  className="w-full aspect-video ... rounded-lg h-auto "
                  src="https://static.vecteezy.com/system/resources/previews/004/213/949/mp4/sport-stadium-background-flashing-lights-glowing-stadium-lights-free-video.mp4"
                ></iframe>

                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  1:15
                </p>
              </div>

              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <a href="#">
                    <p className="text-indigo-500 text-sm font-semibold">
                      Learn CSS Box Model in 8 Minutes
                    </p>
                  </a>

                  <p className="text-gray-400 text-xs mt-1">3 years ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <div className="w-full flex flex-col">
              <div className="relative">
                <iframe
                  className="w-full aspect-video ... rounded-lg h-auto"
                  src="https://static.vecteezy.com/system/resources/previews/007/423/936/mp4/soccer-game-football-behind-the-fence-video.mp4"
                ></iframe>

                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  1:15
                </p>
              </div>

              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <a href="#">
                    <p className="text-indigo-500 text-sm font-semibold">
                      Learn CSS Box Model in 8 Minutes
                    </p>
                  </a>

                  <p className="text-gray-400 text-xs mt-1">3 years ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get app */}
      <div className="container mx-auto px-2 lg:px-12 ">
        <div className="rounded-lg bg-[#6E4BEC]/60 text-white p-4 lg:p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          {/* <!-- LEFT PART --> */}
          <div className="flex flex-col lg:ml-10 max-w-sm lg:max-w-xl z-10">
            <div className="hero-text  pt-5">
              <h4 className="lg:text-5xl text-center md:text-left font-bold text-white md:pb-2">
                Don't listen to what they say, Go See
              </h4>

              <p className="text-center md:text-left text-white opacity-70 mb-3 md:pb-6">
                Your ultimate travel companion. Carries all the information you
                need while travelling
              </p>

              <div className="get-app flex space-x-5 justify-center md:justify-start">
                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="logo">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="419.955"
                      height="512"
                      viewBox="0 0 419.955 512"
                    >
                      <g transform="translate(-46.022)">
                        <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                        <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className=" text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download on the
                    </p>
                    <p className=" text-xs font-semibold text-gray-900">
                      Apple Store
                    </p>
                  </div>
                </button>
                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="image">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="436.057"
                      height="469.847"
                      viewBox="0 0 436.057 469.847"
                    >
                      <g transform="translate(-16.896)">
                        <path
                          d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                          fill="#2196f3"
                        />
                        <path
                          d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                          fill="#4caf50"
                        />
                        <path
                          d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                          fill="#ffc107"
                        />
                        <path
                          d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                          fill="#f44336"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className="text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download it from
                    </p>
                    <p className="text-xs font-semibold text-gray-900">
                      Google play
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT PART --> */}
          <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10 animate-fade-in-down">
            <div className="hero-image ">
              <svg
                width="475"
                height="289"
                viewBox="0 0 475 289"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-72 lg:w-full"
              >
                <path
                  d="M54.3287 76.523C54.3287 76.523 54.3287 76.403 54.3287 76.183C54.3287 75.963 54.3287 75.6297 54.3287 75.2031C54.3287 74.3431 54.3287 73.0831 54.3287 71.4566C54.3287 68.1967 54.3287 63.4569 54.3287 57.6372C54.3287 45.9644 54.3287 29.7718 54.3745 11.6993L54.2697 11.7992H58.4333L58.3286 11.6993C58.3613 41.4312 58.3875 66.6968 58.4006 75.983L55.291 76.403L54.512 76.5163L54.2436 76.5563H54.4989L55.2779 76.463L58.4071 76.0763V76.043C58.4071 66.7568 58.4071 41.4912 58.4726 11.7592V11.6526H54.2305V11.7592C54.2305 29.8651 54.2305 46.0844 54.2763 57.7572C54.2763 63.5836 54.2763 68.29 54.2763 71.5432C54.2763 73.1565 54.2763 74.4098 54.2763 75.2697C54.2763 75.6897 54.2763 76.0097 54.2763 76.2297C54.2763 76.4497 54.3287 76.523 54.3287 76.523Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M31.3639 76.3163C31.3639 76.3163 31.3639 76.1963 31.3639 75.9763C31.3639 75.7564 31.3639 75.4297 31.3639 75.0031C31.3639 74.1431 31.3639 72.8832 31.3639 71.2632C31.3639 68.0167 31.3639 63.3169 31.3967 57.4905C31.3967 45.851 31.3967 29.7051 31.4359 11.6793L31.3377 11.7793H35.3638L35.2656 11.6793C35.2656 41.6779 35.318 67.1767 35.3311 76.343V76.303H32.3132H31.5603H32.2935H35.3311V76.2697C35.3311 67.1301 35.3704 41.6046 35.4031 11.6059V11.4993H31.2461V11.6059C31.2461 29.6651 31.2461 45.831 31.2919 57.4972C31.2919 63.3103 31.2919 67.9967 31.2919 71.2432C31.2919 72.8565 31.2919 74.1031 31.2919 74.9564C31.2919 75.3764 31.2919 75.6964 31.2919 75.9163C31.2919 76.1363 31.3639 76.3163 31.3639 76.3163Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.7188 37.458C20.7188 37.5113 31.6579 37.558 45.1568 37.558C58.6556 37.558 69.5948 37.5113 69.5948 37.458C69.5948 37.4047 58.6556 37.3513 45.1568 37.3513C31.6579 37.3513 20.7188 37.398 20.7188 37.458Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.7188 29.6784C20.7188 29.7384 31.6579 29.785 45.1568 29.785C58.6556 29.785 69.5948 29.7384 69.5948 29.6784C69.5948 29.6184 58.6556 29.5784 45.1568 29.5784C31.6579 29.5784 20.7188 29.625 20.7188 29.6784Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.7188 21.9054C20.7188 21.9654 31.6579 22.0121 45.1568 22.0121C58.6556 22.0121 69.5948 21.9654 69.5948 21.9054C69.5948 21.8454 58.6556 21.8054 45.1568 21.8054C31.6579 21.8054 20.7188 21.8588 20.7188 21.9054Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.7188 14.1325C20.7188 14.1925 31.6579 14.2391 45.1568 14.2391C58.6556 14.2391 69.5948 14.1925 69.5948 14.1325C69.5948 14.0725 58.6556 14.0325 45.1568 14.0325C31.6579 14.0325 20.7188 14.0791 20.7188 14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M65.8906 37.858C65.8906 38.4988 66.0772 39.1252 66.4268 39.658C66.7764 40.1908 67.2733 40.606 67.8547 40.8513C68.436 41.0965 69.0758 41.1606 69.6929 41.0356C70.3101 40.9106 70.877 40.602 71.3219 40.1489C71.7669 39.6958 72.0699 39.1185 72.1927 38.4901C72.3154 37.8616 72.2524 37.2102 72.0116 36.6182C71.7708 36.0262 71.363 35.5202 70.8398 35.1642C70.3166 34.8082 69.7015 34.6182 69.0722 34.6182C68.2289 34.6199 67.4207 34.9618 66.8244 35.569C66.2281 36.1763 65.8924 36.9993 65.8906 37.858Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M65.7012 37.8581C65.7012 37.1774 65.8995 36.5121 66.2709 35.9463C66.6424 35.3805 67.1704 34.9396 67.788 34.6794C68.4056 34.4193 69.0851 34.3515 69.7406 34.4848C70.396 34.6181 70.9979 34.9463 71.4701 35.4281C71.9422 35.9098 72.2634 36.5234 72.393 37.1911C72.5226 37.8588 72.4548 38.5506 72.1981 39.1791C71.9415 39.8075 71.5075 40.3443 70.9511 40.7214C70.3947 41.0986 69.741 41.2992 69.0726 41.2979C68.1779 41.2961 67.3203 40.9329 66.6882 40.288C66.0562 39.6431 65.7012 38.7692 65.7012 37.8581V37.8581ZM66.0874 37.8581C66.0861 38.4612 66.2606 39.0511 66.5889 39.5531C66.9171 40.0551 67.3843 40.4467 67.9312 40.6781C68.4782 40.9095 69.0803 40.9704 69.6612 40.853C70.2422 40.7357 70.7758 40.4454 71.1946 40.0189C71.6134 39.5925 71.8985 39.049 72.0137 38.4574C72.129 37.8658 72.0692 37.2527 71.8419 36.6958C71.6147 36.1388 71.2302 35.6631 70.7372 35.3288C70.2442 34.9946 69.6649 34.8169 69.0726 34.8182C68.2814 34.82 67.5231 35.1408 66.9637 35.7105C66.4042 36.2802 66.0891 37.0524 66.0874 37.8581V37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M60.9941 41.1111C62.7512 41.1111 64.1757 39.6605 64.1757 37.8712C64.1757 36.0819 62.7512 34.6313 60.9941 34.6313C59.2369 34.6313 57.8125 36.0819 57.8125 37.8712C57.8125 39.6605 59.2369 41.1111 60.9941 41.1111Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M57.6152 37.8581C57.6152 37.1777 57.8134 36.5127 58.1845 35.947C58.5557 35.3813 59.0833 34.9404 59.7005 34.6801C60.3178 34.4197 60.997 34.3516 61.6522 34.4843C62.3075 34.617 62.9094 34.9446 63.3818 35.4257C63.8542 35.9068 64.176 36.5197 64.3063 37.187C64.4366 37.8542 64.3697 38.5459 64.1141 39.1744C63.8584 39.803 63.4254 40.3402 62.8699 40.7182C62.3144 41.0962 61.6613 41.2979 60.9932 41.2979C60.0979 41.2961 59.2397 40.9332 58.6065 40.2885C57.9734 39.6437 57.617 38.7698 57.6152 37.8581V37.8581ZM58.0015 37.8581C58.0002 38.4609 58.1745 39.0506 58.5025 39.5524C58.8304 40.0543 59.2972 40.4458 59.8438 40.6774C60.3903 40.909 60.9921 40.9703 61.5729 40.8535C62.1536 40.7367 62.6873 40.4471 63.1064 40.0213C63.5254 39.5955 63.811 39.0527 63.927 38.4615C64.043 37.8704 63.9841 37.2575 63.7579 36.7004C63.5316 36.1433 63.1482 35.6671 62.656 35.3321C62.1639 34.997 61.5852 34.8182 60.9932 34.8182C60.2009 34.8182 59.4409 35.1383 58.8801 35.7081C58.3192 36.278 58.0032 37.0512 58.0015 37.8581V37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M49.7266 37.858C49.7266 38.4988 49.9132 39.1252 50.2628 39.658C50.6124 40.1908 51.1092 40.606 51.6906 40.8513C52.272 41.0965 52.9117 41.1606 53.5289 41.0356C54.146 40.9106 54.7129 40.602 55.1579 40.1489C55.6028 39.6958 55.9058 39.1185 56.0286 38.4901C56.1514 37.8616 56.0884 37.2102 55.8476 36.6182C55.6068 36.0262 55.199 35.5202 54.6758 35.1642C54.1525 34.8082 53.5374 34.6182 52.9082 34.6182C52.0643 34.6182 51.2551 34.9595 50.6584 35.5671C50.0618 36.1747 49.7266 36.9988 49.7266 37.858Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M49.5312 37.8581C49.5312 37.1777 49.7294 36.5127 50.1005 35.947C50.4717 35.3813 50.9993 34.9404 51.6165 34.6801C52.2338 34.4197 52.913 34.3516 53.5682 34.4843C54.2235 34.617 54.8254 34.9446 55.2978 35.4257C55.7703 35.9068 56.092 36.5197 56.2223 37.187C56.3527 37.8542 56.2858 38.5459 56.0301 39.1744C55.7744 39.803 55.3415 40.3402 54.7859 40.7182C54.2304 41.0962 53.5773 41.2979 52.9092 41.2979C52.0139 41.2961 51.1557 40.9332 50.5226 40.2885C49.8894 39.6437 49.533 38.7698 49.5312 37.8581ZM49.9175 37.8581C49.9162 38.4609 50.0906 39.0506 50.4185 39.5524C50.7465 40.0543 51.2132 40.4458 51.7598 40.6774C52.3064 40.909 52.9081 40.9703 53.4889 40.8535C54.0696 40.7367 54.6033 40.4471 55.0224 40.0213C55.4415 39.5955 55.727 39.0527 55.843 38.4615C55.959 37.8704 55.9001 37.2575 55.6739 36.7004C55.4476 36.1433 55.0642 35.6671 54.572 35.3321C54.0799 34.997 53.5012 34.8182 52.9092 34.8182C52.1169 34.8182 51.3569 35.1383 50.7961 35.7081C50.2352 36.278 49.9192 37.0512 49.9175 37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M44.8242 41.1111C46.5813 41.1111 48.0058 39.6605 48.0058 37.8712C48.0058 36.0819 46.5813 34.6313 44.8242 34.6313C43.067 34.6313 41.6426 36.0819 41.6426 37.8712C41.6426 39.6605 43.067 41.1111 44.8242 41.1111Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M41.4453 37.8581C41.4453 37.1777 41.6434 36.5127 42.0146 35.947C42.3858 35.3813 42.9134 34.9404 43.5306 34.6801C44.1478 34.4197 44.827 34.3516 45.4823 34.4843C46.1376 34.617 46.7395 34.9446 47.2119 35.4257C47.6843 35.9068 48.006 36.5197 48.1364 37.187C48.2667 37.8542 48.1998 38.5459 47.9442 39.1744C47.6885 39.803 47.2555 40.3402 46.7 40.7182C46.1445 41.0962 45.4914 41.2979 44.8233 41.2979C43.9279 41.2961 43.0697 40.9332 42.4366 40.2885C41.8035 39.6437 41.447 38.7698 41.4453 37.8581ZM41.8316 37.8581C41.8303 38.4609 42.0046 39.0506 42.3326 39.5524C42.6605 40.0543 43.1273 40.4458 43.6739 40.6774C44.2204 40.909 44.8222 40.9703 45.4029 40.8535C45.9837 40.7367 46.5174 40.4471 46.9365 40.0213C47.3555 39.5955 47.6411 39.0527 47.7571 38.4615C47.873 37.8704 47.8142 37.2575 47.5879 36.7004C47.3617 36.1433 46.9782 35.6671 46.4861 35.3321C45.994 34.997 45.4153 34.8182 44.8233 34.8182C44.031 34.8182 43.271 35.1383 42.7101 35.7081C42.1493 36.278 41.8333 37.0512 41.8316 37.8581V37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M36.7382 41.1111C38.4954 41.1111 39.9198 39.6605 39.9198 37.8712C39.9198 36.0819 38.4954 34.6313 36.7382 34.6313C34.9811 34.6313 33.5566 36.0819 33.5566 37.8712C33.5566 39.6605 34.9811 41.1111 36.7382 41.1111Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M33.3613 37.8581C33.3613 37.1777 33.5594 36.5127 33.9306 35.947C34.3018 35.3813 34.8294 34.9404 35.4466 34.6801C36.0639 34.4197 36.7431 34.3516 37.3983 34.4843C38.0536 34.617 38.6555 34.9446 39.1279 35.4257C39.6003 35.9068 39.9221 36.5197 40.0524 37.187C40.1827 37.8542 40.1158 38.5459 39.8602 39.1744C39.6045 39.803 39.1715 40.3402 38.616 40.7182C38.0605 41.0962 37.4074 41.2979 36.7393 41.2979C35.8439 41.2961 34.9857 40.9332 34.3526 40.2885C33.7195 39.6437 33.3631 38.7698 33.3613 37.8581V37.8581ZM33.7541 37.8581C33.7541 38.4593 33.9292 39.047 34.2572 39.5469C34.5852 40.0468 35.0515 40.4364 35.5969 40.6665C36.1424 40.8966 36.7426 40.9568 37.3217 40.8395C37.9008 40.7222 38.4327 40.4327 38.8502 40.0076C39.2677 39.5824 39.552 39.0408 39.6672 38.4511C39.7823 37.8614 39.7232 37.2502 39.4973 36.6948C39.2713 36.1393 38.8887 35.6645 38.3978 35.3305C37.9069 34.9965 37.3297 34.8182 36.7393 34.8182C36.3473 34.8182 35.9591 34.8968 35.5969 35.0496C35.2348 35.2024 34.9057 35.4263 34.6285 35.7086C34.3513 35.9908 34.1314 36.3259 33.9814 36.6948C33.8313 37.0636 33.7541 37.4589 33.7541 37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28.6542 41.1111C30.4114 41.1111 31.8358 39.6605 31.8358 37.8712C31.8358 36.0819 30.4114 34.6313 28.6542 34.6313C26.8971 34.6313 25.4727 36.0819 25.4727 37.8712C25.4727 39.6605 26.8971 41.1111 28.6542 41.1111Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M25.2754 37.8581C25.278 37.1772 25.479 36.5124 25.8529 35.9479C26.2268 35.3834 26.7569 34.9446 27.3759 34.6871C27.9949 34.4296 28.675 34.365 29.3301 34.5014C29.9852 34.6378 30.5858 34.9691 31.0558 35.4534C31.5259 35.9376 31.8442 36.5531 31.9705 37.2217C32.0968 37.8903 32.0254 38.5821 31.7654 39.2094C31.5053 39.8367 31.0683 40.3713 30.5096 40.7454C29.951 41.1196 29.2958 41.3165 28.6272 41.3112C27.7341 41.3024 26.8806 40.9345 26.2528 40.2877C25.625 39.6409 25.2736 38.7675 25.2754 37.8581ZM25.6682 37.8581C25.6656 38.461 25.8392 39.0511 26.1668 39.5533C26.4944 40.0555 26.9612 40.4472 27.508 40.6785C28.0548 40.9098 28.6568 40.9703 29.2374 40.8524C29.818 40.7344 30.3511 40.4433 30.7689 40.016C31.1866 39.5888 31.4701 39.0446 31.5834 38.4528C31.6967 37.8611 31.6346 37.2483 31.405 36.6926C31.1754 36.1368 30.7887 35.6631 30.2941 35.3317C29.7995 35.0004 29.2193 34.8262 28.6272 34.8315C27.8423 34.8385 27.0917 35.1601 26.5378 35.7265C25.984 36.293 25.6716 37.0587 25.6682 37.8581V37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.5683 41.1111C22.3255 41.1111 23.7499 39.6605 23.7499 37.8712C23.7499 36.0819 22.3255 34.6313 20.5683 34.6313C18.8112 34.6313 17.3867 36.0819 17.3867 37.8712C17.3867 39.6605 18.8112 41.1111 20.5683 41.1111Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M17.1914 37.8581C17.1914 37.1777 17.3895 36.5127 17.7607 35.947C18.1319 35.3813 18.6594 34.9404 19.2767 34.6801C19.8939 34.4197 20.5731 34.3516 21.2284 34.4843C21.8837 34.617 22.4856 34.9446 22.958 35.4257C23.4304 35.9068 23.7521 36.5197 23.8825 37.187C24.0128 37.8542 23.9459 38.5459 23.6902 39.1744C23.4346 39.803 23.0016 40.3402 22.4461 40.7182C21.8906 41.0962 21.2375 41.2979 20.5694 41.2979C19.674 41.2961 18.8158 40.9332 18.1827 40.2885C17.5496 39.6437 17.1931 38.7698 17.1914 37.8581V37.8581ZM17.5842 37.8581C17.5842 38.4593 17.7593 39.047 18.0873 39.5469C18.4153 40.0468 18.8815 40.4364 19.427 40.6665C19.9725 40.8966 20.5727 40.9568 21.1518 40.8395C21.7309 40.7222 22.2628 40.4327 22.6802 40.0076C23.0977 39.5824 23.382 39.0408 23.4972 38.4511C23.6124 37.8614 23.5533 37.2502 23.3274 36.6948C23.1014 36.1393 22.7188 35.6645 22.2279 35.3305C21.737 34.9965 21.1598 34.8182 20.5694 34.8182C19.7777 34.8182 19.0184 35.1385 18.4585 35.7086C17.8987 36.2786 17.5842 37.0518 17.5842 37.8581V37.8581Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M60.9941 33.1316C62.7512 33.1316 64.1757 31.681 64.1757 29.8917C64.1757 28.1024 62.7512 26.6519 60.9941 26.6519C59.2369 26.6519 57.8125 28.1024 57.8125 29.8917C57.8125 31.681 59.2369 33.1316 60.9941 33.1316Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M57.6152 29.8918C57.6152 29.2114 57.8134 28.5464 58.1845 27.9807C58.5557 27.415 59.0833 26.9741 59.7005 26.7137C60.3178 26.4534 60.997 26.3853 61.6522 26.518C62.3075 26.6507 62.9094 26.9783 63.3818 27.4594C63.8542 27.9405 64.176 28.5534 64.3063 29.2207C64.4366 29.8879 64.3697 30.5796 64.1141 31.2081C63.8584 31.8367 63.4254 32.3739 62.8699 32.7519C62.3144 33.1299 61.6613 33.3316 60.9932 33.3316C60.0979 33.3298 59.2397 32.9669 58.6065 32.3221C57.9734 31.6774 57.617 30.8035 57.6152 29.8918V29.8918ZM58.0015 29.8918C58.0002 30.4946 58.1745 31.0842 58.5025 31.5861C58.8304 32.088 59.2972 32.4795 59.8438 32.7111C60.3903 32.9427 60.9921 33.004 61.5729 32.8872C62.1536 32.7704 62.6873 32.4808 63.1064 32.055C63.5254 31.6292 63.811 31.0864 63.927 30.4952C64.043 29.9041 63.9841 29.2912 63.7579 28.7341C63.5316 28.177 63.1482 27.7008 62.656 27.3658C62.1639 27.0307 61.5852 26.8519 60.9932 26.8519C60.2009 26.8519 59.4409 27.1719 58.8801 27.7418C58.3192 28.3117 58.0032 29.0849 58.0015 29.8918V29.8918Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M49.7266 29.8917C49.7266 30.5325 49.9132 31.1589 50.2628 31.6917C50.6124 32.2245 51.1092 32.6397 51.6906 32.8849C52.272 33.1302 52.9117 33.1943 53.5289 33.0693C54.146 32.9443 54.7129 32.6357 55.1579 32.1826C55.6028 31.7295 55.9058 31.1522 56.0286 30.5238C56.1514 29.8953 56.0884 29.2439 55.8476 28.6519C55.6068 28.0599 55.199 27.5539 54.6758 27.1979C54.1525 26.8419 53.5374 26.6519 52.9082 26.6519C52.0643 26.6519 51.2551 26.9932 50.6584 27.6008C50.0618 28.2084 49.7266 29.0324 49.7266 29.8917V29.8917Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M49.5312 29.8918C49.5312 29.2114 49.7294 28.5464 50.1005 27.9807C50.4717 27.415 50.9993 26.9741 51.6165 26.7137C52.2338 26.4534 52.913 26.3853 53.5682 26.518C54.2235 26.6507 54.8254 26.9783 55.2978 27.4594C55.7703 27.9405 56.092 28.5534 56.2223 29.2207C56.3527 29.8879 56.2858 30.5796 56.0301 31.2081C55.7744 31.8367 55.3415 32.3739 54.7859 32.7519C54.2304 33.1299 53.5773 33.3316 52.9092 33.3316C52.0139 33.3298 51.1557 32.9669 50.5226 32.3221C49.8894 31.6774 49.533 30.8035 49.5312 29.8918ZM49.9175 29.8918C49.9162 30.4946 50.0906 31.0842 50.4185 31.5861C50.7465 32.088 51.2132 32.4795 51.7598 32.7111C52.3064 32.9427 52.9081 33.004 53.4889 32.8872C54.0696 32.7704 54.6033 32.4808 55.0224 32.055C55.4415 31.6292 55.727 31.0864 55.843 30.4952C55.959 29.9041 55.9001 29.2912 55.6739 28.7341C55.4476 28.177 55.0642 27.7008 54.572 27.3658C54.0799 27.0307 53.5012 26.8519 52.9092 26.8519C52.1169 26.8519 51.3569 27.1719 50.7961 27.7418C50.2352 28.3117 49.9192 29.0849 49.9175 29.8918V29.8918Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M44.8242 33.1316C46.5813 33.1316 48.0058 31.681 48.0058 29.8917C48.0058 28.1024 46.5813 26.6519 44.8242 26.6519C43.067 26.6519 41.6426 28.1024 41.6426 29.8917C41.6426 31.681 43.067 33.1316 44.8242 33.1316Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M41.4453 29.8918C41.4453 29.2114 41.6434 28.5464 42.0146 27.9807C42.3858 27.415 42.9134 26.9741 43.5306 26.7137C44.1478 26.4534 44.827 26.3853 45.4823 26.518C46.1376 26.6507 46.7395 26.9783 47.2119 27.4594C47.6843 27.9405 48.006 28.5534 48.1364 29.2207C48.2667 29.8879 48.1998 30.5796 47.9442 31.2081C47.6885 31.8367 47.2555 32.3739 46.7 32.7519C46.1445 33.1299 45.4914 33.3316 44.8233 33.3316C43.9279 33.3298 43.0697 32.9669 42.4366 32.3221C41.8035 31.6774 41.447 30.8035 41.4453 29.8918ZM41.8316 29.8918C41.8303 30.4946 42.0046 31.0842 42.3326 31.5861C42.6605 32.088 43.1273 32.4795 43.6739 32.7111C44.2204 32.9427 44.8222 33.004 45.4029 32.8872C45.9837 32.7704 46.5174 32.4808 46.9365 32.055C47.3555 31.6292 47.6411 31.0864 47.7571 30.4952C47.873 29.9041 47.8142 29.2912 47.5879 28.7341C47.3617 28.177 46.9782 27.7008 46.4861 27.3658C45.994 27.0307 45.4153 26.8519 44.8233 26.8519C44.031 26.8519 43.271 27.1719 42.7101 27.7418C42.1493 28.3117 41.8333 29.0849 41.8316 29.8918V29.8918Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M36.7382 33.1316C38.4954 33.1316 39.9198 31.681 39.9198 29.8917C39.9198 28.1024 38.4954 26.6519 36.7382 26.6519C34.9811 26.6519 33.5566 28.1024 33.5566 29.8917C33.5566 31.681 34.9811 33.1316 36.7382 33.1316Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M33.3613 29.8918C33.3613 29.2114 33.5594 28.5464 33.9306 27.9807C34.3018 27.415 34.8294 26.9741 35.4466 26.7137C36.0639 26.4534 36.7431 26.3853 37.3983 26.518C38.0536 26.6507 38.6555 26.9783 39.1279 27.4594C39.6003 27.9405 39.9221 28.5534 40.0524 29.2207C40.1827 29.8879 40.1158 30.5796 39.8602 31.2081C39.6045 31.8367 39.1715 32.3739 38.616 32.7519C38.0605 33.1299 37.4074 33.3316 36.7393 33.3316C35.8439 33.3298 34.9857 32.9669 34.3526 32.3221C33.7195 31.6774 33.3631 30.8035 33.3613 29.8918V29.8918ZM33.7541 29.8918C33.7541 30.493 33.9292 31.0807 34.2572 31.5806C34.5852 32.0805 35.0515 32.4701 35.5969 32.7002C36.1424 32.9303 36.7426 32.9905 37.3217 32.8732C37.9008 32.7559 38.4327 32.4664 38.8502 32.0413C39.2677 31.6161 39.552 31.0745 39.6672 30.4848C39.7823 29.8951 39.7232 29.2839 39.4973 28.7284C39.2713 28.173 38.8887 27.6982 38.3978 27.3642C37.9069 27.0302 37.3297 26.8519 36.7393 26.8519C36.3473 26.8519 35.9591 26.9305 35.5969 27.0833C35.2348 27.2361 34.9057 27.46 34.6285 27.7422C34.3513 28.0245 34.1314 28.3596 33.9814 28.7284C33.8313 29.0973 33.7541 29.4926 33.7541 29.8918Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28.6542 33.1316C30.4114 33.1316 31.8358 31.681 31.8358 29.8917C31.8358 28.1024 30.4114 26.6519 28.6542 26.6519C26.8971 26.6519 25.4727 28.1024 25.4727 29.8917C25.4727 31.681 26.8971 33.1316 28.6542 33.1316Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M25.2754 29.8916C25.2754 29.2102 25.4742 28.5441 25.8466 27.9778C26.2189 27.4116 26.748 26.9707 27.3668 26.7112C27.9856 26.4516 28.6661 26.3851 29.3221 26.52C29.9781 26.6549 30.5799 26.9852 31.0513 27.4689C31.5226 27.9526 31.8423 28.568 31.9696 29.2371C32.097 29.9061 32.0263 30.5985 31.7667 31.2266C31.507 31.8547 31.0699 32.39 30.511 32.7648C29.952 33.1395 29.2964 33.3368 28.6272 33.3315C27.7364 33.3227 26.8849 32.9567 26.2574 32.3127C25.6299 31.6687 25.2771 30.7988 25.2754 29.8916V29.8916ZM25.6682 29.8916C25.6682 30.494 25.844 31.0828 26.1732 31.5832C26.5023 32.0837 26.9701 32.4733 27.5171 32.7026C28.0641 32.9318 28.6657 32.9905 29.2455 32.871C29.8252 32.7515 30.3571 32.4594 30.7735 32.0315C31.1899 31.6037 31.4722 31.0596 31.5844 30.4682C31.6966 29.8768 31.6337 29.2647 31.4038 28.7097C31.1738 28.1548 30.7871 27.6819 30.2928 27.3511C29.7984 27.0203 29.2187 26.8465 28.6272 26.8518C27.84 26.8588 27.0874 27.1822 26.5332 27.7515C25.9791 28.3208 25.6681 29.09 25.6682 29.8916V29.8916Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.5683 33.1316C22.3255 33.1316 23.7499 31.681 23.7499 29.8917C23.7499 28.1024 22.3255 26.6519 20.5683 26.6519C18.8112 26.6519 17.3867 28.1024 17.3867 29.8917C17.3867 31.681 18.8112 33.1316 20.5683 33.1316Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M17.1914 29.8918C17.1914 29.2114 17.3895 28.5464 17.7607 27.9807C18.1319 27.415 18.6594 26.9741 19.2767 26.7137C19.8939 26.4534 20.5731 26.3853 21.2284 26.518C21.8837 26.6507 22.4856 26.9783 22.958 27.4594C23.4304 27.9405 23.7521 28.5534 23.8825 29.2207C24.0128 29.8879 23.9459 30.5796 23.6902 31.2081C23.4346 31.8367 23.0016 32.3739 22.4461 32.7519C21.8906 33.1299 21.2375 33.3316 20.5694 33.3316C19.674 33.3298 18.8158 32.9669 18.1827 32.3221C17.5496 31.6774 17.1931 30.8035 17.1914 29.8918V29.8918ZM17.5842 29.8918C17.5842 30.493 17.7593 31.0807 18.0873 31.5806C18.4153 32.0805 18.8815 32.4701 19.427 32.7002C19.9725 32.9303 20.5727 32.9905 21.1518 32.8732C21.7309 32.7559 22.2628 32.4664 22.6802 32.0413C23.0977 31.6161 23.382 31.0745 23.4972 30.4848C23.6124 29.8951 23.5533 29.2839 23.3274 28.7284C23.1014 28.173 22.7188 27.6982 22.2279 27.3642C21.737 27.0302 21.1598 26.8519 20.5694 26.8519C19.7777 26.8519 19.0184 27.1722 18.4585 27.7422C17.8987 28.3123 17.5842 29.0855 17.5842 29.8918V29.8918Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M65.8906 29.7984C65.8906 30.4392 66.0772 31.0656 66.4268 31.5984C66.7764 32.1312 67.2733 32.5465 67.8547 32.7917C68.436 33.0369 69.0758 33.1011 69.6929 32.976C70.3101 32.851 70.877 32.5425 71.3219 32.0894C71.7669 31.6363 72.0699 31.059 72.1927 30.4305C72.3154 29.802 72.2524 29.1506 72.0116 28.5586C71.7708 27.9666 71.363 27.4606 70.8398 27.1046C70.3166 26.7486 69.7015 26.5586 69.0722 26.5586C68.2284 26.5586 67.4192 26.8999 66.8225 27.5075C66.2258 28.1151 65.8906 28.9392 65.8906 29.7984Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M65.7012 29.7982C65.7012 29.1176 65.8995 28.4523 66.2709 27.8865C66.6424 27.3206 67.1704 26.8798 67.788 26.6196C68.4056 26.3594 69.0851 26.2917 69.7406 26.425C70.396 26.5583 70.9979 26.8865 71.4701 27.3683C71.9422 27.85 72.2634 28.4636 72.393 29.1313C72.5226 29.799 72.4548 30.4908 72.1981 31.1192C71.9415 31.7477 71.5075 32.2844 70.9511 32.6616C70.3947 33.0388 69.741 33.2394 69.0726 33.2381C68.1779 33.2363 67.3203 32.8731 66.6882 32.2282C66.0562 31.5833 65.7012 30.7094 65.7012 29.7982ZM66.0874 29.7982C66.0861 30.4014 66.2606 30.9913 66.5889 31.4933C66.9171 31.9953 67.3843 32.3868 67.9312 32.6182C68.4782 32.8497 69.0803 32.9106 69.6612 32.7932C70.2422 32.6759 70.7758 32.3856 71.1946 31.9591C71.6134 31.5327 71.8985 30.9892 72.0137 30.3976C72.129 29.806 72.0692 29.1929 71.8419 28.636C71.6147 28.079 71.2302 27.6033 70.7372 27.269C70.2442 26.9348 69.6649 26.7571 69.0726 26.7584C68.2814 26.7601 67.5231 27.081 66.9637 27.6507C66.4042 28.2204 66.0891 28.9926 66.0874 29.7982V29.7982Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M60.9941 25.2519C62.7512 25.2519 64.1757 23.8014 64.1757 22.0121C64.1757 20.2227 62.7512 18.7722 60.9941 18.7722C59.2369 18.7722 57.8125 20.2227 57.8125 22.0121C57.8125 23.8014 59.2369 25.2519 60.9941 25.2519Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M57.6152 22.0121C57.6152 21.3318 57.8134 20.6667 58.1845 20.101C58.5557 19.5354 59.0833 19.0945 59.7005 18.8341C60.3178 18.5738 60.997 18.5056 61.6522 18.6384C62.3075 18.7711 62.9094 19.0987 63.3818 19.5798C63.8542 20.0608 64.176 20.6738 64.3063 21.341C64.4366 22.0083 64.3697 22.6999 64.1141 23.3285C63.8584 23.957 63.4254 24.4943 62.8699 24.8722C62.3144 25.2502 61.6613 25.452 60.9932 25.452C60.5496 25.452 60.1104 25.363 59.7005 25.1901C59.2907 25.0172 58.9183 24.7639 58.6046 24.4444C58.2909 24.125 58.0421 23.7458 57.8724 23.3285C57.7026 22.9111 57.6152 22.4638 57.6152 22.0121V22.0121ZM58.0015 22.0121C58.0002 22.6149 58.1745 23.2046 58.5025 23.7065C58.8304 24.2084 59.2972 24.5999 59.8438 24.8315C60.3903 25.0631 60.9921 25.1244 61.5729 25.0076C62.1536 24.8908 62.6873 24.6012 63.1064 24.1754C63.5254 23.7496 63.811 23.2067 63.927 22.6156C64.043 22.0244 63.9841 21.4115 63.7579 20.8545C63.5316 20.2974 63.1482 19.8212 62.656 19.4861C62.1639 19.1511 61.5852 18.9722 60.9932 18.9722C60.2009 18.9722 59.4409 19.2923 58.8801 19.8622C58.3192 20.4321 58.0032 21.2053 58.0015 22.0121Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M49.7266 22.0121C49.7266 22.6529 49.9132 23.2792 50.2628 23.812C50.6124 24.3448 51.1092 24.7601 51.6906 25.0053C52.272 25.2505 52.9117 25.3147 53.5289 25.1897C54.146 25.0647 54.7129 24.7561 55.1579 24.303C55.6028 23.8499 55.9058 23.2726 56.0286 22.6441C56.1514 22.0157 56.0884 21.3642 55.8476 20.7722C55.6068 20.1802 55.199 19.6742 54.6758 19.3182C54.1525 18.9622 53.5374 18.7722 52.9082 18.7722C52.0643 18.7722 51.2551 19.1136 50.6584 19.7211C50.0618 20.3287 49.7266 21.1528 49.7266 22.0121Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M49.5312 22.0121C49.5312 21.3318 49.7294 20.6667 50.1005 20.101C50.4717 19.5354 50.9993 19.0945 51.6165 18.8341C52.2338 18.5738 52.913 18.5056 53.5682 18.6384C54.2235 18.7711 54.8254 19.0987 55.2978 19.5798C55.7703 20.0608 56.092 20.6738 56.2223 21.341C56.3527 22.0083 56.2858 22.6999 56.0301 23.3285C55.7744 23.957 55.3415 24.4943 54.7859 24.8722C54.2304 25.2502 53.5773 25.452 52.9092 25.452C52.4656 25.452 52.0264 25.363 51.6165 25.1901C51.2067 25.0172 50.8343 24.7639 50.5206 24.4444C50.207 24.125 49.9581 23.7458 49.7884 23.3285C49.6186 22.9111 49.5312 22.4638 49.5312 22.0121V22.0121ZM49.9175 22.0121C49.9162 22.6149 50.0906 23.2046 50.4185 23.7065C50.7465 24.2084 51.2132 24.5999 51.7598 24.8315C52.3064 25.0631 52.9081 25.1244 53.4889 25.0076C54.0696 24.8908 54.6033 24.6012 55.0224 24.1754C55.4415 23.7496 55.727 23.2067 55.843 22.6156C55.959 22.0244 55.9001 21.4115 55.6739 20.8545C55.4476 20.2974 55.0642 19.8212 54.572 19.4861C54.0799 19.1511 53.5012 18.9722 52.9092 18.9722C52.1169 18.9722 51.3569 19.2923 50.7961 19.8622C50.2352 20.4321 49.9192 21.2053 49.9175 22.0121V22.0121Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M44.8242 25.2519C46.5813 25.2519 48.0058 23.8014 48.0058 22.0121C48.0058 20.2227 46.5813 18.7722 44.8242 18.7722C43.067 18.7722 41.6426 20.2227 41.6426 22.0121C41.6426 23.8014 43.067 25.2519 44.8242 25.2519Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M41.4453 22.0121C41.4453 21.3318 41.6434 20.6667 42.0146 20.101C42.3858 19.5354 42.9134 19.0945 43.5306 18.8341C44.1478 18.5738 44.827 18.5056 45.4823 18.6384C46.1376 18.7711 46.7395 19.0987 47.2119 19.5798C47.6843 20.0608 48.006 20.6738 48.1364 21.341C48.2667 22.0083 48.1998 22.6999 47.9442 23.3285C47.6885 23.957 47.2555 24.4943 46.7 24.8722C46.1445 25.2502 45.4914 25.452 44.8233 25.452C44.3797 25.452 43.9404 25.363 43.5306 25.1901C43.1208 25.0172 42.7484 24.7639 42.4347 24.4444C42.121 24.125 41.8722 23.7458 41.7024 23.3285C41.5327 22.9111 41.4453 22.4638 41.4453 22.0121ZM41.8316 22.0121C41.8303 22.6149 42.0046 23.2046 42.3326 23.7065C42.6605 24.2084 43.1273 24.5999 43.6739 24.8315C44.2204 25.0631 44.8222 25.1244 45.4029 25.0076C45.9837 24.8908 46.5174 24.6012 46.9365 24.1754C47.3555 23.7496 47.6411 23.2067 47.7571 22.6156C47.873 22.0244 47.8142 21.4115 47.5879 20.8545C47.3617 20.2974 46.9782 19.8212 46.4861 19.4861C45.994 19.1511 45.4153 18.9722 44.8233 18.9722C44.031 18.9722 43.271 19.2923 42.7101 19.8622C42.1493 20.4321 41.8333 21.2053 41.8316 22.0121V22.0121Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M36.7382 25.2519C38.4954 25.2519 39.9198 23.8014 39.9198 22.0121C39.9198 20.2227 38.4954 18.7722 36.7382 18.7722C34.9811 18.7722 33.5566 20.2227 33.5566 22.0121C33.5566 23.8014 34.9811 25.2519 36.7382 25.2519Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M33.3613 22.0121C33.3613 21.3318 33.5594 20.6667 33.9306 20.101C34.3018 19.5354 34.8294 19.0945 35.4466 18.8341C36.0639 18.5738 36.7431 18.5056 37.3983 18.6384C38.0536 18.7711 38.6555 19.0987 39.1279 19.5798C39.6003 20.0608 39.9221 20.6738 40.0524 21.341C40.1827 22.0083 40.1158 22.6999 39.8602 23.3285C39.6045 23.957 39.1715 24.4943 38.616 24.8722C38.0605 25.2502 37.4074 25.452 36.7393 25.452C36.2957 25.452 35.8565 25.363 35.4466 25.1901C35.0368 25.0172 34.6644 24.7639 34.3507 24.4444C34.037 24.125 33.7882 23.7458 33.6185 23.3285C33.4487 22.9111 33.3613 22.4638 33.3613 22.0121ZM33.7541 22.0121C33.7541 22.6133 33.9292 23.2011 34.2572 23.701C34.5852 24.2009 35.0515 24.5905 35.5969 24.8206C36.1424 25.0507 36.7426 25.1109 37.3217 24.9936C37.9008 24.8763 38.4327 24.5868 38.8502 24.1616C39.2677 23.7365 39.552 23.1948 39.6672 22.6052C39.7823 22.0155 39.7232 21.4043 39.4973 20.8488C39.2713 20.2933 38.8887 19.8186 38.3978 19.4846C37.9069 19.1505 37.3297 18.9722 36.7393 18.9722C36.3473 18.9722 35.9591 19.0509 35.5969 19.2036C35.2348 19.3564 34.9057 19.5803 34.6285 19.8626C34.3513 20.1449 34.1314 20.48 33.9814 20.8488C33.8313 21.2176 33.7541 21.6129 33.7541 22.0121Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28.6542 25.2519C30.4114 25.2519 31.8358 23.8014 31.8358 22.0121C31.8358 20.2227 30.4114 18.7722 28.6542 18.7722C26.8971 18.7722 25.4727 20.2227 25.4727 22.0121C25.4727 23.8014 26.8971 25.2519 28.6542 25.2519Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M25.2754 22.012C25.2754 21.3305 25.4742 20.6644 25.8466 20.0982C26.2189 19.5319 26.748 19.0911 27.3668 18.8315C27.9856 18.572 28.6661 18.5054 29.3221 18.6403C29.9781 18.7752 30.5799 19.1055 31.0513 19.5893C31.5226 20.073 31.8423 20.6884 31.9696 21.3574C32.097 22.0264 32.0263 22.7189 31.7667 23.347C31.507 23.975 31.0699 24.5104 30.511 24.8851C29.952 25.2599 29.2964 25.4571 28.6272 25.4519C27.7364 25.4431 26.8849 25.077 26.2574 24.4331C25.6299 23.7891 25.2771 22.9192 25.2754 22.012V22.012ZM25.6682 22.012C25.6682 22.6144 25.844 23.2031 26.1732 23.7036C26.5023 24.2041 26.9701 24.5937 27.5171 24.8229C28.0641 25.0522 28.6657 25.1108 29.2455 24.9914C29.8252 24.8719 30.3571 24.5797 30.7735 24.1519C31.1899 23.7241 31.4722 23.18 31.5844 22.5885C31.6966 21.9971 31.6337 21.3851 31.4038 20.8301C31.1738 20.2751 30.7871 19.8022 30.2928 19.4714C29.7984 19.1406 29.2187 18.9669 28.6272 18.9721C27.84 18.9792 27.0874 19.3025 26.5332 19.8719C25.9791 20.4412 25.6681 21.2104 25.6682 22.012V22.012Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.5683 25.2519C22.3255 25.2519 23.7499 23.8014 23.7499 22.0121C23.7499 20.2227 22.3255 18.7722 20.5683 18.7722C18.8112 18.7722 17.3867 20.2227 17.3867 22.0121C17.3867 23.8014 18.8112 25.2519 20.5683 25.2519Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M17.1914 22.0121C17.1914 21.3318 17.3895 20.6667 17.7607 20.101C18.1319 19.5354 18.6594 19.0945 19.2767 18.8341C19.8939 18.5738 20.5731 18.5056 21.2284 18.6384C21.8837 18.7711 22.4856 19.0987 22.958 19.5798C23.4304 20.0608 23.7521 20.6738 23.8825 21.341C24.0128 22.0083 23.9459 22.6999 23.6902 23.3285C23.4346 23.957 23.0016 24.4943 22.4461 24.8722C21.8906 25.2502 21.2375 25.452 20.5694 25.452C19.674 25.4502 18.8158 25.0872 18.1827 24.4425C17.5496 23.7978 17.1931 22.9239 17.1914 22.0121V22.0121ZM17.5842 22.0121C17.5842 22.6133 17.7593 23.2011 18.0873 23.701C18.4153 24.2009 18.8815 24.5905 19.427 24.8206C19.9725 25.0507 20.5727 25.1109 21.1518 24.9936C21.7309 24.8763 22.2628 24.5868 22.6802 24.1616C23.0977 23.7365 23.382 23.1948 23.4972 22.6052C23.6124 22.0155 23.5533 21.4043 23.3274 20.8488C23.1014 20.2933 22.7188 19.8186 22.2279 19.4846C21.737 19.1505 21.1598 18.9722 20.5694 18.9722C20.1774 18.9722 19.7892 19.0509 19.427 19.2036C19.0648 19.3564 18.7357 19.5803 18.4585 19.8626C18.1813 20.1449 17.9615 20.48 17.8114 20.8488C17.6614 21.2176 17.5842 21.6129 17.5842 22.0121V22.0121Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M65.8906 21.9186C65.8906 22.5593 66.0772 23.1857 66.4268 23.7185C66.7764 24.2513 67.2733 24.6666 67.8547 24.9118C68.436 25.157 69.0758 25.2212 69.6929 25.0962C70.3101 24.9712 70.877 24.6626 71.3219 24.2095C71.7669 23.7564 72.0699 23.1791 72.1927 22.5506C72.3154 21.9222 72.2524 21.2707 72.0116 20.6787C71.7708 20.0867 71.363 19.5807 70.8398 19.2247C70.3166 18.8687 69.7015 18.6787 69.0722 18.6787C68.2284 18.6787 67.4192 19.0201 66.8225 19.6276C66.2258 20.2352 65.8906 21.0593 65.8906 21.9186Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M65.7012 21.9186C65.7012 21.238 65.8995 20.5727 66.2709 20.0068C66.6424 19.441 67.1704 19.0001 67.788 18.74C68.4056 18.4798 69.0851 18.4121 69.7406 18.5453C70.396 18.6786 70.9979 19.0069 71.4701 19.4886C71.9422 19.9704 72.2634 20.5839 72.393 21.2516C72.5226 21.9193 72.4548 22.6112 72.1981 23.2396C71.9415 23.868 71.5075 24.4048 70.9511 24.782C70.3947 25.1591 69.741 25.3598 69.0726 25.3584C68.1779 25.3567 67.3203 24.9935 66.6882 24.3486C66.0562 23.7037 65.7012 22.8297 65.7012 21.9186ZM66.0874 21.9186C66.0861 22.5217 66.2606 23.1116 66.5889 23.6137C66.9171 24.1157 67.3843 24.5072 67.9312 24.7386C68.4782 24.97 69.0803 25.0309 69.6612 24.9136C70.2422 24.7962 70.7758 24.5059 71.1946 24.0795C71.6134 23.653 71.8985 23.1096 72.0137 22.518C72.129 21.9264 72.0692 21.3133 71.8419 20.7563C71.6147 20.1994 71.2302 19.7236 70.7372 19.3894C70.2442 19.0551 69.6649 18.8774 69.0726 18.8787C68.2814 18.8805 67.5231 19.2013 66.9637 19.771C66.4042 20.3407 66.0891 21.1129 66.0874 21.9186V21.9186Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M60.9941 17.3723C62.7512 17.3723 64.1757 15.9218 64.1757 14.1324C64.1757 12.3431 62.7512 10.8926 60.9941 10.8926C59.2369 10.8926 57.8125 12.3431 57.8125 14.1324C57.8125 15.9218 59.2369 17.3723 60.9941 17.3723Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M57.6152 14.1325C57.6152 13.4521 57.8134 12.7871 58.1845 12.2214C58.5557 11.6557 59.0833 11.2148 59.7005 10.9545C60.3178 10.6941 60.997 10.626 61.6522 10.7587C62.3075 10.8915 62.9094 11.2191 63.3818 11.7001C63.8542 12.1812 64.176 12.7941 64.3063 13.4614C64.4366 14.1287 64.3697 14.8203 64.1141 15.4488C63.8584 16.0774 63.4254 16.6146 62.8699 16.9926C62.3144 17.3706 61.6613 17.5723 60.9932 17.5723C60.0973 17.5723 59.2381 17.2099 58.6046 16.5648C57.9711 15.9197 57.6152 15.0448 57.6152 14.1325V14.1325ZM58.0015 14.1325C58.0015 14.735 58.1769 15.324 58.5057 15.825C58.8344 16.326 59.3017 16.7165 59.8483 16.9471C60.395 17.1777 60.9965 17.238 61.5769 17.1205C62.1572 17.0029 62.6903 16.7128 63.1087 16.2867C63.5271 15.8606 63.812 15.3178 63.9275 14.7268C64.0429 14.1359 63.9837 13.5233 63.7572 12.9666C63.5308 12.4099 63.1473 11.9341 62.6553 11.5994C62.1634 11.2646 61.5849 11.0859 60.9932 11.0859C60.1998 11.0859 59.4388 11.4069 58.8777 11.9783C58.3167 12.5496 58.0015 13.3245 58.0015 14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M49.7266 14.1324C49.7266 14.7732 49.9132 15.3996 50.2628 15.9324C50.6124 16.4652 51.1092 16.8805 51.6906 17.1257C52.272 17.3709 52.9117 17.435 53.5289 17.31C54.146 17.185 54.7129 16.8765 55.1579 16.4234C55.6028 15.9703 55.9058 15.393 56.0286 14.7645C56.1514 14.136 56.0884 13.4846 55.8476 12.8926C55.6068 12.3006 55.199 11.7946 54.6758 11.4386C54.1525 11.0826 53.5374 10.8926 52.9082 10.8926C52.0643 10.8926 51.2551 11.2339 50.6584 11.8415C50.0618 12.4491 49.7266 13.2732 49.7266 14.1324V14.1324Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M49.5312 14.1325C49.5312 13.4521 49.7294 12.7871 50.1005 12.2214C50.4717 11.6557 50.9993 11.2148 51.6165 10.9545C52.2338 10.6941 52.913 10.626 53.5682 10.7587C54.2235 10.8915 54.8254 11.2191 55.2978 11.7001C55.7703 12.1812 56.092 12.7941 56.2223 13.4614C56.3527 14.1287 56.2858 14.8203 56.0301 15.4488C55.7744 16.0774 55.3415 16.6146 54.7859 16.9926C54.2304 17.3706 53.5773 17.5723 52.9092 17.5723C52.0133 17.5723 51.1541 17.2099 50.5206 16.5648C49.8871 15.9197 49.5313 15.0448 49.5312 14.1325V14.1325ZM49.9175 14.1325C49.9175 14.735 50.093 15.324 50.4217 15.825C50.7504 16.326 51.2177 16.7165 51.7643 16.9471C52.311 17.1777 52.9126 17.238 53.4929 17.1205C54.0732 17.0029 54.6063 16.7128 55.0247 16.2867C55.4431 15.8606 55.7281 15.3178 55.8435 14.7268C55.9589 14.1359 55.8997 13.5233 55.6732 12.9666C55.4468 12.4099 55.0634 11.9341 54.5714 11.5994C54.0794 11.2646 53.5009 11.0859 52.9092 11.0859C52.1158 11.0859 51.3548 11.4069 50.7938 11.9783C50.2327 12.5496 49.9175 13.3245 49.9175 14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M44.8242 17.3723C46.5813 17.3723 48.0058 15.9218 48.0058 14.1324C48.0058 12.3431 46.5813 10.8926 44.8242 10.8926C43.067 10.8926 41.6426 12.3431 41.6426 14.1324C41.6426 15.9218 43.067 17.3723 44.8242 17.3723Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M41.4453 14.1325C41.4453 13.4521 41.6434 12.7871 42.0146 12.2214C42.3858 11.6557 42.9134 11.2148 43.5306 10.9545C44.1478 10.6941 44.827 10.626 45.4823 10.7587C46.1376 10.8915 46.7395 11.2191 47.2119 11.7001C47.6843 12.1812 48.006 12.7941 48.1364 13.4614C48.2667 14.1287 48.1998 14.8203 47.9442 15.4488C47.6885 16.0774 47.2555 16.6146 46.7 16.9926C46.1445 17.3706 45.4914 17.5723 44.8233 17.5723C43.9274 17.5723 43.0682 17.2099 42.4347 16.5648C41.8012 15.9197 41.4453 15.0448 41.4453 14.1325V14.1325ZM41.8316 14.1325C41.8316 14.735 42.007 15.324 42.3358 15.825C42.6645 16.326 43.1317 16.7165 43.6784 16.9471C44.2251 17.1777 44.8266 17.238 45.407 17.1205C45.9873 17.0029 46.5204 16.7128 46.9388 16.2867C47.3572 15.8606 47.6421 15.3178 47.7576 14.7268C47.873 14.1359 47.8137 13.5233 47.5873 12.9666C47.3609 12.4099 46.9774 11.9341 46.4854 11.5994C45.9934 11.2646 45.415 11.0859 44.8233 11.0859C44.0298 11.0859 43.2689 11.4069 42.7078 11.9783C42.1468 12.5496 41.8316 13.3245 41.8316 14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M36.7382 17.3723C38.4954 17.3723 39.9198 15.9218 39.9198 14.1324C39.9198 12.3431 38.4954 10.8926 36.7382 10.8926C34.9811 10.8926 33.5566 12.3431 33.5566 14.1324C33.5566 15.9218 34.9811 17.3723 36.7382 17.3723Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M33.3613 14.1325C33.3613 13.4521 33.5594 12.7871 33.9306 12.2214C34.3018 11.6557 34.8294 11.2148 35.4466 10.9545C36.0639 10.6941 36.7431 10.626 37.3983 10.7587C38.0536 10.8915 38.6555 11.2191 39.1279 11.7001C39.6003 12.1812 39.9221 12.7941 40.0524 13.4614C40.1827 14.1287 40.1158 14.8203 39.8602 15.4488C39.6045 16.0774 39.1715 16.6146 38.616 16.9926C38.0605 17.3706 37.4074 17.5723 36.7393 17.5723C35.8434 17.5723 34.9842 17.2099 34.3507 16.5648C33.7172 15.9197 33.3613 15.0448 33.3613 14.1325V14.1325ZM33.7541 14.1325C33.7554 14.7334 33.9316 15.3205 34.2604 15.8195C34.5892 16.3185 35.0559 16.7071 35.6015 16.9362C36.147 17.1652 36.7471 17.2245 37.3257 17.1064C37.9043 16.9884 38.4356 16.6984 38.8525 16.273C39.2693 15.8476 39.553 15.3059 39.6676 14.7164C39.7823 14.1269 39.7228 13.516 39.4967 12.961C39.2705 12.4059 38.8879 11.9315 38.3971 11.5978C37.9063 11.2641 37.3295 11.0859 36.7393 11.0859C36.3467 11.0859 35.958 11.1648 35.5954 11.318C35.2328 11.4712 34.9034 11.6957 34.6261 11.9787C34.3489 12.2616 34.1291 12.5975 33.9795 12.9671C33.8298 13.3367 33.7533 13.7327 33.7541 14.1325V14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M28.6542 17.3723C30.4114 17.3723 31.8358 15.9218 31.8358 14.1324C31.8358 12.3431 30.4114 10.8926 28.6542 10.8926C26.8971 10.8926 25.4727 12.3431 25.4727 14.1324C25.4727 15.9218 26.8971 17.3723 28.6542 17.3723Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M25.2754 14.1324C25.2754 13.4509 25.4742 12.7848 25.8466 12.2186C26.2189 11.6523 26.748 11.2114 27.3668 10.9519C27.9856 10.6923 28.6661 10.6258 29.3221 10.7607C29.9781 10.8956 30.5799 11.2259 31.0513 11.7096C31.5226 12.1934 31.8423 12.8088 31.9696 13.4778C32.097 14.1468 32.0263 14.8393 31.7667 15.4673C31.507 16.0954 31.0699 16.6308 30.511 17.0055C29.952 17.3803 29.2964 17.5775 28.6272 17.5722C27.7364 17.5634 26.8849 17.1974 26.2574 16.5534C25.6299 15.9095 25.2771 15.0395 25.2754 14.1324ZM25.6682 14.1324C25.6695 14.7344 25.8464 15.3226 26.1763 15.8221C26.5063 16.3217 26.9745 16.7103 27.5217 16.9385C28.0688 17.1668 28.6701 17.2245 29.2495 17.1042C29.8288 16.984 30.36 16.6913 30.7758 16.2632C31.1916 15.8352 31.4732 15.291 31.5848 14.6998C31.6965 14.1085 31.6333 13.4969 31.4031 12.9423C31.173 12.3877 30.7863 11.9152 30.2921 11.5847C29.7979 11.2542 29.2184 11.0806 28.6272 11.0858C27.8389 11.0929 27.0853 11.4172 26.5309 11.9879C25.9766 12.5587 25.6664 13.3296 25.6682 14.1324V14.1324Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M20.5683 17.3723C22.3255 17.3723 23.7499 15.9218 23.7499 14.1324C23.7499 12.3431 22.3255 10.8926 20.5683 10.8926C18.8112 10.8926 17.3867 12.3431 17.3867 14.1324C17.3867 15.9218 18.8112 17.3723 20.5683 17.3723Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M17.1914 14.1325C17.1914 13.4521 17.3895 12.7871 17.7607 12.2214C18.1319 11.6557 18.6594 11.2148 19.2767 10.9545C19.8939 10.6941 20.5731 10.626 21.2284 10.7587C21.8837 10.8915 22.4856 11.2191 22.958 11.7001C23.4304 12.1812 23.7521 12.7941 23.8825 13.4614C24.0128 14.1287 23.9459 14.8203 23.6902 15.4488C23.4346 16.0774 23.0016 16.6146 22.4461 16.9926C21.8906 17.3706 21.2375 17.5723 20.5694 17.5723C19.674 17.5706 18.8158 17.2076 18.1827 16.5629C17.5496 15.9182 17.1931 15.0442 17.1914 14.1325V14.1325ZM17.5842 14.1325C17.5855 14.7334 17.7617 15.3205 18.0905 15.8195C18.4193 16.3185 18.886 16.7071 19.4315 16.9362C19.9771 17.1652 20.5771 17.2245 21.1558 17.1064C21.7344 16.9884 22.2657 16.6984 22.6826 16.273C23.0994 15.8476 23.383 15.3059 23.4977 14.7164C23.6124 14.1269 23.5529 13.516 23.3267 12.961C23.1006 12.4059 22.718 11.9315 22.2272 11.5978C21.7364 11.2641 21.1595 11.0859 20.5694 11.0859C20.1768 11.0859 19.7881 11.1648 19.4255 11.318C19.0629 11.4712 18.7335 11.6957 18.4562 11.9787C18.1789 12.2616 17.9592 12.5975 17.8095 12.9671C17.6599 13.3367 17.5833 13.7327 17.5842 14.1325V14.1325Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M65.8906 14.0389C65.8906 14.6797 66.0772 15.3061 66.4268 15.8389C66.7764 16.3717 67.2733 16.7869 67.8547 17.0322C68.436 17.2774 69.0758 17.3415 69.6929 17.2165C70.3101 17.0915 70.877 16.783 71.3219 16.3298C71.7669 15.8767 72.0699 15.2995 72.1927 14.671C72.3154 14.0425 72.2524 13.3911 72.0116 12.7991C71.7708 12.2071 71.363 11.7011 70.8398 11.3451C70.3166 10.9891 69.7015 10.7991 69.0722 10.7991C68.2284 10.7991 67.4192 11.1404 66.8225 11.748C66.2258 12.3556 65.8906 13.1797 65.8906 14.0389V14.0389Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M65.7012 14.039C65.7012 13.3583 65.8995 12.693 66.2709 12.1272C66.6424 11.5614 67.1704 11.1205 67.788 10.8603C68.4056 10.6002 69.0851 10.5324 69.7406 10.6657C70.396 10.799 70.9979 11.1273 71.4701 11.609C71.9422 12.0907 72.2634 12.7043 72.393 13.372C72.5226 14.0397 72.4548 14.7315 72.1981 15.36C71.9415 15.9884 71.5075 16.5252 70.9511 16.9023C70.3947 17.2795 69.741 17.4801 69.0726 17.4788C68.1779 17.477 67.3203 17.1138 66.6882 16.4689C66.0562 15.824 65.7012 14.9501 65.7012 14.039V14.039ZM66.0874 14.039C66.0861 14.6421 66.2606 15.232 66.5889 15.734C66.9171 16.236 67.3843 16.6276 67.9312 16.859C68.4782 17.0904 69.0803 17.1513 69.6612 17.0339C70.2422 16.9166 70.7758 16.6263 71.1946 16.1998C71.6134 15.7734 71.8985 15.2299 72.0137 14.6383C72.129 14.0467 72.0692 13.4336 71.8419 12.8767C71.6147 12.3197 71.2302 11.844 70.7372 11.5098C70.2442 11.1755 69.6649 10.9978 69.0726 10.9991C68.2809 10.9991 67.5216 11.3194 66.9618 11.8895C66.4019 12.4595 66.0874 13.2327 66.0874 14.039V14.039Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M0.000457764 118.688H33.1191L33.1191 69.2833H0.000457764L0.000457764 118.688Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M2.84811 77.3096H30.5332V70.7232H2.84811V77.3096Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 69.2832L7.83608 77.3095H2.84766V69.2832H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M2.84811 85.3359H30.5332V78.7496H2.84811V85.3359Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 77.3096L7.83608 85.3425H2.84766V77.3096H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M2.84811 93.5222H30.5332V86.9359H2.84811V93.5222Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 85.4958L7.83608 93.5288H2.84766V85.4958H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M2.84811 101.548H30.5332V94.962H2.84811V101.548Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 93.5154L7.83608 101.542H2.84766V93.5154H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M2.84811 109.561H30.5332V102.975H2.84811V109.561Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 101.535L7.83608 109.561H2.84766V101.535H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M2.84811 117.574H30.5332V110.988H2.84811V117.574Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M4.92289 109.548L7.83608 117.581H2.84766V109.548H4.92289Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M33.126 92.3489L165.404 92.3489V90.7423L33.126 90.7423V92.3489Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M33.126 103.782L165.404 103.782V92.4023L33.126 92.4023V103.782Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M33.0068 116.368L165.285 116.368V104.988L33.0068 104.988V116.368Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M33.126 90.6821L165.404 90.6821V75.2228L33.126 75.2228V90.6821Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M33.126 75.4163L165.404 75.4163V73.8097L33.126 73.8097V75.4163Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M33.0068 104.915L165.285 104.915V103.308L33.0068 103.308V104.915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M0.0059967 136.82L165.285 136.82V115.968L0.0059967 115.968V136.82Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M406.687 75.8562C406.687 75.8562 406.687 75.7363 406.687 75.5163C406.687 75.2963 406.687 74.9696 406.687 74.543C406.687 73.6763 406.687 72.4164 406.687 70.7898C406.687 67.5299 406.687 62.7902 406.654 56.9704C406.654 45.2976 406.654 29.105 406.609 11.0325L406.713 11.1325H402.55L402.655 11.0325C402.655 40.7645 402.596 66.0367 402.589 75.3163H402.556L405.666 75.7363L406.445 75.8496L406.713 75.8896H406.458L405.686 75.7962L402.55 75.4096V75.3763C402.55 66.0967 402.517 40.8245 402.484 11.0925V10.9858H406.844V11.0925C406.844 29.1984 406.844 45.4176 406.805 57.0904C406.805 62.9235 406.805 67.6233 406.772 70.8765C406.772 72.4897 406.772 73.7497 406.772 74.603C406.772 75.0229 406.772 75.3429 406.772 75.5696C406.772 75.7963 406.687 75.8562 406.687 75.8562Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M429.658 75.6763C429.658 75.6763 429.658 75.5563 429.658 75.3363C429.658 75.1163 429.658 74.7896 429.658 74.363C429.658 73.503 429.658 72.2431 429.658 70.6231C429.658 67.3766 429.658 62.6768 429.658 56.8504C429.658 45.211 429.658 29.065 429.613 11.0392L429.717 11.1392H425.685L425.789 11.0392C425.757 41.0378 425.731 66.5367 425.717 75.7029H425.685H428.703H425.665V75.6696C425.665 66.53 425.626 41.0378 425.6 11.0058V10.8992H429.829V11.0058C429.829 29.065 429.829 45.2376 429.789 56.8971C429.789 62.7102 429.789 67.4033 429.789 70.6431C429.789 72.2564 429.789 73.503 429.789 74.3563C429.789 74.7763 429.789 75.0963 429.789 75.3163C429.789 75.5363 429.658 75.6763 429.658 75.6763Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.304 36.8181C440.304 36.8714 429.359 36.9181 415.866 36.9181C402.374 36.9181 391.422 36.8714 391.422 36.8181C391.422 36.7648 402.361 36.7114 415.866 36.7114C429.372 36.7114 440.304 36.7581 440.304 36.8181Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.304 29.0451C440.304 29.0985 429.359 29.1451 415.866 29.1451C402.374 29.1451 391.422 29.0985 391.422 29.0451C391.422 28.9918 402.361 28.9385 415.866 28.9385C429.372 28.9385 440.304 28.9851 440.304 29.0451Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.304 21.2721C440.304 21.3255 429.359 21.3721 415.866 21.3721C402.374 21.3721 391.422 21.3255 391.422 21.2721C391.422 21.2188 402.361 21.1921 415.866 21.1921C429.372 21.1921 440.304 21.1921 440.304 21.2721Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.304 13.499C440.304 13.5523 429.359 13.599 415.866 13.599C402.374 13.599 391.422 13.5523 391.422 13.499C391.422 13.4457 402.361 13.3923 415.866 13.3923C429.372 13.3923 440.304 13.439 440.304 13.499Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M395.127 37.2313C395.127 37.8727 394.94 38.4996 394.59 39.0327C394.24 39.5658 393.742 39.981 393.16 40.2258C392.578 40.4706 391.937 40.534 391.32 40.4079C390.702 40.2818 390.135 39.9719 389.691 39.5175C389.246 39.0631 388.944 38.4845 388.823 37.8552C388.702 37.2258 388.767 36.574 389.01 35.9822C389.252 35.3905 389.662 34.8854 390.187 34.531C390.712 34.1766 391.329 33.9888 391.958 33.9915C392.799 33.9968 393.604 34.3402 394.198 34.947C394.791 35.5539 395.125 36.3749 395.127 37.2313V37.2313Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M391.959 40.6712C391.29 40.6725 390.637 40.4719 390.08 40.0947C389.524 39.7175 389.09 39.1808 388.833 38.5523C388.577 37.9239 388.509 37.2321 388.638 36.5644C388.768 35.8967 389.089 35.2831 389.561 34.8014C390.033 34.3196 390.635 33.9914 391.291 33.8581C391.946 33.7248 392.626 33.7926 393.243 34.0527C393.861 34.3129 394.389 34.7538 394.76 35.3196C395.132 35.8854 395.33 36.5507 395.33 37.2313C395.328 38.142 394.973 39.0149 394.341 39.6594C393.71 40.3039 392.853 40.6677 391.959 40.6712V40.6712ZM391.959 34.1915C391.368 34.1915 390.791 34.3698 390.3 34.7038C389.809 35.0378 389.427 35.5126 389.201 36.068C388.975 36.6235 388.916 37.2347 389.031 37.8244C389.146 38.4141 389.43 38.9557 389.848 39.3809C390.265 39.806 390.797 40.0955 391.376 40.2128C391.955 40.3301 392.556 40.2699 393.101 40.0398C393.647 39.8097 394.113 39.4201 394.441 38.9202C394.769 38.4203 394.944 37.8326 394.944 37.2313C394.942 36.4257 394.627 35.6535 394.068 35.0838C393.508 34.5141 392.75 34.1932 391.959 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M400.029 40.4712C401.786 40.4712 403.211 39.0206 403.211 37.2313C403.211 35.442 401.786 33.9915 400.029 33.9915C398.272 33.9915 396.848 35.442 396.848 37.2313C396.848 39.0206 398.272 40.4712 400.029 40.4712Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M400.029 40.6712C399.361 40.6725 398.707 40.4719 398.151 40.0947C397.594 39.7175 397.16 39.1808 396.904 38.5523C396.647 37.9239 396.579 37.2321 396.709 36.5644C396.838 35.8967 397.159 35.2831 397.632 34.8014C398.104 34.3196 398.706 33.9914 399.361 33.8581C400.017 33.7248 400.696 33.7926 401.314 34.0527C401.931 34.3129 402.459 34.7538 402.831 35.3196C403.202 35.8854 403.4 36.5507 403.4 37.2313C403.399 38.142 403.043 39.0149 402.412 39.6594C401.78 40.3039 400.923 40.6677 400.029 40.6712V40.6712ZM400.029 34.1915C399.439 34.1915 398.861 34.3698 398.371 34.7038C397.88 35.0378 397.497 35.5126 397.271 36.068C397.045 36.6235 396.986 37.2347 397.101 37.8244C397.216 38.4141 397.501 38.9557 397.918 39.3809C398.336 39.806 398.868 40.0955 399.447 40.2128C400.026 40.3301 400.626 40.2699 401.171 40.0398C401.717 39.8097 402.183 39.4201 402.511 38.9202C402.839 38.4203 403.014 37.8326 403.014 37.2313C403.013 36.4257 402.697 35.6535 402.138 35.0838C401.579 34.5141 400.82 34.1932 400.029 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M411.296 37.2313C411.297 37.874 411.111 38.5026 410.762 39.0375C410.412 39.5724 409.914 39.9895 409.331 40.2361C408.748 40.4826 408.107 40.5475 407.488 40.4224C406.869 40.2974 406.3 39.9881 405.854 39.5336C405.407 39.0792 405.104 38.5001 404.981 37.8697C404.858 37.2393 404.922 36.586 405.164 35.9925C405.406 35.399 405.816 34.8921 406.341 34.5358C406.866 34.1796 407.483 33.9901 408.115 33.9915C408.958 33.9932 409.766 34.3351 410.362 34.9423C410.959 35.5496 411.294 36.3726 411.296 37.2313V37.2313Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M408.115 40.6712C407.447 40.6725 406.793 40.4719 406.237 40.0947C405.68 39.7175 405.246 39.1808 404.989 38.5523C404.733 37.9239 404.665 37.2321 404.795 36.5644C404.924 35.8967 405.245 35.2831 405.718 34.8014C406.19 34.3196 406.792 33.9914 407.447 33.8581C408.103 33.7248 408.782 33.7926 409.4 34.0527C410.017 34.3129 410.545 34.7538 410.917 35.3196C411.288 35.8854 411.486 36.5507 411.486 37.2313C411.485 38.142 411.129 39.0149 410.497 39.6594C409.866 40.3039 409.009 40.6677 408.115 40.6712V40.6712ZM408.115 34.1915C407.525 34.1915 406.947 34.3698 406.457 34.7038C405.966 35.0378 405.583 35.5126 405.357 36.068C405.131 36.6235 405.072 37.2347 405.187 37.8244C405.302 38.4141 405.587 38.9557 406.004 39.3809C406.422 39.806 406.954 40.0955 407.533 40.2128C408.112 40.3301 408.712 40.2699 409.257 40.0398C409.803 39.8097 410.269 39.4201 410.597 38.9202C410.925 38.4203 411.1 37.8326 411.1 37.2313C411.098 36.4257 410.783 35.6535 410.224 35.0838C409.665 34.5141 408.906 34.1932 408.115 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M419.375 37.2313C419.375 37.8716 419.189 38.4974 418.84 39.0299C418.491 39.5624 417.994 39.9777 417.414 40.2233C416.833 40.4689 416.194 40.5338 415.577 40.4099C414.961 40.2859 414.394 39.9787 413.948 39.5269C413.503 39.0752 413.199 38.4991 413.074 37.8715C412.95 37.2439 413.011 36.5929 413.25 36.0007C413.489 35.4085 413.895 34.9016 414.416 34.544C414.938 34.1864 415.552 33.9941 416.18 33.9915C416.599 33.9897 417.014 34.0722 417.402 34.2343C417.789 34.3963 418.142 34.6347 418.438 34.9357C418.735 35.2367 418.971 35.5945 419.131 35.9884C419.292 36.3824 419.375 36.8047 419.375 37.2313V37.2313Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M416.181 40.6712C415.513 40.6712 414.86 40.4695 414.304 40.0915C413.748 39.7135 413.316 39.1763 413.06 38.5477C412.804 37.9192 412.737 37.2275 412.868 36.5603C412.998 35.893 413.32 35.2801 413.792 34.799C414.265 34.3179 414.866 33.9903 415.522 33.8576C416.177 33.7249 416.856 33.793 417.473 34.0533C418.091 34.3137 418.618 34.7546 418.989 35.3203C419.361 35.886 419.559 36.551 419.559 37.2314C419.559 38.1437 419.203 39.0186 418.569 39.6637C417.936 40.3088 417.077 40.6712 416.181 40.6712ZM416.181 34.1915C415.591 34.1928 415.014 34.3722 414.524 34.707C414.034 35.0419 413.652 35.5171 413.427 36.0727C413.202 36.6282 413.144 37.2392 413.26 37.8285C413.376 38.4177 413.661 38.9587 414.079 39.3832C414.496 39.8077 415.028 40.0965 415.607 40.2133C416.186 40.33 416.786 40.2695 417.331 40.0392C417.876 39.8089 418.342 39.4193 418.67 38.9195C418.998 38.4198 419.172 37.8323 419.172 37.2314C419.172 36.8316 419.095 36.4358 418.945 36.0665C418.794 35.6973 418.574 35.3618 418.296 35.0795C418.018 34.7971 417.688 34.5733 417.325 34.421C416.962 34.2686 416.573 34.1906 416.181 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M427.459 37.2313C427.459 37.8721 427.272 38.4985 426.923 39.0313C426.573 39.5641 426.076 39.9793 425.495 40.2245C424.913 40.4698 424.274 40.5339 423.657 40.4089C423.039 40.2839 422.473 39.9753 422.028 39.5222C421.583 39.0691 421.28 38.4918 421.157 37.8634C421.034 37.2349 421.097 36.5835 421.338 35.9915C421.579 35.3995 421.986 34.8935 422.51 34.5375C423.033 34.1815 423.648 33.9915 424.277 33.9915C425.121 33.9915 425.93 34.3328 426.527 34.9404C427.124 35.548 427.459 36.372 427.459 37.2313V37.2313Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M424.278 40.6712C423.61 40.6712 422.957 40.4695 422.402 40.0915C421.846 39.7135 421.413 39.1763 421.158 38.5477C420.902 37.9192 420.835 37.2275 420.965 36.5603C421.096 35.893 421.417 35.2801 421.89 34.799C422.362 34.3179 422.964 33.9903 423.619 33.8576C424.275 33.7249 424.954 33.793 425.571 34.0533C426.188 34.3137 426.716 34.7546 427.087 35.3203C427.458 35.886 427.656 36.551 427.656 37.2314C427.656 38.1437 427.3 39.0186 426.667 39.6637C426.033 40.3088 425.174 40.6712 424.278 40.6712ZM424.278 34.1915C423.688 34.1928 423.112 34.3722 422.622 34.707C422.132 35.0419 421.75 35.5171 421.525 36.0727C421.3 36.6282 421.242 37.2392 421.358 37.8285C421.474 38.4177 421.759 38.9587 422.176 39.3832C422.594 39.8077 423.126 40.0965 423.705 40.2133C424.284 40.33 424.884 40.2695 425.429 40.0392C425.974 39.8089 426.44 39.4193 426.767 38.9195C427.095 38.4198 427.27 37.8323 427.27 37.2314C427.27 36.8316 427.193 36.4358 427.042 36.0665C426.892 35.6973 426.671 35.3618 426.393 35.0795C426.116 34.7971 425.786 34.5733 425.423 34.421C425.06 34.2686 424.671 34.1906 424.278 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M432.363 40.4712C434.12 40.4712 435.545 39.0206 435.545 37.2313C435.545 35.442 434.12 33.9915 432.363 33.9915C430.606 33.9915 429.182 35.442 429.182 37.2313C429.182 39.0206 430.606 40.4712 432.363 40.4712Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M432.362 40.6712C431.694 40.6712 431.041 40.4695 430.486 40.0915C429.93 39.7135 429.497 39.1763 429.242 38.5477C428.986 37.9192 428.919 37.2275 429.049 36.5603C429.18 35.893 429.501 35.2801 429.974 34.799C430.446 34.3179 431.048 33.9903 431.703 33.8576C432.359 33.7249 433.038 33.793 433.655 34.0533C434.272 34.3137 434.8 34.7546 435.171 35.3203C435.542 35.886 435.74 36.551 435.74 37.2314C435.74 38.1437 435.384 39.0186 434.751 39.6637C434.117 40.3088 433.258 40.6712 432.362 40.6712V40.6712ZM432.362 34.1915C431.772 34.1928 431.196 34.3722 430.706 34.707C430.216 35.0419 429.834 35.5171 429.609 36.0727C429.384 36.6282 429.326 37.2392 429.442 37.8285C429.558 38.4177 429.843 38.9587 430.26 39.3832C430.678 39.8077 431.21 40.0965 431.789 40.2133C432.368 40.33 432.968 40.2695 433.513 40.0392C434.058 39.8089 434.524 39.4193 434.851 38.9195C435.179 38.4198 435.354 37.8323 435.354 37.2314C435.354 36.8316 435.277 36.4358 435.126 36.0665C434.976 35.6973 434.755 35.3618 434.477 35.0795C434.2 34.7971 433.87 34.5733 433.507 34.421C433.144 34.2686 432.755 34.1906 432.362 34.1915V34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.447 40.4712C442.204 40.4712 443.629 39.0206 443.629 37.2313C443.629 35.442 442.204 33.9915 440.447 33.9915C438.69 33.9915 437.266 35.442 437.266 37.2313C437.266 39.0206 438.69 40.4712 440.447 40.4712Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M440.448 40.6712C439.78 40.6712 439.127 40.4695 438.572 40.0915C438.016 39.7135 437.583 39.1763 437.327 38.5477C437.072 37.9192 437.005 37.2275 437.135 36.5603C437.266 35.893 437.587 35.2801 438.06 34.799C438.532 34.3179 439.134 33.9903 439.789 33.8576C440.445 33.7249 441.124 33.793 441.741 34.0533C442.358 34.3137 442.886 34.7546 443.257 35.3203C443.628 35.886 443.826 36.551 443.826 37.2314C443.825 38.1431 443.468 39.017 442.835 39.6617C442.202 40.3065 441.344 40.6694 440.448 40.6712V40.6712ZM440.448 34.1915C439.858 34.1915 439.281 34.3698 438.79 34.7038C438.299 35.0378 437.916 35.5126 437.69 36.068C437.464 36.6235 437.405 37.2347 437.52 37.8244C437.636 38.4141 437.92 38.9557 438.337 39.3809C438.755 39.806 439.287 40.0955 439.866 40.2128C440.445 40.3301 441.045 40.2699 441.591 40.0398C442.136 39.8097 442.602 39.4201 442.93 38.9202C443.258 38.4203 443.433 37.8326 443.433 37.2314C443.433 36.4251 443.119 35.6519 442.559 35.0818C441.999 34.5118 441.24 34.1915 440.448 34.1915Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M400.029 32.4914C401.786 32.4914 403.211 31.0409 403.211 29.2516C403.211 27.4622 401.786 26.0117 400.029 26.0117C398.272 26.0117 396.848 27.4622 396.848 29.2516C396.848 31.0409 398.272 32.4914 400.029 32.4914Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M400.029 32.6915C399.361 32.6928 398.707 32.4921 398.151 32.115C397.594 31.7378 397.16 31.201 396.904 30.5726C396.647 29.9442 396.579 29.2523 396.709 28.5846C396.838 27.9169 397.159 27.3034 397.632 26.8216C398.104 26.3399 398.706 26.0116 399.361 25.8784C400.017 25.7451 400.696 25.8128 401.314 26.073C401.931 26.3331 402.459 26.774 402.831 27.3398C403.202 27.9057 403.4 28.571 403.4 29.2516C403.4 30.1628 403.046 31.0367 402.413 31.6816C401.781 32.3265 400.924 32.6897 400.029 32.6915V32.6915ZM400.029 26.2117C399.439 26.2117 398.861 26.39 398.371 26.7241C397.88 27.0581 397.497 27.5328 397.271 28.0883C397.045 28.6438 396.986 29.255 397.101 29.8447C397.216 30.4343 397.501 30.976 397.918 31.4011C398.336 31.8262 398.868 32.1158 399.447 32.2331C400.026 32.3504 400.626 32.2902 401.171 32.0601C401.717 31.83 402.183 31.4404 402.511 30.9405C402.839 30.4406 403.014 29.8528 403.014 29.2516C403.013 28.4459 402.697 27.6737 402.138 27.104C401.579 26.5343 400.82 26.2135 400.029 26.2117V26.2117Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M411.296 29.2516C411.297 29.8942 411.111 30.5228 410.762 31.0578C410.412 31.5927 409.914 32.0098 409.331 32.2564C408.748 32.5029 408.107 32.5678 407.488 32.4427C406.869 32.3176 406.3 32.0083 405.854 31.5539C405.407 31.0994 405.104 30.5204 404.981 29.89C404.858 29.2596 404.922 28.6063 405.164 28.0128C405.406 27.4193 405.816 26.9123 406.341 26.5561C406.866 26.1999 407.483 26.0104 408.115 26.0117C408.958 26.0117 409.768 26.3531 410.364 26.9607C410.961 27.5682 411.296 28.3923 411.296 29.2516Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M408.115 32.6915C407.447 32.6928 406.793 32.4921 406.237 32.115C405.68 31.7378 405.246 31.201 404.989 30.5726C404.733 29.9442 404.665 29.2523 404.795 28.5846C404.924 27.9169 405.245 27.3034 405.718 26.8216C406.19 26.3399 406.792 26.0116 407.447 25.8784C408.103 25.7451 408.782 25.8128 409.4 26.073C410.017 26.3331 410.545 26.774 410.917 27.3398C411.288 27.9057 411.486 28.571 411.486 29.2516C411.486 30.1628 411.131 31.0367 410.499 31.6816C409.867 32.3265 409.01 32.6897 408.115 32.6915ZM408.115 26.2117C407.525 26.2117 406.947 26.39 406.457 26.7241C405.966 27.0581 405.583 27.5328 405.357 28.0883C405.131 28.6438 405.072 29.255 405.187 29.8447C405.302 30.4343 405.587 30.976 406.004 31.4011C406.422 31.8262 406.954 32.1158 407.533 32.2331C408.112 32.3504 408.712 32.2902 409.257 32.0601C409.803 31.83 410.269 31.4404 410.597 30.9405C410.925 30.4406 411.1 29.8528 411.1 29.2516C411.098 28.4459 410.783 27.6737 410.224 27.104C409.665 26.5343 408.906 26.2135 408.115 26.2117V26.2117Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M419.375 29.2516C419.375 29.8918 419.189 30.5177 418.84 31.0502C418.491 31.5827 417.994 31.998 417.414 32.2436C416.833 32.4892 416.194 32.5541 415.577 32.4302C414.961 32.3062 414.394 31.999 413.948 31.5472C413.503 31.0955 413.199 30.5194 413.074 29.8918C412.95 29.2642 413.011 28.6132 413.25 28.021C413.489 27.4288 413.895 26.9219 414.416 26.5643C414.938 26.2067 415.552 26.0144 416.18 26.0118C416.599 26.0091 417.015 26.091 417.403 26.2528C417.791 26.4145 418.143 26.6528 418.44 26.954C418.737 27.2552 418.973 27.6133 419.133 28.0077C419.294 28.402 419.376 28.8248 419.375 29.2516V29.2516Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M416.181 32.6915C415.513 32.6915 414.86 32.4897 414.304 32.1117C413.748 31.7338 413.316 31.1965 413.06 30.568C412.804 29.9394 412.737 29.2478 412.868 28.5805C412.998 27.9133 413.32 27.3003 413.792 26.8193C414.265 26.3382 414.866 26.0106 415.522 25.8779C416.177 25.7451 416.856 25.8133 417.473 26.0736C418.091 26.334 418.618 26.7749 418.989 27.3405C419.361 27.9062 419.559 28.5713 419.559 29.2516C419.559 30.1639 419.203 31.0389 418.569 31.684C417.936 32.329 417.077 32.6915 416.181 32.6915ZM416.181 26.2118C415.591 26.2131 415.014 26.3925 414.524 26.7273C414.034 27.0621 413.652 27.5373 413.427 28.0929C413.202 28.6485 413.144 29.2595 413.26 29.8487C413.376 30.438 413.661 30.979 414.079 31.4035C414.496 31.8279 415.028 32.1168 415.607 32.2335C416.186 32.3503 416.786 32.2897 417.331 32.0594C417.876 31.8292 418.342 31.4395 418.67 30.9398C418.998 30.44 419.172 29.8526 419.172 29.2516C419.171 28.4448 418.855 27.6716 418.294 27.1017C417.733 26.5318 416.973 26.2117 416.181 26.2118Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M427.459 29.2516C427.459 29.8924 427.272 30.5188 426.923 31.0515C426.573 31.5843 426.076 31.9996 425.495 32.2448C424.913 32.49 424.274 32.5542 423.657 32.4292C423.039 32.3042 422.473 31.9956 422.028 31.5425C421.583 31.0894 421.28 30.5121 421.157 29.8836C421.034 29.2552 421.097 28.6037 421.338 28.0117C421.579 27.4197 421.986 26.9137 422.51 26.5577C423.033 26.2017 423.648 26.0117 424.277 26.0117C424.695 26.0108 425.109 26.094 425.496 26.2566C425.882 26.4191 426.233 26.6577 426.529 26.9587C426.825 27.2597 427.059 27.6172 427.218 28.0107C427.378 28.4042 427.46 28.8259 427.459 29.2516V29.2516Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M424.278 32.6915C423.61 32.6915 422.957 32.4897 422.402 32.1117C421.846 31.7338 421.413 31.1965 421.158 30.568C420.902 29.9394 420.835 29.2478 420.965 28.5805C421.096 27.9133 421.417 27.3003 421.89 26.8193C422.362 26.3382 422.964 26.0106 423.619 25.8779C424.275 25.7451 424.954 25.8133 425.571 26.0736C426.188 26.334 426.716 26.7749 427.087 27.3405C427.458 27.9062 427.656 28.5713 427.656 29.2516C427.656 30.1639 427.3 31.0389 426.667 31.684C426.033 32.329 425.174 32.6915 424.278 32.6915ZM424.278 26.2118C423.688 26.2131 423.112 26.3925 422.622 26.7273C422.132 27.0621 421.75 27.5373 421.525 28.0929C421.3 28.6485 421.242 29.2595 421.358 29.8487C421.474 30.438 421.759 30.979 422.176 31.4035C422.594 31.8279 423.126 32.1168 423.705 32.2335C424.284 32.3503 424.884 32.2897 425.429 32.0594C425.974 31.8292 426.44 31.4395 426.767 30.9398C427.095 30.44 427.27 29.8526 427.27 29.2516C427.268 28.4448 426.952 27.6716 426.392 27.1017C425.831 26.5318 425.071 26.2117 424.278 26.2118Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M432.363 32.4914C434.12 32.4914 435.545 31.0409 435.545 29.2516C435.545 27.4622 434.12 26.0117 432.363 26.0117C430.606 26.0117 429.182 27.4622 429.182 29.2516C429.182 31.0409 430.606 32.4914 432.363 32.4914Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M432.362 32.6915C431.694 32.6915 431.041 32.4897 430.486 32.1117C429.93 31.7338 429.497 31.1965 429.242 30.568C428.986 29.9394 428.919 29.2478 429.049 28.5805C429.18 27.9133 429.501 27.3003 429.974 26.8193C430.446 26.3382 431.048 26.0106 431.703 25.8779C432.359 25.7451 433.038 25.8133 433.655 26.0736C434.272 26.334 434.8 26.7749 435.171 27.3405C435.542 27.9062 435.74 28.5713 435.74 29.2516C435.74 30.1639 435.384 31.0389 434.751 31.684C434.117 32.329 433.258 32.6915 432.362 32.6915V32.6915ZM432.362 26.2118C431.772 26.2131 431.196 26.3925 430.706 26.7273C430.216 27.0621 429.834 27.5373 429.609 28.0929C429.384 28.6485 429.326 29.2595 429.442 29.8487C429.558 30.438 429.843 30.979 430.26 31.4035C430.678 31.8279 431.21 32.1168 431.789 32.2335C432.368 32.3503 432.968 32.2897 433.513 32.0594C434.058 31.8292 434.524 31.4395 434.851 30.9398C435.179 30.44 435.354 29.8526 435.354 29.2516C435.352 28.4448 435.036 27.6716 434.476 27.1017C433.915 26.5318 433.155 26.2117 432.362 26.2118Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.447 32.4914C442.204 32.4914 443.629 31.0409 443.629 29.2516C443.629 27.4622 442.204 26.0117 440.447 26.0117C438.69 26.0117 437.266 27.4622 437.266 29.2516C437.266 31.0409 438.69 32.4914 440.447 32.4914Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M440.448 32.6915C439.78 32.6915 439.127 32.4897 438.572 32.1117C438.016 31.7338 437.583 31.1965 437.327 30.568C437.072 29.9394 437.005 29.2478 437.135 28.5805C437.266 27.9133 437.587 27.3003 438.06 26.8193C438.532 26.3382 439.134 26.0106 439.789 25.8779C440.445 25.7451 441.124 25.8133 441.741 26.0736C442.358 26.334 442.886 26.7749 443.257 27.3405C443.628 27.9062 443.826 28.5713 443.826 29.2516C443.825 30.1634 443.468 31.0373 442.835 31.682C442.202 32.3267 441.344 32.6897 440.448 32.6915V32.6915ZM440.448 26.2118C439.858 26.2118 439.281 26.39 438.79 26.7241C438.299 27.0581 437.916 27.5328 437.69 28.0883C437.464 28.6438 437.405 29.255 437.52 29.8447C437.636 30.4343 437.92 30.976 438.337 31.4011C438.755 31.8263 439.287 32.1158 439.866 32.2331C440.445 32.3504 441.045 32.2902 441.591 32.0601C442.136 31.83 442.602 31.4404 442.93 30.9405C443.258 30.4406 443.433 29.8528 443.433 29.2516C443.432 28.4459 443.117 27.6738 442.557 27.1041C441.998 26.5343 441.239 26.2135 440.448 26.2118V26.2118Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M395.127 29.1916C395.122 29.8318 394.93 30.4561 394.577 30.9856C394.224 31.5152 393.724 31.9263 393.142 32.167C392.559 32.4077 391.92 32.4673 391.304 32.3382C390.688 32.2091 390.124 31.8971 389.682 31.4417C389.24 30.9862 388.941 30.4076 388.821 29.779C388.702 29.1504 388.769 28.5 389.012 27.9098C389.256 27.3195 389.666 26.816 390.19 26.4628C390.714 26.1096 391.33 25.9225 391.958 25.9251C392.377 25.9277 392.791 26.0143 393.177 26.1798C393.563 26.3454 393.913 26.5868 394.207 26.8901C394.501 27.1934 394.734 27.5528 394.892 27.9477C395.049 28.3426 395.129 28.7653 395.127 29.1916V29.1916Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M391.958 32.5981C391.288 32.6021 390.631 32.4028 390.073 32.0258C389.514 31.6487 389.078 31.1109 388.82 30.4808C388.562 29.8506 388.495 29.1567 388.625 28.4872C388.756 27.8177 389.08 27.203 389.555 26.7213C390.03 26.2395 390.634 25.9126 391.292 25.782C391.95 25.6515 392.632 25.7232 393.249 25.9881C393.867 26.2529 394.394 26.699 394.762 27.2695C395.13 27.84 395.323 28.5091 395.316 29.1916C395.308 30.0947 394.951 30.9581 394.322 31.5954C393.694 32.2328 392.845 32.5929 391.958 32.5981V32.5981ZM391.958 26.1184C391.367 26.1145 390.787 26.2892 390.293 26.6203C389.799 26.9515 389.413 27.4244 389.183 27.9791C388.952 28.5339 388.889 29.1457 389 29.7372C389.111 30.3287 389.392 30.8735 389.807 31.3026C390.222 31.7317 390.752 32.0259 391.332 32.1481C391.911 32.2703 392.512 32.2149 393.061 31.989C393.609 31.7631 394.079 31.3768 394.412 30.8789C394.745 30.381 394.925 29.7939 394.93 29.1916C394.935 28.383 394.625 27.6053 394.068 27.0292C393.511 26.453 392.752 26.1255 391.958 26.1184Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M400.029 24.6118C401.786 24.6118 403.211 23.1613 403.211 21.3719C403.211 19.5826 401.786 18.1321 400.029 18.1321C398.272 18.1321 396.848 19.5826 396.848 21.3719C396.848 23.1613 398.272 24.6118 400.029 24.6118Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M400.029 24.8118C399.361 24.8131 398.707 24.6125 398.151 24.2353C397.594 23.8582 397.16 23.3214 396.904 22.693C396.647 22.0645 396.579 21.3727 396.709 20.705C396.838 20.0373 397.159 19.4237 397.632 18.942C398.104 18.4603 398.706 18.132 399.361 17.9987C400.017 17.8654 400.696 17.9332 401.314 18.1933C401.931 18.4535 402.459 18.8944 402.831 19.4602C403.202 20.026 403.4 20.6913 403.4 21.372C403.399 22.2826 403.043 23.1555 402.412 23.8C401.78 24.4445 400.923 24.8083 400.029 24.8118V24.8118ZM400.029 18.3321C399.439 18.3321 398.861 18.5104 398.371 18.8444C397.88 19.1784 397.497 19.6532 397.271 20.2087C397.045 20.7641 396.986 21.3753 397.101 21.965C397.216 22.5547 397.501 23.0963 397.918 23.5215C398.336 23.9466 398.868 24.2361 399.447 24.3534C400.026 24.4707 400.626 24.4105 401.171 24.1804C401.717 23.9504 402.183 23.5607 402.511 23.0608C402.839 22.5609 403.014 21.9732 403.014 21.372C403.013 20.5663 402.697 19.7941 402.138 19.2244C401.579 18.6547 400.82 18.3339 400.029 18.3321V18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M411.296 21.3719C411.297 22.0146 411.111 22.6432 410.762 23.1781C410.412 23.713 409.914 24.1302 409.331 24.3767C408.748 24.6233 408.107 24.6881 407.488 24.5631C406.869 24.438 406.3 24.1287 405.854 23.6742C405.407 23.2198 405.104 22.6407 404.981 22.0103C404.858 21.3799 404.922 20.7266 405.164 20.1331C405.406 19.5396 405.816 19.0327 406.341 18.6764C406.866 18.3202 407.483 18.1308 408.115 18.1321C408.958 18.1338 409.766 18.4758 410.362 19.083C410.959 19.6902 411.294 20.5132 411.296 21.3719Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M408.115 24.8118C407.447 24.8131 406.793 24.6125 406.237 24.2353C405.68 23.8582 405.246 23.3214 404.989 22.693C404.733 22.0645 404.665 21.3727 404.795 20.705C404.924 20.0373 405.245 19.4237 405.718 18.942C406.19 18.4603 406.792 18.132 407.447 17.9987C408.103 17.8654 408.782 17.9332 409.4 18.1933C410.017 18.4535 410.545 18.8944 410.917 19.4602C411.288 20.026 411.486 20.6913 411.486 21.372C411.485 22.2826 411.129 23.1555 410.497 23.8C409.866 24.4445 409.009 24.8083 408.115 24.8118V24.8118ZM408.115 18.3321C407.525 18.3321 406.947 18.5104 406.457 18.8444C405.966 19.1784 405.583 19.6532 405.357 20.2087C405.131 20.7641 405.072 21.3753 405.187 21.965C405.302 22.5547 405.587 23.0963 406.004 23.5215C406.422 23.9466 406.954 24.2361 407.533 24.3534C408.112 24.4707 408.712 24.4105 409.257 24.1804C409.803 23.9504 410.269 23.5607 410.597 23.0608C410.925 22.5609 411.1 21.9732 411.1 21.372C411.098 20.5663 410.783 19.7941 410.224 19.2244C409.665 18.6547 408.906 18.3339 408.115 18.3321V18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M419.375 21.372C419.375 22.0122 419.189 22.638 418.84 23.1705C418.491 23.703 417.994 24.1183 417.414 24.3639C416.833 24.6095 416.194 24.6744 415.577 24.5505C414.961 24.4266 414.394 24.1193 413.948 23.6676C413.503 23.2158 413.199 22.6397 413.074 22.0122C412.95 21.3846 413.011 20.7336 413.25 20.1413C413.489 19.5491 413.895 19.0422 414.416 18.6846C414.938 18.327 415.552 18.1347 416.18 18.1321C416.599 18.1304 417.014 18.2129 417.402 18.3749C417.789 18.5369 418.142 18.7753 418.438 19.0763C418.735 19.3773 418.971 19.7351 419.131 20.129C419.292 20.523 419.375 20.9454 419.375 21.372V21.372Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M416.181 24.8118C415.513 24.8118 414.86 24.6101 414.304 24.2321C413.748 23.8541 413.316 23.3169 413.06 22.6883C412.804 22.0598 412.737 21.3682 412.868 20.7009C412.998 20.0336 413.32 19.4207 413.792 18.9396C414.265 18.4586 414.866 18.131 415.522 17.9982C416.177 17.8655 416.856 17.9336 417.473 18.194C418.091 18.4543 418.618 18.8952 418.989 19.4609C419.361 20.0266 419.559 20.6916 419.559 21.372C419.559 22.2843 419.203 23.1592 418.569 23.8043C417.936 24.4494 417.077 24.8118 416.181 24.8118V24.8118ZM416.181 18.3321C415.591 18.3334 415.014 18.5128 414.524 18.8477C414.034 19.1825 413.652 19.6577 413.427 20.2133C413.202 20.7689 413.144 21.3799 413.26 21.9691C413.376 22.5583 413.661 23.0994 414.079 23.5238C414.496 23.9483 415.028 24.2372 415.607 24.3539C416.186 24.4707 416.786 24.4101 417.331 24.1798C417.876 23.9495 418.342 23.5599 418.67 23.0601C418.998 22.5604 419.172 21.9729 419.172 21.372C419.172 20.9722 419.095 20.5764 418.945 20.2071C418.794 19.8379 418.574 19.5025 418.296 19.2201C418.018 18.9377 417.688 18.714 417.325 18.5616C416.962 18.4092 416.573 18.3312 416.181 18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M427.459 21.3719C427.459 22.0127 427.272 22.6391 426.923 23.1719C426.573 23.7047 426.076 24.12 425.495 24.3652C424.913 24.6104 424.274 24.6745 423.657 24.5495C423.039 24.4245 422.473 24.116 422.028 23.6629C421.583 23.2098 421.28 22.6325 421.157 22.004C421.034 21.3755 421.097 20.7241 421.338 20.1321C421.579 19.5401 421.986 19.0341 422.51 18.6781C423.033 18.3221 423.648 18.1321 424.277 18.1321C425.121 18.1321 425.93 18.4734 426.527 19.081C427.124 19.6886 427.459 20.5127 427.459 21.3719V21.3719Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M424.278 24.8118C423.61 24.8118 422.957 24.6101 422.402 24.2321C421.846 23.8541 421.413 23.3169 421.158 22.6883C420.902 22.0598 420.835 21.3682 420.965 20.7009C421.096 20.0336 421.417 19.4207 421.89 18.9396C422.362 18.4586 422.964 18.131 423.619 17.9982C424.275 17.8655 424.954 17.9336 425.571 18.194C426.188 18.4543 426.716 18.8952 427.087 19.4609C427.458 20.0266 427.656 20.6916 427.656 21.372C427.656 22.2843 427.3 23.1592 426.667 23.8043C426.033 24.4494 425.174 24.8118 424.278 24.8118V24.8118ZM424.278 18.3321C423.688 18.3334 423.112 18.5128 422.622 18.8477C422.132 19.1825 421.75 19.6577 421.525 20.2133C421.3 20.7689 421.242 21.3799 421.358 21.9691C421.474 22.5583 421.759 23.0994 422.176 23.5238C422.594 23.9483 423.126 24.2372 423.705 24.3539C424.284 24.4707 424.884 24.4101 425.429 24.1798C425.974 23.9495 426.44 23.5599 426.767 23.0601C427.095 22.5604 427.27 21.9729 427.27 21.372C427.27 20.9722 427.193 20.5764 427.042 20.2071C426.892 19.8379 426.671 19.5025 426.393 19.2201C426.116 18.9377 425.786 18.714 425.423 18.5616C425.06 18.4092 424.671 18.3312 424.278 18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M432.363 24.6118C434.12 24.6118 435.545 23.1613 435.545 21.3719C435.545 19.5826 434.12 18.1321 432.363 18.1321C430.606 18.1321 429.182 19.5826 429.182 21.3719C429.182 23.1613 430.606 24.6118 432.363 24.6118Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M432.362 24.8118C431.694 24.8118 431.041 24.6101 430.486 24.2321C429.93 23.8541 429.497 23.3169 429.242 22.6883C428.986 22.0598 428.919 21.3682 429.049 20.7009C429.18 20.0336 429.501 19.4207 429.974 18.9396C430.446 18.4586 431.048 18.131 431.703 17.9982C432.359 17.8655 433.038 17.9336 433.655 18.194C434.272 18.4543 434.8 18.8952 435.171 19.4609C435.542 20.0266 435.74 20.6916 435.74 21.372C435.74 22.2843 435.384 23.1592 434.751 23.8043C434.117 24.4494 433.258 24.8118 432.362 24.8118V24.8118ZM432.362 18.3321C431.772 18.3334 431.196 18.5128 430.706 18.8477C430.216 19.1825 429.834 19.6577 429.609 20.2133C429.384 20.7689 429.326 21.3799 429.442 21.9691C429.558 22.5583 429.843 23.0994 430.26 23.5238C430.678 23.9483 431.21 24.2372 431.789 24.3539C432.368 24.4707 432.968 24.4101 433.513 24.1798C434.058 23.9495 434.524 23.5599 434.851 23.0601C435.179 22.5604 435.354 21.9729 435.354 21.372C435.354 20.9722 435.277 20.5764 435.126 20.2071C434.976 19.8379 434.755 19.5025 434.477 19.2201C434.2 18.9377 433.87 18.714 433.507 18.5616C433.144 18.4092 432.755 18.3312 432.362 18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.447 24.6118C442.204 24.6118 443.629 23.1613 443.629 21.3719C443.629 19.5826 442.204 18.1321 440.447 18.1321C438.69 18.1321 437.266 19.5826 437.266 21.3719C437.266 23.1613 438.69 24.6118 440.447 24.6118Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M440.448 24.8118C439.78 24.8118 439.127 24.6101 438.572 24.2321C438.016 23.8541 437.583 23.3169 437.327 22.6883C437.072 22.0598 437.005 21.3682 437.135 20.7009C437.266 20.0336 437.587 19.4207 438.06 18.9396C438.532 18.4586 439.134 18.131 439.789 17.9982C440.445 17.8655 441.124 17.9336 441.741 18.194C442.358 18.4543 442.886 18.8952 443.257 19.4609C443.628 20.0266 443.826 20.6916 443.826 21.372C443.825 22.2837 443.468 23.1577 442.835 23.8024C442.202 24.4471 441.344 24.8101 440.448 24.8118V24.8118ZM440.448 18.3321C439.858 18.3321 439.281 18.5104 438.79 18.8444C438.299 19.1784 437.916 19.6532 437.69 20.2087C437.464 20.7641 437.405 21.3753 437.52 21.965C437.636 22.5547 437.92 23.0964 438.337 23.5215C438.755 23.9466 439.287 24.2361 439.866 24.3534C440.445 24.4707 441.045 24.4105 441.591 24.1804C442.136 23.9504 442.602 23.5607 442.93 23.0608C443.258 22.5609 443.433 21.9732 443.433 21.372C443.433 20.5658 443.119 19.7926 442.559 19.2225C441.999 18.6524 441.24 18.3321 440.448 18.3321V18.3321Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M395.127 21.2787C395.127 21.92 394.94 22.547 394.59 23.08C394.24 23.6131 393.742 24.0284 393.16 24.2732C392.578 24.518 391.937 24.5814 391.32 24.4553C390.702 24.3292 390.135 24.0193 389.691 23.5649C389.246 23.1104 388.944 22.5319 388.823 21.9025C388.702 21.2732 388.767 20.6214 389.01 20.0296C389.252 19.4378 389.662 18.9328 390.187 18.5784C390.712 18.224 391.329 18.0362 391.958 18.0388C392.8 18.0424 393.606 18.3853 394.2 18.9925C394.793 19.5997 395.127 20.4217 395.127 21.2787V21.2787Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M391.959 24.7186C391.29 24.7199 390.637 24.5192 390.08 24.1421C389.524 23.7649 389.09 23.2281 388.833 22.5997C388.577 21.9713 388.509 21.2794 388.638 20.6117C388.768 19.944 389.089 19.3305 389.561 18.8487C390.033 18.367 390.635 18.0387 391.291 17.9055C391.946 17.7722 392.626 17.8399 393.243 18.1001C393.861 18.3602 394.389 18.8011 394.76 19.3669C395.132 19.9328 395.33 20.5981 395.33 21.2787C395.33 22.1899 394.975 23.0638 394.343 23.7087C393.711 24.3536 392.854 24.7168 391.959 24.7186ZM391.959 18.2388C391.366 18.2375 390.787 18.4152 390.294 18.7495C389.801 19.0837 389.417 19.5595 389.189 20.1164C388.962 20.6734 388.902 21.2865 389.018 21.8781C389.133 22.4697 389.418 23.0131 389.837 23.4396C390.256 23.8661 390.789 24.1563 391.37 24.2737C391.951 24.391 392.553 24.3301 393.1 24.0987C393.647 23.8673 394.114 23.4758 394.443 22.9738C394.771 22.4718 394.945 21.8818 394.944 21.2787C394.942 20.473 394.627 19.7008 394.068 19.1311C393.508 18.5614 392.75 18.2406 391.959 18.2388V18.2388Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M400.029 16.7321C401.786 16.7321 403.211 15.2816 403.211 13.4923C403.211 11.703 401.786 10.2524 400.029 10.2524C398.272 10.2524 396.848 11.703 396.848 13.4923C396.848 15.2816 398.272 16.7321 400.029 16.7321Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M400.029 16.9322C399.361 16.9335 398.707 16.7329 398.151 16.3557C397.594 15.9785 397.16 15.4418 396.904 14.8133C396.647 14.1849 396.579 13.493 396.709 12.8253C396.838 12.1576 397.159 11.5441 397.632 11.0624C398.104 10.5806 398.706 10.2523 399.361 10.1191C400.017 9.98581 400.696 10.0535 401.314 10.3137C401.931 10.5739 402.459 11.0147 402.831 11.5806C403.202 12.1464 403.4 12.8117 403.4 13.4923C403.399 14.4029 403.043 15.2759 402.412 15.9204C401.78 16.5649 400.923 16.9287 400.029 16.9322V16.9322ZM400.029 10.4525C399.439 10.4525 398.861 10.6308 398.371 10.9648C397.88 11.2988 397.497 11.7736 397.271 12.329C397.045 12.8845 396.986 13.4957 397.101 14.0854C397.216 14.6751 397.501 15.2167 397.918 15.6418C398.336 16.067 398.868 16.3565 399.447 16.4738C400.026 16.5911 400.626 16.5309 401.171 16.3008C401.717 16.0707 402.183 15.6811 402.511 15.1812C402.839 14.6813 403.014 14.0936 403.014 13.4923C403.013 12.6866 402.697 11.9145 402.138 11.3448C401.579 10.7751 400.82 10.4542 400.029 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M411.296 13.4923C411.297 14.135 411.111 14.7636 410.762 15.2985C410.412 15.8334 409.914 16.2505 409.331 16.4971C408.748 16.7436 408.107 16.8085 407.488 16.6834C406.869 16.5584 406.3 16.249 405.854 15.7946C405.407 15.3402 405.104 14.7611 404.981 14.1307C404.858 13.5003 404.922 12.847 405.164 12.2535C405.406 11.66 405.816 11.153 406.341 10.7968C406.866 10.4406 407.483 10.2511 408.115 10.2524C408.958 10.2542 409.766 10.5961 410.362 11.2033C410.959 11.8105 411.294 12.6336 411.296 13.4923Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M408.115 16.9322C407.447 16.9335 406.793 16.7329 406.237 16.3557C405.68 15.9785 405.246 15.4418 404.989 14.8133C404.733 14.1849 404.665 13.493 404.795 12.8253C404.924 12.1576 405.245 11.5441 405.718 11.0624C406.19 10.5806 406.792 10.2523 407.447 10.1191C408.103 9.98581 408.782 10.0535 409.4 10.3137C410.017 10.5739 410.545 11.0147 410.917 11.5806C411.288 12.1464 411.486 12.8117 411.486 13.4923C411.485 14.4029 411.129 15.2759 410.497 15.9204C409.866 16.5649 409.009 16.9287 408.115 16.9322V16.9322ZM408.115 10.4525C407.525 10.4525 406.947 10.6308 406.457 10.9648C405.966 11.2988 405.583 11.7736 405.357 12.329C405.131 12.8845 405.072 13.4957 405.187 14.0854C405.302 14.6751 405.587 15.2167 406.004 15.6418C406.422 16.067 406.954 16.3565 407.533 16.4738C408.112 16.5911 408.712 16.5309 409.257 16.3008C409.803 16.0707 410.269 15.6811 410.597 15.1812C410.925 14.6813 411.1 14.0936 411.1 13.4923C411.098 12.6866 410.783 11.9145 410.224 11.3448C409.665 10.7751 408.906 10.4542 408.115 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M419.375 13.4923C419.375 14.1325 419.189 14.7584 418.84 15.2909C418.491 15.8234 417.994 16.2387 417.414 16.4843C416.833 16.7299 416.194 16.7948 415.577 16.6709C414.961 16.5469 414.394 16.2397 413.948 15.7879C413.503 15.3361 413.199 14.7601 413.074 14.1325C412.95 13.5049 413.011 12.8539 413.25 12.2617C413.489 11.6695 413.895 11.1625 414.416 10.805C414.938 10.4474 415.552 10.2551 416.18 10.2525C416.599 10.2507 417.014 10.3332 417.402 10.4953C417.789 10.6573 418.142 10.8957 418.438 11.1967C418.735 11.4977 418.971 11.8554 419.131 12.2494C419.292 12.6433 419.375 13.0657 419.375 13.4923V13.4923Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M416.181 16.9322C415.513 16.9322 414.86 16.7304 414.304 16.3525C413.748 15.9745 413.316 15.4373 413.06 14.8087C412.804 14.1802 412.737 13.4885 412.868 12.8213C412.998 12.154 413.32 11.5411 413.792 11.06C414.265 10.5789 414.866 10.2513 415.522 10.1186C416.177 9.98586 416.856 10.054 417.473 10.3143C418.091 10.5747 418.618 11.0156 418.989 11.5813C419.361 12.1469 419.559 12.812 419.559 13.4923C419.559 14.4046 419.203 15.2796 418.569 15.9247C417.936 16.5698 417.077 16.9322 416.181 16.9322V16.9322ZM416.181 10.4525C415.591 10.4538 415.014 10.6332 414.524 10.968C414.034 11.3028 413.652 11.7781 413.427 12.3336C413.202 12.8892 413.144 13.5002 413.26 14.0895C413.376 14.6787 413.661 15.2197 414.079 15.6442C414.496 16.0687 415.028 16.3575 415.607 16.4743C416.186 16.591 416.786 16.5304 417.331 16.3002C417.876 16.0699 418.342 15.6803 418.67 15.1805C418.998 14.6807 419.172 14.0933 419.172 13.4923C419.172 13.0926 419.095 12.6967 418.945 12.3275C418.794 11.9582 418.574 11.6228 418.296 11.3405C418.018 11.0581 417.688 10.8343 417.325 10.682C416.962 10.5296 416.573 10.4516 416.181 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M427.459 13.4923C427.459 14.1331 427.272 14.7595 426.923 15.2923C426.573 15.8251 426.076 16.2403 425.495 16.4855C424.913 16.7307 424.274 16.7949 423.657 16.6699C423.039 16.5449 422.473 16.2363 422.028 15.7832C421.583 15.3301 421.28 14.7528 421.157 14.1244C421.034 13.4959 421.097 12.8445 421.338 12.2525C421.579 11.6605 421.986 11.1545 422.51 10.7985C423.033 10.4425 423.648 10.2524 424.277 10.2524C425.121 10.2524 425.93 10.5938 426.527 11.2014C427.124 11.809 427.459 12.633 427.459 13.4923V13.4923Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M424.278 16.9322C423.61 16.9322 422.957 16.7304 422.402 16.3525C421.846 15.9745 421.413 15.4373 421.158 14.8087C420.902 14.1802 420.835 13.4885 420.965 12.8213C421.096 12.154 421.417 11.5411 421.89 11.06C422.362 10.5789 422.964 10.2513 423.619 10.1186C424.275 9.98586 424.954 10.054 425.571 10.3143C426.188 10.5747 426.716 11.0156 427.087 11.5813C427.458 12.1469 427.656 12.812 427.656 13.4923C427.656 14.4046 427.3 15.2796 426.667 15.9247C426.033 16.5698 425.174 16.9322 424.278 16.9322V16.9322ZM424.278 10.4525C423.688 10.4538 423.112 10.6332 422.622 10.968C422.132 11.3028 421.75 11.7781 421.525 12.3336C421.3 12.8892 421.242 13.5002 421.358 14.0895C421.474 14.6787 421.759 15.2197 422.176 15.6442C422.594 16.0687 423.126 16.3575 423.705 16.4743C424.284 16.591 424.884 16.5304 425.429 16.3002C425.974 16.0699 426.44 15.6803 426.767 15.1805C427.095 14.6807 427.27 14.0933 427.27 13.4923C427.27 13.0926 427.193 12.6967 427.042 12.3275C426.892 11.9582 426.671 11.6228 426.393 11.3405C426.116 11.0581 425.786 10.8343 425.423 10.682C425.06 10.5296 424.671 10.4516 424.278 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M432.363 16.7321C434.12 16.7321 435.545 15.2816 435.545 13.4923C435.545 11.703 434.12 10.2524 432.363 10.2524C430.606 10.2524 429.182 11.703 429.182 13.4923C429.182 15.2816 430.606 16.7321 432.363 16.7321Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M432.362 16.9322C431.694 16.9322 431.041 16.7304 430.486 16.3525C429.93 15.9745 429.497 15.4373 429.242 14.8087C428.986 14.1802 428.919 13.4885 429.049 12.8213C429.18 12.154 429.501 11.5411 429.974 11.06C430.446 10.5789 431.048 10.2513 431.703 10.1186C432.359 9.98586 433.038 10.054 433.655 10.3143C434.272 10.5747 434.8 11.0156 435.171 11.5813C435.542 12.1469 435.74 12.812 435.74 13.4923C435.74 14.4046 435.384 15.2796 434.751 15.9247C434.117 16.5698 433.258 16.9322 432.362 16.9322ZM432.362 10.4525C431.772 10.4538 431.196 10.6332 430.706 10.968C430.216 11.3028 429.834 11.7781 429.609 12.3336C429.384 12.8892 429.326 13.5002 429.442 14.0895C429.558 14.6787 429.843 15.2197 430.26 15.6442C430.678 16.0687 431.21 16.3575 431.789 16.4743C432.368 16.591 432.968 16.5304 433.513 16.3002C434.058 16.0699 434.524 15.6803 434.851 15.1805C435.179 14.6807 435.354 14.0933 435.354 13.4923C435.354 13.0926 435.277 12.6967 435.126 12.3275C434.976 11.9582 434.755 11.6228 434.477 11.3405C434.2 11.0581 433.87 10.8343 433.507 10.682C433.144 10.5296 432.755 10.4516 432.362 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M440.447 16.7321C442.204 16.7321 443.629 15.2816 443.629 13.4923C443.629 11.703 442.204 10.2524 440.447 10.2524C438.69 10.2524 437.266 11.703 437.266 13.4923C437.266 15.2816 438.69 16.7321 440.447 16.7321Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M440.448 16.9322C439.78 16.9322 439.127 16.7304 438.572 16.3525C438.016 15.9745 437.583 15.4373 437.327 14.8087C437.072 14.1802 437.005 13.4885 437.135 12.8213C437.266 12.154 437.587 11.5411 438.06 11.06C438.532 10.5789 439.134 10.2513 439.789 10.1186C440.445 9.98586 441.124 10.054 441.741 10.3143C442.358 10.5747 442.886 11.0156 443.257 11.5813C443.628 12.1469 443.826 12.812 443.826 13.4923C443.825 14.4041 443.468 15.278 442.835 15.9227C442.202 16.5674 441.344 16.9304 440.448 16.9322V16.9322ZM440.448 10.4525C439.858 10.4525 439.281 10.6308 438.79 10.9648C438.299 11.2988 437.916 11.7736 437.69 12.329C437.464 12.8845 437.405 13.4957 437.52 14.0854C437.636 14.6751 437.92 15.2167 438.337 15.6418C438.755 16.067 439.287 16.3565 439.866 16.4738C440.445 16.5911 441.045 16.5309 441.591 16.3008C442.136 16.0707 442.602 15.6811 442.93 15.1812C443.258 14.6813 443.433 14.0936 443.433 13.4923C443.433 12.6861 443.119 11.9129 442.559 11.3428C441.999 10.7727 441.24 10.4525 440.448 10.4525V10.4525Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M395.127 13.3991C395.127 14.0404 394.94 14.6673 394.59 15.2004C394.24 15.7335 393.742 16.1487 393.16 16.3935C392.578 16.6384 391.937 16.7017 391.32 16.5756C390.702 16.4496 390.135 16.1397 389.691 15.6852C389.246 15.2308 388.944 14.6523 388.823 14.0229C388.702 13.3936 388.767 12.7417 389.01 12.15C389.252 11.5582 389.662 11.0531 390.187 10.6987C390.712 10.3443 391.329 10.1566 391.958 10.1592C392.8 10.1627 393.606 10.5056 394.2 11.1128C394.793 11.72 395.127 12.5421 395.127 13.3991V13.3991Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M391.959 16.8389C391.29 16.8402 390.637 16.6396 390.08 16.2624C389.524 15.8853 389.09 15.3485 388.833 14.7201C388.577 14.0916 388.509 13.3998 388.638 12.7321C388.768 12.0644 389.089 11.4508 389.561 10.9691C390.033 10.4874 390.635 10.1591 391.291 10.0258C391.946 9.89255 392.626 9.96028 393.243 10.2204C393.861 10.4806 394.389 10.9215 394.76 11.4873C395.132 12.0531 395.33 12.7184 395.33 13.3991C395.33 14.3102 394.975 15.1841 394.343 15.8291C393.711 16.474 392.854 16.8371 391.959 16.8389V16.8389ZM391.959 10.3592C391.366 10.3579 390.787 10.5356 390.294 10.8699C389.801 11.2041 389.417 11.6798 389.189 12.2368C388.962 12.7937 388.902 13.4069 389.018 13.9984C389.133 14.59 389.418 15.1335 389.837 15.5599C390.256 15.9864 390.789 16.2767 391.37 16.394C391.951 16.5114 392.553 16.4505 393.1 16.2191C393.647 15.9877 394.114 15.5962 394.443 15.0941C394.771 14.5921 394.945 14.0022 394.944 13.3991C394.942 12.5934 394.627 11.8212 394.068 11.2515C393.508 10.6818 392.75 10.361 391.959 10.3592V10.3592Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M469.101 69.2832H435.982V118.688H469.101V69.2832Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M466.253 70.7231H438.568V77.3095H466.253V70.7231Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 69.2832L461.266 77.3095H466.254V69.2832H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M466.253 78.7561H438.568V85.3425H466.253V78.7561Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 77.3096L461.266 85.3425H466.254V77.3096H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M466.253 86.9424H438.568V93.5287H466.253V86.9424Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 85.4958L461.266 93.5288H466.254V85.4958H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M466.253 94.9553H438.568V101.542H466.253V94.9553Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 93.5154L461.266 101.542H466.254V93.5154H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M466.253 102.975H438.568V109.561H466.253V102.975Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 101.535L461.266 109.561H466.254V101.535H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M466.253 110.995H438.568V117.581H466.253V110.995Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M464.185 109.548L461.266 117.581H466.254V109.548H464.185Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M435.983 90.749H303.705V92.3556H435.983V90.749Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M435.983 92.4021H303.705V103.782H435.983V92.4021Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M436.095 104.995H303.816V116.374H436.095V104.995Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M435.983 75.2295H303.705V90.6888H435.983V75.2295Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M435.983 73.8096H303.705V75.4162H435.983V73.8096Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M436.095 103.308H303.816V104.915H436.095V103.308Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M469.096 115.961H303.816V136.814H469.096V115.961Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M474.994 276.447H6.58008V289H474.994V276.447Z"
                  fill="#263238"
                />
                <path
                  d="M102.918 64.7035L6.58008 276.447H475.001L374.061 63.2969L102.918 64.7035Z"
                  fill="#455A64"
                />
                <path
                  d="M384.174 271.021L353.629 175.272H124.953L96.7378 271.014L96.1094 270.821L124.469 174.605H354.1L384.796 270.814L384.174 271.021Z"
                  fill="white"
                />
                <path
                  d="M165.98 270.974L165.332 270.861L172.952 226.436H305.97L306.016 226.716L313.243 270.861L312.595 270.974L305.42 227.103H173.502L165.98 270.974Z"
                  fill="white"
                />
                <path
                  d="M289.597 175.125C289.558 175.072 285.996 169.745 278.232 164.459C271.07 159.646 258.77 153.853 240.826 153.853H240.786C229.991 153.853 214.542 155.613 202.241 163.932C194.889 168.905 192.12 173.932 192.094 173.992L191.518 173.672C191.629 173.472 202.961 153.206 240.786 153.186H240.826C275.522 153.186 289.996 174.518 290.14 174.732L289.597 175.125Z"
                  fill="white"
                />
                <path
                  d="M239.616 101.462C215.053 101.462 195.1 88.309 195.1 72.1297C195.104 69.6992 195.548 67.2902 196.409 65.0234L197.018 65.2634C196.182 67.4527 195.751 69.7807 195.748 72.1297C195.748 87.929 215.433 100.795 239.609 100.795C263.785 100.795 283.471 87.9423 283.471 72.1297C283.477 69.5398 282.969 66.9753 281.978 64.5901L282.58 64.3301C283.628 66.797 284.171 69.4553 284.178 72.1431C284.158 88.309 264.172 101.462 239.616 101.462Z"
                  fill="white"
                />
                <path
                  d="M465.22 271.248H13.7871L13.9966 270.774L105.595 69.8567H369.87L369.962 70.05L465.22 271.248ZM14.8215 270.581H464.179L369.464 70.5233H106.014L14.8215 270.581Z"
                  fill="white"
                />
                <path
                  d="M376.363 23.8186H129.6V53.0906H376.363V23.8186Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M376.364 53.0906C376.364 52.544 376.364 42.8444 376.292 23.8186L376.364 23.8919L129.614 23.9919L129.784 23.8186V53.0906L129.614 52.9173L376.377 53.0906L129.614 53.2639H129.443V23.6453H129.627L376.377 23.7386H376.455V23.8186C376.39 42.8444 376.364 52.524 376.364 53.0906Z"
                  fill="#263238"
                />
                <path
                  d="M203.655 35.6049H200.637V33.365H209.442V35.6049H206.437V43.3779H203.655V35.6049Z"
                  fill="#263238"
                />
                <path
                  d="M218.377 41.1913V43.3846H210.482V33.385H218.194V35.5716H213.238V37.2582H217.605V39.3781H213.238V41.1913H218.377Z"
                  fill="#263238"
                />
                <path
                  d="M226.515 41.4311H222.351L221.579 43.3777H218.744L223.084 33.3782H225.827L230.181 43.3777H227.287L226.515 41.4311ZM225.677 39.3379L224.413 36.138L223.15 39.3379H225.677Z"
                  fill="#263238"
                />
                <path
                  d="M239.845 43.3779V38.0448L237.318 42.3712H236.08L233.534 38.2114V43.3779H230.961V33.3783H233.252L236.709 39.1581L240.08 33.365H242.365L242.398 43.3645L239.845 43.3779Z"
                  fill="#263238"
                />
                <path
                  d="M251.209 33.365V43.3645H249.821V34.6049H247.602V33.365H251.209Z"
                  fill="#263238"
                />
                <path
                  d="M254.868 43.1378C254.269 42.9569 253.716 42.6478 253.244 42.2312L253.768 41.1179C254.19 41.4885 254.679 41.7715 255.208 41.9512C255.785 42.1634 256.395 42.2717 257.008 42.2712C257.644 42.3153 258.279 42.1693 258.835 41.8512C259.023 41.7344 259.178 41.5697 259.285 41.3733C259.392 41.1769 259.446 40.9557 259.444 40.7312C259.45 40.5751 259.423 40.4195 259.366 40.2746C259.308 40.1298 259.221 39.9991 259.11 39.8913C258.878 39.6684 258.601 39.5 258.298 39.398C257.977 39.2846 257.519 39.158 256.93 39.0113C256.321 38.8719 255.722 38.6915 255.136 38.4713C254.687 38.2912 254.287 38.003 253.971 37.6314C253.631 37.2026 253.459 36.6615 253.486 36.1114C253.479 35.5981 253.623 35.0944 253.899 34.6648C254.205 34.2063 254.635 33.8475 255.136 33.6316C255.801 33.3565 256.514 33.2248 257.231 33.2449C257.81 33.2457 258.387 33.3241 258.946 33.4782C259.463 33.613 259.952 33.8386 260.393 34.1449L259.928 35.2915C259.522 35.0275 259.081 34.8233 258.619 34.6848C258.173 34.5488 257.71 34.4792 257.244 34.4782C256.616 34.4332 255.989 34.5869 255.45 34.9182C255.266 35.0449 255.116 35.2158 255.012 35.4157C254.908 35.6157 254.854 35.8386 254.855 36.0648C254.849 36.2214 254.877 36.3774 254.936 36.5222C254.994 36.6671 255.083 36.7975 255.195 36.9047C255.436 37.1276 255.719 37.2978 256.026 37.4047C256.36 37.5181 256.812 37.6447 257.382 37.778C257.988 37.9223 258.585 38.1048 259.169 38.3247C259.616 38.5024 260.013 38.7884 260.327 39.158C260.668 39.5784 260.841 40.1138 260.812 40.6579C260.817 41.1677 260.671 41.6672 260.393 42.0912C260.069 42.5627 259.613 42.923 259.084 43.1245C258.414 43.3976 257.697 43.5269 256.976 43.5044C256.258 43.4974 255.547 43.3736 254.868 43.1378V43.1378Z"
                  fill="#263238"
                />
                <path
                  d="M264.682 34.6049H261.311V33.365H269.448V34.6049H266.076V43.3779H264.682V34.6049Z"
                  fill="#263238"
                />
                <path
                  d="M283.214 33.365V43.3645H281.806V38.8981H276.157V43.3645H274.775V33.365H276.176V37.6648H281.826V33.365H283.214Z"
                  fill="#263238"
                />
                <path
                  d="M292.452 40.8712H287.214L286.134 43.3777H284.688L289.139 33.3782H290.534L294.998 43.3777H293.525L292.452 40.8712ZM291.961 39.7246L289.833 34.8181L287.712 39.7246H291.961Z"
                  fill="#263238"
                />
                <path
                  d="M296.445 33.365H297.853V42.1313H303.175V43.3779H296.445V33.365Z"
                  fill="#263238"
                />
                <path
                  d="M306.2 34.6048V38.098H311.136V39.3246H306.2V43.3777H304.799V33.3782H311.738V34.6181L306.2 34.6048Z"
                  fill="#263238"
                />
                <path
                  d="M187.335 37.2513C187.886 37.0024 188.353 36.5944 188.679 36.0778C189.005 35.5612 189.175 34.9587 189.168 34.3448C189.193 33.9486 189.14 33.5513 189.011 33.1767C188.882 32.8021 188.68 32.4579 188.417 32.1648C188.154 31.8717 187.835 31.6357 187.481 31.471C187.126 31.3064 186.742 31.2164 186.352 31.2065C185.963 31.1966 185.575 31.267 185.213 31.4135C184.85 31.56 184.521 31.7795 184.244 32.0589C183.967 32.3383 183.748 32.6719 183.601 33.0395C183.454 33.4071 183.381 33.8012 183.387 34.1981C183.897 34.4855 184.331 34.8959 184.649 35.3933C184.967 35.8907 185.161 36.46 185.214 37.0513C185.214 38.0113 185.122 39.2446 184.048 40.0312C184.738 40.1714 185.37 40.5219 185.86 41.0362C186.35 41.5506 186.675 42.2044 186.791 42.9111H191.505C191.505 42.9111 191.747 37.9313 187.335 37.2513Z"
                  fill="#240155"
                />
                <path
                  d="M182.418 40.2377C182.97 39.9891 183.438 39.5814 183.765 39.0649C184.092 38.5483 184.263 37.9457 184.257 37.3312C184.284 36.9276 184.229 36.5227 184.096 36.1416C183.962 35.7606 183.754 35.4115 183.482 35.116C183.211 34.8205 182.883 34.5849 182.519 34.4239C182.154 34.2628 181.761 34.1797 181.364 34.1797C180.967 34.1797 180.574 34.2628 180.209 34.4239C179.845 34.5849 179.517 34.8205 179.246 35.116C178.974 35.4115 178.765 35.7606 178.632 36.1416C178.499 36.5227 178.444 36.9276 178.47 37.3312C178.458 37.9522 178.627 38.563 178.955 39.0863C179.284 39.6096 179.758 40.0219 180.316 40.2711C175.865 40.9377 176.068 45.8775 176.068 45.8775L186.595 45.9308C186.595 45.9308 186.837 40.911 182.418 40.2377Z"
                  fill="#240155"
                />
                <path
                  d="M348.424 29.7717V41.4712L356.28 48.0376L363.88 41.2179L363.847 29.7717H348.424Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M349.602 40.8912L352.921 43.891V30.825H349.602V40.8912Z"
                  fill="#240155"
                />
                <path
                  d="M362.696 40.8912L359.377 43.891V30.825H362.696V40.8912Z"
                  fill="#240155"
                />
                <path
                  d="M356.156 46.4109L353.668 44.3043V30.825H358.637V44.3777L356.156 46.4109Z"
                  fill="#240155"
                />
                <path
                  d="M81.8066 15.5857V58.4438L110.572 82.4893L138.427 57.5171L138.303 15.5857H81.8066Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M110.578 82.9292L81.4785 58.597V15.2656H138.61L138.734 57.677L138.623 57.777L110.578 82.9292ZM82.1332 58.2637L110.558 82.0359L138.099 57.3704L137.955 15.9189H82.1135L82.1332 58.2637Z"
                  fill="#263238"
                />
                <path
                  d="M86.1191 56.3038L98.276 67.3033V19.4521H86.1191V56.3038Z"
                  fill="#240155"
                />
                <path
                  d="M134.072 56.3038L121.922 67.3033V19.4521H134.072V56.3038Z"
                  fill="#240155"
                />
                <path
                  d="M110.113 76.5296L100.994 68.8299V19.4521H119.2V69.0899L110.113 76.5296Z"
                  fill="#240155"
                />
                <path
                  d="M139.854 254.243C144.175 249.843 144.175 242.709 139.854 238.31C135.534 233.91 128.528 233.91 124.208 238.31C119.887 242.709 119.887 249.843 124.208 254.243C128.528 258.642 135.534 258.642 139.854 254.243Z"
                  fill="white"
                />
                <path
                  d="M132.062 235.009C129.873 235.009 127.734 235.67 125.915 236.908C124.096 238.146 122.678 239.905 121.84 241.964C121.003 244.022 120.784 246.288 121.211 248.473C121.638 250.659 122.691 252.666 124.238 254.242C125.786 255.817 127.757 256.89 129.903 257.325C132.049 257.76 134.274 257.536 136.295 256.684C138.317 255.831 140.045 254.387 141.261 252.534C142.476 250.682 143.125 248.503 143.125 246.275C143.126 244.795 142.84 243.33 142.285 241.963C141.729 240.596 140.914 239.353 139.887 238.307C138.859 237.261 137.639 236.431 136.296 235.865C134.954 235.299 133.515 235.008 132.062 235.009V235.009ZM141.881 241.809C141.633 241.702 141.436 241.635 141.351 241.609C140.438 240.211 139.298 238.983 137.98 237.976C137.674 237.386 137.271 236.853 136.788 236.402C139.051 237.548 140.852 239.459 141.881 241.809V241.809ZM132.062 235.262C133.42 235.26 134.767 235.522 136.029 236.036C136.728 236.567 137.317 237.233 137.764 237.996C136.814 238.391 135.93 238.935 135.145 239.609C133.495 238.676 130.674 238.356 130.176 238.276C129.789 237.479 129.259 236.765 128.612 236.169C129.205 235.809 129.844 235.534 130.51 235.349C131.025 235.283 131.543 235.254 132.062 235.262ZM136.579 244.069C135.636 245.451 134.503 246.688 133.214 247.742C131.659 247.291 130.061 247.007 128.448 246.895C127.477 245.497 126.97 243.82 127.001 242.109L130.157 238.562C130.608 238.609 133.469 238.936 135.06 239.849C135.374 241.009 136.376 243.629 136.546 244.069H136.579ZM128.788 235.762C128.615 235.853 128.447 235.953 128.284 236.062C127.385 236.432 126.51 236.862 125.666 237.349C126.615 236.65 127.67 236.114 128.788 235.762V235.762ZM123.905 238.989C123.493 239.845 123.269 240.782 123.25 241.735C122.3 242.731 121.605 243.949 121.227 245.282C121.443 242.943 122.391 240.737 123.931 238.989H123.905ZM123.427 241.929C124.671 242.109 126.222 242.162 126.7 242.182C126.691 243.911 127.21 245.6 128.186 247.015C127.34 248.185 126.646 249.463 126.124 250.815C124.957 251.025 123.755 250.759 122.779 250.075C121.994 248.776 121.511 247.313 121.365 245.795C121.721 244.344 122.441 243.012 123.453 241.929H123.427ZM128.134 256.515C126.075 255.694 124.31 254.255 123.073 252.388H123.126L123.047 252.222C122.82 251.64 122.739 251.01 122.811 250.388C123.594 250.89 124.506 251.138 125.43 251.102C125.666 251.102 125.914 251.088 126.176 251.062C126.461 251.536 126.773 251.993 127.112 252.428C127.753 253.296 128.543 254.039 129.443 254.621C129.353 255.258 129.353 255.905 129.443 256.541C129.007 256.592 128.567 256.583 128.134 256.515ZM137.541 255.728C135.879 256.734 133.982 257.263 132.049 257.261C131.615 257.26 131.183 257.233 130.752 257.181C130.354 257.058 129.987 256.846 129.679 256.561C129.579 255.928 129.579 255.282 129.679 254.648C131.204 254.315 132.646 253.666 133.914 252.742C134.196 252.942 135.184 253.522 137.24 253.522H137.895C137.944 254.221 137.782 254.919 137.43 255.521L137.286 255.701L137.541 255.728ZM137.986 253.248C135.446 253.408 134.294 252.688 134.058 252.522C134.043 250.959 133.811 249.406 133.371 247.908C134.664 246.847 135.801 245.604 136.749 244.215C137.956 244.59 139.185 244.886 140.428 245.102C140.926 246.568 141.172 248.111 141.155 249.662C139.348 252.335 138.143 253.182 137.953 253.268L137.986 253.248ZM141.417 249.622C141.433 248.044 141.178 246.476 140.664 244.989C141.04 243.986 141.295 242.941 141.423 241.875C141.645 241.949 141.864 242.033 142.078 242.129C142.597 243.44 142.864 244.841 142.863 246.255C142.866 247.54 142.644 248.816 142.209 250.022L141.417 249.622Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M141.07 258.188C141.07 259.935 135.545 261.354 128.73 261.354C121.915 261.354 116.396 259.935 116.396 258.188C116.396 256.441 121.922 255.028 128.73 255.028C135.538 255.028 141.07 256.441 141.07 258.188Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M383.27 170.978C382.603 169.361 382.073 167.688 381.685 165.979C381.3 164.258 381.341 162.467 381.803 160.766C381.882 160.512 382.563 158.799 382.824 158.806C383.086 158.812 382.622 160.399 382.72 160.559C383.664 162.117 384.121 163.93 384.029 165.759C383.971 167.521 383.72 169.272 383.283 170.978"
                  fill="#263238"
                />
                <path
                  d="M397.541 173.019C397.541 170.979 397.259 166.772 396.945 162.972C396.782 161.001 395.896 159.165 394.463 157.83C393.03 156.494 391.156 155.757 389.214 155.766H388.814C384.5 156.039 382.314 159.926 382.7 164.306L383.217 180.005C383.263 181.352 383.823 182.627 384.777 183.561C385.732 184.495 387.006 185.012 388.33 185.005C388.997 184.999 389.656 184.86 390.27 184.595C390.884 184.331 391.441 183.945 391.908 183.461C392.376 182.977 392.745 182.403 392.995 181.774C393.245 181.144 393.37 180.471 393.364 179.792C393.364 178.718 393.364 177.912 393.364 177.912C393.364 177.912 397.502 177.238 397.541 173.019Z"
                  fill="#E6866E"
                />
                <path
                  d="M393.384 177.912C391.468 177.915 389.591 177.357 387.977 176.305C387.977 176.305 389.227 179.458 393.364 179.058L393.384 177.912Z"
                  fill="#A3594E"
                />
                <path
                  d="M395.355 166.686C395.357 166.843 395.298 166.995 395.192 167.11C395.086 167.224 394.94 167.292 394.785 167.299C394.71 167.305 394.634 167.296 394.562 167.272C394.49 167.249 394.424 167.21 394.367 167.16C394.309 167.11 394.262 167.049 394.229 166.98C394.195 166.911 394.175 166.836 394.17 166.759C394.168 166.601 394.226 166.449 394.333 166.335C394.439 166.22 394.585 166.152 394.74 166.146C394.815 166.139 394.891 166.148 394.963 166.172C395.035 166.196 395.101 166.234 395.158 166.284C395.216 166.334 395.263 166.396 395.296 166.465C395.33 166.534 395.35 166.609 395.355 166.686V166.686Z"
                  fill="#263238"
                />
                <path
                  d="M396.089 164.726C396.017 164.806 395.565 164.466 394.93 164.472C394.295 164.479 393.824 164.806 393.752 164.726C393.68 164.646 393.798 164.546 394.001 164.392C394.273 164.198 394.597 164.093 394.93 164.093C395.263 164.093 395.587 164.198 395.86 164.392C396.056 164.519 396.122 164.692 396.089 164.726Z"
                  fill="#263238"
                />
                <path
                  d="M389.47 166.799C389.472 166.956 389.413 167.107 389.307 167.22C389.2 167.334 389.055 167.4 388.901 167.405C388.825 167.413 388.749 167.404 388.677 167.381C388.604 167.358 388.537 167.319 388.48 167.269C388.422 167.219 388.376 167.157 388.342 167.088C388.309 167.018 388.289 166.943 388.285 166.865C388.283 166.708 388.342 166.556 388.448 166.441C388.554 166.327 388.7 166.259 388.855 166.252C388.931 166.246 389.007 166.255 389.079 166.279C389.152 166.303 389.218 166.342 389.276 166.393C389.333 166.444 389.38 166.506 389.413 166.576C389.447 166.646 389.466 166.721 389.47 166.799V166.799Z"
                  fill="#263238"
                />
                <path
                  d="M389.842 165.012C389.77 165.092 389.318 164.752 388.683 164.759C388.048 164.765 387.577 165.085 387.512 165.012C387.446 164.939 387.551 164.832 387.754 164.679C388.027 164.483 388.353 164.379 388.687 164.379C389.021 164.379 389.346 164.483 389.62 164.679C389.809 164.832 389.881 164.979 389.842 165.012Z"
                  fill="#263238"
                />
                <path
                  d="M392.148 169.992C392.483 169.883 392.83 169.818 393.182 169.799C393.346 169.799 393.503 169.745 393.529 169.632C393.542 169.46 393.503 169.288 393.418 169.139C393.26 168.739 393.103 168.319 392.933 167.879C392.483 166.812 392.117 165.711 391.84 164.585C392.372 165.614 392.823 166.684 393.188 167.785C393.352 168.225 393.509 168.645 393.653 169.052C393.762 169.255 393.795 169.492 393.745 169.719C393.722 169.778 393.686 169.831 393.639 169.874C393.593 169.917 393.537 169.948 393.476 169.965C393.387 169.99 393.294 170.003 393.202 170.005C392.851 170.045 392.497 170.04 392.148 169.992Z"
                  fill="#263238"
                />
                <path
                  d="M389.425 162.772C389.372 162.946 388.862 162.866 388.259 162.959C387.657 163.052 387.173 163.266 387.094 163.106C387.016 162.946 387.14 162.866 387.336 162.692C387.584 162.484 387.883 162.35 388.201 162.306C388.51 162.256 388.827 162.303 389.111 162.439C389.34 162.552 389.444 162.686 389.425 162.772Z"
                  fill="#263238"
                />
                <path
                  d="M395.572 163.059C395.467 163.206 395.022 163.059 394.492 163.059C393.961 163.059 393.523 163.186 393.418 163.059C393.313 162.932 393.418 162.832 393.628 162.692C393.883 162.513 394.188 162.419 394.498 162.426C394.807 162.421 395.11 162.517 395.362 162.699C395.559 162.832 395.618 162.986 395.572 163.059Z"
                  fill="#263238"
                />
                <path
                  d="M383.081 167.432C383.009 167.399 380.227 166.586 380.325 169.472C380.423 172.359 383.251 171.659 383.258 171.579C383.264 171.499 383.081 167.432 383.081 167.432Z"
                  fill="#E6866E"
                />
                <path
                  d="M382.347 170.519C382.347 170.519 382.301 170.559 382.216 170.599C382.158 170.623 382.096 170.636 382.033 170.636C381.97 170.636 381.908 170.623 381.85 170.599C381.663 170.487 381.51 170.327 381.404 170.135C381.298 169.943 381.244 169.726 381.247 169.505C381.229 169.258 381.267 169.009 381.359 168.779C381.383 168.687 381.428 168.603 381.491 168.534C381.553 168.464 381.631 168.411 381.719 168.379C381.775 168.363 381.834 168.366 381.888 168.389C381.941 168.412 381.986 168.453 382.013 168.505C382.053 168.585 382.013 168.645 382.053 168.652C382.092 168.659 382.112 168.599 382.053 168.479C382.035 168.409 381.993 168.347 381.935 168.305C381.855 168.249 381.756 168.225 381.66 168.239C381.544 168.268 381.438 168.325 381.35 168.407C381.262 168.488 381.195 168.591 381.156 168.705C381.045 168.961 380.998 169.24 381.018 169.519C381.016 169.775 381.087 170.026 381.222 170.242C381.356 170.459 381.549 170.631 381.778 170.739C381.855 170.759 381.936 170.761 382.014 170.745C382.092 170.729 382.166 170.695 382.229 170.645C382.347 170.585 382.36 170.519 382.347 170.519Z"
                  fill="#A3594E"
                />
                <path
                  d="M394.924 158.272C395.375 157.992 393.929 156.539 392.783 156.073C391.042 155.359 388.416 154.993 386.891 155.519C385.983 155.766 385.135 156.201 384.4 156.796C383.664 157.391 383.057 158.134 382.616 158.979C381.779 160.805 381.436 162.826 381.621 164.832C381.62 165.446 381.785 166.048 382.099 166.572C382.518 167.192 383.297 167.565 383.304 168.445C383.3 168.605 383.327 168.764 383.385 168.913C383.442 169.062 383.528 169.197 383.637 169.312C384.181 169.852 384.79 169.312 385.058 168.752C385.724 166.634 385.821 164.374 385.34 162.206C385.182 161.732 384.94 161.286 384.803 160.806C384.723 160.567 384.694 160.315 384.718 160.064C384.741 159.813 384.817 159.571 384.94 159.352C385.006 159.263 385.081 159.18 385.163 159.106C385.542 158.736 386.011 158.476 386.523 158.353C387.034 158.23 387.568 158.248 388.069 158.406C389.693 158.906 392.456 159.646 393.143 159.072C393.635 158.707 394.048 158.242 394.354 157.706L394.924 158.272Z"
                  fill="#263238"
                />
                <path
                  d="M381.483 162.186C381.207 162.092 380.959 161.929 380.762 161.711C380.565 161.493 380.426 161.228 380.356 160.941C380.287 160.653 380.29 160.352 380.366 160.066C380.442 159.781 380.587 159.519 380.789 159.306C381.038 159.046 381.378 158.846 381.503 158.499C381.566 158.096 381.528 157.683 381.391 157.299C381.342 156.986 381.364 156.666 381.456 156.363C381.549 156.061 381.709 155.784 381.924 155.555C382.139 155.325 382.403 155.15 382.695 155.042C382.988 154.934 383.301 154.897 383.61 154.933C383.648 154.312 383.857 153.714 384.214 153.209C384.571 152.704 385.061 152.312 385.627 152.079C386.194 151.846 386.814 151.782 387.415 151.893C388.016 152.003 388.574 152.286 389.024 152.706C389.182 152.892 389.379 153.038 389.601 153.133C389.956 153.162 390.312 153.081 390.622 152.899C391.216 152.714 391.859 152.775 392.41 153.069C392.96 153.364 393.374 153.869 393.561 154.473C394.02 154.224 394.554 154.162 395.055 154.3C395.557 154.438 395.987 154.766 396.26 155.216C396.533 155.666 396.627 156.205 396.523 156.723C396.42 157.242 396.126 157.7 395.702 158.006C395.942 158.301 396.087 158.664 396.117 159.046C396.146 159.428 396.058 159.81 395.865 160.139C395.762 160.299 395.627 160.435 395.468 160.537C395.309 160.639 395.13 160.705 394.943 160.73C394.757 160.755 394.568 160.739 394.388 160.683C394.208 160.627 394.042 160.533 393.902 160.406C393.855 160.497 393.788 160.576 393.707 160.637C393.625 160.697 393.531 160.738 393.432 160.756C393.332 160.773 393.23 160.767 393.133 160.737C393.036 160.708 392.948 160.656 392.874 160.586C392.587 160.283 392.423 159.88 392.416 159.459C392.41 159.04 392.319 158.627 392.147 158.246C391.78 157.579 390.962 157.439 390.242 157.326C389.224 157.145 388.192 157.06 387.159 157.073C386.12 157.089 385.107 157.405 384.239 157.986C383.613 158.503 383.097 159.145 382.724 159.874C382.352 160.602 382.13 161.4 382.072 162.219"
                  fill="#263238"
                />
                <path
                  d="M382.942 164.739C382.942 164.772 382.726 164.739 382.477 164.666C382.228 164.592 382.039 164.499 382.045 164.466C382.052 164.432 382.268 164.466 382.51 164.539C382.752 164.612 382.955 164.706 382.942 164.739Z"
                  fill="#455A64"
                />
                <path
                  d="M382.988 164.092C382.988 164.126 382.824 164.092 382.654 164.039C382.484 163.986 382.353 163.899 382.36 163.866C382.366 163.832 382.523 163.866 382.7 163.919C382.877 163.972 383.001 164.059 382.988 164.092Z"
                  fill="#455A64"
                />
                <path
                  d="M383.303 163.365C383.303 163.365 383.139 163.279 382.989 163.112C382.838 162.946 382.74 162.799 382.766 162.772C382.792 162.746 382.93 162.859 383.08 163.026C383.231 163.192 383.329 163.339 383.303 163.365Z"
                  fill="#455A64"
                />
                <path
                  d="M390.216 170.425C390.308 170.425 390.282 171.092 390.812 171.572C391.342 172.052 392.03 172.025 392.03 172.119C392.03 172.212 391.873 172.239 391.584 172.232C391.206 172.223 390.844 172.076 390.563 171.819C390.293 171.572 390.128 171.227 390.105 170.859C390.092 170.579 390.17 170.419 390.216 170.425Z"
                  fill="#263238"
                />
                <path
                  d="M372.318 185.311L375.539 193.384L372.495 215.11L371.048 225.709H365.34L366.106 213.763L367.945 197.531L372.318 185.311Z"
                  fill="#E6866E"
                />
                <path
                  d="M405.948 188.205L402.295 193.384L404.481 214.577L406.498 225.71H412.265L410.864 213.223L409.889 197.531L405.948 188.205Z"
                  fill="#E6866E"
                />
                <path
                  d="M366.105 203.184C366.105 203.184 367.146 196.297 367.834 193.851C368.521 191.404 370.033 186.131 371.853 184.425C373.673 182.718 374.871 182.891 378.138 181.818C380.58 181.011 382.563 180.291 382.563 180.291L383.316 179.251C385.365 184.845 392.298 183.525 393.62 179.251L394.229 180.238C394.229 180.238 404.474 183.685 406.118 186.238C407.761 188.791 411.525 203.39 411.525 203.39L402.091 204.024L402.275 199.064C402.275 199.064 400.966 205.104 401.424 209.85C401.817 214.037 402.733 225.676 402.733 225.676L374.825 225.583C374.825 225.583 375.618 211.277 375.722 208.557C375.794 206.557 375.205 198.637 375.205 198.637L374.596 204.217L366.105 203.184Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M384.992 183.451C384.75 183.59 384.499 183.71 384.24 183.811L382.184 184.758C381.326 185.165 380.279 185.625 379.179 186.225C377.992 186.864 376.979 187.794 376.233 188.931C375.534 190.103 375.105 191.42 374.976 192.784C374.894 193.906 374.92 195.034 375.055 196.151C375.14 197.057 375.212 197.824 375.271 198.437C375.307 198.716 375.307 198.999 375.271 199.277C375.195 199.007 375.143 198.73 375.114 198.451C375.029 197.917 374.911 197.117 374.793 196.178C374.618 195.042 374.565 193.891 374.636 192.744C374.762 191.326 375.21 189.956 375.945 188.745C376.72 187.557 377.782 186.593 379.029 185.945C380.168 185.345 381.215 184.918 382.092 184.531C382.97 184.145 383.69 183.865 384.194 183.691C384.449 183.577 384.717 183.496 384.992 183.451V183.451Z"
                  fill="#240155"
                />
                <path
                  d="M402.274 199.071C402.242 198.78 402.242 198.487 402.274 198.197C402.274 197.631 402.359 196.817 402.457 195.824C402.588 194.667 402.617 193.5 402.542 192.338C402.479 190.925 402.04 189.556 401.272 188.378C400.407 187.259 399.282 186.377 397.999 185.811C396.827 185.258 395.741 184.805 394.831 184.425L392.67 183.545C392.399 183.456 392.136 183.342 391.885 183.205C392.169 183.242 392.447 183.311 392.716 183.411C393.246 183.578 394.025 183.845 394.922 184.198C395.819 184.551 396.939 184.978 398.137 185.531C399.47 186.11 400.636 187.028 401.521 188.198C402.329 189.423 402.783 190.856 402.83 192.331C402.892 193.513 402.838 194.699 402.667 195.871C402.542 196.864 402.438 197.671 402.379 198.224C402.369 198.509 402.334 198.792 402.274 199.071V199.071Z"
                  fill="#240155"
                />
                <path
                  d="M383.087 181.225C382.741 181.388 382.382 181.52 382.014 181.618L379.061 182.571L377.019 183.238C376.285 183.471 375.5 183.711 374.708 184.045C373.882 184.372 373.121 184.848 372.462 185.451C371.786 186.133 371.247 186.944 370.878 187.838C370.502 188.742 370.172 189.666 369.889 190.604C369.601 191.511 369.333 192.398 369.091 193.271C368.606 194.958 368.2 196.491 367.867 197.777L367.081 200.764C367.005 201.143 366.9 201.515 366.767 201.877C366.752 201.778 366.752 201.677 366.767 201.577C366.797 201.386 366.85 201.106 366.924 200.737C367.068 200.004 367.29 198.951 367.579 197.657C367.867 196.364 368.233 194.818 368.737 193.124C368.973 192.278 369.228 191.384 369.516 190.458C369.796 189.503 370.131 188.566 370.518 187.651C370.873 186.739 371.415 185.916 372.108 185.235C372.801 184.554 373.63 184.032 374.537 183.705C375.349 183.371 376.148 183.145 376.881 182.925L378.937 182.325L381.922 181.478C382.303 181.363 382.693 181.279 383.087 181.225Z"
                  fill="#240155"
                />
                <path
                  d="M410.628 201.531C410.455 201.197 410.311 200.849 410.196 200.491C409.921 199.757 409.542 198.784 409.129 197.611C408.239 195.191 407.08 191.784 405.718 188.098C405.396 187.217 404.804 186.464 404.029 185.951C403.308 185.457 402.556 185.012 401.777 184.618C400.298 183.818 398.917 183.185 397.751 182.671L394.969 181.478C394.622 181.348 394.285 181.192 393.961 181.011C394.323 181.093 394.678 181.207 395.021 181.351C395.676 181.598 396.658 181.958 397.843 182.445C399.028 182.931 400.422 183.545 401.928 184.338C402.724 184.739 403.492 185.195 404.226 185.705C405.049 186.258 405.68 187.06 406.033 187.998C407.407 191.724 408.52 195.111 409.358 197.564L410.321 200.477C410.448 200.82 410.551 201.172 410.628 201.531V201.531Z"
                  fill="#240155"
                />
                <path
                  d="M391.846 198.984C392.155 199.251 392.4 199.586 392.563 199.964C392.727 200.341 392.804 200.752 392.789 201.164C392.791 201.738 392.637 202.301 392.343 202.791C392.012 203.311 391.539 203.721 390.982 203.97C390.267 204.284 389.494 204.434 388.717 204.41C388.055 204.411 387.395 204.331 386.753 204.17C386.167 204.039 385.606 203.814 385.09 203.504L386.039 201.504C386.418 201.76 386.833 201.955 387.27 202.084C387.711 202.221 388.17 202.291 388.631 202.291C389.011 202.311 389.389 202.218 389.718 202.024C389.845 201.949 389.949 201.841 390.02 201.71C390.092 201.58 390.128 201.433 390.124 201.284C390.13 201.138 390.096 200.993 390.026 200.866C389.955 200.738 389.851 200.634 389.725 200.564C389.281 200.363 388.795 200.279 388.311 200.317H385.771L386.235 194.758H392.193V196.837H388.429L388.311 198.224H388.933C389.961 198.124 390.991 198.393 391.846 198.984V198.984Z"
                  fill="#240155"
                />
                <path
                  d="M366.105 203.177L366.407 201.277L374.812 202.244L374.596 204.224L366.105 203.177Z"
                  fill="#240155"
                />
                <path
                  d="M402.092 204.03L402.295 202.477L411.047 201.597L411.519 203.397L402.092 204.03Z"
                  fill="#240155"
                />
                <path
                  d="M394.289 180.225C394.002 181.035 393.557 181.779 392.981 182.41C392.405 183.041 391.71 183.547 390.937 183.897C390.164 184.248 389.329 184.436 388.483 184.45C387.637 184.463 386.797 184.303 386.014 183.978C385.227 183.685 384.517 183.213 383.936 182.599C383.355 181.984 382.919 181.243 382.662 180.432L383.382 179.252C383.735 180.381 384.447 181.358 385.406 182.029C386.365 182.7 387.517 183.027 388.678 182.958C392.646 182.798 393.549 179.178 393.68 179.252L394.289 180.238"
                  fill="#240155"
                />
                <path
                  d="M399.342 190.918H396.271V192.991H399.342V190.918Z"
                  fill="white"
                />
                <path
                  d="M399.453 193.644C398.392 193.875 397.294 193.875 396.232 193.644C397.294 193.413 398.392 193.413 399.453 193.644V193.644Z"
                  fill="white"
                />
                <path
                  d="M380.919 192.264C380.919 192.528 380.843 192.786 380.699 193.005C380.555 193.224 380.35 193.395 380.111 193.496C379.872 193.597 379.609 193.623 379.355 193.572C379.101 193.52 378.867 193.393 378.684 193.207C378.501 193.02 378.376 192.783 378.326 192.524C378.275 192.266 378.301 191.998 378.4 191.754C378.5 191.51 378.667 191.302 378.883 191.156C379.098 191.009 379.351 190.931 379.61 190.931C379.957 190.931 380.29 191.071 380.536 191.321C380.781 191.571 380.919 191.911 380.919 192.264Z"
                  fill="white"
                />
                <path
                  d="M415.813 225.709C415.813 225.803 403.715 225.883 388.802 225.883C373.889 225.883 361.791 225.803 361.791 225.709C361.791 225.616 373.882 225.536 388.802 225.536C403.721 225.536 415.813 225.609 415.813 225.709Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M388.814 234.049C400.991 234.049 410.863 233.04 410.863 231.796C410.863 230.552 400.991 229.543 388.814 229.543C376.637 229.543 366.766 230.552 366.766 231.796C366.766 233.04 376.637 234.049 388.814 234.049Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M331.318 52.0838C331.318 49.8839 331.39 47.6107 332.274 45.6041L332.176 44.7708C331.915 44.618 331.623 44.5318 331.322 44.5196C331.022 44.5073 330.723 44.5694 330.452 44.7005C330.18 44.8316 329.944 45.0277 329.763 45.2722C329.582 45.5166 329.462 45.8021 329.413 46.1041C329.017 46.1371 328.635 46.2736 328.305 46.5004C327.975 46.7273 327.708 47.0368 327.53 47.3992C327.352 47.7616 327.268 48.1646 327.287 48.5694C327.306 48.9743 327.428 49.3673 327.639 49.7106C327.37 49.925 327.151 50.1974 326.997 50.5083C326.844 50.8191 326.76 51.1607 326.751 51.5085C326.742 51.8563 326.809 52.2019 326.947 52.5203C327.084 52.8387 327.29 53.1222 327.547 53.3504C327.378 53.5865 327.269 53.8619 327.23 54.1517C327.191 54.4415 327.224 54.7366 327.325 55.0103C327.43 55.2831 327.601 55.5244 327.821 55.7121C328.042 55.8997 328.306 56.0275 328.588 56.0836C328.414 56.6773 328.416 57.3101 328.593 57.9029C328.77 58.4957 329.114 59.0222 329.583 59.4168C329.469 59.8516 329.449 60.3066 329.525 60.7501C329.565 60.9753 329.659 61.1872 329.796 61.3681C329.934 61.5491 330.113 61.6937 330.317 61.79C330.523 61.8798 330.754 61.8923 330.968 61.8252C331.183 61.758 331.367 61.6157 331.488 61.4234C331.613 61.1105 331.641 60.7661 331.567 60.4368C331.304 57.661 331.221 54.8707 331.318 52.0838V52.0838Z"
                  fill="#240155"
                />
                <path
                  d="M343.095 47.3041C343.462 47.2592 343.835 47.309 344.178 47.4488C344.521 47.5885 344.824 47.8139 345.059 48.1041C345.282 48.4009 345.41 48.7604 345.425 49.1337C345.44 49.507 345.342 49.876 345.144 50.1906C345.393 50.5513 345.513 50.9884 345.482 51.4281C345.45 51.8678 345.271 52.2832 344.974 52.6039C345.162 52.9452 345.229 53.3417 345.165 53.7273C345.1 54.113 344.908 54.4646 344.621 54.7238L341.256 48.3774C341.712 47.7934 342.37 47.4094 343.095 47.3041Z"
                  fill="#240155"
                />
                <path
                  d="M330.158 53.0439C329.752 48.6974 331.899 44.8309 336.181 44.5376H336.58C338.508 44.5215 340.371 45.2451 341.799 46.5643C343.227 47.8836 344.114 49.7018 344.285 51.6573C344.613 55.4238 344.94 59.5969 344.94 61.6568C344.94 65.85 340.809 66.5366 340.809 66.5366L340.947 74.9362L330.61 72.7564L330.158 53.0439Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M342.596 55.0237C342.598 55.1795 342.541 55.3298 342.435 55.4431C342.33 55.5563 342.186 55.6234 342.033 55.6303C341.958 55.6376 341.883 55.6295 341.811 55.6065C341.739 55.5835 341.672 55.546 341.615 55.4962C341.558 55.4465 341.511 55.3855 341.477 55.317C341.443 55.2484 341.423 55.1736 341.418 55.097C341.416 54.9413 341.474 54.7909 341.579 54.6777C341.684 54.5645 341.828 54.4973 341.981 54.4904C342.056 54.4831 342.132 54.4912 342.204 54.5142C342.275 54.5373 342.342 54.5748 342.399 54.6245C342.457 54.6742 342.504 54.7352 342.538 54.8038C342.571 54.8723 342.591 54.9471 342.596 55.0237V55.0237Z"
                  fill="#263238"
                />
                <path
                  d="M343.475 53.4906C343.403 53.5706 342.958 53.2373 342.323 53.244C341.688 53.2506 341.229 53.5773 341.164 53.5039C341.099 53.4306 341.203 53.324 341.4 53.1706C341.673 52.9775 341.997 52.873 342.329 52.8706C342.659 52.8685 342.982 52.971 343.252 53.164C343.449 53.3173 343.514 53.4573 343.475 53.4906Z"
                  fill="#263238"
                />
                <path
                  d="M336.791 55.2504C336.793 55.4062 336.735 55.5565 336.63 55.6698C336.525 55.783 336.381 55.8501 336.228 55.857C336.153 55.8643 336.078 55.8562 336.006 55.8331C335.935 55.81 335.869 55.7724 335.812 55.7226C335.755 55.6728 335.709 55.6117 335.676 55.5432C335.642 55.4747 335.623 55.4 335.619 55.3237C335.617 55.168 335.675 55.0176 335.78 54.9044C335.885 54.7912 336.029 54.724 336.182 54.7171C336.257 54.7107 336.332 54.7195 336.403 54.743C336.474 54.7665 336.54 54.8041 336.596 54.8538C336.653 54.9034 336.699 54.9641 336.733 55.0322C336.766 55.1003 336.786 55.1744 336.791 55.2504V55.2504Z"
                  fill="#263238"
                />
                <path
                  d="M337.171 53.3639C337.105 53.4506 336.627 53.1706 335.999 53.2506C335.37 53.3306 334.945 53.6972 334.873 53.6306C334.801 53.5639 334.873 53.4506 335.076 53.2772C335.323 53.0497 335.635 52.9095 335.966 52.8773C336.292 52.835 336.622 52.9004 336.909 53.0639C337.118 53.1906 337.203 53.3239 337.171 53.3639Z"
                  fill="#263238"
                />
                <path
                  d="M339.533 58.6435C339.867 58.5384 340.212 58.4714 340.561 58.4435C340.725 58.4435 340.875 58.3969 340.901 58.2835C340.915 58.1135 340.876 57.9434 340.79 57.7969L340.299 56.5436C339.851 55.4849 339.484 54.3929 339.199 53.2771C339.736 54.2951 340.189 55.3564 340.554 56.4503L341.026 57.7036C341.135 57.907 341.167 58.144 341.117 58.3702C341.093 58.4281 341.056 58.4798 341.01 58.5213C340.964 58.5629 340.908 58.5932 340.849 58.6102C340.76 58.6376 340.667 58.6533 340.574 58.6569C340.228 58.7004 339.878 58.6959 339.533 58.6435V58.6435Z"
                  fill="#263238"
                />
                <path
                  d="M337.236 50.584C337.177 50.7574 336.542 50.684 335.802 50.7774C335.062 50.8707 334.46 51.0907 334.362 50.9307C334.264 50.7707 334.421 50.6907 334.656 50.5174C334.978 50.3064 335.343 50.1741 335.723 50.1307C336.103 50.0791 336.49 50.1226 336.849 50.2574C337.124 50.364 337.262 50.524 337.236 50.584Z"
                  fill="#240155"
                />
                <path
                  d="M343.2 51.5039C343.089 51.6505 342.65 51.5039 342.126 51.5039C341.603 51.5039 341.157 51.6105 341.053 51.4572C340.948 51.3039 341.053 51.2372 341.269 51.0972C341.529 50.9294 341.831 50.8436 342.139 50.8508C342.446 50.8579 342.745 50.9575 342.997 51.1372C343.187 51.2839 343.246 51.4305 343.2 51.5039Z"
                  fill="#240155"
                />
                <path
                  d="M330.52 56.1504C330.448 56.1504 327.685 55.3238 327.796 58.1503C327.908 60.9769 330.709 60.3102 330.716 60.2302C330.723 60.1502 330.52 56.1504 330.52 56.1504Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M329.811 59.1902C329.811 59.1902 329.765 59.2302 329.68 59.2702C329.622 59.2947 329.56 59.3074 329.497 59.3074C329.434 59.3074 329.372 59.2947 329.314 59.2702C329.128 59.1616 328.974 59.004 328.868 58.8141C328.762 58.6241 328.708 58.4086 328.712 58.1902C328.694 57.9453 328.73 57.6995 328.816 57.4702C328.84 57.3799 328.884 57.2966 328.946 57.2271C329.007 57.1576 329.084 57.1038 329.17 57.0703C329.226 57.0527 329.286 57.0558 329.34 57.079C329.394 57.1022 329.438 57.1439 329.464 57.1969C329.51 57.2703 329.464 57.3302 329.51 57.3369C329.556 57.3436 329.563 57.2836 329.51 57.1703C329.494 57.0974 329.452 57.0332 329.392 56.9903C329.312 56.9352 329.213 56.9137 329.117 56.9303C329.002 56.9556 328.895 57.0124 328.809 57.0946C328.722 57.1767 328.659 57.2812 328.626 57.3969C328.516 57.6501 328.469 57.9272 328.489 58.2035C328.49 58.4581 328.563 58.7071 328.699 58.9209C328.834 59.1347 329.027 59.3045 329.255 59.4102C329.331 59.4287 329.411 59.43 329.488 59.4138C329.565 59.3977 329.637 59.3646 329.7 59.3168C329.805 59.2835 329.818 59.1902 329.811 59.1902Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M344.208 46.9842C344.162 46.7257 344.043 46.4866 343.865 46.2969C343.687 46.1071 343.457 45.9752 343.206 45.9175C343.318 45.669 343.343 45.3888 343.276 45.1239C343.21 44.859 343.056 44.6254 342.84 44.4622C342.625 44.299 342.361 44.2161 342.093 44.2274C341.824 44.2387 341.568 44.3435 341.366 44.5243C341.357 44.3291 341.302 44.1391 341.206 43.9699C341.11 43.8007 340.976 43.6574 340.815 43.5517C340.653 43.4461 340.469 43.3812 340.278 43.3625C340.087 43.3438 339.895 43.3719 339.717 43.4443C339.732 43.2079 339.667 42.9733 339.532 42.7799C339.398 42.5865 339.202 42.446 338.978 42.382C338.754 42.3179 338.516 42.3342 338.302 42.4281C338.088 42.522 337.913 42.6878 337.805 42.8977C337.657 42.676 337.462 42.4913 337.234 42.3572C337.006 42.2231 336.752 42.1432 336.489 42.1233C336.227 42.1034 335.963 42.1442 335.718 42.2425C335.474 42.3408 335.254 42.4941 335.075 42.691C334.552 42.5303 333.99 42.5705 333.494 42.8039C332.998 43.0374 332.603 43.4478 332.385 43.9576C331.963 43.9915 331.562 44.1522 331.231 44.4193C330.9 44.6864 330.654 45.0478 330.525 45.4576C330.254 45.4835 329.995 45.5814 329.772 45.7414C329.55 45.9015 329.372 46.1181 329.258 46.3696C329.143 46.6212 329.095 46.8989 329.119 47.1752C329.143 47.4515 329.237 47.7166 329.393 47.9441C329.24 48.0353 329.109 48.1613 329.012 48.3123C328.914 48.4633 328.852 48.6352 328.831 48.8146C328.809 48.994 328.829 49.176 328.887 49.3465C328.946 49.5169 329.043 49.6713 329.17 49.7974C328.975 49.8943 328.81 50.045 328.694 50.2323C328.579 50.4196 328.517 50.6361 328.516 50.8573C328.522 51.0723 328.586 51.2813 328.702 51.4612C328.817 51.6412 328.979 51.7852 329.17 51.8773C328.791 51.9306 328.64 52.4439 328.758 52.8106C328.876 53.1772 329.151 53.4772 329.301 53.8372C329.452 54.1972 329.668 54.5505 329.668 54.5505C329.553 54.677 329.475 54.8327 329.44 55.0011C329.405 55.1695 329.416 55.3443 329.471 55.5069C329.526 55.6696 329.623 55.814 329.753 55.925C329.882 56.0359 330.038 56.1092 330.205 56.1371V56.1371C330.689 57.2704 331.514 58.4436 331.462 56.4637C331.462 56.1237 331.939 55.9971 332.116 55.7104C332.347 55.3919 332.528 55.0388 332.653 54.6638C332.709 54.4753 332.703 54.2735 332.637 54.0885C332.571 53.9035 332.448 53.7452 332.286 53.6372C332.503 53.5433 332.691 53.3938 332.833 53.2033C332.976 53.0128 333.067 52.7878 333.098 52.5506C333.153 52.0971 333.134 51.6374 333.039 51.1906C332.908 50.524 332.784 49.804 332.653 49.1107C333.122 49.0896 333.576 48.938 333.966 48.6724C334.356 48.4068 334.667 48.0373 334.866 47.6041C335.038 47.7231 335.232 47.8038 335.437 47.8407C335.642 47.8776 335.852 47.87 336.053 47.8184C336.255 47.7668 336.443 47.6723 336.607 47.5411C336.77 47.41 336.904 47.2452 337 47.0575C337.17 47.5207 337.507 47.9009 337.942 48.1211C338.377 48.3413 338.878 48.3853 339.344 48.2441C339.245 48.7907 340.208 49.2841 340.738 49.424C341.147 49.4756 341.561 49.3889 341.916 49.1774C341.916 49.1774 342.82 49.7174 343.311 49.5107C343.802 49.3041 344.443 48.6708 344.122 48.1774C344.248 47.7932 344.278 47.3829 344.208 46.9842Z"
                  fill="#240155"
                />
                <path
                  d="M344.823 59.0837C344.714 59.0137 344.591 58.9682 344.463 58.9502C344.335 58.9323 344.205 58.9422 344.081 58.9794C343.957 59.0166 343.843 59.0802 343.745 59.166C343.647 59.2518 343.568 59.3578 343.514 59.477C343.391 59.3133 343.227 59.1861 343.039 59.1087C342.852 59.0313 342.647 59.0066 342.447 59.0371C342.248 59.0675 342.062 59.1516 341.906 59.2806C341.751 59.4096 341.632 59.5787 341.563 59.7704C341.501 59.6323 341.407 59.5117 341.289 59.4186C341.172 59.3256 341.034 59.263 340.887 59.2361C340.74 59.2093 340.589 59.219 340.447 59.2644C340.305 59.3098 340.176 59.3897 340.07 59.497C339.989 59.3755 339.874 59.2815 339.74 59.2268C339.606 59.1722 339.459 59.1595 339.318 59.1904C339.333 59.0573 339.309 58.9225 339.248 58.8036C339.188 58.6847 339.093 58.5871 338.977 58.5237C338.854 58.4595 338.717 58.4311 338.579 58.4416C338.442 58.4522 338.31 58.5014 338.198 58.5837C338.11 58.45 337.996 58.3358 337.863 58.2482C337.73 58.1605 337.581 58.1012 337.425 58.0738C337.269 58.0464 337.109 58.0514 336.955 58.0887C336.801 58.1259 336.656 58.1945 336.529 58.2904C336.479 58.1682 336.395 58.0636 336.288 57.99C336.18 57.9164 336.053 57.8771 335.923 57.8771C335.793 57.8771 335.666 57.9164 335.559 57.99C335.451 58.0636 335.367 58.1682 335.318 58.2904C335.177 58.1226 334.989 58.0026 334.78 57.9466C334.57 57.8906 334.349 57.9012 334.146 57.9771C334.141 57.8774 334.115 57.7799 334.069 57.692C334.022 57.604 333.957 57.5278 333.878 57.4689C333.799 57.4101 333.708 57.37 333.611 57.3519C333.515 57.3337 333.416 57.3377 333.321 57.3638C333.426 57.0305 332.915 56.8705 332.666 56.6305C332.571 56.5044 332.468 56.3842 332.359 56.2705C332.234 56.1705 332.018 56.1505 331.933 56.2705C331.965 56.1337 331.946 55.9897 331.879 55.8665C331.813 55.7433 331.704 55.6497 331.573 55.6039C331.439 55.5583 331.293 55.5613 331.161 55.6123C331.028 55.6633 330.917 55.7592 330.846 55.8839C330.788 56.0354 330.753 56.195 330.742 56.3572C330.65 56.8772 330.336 57.4838 330.742 57.8571C330.814 57.9238 330.899 57.9771 330.925 58.0638C330.951 58.1504 330.814 58.3571 330.801 58.5171C330.787 58.6771 330.958 58.8437 331.03 59.0104C331.101 59.2744 331.101 59.5531 331.03 59.817C331.03 60.0837 331.161 60.4303 331.442 60.4103C331.337 60.6086 331.308 60.8395 331.36 61.0586C331.411 61.2776 331.541 61.4694 331.724 61.5969C331.672 61.7126 331.646 61.8379 331.646 61.9647C331.645 62.0914 331.672 62.2169 331.722 62.3327C331.773 62.4485 331.847 62.5521 331.94 62.6367C332.033 62.7213 332.142 62.7849 332.26 62.8236C332.175 62.9017 332.122 63.01 332.113 63.1263C332.103 63.2427 332.137 63.3585 332.208 63.4502C332.36 63.635 332.556 63.7772 332.778 63.8635C332.733 63.8906 332.694 63.9269 332.663 63.97C332.633 64.0131 332.611 64.0621 332.6 64.114C332.589 64.1659 332.589 64.2196 332.599 64.2717C332.609 64.3238 332.63 64.3732 332.66 64.4168C332.799 64.5907 332.993 64.7088 333.21 64.7501C333.301 64.766 333.386 64.8102 333.452 64.8768C333.544 65.0235 333.406 65.2101 333.452 65.3768C333.498 65.5434 333.864 65.7168 333.969 65.9567C334.074 66.1967 333.93 66.4634 334.1 66.6234C334.27 66.7834 334.395 66.71 334.539 66.7634C334.8 66.8567 334.912 67.1434 335.075 67.3633C335.425 67.7408 335.884 67.9953 336.385 68.09L337.17 68.27C337.694 68.3766 338.224 68.4433 338.754 68.5166C339.016 68.55 339.344 68.5566 339.488 68.3433C339.587 68.4446 339.706 68.5223 339.838 68.5709C339.97 68.6195 340.111 68.6378 340.25 68.6244C340.39 68.611 340.525 68.5663 340.645 68.4935C340.766 68.4207 340.869 68.3216 340.948 68.2033C341.436 68.282 341.935 68.2003 342.375 67.97L342.846 67.7833C343.317 67.5967 343.841 67.35 343.985 66.8834C344.13 66.8635 344.269 66.8103 344.39 66.7278C344.512 66.6452 344.614 66.5355 344.687 66.407C344.761 66.2785 344.805 66.1345 344.816 65.986C344.827 65.8375 344.805 65.6885 344.751 65.5501C344.804 65.5586 344.858 65.5564 344.91 65.5436C344.962 65.5307 345.011 65.5075 345.054 65.4753C345.098 65.4431 345.134 65.4025 345.162 65.3558C345.19 65.3092 345.208 65.2574 345.216 65.2034C345.228 64.9919 345.203 64.7799 345.144 64.5768C345.006 63.7235 345.491 62.8702 345.393 62.0103C345.321 61.417 344.967 60.817 345.157 60.2437C345.211 60.1307 345.244 60.0087 345.255 59.8837C345.254 59.8521 345.247 59.821 345.234 59.7924C345.221 59.7638 345.202 59.7384 345.179 59.7176C345.155 59.6969 345.128 59.6814 345.098 59.6721C345.068 59.6628 345.037 59.66 345.006 59.6637C345.038 59.5759 345.047 59.4814 345.033 59.389C345.018 59.2967 344.982 59.2095 344.925 59.1356C344.869 59.0617 344.795 59.0035 344.711 58.9665C344.627 58.9294 344.535 58.9147 344.443 58.9237"
                  fill="#240155"
                />
                <path
                  d="M337.674 59.1035C337.779 59.1035 337.786 59.7702 338.381 60.2901C338.977 60.8101 339.691 60.6968 339.691 60.7968C339.691 60.8968 339.527 60.9301 339.219 60.9434C338.816 60.954 338.422 60.8194 338.106 60.5634C337.807 60.3155 337.612 59.9599 337.563 59.5702C337.556 59.2768 337.622 59.1035 337.674 59.1035Z"
                  fill="white"
                />
                <path
                  d="M319.442 74.5962L322.656 82.6692L319.619 104.395L318.172 114.994H312.457L313.23 103.048L315.069 86.8223L319.442 74.5962Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M353.071 77.4895L349.418 82.6693L351.598 103.862L353.621 114.994H359.388L357.987 102.508L357.012 86.8224L353.071 77.4895Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M313.229 92.522C313.229 92.522 314.269 85.6357 314.95 83.1891C315.631 80.7426 317.156 75.4695 318.976 73.7629C320.796 72.0563 321.994 72.2296 325.254 71.1563C327.703 70.3497 329.686 69.6297 329.686 69.6297L330.439 68.5964C332.488 74.1829 339.559 72.9029 340.914 68.6298L341.385 69.5764C341.385 69.5764 351.63 73.0229 353.273 75.5761C354.917 78.1293 358.674 92.7287 358.674 92.7287L349.247 93.362L349.431 88.4022C349.431 88.4022 348.121 94.4419 348.58 99.1951C348.972 103.375 349.889 115.014 349.889 115.014L321.988 114.921C321.988 114.921 322.78 100.615 322.885 97.8951C322.957 95.8952 322.367 87.9756 322.367 87.9756L321.759 93.5553L313.229 92.522Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M332.11 72.7363C331.875 72.885 331.625 73.0079 331.364 73.103L329.309 74.0429C328.451 74.4562 327.397 74.9162 326.304 75.5095C325.116 76.1488 324.104 77.0789 323.358 78.2161C322.66 79.388 322.23 80.705 322.101 82.0692C322.019 83.1913 322.045 84.3189 322.179 85.4357C322.265 86.349 322.337 87.109 322.395 87.7223C322.431 88.0034 322.431 88.2879 322.395 88.5689C322.32 88.2961 322.268 88.0174 322.238 87.7356C322.153 87.2023 322.035 86.4024 321.911 85.4624C321.742 84.3289 321.691 83.1803 321.76 82.0359C321.886 80.6172 322.334 79.2479 323.07 78.0361C323.845 76.849 324.907 75.8849 326.153 75.2362C327.292 74.6362 328.333 74.2096 329.217 73.8229C330.101 73.4363 330.814 73.1563 331.318 72.983C331.571 72.8665 331.837 72.7836 332.11 72.7363Z"
                  fill="#240155"
                />
                <path
                  d="M349.406 88.3556C349.369 88.0657 349.369 87.7723 349.406 87.4823C349.406 86.9157 349.491 86.1091 349.589 85.1091C349.72 83.9519 349.748 82.785 349.674 81.6226C349.601 80.2056 349.148 78.836 348.365 77.6628C347.511 76.5481 346.397 75.6682 345.124 75.1029C343.952 74.5429 342.866 74.0963 341.956 73.7096L339.795 72.8297C339.526 72.7369 339.264 72.6255 339.01 72.4963C339.295 72.5267 339.574 72.5962 339.841 72.703C340.371 72.8697 341.15 73.1296 342.047 73.483C342.944 73.8363 344.064 74.2629 345.255 74.8162C346.59 75.3961 347.758 76.314 348.646 77.4828C349.454 78.7109 349.908 80.1451 349.956 81.6226C350.017 82.8029 349.963 83.9866 349.792 85.1558C349.667 86.1557 349.563 86.9557 349.504 87.509C349.497 87.7937 349.464 88.0771 349.406 88.3556V88.3556Z"
                  fill="#240155"
                />
                <path
                  d="M341.353 69.5165C341.066 70.3278 340.621 71.0717 340.045 71.7031C339.468 72.3346 338.772 72.8406 337.998 73.1907C337.224 73.5408 336.389 73.7277 335.542 73.7401C334.696 73.7525 333.855 73.5902 333.072 73.263C332.285 72.9709 331.575 72.4994 330.995 71.8847C330.416 71.27 329.982 70.5283 329.727 69.7165L330.42 68.5232C330.775 69.6523 331.489 70.629 332.449 71.299C333.409 71.969 334.561 72.2941 335.723 72.223C339.69 72.063 340.744 68.4699 340.869 68.5499L341.333 69.5031"
                  fill="#240155"
                />
                <path
                  d="M330.204 70.5232C329.858 70.68 329.502 70.8114 329.137 70.9165L326.185 71.8565L324.142 72.5231C323.403 72.7564 322.623 72.9964 321.831 73.3297C320.965 73.6485 320.175 74.1517 319.515 74.8058C318.854 75.4599 318.339 76.2498 318.002 77.1229C317.624 78.0266 317.294 78.9501 317.013 79.8894C316.719 80.7961 316.457 81.6827 316.214 82.556C315.73 84.2426 315.324 85.7758 314.99 87.0624C314.656 88.3491 314.414 89.3357 314.211 90.1156C314.134 90.4935 314.031 90.8655 313.904 91.2289C313.889 91.1295 313.889 91.0284 313.904 90.9289C313.936 90.7356 313.989 90.449 314.061 90.0823C314.198 89.349 314.427 88.2957 314.715 87.0025C315.003 85.7092 315.403 84.1692 315.874 82.4693C316.11 81.6227 316.365 80.7361 316.653 79.8028C316.933 78.8504 317.268 77.9155 317.655 77.0029C318.039 76.0669 318.605 75.219 319.317 74.5097C320.011 73.8831 320.809 73.3886 321.674 73.0497C322.486 72.7164 323.285 72.4898 324.018 72.2698L326.073 71.6698L329.059 70.8232C329.43 70.6864 329.814 70.586 330.204 70.5232V70.5232Z"
                  fill="#240155"
                />
                <path
                  d="M357.751 90.8155C357.577 90.4829 357.432 90.1348 357.319 89.7755C357.044 89.0422 356.665 88.0689 356.252 86.9023C355.362 84.4758 354.203 81.0759 352.841 77.3894C352.668 76.9493 352.434 76.5364 352.148 76.1628C351.858 75.81 351.523 75.4983 351.152 75.2362C350.43 74.7443 349.678 74.299 348.9 73.9029C347.421 73.1029 346.04 72.4696 344.874 71.9563L342.092 70.763C341.745 70.6325 341.409 70.4765 341.084 70.2964C341.443 70.382 341.796 70.4957 342.138 70.6364C342.793 70.883 343.781 71.243 344.966 71.7297C346.151 72.2163 347.545 72.8296 349.051 73.6229C349.847 74.0274 350.614 74.4863 351.349 74.9962C352.173 75.5452 352.805 76.3455 353.156 77.2827C354.53 81.0092 355.637 84.3958 356.481 86.849C356.874 88.0356 357.195 89.0222 357.444 89.7622C357.569 90.1058 357.672 90.4577 357.751 90.8155V90.8155Z"
                  fill="#240155"
                />
                <path
                  d="M339.324 85.6625C339.735 86.1367 340.049 86.6889 340.249 87.2873C340.449 87.8856 340.531 88.5183 340.49 89.149C340.504 90.1254 340.279 91.09 339.835 91.9556C339.442 92.7188 338.83 93.342 338.081 93.7422C337.272 94.1661 336.371 94.3769 335.462 94.3555C334.952 94.3591 334.444 94.2964 333.95 94.1688C333.515 94.0685 333.1 93.8974 332.719 93.6622L333.681 91.7289C334.192 92.0736 334.797 92.2462 335.41 92.2222C336 92.2495 336.578 92.0469 337.027 91.6556C337.471 91.2267 337.734 90.6385 337.76 90.0157C337.161 90.4875 336.415 90.7241 335.658 90.6823C335.098 90.6909 334.543 90.5629 334.041 90.309C333.565 90.0714 333.161 89.7047 332.876 89.249C332.585 88.7787 332.434 88.2319 332.444 87.6758C332.431 87.07 332.6 86.4746 332.928 85.9692C333.255 85.4747 333.707 85.0805 334.238 84.8292C334.818 84.557 335.451 84.4203 336.09 84.4292C336.684 84.3915 337.279 84.4819 337.837 84.6944C338.394 84.9069 338.901 85.2368 339.324 85.6625ZM337.269 88.4491C337.382 88.3345 337.471 88.1984 337.532 88.0485C337.593 87.8987 337.625 87.738 337.625 87.5758C337.625 87.4135 337.593 87.2529 337.532 87.103C337.471 86.9531 337.382 86.817 337.269 86.7025C337.004 86.4713 336.662 86.352 336.313 86.3692C335.978 86.3544 335.65 86.4713 335.396 86.6958C335.278 86.8087 335.185 86.9464 335.124 87.0995C335.063 87.2526 335.035 87.4174 335.043 87.5824C335.036 87.7444 335.064 87.906 335.125 88.0558C335.186 88.2056 335.279 88.3398 335.396 88.4491C335.652 88.6792 335.985 88.7988 336.326 88.7824C336.671 88.7981 337.008 88.6788 337.269 88.4491V88.4491Z"
                  fill="#240155"
                />
                <path
                  d="M313.229 92.4688L313.53 90.5623L321.935 91.5355L321.719 93.5088L313.229 92.4688Z"
                  fill="#240155"
                />
                <path
                  d="M349.215 93.3153L349.418 91.762L358.17 90.8821L358.642 92.682L349.215 93.3153Z"
                  fill="#240155"
                />
                <path
                  d="M346.467 80.2026H343.396V82.2759H346.467V80.2026Z"
                  fill="white"
                />
                <path
                  d="M346.576 82.9292C345.515 83.1602 344.417 83.1602 343.355 82.9292C344.417 82.6981 345.515 82.6981 346.576 82.9292Z"
                  fill="white"
                />
                <path
                  d="M328.044 81.5493C328.044 81.813 327.968 82.0708 327.824 82.2901C327.68 82.5093 327.475 82.6802 327.236 82.7811C326.997 82.882 326.734 82.9084 326.48 82.857C326.226 82.8056 325.992 82.6786 325.809 82.4921C325.626 82.3056 325.501 82.0681 325.451 81.8094C325.4 81.5508 325.426 81.2827 325.525 81.0391C325.625 80.7955 325.792 80.5873 326.008 80.4408C326.223 80.2943 326.476 80.2161 326.735 80.2161C327.082 80.2161 327.415 80.3565 327.661 80.6066C327.906 80.8566 328.044 81.1957 328.044 81.5493Z"
                  fill="white"
                />
                <path
                  d="M364.004 115.054C364.004 115.154 351.906 115.228 336.993 115.228C322.08 115.228 309.982 115.154 309.982 115.054C309.982 114.954 322.074 114.881 336.993 114.881C351.913 114.881 364.004 114.961 364.004 115.054Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M340.332 122.527C352.509 122.527 362.38 121.519 362.38 120.274C362.38 119.03 352.509 118.021 340.332 118.021C328.155 118.021 318.283 119.03 318.283 120.274C318.283 121.519 328.155 122.527 340.332 122.527Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M340.77 134.387L344.554 133.774L344.522 128.014C344.522 128.014 348.594 127.294 348.574 123.128C348.574 121.128 348.207 116.981 347.841 113.241C347.652 111.302 346.753 109.505 345.323 108.21C343.893 106.914 342.036 106.214 340.122 106.248H339.73C335.481 106.582 333.386 110.441 333.838 114.755L334.46 134.267L340.77 134.387Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M344.521 128.014C342.635 128.084 340.77 127.58 339.166 126.567C339.166 126.567 340.475 129.541 344.554 129.087L344.521 128.014Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M346.492 116.721C346.495 116.876 346.439 117.027 346.335 117.14C346.231 117.253 346.088 117.321 345.935 117.328C345.862 117.336 345.787 117.329 345.716 117.307C345.645 117.285 345.579 117.249 345.522 117.2C345.465 117.152 345.418 117.092 345.385 117.024C345.351 116.957 345.331 116.883 345.327 116.808C345.321 116.653 345.376 116.501 345.479 116.387C345.581 116.272 345.724 116.203 345.876 116.194C346.027 116.182 346.176 116.23 346.291 116.328C346.406 116.427 346.478 116.568 346.492 116.721V116.721Z"
                  fill="#263238"
                />
                <path
                  d="M347.056 115.075C346.984 115.148 346.539 114.828 345.911 114.841C345.282 114.855 344.83 115.181 344.758 115.101C344.686 115.021 344.798 114.928 344.994 114.775C345.263 114.578 345.586 114.471 345.917 114.468C346.242 114.46 346.561 114.558 346.827 114.748C347.023 114.895 347.095 115.035 347.056 115.075Z"
                  fill="#263238"
                />
                <path
                  d="M340.601 116.834C340.605 116.989 340.55 117.139 340.447 117.254C340.345 117.368 340.203 117.438 340.051 117.448C339.901 117.461 339.752 117.413 339.637 117.314C339.521 117.215 339.449 117.074 339.436 116.921C339.432 116.766 339.487 116.616 339.59 116.502C339.692 116.388 339.834 116.318 339.986 116.308C340.06 116.301 340.135 116.308 340.207 116.331C340.278 116.354 340.345 116.391 340.402 116.44C340.459 116.489 340.506 116.549 340.54 116.617C340.575 116.684 340.595 116.758 340.601 116.834Z"
                  fill="#263238"
                />
                <path
                  d="M341.012 115.008C340.947 115.095 340.469 114.821 339.847 114.901C339.225 114.981 338.806 115.361 338.727 115.295C338.649 115.228 338.727 115.115 338.924 114.941C339.17 114.716 339.479 114.574 339.808 114.535C340.133 114.492 340.463 114.555 340.75 114.715C340.96 114.841 341.038 114.968 341.012 115.008Z"
                  fill="#263238"
                />
                <path
                  d="M343.192 120.228C343.52 120.113 343.861 120.043 344.207 120.021C344.371 120.021 344.521 119.968 344.547 119.854C344.554 119.684 344.513 119.516 344.43 119.368L343.932 118.135C343.474 117.089 343.1 116.008 342.812 114.901C343.348 115.909 343.808 116.956 344.187 118.035C344.351 118.468 344.508 118.881 344.665 119.281C344.773 119.485 344.806 119.722 344.757 119.948C344.735 120.006 344.699 120.058 344.654 120.099C344.608 120.141 344.554 120.171 344.495 120.188C344.408 120.215 344.318 120.23 344.227 120.234C343.883 120.275 343.535 120.273 343.192 120.228V120.228Z"
                  fill="#263238"
                />
                <path
                  d="M340.896 112.748C340.837 112.921 340.208 112.848 339.475 112.955C338.742 113.061 338.166 113.275 338.048 113.121C337.93 112.968 338.1 112.881 338.343 112.708C338.658 112.491 339.019 112.354 339.397 112.308C339.771 112.257 340.152 112.296 340.509 112.422C340.752 112.522 340.896 112.661 340.896 112.748Z"
                  fill="#263238"
                />
                <path
                  d="M346.866 113.301C346.755 113.448 346.323 113.301 345.799 113.301C345.275 113.301 344.843 113.415 344.738 113.268C344.634 113.121 344.738 113.048 344.948 112.901C345.202 112.731 345.501 112.643 345.805 112.648C346.113 112.648 346.413 112.746 346.663 112.928C346.846 113.081 346.912 113.228 346.866 113.301Z"
                  fill="#263238"
                />
                <path
                  d="M334.218 117.855C334.146 117.855 331.397 117.061 331.534 119.908C331.672 122.754 334.447 122.021 334.447 121.908C334.447 121.794 334.218 117.855 334.218 117.855Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M333.543 120.888C333.543 120.888 333.497 120.888 333.418 120.968C333.36 120.992 333.298 121.005 333.235 121.005C333.172 121.005 333.11 120.992 333.052 120.968C332.866 120.862 332.711 120.707 332.604 120.519C332.497 120.332 332.441 120.118 332.443 119.901C332.424 119.657 332.457 119.411 332.541 119.181C332.564 119.092 332.607 119.01 332.667 118.941C332.728 118.873 332.803 118.82 332.888 118.788C332.943 118.768 333.003 118.77 333.057 118.792C333.111 118.814 333.156 118.855 333.183 118.908C333.222 118.981 333.183 119.041 333.222 119.048C333.261 119.055 333.281 118.995 333.255 118.881C333.238 118.811 333.196 118.749 333.137 118.708C333.097 118.679 333.053 118.659 333.005 118.649C332.958 118.639 332.909 118.638 332.862 118.648C332.747 118.674 332.642 118.732 332.557 118.814C332.472 118.896 332.41 119 332.377 119.115C332.272 119.367 332.227 119.641 332.246 119.915C332.245 120.169 332.318 120.418 332.455 120.63C332.593 120.843 332.789 121.009 333.019 121.108C333.095 121.126 333.174 121.126 333.25 121.109C333.325 121.092 333.397 121.057 333.458 121.008C333.543 120.954 333.549 120.888 333.543 120.888Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M341.352 120.701C341.451 120.701 341.464 121.368 342.059 121.874C342.655 122.381 343.369 122.261 343.369 122.361C343.369 122.461 343.212 122.501 342.904 122.514C342.504 122.526 342.112 122.394 341.798 122.141C341.498 121.898 341.301 121.547 341.248 121.161C341.235 120.874 341.307 120.701 341.352 120.701Z"
                  fill="#263238"
                />
                <path
                  d="M350.472 107.968C350.428 107.698 350.32 107.443 350.157 107.226C349.993 107.008 349.78 106.835 349.535 106.722C349.529 106.565 349.51 106.408 349.476 106.255C349.37 105.785 349.107 105.366 348.733 105.07C348.358 104.773 347.895 104.618 347.421 104.628C347.339 104.265 347.16 103.931 346.905 103.663C346.649 103.395 346.327 103.203 345.972 103.108C345.618 103.013 345.244 103.019 344.893 103.125C344.541 103.231 344.225 103.433 343.977 103.708C343.618 103.403 343.178 103.211 342.713 103.157C342.248 103.102 341.777 103.187 341.359 103.402C341.251 103.446 341.16 103.523 341.097 103.622C341.082 103.657 341.075 103.694 341.075 103.732C341.075 103.77 341.082 103.807 341.097 103.842C340.96 103.641 340.778 103.476 340.567 103.36C340.355 103.244 340.119 103.181 339.879 103.175C339.712 103.177 339.546 103.206 339.388 103.262C338.956 103.307 338.558 103.519 338.275 103.855C337.706 103.681 337.094 103.725 336.555 103.979C336.016 104.233 335.587 104.68 335.349 105.235C334.898 105.283 334.471 105.465 334.121 105.759C333.772 106.053 333.516 106.446 333.385 106.888C333.092 106.919 332.811 107.028 332.571 107.203C332.332 107.379 332.141 107.615 332.019 107.889C331.898 108.163 331.848 108.465 331.877 108.764C331.905 109.063 332.01 109.35 332.181 109.595C332.181 109.595 330.217 110.082 330.773 111.855C331.048 112.755 332.246 112.575 332.246 112.575L333.843 118.294C333.843 118.328 334.21 118.994 334.544 118.841C334.858 118.645 335.106 118.357 335.257 118.014C335.503 117.669 335.693 117.287 335.82 116.881C335.881 116.676 335.874 116.456 335.8 116.255C335.727 116.055 335.592 115.883 335.415 115.768C335.649 115.665 335.853 115.5 336.005 115.29C336.157 115.08 336.251 114.834 336.279 114.575C336.333 114.059 336.295 113.537 336.167 113.035C336.023 112.288 335.879 111.541 335.729 110.788C336.237 110.76 336.728 110.591 337.149 110.299C337.57 110.008 337.905 109.605 338.118 109.135C338.306 109.261 338.519 109.345 338.741 109.382C338.963 109.418 339.191 109.407 339.408 109.348C339.626 109.288 339.829 109.183 340.004 109.038C340.178 108.894 340.321 108.713 340.423 108.508C340.613 109.01 340.983 109.419 341.458 109.654C341.933 109.889 342.477 109.932 342.982 109.775C342.878 110.368 343.925 110.895 344.501 111.041C344.945 111.089 345.393 110.991 345.778 110.761C346.131 110.962 346.517 111.095 346.917 111.155H346.976C347.768 111.215 348.521 110.488 348.894 109.762C349.098 109.778 349.303 109.751 349.496 109.682C349.82 109.543 350.09 109.301 350.266 108.992C350.443 108.682 350.515 108.323 350.472 107.968Z"
                  fill="#263238"
                />
                <path
                  d="M346.899 105.295C346.928 105.33 346.952 105.368 346.971 105.408C347.031 105.526 347.075 105.652 347.102 105.782C347.143 106.002 347.143 106.228 347.102 106.448C347.058 106.717 346.95 106.971 346.788 107.188C346.569 107.454 346.265 107.631 345.93 107.688C345.544 107.751 345.148 107.676 344.811 107.475C344.628 107.37 344.472 107.224 344.352 107.048C344.286 106.96 344.235 106.861 344.202 106.755C344.171 106.639 344.171 106.517 344.202 106.402C344.22 106.343 344.249 106.288 344.289 106.241C344.328 106.194 344.377 106.156 344.431 106.128C344.542 106.078 344.664 106.059 344.785 106.075C344.903 106.092 345.016 106.133 345.118 106.195C345.223 106.256 345.316 106.335 345.393 106.428C345.542 106.612 345.639 106.832 345.676 107.066C345.713 107.3 345.688 107.541 345.603 107.762C345.517 107.963 345.392 108.145 345.235 108.296C345.079 108.447 344.895 108.564 344.693 108.642C344.333 108.786 343.939 108.821 343.56 108.742C343.234 108.681 342.92 108.566 342.631 108.402C342.218 108.156 341.837 107.858 341.498 107.515L341.217 107.242C341.184 107.209 341.153 107.173 341.125 107.135L341.23 107.222L341.518 107.488C341.868 107.814 342.252 108.1 342.663 108.342C342.948 108.498 343.255 108.608 343.573 108.668C343.941 108.735 344.319 108.698 344.667 108.562C345.046 108.407 345.351 108.108 345.518 107.728C345.595 107.522 345.618 107.299 345.583 107.082C345.549 106.864 345.458 106.659 345.321 106.488C345.247 106.407 345.164 106.335 345.073 106.275C344.979 106.221 344.877 106.185 344.771 106.168C344.669 106.153 344.564 106.17 344.47 106.215C344.428 106.236 344.39 106.266 344.359 106.302C344.329 106.339 344.306 106.382 344.294 106.428C344.276 106.529 344.281 106.633 344.307 106.732C344.333 106.831 344.38 106.923 344.444 107.002C344.558 107.165 344.706 107.301 344.876 107.402C345.196 107.591 345.57 107.664 345.937 107.608C346.256 107.563 346.547 107.399 346.755 107.148C346.927 106.939 347.047 106.689 347.102 106.422C347.137 106.219 347.137 106.011 347.102 105.808C347.062 105.627 346.994 105.454 346.899 105.295V105.295Z"
                  fill="#455A64"
                />
                <path
                  d="M323.225 135.274L326.44 143.347L323.402 165.079L321.949 175.672H316.24L317.013 163.726L318.846 147.5L323.225 135.274Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M356.856 138.167L353.203 143.347L355.383 164.539L357.406 175.672H363.173L361.772 163.186L360.797 147.5L356.856 138.167Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M317.014 153.186C317.014 153.186 318.055 146.3 318.735 143.853C319.416 141.407 320.942 136.127 322.755 134.42C324.568 132.714 325.779 132.887 329.04 131.814C331.488 131.014 333.472 130.287 333.472 130.287L334.224 129.254C336.273 134.84 343.206 133.52 344.522 129.254L345.137 130.241C345.137 130.241 355.383 133.687 357.026 136.24C358.669 138.793 362.427 153.393 362.427 153.393L352.993 154.026L353.183 149.066C353.183 149.066 351.874 155.106 352.332 159.859C352.725 164.039 353.641 175.678 353.641 175.678L325.74 175.592C325.74 175.592 326.532 161.279 326.63 158.559C326.709 156.559 326.12 148.64 326.12 148.64L325.511 154.219L317.014 153.186Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M335.894 133.414C335.657 133.561 335.407 133.684 335.147 133.78L333.092 134.72C332.234 135.134 331.18 135.594 330.087 136.187C328.899 136.828 327.885 137.758 327.135 138.894C326.443 140.068 326.014 141.384 325.878 142.747C325.803 143.858 325.831 144.974 325.963 146.08C326.048 146.993 326.12 147.76 326.179 148.366C326.215 148.648 326.215 148.932 326.179 149.213C326.104 148.942 326.052 148.666 326.022 148.386C325.937 147.847 325.819 147.053 325.694 146.107C325.525 144.973 325.474 143.824 325.544 142.68C325.672 141.262 326.12 139.893 326.853 138.68C327.632 137.494 328.696 136.531 329.943 135.88C331.076 135.28 332.123 134.854 333 134.474C333.877 134.094 334.604 133.807 335.102 133.627C335.357 133.527 335.623 133.455 335.894 133.414V133.414Z"
                  fill="#240155"
                />
                <path
                  d="M353.184 149.033C353.147 148.743 353.147 148.45 353.184 148.16C353.184 147.6 353.269 146.787 353.367 145.787C353.498 144.629 353.526 143.463 353.452 142.3C353.39 140.888 352.949 139.521 352.175 138.347C351.314 137.224 350.188 136.341 348.902 135.78C347.73 135.227 346.644 134.774 345.734 134.387L343.573 133.507C343.303 133.413 343.038 133.302 342.781 133.174C343.069 133.203 343.351 133.272 343.619 133.38C344.143 133.547 344.929 133.807 345.825 134.16C346.722 134.514 347.842 134.94 349.033 135.494C350.368 136.074 351.536 136.991 352.424 138.16C353.232 139.388 353.686 140.823 353.734 142.3C353.795 143.483 353.741 144.669 353.57 145.84C353.445 146.833 353.334 147.633 353.282 148.186C353.27 148.471 353.238 148.754 353.184 149.033V149.033Z"
                  fill="#240155"
                />
                <path
                  d="M345.136 130.194C344.85 131.005 344.405 131.749 343.828 132.38C343.251 133.012 342.555 133.518 341.781 133.868C341.008 134.218 340.172 134.405 339.325 134.417C338.479 134.43 337.638 134.268 336.855 133.94C336.068 133.649 335.357 133.178 334.778 132.563C334.198 131.948 333.764 131.206 333.51 130.394L334.223 129.221C334.577 130.351 335.29 131.329 336.25 132C337.21 132.672 338.363 132.998 339.526 132.927C343.493 132.76 344.397 129.141 344.521 129.221L345.136 130.207"
                  fill="#240155"
                />
                <path
                  d="M333.988 131.187C333.641 131.344 333.285 131.475 332.92 131.581L329.968 132.521L327.925 133.187C327.142 133.414 326.371 133.681 325.615 133.987C324.748 134.306 323.958 134.809 323.298 135.463C322.638 136.117 322.122 136.907 321.785 137.78C321.406 138.674 321.076 139.589 320.796 140.52C320.502 141.427 320.24 142.313 319.998 143.187C319.513 144.873 319.107 146.4 318.773 147.687C318.44 148.973 318.191 149.96 317.994 150.74C317.914 151.117 317.812 151.489 317.687 151.853C317.672 151.754 317.672 151.652 317.687 151.553C317.719 151.36 317.772 151.073 317.844 150.706C317.981 149.98 318.21 148.92 318.499 147.627C318.787 146.333 319.153 144.793 319.657 143.093C319.893 142.247 320.148 141.36 320.436 140.427C320.717 139.475 321.052 138.54 321.438 137.627C321.823 136.691 322.388 135.843 323.101 135.134C323.793 134.507 324.591 134.014 325.457 133.68C326.225 133.378 327.007 133.116 327.801 132.894L329.857 132.294L332.842 131.447C333.216 131.328 333.599 131.242 333.988 131.187V131.187Z"
                  fill="#240155"
                />
                <path
                  d="M361.537 151.493C361.361 151.16 361.214 150.812 361.098 150.453L360.037 147.58C359.14 145.153 357.982 141.753 356.627 138.067C356.453 137.627 356.22 137.214 355.933 136.84C355.643 136.488 355.309 136.176 354.938 135.914C354.217 135.419 353.464 134.974 352.686 134.58C351.206 133.774 349.825 133.141 348.653 132.627L345.877 131.434C345.531 131.303 345.194 131.147 344.869 130.967C345.229 131.053 345.581 131.167 345.923 131.307C346.578 131.554 347.566 131.914 348.751 132.401C349.936 132.887 351.331 133.501 352.83 134.294C353.628 134.697 354.398 135.156 355.134 135.667C355.529 135.946 355.888 136.275 356.201 136.647C356.507 137.055 356.756 137.503 356.941 137.98C358.316 141.707 359.422 145.093 360.266 147.547C360.659 148.733 360.98 149.72 361.222 150.46C361.351 150.796 361.456 151.142 361.537 151.493V151.493Z"
                  fill="#240155"
                />
                <path
                  d="M342.761 148.7C342.997 149.083 343.118 149.528 343.108 149.98C343.116 150.547 342.939 151.1 342.604 151.553C342.232 152.032 341.736 152.395 341.171 152.6C339.797 153.088 338.302 153.088 336.929 152.6C336.364 152.395 335.867 152.032 335.495 151.553C335.16 151.1 334.983 150.547 334.991 149.98C334.981 149.528 335.102 149.083 335.338 148.7C335.587 148.309 335.927 147.987 336.326 147.76C336.018 147.549 335.764 147.266 335.587 146.933C335.409 146.598 335.319 146.221 335.325 145.84C335.317 145.314 335.48 144.801 335.789 144.38C336.13 143.939 336.583 143.602 337.099 143.407C338.357 142.953 339.729 142.953 340.987 143.407C341.503 143.602 341.957 143.939 342.297 144.38C342.606 144.801 342.769 145.314 342.761 145.84C342.766 146.22 342.679 146.596 342.506 146.933C342.324 147.264 342.069 147.548 341.76 147.76C342.166 147.983 342.51 148.306 342.761 148.7ZM340.071 150.76C340.19 150.651 340.285 150.518 340.35 150.369C340.415 150.22 340.449 150.059 340.449 149.896C340.449 149.734 340.415 149.573 340.35 149.424C340.285 149.275 340.19 149.142 340.071 149.033C339.769 148.825 339.414 148.714 339.05 148.714C338.685 148.714 338.33 148.825 338.028 149.033C337.909 149.142 337.814 149.275 337.749 149.424C337.684 149.573 337.65 149.734 337.65 149.896C337.65 150.059 337.684 150.22 337.749 150.369C337.814 150.518 337.909 150.651 338.028 150.76C338.329 150.969 338.685 151.08 339.05 151.08C339.414 151.08 339.77 150.969 340.071 150.76ZM338.251 145.227C338.146 145.317 338.064 145.431 338.011 145.559C337.957 145.688 337.934 145.827 337.943 145.967C337.936 146.103 337.96 146.239 338.012 146.365C338.064 146.491 338.144 146.603 338.244 146.693C338.472 146.88 338.758 146.974 339.05 146.96C339.345 146.972 339.635 146.878 339.868 146.693C339.963 146.597 340.038 146.483 340.09 146.357C340.141 146.231 340.168 146.096 340.168 145.96C340.168 145.824 340.141 145.689 340.09 145.563C340.038 145.437 339.963 145.323 339.868 145.227C339.636 145.039 339.345 144.945 339.05 144.96C338.769 144.952 338.495 145.046 338.277 145.227H338.251Z"
                  fill="#240155"
                />
                <path
                  d="M317.014 153.146L317.315 151.24L325.721 152.213L325.504 154.186L317.014 153.146Z"
                  fill="#240155"
                />
                <path
                  d="M352.992 153.993L353.202 152.44L361.954 151.56L362.426 153.359L352.992 153.993Z"
                  fill="#240155"
                />
                <path
                  d="M350.25 140.88H347.18V142.953H350.25V140.88Z"
                  fill="white"
                />
                <path
                  d="M350.362 143.607C349.301 143.847 348.201 143.847 347.141 143.607C348.202 143.376 349.3 143.376 350.362 143.607V143.607Z"
                  fill="white"
                />
                <path
                  d="M331.828 142.233C331.828 142.497 331.751 142.755 331.607 142.974C331.463 143.193 331.259 143.364 331.019 143.465C330.78 143.566 330.517 143.593 330.263 143.541C330.009 143.49 329.776 143.363 329.592 143.176C329.409 142.99 329.285 142.752 329.234 142.494C329.184 142.235 329.21 141.967 329.309 141.723C329.408 141.48 329.576 141.271 329.791 141.125C330.006 140.978 330.259 140.9 330.518 140.9C330.866 140.9 331.199 141.041 331.444 141.291C331.69 141.541 331.828 141.88 331.828 142.233Z"
                  fill="white"
                />
                <path
                  d="M366.721 175.672C366.721 175.772 354.623 175.845 339.71 175.845C324.797 175.845 312.699 175.772 312.699 175.672C312.699 175.572 324.791 175.499 339.71 175.499C354.629 175.499 366.721 175.579 366.721 175.672Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M339.722 183.725C351.9 183.725 361.771 182.716 361.771 181.471C361.771 180.227 351.9 179.218 339.722 179.218C327.545 179.218 317.674 180.227 317.674 181.471C317.674 182.716 327.545 183.725 339.722 183.725Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M287.56 160.012L286.807 159.772C286.462 159.615 286.071 159.598 285.714 159.726C285.393 159.892 285.217 160.272 284.876 160.392C284.536 160.512 284.071 160.206 283.665 160.306C283.259 160.406 283.043 160.819 282.657 160.892C282.271 160.966 282.002 160.799 281.812 160.992C281.768 161.031 281.726 161.074 281.688 161.119C281.551 161.22 281.391 161.286 281.223 161.309C281.055 161.332 280.885 161.313 280.726 161.252C280.411 161.123 280.059 161.123 279.744 161.252C279.571 161.387 279.428 161.557 279.325 161.752C279.27 161.85 279.193 161.932 279.101 161.994C279.009 162.055 278.904 162.093 278.795 162.106C278.67 162.106 278.559 162.046 278.441 162.039C278.048 162.039 277.786 162.479 277.466 162.652C277.145 162.826 276.7 162.719 276.405 162.946C276.297 163.029 276.224 163.151 276.2 163.287C276.176 163.422 276.202 163.562 276.274 163.679C276.354 163.793 276.46 163.886 276.584 163.948C276.707 164.011 276.843 164.042 276.981 164.039C277.273 164.032 277.558 163.952 277.813 163.806C278.013 163.672 278.234 163.575 278.467 163.519C279.004 163.432 279.528 163.912 280.025 163.692C280.274 163.586 280.412 163.346 280.588 163.152C280.85 162.872 281.191 162.681 281.564 162.606C281.816 162.593 282.063 162.529 282.29 162.419C282.552 162.252 282.657 161.919 282.945 161.752C283.233 161.586 283.6 161.752 283.914 161.652C284.123 161.586 284.3 161.432 284.51 161.379C284.719 161.326 285.125 161.446 285.426 161.379C285.727 161.312 285.943 160.979 286.258 160.946C286.38 160.936 286.502 160.936 286.624 160.946C286.685 160.954 286.747 160.948 286.805 160.927C286.863 160.906 286.916 160.871 286.958 160.826C287.01 160.746 287.01 160.639 287.089 160.572C287.149 160.532 287.22 160.511 287.292 160.512L288.32 160.419L287.56 160.012Z"
                  fill="#263238"
                />
                <path
                  d="M288.642 159.766C288.255 159.573 287.751 159.399 287.404 159.686C287.302 159.808 287.193 159.924 287.077 160.032C286.782 160.252 286.357 160.126 286.036 160.286C285.715 160.446 285.617 160.739 285.381 160.952C284.989 161.259 284.341 161.252 284.138 161.692C284.026 161.932 284.066 162.279 283.823 162.359C283.731 162.38 283.635 162.38 283.542 162.359C283.221 162.34 282.899 162.393 282.599 162.512C282.424 162.571 282.268 162.677 282.148 162.819C281.931 163.106 282.003 163.486 281.801 163.806C281.506 164.252 280.812 164.199 280.387 164.532C280.199 164.706 280.036 164.906 279.902 165.126C279.581 165.496 279.221 165.829 278.828 166.119C278.435 166.408 278.126 166.799 277.932 167.252C277.844 167.468 277.834 167.708 277.902 167.931C277.97 168.154 278.113 168.345 278.305 168.472C278.401 168.53 278.513 168.554 278.624 168.538C278.735 168.522 278.837 168.468 278.914 168.385C278.959 168.319 278.979 168.245 279.025 168.179C279.125 168.051 279.253 167.948 279.398 167.879C279.535 167.792 279.666 167.645 279.64 167.499C279.614 167.352 279.542 167.299 279.607 167.219C279.636 167.189 279.672 167.168 279.712 167.159C280.085 167.046 280.55 166.972 280.694 166.619C280.735 166.457 280.759 166.292 280.766 166.126C280.795 165.988 280.855 165.859 280.941 165.749C281.027 165.639 281.138 165.551 281.264 165.492C281.486 165.392 281.755 165.379 281.918 165.199C282.082 165.019 282.049 164.679 282.2 164.459C282.462 164.092 283.136 164.192 283.359 163.792C283.411 163.699 283.431 163.579 283.509 163.506C283.732 163.279 284.111 163.572 284.406 163.459C284.701 163.346 284.694 163.032 284.845 162.792C284.995 162.552 285.381 162.406 285.65 162.206C285.918 162.006 286.193 161.539 286.566 161.332C286.94 161.126 287.326 161.152 287.535 160.852C287.614 160.739 287.66 160.592 287.777 160.526C287.854 160.493 287.937 160.477 288.02 160.479C288.421 160.454 288.803 160.295 289.106 160.026L288.642 159.766Z"
                  fill="#263238"
                />
                <path
                  d="M288.242 160.799C287.794 160.812 287.355 160.928 286.957 161.139C286.56 161.351 286.216 161.652 285.95 162.019C285.845 162.196 285.715 162.355 285.564 162.492C285.293 162.638 284.998 162.731 284.693 162.766C284.366 162.869 284.074 163.066 283.852 163.333C283.631 163.6 283.489 163.926 283.443 164.272C283.384 164.719 283.443 165.279 283.07 165.506C282.997 165.536 282.929 165.577 282.867 165.626C282.631 165.846 282.9 166.239 282.959 166.572C283.057 167.119 282.533 167.605 282.612 168.159C282.656 168.359 282.741 168.547 282.86 168.712C283.168 169.192 283.515 169.659 283.829 170.105C283.986 170.312 284.176 170.525 284.418 170.512C284.772 170.512 284.903 170.039 284.936 169.672C284.992 169.41 284.948 169.135 284.811 168.905C284.68 168.732 284.451 168.659 284.327 168.479C284.124 168.185 284.287 167.812 284.392 167.459C284.594 166.781 284.557 166.052 284.287 165.399C284.648 165.252 284.72 164.732 285.08 164.559C285.183 164.534 285.284 164.499 285.381 164.452C285.616 164.306 285.571 163.919 285.76 163.719C285.95 163.519 286.474 163.539 286.533 163.206C286.533 163.106 286.533 162.992 286.533 162.899C286.572 162.83 286.635 162.778 286.71 162.752L287.567 162.352C287.738 162.288 287.889 162.18 288.006 162.039C288.196 161.772 288.15 161.332 288.418 161.159L288.242 160.799Z"
                  fill="#263238"
                />
                <path
                  d="M288.851 158.793C288.713 158.259 288.491 157.633 287.98 157.499C287.679 157.426 287.358 157.559 287.057 157.499C286.488 157.333 286.278 156.479 285.709 156.313C285.139 156.146 284.55 156.693 284.065 156.373C283.817 156.206 283.725 155.866 283.502 155.659C283.363 155.55 283.201 155.473 283.029 155.434C282.858 155.395 282.679 155.394 282.507 155.433C282.169 155.516 281.819 155.536 281.473 155.493C280.897 155.359 280.419 154.746 279.836 154.826C279.254 154.906 279.038 155.399 278.809 155.859C278.74 155.969 278.701 156.096 278.697 156.226C278.713 156.34 278.76 156.447 278.835 156.533C278.909 156.62 279.007 156.682 279.116 156.713C279.548 156.873 280.046 156.713 280.458 156.939C280.604 157.031 280.755 157.113 280.91 157.186C281.139 157.259 281.394 157.186 281.617 157.266C282.056 157.433 282.173 158.099 282.606 158.279C283.038 158.459 283.443 158.066 283.915 158.086C284.517 158.086 284.982 158.859 285.578 158.753C285.839 158.713 286.049 158.506 286.304 158.433C286.47 158.389 286.644 158.397 286.805 158.455C286.966 158.514 287.106 158.619 287.208 158.759C287.339 158.946 287.398 159.186 287.542 159.359C287.638 159.464 287.756 159.546 287.887 159.599C288.019 159.652 288.16 159.675 288.301 159.666C288.578 159.637 288.849 159.568 289.106 159.459L288.851 158.793Z"
                  fill="#263238"
                />
                <path
                  d="M288.72 160.559C288.279 159.876 287.624 159.366 286.861 159.112C286.453 159.077 286.049 159.015 285.65 158.926C285.34 158.775 285.039 158.608 284.746 158.426C283.969 158.165 283.123 158.217 282.383 158.572C281.642 158.937 280.835 159.146 280.013 159.186C279.286 159.152 278.592 158.792 277.872 158.886C277.482 158.962 277.108 159.106 276.766 159.312L275.548 159.946C275.411 160.001 275.295 160.102 275.221 160.232C275.129 160.499 275.45 160.719 275.732 160.779C276.187 160.875 276.66 160.836 277.093 160.666C277.412 160.482 277.76 160.356 278.121 160.292C278.373 160.31 278.625 160.342 278.874 160.386C279.188 160.386 279.5 160.332 279.797 160.226L281.205 159.792C281.557 159.648 281.943 159.607 282.317 159.672C282.599 159.746 282.848 159.952 283.142 159.926C283.437 159.899 283.725 159.599 284.052 159.586C284.38 159.572 284.707 159.966 285.087 160.066C285.466 160.166 286.029 159.846 286.461 159.992C286.756 160.086 286.933 160.372 287.149 160.586C287.335 160.77 287.559 160.911 287.803 160.999C288.122 161.099 288.452 161.153 288.785 161.159L288.72 160.559Z"
                  fill="#263238"
                />
                <path
                  d="M288.903 157.346C288.687 157.146 288.379 156.946 288.392 156.646C288.434 156.501 288.466 156.354 288.49 156.206C288.49 155.933 288.189 155.779 288.045 155.539C287.901 155.299 287.921 154.873 287.705 154.646C287.489 154.419 287.103 154.426 286.769 154.406C286.589 154.411 286.41 154.37 286.25 154.286C286.089 154.202 285.953 154.078 285.852 153.926C285.767 153.693 285.706 153.452 285.669 153.206C285.56 152.899 285.349 152.641 285.073 152.475C284.797 152.31 284.473 152.247 284.157 152.299C283.978 152.349 283.791 152.362 283.607 152.339C283.273 152.259 283.129 151.873 282.906 151.613C282.747 151.439 282.54 151.319 282.312 151.266C282.085 151.214 281.847 151.233 281.63 151.319C281.427 151.399 281.237 151.673 281.394 151.833C281.551 151.993 281.558 151.906 281.636 151.953C281.918 152.119 281.82 152.579 282.022 152.839C282.225 153.099 282.677 153.079 282.887 153.366C283.096 153.653 282.972 153.899 283.116 154.119C283.26 154.339 283.685 154.379 284 154.339C284.314 154.299 284.713 154.293 284.883 154.566C284.946 154.693 284.992 154.827 285.021 154.966C285.065 155.085 285.135 155.191 285.225 155.278C285.316 155.365 285.425 155.429 285.544 155.466C285.878 155.559 286.297 155.466 286.533 155.706C286.769 155.946 286.598 156.526 286.841 156.839C287.083 157.153 287.358 157.066 287.626 157.173C287.687 157.193 287.738 157.236 287.77 157.293C287.793 157.359 287.793 157.432 287.77 157.499C287.652 157.926 287.502 158.426 287.77 158.786C287.889 158.918 288.026 159.033 288.176 159.126C288.643 159.459 289.022 159.903 289.283 160.419L289.335 158.872C289.404 158.602 289.4 158.317 289.324 158.049C289.248 157.78 289.103 157.538 288.903 157.346V157.346Z"
                  fill="#263238"
                />
                <path
                  d="M289.833 151.966C289.857 151.74 289.806 151.512 289.687 151.32C289.568 151.127 289.388 150.982 289.178 150.906C289.073 150.874 288.963 150.865 288.855 150.88C288.747 150.894 288.643 150.931 288.55 150.989C288.456 151.047 288.376 151.124 288.314 151.215C288.252 151.307 288.21 151.41 288.189 151.52C288.137 152.033 288.648 152.526 288.477 153.013C288.41 153.135 288.357 153.265 288.32 153.399C288.32 153.739 288.739 153.933 288.805 154.266C288.87 154.599 288.464 154.933 288.432 155.299C288.399 155.666 288.89 156.086 288.818 156.513C288.788 156.629 288.744 156.741 288.687 156.846C288.386 157.553 288.759 158.353 289.119 159.033L290.042 158.706C289.741 158.039 290.54 157.219 290.114 156.666C289.905 156.399 289.459 156.273 289.459 155.939C289.477 155.851 289.513 155.767 289.564 155.693C289.8 155.306 290.029 154.919 290.258 154.533C290.382 154.376 290.451 154.181 290.454 153.979C290.409 153.546 289.8 153.373 289.688 152.959C289.577 152.546 289.767 152.306 289.833 151.966Z"
                  fill="#263238"
                />
                <path
                  d="M291.142 157.373C290.992 157.073 290.566 157.059 290.259 157.173C289.408 157.479 288.904 158.353 288.471 159.173C287.968 160.053 287.53 160.971 287.162 161.919C287.076 162.13 287.031 162.357 287.031 162.586C287.037 162.698 287.071 162.807 287.129 162.903C287.187 162.998 287.269 163.077 287.365 163.132C287.415 163.156 287.47 163.168 287.525 163.169C287.581 163.169 287.636 163.157 287.686 163.135C287.737 163.112 287.782 163.079 287.82 163.037C287.857 162.995 287.885 162.946 287.902 162.892L288.144 162.779C288.72 161.133 289.61 159.62 290.763 158.326C291.051 158.053 291.319 157.693 291.142 157.373Z"
                  fill="#240155"
                />
                <path
                  d="M288.91 172.032C288.324 170.316 287.886 168.552 287.601 166.759C287.305 164.956 287.456 163.107 288.039 161.379C288.137 161.119 288.943 159.379 289.211 159.379C289.479 159.379 288.903 161.019 289.001 161.186C289.874 162.859 290.23 164.762 290.023 166.645C289.853 168.458 289.489 170.247 288.936 171.979"
                  fill="#263238"
                />
                <path
                  d="M298.893 182.145C298.893 180.858 298.926 179.845 298.939 179.845C298.952 179.845 303.267 179.412 303.561 175.045C303.705 172.939 303.653 168.572 303.561 164.619C303.513 162.57 302.709 160.614 301.309 159.142C299.909 157.669 298.016 156.788 296.006 156.673H295.594C291.116 156.673 288.622 160.552 288.753 165.112L289.074 184.405L296.818 186.945L298.893 182.145Z"
                  fill="#AA645B"
                />
                <path
                  d="M298.94 179.852C296.959 179.735 295.052 179.041 293.447 177.852C293.447 177.852 294.632 181.112 298.933 180.965L298.94 179.852Z"
                  fill="#814742"
                />
                <path
                  d="M301.742 168.332C301.739 168.413 301.721 168.492 301.688 168.565C301.656 168.639 301.609 168.705 301.552 168.76C301.494 168.815 301.426 168.858 301.352 168.887C301.278 168.915 301.199 168.928 301.12 168.926C301.042 168.928 300.964 168.915 300.891 168.886C300.818 168.858 300.751 168.814 300.695 168.759C300.639 168.704 300.594 168.637 300.564 168.564C300.533 168.491 300.518 168.412 300.518 168.332C300.521 168.249 300.541 168.167 300.575 168.091C300.61 168.015 300.66 167.948 300.721 167.892C300.782 167.836 300.853 167.793 300.931 167.766C301.008 167.738 301.09 167.727 301.172 167.732C301.325 167.737 301.47 167.803 301.576 167.915C301.682 168.027 301.742 168.177 301.742 168.332V168.332Z"
                  fill="#263238"
                />
                <path
                  d="M302.54 166.379C302.462 166.452 302.017 166.079 301.362 166.046C300.707 166.012 300.197 166.312 300.131 166.226C300.066 166.139 300.184 166.046 300.4 165.906C300.695 165.718 301.041 165.629 301.388 165.652C301.734 165.67 302.064 165.801 302.331 166.026C302.521 166.192 302.586 166.346 302.54 166.379Z"
                  fill="#263238"
                />
                <path
                  d="M295.666 168.332C295.663 168.415 295.643 168.497 295.608 168.572C295.573 168.648 295.524 168.715 295.463 168.77C295.402 168.826 295.33 168.868 295.253 168.895C295.175 168.921 295.093 168.932 295.012 168.925C294.934 168.927 294.857 168.913 294.785 168.884C294.713 168.855 294.647 168.812 294.591 168.756C294.536 168.701 294.492 168.635 294.462 168.562C294.431 168.489 294.416 168.411 294.416 168.332C294.423 168.169 294.492 168.016 294.608 167.904C294.724 167.792 294.878 167.73 295.038 167.732C295.119 167.727 295.199 167.738 295.275 167.766C295.352 167.793 295.421 167.837 295.48 167.893C295.539 167.949 295.586 168.017 295.618 168.093C295.65 168.168 295.667 168.25 295.666 168.332V168.332Z"
                  fill="#263238"
                />
                <path
                  d="M296.072 166.279C295.987 166.352 295.542 165.979 294.887 165.939C294.233 165.899 293.722 166.212 293.657 166.125C293.591 166.039 293.709 165.946 293.932 165.799C294.229 165.615 294.574 165.529 294.92 165.552C295.262 165.572 295.589 165.701 295.856 165.919C296.046 166.092 296.112 166.245 296.072 166.279Z"
                  fill="#263238"
                />
                <path
                  d="M298.146 171.572C298.499 171.481 298.862 171.436 299.227 171.439C299.397 171.439 299.561 171.405 299.593 171.292C299.617 171.114 299.588 170.933 299.508 170.772C299.377 170.352 299.233 169.905 299.083 169.439C298.682 168.306 298.374 167.143 298.16 165.959C298.643 167.06 299.044 168.196 299.358 169.359C299.502 169.825 299.633 170.272 299.763 170.692C299.855 170.902 299.871 171.138 299.809 171.359C299.781 171.417 299.74 171.467 299.69 171.508C299.641 171.548 299.583 171.577 299.521 171.592C299.426 171.604 299.329 171.604 299.233 171.592C298.872 171.634 298.506 171.627 298.146 171.572V171.572Z"
                  fill="#263238"
                />
                <path
                  d="M296.182 171.925C296.287 171.925 296.248 172.652 296.837 173.205C297.426 173.758 298.192 173.725 298.192 173.825C298.192 173.925 298.009 173.958 297.688 173.945C297.269 173.929 296.87 173.761 296.562 173.472C296.263 173.195 296.082 172.81 296.058 172.399C296.045 172.092 296.13 171.919 296.182 171.925Z"
                  fill="#263238"
                />
                <path
                  d="M296.182 163.552C296.11 163.732 295.455 163.606 294.676 163.652C293.897 163.699 293.262 163.886 293.164 163.712C293.066 163.539 293.243 163.466 293.505 163.306C293.851 163.106 294.239 162.992 294.637 162.972C295.036 162.945 295.436 163.016 295.802 163.179C296.084 163.312 296.215 163.466 296.182 163.552Z"
                  fill="#263238"
                />
                <path
                  d="M302.396 164.132C302.272 164.279 301.827 164.092 301.277 164.052C300.727 164.012 300.262 164.099 300.17 163.932C300.079 163.766 300.21 163.706 300.419 163.572C300.696 163.409 301.017 163.339 301.336 163.372C301.658 163.396 301.964 163.522 302.213 163.732C302.396 163.899 302.449 164.059 302.396 164.132Z"
                  fill="#263238"
                />
                <path
                  d="M288.923 168.352C288.851 168.312 286.023 167.292 285.951 170.285C285.878 173.279 288.844 172.732 288.851 172.645C288.857 172.559 288.923 168.352 288.923 168.352Z"
                  fill="#AA645B"
                />
                <path
                  d="M287.98 171.492C287.98 171.492 287.928 171.525 287.843 171.565C287.719 171.616 287.58 171.616 287.456 171.565C287.27 171.437 287.12 171.261 287.022 171.055C286.925 170.849 286.882 170.62 286.9 170.392C286.897 170.136 286.953 169.882 287.064 169.652C287.092 169.559 287.143 169.474 287.211 169.405C287.28 169.336 287.364 169.286 287.456 169.259C287.516 169.245 287.579 169.253 287.633 169.281C287.688 169.309 287.732 169.355 287.757 169.412C287.79 169.492 287.757 169.552 287.79 169.559C287.823 169.565 287.849 169.512 287.829 169.385C287.818 169.309 287.778 169.239 287.718 169.192C287.638 169.129 287.537 169.101 287.437 169.112C287.316 169.135 287.203 169.189 287.108 169.268C287.013 169.347 286.939 169.449 286.893 169.565C286.762 169.82 286.694 170.104 286.697 170.392C286.669 170.662 286.722 170.934 286.849 171.172C286.977 171.41 287.172 171.603 287.41 171.725C287.489 171.75 287.572 171.757 287.653 171.745C287.735 171.734 287.813 171.704 287.882 171.659C287.973 171.565 287.993 171.499 287.98 171.492Z"
                  fill="#814742"
                />
                <path
                  d="M301.733 159.626C302.218 159.366 300.81 157.779 299.652 157.219C297.897 156.373 295.207 155.826 293.57 156.273C292.614 156.473 291.71 156.873 290.913 157.446C290.117 158.02 289.446 158.755 288.942 159.606C287.962 161.444 287.483 163.515 287.554 165.606C287.517 166.241 287.651 166.875 287.94 167.439C288.339 168.105 289.118 168.539 289.073 169.439C289.058 169.604 289.076 169.77 289.125 169.928C289.175 170.086 289.255 170.233 289.361 170.359C289.891 170.945 290.559 170.412 290.866 169.865C291.441 168.65 291.728 167.314 291.704 165.966C291.807 165.013 291.759 164.049 291.56 163.112C291.423 162.612 291.2 162.139 291.095 161.632C291.025 161.382 291.008 161.118 291.048 160.86C291.088 160.602 291.182 160.356 291.325 160.139C291.399 160.053 291.48 159.972 291.567 159.899C291.982 159.541 292.484 159.302 293.02 159.207C293.556 159.112 294.108 159.164 294.617 159.359C296.261 159.979 299.076 160.919 299.822 160.359C300.344 160.011 300.79 159.557 301.131 159.026L301.733 159.626Z"
                  fill="#263238"
                />
                <path
                  d="M278.003 186.711L281.224 194.777L278.179 216.51L276.733 227.103H271.018L271.79 215.157L273.63 198.931L278.003 186.711Z"
                  fill="#AA645B"
                />
                <path
                  d="M311.633 189.604L307.98 194.778L310.167 215.977L312.183 227.103H317.951L316.55 214.623L315.574 198.931L311.633 189.604Z"
                  fill="#AA645B"
                />
                <path
                  d="M271.791 204.604C271.791 204.604 272.832 197.718 273.513 195.271C274.194 192.824 275.719 187.545 277.539 185.845C279.359 184.145 280.557 184.311 283.823 183.238C286.265 182.432 288.249 181.705 288.249 181.705L289.002 180.672C291.051 186.265 297.984 184.938 299.306 180.672L299.915 181.658C299.915 181.658 310.16 185.105 311.803 187.658C313.446 190.211 317.211 204.811 317.211 204.811L307.777 205.477L307.96 200.511C307.96 200.511 306.651 206.55 307.109 211.304C307.502 215.483 308.419 227.123 308.419 227.123L280.511 227.036C280.511 227.036 281.303 212.73 281.408 210.01C281.48 208.01 280.891 200.091 280.891 200.091L280.282 205.664L271.791 204.604Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M290.672 184.845C290.436 184.993 290.186 185.116 289.925 185.211L287.87 186.151C287.012 186.565 285.965 187.025 284.865 187.618C283.677 188.257 282.665 189.187 281.919 190.324C281.222 191.497 280.792 192.814 280.662 194.178C280.58 195.3 280.606 196.427 280.74 197.544C280.826 198.457 280.898 199.224 280.957 199.831C280.992 200.112 280.992 200.396 280.957 200.677C280.882 200.407 280.829 200.13 280.799 199.851C280.714 199.311 280.596 198.517 280.479 197.571C280.303 196.438 280.251 195.289 280.322 194.144C280.447 192.726 280.896 191.356 281.631 190.144C282.406 188.957 283.468 187.993 284.714 187.345C285.853 186.751 286.901 186.318 287.778 185.938C288.655 185.558 289.375 185.271 289.879 185.091C290.134 184.98 290.399 184.897 290.672 184.845V184.845Z"
                  fill="#240155"
                />
                <path
                  d="M307.96 200.464C307.927 200.174 307.927 199.881 307.96 199.591C307.96 199.031 308.045 198.217 308.143 197.224C308.274 196.065 308.302 194.896 308.228 193.731C308.165 192.32 307.726 190.953 306.958 189.778C306.095 188.657 304.969 187.774 303.685 187.211C302.513 186.658 301.426 186.205 300.516 185.825L298.356 184.938C298.084 184.853 297.821 184.741 297.57 184.605C297.855 184.639 298.134 184.708 298.402 184.811C298.932 184.978 299.711 185.238 300.608 185.591C301.505 185.945 302.624 186.378 303.822 186.925C305.156 187.503 306.322 188.421 307.207 189.591C308.014 190.82 308.467 192.254 308.516 193.731C308.578 194.914 308.523 196.099 308.352 197.271C308.228 198.264 308.123 199.064 308.064 199.624C308.054 199.907 308.019 200.188 307.96 200.464V200.464Z"
                  fill="#240155"
                />
                <path
                  d="M299.914 181.625C299.627 182.436 299.182 183.179 298.606 183.81C298.03 184.441 297.335 184.947 296.562 185.297C295.789 185.648 294.954 185.836 294.108 185.85C293.262 185.864 292.422 185.703 291.639 185.378C290.852 185.086 290.141 184.615 289.56 184C288.979 183.385 288.544 182.644 288.287 181.832L289.001 180.652C289.354 181.782 290.067 182.76 291.027 183.431C291.988 184.103 293.141 184.429 294.303 184.358C298.27 184.192 299.174 180.572 299.305 180.652L299.914 181.638"
                  fill="#240155"
                />
                <path
                  d="M288.772 182.625C288.423 182.781 288.064 182.912 287.698 183.018L284.746 183.971L282.703 184.638C281.97 184.865 281.184 185.105 280.392 185.438C279.526 185.757 278.736 186.26 278.076 186.914C277.415 187.568 276.9 188.358 276.563 189.231C276.163 190.144 275.869 191.091 275.574 191.998C275.279 192.904 275.018 193.791 274.775 194.664C274.291 196.351 273.885 197.877 273.551 199.164L272.811 202.164C272.736 202.543 272.631 202.915 272.497 203.277C272.483 203.178 272.483 203.077 272.497 202.977C272.53 202.784 272.582 202.497 272.654 202.131C272.798 201.404 273.021 200.351 273.309 199.051C273.597 197.751 273.996 196.217 274.468 194.518C274.703 193.671 274.959 192.784 275.247 191.851C275.527 190.896 275.861 189.959 276.248 189.044C276.633 188.108 277.199 187.261 277.911 186.551C278.604 185.926 279.402 185.433 280.268 185.098C281.08 184.765 281.878 184.531 282.612 184.311L284.667 183.711L287.652 182.871C288.018 182.756 288.392 182.674 288.772 182.625V182.625Z"
                  fill="#240155"
                />
                <path
                  d="M316.314 202.924C316.14 202.591 315.995 202.243 315.882 201.884C315.607 201.151 315.228 200.184 314.815 199.011C313.925 196.584 312.746 193.184 311.437 189.498C311.262 189.06 311.031 188.648 310.75 188.271C310.453 187.923 310.117 187.612 309.748 187.345C309.027 186.85 308.275 186.405 307.496 186.011C306.017 185.205 304.635 184.571 303.47 184.058L300.688 182.871C300.34 182.741 300.003 182.583 299.68 182.398C300.042 182.485 300.396 182.601 300.74 182.745C301.395 182.985 302.377 183.351 303.562 183.831C304.747 184.311 306.141 184.931 307.647 185.725C308.443 186.128 309.211 186.587 309.945 187.098C310.34 187.377 310.698 187.707 311.012 188.078C311.318 188.485 311.566 188.934 311.751 189.411C313.126 193.138 314.239 196.524 315.077 198.977C315.47 200.171 315.791 201.151 316.039 201.891C316.153 202.229 316.245 202.574 316.314 202.924V202.924Z"
                  fill="#240155"
                />
                <path
                  d="M298.473 200.877C298.888 201.367 299.11 201.997 299.095 202.644C299.097 203.198 298.94 203.74 298.644 204.204C298.31 204.718 297.837 205.124 297.282 205.37C296.568 205.685 295.794 205.836 295.017 205.81C294.355 205.812 293.695 205.729 293.053 205.564C292.463 205.433 291.898 205.208 291.377 204.897L292.339 202.897C292.718 203.159 293.136 203.357 293.577 203.484C294.017 203.617 294.473 203.686 294.932 203.691C295.309 203.71 295.683 203.619 296.012 203.431C296.138 203.357 296.242 203.249 296.313 203.12C296.385 202.991 296.421 202.845 296.418 202.697C296.418 202.077 295.94 201.771 294.984 201.771H293.878V200.071L295.547 198.231H291.861V196.151H298.617V197.837L296.653 199.964C297.343 200.054 297.983 200.376 298.473 200.877V200.877Z"
                  fill="#240155"
                />
                <path
                  d="M271.791 204.577L272.092 202.677L280.498 203.644L280.282 205.617L271.791 204.577Z"
                  fill="#240155"
                />
                <path
                  d="M307.777 205.43L307.98 203.877L316.733 202.99L317.204 204.79L307.777 205.43Z"
                  fill="#240155"
                />
                <path
                  d="M305.027 192.311H301.957V194.384H305.027V192.311Z"
                  fill="white"
                />
                <path
                  d="M305.139 195.044C304.077 195.275 302.98 195.275 301.918 195.044C302.98 194.813 304.077 194.813 305.139 195.044V195.044Z"
                  fill="white"
                />
                <path
                  d="M286.605 193.664C286.605 193.928 286.528 194.186 286.384 194.405C286.24 194.624 286.036 194.795 285.797 194.896C285.557 194.997 285.294 195.023 285.04 194.972C284.786 194.921 284.553 194.794 284.37 194.607C284.187 194.421 284.062 194.183 284.011 193.924C283.961 193.666 283.987 193.398 284.086 193.154C284.185 192.91 284.353 192.702 284.568 192.556C284.784 192.409 285.037 192.331 285.296 192.331C285.643 192.331 285.976 192.472 286.221 192.722C286.467 192.972 286.605 193.311 286.605 193.664Z"
                  fill="white"
                />
                <path
                  d="M321.498 227.103C321.498 227.203 309.4 227.276 294.487 227.276C279.574 227.276 267.477 227.203 267.477 227.103C267.477 227.003 279.568 226.929 294.487 226.929C309.407 226.929 321.498 227.009 321.498 227.103Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M296.687 233.576C308.864 233.576 318.736 232.567 318.736 231.323C318.736 230.078 308.864 229.069 296.687 229.069C284.51 229.069 274.639 230.078 274.639 231.323C274.639 232.567 284.51 233.576 296.687 233.576Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M230.115 205.317C229.513 203.75 227.234 202.724 227.542 201.084C227.745 199.984 229.087 199.297 229.303 198.197C229.454 197.437 229.022 196.644 229.244 195.897C229.552 194.878 230.9 194.444 231.47 193.531C231.869 192.898 231.843 192.118 232.164 191.451C232.485 190.784 233.473 190.264 234.043 190.784L232.177 203.184C232.177 206.164 232.485 209.09 232.458 212.07C231.607 212.677 230.265 212.07 229.84 211.157C229.414 210.243 229.676 209.21 229.932 208.25C230.307 207.319 230.371 206.289 230.115 205.317V205.317Z"
                  fill="#263238"
                />
                <path
                  d="M238.848 204.97L241.244 192.071L242.9 189.091C243.109 187.705 245.322 188.045 246.612 188.884C247.901 189.724 248.34 192.658 248.366 194.058C248.393 195.115 248.631 196.157 249.067 197.117C249.675 198.931 251.489 200.484 251.319 202.364C251.201 203.697 250.114 204.797 249.708 206.077C249.204 207.684 249.813 209.37 249.833 211.03C249.852 212.69 248.864 214.67 246.959 214.797L246.788 213.41C245.701 213.978 244.47 214.201 243.257 214.05C242.043 213.9 240.902 213.382 239.98 212.563C237.99 210.564 238.363 207.577 238.848 204.97Z"
                  fill="#263238"
                />
                <path
                  d="M246.141 195.664C245.988 193.688 245.11 191.842 243.681 190.496C242.251 189.149 240.377 188.4 238.43 188.398H238.03C233.703 188.651 231.484 192.531 231.857 196.931L232.603 214.563L242.495 218.517L242.462 210.644C242.462 210.644 246.626 209.977 246.685 205.757C246.711 203.697 246.436 199.477 246.141 195.664Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M242.495 210.624C240.565 210.618 238.677 210.049 237.055 208.984C237.055 208.984 238.325 212.037 242.475 211.65L242.495 210.624Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M244.661 199.237C244.663 199.315 244.65 199.393 244.622 199.465C244.594 199.538 244.553 199.604 244.5 199.661C244.447 199.717 244.384 199.762 244.314 199.794C244.244 199.825 244.168 199.842 244.092 199.844C244.016 199.85 243.94 199.841 243.867 199.817C243.795 199.793 243.728 199.754 243.671 199.703C243.614 199.652 243.567 199.59 243.533 199.52C243.5 199.451 243.481 199.375 243.477 199.297C243.476 199.14 243.537 198.988 243.644 198.875C243.752 198.762 243.898 198.696 244.053 198.691C244.128 198.684 244.204 198.694 244.276 198.718C244.348 198.742 244.414 198.781 244.471 198.832C244.528 198.883 244.574 198.945 244.607 199.015C244.64 199.085 244.658 199.16 244.661 199.237V199.237Z"
                  fill="#263238"
                />
                <path
                  d="M245.655 197.297C245.583 197.377 245.132 197.037 244.49 197.037C243.849 197.037 243.384 197.364 243.318 197.284C243.253 197.204 243.358 197.104 243.56 196.957C243.836 196.76 244.166 196.657 244.503 196.664C244.835 196.662 245.159 196.769 245.426 196.971C245.623 197.124 245.688 197.264 245.655 197.297Z"
                  fill="#263238"
                />
                <path
                  d="M238.658 199.311C238.658 199.469 238.598 199.621 238.491 199.735C238.383 199.849 238.237 199.917 238.081 199.924C237.93 199.933 237.781 199.881 237.666 199.778C237.552 199.676 237.483 199.532 237.473 199.377C237.473 199.219 237.532 199.067 237.64 198.953C237.747 198.838 237.894 198.771 238.049 198.764C238.124 198.758 238.2 198.767 238.272 198.791C238.344 198.815 238.411 198.854 238.467 198.905C238.524 198.956 238.57 199.019 238.603 199.088C238.636 199.158 238.654 199.233 238.658 199.311V199.311Z"
                  fill="#263238"
                />
                <path
                  d="M239.233 197.184C239.161 197.257 238.71 196.918 238.075 196.918C237.44 196.918 236.962 197.244 236.896 197.164C236.831 197.084 236.936 196.991 237.139 196.838C237.42 196.625 237.763 196.512 238.114 196.518C238.448 196.516 238.774 196.624 239.044 196.824C239.207 197.004 239.273 197.144 239.233 197.184Z"
                  fill="#263238"
                />
                <path
                  d="M241.27 202.677C241.607 202.568 241.957 202.506 242.311 202.49C242.474 202.49 242.625 202.437 242.651 202.324C242.667 202.152 242.63 201.98 242.546 201.831C242.396 201.431 242.232 201.011 242.068 200.564C241.619 199.485 241.258 198.37 240.988 197.231C241.508 198.267 241.946 199.344 242.298 200.451C242.461 200.897 242.612 201.317 242.756 201.724C242.865 201.928 242.895 202.165 242.841 202.39C242.818 202.449 242.781 202.501 242.735 202.543C242.688 202.584 242.632 202.614 242.573 202.63C242.483 202.655 242.39 202.668 242.298 202.67C241.957 202.717 241.611 202.719 241.27 202.677V202.677Z"
                  fill="#263238"
                />
                <path
                  d="M239.424 203.124C239.522 203.124 239.522 203.79 240.118 204.324C240.713 204.857 241.427 204.75 241.427 204.85C241.427 204.95 241.263 204.99 240.949 204.997C240.544 204.999 240.15 204.858 239.836 204.597C239.536 204.344 239.342 203.984 239.293 203.59C239.26 203.297 239.339 203.117 239.424 203.124Z"
                  fill="#263238"
                />
                <path
                  d="M239.293 194.784C239.234 194.957 238.593 194.871 237.846 194.964C237.1 195.057 236.485 195.264 236.386 195.104C236.288 194.944 236.452 194.857 236.694 194.691C237.021 194.484 237.39 194.354 237.773 194.311C238.156 194.269 238.543 194.314 238.907 194.444C239.182 194.558 239.326 194.697 239.293 194.784Z"
                  fill="#263238"
                />
                <path
                  d="M245.074 195.097C244.963 195.244 244.524 195.097 243.994 195.097C243.464 195.097 243.019 195.197 242.914 195.044C242.809 194.891 242.914 194.817 243.136 194.678C243.399 194.511 243.704 194.428 244.014 194.438C244.326 194.443 244.628 194.548 244.878 194.738C245.068 194.871 245.127 195.024 245.074 195.097Z"
                  fill="#263238"
                />
                <path
                  d="M230.705 193.444C230.81 192.657 231.208 191.941 231.818 191.444H234.345C233.559 191.884 233.919 192.958 234.089 193.191C234.409 193.976 234.467 194.846 234.256 195.668C234.044 196.49 233.574 197.219 232.918 197.744L233.042 200.324C233.14 200.991 232.898 201.511 232.243 201.511C232.243 201.511 231.51 199.577 231.333 198.784C230.993 197.251 230.528 195.011 230.705 193.444Z"
                  fill="#263238"
                />
                <path
                  d="M232.478 200.057C232.406 200.024 229.624 199.191 229.709 202.057C229.794 204.924 232.629 204.271 232.629 204.191C232.629 204.111 232.478 200.057 232.478 200.057Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M231.98 203.144C231.98 203.144 231.934 203.184 231.849 203.224C231.729 203.273 231.595 203.273 231.475 203.224C231.289 203.11 231.136 202.947 231.031 202.753C230.926 202.558 230.874 202.339 230.88 202.117C230.867 201.869 230.907 201.621 230.998 201.391C231.02 201.3 231.065 201.216 231.128 201.147C231.191 201.078 231.27 201.027 231.358 200.997C231.414 200.98 231.474 200.983 231.528 201.006C231.581 201.029 231.626 201.071 231.652 201.124C231.692 201.204 231.652 201.264 231.692 201.264C231.731 201.264 231.75 201.217 231.724 201.097C231.708 201.024 231.666 200.96 231.606 200.917C231.567 200.888 231.523 200.868 231.475 200.858C231.428 200.847 231.379 200.847 231.331 200.857C231.216 200.885 231.11 200.942 231.022 201.022C230.934 201.102 230.867 201.204 230.827 201.317C230.715 201.572 230.665 201.852 230.683 202.131C230.675 202.389 230.743 202.644 230.878 202.862C231.014 203.081 231.21 203.253 231.443 203.357C231.519 203.377 231.598 203.379 231.675 203.364C231.752 203.349 231.824 203.317 231.888 203.271C231.98 203.217 231.993 203.184 231.98 203.144Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M230.815 194.998C230.894 194.264 230.625 193.531 230.815 192.831C231.035 192.025 231.517 191.32 232.183 190.831C232.606 190.572 233.065 190.381 233.545 190.264C233.545 190.264 233.545 190.298 233.545 190.264C233.545 189.051 235.62 187.225 236.301 186.891C238.475 185.831 239.614 186.785 242.003 187.118C244.393 187.451 246.92 188.631 247.718 190.944C247.429 191.21 247.06 191.368 246.671 191.391C247.557 192.745 248.056 194.324 248.111 195.951C248.155 197.723 247.934 199.492 247.456 201.197C247.539 200.728 247.529 200.248 247.426 199.783C247.324 199.318 247.132 198.879 246.861 198.491C246.313 197.719 245.844 196.892 245.46 196.024C245.008 194.691 245.028 193.591 244.327 192.378C243.627 191.164 241.898 191.044 241.898 191.044C240.916 191.271 239.934 190.678 239.018 190.231C238.191 189.891 237.266 189.891 236.439 190.231C235.614 190.524 235.542 190.811 234.815 191.311C234.526 191.675 234.337 192.109 234.265 192.571C234.293 192.93 234.372 193.282 234.501 193.618C235.214 195.044 234.638 196.857 233.545 198.011C232.377 199.091 231.002 199.913 229.506 200.424C230.171 198.68 230.611 196.856 230.815 194.998V194.998Z"
                  fill="#263238"
                />
                <path
                  d="M231.169 211.304L231.543 204.864C231.556 204.26 231.64 203.661 231.791 203.077C231.916 202.644 232.119 202.231 232.204 201.791C232.273 201.183 232.218 200.568 232.04 199.984C231.856 199.403 231.749 198.8 231.719 198.191C231.706 197.881 231.763 197.572 231.887 197.288C232.011 197.005 232.198 196.755 232.433 196.558L234.312 196.064C233.696 197.064 233.906 198.331 234.266 199.437C234.626 200.544 235.11 201.657 235.006 202.804C234.868 204.284 233.762 205.604 233.827 207.09C233.931 207.869 234.152 208.627 234.482 209.337C234.82 210.05 234.88 210.867 234.652 211.624C234.601 211.763 234.524 211.89 234.424 211.997C234.324 212.105 234.203 212.191 234.069 212.25C233.814 212.314 233.546 212.314 233.29 212.25L231.837 212.057C231.637 212.056 231.443 211.985 231.287 211.857C231.182 211.694 231.14 211.496 231.169 211.304V211.304Z"
                  fill="#263238"
                />
                <path
                  d="M247.128 215.07C247.128 215.07 247.259 215.07 247.475 214.943C247.629 214.862 247.762 214.746 247.865 214.604C247.967 214.462 248.035 214.297 248.065 214.123C248.075 213.845 248.021 213.568 247.907 213.314C247.794 213.061 247.623 212.838 247.41 212.663C246.805 212.177 246.287 211.589 245.878 210.924C245.704 210.467 245.635 209.977 245.676 209.489C245.717 209.002 245.867 208.53 246.114 208.11C246.664 207.183 247.323 206.328 248.078 205.564C248.908 204.771 249.494 203.749 249.767 202.624C249.943 201.444 249.315 200.277 248.66 199.177C248.006 198.077 247.272 196.944 247.161 195.638C247.05 194.331 247.344 193.184 247.285 192.078C247.271 191.545 247.151 191.021 246.932 190.538C246.705 190.091 246.401 189.689 246.035 189.351C245.372 188.729 244.586 188.256 243.731 187.965C243.03 187.713 242.274 187.671 241.551 187.845C241.007 187.987 240.538 188.338 240.241 188.825C240.148 188.976 240.085 189.145 240.057 189.321C240.029 189.497 240.036 189.678 240.078 189.851C240.137 190.091 240.222 190.198 240.202 190.204C240.111 190.111 240.044 189.997 240.006 189.871C239.954 189.687 239.939 189.494 239.961 189.304C239.984 189.114 240.043 188.931 240.137 188.765C240.431 188.232 240.917 187.838 241.492 187.665C242.25 187.457 243.052 187.482 243.796 187.738C244.692 188.027 245.518 188.507 246.218 189.145C246.614 189.505 246.944 189.934 247.194 190.411C247.437 190.931 247.573 191.496 247.593 192.071C247.659 193.231 247.371 194.418 247.488 195.611C247.606 196.804 248.287 197.891 248.942 199.011C249.29 199.562 249.588 200.144 249.832 200.751C250.082 201.361 250.17 202.028 250.087 202.684C249.804 203.875 249.182 204.956 248.3 205.79C247.551 206.527 246.892 207.353 246.336 208.25C246.104 208.632 245.96 209.063 245.914 209.51C245.869 209.956 245.924 210.408 246.074 210.83C246.461 211.476 246.95 212.053 247.521 212.537C247.748 212.735 247.925 212.985 248.039 213.267C248.153 213.548 248.2 213.853 248.176 214.157C248.143 214.342 248.066 214.517 247.952 214.665C247.838 214.814 247.69 214.932 247.521 215.01C247.399 215.071 247.262 215.092 247.128 215.07Z"
                  fill="#455A64"
                />
                <path
                  d="M238.927 186.798C238.927 186.851 238.724 186.931 238.455 187.178C238.282 187.324 238.139 187.504 238.037 187.708C237.934 187.912 237.874 188.136 237.86 188.365C237.846 188.593 237.878 188.823 237.955 189.038C238.031 189.254 238.15 189.451 238.305 189.618C238.541 189.891 238.75 190.004 238.724 190.051C238.698 190.098 238.455 190.051 238.135 189.798C237.931 189.619 237.77 189.395 237.663 189.143C237.557 188.891 237.507 188.618 237.519 188.345C237.539 188.07 237.621 187.804 237.758 187.567C237.896 187.33 238.085 187.128 238.311 186.978C238.658 186.758 238.92 186.758 238.927 186.798Z"
                  fill="#455A64"
                />
                <path
                  d="M235.528 187.971C235.62 187.971 235.528 188.525 235.757 189.098C235.986 189.671 236.412 189.965 236.412 190.051C236.412 190.138 236.248 190.051 236.045 189.951C235.792 189.772 235.595 189.522 235.478 189.23C235.362 188.939 235.332 188.62 235.391 188.311C235.391 188.078 235.495 187.951 235.528 187.971Z"
                  fill="#455A64"
                />
                <path
                  d="M231.836 212.03C231.746 212.053 231.651 212.053 231.561 212.03C231.299 211.982 231.057 211.86 230.861 211.677C230.542 211.387 230.332 210.993 230.265 210.564C230.215 209.998 230.307 209.429 230.533 208.91C230.803 208.318 231.039 207.71 231.24 207.09C231.333 206.742 231.35 206.377 231.29 206.022C231.23 205.666 231.095 205.328 230.893 205.03C230.415 204.357 229.894 203.716 229.335 203.111C229.053 202.756 228.811 202.369 228.615 201.957C228.403 201.513 228.326 201.014 228.393 200.524C228.484 200.037 228.725 199.591 229.08 199.251C229.403 198.94 229.751 198.657 230.121 198.404C230.82 198.011 231.399 197.43 231.797 196.724C232.043 196.031 232.128 195.29 232.046 194.558C231.981 193.891 231.998 193.219 232.098 192.558C232.19 191.988 232.475 191.469 232.903 191.091C233.226 190.816 233.618 190.638 234.036 190.578C234.297 190.533 234.566 190.558 234.815 190.651C234.902 190.68 234.982 190.728 235.05 190.791C234.731 190.678 234.388 190.65 234.055 190.711C233.672 190.793 233.317 190.977 233.027 191.244C232.654 191.595 232.409 192.066 232.334 192.578C232.255 193.222 232.255 193.873 232.334 194.518C232.431 195.297 232.348 196.09 232.091 196.831C231.679 197.596 231.067 198.23 230.324 198.664C229.669 199.157 228.877 199.711 228.733 200.557C228.718 200.984 228.787 201.409 228.937 201.807C229.086 202.206 229.313 202.57 229.604 202.877C230.167 203.497 230.69 204.154 231.168 204.844C231.381 205.193 231.528 205.58 231.6 205.984C231.654 206.372 231.627 206.767 231.522 207.144C231.308 207.773 231.054 208.388 230.762 208.984C230.536 209.46 230.432 209.988 230.461 210.517C230.506 210.911 230.682 211.278 230.959 211.557C231.201 211.796 231.506 211.96 231.836 212.03Z"
                  fill="#455A64"
                />
                <path
                  d="M232.655 211.183C232.907 211.059 233.103 210.842 233.205 210.577C233.297 210.262 233.278 209.925 233.153 209.623C233.022 209.257 232.799 208.843 232.655 208.344C232.328 207.156 232.412 205.89 232.891 204.757C233.146 204.09 233.624 203.557 233.88 202.924C234.013 202.619 234.034 202.276 233.939 201.957C233.797 201.62 233.612 201.304 233.389 201.017C233.141 200.689 232.983 200.301 232.93 199.891C232.907 199.499 232.951 199.106 233.061 198.731C233.296 198.089 233.431 197.414 233.461 196.731C233.408 195.437 232.911 194.264 233.009 193.198C233.027 192.723 233.172 192.262 233.428 191.864C233.626 191.566 233.891 191.319 234.2 191.144C234.401 191.028 234.625 190.958 234.855 190.938C234.93 190.92 235.009 190.92 235.084 190.938C234.809 191.01 234.545 191.119 234.299 191.264C233.981 191.477 233.721 191.767 233.543 192.108C233.364 192.449 233.273 192.831 233.277 193.218C233.278 193.76 233.348 194.3 233.487 194.824C233.651 195.446 233.758 196.082 233.808 196.724C233.787 197.443 233.655 198.154 233.415 198.831C233.318 199.166 233.278 199.515 233.297 199.864C233.345 200.217 233.485 200.551 233.703 200.831C233.941 201.146 234.139 201.491 234.292 201.857C234.414 202.255 234.388 202.684 234.22 203.064C233.919 203.777 233.454 204.304 233.212 204.904C232.743 205.967 232.642 207.161 232.924 208.29C233.042 208.77 233.245 209.177 233.362 209.577C233.491 209.92 233.491 210.3 233.362 210.643C233.274 210.857 233.114 211.032 232.911 211.137C232.833 211.181 232.743 211.197 232.655 211.183Z"
                  fill="#455A64"
                />
                <path
                  d="M221.126 218.343L224.347 226.416L221.302 248.142L219.856 258.741H214.141L214.913 246.795L216.753 230.563L221.126 218.343Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M254.756 221.236L251.104 226.416L253.29 247.608L255.306 258.741H261.074L259.673 246.255L258.697 230.563L254.756 221.236Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M214.979 236.036C214.979 236.036 216.013 229.509 216.694 227.063C217.375 224.616 218.893 219.343 220.713 217.636C222.533 215.93 223.738 216.103 226.998 215.03C229.44 214.23 231.423 213.503 231.423 213.503L232.183 212.47C234.232 218.056 241.158 216.736 242.48 212.47L243.089 213.45C243.089 213.45 253.341 216.896 254.984 219.45C256.627 222.003 260.372 236.369 260.372 236.369L251.351 237.036L251.128 232.269C251.128 232.269 249.819 238.309 250.277 243.062C250.67 247.242 251.586 258.768 251.586 258.768H223.692C223.692 258.768 224.484 244.455 224.589 241.735C224.661 239.735 224.072 231.816 224.072 231.816L223.417 237.149L214.979 236.036Z"
                  fill="#240155"
                />
                <path
                  d="M243.037 213.257C242.75 214.067 242.305 214.81 241.729 215.442C241.153 216.073 240.458 216.579 239.685 216.929C238.912 217.28 238.077 217.468 237.231 217.482C236.386 217.495 235.546 217.335 234.762 217.01C233.974 216.719 233.262 216.248 232.681 215.633C232.1 215.019 231.665 214.276 231.41 213.463L232.124 212.29C232.478 213.419 233.192 214.396 234.152 215.066C235.112 215.736 236.264 216.061 237.426 215.99C241.394 215.83 242.297 212.21 242.428 212.29L243.037 213.27"
                  fill="#263238"
                />
                <path
                  d="M231.896 214.257C231.55 214.421 231.191 214.555 230.823 214.657L227.87 215.603L225.828 216.27C225.094 216.503 224.309 216.743 223.517 217.076C222.691 217.403 221.93 217.88 221.271 218.483C220.595 219.165 220.056 219.976 219.687 220.87C219.288 221.783 218.993 222.73 218.699 223.636C218.404 224.543 218.142 225.429 217.9 226.269C217.415 227.956 217.01 229.489 216.676 230.776C216.342 232.062 216.1 233.049 215.903 233.822C215.829 234.202 215.724 234.574 215.589 234.936C215.575 234.838 215.575 234.74 215.589 234.642C215.622 234.442 215.674 234.162 215.746 233.796C215.89 233.062 216.113 232.009 216.401 230.716C216.689 229.423 217.088 227.883 217.559 226.183C217.795 225.336 218.05 224.443 218.338 223.516C218.619 222.562 218.954 221.625 219.34 220.71C219.727 219.777 220.292 218.931 221.003 218.223C221.695 217.596 222.494 217.101 223.36 216.763C224.171 216.43 224.97 216.203 225.703 215.983L227.759 215.383L230.783 214.517C231.147 214.401 231.519 214.314 231.896 214.257V214.257Z"
                  fill="white"
                />
                <path
                  d="M259.437 234.562C259.264 234.229 259.119 233.881 259.005 233.522C258.73 232.789 258.35 231.816 257.938 230.643C257.047 228.223 255.889 224.823 254.527 221.136C254.353 220.698 254.122 220.285 253.84 219.91C253.546 219.558 253.21 219.247 252.838 218.983C252.118 218.477 251.366 218.021 250.586 217.617C249.107 216.817 247.725 216.183 246.56 215.67L243.778 214.477C243.431 214.346 243.094 214.19 242.77 214.01C243.132 214.092 243.487 214.206 243.83 214.35C244.485 214.597 245.467 214.957 246.652 215.443C247.837 215.93 249.231 216.543 250.737 217.337C251.531 217.729 252.298 218.174 253.034 218.67C253.857 219.223 254.489 220.025 254.841 220.963C256.216 224.69 257.329 228.076 258.167 230.529L259.129 233.442C259.258 233.808 259.361 234.182 259.437 234.562V234.562Z"
                  fill="white"
                />
                <path
                  d="M232.171 237.516C231.529 237.107 231.021 236.513 230.711 235.809C230.359 234.966 230.178 234.059 230.178 233.142C230.178 232.226 230.359 231.319 230.711 230.476C231.023 229.774 231.53 229.18 232.171 228.769C232.819 228.389 233.554 228.189 234.302 228.189C235.05 228.189 235.784 228.389 236.433 228.769C237.073 229.18 237.58 229.774 237.892 230.476C238.244 231.319 238.426 232.226 238.426 233.142C238.426 234.059 238.244 234.966 237.892 235.809C237.582 236.513 237.074 237.107 236.433 237.516C235.786 237.9 235.05 238.102 234.302 238.102C233.553 238.102 232.818 237.9 232.171 237.516V237.516ZM235.372 235.236C235.896 233.896 235.896 232.402 235.372 231.063C235.269 230.864 235.115 230.699 234.926 230.583C234.738 230.467 234.522 230.406 234.302 230.406C234.082 230.406 233.866 230.467 233.677 230.583C233.488 230.699 233.334 230.864 233.231 231.063C232.707 232.402 232.707 233.896 233.231 235.236C233.334 235.434 233.488 235.6 233.677 235.715C233.866 235.831 234.082 235.892 234.302 235.892C234.522 235.892 234.738 235.831 234.926 235.715C235.115 235.6 235.269 235.434 235.372 235.236V235.236Z"
                  fill="#263238"
                />
                <path
                  d="M243.227 228.389V237.909H240.609V230.469H238.867V228.389H243.227Z"
                  fill="#263238"
                />
                <path
                  d="M214.895 236.216L215.196 234.309L223.595 235.276L223.379 237.256L214.895 236.216Z"
                  fill="#263238"
                />
                <path
                  d="M251.364 237.082L251.279 235.202L259.855 234.629L260.333 236.429L251.364 237.082Z"
                  fill="#263238"
                />
                <path
                  d="M214.914 236.216L215.484 236.269L217.127 236.456L223.411 237.182L223.333 237.249C223.503 235.622 223.706 233.742 223.922 231.669H224.099C224.23 233.369 224.361 235.222 224.478 237.222C224.537 238.216 224.596 239.222 224.629 240.322C224.654 241.434 224.624 242.547 224.537 243.655C224.308 248.175 224.053 253.215 223.778 258.655L223.634 258.508L251.542 258.601L251.378 258.781C251.051 254.822 250.723 250.715 250.363 246.502C250.272 245.449 250.187 244.382 250.095 243.315C249.995 242.236 249.958 241.152 249.984 240.069C250.046 237.873 250.265 235.686 250.638 233.523C250.723 233.043 250.808 232.563 250.907 232.089L251.169 230.816L251.241 232.116C251.341 233.796 251.435 235.456 251.522 237.096L251.345 236.936L260.307 236.269L260.157 236.482C259.437 233.729 258.697 231.023 257.931 228.383C257.165 225.743 256.386 223.143 255.417 220.703C255.286 220.41 255.175 220.096 255.018 219.816L254.795 219.396C254.704 219.27 254.599 219.156 254.501 219.036C254.286 218.81 254.056 218.599 253.813 218.403C253.551 218.223 253.296 218.037 253.034 217.863C251.967 217.203 250.858 216.615 249.715 216.103C247.457 215.07 245.192 214.197 242.979 213.437H242.926V213.39C242.717 213.05 242.514 212.723 242.318 212.403H242.58C242.187 213.59 241.396 214.597 240.347 215.25C239.35 215.889 238.193 216.22 237.015 216.203C235.877 216.188 234.775 215.792 233.879 215.077C233.042 214.368 232.401 213.449 232.02 212.41H232.243C231.974 212.783 231.725 213.117 231.483 213.443V213.477H231.444L228.125 214.617C227.051 214.997 225.984 215.337 224.937 215.61C223.917 215.819 222.928 216.164 221.997 216.637C221.147 217.114 220.429 217.802 219.909 218.636C219.018 220.184 218.302 221.83 217.775 223.543C217.258 225.116 216.813 226.569 216.498 227.889C215.916 230.556 215.582 232.656 215.326 234.069C215.209 234.769 215.117 235.309 215.052 235.682C214.986 236.056 214.947 236.236 214.947 236.236C214.947 236.236 214.947 236.042 215.019 235.676C215.091 235.309 215.15 234.762 215.254 234.056C215.484 232.636 215.798 230.536 216.361 227.856C216.669 226.523 217.107 225.07 217.611 223.49C218.131 221.755 218.847 220.089 219.745 218.523C220.277 217.653 221.016 216.933 221.893 216.43C222.837 215.943 223.841 215.587 224.878 215.37C225.919 215.097 226.973 214.757 228.046 214.37L231.359 213.223L231.3 213.263C231.542 212.93 231.784 212.597 232.059 212.23L232.19 212.043L232.282 212.263C232.645 213.255 233.259 214.131 234.063 214.803C234.912 215.484 235.96 215.857 237.041 215.863C238.164 215.88 239.268 215.563 240.216 214.95C241.2 214.337 241.943 213.394 242.318 212.283L242.416 211.977L242.586 212.25L243.195 213.23L243.116 213.17C245.349 213.937 247.614 214.803 249.885 215.837C251.042 216.352 252.164 216.944 253.244 217.61C253.519 217.79 253.781 217.983 254.049 218.17C254.31 218.372 254.555 218.595 254.782 218.837C254.893 218.97 255.005 219.096 255.109 219.236L255.345 219.676C255.509 219.976 255.62 220.283 255.764 220.59C256.746 223.063 257.512 225.656 258.291 228.296C259.07 230.936 259.803 233.629 260.523 236.409L260.576 236.609H260.373L251.411 237.276H251.208V237.102C251.116 235.454 251.022 233.794 250.926 232.123H251.267C251.169 232.589 251.083 233.069 250.998 233.543C250.629 235.688 250.41 237.858 250.344 240.036C250.318 241.106 250.355 242.176 250.455 243.242C250.54 244.315 250.632 245.375 250.717 246.429C251.064 250.648 251.371 254.755 251.725 258.715V258.895H251.542L223.641 258.755H223.49V258.601C223.785 253.155 224.053 248.129 224.295 243.602C224.348 242.469 224.452 241.375 224.4 240.316C224.348 239.256 224.321 238.216 224.269 237.222C224.158 235.222 224.033 233.369 223.915 231.669H224.092C223.863 233.742 223.654 235.616 223.47 237.242V237.316H223.405L217.081 236.516L215.457 236.302L214.914 236.216Z"
                  fill="#263238"
                />
                <path
                  d="M248.15 223.949H245.08V226.023H248.15V223.949Z"
                  fill="white"
                />
                <path
                  d="M248.262 226.676C247.2 226.907 246.103 226.907 245.041 226.676C246.103 226.445 247.2 226.445 248.262 226.676V226.676Z"
                  fill="white"
                />
                <path
                  d="M229.728 225.296C229.728 225.56 229.651 225.818 229.507 226.037C229.363 226.256 229.159 226.427 228.92 226.528C228.68 226.629 228.417 226.655 228.163 226.604C227.909 226.552 227.676 226.425 227.493 226.239C227.31 226.052 227.185 225.815 227.135 225.556C227.084 225.298 227.11 225.03 227.209 224.786C227.308 224.542 227.476 224.334 227.691 224.188C227.907 224.041 228.16 223.963 228.419 223.963C228.766 223.963 229.099 224.103 229.344 224.353C229.59 224.603 229.728 224.943 229.728 225.296Z"
                  fill="white"
                />
                <path
                  d="M264.621 258.741C264.621 258.835 252.523 258.915 237.61 258.915C222.698 258.915 210.6 258.835 210.6 258.741C210.6 258.648 222.691 258.568 237.61 258.568C252.53 258.568 264.621 258.648 264.621 258.741Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M238.474 265.681C250.651 265.681 260.523 264.672 260.523 263.428C260.523 262.183 250.651 261.175 238.474 261.175C226.297 261.175 216.426 262.183 216.426 263.428C216.426 264.672 226.297 265.681 238.474 265.681Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M232.323 54.5573C232.361 54.3135 232.46 54.0839 232.611 53.8906C233.081 53.2218 233.783 52.7595 234.575 52.5974C233.896 52.2888 233.281 51.8523 232.761 51.3108C232.507 51.0355 232.327 50.6985 232.238 50.332C232.148 49.9655 232.153 49.5818 232.251 49.2175C232.4 48.8776 232.619 48.5743 232.894 48.3282C233.168 48.082 233.491 47.8988 233.841 47.7909C234.784 47.3854 235.832 47.3126 236.82 47.5843C237.309 47.7243 237.758 47.9831 238.127 48.3384C238.497 48.6936 238.776 49.1349 238.941 49.6242L237.992 52.1041C237.86 53.0765 237.478 53.9962 236.886 54.7706C236.772 54.9641 236.61 55.1227 236.415 55.2295C236.22 55.3363 236 55.3874 235.779 55.3772C235.597 55.3241 235.435 55.2137 235.317 55.0618C235.2 54.9098 235.132 54.7239 235.125 54.5306C235.113 54.1441 235.185 53.7596 235.334 53.404C234.846 54.1143 234.194 54.6913 233.436 55.0839C233.314 55.1668 233.174 55.2196 233.029 55.2381C232.884 55.2567 232.736 55.2404 232.598 55.1906C232.499 55.1208 232.422 55.0248 232.373 54.9131C232.325 54.8015 232.307 54.6784 232.323 54.5573Z"
                  fill="#263238"
                />
                <path
                  d="M237.75 51.9974C237.721 51.7972 237.732 51.5933 237.782 51.3975C237.845 50.5944 238.142 49.8286 238.633 49.1976C238.677 49.1428 238.732 49.0983 238.794 49.0672C238.856 49.0362 238.924 49.0192 238.994 49.0176C239.216 49.0176 239.308 49.3242 239.269 49.5509C239.201 49.7672 239.159 49.991 239.144 50.2175L238.771 51.8175C238.757 51.9946 238.688 52.1626 238.575 52.2974C238.516 52.3626 238.442 52.4111 238.359 52.438C238.276 52.4649 238.188 52.4693 238.103 52.4508C238.009 52.4152 237.927 52.3541 237.864 52.2742C237.802 52.1943 237.763 52.0986 237.75 51.9974V51.9974Z"
                  fill="#455A64"
                />
                <path
                  d="M239.184 63.0369C238.523 61.3068 238.008 59.5227 237.645 57.7038C237.289 55.8711 237.384 53.9772 237.92 52.1907C238.005 51.9241 238.778 50.1308 239.053 50.1508C239.328 50.1708 238.791 51.8307 238.895 51.9974C239.845 53.6752 240.272 55.6069 240.12 57.5371C240.008 59.4043 239.694 61.2532 239.184 63.0502"
                  fill="#263238"
                />
                <path
                  d="M239.477 72.7497L238.822 55.9504C238.534 51.284 240.956 47.2841 245.532 47.0908H246.03C248.066 47.1394 250.009 47.9667 251.473 49.4083C252.937 50.8499 253.815 52.7999 253.931 54.8705C254.154 58.9236 254.357 63.4234 254.278 65.5967C254.121 70.0698 249.696 70.6564 249.696 70.6564C249.696 70.6564 249.696 71.6964 249.696 73.0096C249.502 74.098 248.935 75.0808 248.095 75.7828C247.256 76.4849 246.199 76.8606 245.113 76.8428C241.028 76.9761 239.477 72.7497 239.477 72.7497Z"
                  fill="#AA645B"
                />
                <path
                  d="M249.69 70.6697C247.66 70.6165 245.688 69.971 244.008 68.8098C244.008 68.8098 245.317 72.0963 249.723 71.803L249.69 70.6697Z"
                  fill="#814742"
                />
                <path
                  d="M252.138 58.7705C252.13 58.9358 252.062 59.0923 251.947 59.2093C251.832 59.3264 251.678 59.3957 251.516 59.4038C251.434 59.4111 251.352 59.4013 251.274 59.375C251.196 59.3487 251.124 59.3065 251.063 59.251C251.002 59.1954 250.952 59.1277 250.917 59.0519C250.883 58.9762 250.864 58.894 250.861 58.8105C250.861 58.6404 250.925 58.4766 251.039 58.3527C251.153 58.2288 251.31 58.154 251.477 58.1438C251.562 58.1353 251.648 58.1453 251.728 58.1731C251.809 58.2009 251.884 58.246 251.946 58.3052C252.009 58.3645 252.058 58.4366 252.091 58.5168C252.124 58.5971 252.14 58.6835 252.138 58.7705V58.7705Z"
                  fill="#263238"
                />
                <path
                  d="M252.925 56.8572C252.846 56.9438 252.381 56.5705 251.707 56.5572C251.033 56.5439 250.529 56.8772 250.457 56.7905C250.385 56.7039 250.502 56.6039 250.725 56.4505C251.021 56.2493 251.371 56.1468 251.727 56.1572C252.078 56.1649 252.417 56.2863 252.696 56.5039C252.898 56.6705 252.964 56.8239 252.925 56.8572Z"
                  fill="#263238"
                />
                <path
                  d="M245.971 58.7703C245.962 58.9334 245.894 59.0873 245.781 59.2029C245.667 59.3184 245.516 59.3874 245.356 59.397C245.274 59.4052 245.192 59.3964 245.114 59.3709C245.036 59.3453 244.965 59.3038 244.903 59.2487C244.842 59.1937 244.792 59.1264 244.757 59.051C244.723 58.9755 244.703 58.8936 244.701 58.8103C244.701 58.6402 244.764 58.4765 244.879 58.3525C244.993 58.2286 245.15 58.1539 245.317 58.1437C245.401 58.1362 245.486 58.1469 245.566 58.1752C245.646 58.2034 245.72 58.2486 245.782 58.3078C245.843 58.367 245.892 58.4387 245.925 58.5184C245.958 58.5982 245.973 58.684 245.971 58.7703V58.7703Z"
                  fill="#263238"
                />
                <path
                  d="M246.509 56.9304C246.43 57.0104 245.965 56.6438 245.291 56.6238C244.617 56.6038 244.113 56.9437 244.041 56.8571C243.969 56.7704 244.086 56.6704 244.309 56.5171C244.606 56.3187 244.956 56.2185 245.311 56.2304C245.66 56.2393 245.999 56.3581 246.28 56.5704C246.482 56.7438 246.548 56.8904 246.509 56.9304Z"
                  fill="#263238"
                />
                <path
                  d="M248.591 62.2502C248.948 62.1422 249.318 62.0839 249.691 62.0769C249.861 62.0769 250.024 62.0302 250.057 61.9102C250.076 61.73 250.04 61.5483 249.952 61.3902C249.802 60.9569 249.645 60.5103 249.475 60.057C249.028 58.9148 248.674 57.7376 248.414 56.5371C248.941 57.6412 249.379 58.7871 249.723 59.9636C249.887 60.4369 250.038 60.8903 250.182 61.2969C250.279 61.5043 250.305 61.7394 250.254 61.9635C250.229 62.0253 250.19 62.08 250.139 62.1229C250.089 62.1659 250.03 62.1958 249.966 62.2102C249.869 62.2349 249.77 62.2483 249.671 62.2502C249.312 62.2963 248.949 62.2963 248.591 62.2502V62.2502Z"
                  fill="#263238"
                />
                <path
                  d="M246.626 54.5571C246.534 54.7371 245.88 54.5571 245.081 54.5571C244.282 54.5571 243.621 54.6638 243.536 54.4838C243.451 54.3038 243.641 54.2372 243.916 54.0972C244.288 53.9254 244.695 53.8433 245.103 53.8572C245.512 53.8711 245.912 53.9806 246.273 54.1772C246.534 54.3105 246.659 54.4771 246.626 54.5571Z"
                  fill="#263238"
                />
                <path
                  d="M253.017 55.0973C252.872 55.2506 252.362 55.0973 251.707 55.0439C251.053 54.9906 250.503 55.1173 250.398 54.9506C250.293 54.7839 250.437 54.7106 250.679 54.5706C251.015 54.3974 251.391 54.3213 251.766 54.3506C252.14 54.3601 252.503 54.4781 252.814 54.6906C253.01 54.8573 253.082 55.0239 253.017 55.0973Z"
                  fill="#263238"
                />
                <path
                  d="M239.078 59.2703C238.999 59.237 236.079 58.2904 236.106 61.3503C236.132 64.4101 239.143 63.7501 239.143 63.6635C239.143 63.5768 239.078 59.2703 239.078 59.2703Z"
                  fill="#AA645B"
                />
                <path
                  d="M238.221 62.5235C238.221 62.5235 238.168 62.5568 238.077 62.5968C238.015 62.6243 237.948 62.6385 237.88 62.6385C237.813 62.6385 237.746 62.6243 237.684 62.5968C237.49 62.4718 237.331 62.297 237.224 62.0899C237.117 61.8827 237.066 61.6506 237.075 61.4169C237.067 61.1558 237.116 60.8962 237.219 60.6569C237.311 60.4302 237.448 60.2702 237.612 60.2436C237.671 60.2276 237.734 60.2328 237.79 60.2583C237.846 60.2837 237.892 60.328 237.919 60.3836C237.959 60.4702 237.919 60.5302 237.959 60.5369C237.998 60.5436 238.024 60.4836 237.998 60.3636C237.98 60.2863 237.936 60.2179 237.874 60.1702C237.833 60.1393 237.786 60.1169 237.737 60.1043C237.687 60.0917 237.636 60.0892 237.586 60.0969C237.463 60.1214 237.348 60.1779 237.253 60.2608C237.158 60.3437 237.085 60.4503 237.042 60.5702C236.918 60.8388 236.857 61.1334 236.865 61.4302C236.85 61.7062 236.916 61.9806 237.055 62.2182C237.194 62.4557 237.399 62.6456 237.645 62.7635C237.725 62.7862 237.81 62.7903 237.893 62.7753C237.976 62.7603 238.054 62.7266 238.122 62.6768C238.214 62.5901 238.227 62.5235 238.221 62.5235Z"
                  fill="#814742"
                />
                <path
                  d="M251.863 49.9241C252.341 49.6441 250.855 48.0642 249.65 47.5309C247.831 46.7309 245.068 46.2643 243.412 46.7709C241.415 47.3842 239.765 48.4308 238.79 50.3041C237.853 52.2153 237.431 54.3454 237.566 56.4771C237.549 57.128 237.708 57.7712 238.024 58.337C238.449 59.0037 239.261 59.417 239.242 60.337C239.226 60.6777 239.344 61.0107 239.569 61.2636C240.132 61.8502 240.793 61.2636 241.094 60.7169C241.635 59.4584 241.884 58.0896 241.821 56.7171C241.898 55.7413 241.817 54.7591 241.579 53.8106C241.428 53.3039 241.179 52.824 241.055 52.3106C240.974 52.058 240.949 51.7904 240.98 51.5267C241.012 51.2629 241.1 51.0095 241.238 50.7841C241.311 50.6905 241.393 50.6035 241.48 50.5241C241.892 50.1427 242.396 49.8799 242.94 49.7627C243.484 49.6455 244.049 49.6782 244.577 49.8574C246.279 50.4374 249.159 51.2974 249.932 50.6974C250.458 50.322 250.904 49.8411 251.241 49.2841L251.863 49.9241Z"
                  fill="#263238"
                />
                <path
                  d="M250.489 69.09C250.554 69.09 250.594 68.7966 250.489 68.4233C250.384 68.05 250.259 67.8234 250.2 67.85C250.141 67.8767 250.2 68.15 250.253 68.4767C250.305 68.8033 250.417 69.0966 250.489 69.09Z"
                  fill="#263238"
                />
                <path
                  d="M249.671 69.19C249.736 69.19 249.749 68.9566 249.736 68.69C249.723 68.4233 249.684 68.2033 249.618 68.1967C249.553 68.19 249.481 68.4167 249.494 68.7033C249.507 68.99 249.605 69.19 249.671 69.19Z"
                  fill="#263238"
                />
                <path
                  d="M248.925 69.2565C248.99 69.2565 249.029 69.0165 249.016 68.7298C249.003 68.4432 248.938 68.2032 248.872 68.2099C248.807 68.2165 248.761 68.4498 248.774 68.7365C248.787 69.0232 248.852 69.2631 248.925 69.2565Z"
                  fill="#263238"
                />
                <path
                  d="M247.935 69.0431C248.001 69.0431 248.093 68.8565 248.139 68.5965C248.184 68.3365 248.171 68.1165 248.106 68.1032C248.04 68.0898 247.948 68.2898 247.903 68.5498C247.857 68.8098 247.883 69.0298 247.935 69.0431Z"
                  fill="#263238"
                />
                <path
                  d="M246.876 63.2569C246.974 63.2169 247.19 63.8768 247.897 64.1568C248.604 64.4368 249.272 64.1568 249.304 64.2168C249.337 64.2768 249.193 64.3968 248.905 64.5035C248.528 64.6408 248.117 64.6408 247.74 64.5035C247.383 64.3634 247.092 64.0889 246.928 63.7368C246.81 63.4569 246.83 63.2702 246.876 63.2569Z"
                  fill="#263238"
                />
                <path
                  d="M228.447 77.6628L231.668 85.7291L228.624 107.461L227.177 118.061H221.469L222.235 106.108L224.074 89.8823L228.447 77.6628Z"
                  fill="#AA645B"
                />
                <path
                  d="M262.077 80.5562L258.424 85.7292L260.61 106.928L262.627 118.061H268.394L266.993 105.575L266.018 89.8824L262.077 80.5562Z"
                  fill="#AA645B"
                />
                <path
                  d="M222.234 95.5553C222.234 95.5553 223.275 88.669 223.963 86.2224C224.65 83.7758 226.162 78.5027 227.982 76.7962C229.802 75.0896 231 75.2629 234.267 74.1896C236.709 73.383 238.692 72.663 238.692 72.663L239.445 71.623C241.501 77.2161 248.427 75.8962 249.749 71.623L250.358 72.6097C250.358 72.6097 260.603 76.0562 262.246 78.6094C263.89 81.1626 267.654 95.7686 267.654 95.7686L258.22 96.4353L258.404 91.4755C258.404 91.4755 257.094 97.5152 257.559 102.262C257.952 106.448 258.869 118.088 258.869 118.088L230.961 117.994C230.961 117.994 231.753 103.688 231.858 100.968C231.93 98.9685 231.341 91.0488 231.341 91.0488L230.732 96.6286L222.234 95.5553Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M241.121 75.803C240.88 75.9431 240.628 76.0635 240.368 76.163L238.313 77.1096C237.455 77.5162 236.408 77.9762 235.315 78.5762C234.124 79.2134 233.109 80.1438 232.362 81.2827C231.663 82.4542 231.234 83.7715 231.105 85.1359C231.023 86.258 231.049 87.3856 231.184 88.5024C231.269 89.409 231.347 90.1757 231.4 90.789C231.436 91.0678 231.436 91.3501 231.4 91.6289C231.324 91.3585 231.272 91.0819 231.243 90.8023C231.164 90.269 231.04 89.469 230.922 88.5291C230.747 87.3939 230.694 86.2427 230.765 85.0959C230.891 83.6772 231.339 82.3078 232.074 81.0961C232.849 79.909 233.911 78.9448 235.157 78.2962C236.297 77.6962 237.344 77.2696 238.221 76.8829C239.098 76.4963 239.819 76.2163 240.323 76.043C240.578 75.9282 240.846 75.8475 241.121 75.803V75.803Z"
                  fill="#240155"
                />
                <path
                  d="M258.411 91.4221C258.379 91.1319 258.379 90.839 258.411 90.5488C258.411 89.9822 258.496 89.1689 258.594 88.1756C258.725 87.0183 258.753 85.8515 258.679 84.6891C258.619 83.2758 258.18 81.9063 257.409 80.7292C256.544 79.6104 255.419 78.7284 254.136 78.1627C252.964 77.6094 251.877 77.1561 250.974 76.7761L248.807 75.8961C248.536 75.8071 248.273 75.6933 248.021 75.5562C248.306 75.5892 248.585 75.6586 248.853 75.7628C249.383 75.9295 250.162 76.1961 251.059 76.5494C251.956 76.9028 253.075 77.3294 254.273 77.8827C255.609 78.4593 256.775 79.378 257.658 80.5493C258.466 81.775 258.919 83.2071 258.967 84.6824C259.029 85.865 258.974 87.0509 258.804 88.2222C258.679 89.2155 258.574 90.0155 258.516 90.5755C258.505 90.8603 258.47 91.1436 258.411 91.4221V91.4221Z"
                  fill="#240155"
                />
                <path
                  d="M250.357 72.5764C250.07 73.387 249.625 74.1301 249.049 74.7612C248.473 75.3923 247.778 75.8984 247.005 76.2489C246.232 76.5995 245.398 76.7873 244.552 76.8012C243.706 76.8151 242.866 76.6547 242.082 76.3296C241.295 76.0375 240.584 75.5661 240.003 74.9515C239.422 74.3368 238.987 73.5952 238.73 72.7831L239.444 71.6032C239.797 72.7335 240.51 73.7117 241.471 74.3829C242.431 75.0542 243.584 75.3803 244.747 75.3096C248.714 75.143 249.617 71.5298 249.748 71.6032L250.357 72.5898"
                  fill="#240155"
                />
                <path
                  d="M239.215 73.5764C238.869 73.7397 238.51 73.8713 238.141 73.9697L235.189 74.923L233.146 75.5897C232.413 75.823 231.627 76.063 230.835 76.3963C230.008 76.7205 229.247 77.1973 228.59 77.8029C227.913 78.4835 227.377 79.2949 227.012 80.1894C226.632 81.0927 226.299 82.0162 226.017 82.956C225.729 83.8626 225.467 84.7426 225.218 85.5892C224.734 87.2758 224.328 88.8091 223.994 90.089L223.222 93.1422C223.146 93.5211 223.041 93.8934 222.907 94.2555C222.893 94.156 222.893 94.0549 222.907 93.9555C222.94 93.7622 222.992 93.4755 223.065 93.1155C223.209 92.3822 223.431 91.3289 223.719 90.029C224.007 88.7291 224.407 87.1958 224.878 85.5025C225.114 84.6492 225.375 83.7626 225.657 82.836C225.943 81.8834 226.277 80.9466 226.659 80.0295C227.011 79.1161 227.552 78.2908 228.246 77.6098C228.939 76.9287 229.769 76.408 230.678 76.083C231.447 75.7797 232.232 75.5193 233.028 75.303L235.084 74.703L238.115 73.8564C238.474 73.7358 238.842 73.6422 239.215 73.5764Z"
                  fill="#240155"
                />
                <path
                  d="M266.757 93.8555C266.582 93.5257 266.437 93.1797 266.325 92.8222C266.05 92.0889 265.67 91.1156 265.258 89.9423C264.368 87.5225 263.209 84.1159 261.854 80.4294C261.672 79.9934 261.439 79.5815 261.16 79.2028C260.866 78.8535 260.53 78.5443 260.158 78.2829C259.438 77.7871 258.686 77.3417 257.906 76.9496C256.427 76.1496 255.046 75.5163 253.88 75.003L251.098 73.8097C250.749 73.6827 250.411 73.5243 250.09 73.3364C250.451 73.4261 250.805 73.542 251.15 73.6831C251.805 73.9297 252.787 74.2897 253.972 74.7764C255.157 75.263 256.551 75.8763 258.057 76.6696C258.853 77.0703 259.621 77.5269 260.355 78.0362C260.751 78.316 261.11 78.6477 261.422 79.0228C261.729 79.4294 261.978 79.8783 262.162 80.3561C263.536 84.0759 264.649 87.4625 265.487 89.9223L266.45 92.8355C266.574 93.1681 266.677 93.5089 266.757 93.8555V93.8555Z"
                  fill="#240155"
                />
                <path
                  d="M242.699 87.709V97.2286H240.081V89.7889H238.346V87.709H242.699Z"
                  fill="#240155"
                />
                <path
                  d="M246.069 96.8353C245.431 96.4214 244.924 95.8288 244.609 95.1287C244.258 94.2854 244.076 93.3785 244.076 92.4622C244.076 91.5459 244.258 90.639 244.609 89.7956C244.924 89.0955 245.431 88.5029 246.069 88.089C246.715 87.6943 247.457 87.4912 248.21 87.5024C248.957 87.4921 249.692 87.6953 250.331 88.089C250.971 88.5019 251.48 89.0946 251.797 89.7956C252.145 90.6401 252.324 91.5466 252.324 92.4622C252.324 93.3778 252.145 94.2842 251.797 95.1287C251.48 95.8297 250.971 96.4224 250.331 96.8353C249.692 97.229 248.957 97.4323 248.21 97.4219C247.457 97.4332 246.715 97.23 246.069 96.8353V96.8353ZM249.27 94.5554C249.794 93.2155 249.794 91.7221 249.27 90.3823C249.171 90.1823 249.02 90.0141 248.833 89.8965C248.645 89.7788 248.43 89.7162 248.21 89.7156C247.988 89.7153 247.77 89.7773 247.581 89.895C247.391 90.0126 247.238 90.1812 247.136 90.3823C246.604 91.7205 246.604 93.2171 247.136 94.5554C247.238 94.7564 247.391 94.9251 247.581 95.0427C247.77 95.1603 247.988 95.2224 248.21 95.222C248.425 95.2166 248.635 95.1517 248.818 95.0343C249 94.9169 249.147 94.7514 249.244 94.5554H249.27Z"
                  fill="#240155"
                />
                <path
                  d="M222.234 95.5288L222.536 93.6289L230.941 94.5955L230.725 96.5754L222.234 95.5288Z"
                  fill="#240155"
                />
                <path
                  d="M258.221 96.3819L258.424 94.8287L267.176 93.9487L267.654 95.7486L258.221 96.3819Z"
                  fill="#240155"
                />
                <path
                  d="M255.471 83.2693H252.4V85.3425H255.471V83.2693Z"
                  fill="white"
                />
                <path
                  d="M255.582 85.9958C254.521 86.2269 253.423 86.2269 252.361 85.9958C253.423 85.7647 254.521 85.7647 255.582 85.9958V85.9958Z"
                  fill="white"
                />
                <path
                  d="M235.719 85.9625C236.449 85.9625 237.041 85.3596 237.041 84.6159C237.041 83.8722 236.449 83.2693 235.719 83.2693C234.989 83.2693 234.396 83.8722 234.396 84.6159C234.396 85.3596 234.989 85.9625 235.719 85.9625Z"
                  fill="white"
                />
                <path
                  d="M271.942 118.061C271.942 118.154 259.844 118.234 244.931 118.234C230.018 118.234 217.92 118.154 217.92 118.061C217.92 117.968 230.011 117.888 244.931 117.888C259.85 117.888 271.942 117.961 271.942 118.061Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M267.974 123.247C267.974 124.487 258.102 125.501 245.926 125.501C233.749 125.501 223.877 124.487 223.877 123.247C223.877 122.007 233.749 120.994 245.926 120.994C258.102 120.994 267.974 122.001 267.974 123.247Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M249.656 113.121C248.943 112.375 248.085 111.668 247.83 110.661C247.574 109.655 247.889 108.661 247.391 107.855C246.782 106.855 245.296 106.795 244.563 105.855C244.209 105.415 244.078 104.822 243.731 104.375C243.396 104.029 242.979 103.778 242.52 103.645C242.061 103.511 241.577 103.501 241.113 103.615C240.17 103.762 239.273 104.155 238.324 104.282C237.015 104.442 235.653 104.075 234.396 104.522C233.035 105.015 232.249 106.302 231.411 107.555L230.305 109.008C230.077 109.254 229.827 109.477 229.558 109.675C229.049 109.977 228.567 110.325 228.118 110.715C227.916 110.956 227.764 111.236 227.67 111.538C227.577 111.84 227.544 112.159 227.574 112.474C227.604 112.789 227.696 113.095 227.845 113.374C227.993 113.652 228.195 113.897 228.439 114.095C227.947 114.296 227.532 114.653 227.254 115.112C226.976 115.572 226.85 116.11 226.894 116.648C227.006 117.23 227.186 117.796 227.431 118.334C227.672 118.876 227.718 119.488 227.562 120.061C227.461 120.334 227.26 120.557 227.001 120.681C226.742 120.806 226.445 120.823 226.174 120.728C226.287 121.105 226.48 121.451 226.741 121.743C227.001 122.035 227.322 122.264 227.68 122.414C227.417 122.715 227.052 122.903 226.658 122.941C227.837 125.421 230.783 126.601 233.486 126.474C236.19 126.347 238.723 125.141 241.178 124.014L248.38 121.708C249.034 121.528 249.237 120.721 249.191 120.054C249.056 119.396 249.042 118.718 249.152 118.054C249.433 117.181 250.383 116.681 250.677 115.814C251.005 114.914 250.37 113.855 249.656 113.121Z"
                  fill="#263238"
                />
                <path
                  d="M232.786 120.774C232.134 119.144 231.619 117.46 231.247 115.741C230.881 114.014 230.939 112.22 231.418 110.521C231.496 110.268 232.197 108.555 232.458 108.568C232.72 108.582 232.236 110.161 232.341 110.321C233.264 111.896 233.698 113.718 233.584 115.548C233.512 117.315 233.244 119.068 232.786 120.774"
                  fill="#263238"
                />
                <path
                  d="M232.309 114.081C231.962 109.681 234.188 105.808 238.515 105.575H238.921C240.873 105.58 242.751 106.335 244.18 107.69C245.609 109.044 246.482 110.899 246.626 112.881C246.901 116.701 247.163 120.921 247.123 122.961C247.045 127.201 242.881 127.827 242.881 127.827L243.359 134.767L233.035 133.394L232.309 114.081Z"
                  fill="#E6866E"
                />
                <path
                  d="M242.854 127.854C240.935 127.837 239.061 127.261 237.453 126.194C237.917 127.237 238.699 128.101 239.682 128.657C240.665 129.213 241.798 129.431 242.913 129.281L242.854 127.854Z"
                  fill="#A3594E"
                />
                <path
                  d="M244.962 116.334C244.962 116.492 244.902 116.643 244.795 116.757C244.687 116.87 244.541 116.936 244.386 116.941C244.311 116.947 244.235 116.938 244.163 116.914C244.091 116.89 244.024 116.851 243.968 116.8C243.911 116.749 243.865 116.687 243.832 116.617C243.799 116.547 243.781 116.472 243.777 116.394C243.776 116.236 243.835 116.084 243.943 115.971C244.051 115.857 244.198 115.791 244.353 115.788C244.429 115.782 244.504 115.792 244.576 115.817C244.648 115.842 244.714 115.88 244.77 115.931C244.827 115.982 244.873 116.044 244.906 116.113C244.939 116.182 244.958 116.258 244.962 116.334V116.334Z"
                  fill="#263238"
                />
                <path
                  d="M245.695 114.635C245.623 114.715 245.178 114.375 244.536 114.368C243.895 114.361 243.43 114.688 243.358 114.608C243.286 114.528 243.397 114.435 243.607 114.281C243.884 114.089 244.214 113.989 244.549 113.995C244.881 113.995 245.204 114.102 245.472 114.301C245.669 114.461 245.734 114.601 245.695 114.635Z"
                  fill="#263238"
                />
                <path
                  d="M239.072 116.521C239.072 116.678 239.012 116.83 238.904 116.943C238.797 117.056 238.65 117.122 238.496 117.128C238.42 117.134 238.344 117.125 238.272 117.1C238.2 117.076 238.134 117.037 238.077 116.986C238.02 116.935 237.974 116.873 237.941 116.803C237.909 116.734 237.89 116.658 237.887 116.581C237.885 116.423 237.945 116.271 238.052 116.157C238.16 116.044 238.308 115.978 238.463 115.974C238.538 115.968 238.614 115.977 238.686 116.002C238.758 116.026 238.825 116.065 238.882 116.116C238.938 116.167 238.985 116.229 239.017 116.299C239.05 116.368 239.068 116.444 239.072 116.521V116.521Z"
                  fill="#263238"
                />
                <path
                  d="M239.423 114.861C239.351 114.934 238.9 114.594 238.258 114.594C237.617 114.594 237.152 114.914 237.08 114.834C237.008 114.754 237.126 114.654 237.329 114.508C237.606 114.314 237.935 114.212 238.271 114.214C238.606 114.218 238.93 114.328 239.201 114.528C239.423 114.681 239.469 114.821 239.423 114.861Z"
                  fill="#263238"
                />
                <path
                  d="M241.697 119.854C242.035 119.751 242.385 119.688 242.738 119.668C242.901 119.668 243.058 119.621 243.085 119.508C243.1 119.336 243.064 119.164 242.98 119.014C242.829 118.614 242.672 118.188 242.502 117.748C242.062 116.667 241.708 115.552 241.441 114.415C241.96 115.453 242.398 116.532 242.751 117.641L243.202 118.914C243.311 119.118 243.341 119.356 243.288 119.581C243.263 119.64 243.225 119.692 243.178 119.734C243.13 119.776 243.074 119.805 243.013 119.821C242.923 119.846 242.831 119.859 242.738 119.861C242.392 119.906 242.042 119.904 241.697 119.854V119.854Z"
                  fill="#263238"
                />
                <path
                  d="M239.818 120.314C239.916 120.314 239.916 121.014 240.473 121.521C241.029 122.027 241.782 121.954 241.782 122.047C241.782 122.141 241.618 122.187 241.304 122.194C240.897 122.197 240.503 122.053 240.191 121.787C239.89 121.536 239.697 121.175 239.654 120.781C239.687 120.481 239.766 120.307 239.818 120.314Z"
                  fill="#263238"
                />
                <path
                  d="M239.425 112.221C239.359 112.395 238.724 112.308 237.971 112.395C237.218 112.481 236.616 112.688 236.518 112.528C236.42 112.368 236.577 112.281 236.826 112.115C237.152 111.905 237.522 111.775 237.906 111.735C238.289 111.692 238.678 111.742 239.038 111.881C239.307 111.995 239.425 112.135 239.425 112.221Z"
                  fill="#263238"
                />
                <path
                  d="M245.446 112.474C245.335 112.621 244.897 112.474 244.366 112.474C243.836 112.474 243.384 112.568 243.286 112.408C243.188 112.248 243.286 112.188 243.509 112.048C243.769 111.876 244.076 111.792 244.386 111.808C244.698 111.818 244.999 111.925 245.25 112.115C245.433 112.248 245.499 112.401 245.446 112.474Z"
                  fill="#263238"
                />
                <path
                  d="M232.629 117.188C232.557 117.188 229.775 116.308 229.847 119.188C229.919 122.067 232.76 121.407 232.767 121.327C232.773 121.247 232.629 117.188 232.629 117.188Z"
                  fill="#E6866E"
                />
                <path
                  d="M231.87 120.301C231.87 120.301 231.818 120.334 231.739 120.374C231.62 120.423 231.486 120.423 231.366 120.374C231.18 120.26 231.026 120.097 230.922 119.903C230.817 119.708 230.765 119.489 230.771 119.268C230.757 119.019 230.799 118.77 230.895 118.541C230.919 118.45 230.964 118.367 231.027 118.299C231.09 118.23 231.168 118.178 231.255 118.148C231.311 118.13 231.371 118.133 231.425 118.156C231.479 118.18 231.523 118.221 231.55 118.274C231.589 118.354 231.55 118.414 231.589 118.421C231.628 118.428 231.648 118.368 231.622 118.254C231.606 118.183 231.566 118.12 231.51 118.074C231.428 118.018 231.328 117.994 231.229 118.008C231.114 118.035 231.007 118.092 230.919 118.172C230.831 118.253 230.764 118.354 230.725 118.468C230.613 118.723 230.561 119.002 230.574 119.281C230.569 119.539 230.638 119.792 230.771 120.011C230.905 120.23 231.098 120.405 231.327 120.514C231.404 120.535 231.485 120.537 231.563 120.521C231.642 120.505 231.715 120.471 231.779 120.421C231.864 120.368 231.877 120.308 231.87 120.301Z"
                  fill="#A3594E"
                />
                <path
                  d="M244.596 108.155C245.048 107.881 243.614 106.408 242.469 105.928C240.734 105.195 238.109 104.802 236.577 105.315C235.666 105.553 234.812 105.979 234.07 106.567C233.328 107.156 232.713 107.894 232.263 108.735C231.409 110.559 231.043 112.58 231.202 114.595C231.201 115.211 231.361 115.816 231.667 116.348C232.086 116.974 232.858 117.348 232.858 118.234C232.852 118.394 232.877 118.554 232.932 118.704C232.987 118.854 233.071 118.991 233.179 119.108C233.723 119.654 234.338 119.108 234.613 118.561C235.301 116.445 235.421 114.18 234.96 112.001C234.809 111.521 234.567 111.075 234.436 110.588C234.314 110.3 234.284 109.98 234.353 109.675C234.421 109.369 234.583 109.093 234.816 108.888C235.201 108.523 235.674 108.269 236.187 108.152C236.7 108.035 237.235 108.059 237.736 108.221C239.359 108.741 242.122 109.508 242.816 108.935C243.311 108.581 243.73 108.127 244.046 107.602L244.596 108.155Z"
                  fill="#263238"
                />
                <path
                  d="M236.682 104.915C237.45 104.607 238.271 104.457 239.097 104.474C239.923 104.492 240.738 104.675 241.493 105.015C241.897 105.188 242.263 105.441 242.569 105.761C242.875 106.08 243.115 106.459 243.274 106.875C243.417 107.297 243.409 107.757 243.252 108.174C243.096 108.59 242.8 108.938 242.416 109.155L242.364 109.195C241.322 109.595 240.17 109.573 239.143 109.135C238.115 108.808 237.179 108.201 236.158 107.881C235.055 107.538 233.876 107.538 232.773 107.881C233.797 106.559 235.145 105.536 236.682 104.915V104.915Z"
                  fill="#263238"
                />
                <path
                  d="M221.735 135.054L224.949 143.12L221.912 164.852L220.465 175.445H214.75L215.522 163.499L217.362 147.273L221.735 135.054Z"
                  fill="#E6866E"
                />
                <path
                  d="M255.366 137.947L251.713 143.12L253.893 164.312L255.916 175.445H261.683L260.282 162.966L259.307 147.273L255.366 137.947Z"
                  fill="#E6866E"
                />
                <path
                  d="M215.523 152.946C215.523 152.946 216.564 146.06 217.245 143.613C217.926 141.167 219.451 135.887 221.271 134.187C223.091 132.487 224.289 132.647 227.549 131.58C229.998 130.774 231.981 130.047 231.981 130.047L232.734 129.014C234.783 134.607 241.716 133.28 243.038 129.014L243.647 130.001C243.647 130.001 253.892 133.447 255.536 136C257.179 138.553 260.936 153.186 260.936 153.186L251.509 153.853L251.693 148.886C251.693 148.886 250.383 154.926 250.842 159.679C251.235 163.859 252.151 175.498 252.151 175.498L224.25 175.412C224.25 175.412 225.042 161.106 225.147 158.386C225.219 156.386 224.63 148.46 224.63 148.46L224.021 154.039L215.523 152.946Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M234.402 133.187C234.167 133.336 233.917 133.459 233.656 133.554L231.601 134.52C230.743 134.934 229.689 135.394 228.596 135.987C227.408 136.626 226.396 137.556 225.65 138.693C224.947 139.856 224.509 141.163 224.367 142.52C224.284 143.642 224.311 144.77 224.445 145.886C224.53 146.8 224.602 147.566 224.661 148.173C224.697 148.454 224.697 148.739 224.661 149.02C224.587 148.749 224.534 148.472 224.504 148.193C224.419 147.653 224.301 146.86 224.177 145.913C224.007 144.78 223.957 143.631 224.026 142.487C224.152 141.068 224.6 139.699 225.336 138.487C226.111 137.3 227.172 136.336 228.419 135.687C229.558 135.094 230.599 134.66 231.483 134.28C232.366 133.9 233.08 133.614 233.584 133.434C233.847 133.319 234.121 133.236 234.402 133.187V133.187Z"
                  fill="#240155"
                />
                <path
                  d="M251.692 148.806C251.655 148.516 251.655 148.223 251.692 147.933C251.692 147.373 251.777 146.56 251.875 145.566C252.006 144.407 252.035 143.238 251.96 142.073C251.898 140.662 251.459 139.296 250.69 138.12C249.827 136.999 248.702 136.117 247.417 135.554C246.245 135 245.159 134.547 244.249 134.167L242.088 133.28C241.817 133.195 241.554 133.083 241.303 132.947C241.587 132.982 241.866 133.051 242.134 133.154C242.664 133.32 243.443 133.58 244.34 133.934C245.237 134.287 246.357 134.72 247.548 135.267C248.885 135.843 250.054 136.762 250.939 137.933C251.746 139.162 252.2 140.596 252.248 142.073C252.31 143.256 252.256 144.442 252.085 145.613C251.96 146.606 251.856 147.406 251.797 147.966C251.787 148.249 251.752 148.53 251.692 148.806V148.806Z"
                  fill="#240155"
                />
                <path
                  d="M243.646 129.967C243.359 130.779 242.914 131.523 242.338 132.154C241.761 132.786 241.065 133.292 240.292 133.643C239.518 133.993 238.683 134.181 237.836 134.194C236.989 134.208 236.149 134.047 235.365 133.72C234.579 133.427 233.87 132.955 233.29 132.341C232.71 131.726 232.276 130.985 232.02 130.174L232.733 128.994C233.086 130.124 233.8 131.102 234.76 131.774C235.72 132.445 236.873 132.771 238.036 132.7C242.003 132.534 242.906 128.914 243.037 128.994L243.646 129.981"
                  fill="#240155"
                />
                <path
                  d="M232.497 130.967C232.151 131.124 231.795 131.255 231.43 131.36L228.478 132.314L226.435 132.98C225.652 133.207 224.881 133.474 224.124 133.78C223.258 134.099 222.468 134.602 221.808 135.256C221.147 135.91 220.631 136.7 220.295 137.573C219.917 138.477 219.587 139.401 219.306 140.34C219.011 141.253 218.75 142.133 218.507 143.006C218.023 144.693 217.617 146.22 217.283 147.506C216.949 148.793 216.707 149.78 216.504 150.559C216.428 150.938 216.325 151.31 216.196 151.673C216.182 151.573 216.182 151.472 216.196 151.373C216.229 151.179 216.282 150.893 216.354 150.526C216.491 149.8 216.72 148.746 217.008 147.446C217.296 146.146 217.696 144.613 218.167 142.913C218.403 142.067 218.658 141.18 218.946 140.247C219.226 139.292 219.56 138.355 219.948 137.44C220.332 136.504 220.898 135.656 221.61 134.947C222.302 134.32 223.101 133.827 223.967 133.494C224.779 133.16 225.578 132.927 226.311 132.707L228.366 132.107L231.352 131.267C231.724 131.133 232.107 131.033 232.497 130.967V130.967Z"
                  fill="#240155"
                />
                <path
                  d="M260.046 151.266C259.872 150.934 259.727 150.586 259.614 150.226C259.339 149.493 258.96 148.526 258.547 147.353C257.657 144.927 256.498 141.527 255.136 137.84C254.961 137.401 254.728 136.988 254.442 136.614C254.15 136.264 253.815 135.953 253.447 135.687C252.726 135.193 251.974 134.747 251.195 134.354C249.716 133.547 248.335 132.914 247.169 132.4L244.387 131.187C244.039 131.057 243.702 130.898 243.379 130.714C243.739 130.8 244.091 130.916 244.433 131.061C245.088 131.301 246.076 131.667 247.261 132.147C248.446 132.627 249.84 133.247 251.346 134.04C252.141 134.445 252.909 134.904 253.644 135.414C254.037 135.695 254.396 136.024 254.711 136.394C255.017 136.801 255.266 137.25 255.451 137.727C256.825 141.453 257.932 144.84 258.776 147.293C259.169 148.486 259.49 149.466 259.739 150.206C259.865 150.552 259.967 150.906 260.046 151.266V151.266Z"
                  fill="#240155"
                />
                <path
                  d="M242.462 145.1V146.78L239.189 154.619H236.302L239.424 147.233H236.963V148.7H234.711V145.1H242.462Z"
                  fill="#240155"
                />
                <path
                  d="M215.523 152.919L215.825 151.02L224.23 151.986L224.014 153.959L215.523 152.919Z"
                  fill="#240155"
                />
                <path
                  d="M251.502 153.773L251.711 152.219L260.464 151.333L260.935 153.133L251.502 153.773Z"
                  fill="#240155"
                />
                <path
                  d="M248.76 140.653H245.689V142.727H248.76V140.653Z"
                  fill="white"
                />
                <path
                  d="M248.871 143.387C247.81 143.618 246.712 143.618 245.65 143.387C246.712 143.156 247.81 143.156 248.871 143.387Z"
                  fill="white"
                />
                <path
                  d="M230.337 142.007C230.337 142.27 230.261 142.528 230.117 142.747C229.973 142.967 229.768 143.137 229.529 143.238C229.29 143.339 229.027 143.366 228.773 143.314C228.519 143.263 228.285 143.136 228.102 142.949C227.919 142.763 227.794 142.525 227.744 142.267C227.693 142.008 227.719 141.74 227.818 141.496C227.918 141.253 228.085 141.045 228.301 140.898C228.516 140.752 228.769 140.673 229.028 140.673C229.375 140.673 229.708 140.814 229.954 141.064C230.199 141.314 230.337 141.653 230.337 142.007Z"
                  fill="white"
                />
                <path
                  d="M265.231 175.445C265.231 175.545 253.133 175.618 238.22 175.618C223.307 175.618 211.209 175.545 211.209 175.445C211.209 175.345 223.3 175.272 238.22 175.272C253.139 175.272 265.231 175.352 265.231 175.445Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M237.886 184.018C250.064 184.018 259.935 183.009 259.935 181.765C259.935 180.52 250.064 179.511 237.886 179.511C225.709 179.511 215.838 180.52 215.838 181.765C215.838 183.009 225.709 184.018 237.886 184.018Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M174.936 171.145C174.326 169.41 173.86 167.626 173.542 165.812C173.222 163.979 173.343 162.094 173.895 160.319C173.987 160.053 174.759 158.279 175.028 158.319C175.296 158.359 174.746 159.993 174.845 160.166C175.739 161.864 176.119 163.794 175.938 165.712C175.801 167.571 175.465 169.408 174.936 171.192"
                  fill="#263238"
                />
                <path
                  d="M179.899 186.598C178.56 186.567 177.287 186.003 176.352 185.027C175.417 184.051 174.895 182.742 174.897 181.378L174.681 164.046C174.485 159.379 176.9 155.38 181.339 155.326H181.751C183.776 155.438 185.684 156.325 187.094 157.808C188.505 159.291 189.313 161.262 189.358 163.326C189.509 167.326 189.627 171.805 189.515 173.959C189.286 178.418 185.005 178.925 185.005 178.925C185.005 178.925 185.005 179.958 185.005 181.272C185.015 181.961 184.891 182.646 184.641 183.286C184.39 183.926 184.017 184.51 183.543 185.003C183.07 185.495 182.505 185.888 181.881 186.157C181.258 186.426 180.589 186.567 179.912 186.571L179.899 186.598Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M185.005 178.952C183.03 178.863 181.124 178.183 179.525 176.999C179.525 176.999 180.73 180.405 184.992 180.192L185.005 178.952Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M187.368 167.312C187.357 167.474 187.289 167.626 187.175 167.741C187.062 167.855 186.912 167.923 186.753 167.932C186.674 167.934 186.596 167.92 186.523 167.89C186.45 167.861 186.384 167.817 186.328 167.761C186.271 167.705 186.227 167.639 186.196 167.565C186.166 167.491 186.15 167.412 186.15 167.332C186.152 167.168 186.217 167.012 186.331 166.896C186.444 166.78 186.598 166.714 186.759 166.712C186.918 166.71 187.071 166.772 187.185 166.885C187.299 166.997 187.365 167.151 187.368 167.312V167.312Z"
                  fill="#263238"
                />
                <path
                  d="M188.363 165.279C188.285 165.359 187.84 164.986 187.185 164.959C186.53 164.932 186.033 165.252 185.967 165.166C185.902 165.079 186.02 164.979 186.236 164.832C186.522 164.638 186.863 164.542 187.207 164.559C187.551 164.575 187.88 164.704 188.147 164.926C188.363 165.092 188.416 165.246 188.363 165.279Z"
                  fill="#263238"
                />
                <path
                  d="M181.365 167.312C181.364 167.476 181.299 167.633 181.185 167.749C181.071 167.865 180.918 167.931 180.757 167.932C180.678 167.935 180.599 167.921 180.526 167.892C180.453 167.863 180.386 167.819 180.33 167.763C180.273 167.707 180.229 167.64 180.199 167.566C180.168 167.492 180.153 167.412 180.154 167.332C180.156 167.168 180.221 167.012 180.335 166.896C180.448 166.78 180.602 166.714 180.763 166.712C180.842 166.711 180.92 166.725 180.993 166.754C181.066 166.783 181.132 166.827 181.188 166.883C181.244 166.939 181.289 167.006 181.319 167.08C181.35 167.153 181.365 167.232 181.365 167.312V167.312Z"
                  fill="#263238"
                />
                <path
                  d="M181.954 165.186C181.875 165.266 181.43 164.886 180.775 164.859C180.121 164.832 179.63 165.152 179.558 165.066C179.486 164.979 179.61 164.886 179.826 164.732C180.116 164.542 180.457 164.448 180.801 164.466C181.144 164.478 181.473 164.604 181.738 164.826C181.927 164.972 181.993 165.126 181.954 165.186Z"
                  fill="#263238"
                />
                <path
                  d="M184.095 170.519C184.445 170.417 184.806 170.366 185.169 170.365C185.333 170.365 185.496 170.325 185.529 170.205C185.547 170.025 185.515 169.842 185.437 169.679C185.293 169.252 185.149 168.799 184.992 168.345C184.577 167.196 184.253 166.015 184.023 164.812C184.521 165.927 184.935 167.08 185.261 168.259C185.411 168.732 185.549 169.185 185.686 169.592C185.774 169.803 185.794 170.036 185.745 170.259C185.718 170.318 185.678 170.371 185.628 170.412C185.578 170.454 185.52 170.483 185.457 170.499C185.364 170.51 185.269 170.51 185.176 170.499C184.818 170.553 184.455 170.56 184.095 170.519V170.519Z"
                  fill="#263238"
                />
                <path
                  d="M182.249 163.026C182.158 163.199 181.529 162.986 180.757 162.939C179.984 162.892 179.336 162.986 179.264 162.799C179.192 162.613 179.369 162.559 179.644 162.433C180.011 162.28 180.408 162.216 180.803 162.246C181.198 162.276 181.581 162.399 181.922 162.606C182.184 162.773 182.295 162.946 182.249 163.026Z"
                  fill="#263238"
                />
                <path
                  d="M188.488 163.266C188.344 163.419 187.833 163.266 187.178 163.219C186.524 163.173 185.987 163.293 185.869 163.126C185.751 162.959 185.902 162.893 186.144 162.746C186.475 162.573 186.847 162.497 187.218 162.526C187.587 162.538 187.945 162.656 188.252 162.866C188.475 163.033 188.547 163.186 188.488 163.266Z"
                  fill="#263238"
                />
                <path
                  d="M174.898 167.392C174.826 167.352 172.011 166.359 171.985 169.392C171.958 172.425 174.885 171.839 174.891 171.752C174.898 171.665 174.898 167.392 174.898 167.392Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M174.012 170.612C174.012 170.612 173.96 170.645 173.875 170.685C173.753 170.737 173.617 170.737 173.495 170.685C173.307 170.555 173.156 170.377 173.056 170.169C172.956 169.961 172.911 169.73 172.926 169.499C172.92 169.238 172.969 168.979 173.07 168.739C173.097 168.644 173.147 168.558 173.214 168.487C173.281 168.417 173.364 168.363 173.456 168.332C173.515 168.318 173.577 168.325 173.632 168.352C173.686 168.379 173.73 168.423 173.757 168.479C173.796 168.566 173.757 168.626 173.79 168.632C173.822 168.639 173.855 168.586 173.829 168.459C173.818 168.382 173.778 168.313 173.718 168.266C173.679 168.233 173.634 168.209 173.585 168.195C173.537 168.181 173.486 168.178 173.436 168.186C173.316 168.21 173.204 168.266 173.111 168.348C173.018 168.43 172.947 168.535 172.906 168.652C172.779 168.915 172.717 169.206 172.723 169.499C172.703 169.769 172.761 170.039 172.89 170.276C173.019 170.513 173.213 170.706 173.449 170.832C173.527 170.857 173.609 170.863 173.69 170.85C173.771 170.837 173.847 170.806 173.914 170.759C174.006 170.685 174.019 170.612 174.012 170.612Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M187.473 158.293C187.944 158.019 186.53 156.419 185.372 155.866C183.624 155.033 180.946 154.533 179.329 154.999C178.38 155.221 177.487 155.641 176.706 156.233C175.925 156.826 175.273 157.577 174.793 158.439C173.839 160.333 173.388 162.447 173.483 164.572C173.456 165.22 173.596 165.864 173.889 166.439C174.295 167.106 175.081 167.539 175.041 168.472C175.02 168.81 175.131 169.143 175.349 169.399C175.879 169.999 176.534 169.439 176.835 168.879C177.61 166.668 177.811 164.292 177.418 161.979C177.28 161.472 177.051 160.993 176.933 160.479C176.86 160.224 176.841 159.956 176.877 159.693C176.913 159.43 177.004 159.177 177.143 158.953C177.214 158.861 177.293 158.776 177.378 158.699C177.781 158.331 178.275 158.081 178.806 157.975C179.337 157.87 179.887 157.913 180.396 158.099C182.033 158.713 184.841 159.619 185.568 159.039C186.093 158.673 186.539 158.201 186.877 157.653L187.473 158.293Z"
                  fill="#263238"
                />
                <path
                  d="M184.206 172.519C184.206 172.565 184.089 172.679 183.82 172.739C183.461 172.81 183.088 172.751 182.766 172.572C182.445 172.393 182.194 172.109 182.053 171.765C181.954 171.505 181.968 171.325 182.013 171.312C182.059 171.299 182.334 171.892 182.95 172.232C183.565 172.572 184.18 172.425 184.206 172.519Z"
                  fill="#263238"
                />
                <path
                  d="M163.821 186.285L167.042 194.351L163.998 216.083L162.551 226.683H156.836L157.608 214.73L159.448 198.504L163.821 186.285Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M197.45 189.178L193.797 194.351L195.977 215.55L198 226.683H203.767L202.366 214.197L201.391 198.504L197.45 189.178Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M157.594 204.177C157.594 204.177 158.635 197.291 159.315 194.844C159.996 192.398 161.522 187.118 163.342 185.418C165.161 183.718 166.359 183.885 169.62 182.811C172.068 182.005 174.052 181.278 174.052 181.278L174.804 180.245C176.854 185.838 183.786 184.518 185.109 180.245L185.717 181.232C185.717 181.232 195.963 184.678 197.606 187.231C199.249 189.784 203.007 204.384 203.007 204.384L193.58 205.05L193.763 200.091C193.763 200.091 192.454 206.13 192.912 210.877C193.305 215.063 194.221 226.703 194.221 226.703L166.32 226.609C166.32 226.609 167.112 212.303 167.217 209.584C167.289 207.584 166.7 199.664 166.7 199.664L166.091 205.244L157.594 204.177Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M176.487 184.425C176.249 184.566 175.999 184.686 175.741 184.785L173.686 185.731C172.828 186.138 171.774 186.598 170.681 187.191C169.496 187.835 168.485 188.764 167.735 189.898C167.037 191.072 166.607 192.391 166.478 193.758C166.396 194.88 166.422 196.007 166.556 197.124C166.642 198.031 166.714 198.797 166.772 199.404C166.808 199.685 166.808 199.97 166.772 200.251C166.697 199.98 166.644 199.704 166.615 199.424C166.53 198.891 166.412 198.091 166.288 197.151C166.119 196.015 166.068 194.864 166.137 193.718C166.264 192.299 166.712 190.93 167.447 189.718C168.226 188.534 169.286 187.571 170.53 186.918C171.669 186.325 172.71 185.898 173.594 185.511C174.478 185.125 175.191 184.845 175.695 184.665C175.947 184.548 176.214 184.467 176.487 184.425V184.425Z"
                  fill="#240155"
                />
                <path
                  d="M193.776 200.044C193.74 199.752 193.74 199.456 193.776 199.164C193.776 198.604 193.861 197.791 193.959 196.798C194.09 195.64 194.118 194.473 194.044 193.311C193.981 191.897 193.54 190.528 192.768 189.351C191.914 188.235 190.8 187.353 189.527 186.785C188.356 186.231 187.269 185.778 186.359 185.398L184.172 184.518C183.901 184.433 183.638 184.321 183.387 184.185C183.671 184.219 183.95 184.289 184.218 184.391C184.748 184.558 185.527 184.825 186.424 185.171C187.321 185.518 188.441 185.958 189.632 186.505C190.97 187.079 192.139 187.998 193.023 189.171C193.831 190.397 194.284 191.829 194.332 193.304C194.394 194.487 194.34 195.673 194.169 196.844C194.044 197.838 193.94 198.637 193.881 199.197C193.871 199.482 193.836 199.766 193.776 200.044V200.044Z"
                  fill="#240155"
                />
                <path
                  d="M185.744 181.185C185.457 181.996 185.012 182.74 184.435 183.372C183.859 184.003 183.163 184.51 182.389 184.86C181.616 185.211 180.78 185.399 179.934 185.412C179.087 185.425 178.246 185.264 177.462 184.938C176.677 184.645 175.967 184.173 175.388 183.558C174.808 182.944 174.373 182.203 174.117 181.391L174.831 180.212C175.184 181.342 175.897 182.32 176.858 182.991C177.818 183.663 178.971 183.989 180.133 183.918C184.101 183.751 185.004 180.138 185.135 180.212L185.744 181.185Z"
                  fill="#240155"
                />
                <path
                  d="M174.614 182.198C174.268 182.355 173.912 182.486 173.547 182.592L170.595 183.545L168.552 184.211C167.813 184.445 167.034 184.678 166.241 185.011C165.415 185.341 164.655 185.82 163.996 186.425C163.319 187.107 162.781 187.918 162.412 188.811C162.034 189.713 161.704 190.634 161.423 191.571C161.129 192.484 160.867 193.364 160.625 194.238C160.14 195.924 159.734 197.451 159.4 198.737C159.066 200.024 158.824 201.017 158.621 201.791C158.545 202.169 158.442 202.541 158.314 202.904C158.299 202.805 158.299 202.703 158.314 202.604C158.314 202.411 158.399 202.124 158.471 201.764C158.608 201.031 158.837 199.977 159.125 198.678C159.413 197.378 159.78 195.844 160.284 194.151C160.52 193.298 160.775 192.411 161.063 191.485C161.343 190.53 161.678 189.593 162.065 188.678C162.417 187.765 162.958 186.939 163.652 186.258C164.345 185.577 165.175 185.056 166.084 184.731C166.851 184.429 167.634 184.169 168.428 183.951L170.484 183.352L173.469 182.505C173.842 182.373 174.225 182.271 174.614 182.198V182.198Z"
                  fill="#240155"
                />
                <path
                  d="M202.111 202.517C201.935 202.188 201.791 201.842 201.679 201.484C201.404 200.744 201.024 199.778 200.612 198.604C199.722 196.184 198.563 192.778 197.201 189.091C197.024 188.653 196.791 188.24 196.507 187.865C196.232 187.512 195.915 187.194 195.565 186.918C194.842 186.426 194.09 185.981 193.313 185.585C191.833 184.785 190.452 184.152 189.287 183.632L186.504 182.445C186.155 182.318 185.818 182.16 185.496 181.972C185.856 182.058 186.209 182.174 186.55 182.318C187.205 182.558 188.193 182.925 189.378 183.412C190.563 183.898 191.957 184.512 193.463 185.298C194.259 185.703 195.026 186.162 195.761 186.671C196.156 186.953 196.515 187.285 196.828 187.658C197.132 188.055 197.381 188.492 197.568 188.958C198.943 192.685 200.049 196.071 200.893 198.531L201.856 201.444C201.965 201.795 202.051 202.154 202.111 202.517V202.517Z"
                  fill="#240155"
                />
                <path
                  d="M183.813 202.864V205.004H176.533V203.317L180.029 199.984C180.301 199.743 180.533 199.46 180.716 199.144C180.826 198.928 180.885 198.688 180.887 198.444C180.893 198.308 180.868 198.173 180.815 198.048C180.761 197.923 180.681 197.812 180.579 197.724C180.318 197.536 180.001 197.446 179.682 197.471C179.351 197.466 179.025 197.546 178.733 197.704C178.441 197.86 178.193 198.089 178.013 198.371L176.049 197.257C176.418 196.636 176.951 196.133 177.587 195.804C178.312 195.435 179.114 195.252 179.924 195.271C180.572 195.26 181.215 195.38 181.816 195.624C182.337 195.83 182.791 196.182 183.126 196.637C183.434 197.086 183.595 197.623 183.584 198.171C183.585 198.676 183.473 199.176 183.257 199.631C182.932 200.225 182.504 200.754 181.993 201.191L180.232 202.844L183.813 202.864Z"
                  fill="#240155"
                />
                <path
                  d="M157.607 204.151L157.909 202.251L166.314 203.217L166.098 205.197L157.607 204.151Z"
                  fill="#240155"
                />
                <path
                  d="M193.594 205.004L193.797 203.451L202.549 202.571L203.021 204.364L193.594 205.004Z"
                  fill="#240155"
                />
                <path
                  d="M190.844 191.885H187.773V193.958H190.844V191.885Z"
                  fill="white"
                />
                <path
                  d="M190.981 194.618C189.919 194.849 188.821 194.849 187.76 194.618C188.821 194.387 189.919 194.387 190.981 194.618V194.618Z"
                  fill="white"
                />
                <path
                  d="M172.421 193.238C172.421 193.502 172.345 193.759 172.201 193.979C172.057 194.198 171.852 194.369 171.613 194.47C171.374 194.571 171.111 194.597 170.857 194.545C170.603 194.494 170.369 194.367 170.186 194.181C170.003 193.994 169.878 193.757 169.828 193.498C169.777 193.239 169.803 192.971 169.902 192.728C170.002 192.484 170.169 192.276 170.385 192.129C170.6 191.983 170.853 191.905 171.112 191.905C171.459 191.905 171.792 192.045 172.038 192.295C172.283 192.545 172.421 192.884 172.421 193.238Z"
                  fill="white"
                />
                <path
                  d="M207.348 226.683C207.348 226.776 195.25 226.856 180.337 226.856C165.424 226.856 153.326 226.776 153.326 226.683C153.326 226.59 165.418 226.51 180.337 226.51C195.256 226.51 207.348 226.583 207.348 226.683Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M202.111 230.516C202.111 231.763 192.239 232.769 180.062 232.769C167.886 232.769 158.014 231.763 158.014 230.516C158.014 229.269 167.886 228.263 180.062 228.263C192.239 228.263 202.111 229.256 202.111 230.516Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M137.75 74.9363L140.971 83.0092L137.933 104.735L136.48 115.334H130.771L131.544 103.388L133.377 87.1624L137.75 74.9363Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M171.387 77.8293L167.734 83.0091L169.914 104.201L171.937 115.334H177.705L176.304 102.848L175.322 87.1623L171.387 77.8293Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M147.603 53.3371L149.246 70.4297C149.469 73.3562 149.809 77.6893 154.339 77.096C158.228 76.3027 158.922 72.4296 158.726 69.6897C158.627 68.3964 158.542 67.3165 158.542 67.1831C158.542 67.1831 162.811 66.4298 162.791 62.07C162.791 59.9635 162.418 55.6303 162.038 51.7105C161.846 49.6782 160.908 47.7945 159.412 46.4352C157.915 45.076 155.971 44.3412 153.966 44.3775H153.554C149.083 44.7508 147.119 48.8173 147.603 53.3371Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M158.555 67.1899C156.576 67.2177 154.632 66.6671 152.951 65.6033C152.951 65.6033 154.365 68.7631 158.627 68.2698L158.555 67.1899Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M155.046 54.5838C154.954 54.5838 154.503 54.3238 153.796 54.2105C153.089 54.0971 152.532 54.2105 152.486 54.1371C152.44 54.0638 152.558 54.0372 152.801 53.9838C153.157 53.9159 153.524 53.9159 153.881 53.9838C154.225 54.0352 154.557 54.1552 154.856 54.3371C155.033 54.4705 155.092 54.5705 155.046 54.5838Z"
                  fill="#263238"
                />
                <path
                  d="M154.321 55.9105C154.324 56.0639 154.269 56.2126 154.166 56.3247C154.063 56.4369 153.921 56.5036 153.771 56.5105C153.697 56.5188 153.623 56.5117 153.552 56.4897C153.481 56.4677 153.416 56.4313 153.36 56.3826C153.303 56.3339 153.257 56.274 153.224 56.2066C153.191 56.1392 153.172 56.0657 153.168 55.9905C153.163 55.8378 153.217 55.6891 153.319 55.5768C153.421 55.4644 153.562 55.3975 153.712 55.3906C153.785 55.3823 153.86 55.3893 153.931 55.4113C154.002 55.4332 154.068 55.4695 154.125 55.5181C154.182 55.5667 154.229 55.6265 154.262 55.694C154.296 55.7614 154.316 55.8351 154.321 55.9105V55.9105Z"
                  fill="#263238"
                />
                <path
                  d="M157.28 59.037C157.622 58.9162 157.979 58.8422 158.34 58.817C158.51 58.817 158.667 58.7637 158.694 58.6437C158.707 58.4686 158.666 58.2936 158.576 58.1437C158.406 57.7304 158.235 57.2971 158.052 56.8505C157.57 55.7551 157.18 54.6199 156.887 53.4573C157.447 54.5133 157.927 55.6122 158.32 56.7438C158.491 57.1971 158.661 57.6304 158.818 58.0771C158.923 58.2817 158.958 58.5166 158.916 58.7437C158.892 58.8041 158.854 58.8581 158.807 58.9019C158.759 58.9457 158.703 58.9782 158.641 58.997C158.55 59.024 158.455 59.0397 158.36 59.0437C158.001 59.0848 157.638 59.0826 157.28 59.037V59.037Z"
                  fill="#263238"
                />
                <path
                  d="M154.503 51.4573C154.451 51.624 153.849 51.5573 153.194 51.6573C152.54 51.7573 151.97 51.9573 151.885 51.8106C151.8 51.664 151.937 51.584 152.153 51.4173C152.445 51.2165 152.779 51.0886 153.129 51.044C153.477 50.9908 153.833 51.0274 154.163 51.1506C154.399 51.2506 154.53 51.384 154.503 51.4573Z"
                  fill="#263238"
                />
                <path
                  d="M161.383 52.184C161.317 52.324 160.728 52.224 160.074 52.2707C159.419 52.3174 158.849 52.444 158.764 52.3174C158.679 52.1907 158.83 52.124 159.052 52.004C159.357 51.8458 159.692 51.7571 160.034 51.744C160.379 51.723 160.725 51.7752 161.049 51.8974C161.291 52.004 161.409 52.1174 161.383 52.184Z"
                  fill="#263238"
                />
                <path
                  d="M148.009 56.617C147.937 56.617 144.887 55.8237 145.116 58.9436C145.345 62.0634 148.389 61.1835 148.389 61.0968C148.389 61.0101 148.009 56.617 148.009 56.617Z"
                  fill="#FFBF9D"
                />
                <path
                  d="M147.355 59.9836C147.355 59.9836 147.302 60.0302 147.217 60.0769C147.094 60.141 146.951 60.1553 146.818 60.1169C146.609 60.0055 146.434 59.839 146.311 59.6349C146.188 59.4307 146.121 59.1966 146.117 58.957C146.09 58.6889 146.121 58.4179 146.209 58.1637C146.231 58.0639 146.276 57.971 146.341 57.8931C146.406 57.8153 146.489 57.7548 146.582 57.717C146.642 57.6965 146.706 57.698 146.765 57.7211C146.824 57.7443 146.872 57.7877 146.903 57.8437C146.955 57.9303 146.936 57.9903 146.955 57.997C146.975 58.0037 147.014 57.937 146.955 57.8103C146.934 57.7346 146.888 57.6686 146.824 57.6237C146.78 57.5948 146.731 57.5751 146.679 57.566C146.627 57.5568 146.574 57.5583 146.523 57.5704C146.398 57.604 146.284 57.6703 146.192 57.7626C146.101 57.855 146.034 57.9703 146 58.097C145.887 58.3752 145.844 58.6777 145.875 58.977C145.881 59.2564 145.968 59.5277 146.125 59.7567C146.283 59.9858 146.503 60.1621 146.759 60.2636C146.842 60.2812 146.929 60.2796 147.011 60.2589C147.094 60.2381 147.171 60.1987 147.237 60.1436C147.355 60.0636 147.368 59.9903 147.355 59.9836Z"
                  fill="#FF9A6C"
                />
                <path
                  d="M157.594 61.0903C157.594 61.0036 157.005 61.0503 156.435 60.6903C156.193 60.5274 155.972 60.3324 155.78 60.1103C155.623 59.937 155.519 59.837 155.492 59.857C155.466 59.877 155.525 60.0103 155.65 60.2103C155.82 60.4762 156.043 60.7032 156.304 60.877C156.575 61.0495 156.888 61.1419 157.208 61.1436C157.43 61.1903 157.594 61.117 157.594 61.0903Z"
                  fill="#263238"
                />
                <path
                  d="M161.417 53.6705C161.358 53.7505 160.828 53.7505 160.166 54.0171C159.505 54.2838 159.073 54.6838 158.988 54.6838C158.903 54.6838 158.988 54.5638 159.184 54.3971C159.457 54.1546 159.77 53.9628 160.107 53.8305C160.429 53.6924 160.773 53.6178 161.122 53.6105C161.358 53.5838 161.449 53.6372 161.417 53.6705Z"
                  fill="#263238"
                />
                <path
                  d="M160.651 55.7572C160.654 55.9106 160.599 56.0593 160.496 56.1714C160.393 56.2836 160.251 56.3503 160.101 56.3572C160.027 56.3645 159.953 56.3567 159.883 56.3344C159.813 56.312 159.748 56.2755 159.691 56.227C159.635 56.1785 159.589 56.119 159.556 56.052C159.523 55.9851 159.503 55.912 159.498 55.8372C159.493 55.6838 159.547 55.5344 159.648 55.4209C159.75 55.3075 159.891 55.2392 160.042 55.2306C160.116 55.2242 160.19 55.2328 160.261 55.2558C160.332 55.2789 160.397 55.3159 160.454 55.3649C160.51 55.4138 160.557 55.4737 160.591 55.541C160.624 55.6084 160.645 55.6818 160.651 55.7572Z"
                  fill="#263238"
                />
                <path
                  d="M167.452 47.3175C167.383 47.1493 167.255 47.0137 167.092 46.9375C166.738 46.8147 166.359 46.7871 165.992 46.8575C165.066 46.925 164.137 46.7768 163.275 46.4242C163.55 46.2524 163.797 46.0388 164.009 45.7909C164.232 45.5382 164.383 45.2286 164.446 44.8951C164.51 44.5616 164.483 44.2168 164.369 43.8976C164.348 43.8374 164.315 43.7827 164.27 43.7377C164.226 43.6926 164.173 43.6584 164.113 43.6376C163.917 43.5976 163.773 43.7976 163.655 43.9643C163.507 44.2098 163.297 44.4108 163.048 44.5466C162.798 44.6825 162.517 44.7484 162.235 44.7376C161.845 44.7456 161.458 44.6659 161.102 44.5043L161.063 44.4643L160.578 44.051C159.654 43.1755 158.568 42.4957 157.384 42.051C155.643 41.5839 153.811 41.6046 152.081 42.111C151.349 42.355 150.702 42.8085 150.216 43.4174C149.731 44.0263 149.428 44.7647 149.345 45.5442C148.874 45.2643 148.338 45.1167 147.793 45.1167C147.248 45.1167 146.712 45.2643 146.241 45.5442V45.5442C145.148 46.0575 144.618 47.3241 144.389 48.5241C144.389 48.5908 144.389 48.6574 144.356 48.7241C144.031 49.3752 143.557 49.9376 142.975 50.364C142.877 50.4373 142.759 50.5307 142.752 50.6573C142.746 50.784 142.864 50.8773 142.975 50.944C143.262 51.1161 143.585 51.2187 143.917 51.244C143.84 51.5318 143.739 51.8127 143.616 52.0839C143.505 52.3172 143.381 52.5906 143.512 52.8106C143.57 52.8896 143.651 52.9486 143.744 52.9796C143.836 53.0105 143.935 53.012 144.029 52.9839C144.213 52.9258 144.383 52.8281 144.526 52.6972L144.232 53.6439C144.647 53.6806 145.065 53.6142 145.449 53.4505C145.727 54.5164 146.066 55.5648 146.464 56.5904C146.929 56.5437 147.367 56.3904 147.682 56.6304C148.107 56.957 148.336 57.617 148.991 57.297C149.312 57.1304 149.554 56.3904 149.646 56.0371C150.183 53.6672 150.214 51.2073 149.737 48.8241C150.161 48.283 150.683 47.8303 151.276 47.4908L151.23 47.5441C152.376 47.0175 153.685 46.4775 154.863 46.9442C155.773 47.3041 156.369 48.1774 157.089 48.8574C157.719 49.4794 158.469 49.9612 159.292 50.2722C160.115 50.5832 160.992 50.7166 161.868 50.664C162.149 51.9506 162.163 53.6239 162.333 54.8371L163.262 52.7706C163.332 52.6254 163.393 52.4762 163.446 52.3239V52.2773C163.531 52.0373 163.609 51.7906 163.721 51.5506C163.87 51.6513 164.051 51.6941 164.229 51.6715C164.407 51.6488 164.571 51.5621 164.692 51.427C164.813 51.2918 164.882 51.1172 164.888 50.9345C164.893 50.7518 164.835 50.5732 164.722 50.4307C164.61 50.2966 164.477 50.1818 164.329 50.0907C164.488 50.222 164.678 50.3094 164.88 50.3444C165.082 50.3795 165.289 50.3609 165.482 50.2907C165.672 50.2117 165.832 50.0709 165.936 49.8901C166.04 49.7094 166.083 49.4987 166.058 49.2907C166.028 49.1526 165.963 49.0248 165.87 48.9197C165.777 48.8146 165.659 48.7357 165.527 48.6907C166.059 48.6852 166.576 48.5181 167.014 48.2108C167.321 48.0041 167.59 47.6908 167.452 47.3175Z"
                  fill="#263238"
                />
                <path
                  d="M150.72 45.9309C150.58 46.0645 150.451 46.2094 150.334 46.3642C150.034 46.8071 149.851 47.3215 149.804 47.8575C149.767 48.2277 149.767 48.6006 149.804 48.9708C149.804 49.3708 149.902 49.7907 149.974 50.2374C150.055 50.7069 150.107 51.1812 150.131 51.6573C150.147 51.9081 150.147 52.1598 150.131 52.4106C150.117 52.6781 150.036 52.9375 149.895 53.1639C149.828 53.2541 149.739 53.3253 149.637 53.3708C149.535 53.4163 149.424 53.4346 149.313 53.4239C149.099 53.4078 148.897 53.3158 148.743 53.1639C148.486 52.8625 148.312 52.4966 148.239 52.104H148.324C148.229 52.4422 148.083 52.7637 147.892 53.0573C147.706 53.3308 147.425 53.5235 147.107 53.5972C146.957 53.6248 146.804 53.611 146.661 53.5572C146.527 53.5027 146.413 53.4072 146.334 53.2839C146.262 53.1724 146.219 53.0438 146.21 52.9106C146.205 52.7832 146.245 52.6582 146.321 52.5573L146.367 52.5973C146.139 52.9147 145.85 53.1803 145.516 53.3772C145.427 53.4293 145.335 53.4761 145.241 53.5172L145.143 53.5506L145.234 53.4972C145.325 53.4552 145.413 53.4062 145.496 53.3506C145.819 53.1477 146.097 52.8801 146.314 52.5639H146.367C146.296 52.66 146.257 52.777 146.257 52.8973C146.257 53.0175 146.296 53.1346 146.367 53.2306C146.44 53.3383 146.542 53.4217 146.661 53.4706C146.792 53.5075 146.93 53.5075 147.061 53.4706C147.36 53.4046 147.623 53.223 147.794 52.9639C147.975 52.6762 148.116 52.3644 148.213 52.0373L148.259 51.8906L148.305 52.0373C148.373 52.4123 148.538 52.762 148.782 53.0506C148.921 53.1861 149.101 53.2686 149.293 53.2839C149.387 53.295 149.482 53.2805 149.568 53.2418C149.654 53.2031 149.729 53.1417 149.784 53.0639C149.916 52.8543 149.99 52.6127 150 52.364C150.03 52.1164 150.041 51.8667 150.033 51.6173C150.01 51.1458 149.96 50.6761 149.882 50.2107C149.817 49.7641 149.751 49.3441 149.719 48.9374C149.688 48.5777 149.695 48.2158 149.738 47.8575C149.789 47.3108 149.984 46.7882 150.301 46.3442C150.416 46.1829 150.558 46.0431 150.72 45.9309V45.9309Z"
                  fill="#455A64"
                />
                <path
                  d="M164.237 48.9306L164.139 49.024C164.087 49.0743 164.03 49.119 163.969 49.1573C163.891 49.2158 163.81 49.2693 163.726 49.3173C163.178 49.6317 162.562 49.8035 161.933 49.8173C161.01 49.8356 160.101 49.5833 159.314 49.0906C158.352 48.4711 157.524 47.6592 156.879 46.7041C156.525 46.2107 156.224 45.6974 155.903 45.2241C155.608 44.763 155.248 44.3477 154.836 43.9908C154.463 43.658 154.012 43.4285 153.527 43.3242C153.31 43.2912 153.089 43.2912 152.872 43.3242C152.674 43.3567 152.48 43.4149 152.296 43.4975C151.723 43.7602 151.27 44.2376 151.033 44.8308C150.957 45.0472 150.903 45.2704 150.869 45.4974V45.3241C150.891 45.1537 150.931 44.9862 150.987 44.8241C151.091 44.5809 151.233 44.356 151.406 44.1575C151.641 43.877 151.931 43.6498 152.257 43.4909C152.449 43.4051 152.652 43.3447 152.859 43.3109C153.076 43.2795 153.297 43.2795 153.514 43.3109C153.998 43.419 154.448 43.6481 154.823 43.9775C155.247 44.324 155.618 44.7329 155.923 45.1908C156.25 45.6641 156.578 46.1707 156.905 46.6641C157.538 47.61 158.353 48.4151 159.301 49.0306C160.086 49.5281 160.995 49.7829 161.92 49.7639C162.539 49.7592 163.148 49.6013 163.694 49.3039C163.883 49.1919 164.064 49.0672 164.237 48.9306V48.9306Z"
                  fill="#455A64"
                />
                <path
                  d="M164.46 46.9974C164.415 47.041 164.367 47.0811 164.316 47.1174C164.181 47.2222 164.036 47.3137 163.884 47.3907C163.662 47.5131 163.43 47.6157 163.19 47.6974C162.896 47.7948 162.594 47.864 162.287 47.904C161.98 47.9335 161.671 47.9335 161.364 47.904C161.112 47.8861 160.862 47.8459 160.617 47.784C160.452 47.741 160.29 47.6853 160.133 47.6174C160.022 47.5707 159.963 47.544 159.969 47.5374C159.976 47.5307 160.218 47.6174 160.624 47.7107C160.866 47.7624 161.111 47.7959 161.357 47.8107C161.658 47.8367 161.96 47.8367 162.261 47.8107C162.809 47.7455 163.343 47.5854 163.838 47.3374C164.231 47.1374 164.447 46.9841 164.46 46.9974Z"
                  fill="#455A64"
                />
                <path
                  d="M131.545 92.8355C131.545 92.8355 132.586 85.9425 133.267 83.5026C133.947 81.0627 135.473 75.7829 137.286 74.0763C139.1 72.3698 140.311 72.5431 143.571 71.4698C146.019 70.6632 147.996 69.9432 147.996 69.9432L148.756 68.9099C150.805 74.4963 157.731 73.1764 159.053 68.9099L159.669 69.8899C159.669 69.8899 169.914 73.3364 171.557 75.8896C173.2 78.4428 176.958 93.0422 176.958 93.0422L167.524 93.7088L167.714 88.749C167.714 88.749 166.405 94.7887 166.863 99.5352C167.256 103.722 168.173 115.361 168.173 115.361L140.271 115.268C140.271 115.268 141.064 100.962 141.162 98.2419C141.234 96.242 140.645 88.3224 140.645 88.3224L140.036 93.9021L131.545 92.8355Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M150.424 73.0764C150.186 73.2201 149.936 73.3427 149.678 73.4431L147.622 74.383C146.764 74.7963 145.71 75.2497 144.617 75.8496C143.427 76.4868 142.412 77.4172 141.665 78.5562C140.972 79.7303 140.542 81.0462 140.408 82.4093C140.333 83.5206 140.361 84.6367 140.493 85.7425C140.578 86.6558 140.65 87.4158 140.709 88.0291C140.74 88.3104 140.74 88.5944 140.709 88.8757C140.63 88.6038 140.577 88.3247 140.552 88.0424C140.467 87.5091 140.349 86.7091 140.224 85.7692C140.056 84.6356 140.003 83.4873 140.067 82.3427C140.198 80.9251 140.646 79.557 141.377 78.3428C142.156 77.1569 143.219 76.1931 144.467 75.543C145.599 74.943 146.647 74.5164 147.524 74.1297C148.401 73.7431 149.121 73.4631 149.625 73.2897C149.882 73.185 150.15 73.1133 150.424 73.0764V73.0764Z"
                  fill="#240155"
                />
                <path
                  d="M167.713 88.6957C167.677 88.4058 167.677 88.1123 167.713 87.8224C167.713 87.2558 167.799 86.4491 167.89 85.4492C168.027 84.2924 168.057 83.1252 167.982 81.9627C167.919 80.5489 167.477 79.1796 166.705 78.0029C165.852 76.8878 164.738 76.0078 163.465 75.443C162.293 74.883 161.206 74.4363 160.296 74.0497L158.136 73.1697C157.865 73.0759 157.601 72.9646 157.344 72.8364C157.631 72.8655 157.913 72.9351 158.182 73.0431C158.705 73.2031 159.458 73.4697 160.381 73.823C161.304 74.1764 162.398 74.603 163.596 75.1563C164.928 75.7371 166.093 76.655 166.98 77.8229C167.791 79.0496 168.245 80.4847 168.289 81.9627C168.353 83.1428 168.301 84.3265 168.132 85.4959C168.008 86.4958 167.897 87.2958 167.844 87.8491C167.822 88.1343 167.778 88.4174 167.713 88.6957Z"
                  fill="#240155"
                />
                <path
                  d="M159.662 69.8564C159.376 70.6675 158.931 71.4112 158.355 72.0429C157.78 72.6745 157.084 73.1809 156.311 73.5315C155.538 73.8822 154.703 74.0699 153.857 74.0833C153.011 74.0967 152.17 73.9355 151.387 73.6095C150.6 73.3165 149.89 72.8449 149.309 72.2303C148.728 71.6158 148.293 70.8746 148.035 70.063L148.755 68.8897C149.11 70.0188 149.823 70.9955 150.784 71.6655C151.744 72.3355 152.896 72.6607 154.058 72.5896C158.019 72.4296 158.922 68.8097 159.053 68.8897L159.668 69.8697"
                  fill="#240155"
                />
                <path
                  d="M148.52 70.8499C148.177 71.0149 147.82 71.1487 147.453 71.2498L144.501 72.1965L142.452 72.8631C141.718 73.0964 140.933 73.3364 140.147 73.6697C139.281 73.9885 138.491 74.4917 137.831 75.1458C137.17 75.7999 136.655 76.5898 136.318 77.4629C135.938 78.3665 135.606 79.29 135.323 80.2294C135.035 81.1361 134.773 82.0227 134.53 82.8626C134.046 84.5492 133.634 86.0825 133.3 87.3691C132.966 88.6557 132.724 89.6423 132.527 90.4156C132.451 90.7966 132.346 91.171 132.213 91.5356C132.212 91.4346 132.223 91.3339 132.246 91.2356C132.278 91.0423 132.324 90.7556 132.396 90.389C132.54 89.6557 132.763 88.6024 133.051 87.3091C133.339 86.0158 133.738 84.4759 134.21 82.776C134.445 81.9294 134.701 81.0427 134.989 80.1094C135.269 79.1571 135.603 78.2222 135.99 77.3096C136.375 76.3735 136.941 75.5257 137.653 74.8163C138.344 74.186 139.143 73.6911 140.01 73.3564C140.778 73.0562 141.56 72.7959 142.353 72.5764L144.409 71.9765L147.394 71.1298C147.762 71.0082 148.139 70.9146 148.52 70.8499V70.8499Z"
                  fill="#240155"
                />
                <path
                  d="M176.061 91.1889C175.894 90.8529 175.749 90.5054 175.629 90.1489L174.569 87.2757C173.672 84.8492 172.513 81.4493 171.158 77.7628C170.982 77.324 170.748 76.9114 170.464 76.5362C170.174 76.1834 169.84 75.8718 169.469 75.6096C168.749 75.1039 167.996 74.6473 167.217 74.243C165.731 73.443 164.356 72.8097 163.184 72.2964L160.409 71.1031C160.06 70.9762 159.723 70.8201 159.4 70.6365C159.761 70.7192 160.113 70.8329 160.454 70.9765C161.109 71.2231 162.098 71.5831 163.276 72.0697C164.454 72.5564 165.862 73.1697 167.361 73.963C168.157 74.3661 168.925 74.8249 169.659 75.3363C170.057 75.6114 170.416 75.9412 170.726 76.3162C171.031 76.7252 171.282 77.1735 171.472 77.6495C172.84 81.376 173.953 84.7625 174.791 87.2157C175.184 88.4023 175.511 89.3823 175.754 90.1289C175.887 90.4721 175.99 90.8269 176.061 91.1889V91.1889Z"
                  fill="#240155"
                />
                <path
                  d="M153.2 84.9824V94.522H150.581V87.0623H148.82V84.9824H153.2Z"
                  fill="#240155"
                />
                <path
                  d="M158.607 84.9824V94.522H155.989V87.0623H154.254V84.9824H158.607Z"
                  fill="#240155"
                />
                <path
                  d="M131.545 92.8087L131.846 90.9021L140.245 91.8754L140.036 93.8486L131.545 92.8087Z"
                  fill="#240155"
                />
                <path
                  d="M167.523 93.6554L167.733 92.1021L176.486 91.2222L176.957 93.0221L167.523 93.6554Z"
                  fill="#240155"
                />
                <path
                  d="M164.775 80.5427H161.705V82.616H164.775V80.5427Z"
                  fill="white"
                />
                <path
                  d="M164.885 83.2692C163.823 83.5003 162.726 83.5003 161.664 83.2692C162.726 83.0382 163.823 83.0382 164.885 83.2692V83.2692Z"
                  fill="white"
                />
                <path
                  d="M146.353 81.8892C146.353 82.1529 146.276 82.4107 146.132 82.6299C145.988 82.8492 145.784 83.0201 145.545 83.121C145.305 83.2219 145.042 83.2483 144.788 83.1968C144.534 83.1454 144.301 83.0184 144.118 82.8319C143.935 82.6455 143.81 82.4079 143.76 82.1493C143.709 81.8907 143.735 81.6226 143.834 81.379C143.933 81.1353 144.101 80.9271 144.316 80.7806C144.532 80.6341 144.785 80.5559 145.044 80.5559C145.391 80.5559 145.724 80.6964 145.969 80.9464C146.215 81.1965 146.353 81.5356 146.353 81.8892Z"
                  fill="white"
                />
                <path
                  d="M181.246 115.334C181.246 115.428 169.154 115.508 154.241 115.508C139.328 115.508 127.23 115.428 127.23 115.334C127.23 115.241 139.322 115.161 154.241 115.161C169.161 115.161 181.246 115.241 181.246 115.334Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M155.217 121.854C167.394 121.854 177.265 120.845 177.265 119.601C177.265 118.356 167.394 117.348 155.217 117.348C143.039 117.348 133.168 118.356 133.168 119.601C133.168 120.845 143.039 121.854 155.217 121.854Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M115.532 135.333L118.746 143.4L115.709 165.132L114.262 175.725H108.547L109.319 163.779L111.152 147.553L115.532 135.333Z"
                  fill="#AA645B"
                />
                <path
                  d="M149.163 138.227L145.51 143.4L147.69 164.592L149.713 175.725H155.48L154.079 163.246L153.104 147.553L149.163 138.227Z"
                  fill="#AA645B"
                />
                <path
                  d="M126.884 130.114L129.646 134.42L134.582 138.947L137.135 134.947L136.952 131.067L136.802 127.814C136.802 127.814 141.011 126.994 140.919 122.681C140.873 120.594 140.435 116.314 139.996 112.441C139.769 110.434 138.807 108.587 137.303 107.269C135.799 105.951 133.862 105.258 131.879 105.328H131.473C127.073 105.748 125.267 109.661 125.797 114.128L126.51 130.127"
                  fill="#AA645B"
                />
                <path
                  d="M136.802 127.807C134.849 127.916 132.909 127.428 131.23 126.407C131.23 126.407 132.638 129.46 136.854 128.927L136.802 127.807Z"
                  fill="#814742"
                />
                <path
                  d="M138.309 116.288C138.315 116.369 138.305 116.451 138.28 116.529C138.255 116.606 138.215 116.678 138.163 116.74C138.111 116.802 138.047 116.853 137.975 116.89C137.904 116.926 137.826 116.948 137.746 116.954C137.668 116.965 137.589 116.96 137.513 116.939C137.437 116.918 137.367 116.881 137.305 116.832C137.244 116.782 137.193 116.719 137.156 116.649C137.12 116.578 137.097 116.501 137.091 116.421C137.083 116.339 137.091 116.257 137.115 116.178C137.14 116.1 137.179 116.027 137.232 115.965C137.285 115.902 137.349 115.852 137.422 115.815C137.494 115.779 137.573 115.758 137.654 115.754C137.731 115.744 137.81 115.75 137.886 115.772C137.961 115.793 138.031 115.83 138.092 115.88C138.153 115.929 138.204 115.991 138.241 116.061C138.278 116.131 138.301 116.208 138.309 116.288V116.288Z"
                  fill="#263238"
                />
                <path
                  d="M139.218 114.355C139.14 114.435 138.675 114.108 138.02 114.135C137.365 114.161 136.907 114.501 136.835 114.428C136.763 114.355 136.868 114.241 137.071 114.081C137.346 113.873 137.678 113.757 138.02 113.748C138.359 113.734 138.694 113.83 138.976 114.021C139.179 114.175 139.264 114.315 139.218 114.355Z"
                  fill="#263238"
                />
                <path
                  d="M132.443 116.288C132.449 116.369 132.439 116.451 132.414 116.529C132.389 116.606 132.35 116.678 132.297 116.74C132.245 116.802 132.181 116.853 132.109 116.89C132.038 116.926 131.96 116.948 131.88 116.954C131.802 116.964 131.723 116.959 131.648 116.937C131.573 116.916 131.502 116.879 131.441 116.829C131.38 116.779 131.329 116.718 131.292 116.647C131.255 116.577 131.232 116.5 131.225 116.421C131.218 116.339 131.227 116.257 131.251 116.179C131.276 116.101 131.316 116.029 131.368 115.967C131.421 115.904 131.485 115.854 131.557 115.817C131.629 115.781 131.708 115.759 131.788 115.754C131.866 115.742 131.945 115.747 132.022 115.767C132.098 115.788 132.169 115.825 132.23 115.875C132.292 115.925 132.342 115.987 132.379 116.058C132.416 116.13 132.437 116.208 132.443 116.288V116.288Z"
                  fill="#263238"
                />
                <path
                  d="M132.716 114.395C132.651 114.488 132.153 114.208 131.505 114.308C130.857 114.408 130.438 114.801 130.353 114.728C130.268 114.655 130.353 114.541 130.556 114.361C130.809 114.124 131.126 113.971 131.466 113.921C131.801 113.873 132.142 113.934 132.441 114.095C132.664 114.221 132.756 114.355 132.716 114.395Z"
                  fill="#263238"
                />
                <path
                  d="M135.297 119.761C135.636 119.644 135.988 119.565 136.344 119.528C136.508 119.528 136.665 119.468 136.691 119.354C136.7 119.178 136.654 119.003 136.56 118.854L136.03 117.581C135.535 116.506 135.128 115.391 134.812 114.248C135.389 115.282 135.883 116.361 136.292 117.474L136.803 118.754C136.915 118.956 136.955 119.192 136.914 119.421C136.891 119.482 136.855 119.537 136.808 119.582C136.762 119.627 136.706 119.661 136.646 119.681C136.554 119.708 136.459 119.724 136.364 119.728C136.011 119.786 135.653 119.798 135.297 119.761V119.761Z"
                  fill="#263238"
                />
                <path
                  d="M132.718 111.535C132.659 111.715 132.004 111.655 131.245 111.775C130.485 111.895 129.877 112.128 129.765 111.968C129.654 111.808 129.824 111.721 130.066 111.535C130.391 111.307 130.763 111.161 131.153 111.108C131.541 111.048 131.938 111.08 132.312 111.201C132.593 111.308 132.718 111.448 132.718 111.535Z"
                  fill="#263238"
                />
                <path
                  d="M139.021 111.795C138.91 111.948 138.458 111.795 137.922 111.795C137.385 111.795 136.927 111.928 136.815 111.795C136.704 111.661 136.815 111.568 137.031 111.415C137.295 111.239 137.603 111.145 137.918 111.145C138.234 111.145 138.542 111.239 138.805 111.415C139.002 111.568 139.067 111.721 139.021 111.795Z"
                  fill="#263238"
                />
                <path
                  d="M125.954 117.441C125.875 117.441 123.015 116.668 123.204 119.608C123.394 122.547 126.262 121.754 126.262 121.667C126.262 121.581 125.954 117.441 125.954 117.441Z"
                  fill="#AA645B"
                />
                <path
                  d="M125.307 120.607C125.307 120.607 125.254 120.647 125.176 120.694C125.058 120.755 124.922 120.767 124.796 120.727C124.6 120.621 124.436 120.462 124.321 120.269C124.205 120.075 124.144 119.854 124.142 119.627C124.117 119.377 124.148 119.124 124.233 118.888C124.253 118.793 124.295 118.705 124.357 118.631C124.419 118.558 124.498 118.501 124.587 118.468C124.644 118.447 124.706 118.448 124.762 118.47C124.818 118.492 124.865 118.534 124.894 118.588C124.94 118.668 124.894 118.728 124.94 118.728C124.986 118.728 124.999 118.674 124.94 118.554C124.917 118.485 124.874 118.424 124.816 118.381C124.774 118.352 124.727 118.332 124.678 118.321C124.628 118.311 124.577 118.311 124.528 118.321C124.411 118.353 124.305 118.415 124.219 118.502C124.133 118.588 124.07 118.696 124.037 118.814C123.928 119.077 123.885 119.363 123.912 119.647C123.916 119.91 123.995 120.166 124.141 120.383C124.286 120.6 124.491 120.769 124.731 120.867C124.81 120.885 124.892 120.884 124.971 120.866C125.051 120.847 125.125 120.812 125.189 120.761C125.307 120.681 125.313 120.614 125.307 120.607Z"
                  fill="#814742"
                />
                <path
                  d="M140.298 107.395C140.238 107.107 140.098 106.843 139.893 106.636C139.688 106.429 139.428 106.287 139.145 106.228C139.266 105.945 139.287 105.627 139.204 105.33C139.12 105.033 138.938 104.775 138.689 104.599C138.439 104.424 138.137 104.342 137.835 104.368C137.532 104.394 137.248 104.526 137.031 104.742C137.015 104.522 136.947 104.31 136.835 104.123C136.722 103.936 136.567 103.778 136.383 103.663C136.199 103.549 135.991 103.48 135.776 103.464C135.56 103.447 135.344 103.483 135.145 103.568C135.155 103.303 135.074 103.043 134.918 102.83C134.761 102.618 134.538 102.467 134.285 102.402C134.032 102.338 133.765 102.363 133.529 102.475C133.292 102.586 133.1 102.777 132.985 103.015C132.812 102.771 132.588 102.57 132.328 102.427C132.068 102.284 131.78 102.202 131.485 102.188C131.19 102.174 130.895 102.228 130.623 102.345C130.352 102.463 130.109 102.642 129.915 102.868C129.322 102.698 128.688 102.754 128.133 103.027C127.579 103.299 127.141 103.769 126.903 104.348C126.431 104.397 125.984 104.589 125.62 104.9C125.256 105.21 124.992 105.624 124.861 106.088C124.556 106.124 124.266 106.242 124.019 106.429C123.773 106.615 123.579 106.865 123.458 107.152C123.336 107.439 123.291 107.754 123.327 108.065C123.363 108.375 123.479 108.671 123.663 108.921C123.496 109.03 123.355 109.176 123.251 109.348C123.147 109.52 123.083 109.713 123.063 109.914C123.044 110.115 123.069 110.318 123.138 110.508C123.207 110.697 123.317 110.868 123.46 111.008C123.249 111.125 123.075 111.301 122.957 111.514C122.84 111.728 122.784 111.971 122.797 112.216C122.809 112.46 122.889 112.696 123.027 112.896C123.165 113.097 123.356 113.253 123.578 113.348C123.152 113.415 123.002 114.014 123.139 114.408C123.277 114.801 123.604 115.148 123.794 115.541C123.984 115.934 123.997 116.208 124.128 116.568C124.254 116.881 124.446 117.163 124.69 117.393C124.935 117.623 125.225 117.797 125.542 117.901L125.47 117.994C125.404 118.374 125.935 118.614 126.275 118.454C126.597 118.248 126.848 117.945 126.995 117.588C127.243 117.224 127.435 116.824 127.565 116.401C127.624 116.187 127.613 115.96 127.534 115.753C127.455 115.546 127.312 115.371 127.126 115.254C127.366 115.143 127.574 114.969 127.728 114.75C127.882 114.532 127.977 114.276 128.003 114.008C128.05 113.472 128.002 112.932 127.859 112.415L127.368 110.088C127.895 110.049 128.401 109.865 128.833 109.555C129.264 109.245 129.605 108.821 129.817 108.328C130.013 108.457 130.233 108.542 130.464 108.579C130.694 108.615 130.93 108.601 131.155 108.538C131.38 108.475 131.589 108.365 131.769 108.213C131.949 108.062 132.096 107.874 132.2 107.661C132.405 108.178 132.794 108.595 133.29 108.83C133.786 109.065 134.351 109.1 134.87 108.928C134.772 109.541 135.866 110.068 136.461 110.208C136.919 110.251 137.378 110.144 137.771 109.901C137.771 109.901 138.805 110.475 139.348 110.235C139.892 109.995 140.599 109.255 140.219 108.681C140.345 108.265 140.372 107.824 140.298 107.395Z"
                  fill="#263238"
                />
                <path
                  d="M123.316 111.001C123.384 111.149 123.488 111.277 123.617 111.375C123.686 111.423 123.765 111.454 123.848 111.467C123.93 111.48 124.015 111.473 124.095 111.448C124.193 111.414 124.28 111.354 124.348 111.274C124.415 111.194 124.461 111.098 124.481 110.995V110.821L124.618 110.935C124.732 111.023 124.866 111.079 125.008 111.097C125.149 111.114 125.293 111.093 125.424 111.035C125.565 110.961 125.682 110.845 125.756 110.702C125.831 110.559 125.861 110.396 125.843 110.235V110.061L126.006 110.121C126.098 110.161 126.198 110.182 126.298 110.182C126.398 110.182 126.497 110.161 126.589 110.121C126.736 110.05 126.858 109.934 126.936 109.788C126.997 109.65 127.041 109.504 127.067 109.355C127.067 109.355 127.165 109.535 127.067 109.841C126.99 110.024 126.857 110.177 126.687 110.275C126.575 110.335 126.453 110.371 126.327 110.382C126.201 110.392 126.074 110.376 125.954 110.335L126.091 110.228C126.123 110.434 126.088 110.646 125.993 110.831C125.897 111.015 125.746 111.164 125.561 111.255C125.394 111.332 125.209 111.36 125.027 111.335C124.846 111.31 124.674 111.234 124.533 111.115L124.704 111.055C124.674 111.193 124.608 111.32 124.512 111.423C124.416 111.525 124.295 111.598 124.16 111.635C124.057 111.661 123.948 111.663 123.844 111.64C123.739 111.617 123.641 111.569 123.558 111.501C123.27 111.241 123.296 110.995 123.316 111.001Z"
                  fill="#455A64"
                />
                <path
                  d="M134.766 103.502C134.666 103.422 134.553 103.361 134.433 103.322C134.291 103.28 134.139 103.294 134.007 103.362C133.923 103.403 133.849 103.464 133.791 103.539C133.733 103.614 133.693 103.702 133.673 103.795L133.64 103.968L133.549 103.822C133.45 103.669 133.314 103.545 133.155 103.461C132.996 103.377 132.818 103.336 132.639 103.342C132.423 103.354 132.216 103.435 132.048 103.574C131.88 103.713 131.759 103.902 131.703 104.115L131.657 104.308L131.533 104.155C131.406 104.006 131.249 103.888 131.072 103.808C130.896 103.729 130.704 103.69 130.511 103.695C130.306 103.707 130.106 103.77 129.93 103.879C129.754 103.989 129.607 104.141 129.503 104.322C129.417 104.468 129.361 104.632 129.339 104.802V104.922H129.222C128.95 104.868 128.668 104.909 128.422 105.037C128.175 105.165 127.977 105.373 127.86 105.628C127.769 105.858 127.744 106.109 127.79 106.353C127.835 106.596 127.948 106.821 128.115 107.001L128.227 107.115L128.069 107.148C127.721 107.229 127.416 107.444 127.218 107.748C127.071 107.982 126.996 108.256 127.002 108.535C127.02 108.781 127.08 109.023 127.179 109.248C127.13 109.203 127.09 109.149 127.061 109.088C126.973 108.919 126.919 108.733 126.904 108.541C126.877 108.236 126.946 107.931 127.101 107.668C127.313 107.331 127.647 107.091 128.03 107.001L127.991 107.155C127.765 106.938 127.616 106.65 127.568 106.338C127.52 106.025 127.575 105.705 127.725 105.428C127.875 105.151 128.111 104.933 128.396 104.807C128.681 104.682 128.999 104.656 129.3 104.735L129.169 104.828C129.196 104.626 129.263 104.431 129.366 104.255C129.487 104.043 129.66 103.865 129.867 103.739C130.074 103.613 130.309 103.543 130.551 103.535C130.774 103.527 130.997 103.572 131.201 103.666C131.406 103.759 131.586 103.899 131.729 104.075L131.559 104.115C131.615 103.885 131.738 103.678 131.911 103.519C132.083 103.36 132.299 103.258 132.529 103.224C132.759 103.191 132.994 103.228 133.204 103.33C133.413 103.433 133.588 103.597 133.706 103.802H133.582C133.609 103.688 133.663 103.584 133.738 103.496C133.813 103.407 133.908 103.339 134.014 103.295C134.169 103.232 134.343 103.232 134.498 103.295C134.595 103.329 134.682 103.386 134.753 103.462C134.759 103.474 134.764 103.488 134.766 103.502V103.502Z"
                  fill="#455A64"
                />
                <path
                  d="M133.371 119.901C133.476 119.901 133.502 120.614 134.124 121.101C134.746 121.587 135.499 121.487 135.506 121.587C135.512 121.687 135.342 121.734 135.028 121.754C134.613 121.773 134.205 121.644 133.876 121.387C133.561 121.14 133.35 120.78 133.286 120.381C133.273 120.081 133.371 119.901 133.371 119.901Z"
                  fill="#263238"
                />
                <path
                  d="M109.32 153.226C109.32 153.226 110.361 146.34 111.042 143.893C111.723 141.446 113.248 136.167 115.062 134.46C116.875 132.754 118.086 132.927 121.346 131.854C123.795 131.054 125.778 130.327 125.778 130.327L126.531 129.294C128.58 134.88 135.513 133.56 136.829 129.294L137.444 130.28C137.444 130.28 147.689 133.727 149.332 136.28C150.976 138.833 154.733 153.433 154.733 153.433L145.3 154.066L145.49 149.106C145.49 149.106 144.18 155.146 144.639 159.899C145.031 164.079 145.948 175.718 145.948 175.718L118.047 175.632C118.047 175.632 118.839 161.319 118.937 158.599C119.016 156.599 118.426 148.679 118.426 148.679L117.818 154.259L109.32 153.226Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M128.2 133.467C127.973 133.619 127.731 133.749 127.48 133.854L125.424 134.794C124.566 135.207 123.512 135.667 122.419 136.26C121.23 136.899 120.215 137.829 119.467 138.967C118.775 140.142 118.346 141.457 118.21 142.82C118.133 143.942 118.161 145.07 118.295 146.186C118.38 147.1 118.452 147.866 118.511 148.473C118.547 148.754 118.547 149.039 118.511 149.32C118.432 149.05 118.38 148.773 118.354 148.493C118.269 147.953 118.151 147.16 118.026 146.213C117.857 145.08 117.806 143.931 117.876 142.787C117.994 141.371 118.431 140.003 119.152 138.787C119.932 137.601 120.995 136.637 122.242 135.987C123.375 135.387 124.422 134.96 125.3 134.58C126.177 134.2 126.903 133.914 127.401 133.734C127.657 133.615 127.925 133.525 128.2 133.467V133.467Z"
                  fill="#240155"
                />
                <path
                  d="M145.49 149.086C145.454 148.796 145.454 148.503 145.49 148.213C145.49 147.653 145.575 146.84 145.674 145.846C145.804 144.687 145.833 143.518 145.759 142.353C145.697 140.941 145.255 139.574 144.482 138.4C143.621 137.277 142.495 136.394 141.209 135.834C140.037 135.28 138.95 134.827 138.04 134.44L135.88 133.56C135.609 133.467 135.345 133.355 135.088 133.227C135.375 133.26 135.656 133.33 135.926 133.434C136.45 133.6 137.235 133.86 138.132 134.214C139.029 134.567 140.148 134.994 141.34 135.547C142.675 136.127 143.842 137.045 144.731 138.213C145.539 139.442 145.992 140.876 146.04 142.353C146.102 143.536 146.047 144.722 145.877 145.893C145.752 146.886 145.641 147.686 145.588 148.246C145.577 148.529 145.544 148.809 145.49 149.086V149.086Z"
                  fill="#240155"
                />
                <path
                  d="M137.436 130.247C136.848 131.813 135.706 133.099 134.235 133.854C132.629 134.581 130.806 134.633 129.162 134C128.375 133.707 127.665 133.234 127.085 132.618C126.505 132.002 126.071 131.26 125.816 130.447L126.53 129.274C126.883 130.404 127.596 131.382 128.557 132.054C129.517 132.725 130.67 133.051 131.833 132.98C135.8 132.814 136.703 129.194 136.828 129.274L137.443 130.26"
                  fill="#240155"
                />
                <path
                  d="M126.295 131.247C125.949 131.404 125.593 131.535 125.228 131.64L122.276 132.594L120.227 133.26C119.446 133.487 118.677 133.754 117.922 134.06C117.056 134.379 116.266 134.882 115.606 135.536C114.945 136.19 114.43 136.98 114.093 137.853C113.712 138.756 113.382 139.68 113.104 140.62C112.81 141.533 112.548 142.413 112.305 143.287C111.821 144.973 111.415 146.5 111.081 147.786C110.747 149.073 110.499 150.06 110.302 150.84C110.222 151.217 110.119 151.588 109.995 151.953C109.976 151.854 109.976 151.752 109.995 151.653C109.995 151.459 110.08 151.173 110.152 150.806C110.289 150.08 110.518 149.02 110.806 147.726C111.094 146.433 111.461 144.893 111.965 143.193C112.201 142.347 112.456 141.46 112.744 140.527C113.024 139.572 113.358 138.635 113.746 137.72C114.13 136.784 114.696 135.936 115.408 135.227C116.1 134.6 116.899 134.107 117.765 133.774C118.533 133.471 119.315 133.209 120.109 132.987L122.164 132.387L125.15 131.54C125.523 131.41 125.906 131.312 126.295 131.247V131.247Z"
                  fill="#240155"
                />
                <path
                  d="M153.842 151.546C153.666 151.213 153.519 150.865 153.403 150.506L152.356 147.633C151.459 145.206 150.3 141.806 148.945 138.12C148.771 137.68 148.538 137.267 148.251 136.893C147.958 136.544 147.624 136.233 147.256 135.967C146.535 135.472 145.783 135.027 145.004 134.633C143.525 133.827 142.143 133.194 140.971 132.68L138.196 131.487C137.849 131.356 137.512 131.2 137.188 131.02C137.547 131.107 137.9 131.223 138.241 131.367C138.896 131.607 139.885 131.967 141.07 132.454C142.254 132.94 143.649 133.553 145.148 134.347C145.946 134.75 146.716 135.209 147.452 135.72C147.846 136.001 148.204 136.33 148.519 136.7C148.825 137.108 149.074 137.556 149.259 138.033C150.634 141.76 151.74 145.146 152.585 147.6C152.978 148.786 153.298 149.773 153.541 150.513C153.665 150.85 153.765 151.195 153.842 151.546Z"
                  fill="#240155"
                />
                <path
                  d="M134.21 149.186C134.687 149.424 135.09 149.791 135.376 150.246C135.667 150.717 135.817 151.263 135.808 151.819C135.82 152.425 135.651 153.021 135.323 153.526C134.997 154.02 134.544 154.415 134.014 154.666C133.429 154.939 132.791 155.076 132.148 155.066C131.568 155.098 130.987 155.007 130.443 154.8C129.899 154.592 129.403 154.272 128.986 153.859C128.576 153.385 128.262 152.833 128.062 152.235C127.862 151.636 127.78 151.004 127.821 150.373C127.796 149.399 128.01 148.435 128.443 147.566C128.834 146.806 129.441 146.184 130.184 145.78C130.993 145.357 131.893 145.146 132.803 145.166C133.316 145.164 133.829 145.224 134.328 145.346C134.765 145.443 135.181 145.617 135.559 145.86L134.596 147.793C134.087 147.449 133.485 147.277 132.875 147.3C132.574 147.277 132.271 147.317 131.986 147.418C131.701 147.519 131.44 147.679 131.217 147.887C130.995 148.095 130.817 148.347 130.695 148.628C130.572 148.909 130.508 149.212 130.505 149.52C131.1 149.026 131.853 148.775 132.619 148.813C133.171 148.809 133.716 148.936 134.21 149.186ZM132.901 152.826C133.128 152.592 133.255 152.275 133.255 151.946C133.255 151.617 133.128 151.301 132.901 151.066C132.635 150.853 132.307 150.736 131.968 150.736C131.63 150.736 131.301 150.853 131.035 151.066C130.922 151.181 130.833 151.317 130.772 151.467C130.711 151.617 130.679 151.777 130.679 151.939C130.679 152.102 130.711 152.262 130.772 152.412C130.833 152.562 130.922 152.698 131.035 152.813C131.3 153.044 131.642 153.163 131.991 153.146C132.318 153.165 132.641 153.058 132.894 152.846L132.901 152.826Z"
                  fill="#240155"
                />
                <path
                  d="M109.32 153.199L109.621 151.293L118.027 152.266L117.811 154.239L109.32 153.199Z"
                  fill="#240155"
                />
                <path
                  d="M145.299 154.046L145.508 152.499L154.261 151.613L154.732 153.413L145.299 154.046Z"
                  fill="#240155"
                />
                <path
                  d="M142.557 140.933H139.486V143.007H142.557V140.933Z"
                  fill="white"
                />
                <path
                  d="M142.668 143.666C141.607 143.897 140.509 143.897 139.447 143.666C140.508 143.426 141.607 143.426 142.668 143.666V143.666Z"
                  fill="white"
                />
                <path
                  d="M124.134 142.287C124.134 142.55 124.057 142.808 123.914 143.027C123.77 143.247 123.565 143.418 123.326 143.518C123.087 143.619 122.823 143.646 122.569 143.594C122.316 143.543 122.082 143.416 121.899 143.229C121.716 143.043 121.591 142.805 121.541 142.547C121.49 142.288 121.516 142.02 121.615 141.776C121.714 141.533 121.882 141.325 122.098 141.178C122.313 141.032 122.566 140.953 122.825 140.953C123.172 140.953 123.505 141.094 123.751 141.344C123.996 141.594 124.134 141.933 124.134 142.287Z"
                  fill="white"
                />
                <path
                  d="M159.027 175.725C159.027 175.825 146.93 175.898 132.017 175.898C117.104 175.898 105.006 175.825 105.006 175.725C105.006 175.625 117.097 175.552 132.017 175.552C146.936 175.552 159.027 175.632 159.027 175.725Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M156.606 184.345C156.606 185.584 146.734 186.598 134.558 186.598C122.381 186.598 112.516 185.584 112.516 184.345C112.516 183.105 122.381 182.091 134.558 182.091C146.734 182.091 156.606 183.098 156.606 184.345Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M102.059 162.519C102 162.254 101.852 162.018 101.64 161.852C101.123 161.513 100.511 161.359 99.8982 161.412C99.5323 160.671 99.289 159.874 99.1781 159.052C99.4701 159.055 99.7566 158.972 100.003 158.812C100.05 158.802 100.096 158.789 100.14 158.772C100.273 158.682 100.385 158.565 100.471 158.429C100.557 158.292 100.615 158.14 100.64 157.98C100.666 157.82 100.659 157.656 100.621 157.499C100.582 157.342 100.512 157.195 100.415 157.066C99.9899 156.567 99.4335 156.201 98.8115 156.013C99.2405 156.115 99.6559 156.27 100.049 156.473C100.474 156.606 101.07 156.473 101.122 156.013C101.128 155.873 101.103 155.735 101.05 155.606C100.972 155.339 100.887 155.079 100.808 154.813C100.764 154.591 100.641 154.393 100.461 154.259C100.315 154.204 100.164 154.166 100.01 154.146C99.5185 154.013 99.2632 153.399 98.7657 153.259C98.3913 153.223 98.0138 153.28 97.6659 153.426C97.2927 153.513 96.8083 153.426 96.697 153.073C97.1937 152.819 97.6243 152.449 97.9539 151.993C98.1111 151.76 98.1852 151.48 98.1637 151.198C98.1423 150.917 98.0266 150.651 97.8361 150.446C97.4674 150.206 97.0242 150.113 96.5923 150.186C96.1078 150.186 95.5056 150.32 95.3812 150.793C95.2145 150.75 95.041 150.742 94.8713 150.77C94.7016 150.798 94.5393 150.861 94.3945 150.955C94.2497 151.05 94.1255 151.173 94.0294 151.318C93.9334 151.464 93.8676 151.627 93.8362 151.799L92.5924 151.673C92.9916 151.351 93.372 151.006 93.7315 150.64C94.0326 150.22 93.9737 149.46 93.4761 149.353C93.2928 149.313 93.0964 149.353 92.9197 149.3C92.7429 149.246 92.6906 149.133 92.5596 149.133C92.4606 149.135 92.3655 149.173 92.2912 149.24L89.6726 150.986C89.9083 150.426 90.144 149.86 90.3862 149.3C90.6284 148.74 90.7724 148.073 90.3207 147.753C89.869 147.433 89.234 147.886 89.1424 148.42C89.0212 148.391 88.8955 148.39 88.7739 148.417C88.6523 148.443 88.5379 148.496 88.4387 148.572C88.3395 148.649 88.2579 148.746 88.1996 148.858C88.1414 148.97 88.1079 149.093 88.1015 149.22C87.9279 149.151 87.7372 149.141 87.5579 149.192C87.3785 149.243 87.22 149.351 87.1059 149.501C86.9919 149.651 86.9284 149.834 86.925 150.024C86.9215 150.213 86.9783 150.399 87.0868 150.553C86.6415 150.56 86.2067 150.691 85.8298 150.933C85.8168 150.796 85.7677 150.664 85.6876 150.553C85.6075 150.442 85.4995 150.355 85.3748 150.301C85.2501 150.247 85.1135 150.228 84.9793 150.247C84.8451 150.265 84.7183 150.32 84.6122 150.406C84.6241 150.137 84.5581 149.871 84.4223 149.64C84.3853 149.589 84.3385 149.547 84.2849 149.516C84.2313 149.485 84.1719 149.466 84.1106 149.459C84.0493 149.452 83.9872 149.458 83.9282 149.476C83.8692 149.495 83.8146 149.525 83.7677 149.566C83.8055 149.384 83.7867 149.194 83.7137 149.022C83.6408 148.851 83.5175 148.707 83.3607 148.611C83.2039 148.514 83.0216 148.469 82.8388 148.483C82.656 148.496 82.4819 148.568 82.3406 148.686L81.9085 148.153C81.6861 148.13 81.4619 148.173 81.2631 148.277C81.0644 148.381 80.8996 148.542 80.789 148.74C80.6057 149.153 80.9134 149.753 81.3586 149.713C81.0444 149.713 81.1164 150.213 81.2997 150.466L82.0591 151.546C81.8999 151.392 81.694 151.297 81.4751 151.278C81.2563 151.259 81.0374 151.316 80.8545 151.439C80.7837 151.365 80.6988 151.305 80.6048 151.265C80.5109 151.224 80.4099 151.203 80.3079 151.203C80.2058 151.203 80.1048 151.224 80.0109 151.265C79.917 151.305 79.8321 151.365 79.7613 151.439C79.6959 151.341 79.6041 151.263 79.4967 151.216C79.3893 151.169 79.2709 151.155 79.1556 151.174C79.0403 151.194 78.933 151.247 78.8466 151.327C78.7601 151.407 78.6981 151.511 78.668 151.626C78.5894 151.419 78.3079 151.406 78.0919 151.433C77.7758 151.431 77.4687 151.539 77.2212 151.739C76.9986 151.959 76.9986 152.406 77.2932 152.533C77.0314 152.379 76.6844 152.679 76.6779 152.993C76.6944 153.147 76.7418 153.297 76.8173 153.432C76.8927 153.568 76.9945 153.686 77.1165 153.779C77.375 153.956 77.5973 154.183 77.7711 154.446C77.5102 154.278 77.1995 154.21 76.8939 154.253C76.3454 154.227 75.7991 154.339 75.3031 154.579C75.2049 154.359 74.9103 154.353 74.6484 154.399C73.9302 154.551 73.272 154.915 72.7565 155.446C72.5143 155.699 72.2917 156.073 72.4619 156.386C72.5497 156.519 72.6691 156.626 72.8089 156.699L74.4979 157.766C73.575 158.057 72.7662 158.638 72.187 159.426C71.8531 159.626 71.421 159.646 71.1199 159.899C70.8188 160.152 70.8318 160.799 71.2246 160.799C71.1052 160.899 71.0204 161.035 70.9827 161.187C70.945 161.34 70.9563 161.5 71.0151 161.646C71.0758 161.767 71.1688 161.869 71.2836 161.939C71.3339 162.019 71.3957 162.091 71.4669 162.152C71.5993 162.265 71.753 162.349 71.9186 162.399C72.0079 162.516 72.1236 162.609 72.2558 162.67C72.388 162.732 72.5328 162.76 72.678 162.752C72.3564 163.024 72.0839 163.351 71.8727 163.719C71.7326 163.958 71.6586 164.231 71.6586 164.509C71.6586 164.787 71.7326 165.06 71.8727 165.299L71.9317 165.366C71.9522 165.463 71.9917 165.555 72.048 165.636C72.1042 165.717 72.176 165.786 72.259 165.839C72.1927 165.968 72.1697 166.115 72.1935 166.259C71.9127 166.365 71.6658 166.548 71.4797 166.787C71.2935 167.027 71.1752 167.313 71.1374 167.616C71.0996 167.919 71.1439 168.226 71.2655 168.505C71.387 168.784 71.5811 169.024 71.8269 169.199C72.2131 169.479 72.9333 169.425 72.9725 168.945C73.0628 169.138 73.1986 169.304 73.3677 169.43C73.5369 169.556 73.734 169.636 73.9414 169.665C73.865 169.822 73.8213 169.993 73.8132 170.168C73.8051 170.343 73.8326 170.518 73.8942 170.681C73.9557 170.845 74.0498 170.994 74.1706 171.118C74.2914 171.243 74.4363 171.341 74.5961 171.405C74.4364 171.559 74.3173 171.751 74.2497 171.964C74.1821 172.177 74.1682 172.404 74.2092 172.623C74.2503 172.843 74.3451 173.049 74.4847 173.222C74.6244 173.394 74.8045 173.529 75.0085 173.612C74.9574 173.742 74.9329 173.881 74.9364 174.021C74.9399 174.162 74.9714 174.299 75.0289 174.427C75.0864 174.554 75.1687 174.668 75.2708 174.762C75.373 174.856 75.4928 174.928 75.6231 174.973C75.7533 175.018 75.8912 175.036 76.0284 175.025C76.1657 175.015 76.2993 174.976 76.4212 174.911C76.5432 174.846 76.6509 174.756 76.7377 174.647C76.8246 174.539 76.8889 174.413 76.9266 174.278C77.0827 174.669 77.3465 175.004 77.686 175.245C77.7719 175.3 77.868 175.337 77.9684 175.353C78.0688 175.369 78.1713 175.364 78.2696 175.337C78.3679 175.311 78.4598 175.264 78.5396 175.2C78.6194 175.136 78.6854 175.056 78.7334 174.965C78.8089 175.16 78.926 175.336 79.0763 175.479C79.2266 175.623 79.4064 175.73 79.6025 175.794C79.7987 175.858 80.0064 175.876 80.2105 175.848C80.4146 175.82 80.61 175.746 80.7825 175.632C80.7825 175.863 80.8657 176.087 81.0165 176.26C81.1673 176.433 81.3752 176.544 81.6008 176.572C81.8276 176.584 82.0512 176.513 82.2304 176.371C82.4096 176.228 82.5324 176.025 82.5762 175.798H84.9002C85.4154 175.811 85.9306 175.773 86.4387 175.685C87.0847 175.555 87.6907 175.269 88.2062 174.852C88.3598 174.703 88.5428 174.589 88.743 174.518C88.9865 174.493 89.2324 174.532 89.4566 174.632C90.0749 174.812 90.7282 174.827 91.354 174.677C91.9798 174.526 92.5572 174.215 93.031 173.772C93.168 173.619 93.3269 173.489 93.5023 173.385C93.7221 173.304 93.9566 173.272 94.1897 173.292C94.7605 173.28 95.3277 173.197 95.8787 173.045C96.1204 173.002 96.3507 172.908 96.5556 172.771C96.7605 172.633 96.9356 172.454 97.0702 172.245C97.2927 171.799 97.0309 171.112 96.5464 171.125C96.5179 170.965 96.5262 170.801 96.5704 170.645C96.6147 170.489 96.6939 170.345 96.8018 170.225C96.916 170.115 97.0657 170.05 97.2232 170.042C97.3808 170.035 97.5356 170.086 97.6593 170.185C97.7113 170.243 97.748 170.314 97.7661 170.39C97.7842 170.466 97.783 170.546 97.7628 170.622C97.7426 170.698 97.7039 170.767 97.6503 170.824C97.5968 170.88 97.5301 170.922 97.4564 170.945C97.5955 171.015 97.7492 171.048 97.9039 171.042C98.0586 171.037 98.2097 170.993 98.3436 170.914C98.4776 170.834 98.5903 170.723 98.6719 170.589C98.7535 170.455 98.8015 170.303 98.8115 170.145C98.7899 169.819 98.6473 169.514 98.4127 169.291C98.178 169.068 97.8689 168.945 97.5481 168.945C97.6788 168.481 97.6923 167.99 97.5873 167.519C97.758 167.723 97.9985 167.853 98.26 167.883C98.5215 167.912 98.7843 167.839 98.9948 167.679C99.1207 167.892 99.2877 168.077 99.4858 168.222C99.6838 168.368 99.9087 168.471 100.147 168.525C100.389 168.568 100.637 168.525 100.852 168.404C101.066 168.283 101.233 168.09 101.325 167.859C101.36 167.743 101.368 167.62 101.347 167.5C101.327 167.381 101.28 167.268 101.21 167.17C101.139 167.072 101.047 166.993 100.941 166.938C100.835 166.882 100.718 166.853 100.599 166.852C100.663 166.71 100.691 166.555 100.682 166.399C100.672 166.243 100.624 166.093 100.543 165.96C100.462 165.828 100.35 165.719 100.217 165.641C100.083 165.564 99.9336 165.522 99.7804 165.519C99.8223 165.199 99.7597 164.875 99.6023 164.595C99.4449 164.316 99.2015 164.097 98.9097 163.972C99.0052 164.026 99.1111 164.058 99.2199 164.065C99.3287 164.073 99.4378 164.056 99.5395 164.016C99.6412 163.976 99.7331 163.914 99.8087 163.833C99.8842 163.753 99.9416 163.657 99.9768 163.552C100.271 164.026 100.992 163.912 101.469 163.626C101.675 163.535 101.845 163.377 101.952 163.176C102.058 162.975 102.096 162.744 102.059 162.519Z"
                  fill="#263238"
                />
                <path
                  d="M102.06 162.519C102.067 162.583 102.067 162.648 102.06 162.712C102.064 162.911 101.999 163.104 101.877 163.259C101.671 163.506 101.405 163.692 101.105 163.799C100.912 163.874 100.708 163.91 100.502 163.906C100.381 163.903 100.263 163.871 100.156 163.813C100.049 163.755 99.957 163.673 99.8869 163.572H99.9851C99.9485 163.682 99.8887 163.782 99.81 163.866C99.7312 163.95 99.6355 164.015 99.5294 164.057C99.4233 164.099 99.3095 164.116 99.1959 164.109C99.0824 164.101 98.9719 164.068 98.8722 164.012V163.952C99.1739 164.078 99.4263 164.302 99.5897 164.589C99.7532 164.876 99.8186 165.21 99.7756 165.539L99.7297 165.492C99.8889 165.485 100.047 165.521 100.188 165.597C100.328 165.673 100.446 165.787 100.528 165.926C100.63 166.067 100.69 166.235 100.7 166.41C100.711 166.585 100.672 166.759 100.587 166.912L100.548 166.839C100.726 166.833 100.9 166.89 101.041 166.999C101.183 167.108 101.284 167.263 101.327 167.439C101.377 167.623 101.366 167.82 101.295 167.997C101.224 168.174 101.097 168.323 100.934 168.419C100.769 168.526 100.582 168.591 100.387 168.61C100.193 168.628 99.9964 168.6 99.8149 168.525C99.4387 168.366 99.1207 168.091 98.9049 167.739H98.9834C98.7619 167.91 98.4842 167.988 98.2078 167.957C97.9314 167.926 97.6771 167.788 97.4974 167.572L97.5956 167.526C97.7021 168.008 97.6909 168.509 97.5629 168.985L97.5039 168.905C97.8194 168.915 98.1232 169.029 98.3681 169.232C98.4981 169.334 98.606 169.463 98.6848 169.61C98.7637 169.757 98.8119 169.919 98.8263 170.085C98.8315 170.26 98.7919 170.433 98.7116 170.587C98.6312 170.741 98.5129 170.872 98.3681 170.965C98.2263 171.074 98.0559 171.138 97.8786 171.147C97.7012 171.157 97.5252 171.112 97.373 171.019L97.2224 170.912H97.3992C97.576 170.912 97.6938 170.665 97.6611 170.472C97.6405 170.371 97.5833 170.281 97.5009 170.221C97.4185 170.16 97.3168 170.133 97.2159 170.145C97.107 170.147 97.0006 170.178 96.9074 170.236C96.8143 170.293 96.7377 170.375 96.6856 170.472C96.5805 170.677 96.5394 170.909 96.5678 171.139L96.4958 171.079C96.5844 171.078 96.672 171.098 96.7523 171.136C96.8327 171.174 96.9038 171.229 96.9606 171.299C97.0741 171.43 97.1469 171.592 97.1701 171.765C97.1973 171.939 97.1746 172.118 97.1046 172.279C97.0305 172.436 96.9232 172.575 96.7904 172.685C96.5288 172.898 96.225 173.05 95.9 173.132C95.5779 173.224 95.2498 173.294 94.9181 173.339C94.2634 173.479 93.504 173.205 93.072 173.825C92.5516 174.33 91.8991 174.67 91.1931 174.805C90.836 174.881 90.4699 174.903 90.1064 174.872C89.744 174.83 89.3866 174.752 89.0393 174.639C88.8792 174.594 88.7083 174.613 88.5614 174.692C88.4072 174.789 88.2606 174.898 88.1228 175.019C87.8191 175.249 87.4866 175.437 87.1343 175.579C86.4057 175.839 85.634 175.953 84.8627 175.912H82.5321L82.6172 175.839C82.5769 176.09 82.4448 176.316 82.2474 176.472C82.0499 176.628 81.8019 176.702 81.553 176.679C81.3042 176.656 81.0731 176.538 80.9062 176.349C80.7393 176.159 80.6489 175.913 80.6533 175.658L80.7973 175.732C80.6127 175.854 80.4036 175.933 80.1854 175.962C79.9671 175.992 79.7451 175.971 79.5356 175.902C79.3261 175.833 79.1344 175.718 78.9744 175.564C78.8144 175.409 78.6902 175.221 78.6108 175.012H78.781C78.7414 175.119 78.6754 175.214 78.5894 175.287C78.5035 175.361 78.4003 175.411 78.29 175.432C78.0699 175.483 77.8394 175.457 77.6354 175.359C77.2655 175.108 76.9781 174.751 76.8105 174.332H76.9807C76.8765 174.603 76.6731 174.823 76.4132 174.945C76.1532 175.067 75.857 175.082 75.5866 174.986C75.3163 174.89 75.093 174.691 74.9635 174.431C74.8341 174.172 74.8086 173.871 74.8924 173.592L74.9513 173.712C74.7341 173.632 74.5416 173.495 74.3933 173.314C74.245 173.134 74.1461 172.917 74.1068 172.685C74.0453 172.448 74.0494 172.198 74.1188 171.962C74.1881 171.727 74.3199 171.516 74.4996 171.352V171.519C74.3241 171.453 74.1645 171.349 74.0316 171.215C73.8987 171.081 73.7956 170.919 73.7293 170.741C73.6629 170.563 73.6348 170.372 73.6468 170.182C73.6589 169.992 73.7108 169.807 73.7991 169.639L73.8711 169.785C73.646 169.754 73.432 169.666 73.2481 169.53C73.0643 169.394 72.9162 169.214 72.8171 169.005L73.0004 168.972C72.9932 169.097 72.9393 169.214 72.8499 169.299C72.7651 169.378 72.6612 169.433 72.5487 169.459C72.3303 169.509 72.1019 169.491 71.8941 169.405C71.6979 169.306 71.5232 169.167 71.3804 168.998C71.2376 168.828 71.1296 168.631 71.0627 168.419C70.9854 168.203 70.9514 167.974 70.9626 167.745C70.9739 167.516 71.0302 167.292 71.1281 167.086C71.3238 166.668 71.6677 166.342 72.0905 166.172L72.0316 166.286C72.0013 166.12 72.0243 165.95 72.097 165.799L72.1363 165.932C72.043 165.872 71.9625 165.793 71.8995 165.7C71.8366 165.607 71.7924 165.503 71.7697 165.392V165.439C71.6098 165.229 71.5079 164.979 71.4745 164.715C71.4411 164.452 71.4775 164.184 71.5799 163.939C71.7871 163.45 72.1085 163.02 72.516 162.686L72.5946 162.859C72.4514 162.861 72.3095 162.832 72.1784 162.774C72.0474 162.715 71.9303 162.628 71.8352 162.519H71.8875C71.6065 162.443 71.3608 162.268 71.1936 162.026C71.0879 161.961 70.9997 161.87 70.9369 161.762C70.874 161.654 70.8385 161.531 70.8336 161.406C70.8295 161.279 70.8545 161.152 70.9068 161.036C70.9591 160.921 71.0371 160.819 71.1347 160.739L71.1936 160.919C71.1324 160.921 71.0716 160.907 71.0168 160.879C70.962 160.851 70.9148 160.81 70.8794 160.759C70.8137 160.666 70.7793 160.554 70.7812 160.439C70.7732 160.327 70.7909 160.214 70.8329 160.11C70.8749 160.006 70.9401 159.913 71.0234 159.839C71.3721 159.649 71.7355 159.489 72.1101 159.359C72.7007 158.554 73.5254 157.96 74.4669 157.659V157.846L73.6944 157.353L73.1052 156.986C72.9009 156.865 72.7041 156.732 72.516 156.586C72.4129 156.494 72.3475 156.365 72.3327 156.226C72.3149 156.092 72.3354 155.955 72.3916 155.833C72.4943 155.607 72.6439 155.407 72.8302 155.246C73.1743 154.923 73.5737 154.668 74.0086 154.493C74.2195 154.402 74.4388 154.333 74.6632 154.286C74.7866 154.263 74.9131 154.263 75.0364 154.286C75.1087 154.298 75.1773 154.327 75.2364 154.371C75.2956 154.415 75.3437 154.473 75.3768 154.539L75.2328 154.493C75.6272 154.284 76.0649 154.174 76.5094 154.173C76.7254 154.173 76.9349 154.173 77.164 154.173C77.3991 154.17 77.6288 154.245 77.8187 154.386L77.6615 154.513C77.4782 154.133 77.0069 153.926 76.745 153.506C76.6663 153.399 76.6164 153.272 76.6004 153.139C76.5843 153.005 76.6026 152.87 76.6534 152.746C76.7157 152.623 76.8141 152.523 76.9349 152.46C76.9995 152.425 77.0714 152.407 77.1444 152.407C77.2173 152.407 77.2892 152.425 77.3538 152.46L77.2688 152.64C77.2061 152.615 77.1496 152.576 77.1032 152.527C77.0568 152.477 77.0217 152.418 77.0003 152.353C76.9678 152.231 76.9678 152.102 77.0003 151.98C77.0324 151.857 77.0982 151.746 77.1902 151.66C77.2759 151.579 77.3759 151.516 77.4848 151.473C77.6966 151.401 77.9167 151.359 78.1394 151.346C78.2521 151.326 78.3672 151.326 78.4798 151.346C78.547 151.359 78.6101 151.388 78.6637 151.431C78.7174 151.474 78.7599 151.529 78.7875 151.593H78.5977C78.6249 151.448 78.695 151.316 78.7986 151.213C78.9022 151.11 79.0343 151.042 79.177 151.018C79.3197 150.994 79.4662 151.015 79.5968 151.079C79.7273 151.142 79.8356 151.245 79.907 151.373H79.7433C79.8229 151.287 79.9188 151.219 80.0251 151.172C80.1315 151.126 80.2461 151.101 80.362 151.101C80.4778 151.101 80.5924 151.126 80.6988 151.172C80.8052 151.219 80.9011 151.287 80.9806 151.373H80.8497C81.049 151.24 81.2862 151.18 81.5235 151.2C81.7607 151.221 81.9844 151.321 82.159 151.486L82.015 151.62L81.3603 150.706C81.2323 150.552 81.1405 150.369 81.0919 150.173C81.0664 150.068 81.0664 149.958 81.0919 149.853C81.1091 149.788 81.1456 149.73 81.1966 149.686C81.2517 149.646 81.3184 149.624 81.3865 149.626V149.853C81.2569 149.859 81.1285 149.825 81.0178 149.756C80.9071 149.687 80.8189 149.586 80.7646 149.466C80.703 149.354 80.6679 149.229 80.6623 149.1C80.6566 148.972 80.6804 148.844 80.7318 148.726C80.8576 148.52 81.0362 148.353 81.2485 148.242C81.4608 148.132 81.6986 148.083 81.9364 148.1H81.9757C82.1262 148.286 82.2703 148.46 82.4077 148.64H82.2768C82.4329 148.507 82.6256 148.428 82.8281 148.412C83.0306 148.397 83.2329 148.446 83.4066 148.553C83.5803 148.66 83.7168 148.82 83.7971 149.01C83.8774 149.2 83.8975 149.411 83.8545 149.613L83.6909 149.533C83.7436 149.468 83.8133 149.419 83.8919 149.392C83.9706 149.365 84.0551 149.36 84.136 149.38C84.2905 149.406 84.429 149.492 84.5223 149.62C84.668 149.862 84.7408 150.142 84.7317 150.426L84.5681 150.366C84.6853 150.259 84.8314 150.189 84.9877 150.166C85.144 150.144 85.3033 150.169 85.4453 150.24C85.5883 150.297 85.7116 150.396 85.8001 150.524C85.8885 150.652 85.9382 150.803 85.9428 150.96L85.8054 150.88C86.1978 150.628 86.651 150.492 87.1147 150.486L87.0427 150.633C86.9165 150.463 86.8487 150.255 86.8498 150.042C86.8509 149.828 86.9208 149.621 87.0488 149.452C87.1767 149.283 87.3556 149.162 87.558 149.107C87.7603 149.051 87.9749 149.065 88.1686 149.146L88.0443 149.233C88.0511 149.092 88.0883 148.955 88.1531 148.83C88.218 148.706 88.3089 148.598 88.4195 148.513C88.5301 148.428 88.6576 148.37 88.793 148.341C88.9284 148.312 89.0684 148.314 89.203 148.346L89.0852 148.413C89.1353 148.177 89.2594 147.964 89.4387 147.806C89.617 147.641 89.8525 147.555 90.0933 147.566C90.2137 147.582 90.3281 147.629 90.4255 147.702C90.523 147.776 90.6002 147.874 90.6498 147.986C90.7279 148.199 90.746 148.43 90.7021 148.653C90.6046 149.071 90.4596 149.476 90.2701 149.86C90.1064 150.246 89.9493 150.626 89.7856 151.006L89.6612 150.9L91.2848 149.82L92.0834 149.293C92.214 149.192 92.3571 149.109 92.509 149.046C92.6043 149.021 92.7055 149.036 92.7905 149.086C92.869 149.133 92.9279 149.18 92.9869 149.206C93.1279 149.243 93.2741 149.254 93.4189 149.24C93.5068 149.242 93.5931 149.263 93.6722 149.302C93.7512 149.342 93.8211 149.397 93.8772 149.466C93.9696 149.607 94.0264 149.769 94.0423 149.938C94.0583 150.107 94.0331 150.277 93.9688 150.433C93.8362 150.723 93.6278 150.969 93.3666 151.146C93.1376 151.322 92.919 151.511 92.7119 151.713L92.6661 151.58L93.9099 151.706L93.8248 151.773C93.8548 151.588 93.9227 151.412 94.024 151.256C94.1253 151.1 94.2578 150.967 94.4128 150.866C94.5678 150.766 94.7418 150.699 94.9236 150.672C95.1054 150.644 95.2909 150.656 95.468 150.706L95.3763 150.76C95.4267 150.615 95.5138 150.487 95.6289 150.389C95.744 150.291 95.8828 150.225 96.031 150.2C96.2937 150.129 96.5644 150.093 96.8362 150.093C97.1036 150.074 97.3722 150.106 97.6283 150.186C97.7595 150.226 97.8807 150.295 97.9835 150.387C98.0863 150.479 98.1684 150.592 98.2241 150.72C98.3184 150.969 98.3444 151.239 98.2994 151.502C98.2545 151.765 98.1402 152.011 97.9687 152.213C97.641 152.58 97.2534 152.887 96.8231 153.12V153.04C96.8599 153.13 96.9202 153.208 96.9976 153.265C97.0749 153.323 97.1663 153.358 97.2617 153.366C97.4595 153.394 97.6611 153.376 97.8509 153.313C98.048 153.248 98.2492 153.196 98.4532 153.16C98.6657 153.128 98.8825 153.17 99.0686 153.28C99.4286 153.506 99.6381 153.866 99.9654 154.026C100.144 154.084 100.325 154.131 100.509 154.166C100.598 154.214 100.677 154.28 100.74 154.36C100.804 154.44 100.849 154.533 100.875 154.633C100.987 154.986 101.098 155.333 101.203 155.673C101.237 155.763 101.251 155.86 101.244 155.957C101.237 156.054 101.21 156.148 101.163 156.233C101.056 156.387 100.894 156.492 100.712 156.526C100.542 156.569 100.364 156.569 100.195 156.526C100.036 156.486 99.882 156.428 99.7363 156.353C99.469 156.198 99.1761 156.094 98.8722 156.046V155.946C99.2276 156.079 99.5696 156.246 99.8934 156.446C100.2 156.633 100.449 156.903 100.614 157.226C100.749 157.532 100.772 157.877 100.679 158.199C100.641 158.35 100.564 158.488 100.456 158.599C100.348 158.709 100.212 158.788 100.064 158.826V158.826C99.8119 158.99 99.5178 159.073 99.2191 159.066L99.2584 159.026C99.3619 159.845 99.5986 160.64 99.9589 161.379V161.379C100.352 161.373 100.744 161.423 101.124 161.526C101.391 161.603 101.634 161.747 101.831 161.946C101.944 162.065 102.029 162.208 102.08 162.366C102.097 162.416 102.111 162.467 102.119 162.519C102.064 162.311 101.958 162.121 101.812 161.966C101.615 161.773 101.374 161.633 101.111 161.559C100.732 161.467 100.342 161.424 99.9523 161.432C99.582 160.688 99.3364 159.886 99.2257 159.059V159.019H99.2649C99.5504 159.026 99.8312 158.945 100.07 158.786V158.786C100.205 158.75 100.328 158.678 100.426 158.577C100.524 158.476 100.593 158.35 100.627 158.213C100.711 157.907 100.685 157.581 100.555 157.293C100.407 156.991 100.181 156.737 99.9 156.559C99.5789 156.367 99.2415 156.204 98.8918 156.073L98.6038 155.959H98.9114C99.2277 156.003 99.5324 156.109 99.8083 156.273C99.9506 156.344 100.1 156.4 100.253 156.439C100.407 156.473 100.565 156.473 100.718 156.439C100.874 156.413 101.013 156.324 101.105 156.193C101.137 156.119 101.154 156.04 101.154 155.959C101.154 155.879 101.137 155.799 101.105 155.726C100.993 155.393 100.888 155.059 100.777 154.693C100.755 154.609 100.717 154.531 100.664 154.463C100.611 154.396 100.545 154.34 100.47 154.299C100.284 154.264 100.1 154.217 99.9196 154.159C99.553 153.973 99.337 153.606 99.0162 153.413C98.8361 153.338 98.6424 153.304 98.4482 153.312C98.254 153.32 98.0637 153.37 97.8902 153.46C97.679 153.529 97.4549 153.547 97.2355 153.513C97.1177 153.5 97.0055 153.455 96.911 153.382C96.8164 153.309 96.7431 153.211 96.6987 153.1V153.053H96.7446C97.1584 152.824 97.5322 152.526 97.8509 152.173C98.0036 151.992 98.106 151.773 98.1474 151.539C98.1889 151.305 98.1679 151.063 98.0866 150.84C98.0368 150.73 97.9651 150.633 97.876 150.554C97.7869 150.474 97.6824 150.415 97.5694 150.38C97.3293 150.309 97.0789 150.282 96.8296 150.3C96.5711 150.299 96.3136 150.332 96.0637 150.4C95.9438 150.423 95.832 150.478 95.7391 150.559C95.6462 150.639 95.5753 150.743 95.5334 150.86V150.94H95.4549C95.2991 150.902 95.1373 150.896 94.9793 150.923C94.8214 150.951 94.6705 151.011 94.5359 151.099C94.4013 151.188 94.2857 151.303 94.1961 151.438C94.1065 151.574 94.0448 151.726 94.0147 151.886V151.96H93.9427L92.6923 151.833H92.5352L92.6464 151.72C92.8511 151.509 93.0698 151.313 93.3011 151.133C93.5407 150.966 93.7309 150.735 93.851 150.466C93.905 150.337 93.9267 150.197 93.9141 150.057C93.9015 149.917 93.8551 149.783 93.779 149.666C93.7394 149.613 93.6878 149.57 93.6286 149.541C93.5694 149.512 93.5042 149.498 93.4386 149.5C93.2756 149.515 93.1113 149.499 92.9541 149.453C92.7905 149.373 92.6923 149.26 92.581 149.3C92.4472 149.362 92.32 149.438 92.2013 149.526L91.4092 150.06L89.7856 151.14L89.55 151.293L89.6612 151.033C89.8249 150.653 89.982 150.266 90.1457 149.88C90.3285 149.508 90.469 149.117 90.5647 148.713C90.6028 148.519 90.5869 148.318 90.5188 148.133C90.4829 148.049 90.426 147.975 90.3536 147.92C90.2813 147.866 90.196 147.831 90.1064 147.82C89.9177 147.823 89.7355 147.891 89.5885 148.012C89.4416 148.132 89.3382 148.299 89.2946 148.486V148.586H89.1965C89.0889 148.563 88.9777 148.564 88.8704 148.588C88.7632 148.613 88.6623 148.66 88.5748 148.728C88.4872 148.796 88.4149 148.882 88.3629 148.98C88.3109 149.079 88.2804 149.188 88.2734 149.3V149.433L88.149 149.386C87.9937 149.325 87.8235 149.316 87.6625 149.359C87.5015 149.402 87.3579 149.495 87.2521 149.626C87.1516 149.767 87.0974 149.936 87.0974 150.11C87.0974 150.283 87.1516 150.453 87.2521 150.593L87.3569 150.733H87.1801C86.7534 150.742 86.337 150.868 85.9756 151.1L85.825 151.193V151.02C85.8142 150.9 85.7718 150.785 85.7021 150.688C85.6325 150.591 85.5384 150.514 85.4296 150.467C85.3209 150.42 85.2016 150.404 85.0845 150.42C84.9674 150.436 84.8568 150.485 84.7645 150.56L84.6205 150.713V150.493C84.6311 150.248 84.572 150.005 84.4502 149.793C84.3324 149.62 84.0313 149.553 83.9134 149.706L83.6581 150.066L83.7498 149.633C83.785 149.47 83.7693 149.3 83.705 149.147C83.6406 148.993 83.5308 148.864 83.3908 148.778C83.2509 148.691 83.0878 148.651 82.9244 148.663C82.7611 148.676 82.6056 148.74 82.4797 148.846L82.4012 148.906L82.3423 148.833L81.9102 148.3H81.9757C81.7756 148.28 81.5742 148.319 81.3947 148.411C81.2152 148.503 81.0649 148.645 80.961 148.82C80.7908 149.153 81.0526 149.7 81.4258 149.666V149.853C81.3603 149.853 81.3407 149.853 81.321 149.94C81.3047 150.014 81.3047 150.092 81.321 150.166C81.3636 150.334 81.4444 150.489 81.5567 150.62L82.2114 151.533L82.0673 151.666C81.9249 151.528 81.7406 151.442 81.5444 151.424C81.3482 151.406 81.1518 151.456 80.9872 151.566L80.9151 151.62L80.8562 151.553C80.7952 151.488 80.7219 151.437 80.641 151.402C80.56 151.367 80.4729 151.349 80.3849 151.349C80.2969 151.349 80.2098 151.367 80.1288 151.402C80.0478 151.437 79.9746 151.488 79.9135 151.553L79.8088 151.673L79.7499 151.533C79.6933 151.455 79.6166 151.394 79.5281 151.357C79.4396 151.32 79.3429 151.309 79.2487 151.325C79.1544 151.341 79.0664 151.383 78.9942 151.447C78.9221 151.511 78.8687 151.593 78.8399 151.686L78.7941 152.186L78.6435 151.713C78.6435 151.586 78.3882 151.553 78.1984 151.58C78.0003 151.593 77.8046 151.631 77.6157 151.693C77.5311 151.72 77.4542 151.767 77.3915 151.831C77.3288 151.895 77.2822 151.973 77.2557 152.06C77.2098 152.233 77.2557 152.44 77.3997 152.486L77.3211 152.666C77.1836 152.586 76.9807 152.706 76.8956 152.873C76.8606 152.964 76.8494 153.063 76.8632 153.16C76.877 153.257 76.9152 153.349 76.9742 153.426C77.1967 153.793 77.6288 153.986 77.9038 154.453L78.1394 154.893L77.7532 154.573C77.4651 154.339 77.0003 154.419 76.5879 154.426C76.174 154.43 75.7664 154.53 75.3965 154.719L75.2983 154.779L75.259 154.673C75.2001 154.533 74.9644 154.506 74.7614 154.546C74.5378 154.59 74.3186 154.654 74.1068 154.739C73.6948 154.906 73.3173 155.151 72.9939 155.459C72.8233 155.595 72.6884 155.771 72.6011 155.973C72.5559 156.057 72.539 156.154 72.5532 156.25C72.5674 156.345 72.6118 156.432 72.6797 156.499C72.8575 156.635 73.0433 156.76 73.2361 156.873L73.8253 157.239L74.5978 157.733L74.7811 157.846L74.5716 157.913C73.6722 158.201 72.8845 158.77 72.3196 159.539C71.9578 159.669 71.6037 159.821 71.2591 159.993C71.2011 160.047 71.1557 160.115 71.1263 160.19C71.0968 160.265 71.0841 160.345 71.0889 160.426C71.0889 160.593 71.174 160.726 71.3049 160.719H71.6191L71.3638 160.919C71.2914 160.984 71.234 161.064 71.1955 161.154C71.157 161.244 71.1385 161.341 71.1412 161.439C71.1454 161.533 71.1728 161.625 71.2209 161.705C71.2689 161.785 71.3361 161.852 71.4162 161.899V161.899C71.5611 162.101 71.7688 162.246 72.0054 162.312V162.312C72.0819 162.415 72.1811 162.497 72.2949 162.553C72.4087 162.608 72.5338 162.636 72.66 162.632L72.9612 162.599L72.7386 162.806C72.3536 163.117 72.0501 163.52 71.8548 163.979C71.7619 164.195 71.7269 164.432 71.7533 164.666C71.7798 164.901 71.8668 165.123 72.0054 165.312V165.312C72.041 165.481 72.1396 165.629 72.2803 165.726L72.3654 165.772L72.3196 165.859C72.2643 165.968 72.2458 166.092 72.2672 166.212V166.292L72.1887 166.326C71.812 166.476 71.5054 166.767 71.3311 167.139C71.2457 167.321 71.1965 167.518 71.1864 167.72C71.1762 167.921 71.2054 168.122 71.2722 168.312C71.3307 168.497 71.4245 168.668 71.548 168.815C71.6716 168.963 71.8226 169.084 71.9923 169.172C72.1599 169.244 72.3453 169.26 72.5225 169.219C72.6003 169.21 72.6729 169.176 72.7287 169.12C72.7846 169.064 72.8203 168.991 72.8302 168.912V168.525L72.9939 168.879C73.0799 169.055 73.2063 169.208 73.3624 169.324C73.5185 169.44 73.6997 169.516 73.8908 169.545H74.0348L73.9628 169.672C73.8937 169.817 73.8545 169.975 73.8476 170.136C73.8407 170.297 73.8663 170.458 73.9227 170.608C73.9791 170.759 74.0653 170.896 74.1757 171.011C74.2862 171.126 74.4187 171.218 74.565 171.279L74.7287 171.332L74.5912 171.445C74.4386 171.589 74.327 171.772 74.2682 171.975C74.2094 172.178 74.2057 172.394 74.2574 172.599C74.2913 172.797 74.3756 172.984 74.5019 173.139C74.6281 173.295 74.7921 173.414 74.9775 173.485H75.0691V173.579C75.0207 173.697 74.9965 173.824 74.9982 173.953C74.9999 174.081 75.0273 174.208 75.0789 174.325C75.1304 174.442 75.205 174.547 75.298 174.634C75.3909 174.72 75.5003 174.787 75.6194 174.828C75.7385 174.87 75.8648 174.887 75.9905 174.877C76.1162 174.868 76.2386 174.832 76.3501 174.772C76.4617 174.713 76.5601 174.631 76.6393 174.531C76.7185 174.431 76.7767 174.316 76.8105 174.192L76.876 173.985L76.9807 174.179C77.1266 174.562 77.3849 174.89 77.7205 175.119C77.7948 175.163 77.877 175.192 77.9623 175.204C78.0477 175.216 78.1345 175.21 78.2178 175.188C78.3011 175.166 78.3793 175.127 78.4479 175.074C78.5164 175.021 78.574 174.954 78.6173 174.879L78.709 174.612L78.7941 174.885C78.8662 175.065 78.976 175.226 79.1159 175.358C79.2557 175.49 79.4221 175.59 79.6036 175.649C79.785 175.709 79.977 175.728 80.1663 175.704C80.3555 175.68 80.5373 175.615 80.6991 175.512L80.8497 175.405V175.592C80.8522 175.805 80.9326 176.01 81.0754 176.167C81.2182 176.323 81.4131 176.42 81.6222 176.438C81.8199 176.439 82.0118 176.37 82.1647 176.242C82.3176 176.114 82.4221 175.936 82.4601 175.738V175.658H82.5321H84.8692C85.6181 175.699 86.3675 175.591 87.0754 175.339C87.4174 175.205 87.7391 175.023 88.0312 174.799C88.1765 174.675 88.3296 174.562 88.4894 174.459C88.6713 174.364 88.8808 174.34 89.0786 174.392C89.4194 174.506 89.7702 174.586 90.1261 174.632C90.4744 174.66 90.8248 174.638 91.1669 174.565C91.8424 174.436 92.4673 174.112 92.9672 173.632C93.0905 173.497 93.2315 173.381 93.3862 173.285C93.5491 173.204 93.7285 173.163 93.9099 173.165C94.2424 173.162 94.5745 173.142 94.905 173.105C95.2275 173.06 95.5468 172.993 95.8608 172.905C96.1667 172.827 96.4539 172.686 96.7053 172.492C96.8245 172.403 96.9178 172.283 96.9755 172.145C97.0331 172.006 97.0528 171.854 97.0326 171.705C97.0257 171.563 96.9692 171.428 96.8732 171.324C96.7772 171.22 96.6481 171.154 96.5089 171.139H96.4434V171.185C96.4066 170.919 96.4548 170.648 96.5809 170.412C96.6465 170.294 96.7415 170.195 96.8564 170.126C96.9713 170.057 97.1021 170.02 97.2355 170.019C97.3693 170.005 97.5032 170.043 97.6101 170.126C97.717 170.209 97.7891 170.33 97.8116 170.465C97.8374 170.595 97.8129 170.73 97.7434 170.842C97.6739 170.954 97.5646 171.034 97.4385 171.065V170.939C97.569 171.018 97.7202 171.056 97.8721 171.047C98.0241 171.037 98.1696 170.981 98.2895 170.885C98.4157 170.805 98.5194 170.693 98.5905 170.56C98.6616 170.427 98.6977 170.277 98.6954 170.125C98.6544 169.831 98.5107 169.562 98.2907 169.368C98.0706 169.173 97.7889 169.066 97.4974 169.065H97.4188V168.985C97.5454 168.527 97.5589 168.044 97.4581 167.579L97.3992 167.326L97.5629 167.532C97.7236 167.719 97.9466 167.837 98.1885 167.866C98.4305 167.894 98.6741 167.83 98.8722 167.686L98.918 167.646L98.9507 167.699C99.1542 168.031 99.4506 168.293 99.8018 168.452C99.9692 168.521 100.15 168.548 100.33 168.532C100.51 168.515 100.683 168.456 100.836 168.359C100.982 168.276 101.096 168.145 101.16 167.988C101.224 167.831 101.234 167.656 101.19 167.492C101.159 167.339 101.077 167.202 100.957 167.105C100.838 167.007 100.688 166.956 100.535 166.959H100.45L100.496 166.872C100.561 166.737 100.591 166.587 100.584 166.436C100.577 166.285 100.533 166.139 100.455 166.01C100.377 165.882 100.268 165.775 100.139 165.701C100.01 165.627 99.8649 165.587 99.7167 165.586H99.6708V165.532C99.7122 165.222 99.6519 164.906 99.4993 164.633C99.3466 164.361 99.1101 164.147 98.8263 164.026V163.966C98.9185 164.015 99.0199 164.044 99.1238 164.05C99.2277 164.056 99.3317 164.04 99.4289 164.002C99.5262 163.964 99.6144 163.906 99.6877 163.831C99.761 163.755 99.8177 163.665 99.8541 163.566V163.499L99.8934 163.559C99.9577 163.652 100.043 163.729 100.142 163.782C100.241 163.836 100.351 163.864 100.463 163.866C100.661 163.873 100.859 163.842 101.046 163.772C101.341 163.67 101.605 163.491 101.812 163.252C101.931 163.104 101.996 162.918 101.995 162.726C102.067 162.599 102.054 162.519 102.06 162.519Z"
                  fill="#455A64"
                />
                <path
                  d="M91.6444 179.852C91.6051 178.605 91.5789 177.618 91.592 177.618C91.6051 177.618 95.7818 177.005 95.88 172.745C95.9324 170.685 95.6901 166.446 95.4283 162.606C95.3013 160.61 94.4391 158.737 93.014 157.361C91.589 155.986 89.7063 155.209 87.7427 155.186H87.3434C82.9834 155.393 80.7249 159.279 81.0457 163.706L81.4908 179.912L83.9719 186.085C86.4465 188.838 91.7884 183.565 91.6444 179.832V179.852Z"
                  fill="#E6866E"
                />
                <path
                  d="M91.6106 177.585C89.6791 177.553 87.7965 176.961 86.1836 175.878C86.1836 175.878 87.434 179.138 91.6106 178.805V177.585Z"
                  fill="#A3594E"
                />
                <path
                  d="M93.6661 166.252C93.6661 166.411 93.6051 166.563 93.4962 166.677C93.3873 166.79 93.2392 166.856 93.0834 166.859C93.007 166.864 92.9303 166.854 92.8579 166.829C92.7855 166.803 92.7189 166.763 92.6621 166.711C92.6053 166.659 92.5594 166.595 92.5272 166.524C92.4949 166.454 92.4771 166.377 92.4746 166.299C92.4762 166.141 92.5377 165.99 92.6463 165.877C92.7548 165.764 92.9021 165.698 93.0572 165.692C93.1335 165.688 93.2098 165.699 93.2818 165.725C93.3538 165.75 93.42 165.791 93.4767 165.843C93.5333 165.895 93.5792 165.958 93.6118 166.028C93.6443 166.098 93.6627 166.175 93.6661 166.252V166.252Z"
                  fill="#263238"
                />
                <path
                  d="M94.5375 164.326C94.4655 164.406 94.0137 164.059 93.3722 164.052C92.7306 164.046 92.2593 164.366 92.1873 164.286C92.1153 164.206 92.2331 164.106 92.436 163.959C92.7169 163.763 93.0515 163.663 93.3918 163.672C93.7243 163.675 94.0475 163.784 94.3149 163.986C94.5113 164.146 94.5767 164.292 94.5375 164.326Z"
                  fill="#263238"
                />
                <path
                  d="M87.8347 166.366C87.8331 166.525 87.7707 166.677 87.6607 166.79C87.5508 166.904 87.4019 166.969 87.2455 166.972C87.1691 166.978 87.0924 166.967 87.0201 166.942C86.9477 166.916 86.8811 166.876 86.8242 166.824C86.7674 166.772 86.7215 166.708 86.6893 166.638C86.657 166.567 86.6392 166.49 86.6367 166.412C86.6383 166.254 86.6998 166.103 86.8084 165.99C86.9169 165.877 87.0642 165.811 87.2194 165.806C87.2961 165.8 87.3731 165.81 87.4459 165.836C87.5186 165.861 87.5857 165.901 87.643 165.953C87.7004 166.006 87.7469 166.069 87.7798 166.14C87.8127 166.211 87.8314 166.287 87.8347 166.366V166.366Z"
                  fill="#263238"
                />
                <path
                  d="M88.2407 164.519C88.1686 164.599 87.7169 164.252 87.0754 164.246C86.4338 164.239 85.9559 164.566 85.8905 164.486C85.825 164.406 85.9298 164.306 86.1392 164.152C86.4194 163.96 86.7507 163.86 87.0885 163.866C87.4235 163.871 87.7484 163.983 88.0181 164.186C88.2014 164.332 88.2799 164.479 88.2407 164.519Z"
                  fill="#263238"
                />
                <path
                  d="M90.4915 169.572C90.8295 169.467 91.1793 169.407 91.5324 169.392C91.6961 169.392 91.8532 169.345 91.8859 169.232C91.9015 169.061 91.8649 168.888 91.7812 168.739L91.3098 167.459C90.8713 166.378 90.5189 165.264 90.2559 164.126C90.7761 165.173 91.2139 166.261 91.5652 167.379L92.0169 168.666C92.1199 168.871 92.1477 169.107 92.0954 169.332C92.071 169.391 92.0334 169.443 91.9857 169.485C91.938 169.527 91.8814 169.557 91.8205 169.572C91.7286 169.597 91.6341 169.611 91.539 169.612C91.1896 169.646 90.8374 169.632 90.4915 169.572V169.572Z"
                  fill="#263238"
                />
                <path
                  d="M88.4161 162.306C88.3507 162.479 87.7091 162.392 86.9563 162.479C86.2034 162.566 85.588 162.766 85.4898 162.606C85.3917 162.446 85.5553 162.359 85.8041 162.192C86.1325 161.982 86.5045 161.852 86.8908 161.812C87.277 161.773 87.667 161.825 88.0299 161.966C88.3048 162.079 88.4423 162.219 88.4161 162.306Z"
                  fill="#263238"
                />
                <path
                  d="M94.3087 162.119C94.1974 162.272 93.7523 162.119 93.2155 162.119C92.6786 162.119 92.2335 162.232 92.1287 162.079C92.024 161.926 92.1287 161.852 92.3513 161.706C92.6108 161.531 92.9174 161.442 93.2285 161.452C93.5434 161.457 93.8494 161.56 94.1058 161.746C94.2956 161.892 94.3545 162.046 94.3087 162.119Z"
                  fill="#263238"
                />
                <path
                  d="M91.1135 171.259C91.0404 171.511 90.9324 171.751 90.7927 171.972C90.721 172.087 90.6249 172.183 90.5116 172.255C90.3983 172.326 90.2706 172.371 90.1381 172.385C90.001 172.394 89.864 172.366 89.7403 172.306C89.6165 172.245 89.5101 172.153 89.4311 172.039C89.2749 171.805 89.1927 171.528 89.1954 171.245C89.1954 170.992 89.2936 170.685 89.5423 170.645C89.6455 170.637 89.7491 170.656 89.8435 170.699L91.1528 171.165"
                  fill="#A3594E"
                />
                <path
                  d="M90.643 172.365C90.4105 172.394 90.1746 172.376 89.9491 172.312C89.7192 172.234 89.5257 172.073 89.4057 171.859C89.3391 171.727 89.2996 171.583 89.2895 171.435C89.2794 171.287 89.2989 171.139 89.3468 170.999C89.3737 170.926 89.4089 170.857 89.4515 170.792C89.4973 170.739 89.4908 170.739 89.5497 170.745L89.7592 170.819L89.9752 170.892C90.2567 170.999 90.5121 171.085 90.7281 171.152C90.9547 171.251 91.1958 171.312 91.4417 171.332C91.2414 171.188 91.0206 171.075 90.787 170.999L90.0473 170.692L89.8378 170.606C89.7585 170.572 89.6777 170.544 89.5955 170.519C89.5314 170.5 89.4632 170.5 89.3991 170.519C89.3438 170.546 89.2981 170.591 89.2682 170.646C89.2098 170.722 89.1634 170.808 89.1307 170.899C89.0679 171.07 89.0435 171.254 89.0594 171.436C89.0752 171.618 89.1309 171.795 89.2224 171.952C89.367 172.202 89.6021 172.384 89.877 172.459C90.0609 172.513 90.2562 172.513 90.44 172.459C90.5906 172.425 90.6495 172.379 90.643 172.365Z"
                  fill="#263238"
                />
                <path
                  d="M96.5274 159.033C96.5148 158.808 96.4841 158.585 96.4357 158.366C96.3183 158.056 96.127 157.781 95.8793 157.566C95.1758 156.723 94.2752 156.074 93.2607 155.679C92.6453 155.519 92.0103 155.579 91.3949 155.426C91.0152 155.326 90.6486 155.153 90.2755 155.013C88.7459 154.501 87.1105 154.412 85.5358 154.753C84.6439 154.873 83.7809 155.157 82.9892 155.593C82.1138 156.158 81.3409 156.873 80.7045 157.706C79.6275 158.937 78.7681 160.349 78.1645 161.879C77.6676 163.126 77.5402 164.493 77.7979 165.812C78.099 167.146 79.009 168.305 80.1284 168.479L80.5147 167.939L81.1366 167.139C81.0318 167.459 81.1366 167.439 81.3984 167.586C81.4634 167.621 81.5351 167.642 81.6086 167.647C81.6821 167.652 81.7559 167.642 81.8251 167.616C81.8943 167.59 81.9574 167.55 82.0102 167.497C82.063 167.445 82.1044 167.382 82.1316 167.312C82.3608 167.566 82.7863 167.246 82.7012 166.892C82.963 167.012 83.2642 166.646 83.1594 166.332C83.454 166.419 83.5915 165.926 83.7159 165.599C83.7904 165.423 83.8757 165.251 83.9712 165.086C84.2456 164.525 84.359 163.896 84.2985 163.272C84.6005 162.732 84.7415 162.113 84.7044 161.492C84.7044 161.092 84.7044 160.699 84.7502 160.306L84.9401 160.019C84.9529 160.151 85.0039 160.276 85.0867 160.378C85.1695 160.48 85.2803 160.555 85.4049 160.592C85.6384 160.632 85.8783 160.607 86.0988 160.519L86.7535 160.326L87.1855 160.419C87.1363 160.809 87.2146 161.205 87.4081 161.546C87.4822 161.793 87.6399 162.006 87.8533 162.146C87.9083 162.167 87.968 162.173 88.026 162.162C88.0839 162.151 88.1378 162.124 88.1818 162.085C88.2257 162.045 88.258 161.993 88.2752 161.936C88.2923 161.878 88.2935 161.817 88.2788 161.759C88.3223 161.792 88.3725 161.815 88.4256 161.825C88.4788 161.836 88.5337 161.835 88.5863 161.822C88.6389 161.808 88.6879 161.783 88.7298 161.748C88.7717 161.713 88.8055 161.669 88.8287 161.619C88.9344 161.391 88.9687 161.135 88.9269 160.886C88.8609 160.28 88.6219 159.708 88.2395 159.239L89.5488 160.273C89.6303 160.36 89.739 160.417 89.8565 160.433C89.856 160.48 89.8656 160.526 89.8845 160.569C89.9034 160.612 89.9312 160.651 89.966 160.682C90.0009 160.713 90.0419 160.736 90.0862 160.749C90.1306 160.762 90.1773 160.766 90.2231 160.759C90.3934 160.695 90.5382 160.575 90.6355 160.419C90.9039 160.086 91.1658 159.533 90.8777 159.199C90.9124 159.183 90.943 159.158 90.9669 159.128C90.9909 159.098 91.0076 159.062 91.0158 159.024C91.0241 158.986 91.0236 158.946 91.0144 158.909C91.0052 158.871 90.9876 158.836 90.9629 158.806L92.4031 159.739C92.2591 159.673 92.1281 159.899 92.174 160.073C92.2292 160.236 92.3409 160.373 92.4882 160.459C92.3846 160.664 92.348 160.898 92.3834 161.126C92.1216 160.926 91.7877 161.366 91.899 161.719C91.9551 161.876 92.0593 162.009 92.1962 162.101C92.333 162.192 92.4951 162.236 92.6584 162.226C92.792 162.238 92.9251 162.197 93.0308 162.113C93.1365 162.029 93.2069 161.907 93.2279 161.772C93.5291 161.812 93.7844 161.372 93.6535 161.039C93.876 161.172 94.0332 160.759 94.0266 160.466C94.0006 159.943 93.8854 159.429 93.6862 158.946C93.6929 158.954 93.7014 158.961 93.7111 158.966C93.7207 158.97 93.7312 158.973 93.7418 158.973C93.7525 158.973 93.763 158.97 93.7726 158.966C93.7822 158.961 93.7907 158.954 93.7975 158.946C93.8051 158.927 93.8051 158.905 93.7975 158.886L94.6551 160.599C94.9283 161.074 95.1146 161.596 95.205 162.139C95.205 162.366 95.277 162.679 95.4603 162.679C95.5115 162.677 95.5612 162.661 95.6043 162.632C96.1385 162.261 96.5295 161.712 96.7107 161.079C96.7897 160.866 96.8339 160.64 96.8416 160.413C96.7761 159.944 96.671 159.482 96.5274 159.033Z"
                  fill="#263238"
                />
                <path
                  d="M90.5694 158.433C90.6532 158.333 90.7037 158.21 90.7134 158.079C90.7189 158.008 90.7081 157.937 90.682 157.871C90.6559 157.805 90.6151 157.746 90.5629 157.699C90.4955 157.638 90.4124 157.597 90.3232 157.582C90.2339 157.566 90.1422 157.577 90.0588 157.613L89.954 157.659L89.9933 157.546C90.0318 157.437 90.0315 157.318 89.9926 157.21C89.9537 157.101 89.8786 157.01 89.7804 156.952C89.6822 156.894 89.5672 156.873 89.4553 156.893C89.3435 156.912 89.242 156.971 89.1685 157.059L89.0768 156.986C89.0804 156.962 89.0804 156.937 89.0768 156.913C89.0852 156.871 89.0843 156.827 89.0741 156.786C89.0639 156.744 89.0447 156.706 89.0179 156.673C88.9607 156.606 88.8815 156.564 88.7953 156.553C88.7089 156.546 88.6221 156.558 88.54 156.586C88.4533 156.642 88.3542 156.674 88.252 156.679C88.1276 156.679 88.0687 156.579 88.0032 156.546C87.9369 156.502 87.8668 156.464 87.7937 156.433C87.657 156.385 87.5125 156.364 87.3682 156.373C87.1575 156.383 86.9537 156.452 86.779 156.573C86.6612 156.659 86.6022 156.726 86.5957 156.719C86.6369 156.65 86.6901 156.589 86.7528 156.539C86.9241 156.392 87.1378 156.306 87.3616 156.293C87.5159 156.276 87.672 156.292 87.8199 156.339C87.9014 156.37 87.9803 156.408 88.0556 156.453C88.1341 156.506 88.1996 156.573 88.2585 156.573C88.3433 156.554 88.425 156.523 88.5007 156.479C88.5987 156.441 88.7042 156.427 88.8084 156.439C88.8656 156.444 88.9211 156.461 88.9718 156.489C89.0224 156.516 89.067 156.554 89.103 156.599C89.144 156.644 89.1732 156.699 89.1881 156.758C89.203 156.818 89.203 156.88 89.1881 156.939C89.1797 156.98 89.1642 157.018 89.1423 157.053L89.0506 156.979C89.1503 156.871 89.2847 156.801 89.4298 156.784C89.575 156.767 89.7213 156.803 89.8428 156.886C89.9403 156.962 90.0126 157.067 90.0501 157.186C90.0875 157.305 90.0883 157.433 90.0522 157.553L89.9868 157.493C90.0877 157.454 90.1973 157.443 90.3035 157.463C90.4097 157.483 90.5085 157.533 90.5891 157.606C90.6467 157.665 90.6902 157.736 90.7163 157.815C90.7425 157.893 90.7504 157.977 90.7396 158.059C90.7253 158.163 90.6821 158.26 90.6152 158.339C90.6022 158.419 90.5694 158.439 90.5694 158.433Z"
                  fill="#455A64"
                />
                <path
                  d="M93.5089 158.939C93.602 158.843 93.6677 158.724 93.6988 158.593C93.7332 158.443 93.7097 158.285 93.6333 158.153C93.5846 158.066 93.5152 157.994 93.4316 157.943C93.348 157.892 93.253 157.863 93.1554 157.859H93.0703L93.1227 157.793C93.197 157.701 93.2488 157.593 93.2739 157.477C93.2989 157.361 93.2965 157.241 93.2667 157.126C93.2451 157.068 93.2109 157.016 93.1667 156.973C93.1225 156.93 93.0694 156.898 93.0114 156.879C92.9533 156.857 92.8899 156.852 92.8293 156.867C92.7687 156.881 92.7136 156.913 92.671 156.959L92.3764 157.339L92.5793 156.899C92.6166 156.819 92.636 156.731 92.636 156.643C92.636 156.554 92.6166 156.466 92.5793 156.386C92.5412 156.301 92.4819 156.227 92.4073 156.172C92.3327 156.117 92.2453 156.083 92.1538 156.073C92.0227 156.049 91.8878 156.076 91.7741 156.146L91.6432 156.219L91.689 156.073C91.7479 155.866 91.5254 155.653 91.3224 155.639C91.1071 155.641 90.8981 155.713 90.7267 155.846L90.6219 155.919V155.793C90.6299 155.715 90.6178 155.637 90.5868 155.565C90.5558 155.494 90.507 155.432 90.4452 155.386C90.3235 155.3 90.1805 155.252 90.0328 155.246C89.7856 155.225 89.5368 155.252 89.2995 155.326C89.0893 155.396 88.8873 155.49 88.6973 155.606C88.6973 155.606 88.7365 155.559 88.8347 155.493C88.9724 155.397 89.1221 155.321 89.2799 155.266C89.5258 155.179 89.7858 155.14 90.0459 155.153C90.2094 155.161 90.3678 155.214 90.5041 155.306C90.5822 155.363 90.6441 155.439 90.6832 155.528C90.7224 155.618 90.7374 155.716 90.7267 155.813L90.6416 155.759C90.8287 155.61 91.0588 155.528 91.2962 155.526C91.4313 155.536 91.5576 155.598 91.6497 155.699C91.7013 155.753 91.7387 155.819 91.7581 155.891C91.7776 155.964 91.7786 156.04 91.761 156.113L91.6759 156.039C91.8131 155.954 91.9762 155.923 92.1342 155.953C92.2439 155.967 92.3482 156.009 92.4375 156.076C92.5268 156.142 92.5981 156.231 92.6448 156.333C92.69 156.428 92.7136 156.533 92.7136 156.639C92.7136 156.745 92.69 156.85 92.6448 156.946L92.5531 156.886C92.6098 156.823 92.684 156.779 92.7659 156.76C92.8478 156.741 92.9334 156.747 93.0114 156.779C93.0856 156.802 93.1534 156.842 93.2092 156.896C93.265 156.951 93.3071 157.018 93.3322 157.093C93.3635 157.222 93.3644 157.357 93.3348 157.487C93.3052 157.616 93.246 157.737 93.162 157.839V157.766C93.2736 157.773 93.3816 157.809 93.4756 157.871C93.5696 157.933 93.6464 158.018 93.6988 158.119C93.7388 158.193 93.7635 158.274 93.7714 158.358C93.7793 158.441 93.7701 158.526 93.7446 158.606C93.7165 158.708 93.6649 158.802 93.594 158.879C93.5417 158.926 93.5089 158.946 93.5089 158.939Z"
                  fill="#455A64"
                />
                <path
                  d="M99.7548 158.946C99.7475 158.885 99.7281 158.827 99.6977 158.774C99.6673 158.721 99.6266 158.675 99.578 158.639C99.4636 158.552 99.3211 158.511 99.1787 158.526C98.9907 158.557 98.8092 158.62 98.6419 158.713H98.583V158.639C98.5715 158.523 98.5209 158.414 98.4398 158.332C98.3586 158.249 98.252 158.198 98.1378 158.186C97.8537 158.168 97.5708 158.238 97.326 158.386L96.9791 158.559L97.2671 158.299C97.3008 158.255 97.3255 158.204 97.3398 158.149C97.3541 158.095 97.3577 158.038 97.3504 157.983C97.3431 157.927 97.3251 157.873 97.2973 157.824C97.2695 157.776 97.2326 157.733 97.1886 157.699C97.0805 157.63 96.9597 157.584 96.8335 157.565C96.7074 157.545 96.5787 157.553 96.4554 157.586H96.4161L96.1935 157.633L96.3703 157.486C96.418 157.437 96.4538 157.376 96.4749 157.311C96.4959 157.245 96.5015 157.175 96.4914 157.106C96.4812 157.037 96.4555 156.972 96.4163 156.915C96.3771 156.859 96.3255 156.812 96.2655 156.779C96.143 156.722 96.0063 156.705 95.8739 156.73C95.7415 156.755 95.62 156.821 95.5258 156.919L95.3097 157.126L95.4407 156.853C95.5178 156.688 95.5506 156.506 95.5356 156.324C95.5207 156.143 95.4585 155.968 95.3555 155.819C95.2712 155.705 95.1627 155.612 95.038 155.546C94.9134 155.48 94.7758 155.444 94.6354 155.439C94.4489 155.425 94.2623 155.467 94.0986 155.559C93.9808 155.619 93.9284 155.666 93.9219 155.659V155.619C93.9588 155.582 94.0007 155.551 94.0462 155.526C94.2123 155.419 94.4063 155.366 94.6027 155.373C94.7555 155.372 94.9065 155.407 95.0439 155.475C95.1812 155.543 95.3013 155.643 95.3948 155.766C95.5119 155.927 95.584 156.118 95.6036 156.317C95.6232 156.517 95.5895 156.718 95.5061 156.899L95.421 156.839C95.5321 156.726 95.6742 156.651 95.8286 156.622C95.9829 156.593 96.1422 156.613 96.2852 156.679C96.3607 156.719 96.4256 156.777 96.4746 156.848C96.5236 156.918 96.5552 157 96.5667 157.086C96.5873 157.175 96.5835 157.268 96.5558 157.355C96.5281 157.442 96.4775 157.52 96.4095 157.579L96.3637 157.473H96.403C96.5419 157.434 96.6873 157.426 96.8294 157.449C96.9716 157.472 97.1073 157.526 97.2278 157.606C97.3367 157.702 97.4087 157.834 97.4308 157.979C97.4446 158.051 97.4411 158.124 97.4206 158.194C97.4001 158.264 97.3631 158.327 97.313 158.379L97.2475 158.286C97.5121 158.133 97.8149 158.064 98.1182 158.086C98.2551 158.103 98.3819 158.168 98.4764 158.27C98.5709 158.373 98.6272 158.506 98.6353 158.646L98.5764 158.606C98.7545 158.514 98.9474 158.455 99.146 158.433C99.3002 158.422 99.4525 158.472 99.5715 158.573C99.6485 158.634 99.7017 158.722 99.7221 158.819C99.7471 158.856 99.7587 158.901 99.7548 158.946Z"
                  fill="#455A64"
                />
                <path
                  d="M95.9983 153.219C95.9983 153.219 95.9524 153.259 95.8477 153.286C95.7022 153.325 95.5529 153.348 95.4025 153.353C95.1751 153.347 94.9499 153.4 94.7479 153.506C94.6942 153.539 94.6483 153.584 94.6132 153.637C94.5782 153.69 94.5549 153.75 94.5449 153.813C94.532 153.878 94.5396 153.946 94.5666 154.007C94.5936 154.068 94.6387 154.119 94.6955 154.153L94.6235 154.213C94.5842 154.066 94.3944 153.986 94.2176 153.899C94.041 153.805 93.8511 153.74 93.6546 153.706C93.5595 153.691 93.4622 153.695 93.3687 153.719C93.2753 153.743 93.1877 153.786 93.1113 153.846C93.0394 153.895 92.9823 153.963 92.9465 154.043C92.9106 154.123 92.8974 154.212 92.9083 154.299V154.446L92.7905 154.359C92.564 154.188 92.2873 154.098 92.0049 154.106C91.7778 154.103 91.5534 154.156 91.3503 154.259C91.175 154.355 91.0159 154.479 90.8789 154.626C90.9035 154.576 90.9343 154.529 90.9706 154.486C91.0672 154.369 91.185 154.272 91.3175 154.199C91.5176 154.084 91.7423 154.02 91.9722 154.013C92.2754 154 92.5744 154.089 92.8232 154.266L92.7381 154.326C92.7191 154.218 92.7312 154.106 92.773 154.004C92.8148 153.902 92.8845 153.815 92.9738 153.753C93.0657 153.681 93.1715 153.629 93.2844 153.602C93.3972 153.574 93.5144 153.571 93.6284 153.593C93.8366 153.625 94.038 153.693 94.2242 153.793C94.317 153.835 94.4067 153.884 94.4926 153.939C94.5397 153.965 94.5813 154 94.615 154.043C94.6487 154.085 94.6738 154.134 94.689 154.186V154.299L94.5842 154.253C94.5066 154.21 94.4448 154.143 94.4081 154.061C94.3715 153.979 94.3621 153.887 94.3813 153.799C94.3928 153.721 94.4218 153.647 94.4661 153.582C94.5104 153.518 94.5687 153.464 94.6366 153.426C94.8506 153.321 95.0869 153.273 95.324 153.286C95.4699 153.3 95.6167 153.3 95.7626 153.286L95.9983 153.219Z"
                  fill="#455A64"
                />
                <path
                  d="M90.0535 151.453C89.9512 151.468 89.8504 151.493 89.7524 151.526C89.646 151.575 89.5519 151.648 89.4774 151.74C89.3827 151.856 89.3296 152.002 89.3269 152.153V152.213H89.2679C89.1787 152.203 89.089 152.226 89.0147 152.277C88.9404 152.328 88.8863 152.405 88.8621 152.493C88.8122 152.714 88.8236 152.945 88.8948 153.159L88.9537 153.386L88.7966 153.213C88.7427 153.16 88.6774 153.12 88.6058 153.097C88.5342 153.074 88.4584 153.068 88.3842 153.079C88.3131 153.086 88.244 153.108 88.1811 153.142C88.1181 153.176 88.0625 153.223 88.0176 153.279C87.9395 153.38 87.8834 153.496 87.8529 153.62C87.8224 153.744 87.8183 153.874 87.8408 153.999C87.8733 154.172 87.933 154.339 88.0176 154.493C88.0537 154.549 88.0823 154.609 88.1027 154.673C88.1027 154.673 88.0503 154.626 87.9783 154.519C87.8723 154.368 87.7987 154.195 87.7623 154.013C87.7295 153.874 87.7278 153.729 87.7572 153.59C87.7867 153.45 87.8466 153.319 87.9325 153.206C87.9881 153.135 88.0574 153.076 88.1361 153.034C88.2148 152.991 88.3012 152.965 88.3901 152.958C88.479 152.95 88.5685 152.961 88.653 152.99C88.7375 153.019 88.8154 153.065 88.8817 153.126L88.9144 153.166L88.8097 153.213C88.7409 152.978 88.7409 152.728 88.8097 152.493C88.8455 152.381 88.919 152.285 89.0172 152.223C89.1154 152.161 89.232 152.136 89.3465 152.153L89.281 152.206C89.288 152.033 89.3553 151.867 89.4709 151.74C89.5555 151.642 89.6639 151.568 89.7851 151.526C89.8624 151.496 89.9448 151.483 90.0273 151.486L90.0535 151.453Z"
                  fill="#455A64"
                />
                <path
                  d="M85.2882 155.486C85.2366 155.499 85.1826 155.499 85.1311 155.486C84.9928 155.441 84.8656 155.366 84.7579 155.266C84.5987 155.112 84.4891 154.912 84.4437 154.693C84.4437 154.573 84.4437 154.446 84.339 154.38C84.2342 154.313 84.1229 154.26 84.0247 154.133C83.9345 154.012 83.8924 153.861 83.907 153.71C83.9216 153.56 83.9917 153.42 84.1033 153.32V153.406C83.8672 153.234 83.6761 153.005 83.5468 152.74C83.492 152.643 83.4543 152.537 83.4355 152.426C83.4981 152.518 83.555 152.614 83.6058 152.713C83.7483 152.95 83.9378 153.154 84.1622 153.313L84.2211 153.353L84.1688 153.4C84.077 153.482 84.0198 153.597 84.0089 153.721C83.9979 153.845 84.034 153.968 84.1098 154.066C84.1753 154.16 84.3062 154.193 84.4175 154.3C84.4986 154.409 84.5443 154.542 84.5484 154.679C84.5796 154.881 84.6711 155.067 84.8103 155.213C84.9513 155.334 85.1135 155.426 85.2882 155.486V155.486Z"
                  fill="#455A64"
                />
                <path
                  d="M83.88 156.659H83.7883C83.6948 156.67 83.6004 156.67 83.5069 156.659C83.1715 156.621 82.8571 156.473 82.61 156.239H82.682C82.606 156.351 82.509 156.446 82.3967 156.52C82.2843 156.593 82.1588 156.643 82.0274 156.666C81.8826 156.696 81.7334 156.696 81.5887 156.666C81.4298 156.63 81.2898 156.535 81.1959 156.399C81.1679 156.347 81.146 156.291 81.1305 156.233C81.1162 156.191 81.0885 156.156 81.0519 156.133C80.9656 156.081 80.8699 156.047 80.7704 156.033C80.6621 156.022 80.5572 155.988 80.4627 155.933C80.4106 155.908 80.3657 155.869 80.3325 155.822C80.2992 155.774 80.2787 155.718 80.2729 155.659L80.3514 155.706C80.1315 155.814 79.8812 155.84 79.6444 155.779C79.4621 155.739 79.293 155.652 79.1534 155.526C79.0629 155.447 78.9893 155.349 78.9374 155.239C78.9047 155.159 78.8916 155.119 78.8981 155.113C78.974 155.252 79.0738 155.376 79.1927 155.479C79.3314 155.587 79.4928 155.66 79.6641 155.693C79.8853 155.747 80.1185 155.716 80.3187 155.606L80.3973 155.566V155.653C80.4038 155.693 80.4197 155.731 80.4437 155.763C80.4676 155.796 80.4988 155.822 80.5347 155.839C80.6227 155.878 80.7151 155.905 80.8097 155.919C80.9255 155.933 81.0372 155.971 81.137 156.033C81.1905 156.072 81.2333 156.125 81.2614 156.186C81.2749 156.241 81.2924 156.294 81.3138 156.346C81.3935 156.45 81.5074 156.521 81.6346 156.546C81.7639 156.576 81.8981 156.576 82.0274 156.546C82.2645 156.506 82.4763 156.372 82.6165 156.173L82.6493 156.126L82.6885 156.166C82.9177 156.395 83.2102 156.546 83.5265 156.599C83.7425 156.659 83.88 156.646 83.88 156.659Z"
                  fill="#455A64"
                />
                <path
                  d="M75.0155 161.099V161.059C75.0127 161.019 75.0127 160.979 75.0155 160.939C74.987 160.78 74.987 160.618 75.0155 160.459C75.0731 160.227 75.1589 160.003 75.2708 159.793C75.3363 159.653 75.4129 159.519 75.5 159.393C75.5515 159.323 75.616 159.264 75.6898 159.219C75.7328 159.195 75.7813 159.182 75.8306 159.182C75.8798 159.182 75.9283 159.195 75.9713 159.219L75.9058 159.273C75.8774 159.119 75.8944 158.961 75.9545 158.818C76.0147 158.674 76.1154 158.552 76.2438 158.467C76.3722 158.382 76.5225 158.338 76.6756 158.34C76.8288 158.342 76.9778 158.391 77.1039 158.479L77.0187 158.533C77.0107 158.447 77.0231 158.361 77.0548 158.281C77.0865 158.202 77.1366 158.131 77.2009 158.075C77.2652 158.02 77.3417 157.981 77.424 157.962C77.5062 157.943 77.5918 157.944 77.6734 157.966C77.7665 157.993 77.8504 158.046 77.9156 158.119L77.8174 158.173C77.8092 158.119 77.8139 158.065 77.831 158.014C77.8481 157.963 77.8771 157.916 77.9156 157.879C77.9847 157.812 78.0708 157.766 78.1644 157.746C78.339 157.732 78.5142 157.762 78.675 157.833H78.603C78.7074 157.643 78.878 157.5 79.0809 157.433C79.2637 157.368 79.4598 157.352 79.6504 157.386C79.9721 157.454 80.2799 157.578 80.5604 157.753L80.5015 157.813C80.4854 157.781 80.477 157.745 80.477 157.709C80.477 157.673 80.4854 157.638 80.5015 157.606C80.5354 157.552 80.5829 157.508 80.639 157.479C80.7328 157.426 80.8394 157.401 80.9466 157.406C81.1076 157.416 81.2663 157.45 81.418 157.506C81.5131 157.543 81.6051 157.587 81.6929 157.639L81.778 157.706C81.778 157.706 81.6537 157.633 81.4049 157.553C81.2542 157.505 81.0979 157.478 80.9401 157.473C80.8482 157.475 80.7583 157.5 80.6782 157.546C80.5931 157.593 80.5211 157.686 80.5735 157.773L80.6455 157.893L80.5146 157.826C80.2367 157.667 79.9364 157.552 79.6242 157.486C79.4502 157.458 79.272 157.476 79.1071 157.539C78.9324 157.596 78.7867 157.721 78.7012 157.886V157.933H78.6554C78.5139 157.867 78.3585 157.84 78.2037 157.853C78.0662 157.853 77.9287 158.006 77.9483 158.139L77.9876 158.346L77.8502 158.186C77.7962 158.132 77.7314 158.091 77.6603 158.066C77.5956 158.045 77.5266 158.041 77.4601 158.055C77.3935 158.069 77.3317 158.1 77.2806 158.146C77.2307 158.19 77.1917 158.246 77.1667 158.309C77.1417 158.371 77.1314 158.439 77.1366 158.506V158.633L77.0318 158.559C76.9256 158.478 76.7976 158.432 76.6649 158.426C76.5322 158.421 76.401 158.457 76.2888 158.529C76.1766 158.601 76.0886 158.707 76.0366 158.831C75.9845 158.956 75.9709 159.093 75.9975 159.226V159.326L75.9124 159.286C75.7815 159.219 75.6374 159.339 75.5523 159.453C75.4652 159.57 75.3885 159.695 75.3232 159.826C75.2066 160.036 75.1164 160.26 75.0548 160.492C75.0044 160.69 74.9911 160.896 75.0155 161.099V161.099Z"
                  fill="#455A64"
                />
                <path
                  d="M75.959 164.519C75.959 164.519 75.959 164.519 75.8935 164.452C75.8369 164.38 75.7844 164.304 75.7364 164.226C75.6563 164.098 75.6111 163.951 75.6055 163.799C75.607 163.702 75.6294 163.606 75.6709 163.519C75.7211 163.417 75.8078 163.338 75.9131 163.299V163.366C75.8425 163.279 75.7994 163.173 75.7898 163.06C75.7801 162.948 75.8043 162.836 75.859 162.738C75.9138 162.64 75.9966 162.562 76.0964 162.513C76.1961 162.464 76.308 162.448 76.4172 162.466L76.3714 162.552C76.3166 162.476 76.2871 162.384 76.2871 162.289C76.2871 162.195 76.3166 162.102 76.3714 162.026C76.4263 161.947 76.4975 161.88 76.58 161.832C76.6625 161.784 76.7544 161.754 76.8493 161.746C76.941 161.746 77.0326 161.746 77.1046 161.746C77.1408 161.734 77.1735 161.713 77.1997 161.685C77.226 161.657 77.2451 161.623 77.2552 161.586C77.2881 161.492 77.3321 161.402 77.3861 161.319C77.4542 161.234 77.5453 161.172 77.648 161.139C77.8507 161.098 78.0567 161.076 78.2633 161.073C78.3539 161.077 78.4442 161.062 78.5288 161.028C78.6133 160.995 78.6901 160.944 78.7543 160.879C78.8044 160.802 78.8503 160.722 78.8918 160.639C78.9492 160.554 79.0254 160.483 79.1144 160.433C79.1988 160.39 79.2918 160.367 79.3861 160.367C79.4804 160.367 79.5734 160.39 79.6577 160.433L79.5988 160.513C79.5428 160.432 79.5126 160.335 79.5126 160.236C79.5126 160.137 79.5428 160.04 79.5988 159.959C79.7001 159.821 79.8503 159.727 80.0178 159.699C80.2729 159.661 80.5328 159.673 80.7837 159.733C80.945 159.766 81.1028 159.815 81.2551 159.879L81.4122 159.959C81.1973 159.891 80.9787 159.835 80.7576 159.793C80.5129 159.749 80.2625 159.749 80.0178 159.793C79.8744 159.82 79.746 159.901 79.6577 160.019C79.6144 160.083 79.5911 160.158 79.5911 160.236C79.5911 160.313 79.6144 160.389 79.6577 160.453L79.7952 160.626L79.5988 160.533C79.5289 160.496 79.4515 160.477 79.373 160.477C79.2945 160.477 79.2171 160.496 79.1471 160.533C79.0737 160.57 79.0123 160.628 78.9704 160.699C78.927 160.788 78.8766 160.872 78.8198 160.953C78.7517 161.037 78.6606 161.1 78.5579 161.133C78.4596 161.162 78.3588 161.182 78.2568 161.193C78.0563 161.191 77.8563 161.213 77.6611 161.259C77.5794 161.276 77.5071 161.324 77.4581 161.393C77.4107 161.467 77.3733 161.548 77.3468 161.633C77.3288 161.686 77.2987 161.734 77.2588 161.774C77.219 161.813 77.1707 161.842 77.1177 161.859C77.0261 161.865 76.9343 161.865 76.8427 161.859C76.7642 161.863 76.6876 161.885 76.6185 161.923C76.5493 161.961 76.4895 162.014 76.4434 162.079C76.4028 162.138 76.3811 162.208 76.3811 162.279C76.3811 162.351 76.4028 162.421 76.4434 162.479L76.5482 162.592H76.3976C76.3026 162.577 76.2053 162.593 76.1196 162.637C76.0338 162.682 75.9639 162.752 75.9197 162.839C75.8835 162.918 75.8692 163.006 75.8784 163.093C75.8877 163.18 75.92 163.263 75.9721 163.332V163.379H75.9197C75.8394 163.415 75.7711 163.473 75.7233 163.548C75.6756 163.623 75.6505 163.71 75.6513 163.799C75.6515 163.942 75.6876 164.082 75.756 164.206C75.887 164.399 75.9655 164.519 75.959 164.519Z"
                  fill="#455A64"
                />
                <path
                  d="M75.5921 170.939C75.5552 170.944 75.5177 170.944 75.4808 170.939C75.3733 170.894 75.2754 170.828 75.1928 170.745C75.0648 170.616 74.982 170.447 74.9571 170.265C74.9327 170.027 74.9982 169.789 75.1404 169.599V169.665C74.9872 169.504 74.867 169.314 74.7869 169.105C74.7542 168.979 74.7542 168.845 74.7869 168.719C74.8047 168.651 74.8367 168.588 74.8808 168.534C74.9249 168.479 74.9799 168.436 75.0422 168.405V168.512C74.9379 168.454 74.8511 168.368 74.7911 168.264C74.7312 168.159 74.7003 168.04 74.7018 167.919C74.6965 167.78 74.7258 167.643 74.7869 167.519C74.8496 167.401 74.9485 167.307 75.0684 167.252C75.1797 167.192 75.2255 167.132 75.219 167.019C75.2111 166.899 75.2267 166.779 75.2648 166.665C75.3474 166.461 75.4832 166.284 75.6576 166.152L76.07 165.799C76.2599 165.621 76.4823 165.483 76.7246 165.392C76.7948 165.371 76.8675 165.36 76.9407 165.359H77.0127C76.9199 165.379 76.8281 165.403 76.7377 165.432C76.4962 165.53 76.2744 165.673 76.0831 165.852L75.6838 166.219C75.5255 166.341 75.4032 166.504 75.3302 166.692C75.2966 166.795 75.2833 166.904 75.291 167.012C75.2948 167.083 75.2764 167.153 75.2386 167.212C75.1983 167.267 75.147 167.312 75.088 167.345C74.9872 167.396 74.9038 167.477 74.8488 167.577C74.7939 167.677 74.77 167.791 74.7803 167.905C74.7809 168.005 74.8064 168.102 74.8545 168.189C74.9027 168.275 74.9718 168.347 75.0553 168.399L75.16 168.452L75.0553 168.505C74.9658 168.563 74.8982 168.65 74.8637 168.751C74.8292 168.853 74.8298 168.964 74.8654 169.065C74.9384 169.26 75.0473 169.439 75.1862 169.592V169.625C75.1176 169.709 75.0661 169.806 75.0346 169.91C75.0031 170.014 74.9923 170.124 75.0029 170.232C75.0215 170.401 75.0926 170.56 75.2059 170.685C75.3177 170.794 75.4487 170.88 75.5921 170.939V170.939Z"
                  fill="#455A64"
                />
                <path
                  d="M85.3455 160.519C85.221 160.508 85.1004 160.469 84.992 160.406C84.8634 160.351 84.7491 160.267 84.6582 160.159C84.5993 160.09 84.5549 160.01 84.5279 159.922C84.5009 159.835 84.4917 159.743 84.501 159.653C84.5081 159.609 84.5214 159.566 84.5403 159.526V159.606C84.4666 159.562 84.404 159.501 84.3574 159.428C84.3108 159.355 84.2815 159.272 84.2719 159.186C84.2524 159.122 84.2458 159.055 84.2526 158.988C84.2593 158.922 84.2793 158.858 84.3112 158.799C84.4225 158.599 84.5731 158.566 84.5731 158.579C84.4948 158.651 84.4304 158.737 84.3832 158.833C84.3433 158.938 84.3433 159.054 84.3832 159.159C84.405 159.223 84.4395 159.281 84.4846 159.331C84.5296 159.38 84.5843 159.419 84.6451 159.446H84.6974V159.506C84.6909 159.537 84.6909 159.568 84.6974 159.599C84.6893 159.674 84.6962 159.75 84.7176 159.822C84.7389 159.894 84.7744 159.961 84.8218 160.019C84.9029 160.116 85.0005 160.197 85.1099 160.259C85.2211 160.412 85.3586 160.466 85.3455 160.519Z"
                  fill="#455A64"
                />
                <path
                  d="M87.9452 158.973C88.0092 158.836 88.0253 158.68 87.991 158.533C87.9725 158.454 87.9353 158.382 87.8828 158.321C87.8303 158.261 87.7641 158.214 87.6898 158.186C87.5947 158.153 87.4922 158.149 87.3947 158.174C87.2972 158.199 87.2087 158.251 87.1399 158.326L87.0745 158.399L87.0417 158.299C87.0111 158.179 86.9577 158.066 86.8846 157.966C86.8497 157.914 86.8041 157.87 86.751 157.838C86.6979 157.806 86.6385 157.786 86.5769 157.779C86.3871 157.779 86.1907 157.959 86.2562 158.113L86.1514 158.146C86.1027 157.917 85.969 157.717 85.7783 157.586C85.6287 157.48 85.4496 157.426 85.2676 157.433C85.0997 157.448 84.9358 157.493 84.7832 157.566C84.814 157.528 84.8518 157.496 84.8945 157.473C85.0081 157.41 85.1327 157.372 85.2611 157.359C85.4609 157.341 85.661 157.39 85.8306 157.499C85.9386 157.57 86.0317 157.662 86.1047 157.769C86.1778 157.877 86.2292 157.998 86.2562 158.126H86.1514C86.1305 158.065 86.1274 157.999 86.1425 157.936C86.1576 157.874 86.1902 157.817 86.2365 157.773C86.2807 157.727 86.3338 157.691 86.3924 157.666C86.4509 157.642 86.5138 157.631 86.5769 157.633C86.6557 157.638 86.7321 157.662 86.8003 157.702C86.8684 157.743 86.9264 157.799 86.9697 157.866C87.0551 157.979 87.1175 158.108 87.153 158.246H87.0548C87.1384 158.16 87.2446 158.1 87.3608 158.074C87.477 158.048 87.5981 158.057 87.7095 158.099C87.797 158.133 87.8743 158.19 87.9339 158.264C87.9936 158.337 88.0335 158.425 88.0499 158.519C88.078 158.638 88.0641 158.763 88.0106 158.873C87.9844 158.946 87.9517 158.979 87.9452 158.973Z"
                  fill="#455A64"
                />
                <path
                  d="M81.3797 166.852C81.3077 166.819 78.5123 165.952 78.5712 168.852C78.6301 171.752 81.491 171.105 81.491 171.019C81.491 170.932 81.3797 166.852 81.3797 166.852Z"
                  fill="#E6866E"
                />
                <path
                  d="M80.601 169.946C80.601 169.946 80.5486 169.986 80.4635 170.026C80.3437 170.074 80.2101 170.074 80.0903 170.026C79.9045 169.909 79.7521 169.745 79.6486 169.55C79.5452 169.354 79.4943 169.134 79.5012 168.912C79.49 168.662 79.5324 168.411 79.6255 168.179C79.6505 168.088 79.697 168.005 79.7609 167.936C79.8248 167.867 79.9042 167.816 79.9921 167.786C80.0488 167.769 80.1095 167.773 80.1635 167.797C80.2175 167.822 80.2612 167.865 80.2867 167.919C80.3326 167.999 80.2867 168.059 80.326 168.059C80.3653 168.059 80.3849 168.012 80.3653 167.892C80.3468 167.821 80.3053 167.757 80.2475 167.712C80.2084 167.683 80.1639 167.662 80.1167 167.65C80.0694 167.639 80.0204 167.637 79.9725 167.646C79.8548 167.671 79.7454 167.726 79.6548 167.807C79.5642 167.887 79.4955 167.99 79.4553 168.106C79.3413 168.361 79.2875 168.639 79.2982 168.919C79.2907 169.179 79.3579 169.435 79.4917 169.657C79.6254 169.878 79.8199 170.055 80.0511 170.166C80.1291 170.185 80.2104 170.188 80.2894 170.173C80.3685 170.158 80.4434 170.126 80.5093 170.079C80.5944 170.019 80.6075 169.952 80.601 169.946Z"
                  fill="#A3594E"
                />
                <path
                  d="M70.375 185.278L73.5959 193.344L70.5518 215.077L69.105 225.676H63.3965L64.1624 213.723L66.002 197.498L70.375 185.278Z"
                  fill="#E6866E"
                />
                <path
                  d="M104.005 188.171L100.352 193.344L102.538 214.544L104.554 225.676H110.322L108.921 213.19L107.945 197.498L104.005 188.171Z"
                  fill="#E6866E"
                />
                <path
                  d="M64.1621 203.184C64.1621 203.184 65.203 196.298 65.8838 193.851C66.5647 191.404 68.09 186.125 69.9099 184.425C71.7298 182.725 72.9279 182.892 76.188 181.818C78.6364 181.012 80.62 180.285 80.62 180.285L81.3728 179.252C83.4219 184.845 90.3546 183.525 91.677 179.252L92.2858 180.238C92.2858 180.238 102.531 183.685 104.174 186.238C105.817 188.791 109.575 203.391 109.575 203.391L100.148 204.057L100.331 199.097C100.331 199.097 99.0222 205.137 99.4804 209.884C99.8732 214.07 100.79 225.71 100.79 225.71L72.8886 225.616C72.8886 225.616 73.6807 211.31 73.7854 208.59C73.8575 206.59 73.2683 198.671 73.2683 198.671L72.6595 204.251L64.1621 203.184Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M83.0425 183.418C82.8041 183.559 82.5545 183.68 82.2962 183.778L80.2406 184.725C79.383 185.131 78.329 185.591 77.2358 186.185C76.0514 186.828 75.0399 187.758 74.2899 188.891C73.5918 190.066 73.1622 191.385 73.0329 192.751C72.9528 193.862 72.9791 194.978 73.1115 196.084C73.1966 196.991 73.2686 197.758 73.3275 198.364C73.3635 198.645 73.3635 198.93 73.3275 199.211C73.2519 198.94 73.1993 198.664 73.1704 198.384C73.0853 197.851 72.9675 197.051 72.8496 196.111C72.6745 194.976 72.6218 193.825 72.6925 192.678C72.8192 191.259 73.2674 189.89 74.0018 188.678C74.7806 187.494 75.8415 186.531 77.0852 185.878C78.2243 185.285 79.2652 184.858 80.149 184.471C81.0327 184.085 81.7463 183.805 82.2504 183.625C82.5039 183.519 82.7704 183.45 83.0425 183.418V183.418Z"
                  fill="#240155"
                />
                <path
                  d="M100.331 199.037C100.298 198.745 100.298 198.45 100.331 198.157C100.331 197.597 100.416 196.784 100.514 195.791C100.645 194.634 100.673 193.467 100.599 192.304C100.535 190.892 100.097 189.523 99.3291 188.344C98.4641 187.226 97.3392 186.344 96.0558 185.778C94.884 185.225 93.7973 184.771 92.8873 184.391L90.727 183.505C90.4553 183.419 90.1922 183.308 89.9414 183.171C90.2258 183.205 90.5051 183.275 90.7728 183.378C91.3031 183.545 92.0821 183.811 92.979 184.158C93.8758 184.505 94.9953 184.945 96.1933 185.491C97.5285 186.068 98.6945 186.987 99.5778 188.158C100.386 189.384 100.839 190.816 100.887 192.291C100.949 193.474 100.894 194.659 100.723 195.831C100.599 196.824 100.494 197.624 100.435 198.184C100.426 198.471 100.391 198.757 100.331 199.037V199.037Z"
                  fill="#240155"
                />
                <path
                  d="M92.2848 180.192C91.9979 181.002 91.5531 181.745 90.9771 182.376C90.4011 183.008 89.7058 183.514 88.9329 183.864C88.16 184.215 87.3255 184.403 86.4795 184.416C85.6336 184.43 84.7936 184.27 84.01 183.945C83.2229 183.653 82.5118 183.181 81.9309 182.567C81.35 181.952 80.9147 181.21 80.6582 180.398L81.3718 179.218C81.725 180.349 82.4382 181.327 83.3985 181.998C84.3589 182.669 85.5116 182.996 86.6744 182.925C90.6416 182.758 91.545 179.145 91.6759 179.218L92.2848 180.205"
                  fill="#240155"
                />
                <path
                  d="M81.1363 181.185C80.7918 181.345 80.4349 181.477 80.0693 181.578L77.1168 182.518L75.107 183.185C74.3738 183.418 73.5882 183.651 72.7961 183.985C71.9701 184.314 71.2094 184.793 70.5507 185.398C69.874 186.08 69.3357 186.891 68.9664 187.785C68.5671 188.698 68.2725 189.638 67.9779 190.544C67.6833 191.451 67.4214 192.338 67.1792 193.211C66.6948 194.898 66.2889 196.424 65.955 197.711C65.6212 198.997 65.3789 199.991 65.176 200.764C65.1039 201.143 65.001 201.515 64.8683 201.877C64.8538 201.778 64.8538 201.677 64.8683 201.577C64.901 201.384 64.9534 201.097 65.0254 200.737C65.1694 200.004 65.392 198.951 65.6801 197.651C65.9681 196.351 66.3347 194.818 66.8388 193.124C67.0745 192.271 67.3298 191.384 67.6178 190.458C67.8978 189.503 68.2322 188.566 68.6194 187.651C68.9716 186.738 69.5129 185.913 70.2065 185.232C70.9002 184.55 71.7298 184.03 72.639 183.705C73.406 183.402 74.1884 183.142 74.9826 182.925L77.0382 182.325L80.0234 181.478C80.3868 181.353 80.7588 181.255 81.1363 181.185Z"
                  fill="#240155"
                />
                <path
                  d="M108.685 201.491C108.509 201.161 108.365 200.815 108.253 200.457C107.978 199.717 107.598 198.751 107.186 197.577C106.295 195.158 105.137 191.751 103.775 188.065C103.598 187.626 103.365 187.214 103.081 186.838C102.788 186.488 102.454 186.177 102.086 185.911C101.364 185.419 100.611 184.974 99.8341 184.578C98.3546 183.778 96.9733 183.145 95.808 182.625L93.0257 181.438C92.6766 181.311 92.3392 181.153 92.0176 180.965C92.3775 181.051 92.73 181.167 93.0716 181.311C93.7262 181.551 94.7147 181.918 95.8996 182.405C97.0846 182.891 98.479 183.505 99.9847 184.291C100.78 184.696 101.548 185.155 102.282 185.665C102.679 185.944 103.038 186.276 103.35 186.651C103.653 187.048 103.902 187.485 104.089 187.951C105.464 191.678 106.577 195.064 107.415 197.524L108.377 200.437C108.504 200.781 108.606 201.133 108.685 201.491V201.491Z"
                  fill="#240155"
                />
                <path
                  d="M91.2848 202.384H89.8969V204.211H87.3176V202.384H82.375V200.631L86.5713 194.684H89.3077L85.5042 200.251H87.3962V198.631H89.8969V200.251H91.2848V202.384Z"
                  fill="#240155"
                />
                <path
                  d="M64.1621 203.144L64.4632 201.244L72.8689 202.211L72.6529 204.19L64.1621 203.144Z"
                  fill="#240155"
                />
                <path
                  d="M100.148 203.997L100.351 202.444L109.104 201.564L109.582 203.357L100.148 203.997Z"
                  fill="#240155"
                />
                <path
                  d="M97.3984 190.878H94.3281V192.951H97.3984V190.878Z"
                  fill="white"
                />
                <path
                  d="M97.5099 193.611C96.4483 193.842 95.3507 193.842 94.2891 193.611C95.3507 193.38 96.4483 193.38 97.5099 193.611V193.611Z"
                  fill="white"
                />
                <path
                  d="M78.976 192.231C78.976 192.495 78.8992 192.752 78.7554 192.972C78.6115 193.191 78.407 193.362 78.1678 193.463C77.9285 193.564 77.6653 193.59 77.4113 193.539C77.1573 193.487 76.924 193.36 76.7409 193.174C76.5578 192.987 76.4331 192.75 76.3826 192.491C76.3321 192.232 76.358 191.964 76.4571 191.721C76.5562 191.477 76.724 191.269 76.9393 191.122C77.1546 190.976 77.4078 190.898 77.6667 190.898C78.014 190.898 78.347 191.038 78.5925 191.288C78.8381 191.538 78.976 191.877 78.976 192.231Z"
                  fill="white"
                />
                <path
                  d="M113.869 225.676C113.869 225.77 101.771 225.85 86.8585 225.85C71.9456 225.85 59.8477 225.77 59.8477 225.676C59.8477 225.583 71.939 225.503 86.8585 225.503C101.778 225.503 113.869 225.576 113.869 225.676Z"
                  fill="#263238"
                />
                <g opacity="0.2">
                  <path
                    d="M106.596 232.023C106.596 233.263 96.7244 234.276 84.5479 234.276C72.3714 234.276 62.5059 233.263 62.5059 232.023C62.5059 230.783 72.3714 229.77 84.5479 229.77C96.7244 229.77 106.596 230.776 106.596 232.023Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* <!-- DÉCORATION --> */}
          <div className="absolute bg-[#6E4BEC] opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>

      {/* <!-- recent posts --> */}

      {/* <!-- recent posts --> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto sm:px-10 lg:px-20"
      >
        {/* <!-- recent posts --> */}
        <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-3xl">Latest on Scout</h2>
          <button
            onClick={goToScout}
            className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
          >
            View all
          </button>
        </div>
        <div className="block space-x-0 flex flex-col md:flex-row lg:space-x-6">
          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYCFWlY5LgkkD2QAkQ6RIXHuYDJpu5RTXFg&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p className="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStohCvtIt7EAC57otkuzuh2kvFNkEuiUa-1g&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p className="text-gray-700 mt-2 ">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbPzQlLjiwL1j51gAhRYFr3BGkrALrqVF-Q&usqp=CAU"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-base lg:text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p className="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance.
              </p>

              <a
                href="#"
                className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>
        </div>
        {/* <!-- end recent posts --> */}
      </motion.div>
    </GuestLayout>
  );
};

export default Home;
