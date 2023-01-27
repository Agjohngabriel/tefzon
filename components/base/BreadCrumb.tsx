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
  const { data: session }: any = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  async function logOut() {
    try {
      setIsLoading(true);
      const out = await axios.get(
        `${process.env.BACKEND_URL}logout/${session?.data.user.id}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      if (out) {
        setIsLoading(false);
        signOut();
      }
    } catch (e) {
      return null;
    }
  }
  return (
    <div className="bg-violet-500  lg:pt-[20px] md:pt-[5px] pt-3 justify-between ">
      <div className="flex z-[100] ">
        <div className="w-1/2 mt-10 ml-5 sm:ml-20 sm:mt-16 lg:mb-12">
          <h2 className="text-xl font-bold leading-tight tracking-tighter text-gray-100 font-oswald sm:text-2xl lg:text-5xl animate-fade-in-up">
            Tefzon Fantasy
          </h2>
        </div>
        <div className="justify-end sm:w-1/2 ">
          <div className="sm:mt-3 sm:ml-20 animate-pulse animate-fade-in-down">
            <img
              src="/img/Header Image.png"
              alt="soccer"
              className="relative"
            />
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
      <div className="absolute z-50 w-[20rem] sm:w-full mx-6 md:mx-0  flex justify-between  overflow-x-auto md:px-44 -mt-14 md:-mt-9 scrollbar-hide ">
        {/* <BreadCrumbButton
          title="Public League"
          link="/home/leagues/join_public"
        />
        <BreadCrumbButton
          title="Private League"
          link="/home/leagues/join_private"
        /> */}
        <BreadCrumbButton
          title="Squad"
          link="/home/account/squad"
        />
        <BreadCrumbButton title="Leagues" link="/home/leagues" />
        <BreadCrumbButton
          title="Pick Team"
          link="/home/account/squad/select_squad"
        />
        <BreadCrumbButton title="Transfer" link="/home/transfer" />
        <BreadCrumbButton title="Fixtures" link="/home/fixtures" />
        <BreadCrumbButton title="Wallet" link="/home/account/wallet" />
        <BreadCrumbButton title="Stats" link="/home/statistics" />
        <button onClick={logOut}>
          <div
            className={`font-montserrat bg-green text-white
            md:inline-block text-xs md:text-sm  px-1 w-32 py-2 mx-1 text-center sm:mx-1 leading-none rounded cursor-pointer hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-7 md:mt-0`}
          >
            Sign Out
          </div>
        </button>
      </div>
    </div>
  );
}

export default BreadCrumb;
