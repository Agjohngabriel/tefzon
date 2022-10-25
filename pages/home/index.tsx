import Layout from "../../components/Layouts";

const Index = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 py-6  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto   px-4 py-6  w-auto">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-8 px-6 py-6">
              <div className="flex">
                <div className=" w-3/4 ">
                  <div className=" border-t-4 border-indigo-500 bg-white shadow-xl  py-10 px-10 w-full">
                    <div className="flex flex-col space-y-4">
                      <h1 className="font-montserrat text-2xl text-gray-800 w-4/6 ">
                        Fantasy Premier Leauge
                      </h1>
                      <p className="font-arcon text-sm text-gray-500  w-full">
                        The official fantasy football game of the premier leauge
                        is also the world's biggest
                      </p>
                      <a
                        href="##"
                        className="w-full sm:w-auto bg-[#EEEEEE] text-gray-700  hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-gray-100  inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <div className="font-arcon text-sm font-normal px-10">
                          Play Fantasy Premier Leauge
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className=" border-t-4 border-indigo-500 bg-white shadow-xl mt-3 py-10 px-10 w-full">
                    <div className="flex flex-col space-y-4">
                      <h1 className="font-montserrat text-2xl text-gray-800 w-4/6 ">
                        Fantasy Premier Leauge
                      </h1>
                      <p className="font-arcon text-sm text-gray-500  w-full">
                        The official fantasy football game of the premier leauge
                        is also the world's biggest
                      </p>
                      <a
                        href="##"
                        className="w-full sm:w-auto bg-[#EEEEEE] text-gray-700  hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-gray-100  inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <div className="font-arcon text-sm font-normal px-10">
                          Play Fantasy Premier Leauge
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                  {/* <!-- Start Card List --> */}
                  <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
                    <div className="flex space-x-6 items-center">
                      <img
                        src="https://www.nicepng.com/png/detail/395-3955418_paypal-icon-png.png"
                        className="w-auto h-12"
                        alt=""
                      />
                      <div>
                        <p className="font-semibold text-base">PayPal</p>
                        <p className="font-semibold text-xs text-gray-400">
                          Payment Collected
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 items-center">
                      <div className="bg-yellow-200 rounded-md p-2 flex items-center">
                        <p className="text-yellow-600 font-semibold text-xs">
                          -C4,678
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Card List --> */}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                      {/* <!-- Start Card List --> */}
                      <div
                        className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden mt-4 shadow-lg transition duration-300 ease-in-out"
                        style={{
                          ["background-image" as any]:
                            "url('https://www.tokkoro.com/picsup/5081898-forest-nature-road.jpg')",
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                          <div>
                            <div className="text-white text-lg flex space-x-2 items-center">
                              <div className="bg-white rounded-md p-2 flex items-center">
                                <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                              </div>
                              <p>Finished Appt</p>
                            </div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                              120
                            </h3>
                            <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                              4 not confirmed
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Card List --> */}
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                      {/* <!-- Start Card List --> */}
                      <div className="bg-white rounded-xl p-4 shadow-xl mt-4">
                        <div className="flex flex-col justify-center items-center">
                          <img
                            src="https://media.karousell.com/media/photos/products/2021/4/16/kajang_3xxk3xxk3xxk22x70_4r3b__1618542693_a779ef2b_progressive.jpg"
                            className="w-full h-40 rounded-lg"
                            alt=""
                          />
                        </div>
                        <p className="font-semibold text-lg mt-1 text-left">
                          Traffic Point
                        </p>
                        <p className="font-semibold text-sm text-gray-400">
                          Kajang,Selangor MY
                        </p>
                        <div className="flex space-x-2 text-gray-400 items-center mt-2">
                          <i className="fas fa-map-marker-alt"></i>
                          <p className="font-semibold text-sm text-gray-400">
                            5km
                          </p>
                        </div>
                      </div>
                      {/* <!-- End Card List --> */}
                    </div>
                  </div>
                </div>
              </div>
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
              {/* <!-- End Card List -->
                <!-- Start Card List --> */}
              <div className="bg-white rounded-xl p-4 shadow-xl mt-4">
              <div className="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
                {/* <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-chart-pie fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Dashboard</p>
                </div>
                {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-calculator fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Calculator</p>
                </div>
                {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-wallet fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Wallet</p>
                </div>
                {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-archive fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Saving</p>
                </div>
                {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-money-bill-wave-alt fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Currencies</p>
                </div>
                {/* <!-- End Navitem -->
                 <!-- Start Navitem --> */}
                <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                  <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                    <i className="fas fa-shopping-basket fa-sm text-indigo-600"></i>
                  </div>
                  <p className="text-xs mt-1 text-center font-semibold">Expenses</p>
                </div>
                {/* <!-- End Navitem --> */}
              </div>
                <div className="flex flex-col justify-center items-center">
              
                  <button className=" mt-4 bg-indigo-600 hover:bg-indigo-700 shadow-xl text-white font-bold py-2 px-4 rounded">
                    Sign out
                  </button>
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
