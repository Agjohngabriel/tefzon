import Router from "next/router";
import Layout from "../../components/Layouts";

const Index = () => {
  const goToSquad = () => {
    Router.push("/home/account/squad");
  };
  const goToWallet = () => {
    Router.push("/home/account/wallet");
  };
  const goToLeagues = () => {
    Router.push("/home/leagues");
  };
  const goToTransfer = () => {
    Router.push("/home/transfer");
  };
  const goToFixtures = () => {
    Router.push("/home/fixtures");
  };
  const goToPoints = () => {
    Router.push("/home/points");
  };
  return (
    <Layout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 py-6  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto   px-4 py-6  w-auto">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-8 px-6 py-2">
              {/* <!-- Start Card List --> */}
              <div className="rounded-xl ">
                <div className="grid grid-cols-1 gap-6   grid-cols-2 mt-6">
                  {/* <!-- Start Navitem --> */}
                  <button onClick={goToSquad} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fas fa-users fa-sm text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      My Squad
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button  onClick={goToLeagues} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fas fa-futbol fa-sm text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Leagues
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button  onClick={goToWallet} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fas fa-wallet fa-xl text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Wallet
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button  onClick={goToPoints} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fas fa-bullseye fa-sm text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Points
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button  onClick={goToTransfer} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fas fa-handshake fa-sm text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Transfers
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                 <!-- Start Navitem --> */}
                  <button  onClick={goToFixtures} className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i className="fa fa-table fa-sm text-indigo-600"></i>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Fixtures
                    </p>
                  </button>
                  {/* <!-- End Navitem --> */}
                </div>
                <div className="flex flex-col justify-center items-center lg:mt-3">
                  <button className=" mt-4 bg-indigo-600 hover:bg-indigo-700 shadow-xl text-white font-bold py-2 px-4 rounded">
                    Sign out
                  </button>
                </div>
              </div>
              {/* <!-- End Card List --> */}
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xxl:col-span-4 px-6 py-6">
              {/* <!-- Start profile Card --> */}
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 border-2 border-white mt-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
                      className="rounded-full w-auto"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-xl mt-1">Safwan</p>
                  <p className="font-semibold text-base text-gray-400">
                    No Future
                  </p>

                  <div
                    className="relative  p-4 rounded-lg shadow-xl w-full bg-cover bg-center h-32 mt-4"
                    style={{
                      ["background-image" as any]:
                        "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                      <div>
                        <h3 className="text-center text-white text-lg">
                          Total Income
                        </h3>
                        <h3 className="text-center text-white text-3xl mt-2 font-bold">
                          RM 2000.00
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End profile Card -->
                <!-- Start Card List --> */}
              <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
                <div className="flex space-x-6 items-center">
                  <img
                    src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png"
                    className="w-auto h-24 rounded-lg"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-base">Edit Profile</p>
                    <p className="font-semibold text-sm text-gray-400">
                      update your profile
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="bg-gray-300 rounded-md p-2 flex items-center">
                    <i className="fas fa-chevron-right fa-sm text-black"></i>
                  </div>
                </div>
              </div>
              {/* <!-- End Card List --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
