import { ReactNode } from "react";
import Auth from "./Auth";
import BreadCrumb from "./base/BreadCrumb";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function MainLayout(props: { children: ReactNode }) {
  return (
    <Auth>
      <MainHeader />
      <BreadCrumb />
      <div className="bg-[#E4ECFB] pb-10">{props.children}</div>
      <MainFooter />
    </Auth>
  );
}
