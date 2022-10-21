import { ReactNode } from "react";
import { useRouter } from "next/router";
import AccountBreadCrumb from "./base/AccountBreadCrumb";
import GuestBreadCrumb from "./base/GuestBreadCrumb ";
import GuestHeader from "./GuestHeader";
import MainFooter from "./MainFooter";

export default function Layout(props: { children: ReactNode }) {
  const Router = useRouter();
  return (
    <>
      <GuestHeader />

      {Router.pathname === "/home" ? (
        <AccountBreadCrumb />
      ) : (
        <GuestBreadCrumb />
      )}
      <div className="bg-[#E4ECFB] shadow-inner">
        {/* <div className="container bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto"> */}
        {props.children}
        {/* </div> */}
      </div>
      <MainFooter />
    </>
  );
}
