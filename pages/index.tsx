import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";

const Home: NextPage = () => {
  return (
    <GuestLayout>
      <div className="flex flex-row justify-between mx-4 pl-16 2xl:pt-32 xl:pt-20">
        <div className="w-2/4 2xl:ml-10 xl:ml-10 2xl:pl-14 xl:pl-14 2xl:pt-32 xl:pt-[3rem] pr-5">
          <h1 className="font-bold text-4xl text-black-200 mb-4 tracking-tighter leading-10">
            FANTASY SOCCER TO PLAY <br />
            WITH PLEASURE
          </h1>
          <p className="text-black-150 font-semibold text-xs mb-4 tracking-wide">
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
              <span className="text-sm tracking-tighter pt-2.5">
                Login To Play
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <img
            src="/soccer.png"
            className="2xl:w-[50rem] 2xl:h-[36rem] xl:w-[36rem] xl:h-[19.5rem]  sm:w-96 lg:w-[40rem]"
            alt="Soccer Banner"
          />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Home;
