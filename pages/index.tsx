import type { NextPage } from "next";
import Router from "next/router";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";

const Home: NextPage = () => {
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
  return (
    <GuestLayout>
      {/* <div className="container px-12 py-2 mx-auto ">
        <div className="z-0 md:flex shadow-2xl rounded-xl shadow-indigo-500/50 lg:px-20 h-3/4">
          <div className="mt-20 mb-12 md:w-3/5">
            <h2 className="mb-4 text-5xl font-bold leading-tight tracking-tighter text-gray-800 font-oswald animate-fade-in-up">
            FANTASY SOCCER <br /> <span>{text} </span>
              <Cursor cursorColor="bg-primary-200" />
            </h2>
            <p className="text-gray-700 font-nunito text-1xl animate-fade-in-down">
              Listen to the songs at tip of your finger, feel the vibes and
              dance.Listen to the songs at tip of your finger, feel the vibes
              and dance. Listen to the songs at tip of your finger.
            </p>
            <div className="flex mt-10">
              <Button
                Onclick={goToRegister}
                title="Register"
                bgcolor="bg-primary-200"
                color="text-white"
                opacity="opacity-100"
                width="w-40"
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
          <div className="mt-20 md:w-1/2">
            <div className="mt-3 ">
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
      </div> */}
    </GuestLayout>
  );
};

export default Home;
