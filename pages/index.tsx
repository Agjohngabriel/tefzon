import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/base/Button";
import GuestLayout from "../components/GuestLayout";

const Home: NextPage = () => {
  return (
    <GuestLayout>
      <div className="flex flex-row justify-between mx-4 pl-16 2xl:pt-32">
        <div className="w-1/3 2xl:ml-10 2xl:pl-14 2xl:pt-32">
          <h1 className="font-bold text-4xl text-black-200 mb-4 tracking-tighter">
            FANTASY SOCCER TO PLAY <br />
            WITH PLEASURE
          </h1>
          <p className="text-black-150 font-semibold text-xs mb-4">
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
              <span className="text-sm tracking-tighter p-1.5">
                Login To Play
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/3">
          <img
            src="/soccer.png"
            className="2xl:w-[63rem] 2xl:h-[39rem] xl:w-[43rem] xl:h-[22rem]  sm:w-96"
            alt="Soccer Banner"
          />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Home;
