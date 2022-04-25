import type { NextPage } from "next";
import Image from "next/image";
import GuestLayout from "../components/GuestLayout";

const Home: NextPage = () => {
  return (
    <GuestLayout>
      <div className="flex flex-row justify-between mx-4 pl-16 pt-11">
        <div className="">
          <h1>FANTASY SOCCER TO PLAY <br />WITH PLEASURE</h1>
        </div>
        <div>
          <Image src="/soccer.png" width="600" height="350" />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Home;
