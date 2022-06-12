import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const JoinPublic = () => {
  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/home/account/status" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-24 mt-10 px-2 ">
            Home
          </a>
        </Link>

        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues/join" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Leagues
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues/join_public" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Join Public
          </a>
        </Link>
      </div>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
        <div className="flex">
          <div className=" w-3/4 ">
            <div className="py-1 px-1 w-full">
              <div className="flex flex-col space-y-4 mb-5">
                <h1 className="font-montserrat text-3xl text-black-0 w-4/6 ">
                  Join public league
                </h1>
                <p className="font-arcon text-xs px-8 py-2  text-black-0  w-full">
                  Public leagues allow you to compete against 20 randomly
                  assigned game players in a classic league and up to 16 in
                  head-to-head leagues. You can join up to 5 public leagues.
                </p>
              </div>

              <div className="flex flex-col space-y-2 mb-10">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Paid leagues
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-0  w-full">
                  Note, you can't remove your team from a public league after
                  the league has started, once the challenge is on there's no
                  quitting.
                </p>
                <button
                  className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer w-1/5                               
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="flex text-xs font-montserrat ">
                    <span className="pt-1">Join Paid League</span>
                  </div>
                </button>
              </div>

              <div className="flex flex-col space-y-2  mb-10">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Free leagues
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-0  w-full">
                  Note, you can't remove your team from a public league after
                  the league has started, once the challenge is on there's no
                  quitting.
                </p>

                <button
                  className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer w-1/4                                
                                hover:bg-blue-500 
                                bg-violet-400 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="flex text-xs font-montserrat ">
                    <span className="pt-1">Join Free League</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mx-auto">

        <hr className="mt-20  rounded-lg border-b-2 border-violet-500 mx-3" />

        <div className="mx-3  flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPublic;
