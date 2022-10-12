import React from "react";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function SlashScreen({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="my-2">
        <div className=" ">
          <img
            src="/img/logo.png"
            alt="soccer"
            className="relative animate-up-down h-24"
          />
          <span className="font-poppins text-[0.70rem]">
          © 2022 All Simple Rights Reserved
        </span>
        </div>
      </div>
    </div>
  );
}

export default SlashScreen;
