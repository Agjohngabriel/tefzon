import { ReactNode } from "react";
import GuestFooter from "./GuestFooter";
import GuestHeader from "./GuestHeader";

function GuestLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen">
      <GuestHeader />
      <div>{props.children}</div>
      <GuestFooter />
    </div>
  );
}

export default GuestLayout;
