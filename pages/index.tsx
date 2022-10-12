import type { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";
import SlashScreen from "../components/SlashScreen";

const Home: NextPage = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const goToRegister = () => {
    Router.push("/account/auth/signup");
  };
  const goToLogin = () => {
    Router.push("/account/auth/login");
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
      <div className="container px-5 md:px-12 py-2 md:py-10  mx-auto ">
        <div
          className="z-0 md:flex shadow-2xl rounded-2xl shadow-indigo-500/50 px-10 md:px-14 lg:px-20 h-3/4 flex flex-col text-center md:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
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
    </GuestLayout>
  );
};

export default Home;
