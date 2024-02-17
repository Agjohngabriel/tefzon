import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { BreadCrumbButton } from "./breadcrumb_button";
import Button from "./Button";
import { useState } from "react";
import { Loader } from "./Loader";
function BreadCrumb() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  return (
    <div className="bg-violet-500   lg:pt-[20px] md:pt-[5px] pt-3 justify-between ">
      <div className="md:flex justify-between px-3 lg:px-20">
        <div className="sm:w-1/10 mt-6 sm:mt-16  ">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter text-gray-100 font-oswald sm:text-2xl lg:text-5xl animate-fade-in-up">
            Tefzon Fantasy
          </h2>
          {isLoading && <Loader />}
          <div className="pt-[2.3rem] lg:pt-[4.4rem] w-[19rem] sm:w-[22rem] md:w-full md:mx-0 flex justify-between  overflow-x-auto  scrollbar-hide absolute md:relative  z-10  md:z-0">
            <BreadCrumbButton title="Home" link="/home" />{" "}
            <BreadCrumbButton title="Squad" link="/home/account/squad" />
            <BreadCrumbButton title="Leagues" link="/home/leagues" />
            {/* <BreadCrumbButton
              title="Pick Team"
              link="/home/account/squad/select_squad"
            /> */}
            {/* <BreadCrumbButton title="Transfer" link="/home/transfer" /> */}
            {/* <BreadCrumbButton title="Fixtures" link="/home/fixtures" /> */}
            {/* <BreadCrumbButton title="Wallet" link="/home/account/wallet" /> */}
            <BreadCrumbButton title="History" link="/home/history" />
            <BreadCrumbButton title="More" link="/home/account/profile" />
          </div>
        </div>
        <div className="flex -mt-[2.4rem] md:mt-0  justify-end  w-1/10 ">
          <div className="sm:mt-3 sm:ml-20 animate-pulse animate-fade-in-down w-[12rem] md:w-full ">
            <img src="/img/Header Image.png" alt="soccer" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
