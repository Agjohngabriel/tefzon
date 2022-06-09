import type { NextPage } from "next";
import Router from "next/router";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";

const Home: NextPage = () => {
  const goToRegister = () => {
    Router.push("/account/auth/signup");
  };
  const goToLogin = () => {
    Router.push("/account/auth/login");
  };
  return (
    <GuestLayout>
      <div className="container rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-4 py-2 lg:px-20 h-3/4">
        <div className="flex z-0 ">
          <div className="lg:w-1/2 mt-20 mb-12">
            <h2 className="font-oswald text-gray-800 font-bold text-5xl tracking-tighter  leading-tight mb-4">
              FANTASY SOCCER TO PLAY WITH PLEASURE
            </h2>
            <p className="font-nunito text-gray-700 text-1xl">
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
                className="flex items-center text-gray-600 rounded px-8 py-2 focus:outline-none"
              >
                Login to play
                <span className="ml-2 material-icons hover:text-green-500">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mt-3 ">
              <div className="mt-3 ">
                <img
                  src="/img/soccer 1.png"
                  alt="soccer"
                  className="relative animate-pulse"                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row justify-between mx-4 pl-16 2xl:pt-32 xl:pt-20">
        <div className="w-2/4 2xl:ml-10 xl:ml-10 2xl:pl-14 xl:pl-14 2xl:pt-32 xl:pt-[3rem] pr-5">
          <h1 className="font-oswald font-bold text-4xl text-black-200 mb-4 tracking-tighter leading-10">
            FANTASY SOCCER TO PLAY <br />
            WITH PLEASURE
          </h1>
          <p className="font-nunito text-black-150 font-semibold text-xs mb-4 tracking-wide">
            Listen to the songs at tip of your finger, feel the vibes and
            dance.Listen to the songs at tip of your finger.
          </p>
          <div className="flex">
            <div className="mr-6">
              <Button
                title="Register"
                bgcolor="bg-primary-200"
                color="text-white"
              />
            </div>
            <div className="flex flex-row w-3/4 text-center">
              <span className="text-sm font-montserrat tracking-tighter pt-2.5">
                Login To Play
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <img
            src="/soccer.png"
            className="2xl:w-[50rem] 2xl:h-[36rem] xl:w-[36rem] xl:h-[19rem]  sm:w-96 lg:w-[40rem]"
            alt="Soccer Banner"
          />
        </div>
      </div> */}
    </GuestLayout>
  );
};

export default Home;
