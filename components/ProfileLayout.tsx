import { ReactNode } from "react";
import Auth from "./Auth";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function ProfileLayout(props: { children: ReactNode }) {
  return (
    <Auth>
      <MainHeader />
     
      <div className="bg-[#E4ECFB] ">{props.children}</div>
      <MainFooter />
    </Auth>
  );
}
