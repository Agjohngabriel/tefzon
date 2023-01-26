import Link from "next/link";
import MainLayout from "../../../../components/MainLayout";

const NameTeam = () => {
  return (
    <MainLayout>
      <form className="py-2">
        <div className="container  mx-auto px-6 pt-10  lg:px-32 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-xl sm:text-4xl text-black-0 mx-2 text-center">
              Name Your Team
            </h1>
          </div>
          <div className="mx-5 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
            <div>
              <Link href="/home/account/squad/save_team">
                <a
                  className="text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-2 rounded font-bold cursor-pointer                                 
                                    hover:bg-blue-500 shadow-inner 
                                    bg-[#4AAE75] text-gray-200
                                    duration-200 ease-in-out 
                                    transition"
                >
                  <span className="font-montserrat text-sm text-black-150">
                    Next
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 rounded-lg border-b-2 border-violet-500 mx-4 lg:mx-40" />

        <div className="container max-w-5xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-2xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-4  w-auto">
          <div
            className="rounded-2xl border shadow-xl py-5 px-5 sm:py-20 sm:px-20 w-full "
            style={{ backgroundImage: 'url("/img/Pitch Background.png")' }}
          >
            <div className="bg-[#6544DE]  bg-opacity-70 flex items-center justify-center pb-10 ">
              <div className="flex flex-col items-center space-y-4 py-8">
                <h1 className="font-arcon text-xl sm:text-3xl text-white w-5/6 sm:mt-5 text-center">
                  Choose A Team Name
                </h1>
                <p className="text-xs font-arcon text-white text-center w-full">
                  You can not change your team name after the first matchday you
                  play.
                </p>
                <div className="flex border text-white tracking-wide border-gray-200 rounded sm:w-full">
                  <input
                    placeholder="Enter Team Name"
                    className="p-2  appearance-none outline-none w-full placeholder-white text-white bg-opacity-50 bg-[#D5D8DE]"
                    required
                  />
                </div>
                <h3 className="font-montserrat text-white text-center w-full">
                  Maximum of 25 Characters
                </h3>
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default NameTeam;
