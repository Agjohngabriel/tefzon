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
      <div className="flex  ">
        <div className="w-1/10 mt-6 ml-5 sm:ml-20 sm:mt-16">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter text-gray-100 font-oswald sm:text-2xl lg:text-5xl animate-fade-in-up">
            Tefzon Fantasy
          </h2>
          {isLoading && <Loader />}
          <div className="pt-[2.3rem] lg:pt-[4.4rem] w-[22rem] sm:w-full md:mx-0  flex justify-between  overflow-x-auto  scrollbar-hide ">
            <BreadCrumbButton title="Squad" link="/home/account/squad" />
            <BreadCrumbButton title="Pick Team" link="/home/account/squad/select_squad" />
            <BreadCrumbButton title="Transfer" link="/home/transfer" />
            <BreadCrumbButton title="Leagues" link="/home/leagues" />
            <BreadCrumbButton title="Fixtures" link="/home/fixtures" />
            <BreadCrumbButton title="Wallet" link="/home/account/wallet" />
            <BreadCrumbButton title="History" link="/home/statistics" />
            
          </div>
        </div>
        <div className="justify-end sm:w-1/10 ">
          <div className="sm:mt-3 sm:ml-20 animate-pulse animate-fade-in-down">
            <img
              src="/img/Header Image.png"
              alt="soccer"
              className="relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
