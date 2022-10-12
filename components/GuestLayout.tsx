import { useRouter } from "next/router";
import { ReactNode } from "react";
import GuestFooter from "./GuestFooter";
import GuestHeader from "./GuestHeader";
import MainFooter from "./MainFooter";

export default function GuestLayout(props: { children: ReactNode }) {
  const Router = useRouter();
  return (
    <>
      <GuestHeader />
      <div className=" mx-auto">
        {/* <div className="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto"> */}
        {props.children}
        {/* </div> */}
      </div>
      {Router.pathname == "/" ? <GuestFooter /> : <MainFooter />}
    </>
  );
}
