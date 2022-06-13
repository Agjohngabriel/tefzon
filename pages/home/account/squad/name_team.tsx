  import Link from "next/link";
import MainLayout from "../../../../components/MainLayout";

const NameTeam = () => {
  return (
    <MainLayout>
      <form>
        <div className="container  mx-auto px-6 pt-10  lg:px-20 flex items-center  justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
            <h1 className="font-oswald text-xl sm:text-4xl text-black-0  text-center">
              Name Your Team
            </h1>
          </div>
          <div className="mx-7 sm:w-full items-center block flex-grow md:flex md:justify-end md:w-auto">
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

        <hr className="my-6 rounded-lg border-b-2 border-violet-500 mx-3" />
    

        <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
          <div
            className="rounded-2xl border shadow-xl py-5 px-5 sm:py-20 sm:px-20 w-full "
            style={{ backgroundImage: 'url("/img/Pitch Background.png")' }}
          >
            <div className="bg-[#6544DE]  bg-opacity-70 flex items-center justify-center pb-20 ">
              <div className="flex flex-col items-center space-y-4 py-20">
                <h1 className="font-arcon text-xl sm:text-4xl text-white w-5/6 text-center">
                  Choose A Team Name
                </h1>
                <p className="text-xs font-arcon text-white text-center w-full">
                  You can not change your team name after the first matchday you
                  play in
                </p>
                <div className=" my-2  flex border text-white tracking-wide border-gray-200 rounded sm:w-full">
                  <input
                    placeholder="Enter Team Name"
                    className="p-2 px-2 appearance-none outline-none w-full placeholder-white text-white bg-opacity-50 bg-[#D5D8DE]"
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
