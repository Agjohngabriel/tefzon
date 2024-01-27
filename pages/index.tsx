import type { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";
import SlashScreen from "../components/SlashScreen";
import { motion } from "framer-motion";


interface Fixtures {
  time: any;
  scores: any;
  round_id: number;
  localTeam: string;
  visitorTeam: string;
}

const Home: NextPage = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     setIsLoading(true);
  //     const res = await axios.get(`${process.env.BACKEND_URL}/get-fixtures`);

  //     const response = await res.data;
  //     setIsLoading(false);
  //     return response;
  //   };

  //   const getFixtures = async () => {
  //     const FavouritesFromApi = await fetchAll();
  //     console.log(FavouritesFromApi);
  //     setFixtures(FavouritesFromApi);
  //   };

  //   getFixtures();
  // }, []);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // const fetchAll = async () => {
    //   // setIsLoading(true);
    //   const news = await axios.get(
    //     `${process.env.SPORTS_URL}/news/fixtures?api_token=${process.env.SPORTS_APIKEY}`
    //   );
    //   const response = await news.data;
    //   // for fixtures
    //   // const fixture = await axios.get(
    //   //   `${process.env.SPORTS_URL}/news/fixtures?api_token=${process.env.SPORTS_APIKEY}`
    //   // );
    //   // const fixts = await fixture.data;
    //   setIsLoading(false);
    //   console.log(response);
    //   // console.log(fixts);
    // };
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
    words: ["WITH PLEASURE"],
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
      <div className="bg-[#E4ECFB]/20  py-2 md:py-10 lg:py-0  mx-auto ">
        <div className="container z-0 md:flex  px-10 md:px-16 lg:px-24 h-3/4 flex flex-col text-center md:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <div className="mt-10 md:mt-14 lg:mt-20 mb-12 lg:w-3/5">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight tracking-tighter text-[#240155] font-oswald animate-fade-in-up">
              FANTASY SOCCER TO PLAY <br /> <span>{text}</span>
              <Cursor cursorColor="bg-primary-200" />
            </h2>
            <p className="text-[#94A3B8] font-inter md:w-[28rem] text-1xl animate-fade-in-down">
              Listen to the songs at tip of your finger, feel the vibes and
              dance. Winning at fantasy football just got easier and better.
            </p>
            <div className="sm:flex gap-x-3  mt-5 md:mt-10 font-inter">
              <button
                onClick={goToLogin}
                type="button"
                className="bg-white border border-[#795DE0] font-semibold flex items-center py-2 ml-4 text-[#795DE0] rounded md:px-8 sm:ml-0 sm:px-6 focus:outline-none "
              >
                Log in
              </button>
              <Button
                Onclick={goToRegister}
                title="Register"
                bgcolor="bg-primary-200"
                color="text-white"
                opacity="opacity-100"
                width="md:w-36"
              />
            </div>
          </div>
          <div className="lg:mt-20 lg:w-1/2">
            <div className="mt-3 ">
              <img
                src="/img/soccer 3 1.png"
                alt="soccer"
                className="relative  animate-up-down"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section */}
      <div className="bg-[#E4ECFB]/20  py-2 my-20 md:py-10 sm:px-10 lg:px-20 mx-auto font-inter">
        <div className="grid grid-cols-12 gap-x-10 mt-3 lg:mt-5">
          <div className="col-span-4">
            <img src="../img/icon1.svg" className="py-2" alt="" />
            <h1 className="text-sm font-bold  lg:text-base">
              Select players from different leagues
            </h1>
            <p className=" py-2  text-xs text-[#94A3B8] ">
              Our app allows managers to select players from different leagues.
              Creating their dream team and competing against others. With real
              time updates and a user-friendly interface.
            </p>
          </div>
          <div className="col-span-4">
            <img src="../img/icon2.svg" alt="" />
            <h1 className="text-sm font-bold  lg:text-base">
              In - app wallet for deposits and Withdrawals
            </h1>
            <p className=" py-2  text-xs text-[#94A3B8] ">
              Easily deposit and withdraw funds directly within the app, making
              it convenient to manage your winnings. With secure transactions
              and real time balance updates, our wallet system ensures a
              seamless experience for all users.
            </p>
          </div>
          <div className="col-span-4">
            <img src="../img/icon3.svg" alt="" />
            <h1 className="text-sm font-bold  lg:text-base">
              Create a league and invite friends to compete
            </h1>
            <p className=" py-2  text-xs text-[#94A3B8] ">
              Create your own league and invite friends to compete on our
              fantasy app! With just a few taps, you can st up a custome league,
              select the winning system, and send out invities to your friends.
              Our app makes it easy to bring your friends together for a fun and
              competitive fantasy sports experience.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- recent posts --> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto sm:px-10 lg:px-20"
      >
        {/* <!-- recent posts --> */}
        <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold font-oswald text-[#240155] text-3xl">
            Latest news
          </h2>
        </div>
        <div className="block space-x-0 flex flex-col md:flex-row lg:space-x-6 font-inter">
          <div className="rounded-xl w-full lg:w-1/2 lg:w-1/3 p-2 shadow-md">
            <img
              src="../img/new.png"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-sm lg:text-base text-gray-800">
                Liverpool star M. Salah on AFCON Duties
              </h2>
              <p className="text-[#94A3B8] text-sm animate-fade-in-down">
                FPL Gameweek 1 review: Salah stars amid Liverpool record, De
                Bruyne and Haaland injury latest.
              </p>
              <button className="text-[#795DE0] text-sm">Read more</button>
            </div>
          </div>
          <div className="rounded-xl w-full lg:w-1/2 lg:w-1/3 p-2 shadow-md">
            <img
              src="../img/new.png"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-sm lg:text-base text-gray-800">
                Liverpool star M. Salah on AFCON Duties
              </h2>
              <p className="text-[#94A3B8] text-sm animate-fade-in-down">
                FPL Gameweek 1 review: Salah stars amid Liverpool record, De
                Bruyne and Haaland injury latest.
              </p>
              <button className="text-[#795DE0] text-sm">Read more</button>
            </div>
          </div>
          <div className="rounded-xl w-full lg:w-1/2 lg:w-1/3 p-2 shadow-md">
            <img
              src="../img/new.png"
              className="rounded w-full"
              alt="technology"
            />
            <div className="p-4 pl-0">
              <h2 className="font-bold text-sm lg:text-base text-gray-800">
                Liverpool star M. Salah on AFCON Duties
              </h2>
              <p className="text-[#94A3B8] text-sm animate-fade-in-down">
                FPL Gameweek 1 review: Salah stars amid Liverpool record, De
                Bruyne and Haaland injury latest.
              </p>
              <button className="text-[#795DE0] text-sm">Read more</button>
            </div>
          </div>
        </div>
        {/* <!-- end recent posts --> */}
      </motion.div>

      {/* Get app */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-2 lg:px-12"
      >
        <div
          className=" bg-cover rounded-lg  text-white p-4 lg:p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden"
          style={{
            backgroundImage: 'url("../img/CTA.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* <!-- LEFT PART --> */}
          <div className="flex flex-col lg:ml-10 max-w-sm lg:max-w-xl z-10">
            <div className="hero-text  pt-5">
              <h4 className="lg:text-5xl text-center md:text-left font-oswald font-regular text-[#795DE0] md:pb-2">
                For Fantasy Premier League Lovers & Managers
              </h4>

              <p className="text-center font-inter md:text-left text-[#3A3A3A] opacity-70 mb-3 md:pb-6 max-w-lg">
                Put your football skills and knowledge in to use by competing
                with other managers in a mini league and earn money as well.
              </p>

              <div className="get-app flex space-x-5 justify-center md:justify-start">
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
                  <div className="text-left">
                    <p
                      className="text-xs text-gray-600"
                      style={{ ["fontSize" as any]: "0.5rem" }}
                    >
                      Download on
                    </p>
                    <p className="text-xs font-semibold text-[#795DE0]">
                      Google Playstore
                    </p>
                  </div>
                </button>
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
                      style={{ ["fontSize" as any]: "0.5rem" }}
                    >
                      Download on
                    </p>
                    <p className=" text-xs font-semibold text-[#795DE0]">
                      Apple Store
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT PART --> */}
          <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10 animate-fade-in-down">
            <img src="../img/phone.png" className="w-[26rem]" alt="" />
          </div>
        </div>
      </motion.div>
    </GuestLayout>
  );
};

export default Home;
