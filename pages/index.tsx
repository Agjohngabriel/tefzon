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
        <div className="md:flex z-0 ">
          <div className="md:w-3/5  mt-20 mb-12">
            <h2 className="font-oswald text-gray-800 font-bold text-5xl tracking-tighter  leading-tight mb-4 animate-fade-in-up">
              FANTASY SOCCER TO PLAY WITH PLEASURE
            </h2>
            <p className="font-nunito text-gray-700 text-1xl animate-fade-in-down">
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
                className="flex items-center text-gray-600 rounded md:px-8 ml-4 sm:ml-0 sm:px-6 py-2 focus:outline-none animate-wiggle "
              >
                Login to play
                <span className="ml-2 material-icons hover:text-green ">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-20">
            <div className="mt-3 ">
              <div className="mt-3 ">
                <img
                  src="/img/soccer 1.png"
                  alt="soccer"
                  className=" relative animate-up-down"                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </GuestLayout>
  );
};

export default Home;
