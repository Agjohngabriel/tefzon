import { ReactNode } from "react";
import { FooterSecond } from "./FooterSecond";
import GuestFooter from "./GuestFooter";
import GuestHeader from "./GuestHeader";

function GuestLayout(props: { children: ReactNode; footer: string }) {
  return (
    <div className="h-screen">
      <GuestHeader />
      <div>{props.children}</div>

      {props.footer === "first" ? <GuestFooter /> : <FooterSecond />}
    </div>
  );
}

export default GuestLayout;
