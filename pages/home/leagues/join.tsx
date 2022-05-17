import Router from "next/router";
import MainLayout from "../../../components/MainLayout";

const Join = () => {
  const goToPrivate = () => {
    Router.push("/home/leagues/join_private");
  };

  return (
    <MainLayout>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-10  w-auto">
        <div className="flex">
          <div className=" w-3/4 ">
            <div className="   py-1 px-1 w-full">
              <div className="flex flex-col space-y-4 mb-5">
                <h1 className="font-montserrat text-3xl text-black-0 w-4/6 ">
                  Choose a league type to join
                </h1>
                <p className="font-arcon text-xs px-8 py-2  text-black-0  w-full">
                  Join a private or public league to compete against friends and
                  other game players.
                </p>
              </div>

              <div className="flex flex-col space-y-2 mb-5">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Private leagues
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-0  w-full">
                  Join a private league if somebody has given you a code to
                  enter
                </p>
                <button
                  onClick={goToPrivate}
                  type="button"
                  className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none"
                >
                  Join private league
                  <span className="ml-2 material-icons text-[#6E4BEC] hover:text-green-500">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="flex flex-col space-y-2 ">
                <h1 className="font-montserrat text-2xl text-black-0 w-4/6 ">
                  Public leagues
                </h1>
                <p className="font-arcon text-sm px-8 py-2 text-black-150  w-full">
                  Join a public league to play a small randomly selected group
                  of game players
                </p>
                <button
                  type="button"
                  className="font-montserrat flex items-center text-black-150 rounded  focus:outline-none"
                >
                  Create public league
                  <span className="ml-2 material-icons text-indigo-600 hover:text-green-500">
                    arrow_forwardu
                  </span>
                </button>
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

export default Join;
