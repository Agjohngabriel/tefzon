import Link from "next/link";
import Router from "next/router";
import MainLayout from "../../../components/MainLayout";

const Join = () => {
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };

  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/home/account/status" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2  ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Leagues
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Join
          </a>
        </Link>
      </div>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-10  w-auto">
        <div className="flex">
          <div className=" w-3/4 ">
            <div className="   py-1 px-1 w-full">
              <div className="flex flex-col space-y-4 mb-5">
                <h1 className="font-montserrat text-xl sm:text-3xl text-black-150 sm:w-4/6  ">
                  Choose a league type to join
                </h1>
                <p className="font-arcon text-xs sm:px-8 py-2  text-black-0  w-full">
                  Join a private or public league to compete against friends and
                  other game players.
                </p>
              </div>

              <div className="flex flex-col space-y-2 mb-5">
                <h1 className="font-montserrat text-xl sm:text-3xl text-black-150 w-4/6  ">
                  Private leagues
                </h1>
                <p className="font-arcon text-xs sm:px-8 py-2 text-black-0  w-full">
                  Join a private league if somebody has given you a code to
                  enter
                </p>
                <Link href="/home/leagues/join_private" passHref>
                  <a className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none">
                    Join private league
                    <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                      arrow_forward
                    </span>
                  </a>
                </Link>
              </div>

              <div className="flex flex-col space-y-2 ">
                <h1 className="font-montserrat text-xl sm:text-3xl text-black-150 w-4/6  ">
                  Public leagues
                </h1>
                <p className="font-arcon text-xs sm:px-8 py-2 text-black-150  w-full">
                  Join a public league to play a small randomly selected group
                  of game players
                </p>
                <Link href="/home/leagues/join_public" passHref>
                  <a className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none">
                    Join public league
                    <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                      arrow_forward
                    </span>
                  </a>
                </Link>
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
      </div>
    </MainLayout>
  );
};

export default Join;
