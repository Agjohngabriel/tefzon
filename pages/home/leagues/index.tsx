import MainLayout from "../../../components/MainLayout";
import Router from "next/router";
import Link from "next/link";

const Index = () => {
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };
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

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
          Leagues
        </h1>
      </div>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-10  w-auto">
        <div className="flex">
          <div className=" w-3/4 ">
            <div className="   py-1 px-1 w-full">
              <div className="flex flex-col space-y-4 mb-5">
                <h1 className="font-montserrat text-3xl text-black-0 w-4/6 ">
                  Create or join leagues
                </h1>
              </div>

              <div className="flex flex-col space-y-2 mb-5">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Join an existing league
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-0  w-full">
                  Join a private or public league to compete against friends and
                  other game players.
                </p>
                <Link href="/home/leagues/join" passHref>
                  <a className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none">
                    Join a league
                    <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                      arrow_forward
                    </span>
                  </a>
                </Link>
              </div>

              <div className="flex flex-col space-y-2 ">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Create a new league
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-150  w-full">
                  Create a private or public league to compete against friends
                  and other game players.
                </p>
                <Link href="/home/leagues/create" passHref>
                  <a className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none">
                    Create a league
                    <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                      arrow_forward
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container  max-w-6xl">
          <hr className="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

          <div className="w-full flex mb-5">
            <div className="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
