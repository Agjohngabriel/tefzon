import MainLayout from "../../../components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="container lg:max-w-7xl   mx-auto mt-1 mb-20  px-2 py-2 lg:px-10 ">
        <div className="px-1">
          <div className="bg-gray-100 rounded-sm border shadow-xl py-5 px-2 lg:p-5 w-full pb-10 ">
            <div className="flex">
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="">All Players</option>
                    <option value="02">Team</option>
                    <option value="03">Female</option>
                    <option value="04">Prefer not to state</option>
                  </select>
                </div>
              </div>
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                  <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="">Sort by</option>
                    <option value="02">Free</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex mx-2  py-10 ">
              <div className=" flex-1 svelte-1l8159u">
                <button
                  //   onClick={() => fetchByPos(1)}
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2   cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="font-arcon text-sm">GK</div>
                </button>
              </div>
              <div className="flex-1 svelte-1l8159u">
                <button
                  //   onClick={() => fetchByPos(2)}
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="font-arcon text-sm">DEF</div>
                </button>
              </div>

              <div className="w-full flex-1 svelte-1l8159u">
                <button
                  //   onClick={() => fetchByPos(3)}
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="font-arcon text-sm">MID</div>
                </button>
              </div>

              <div className="w-full  flex-1 svelte-1l8159u">
                <button
                  //   onClick={() => fetchByPos(4)}
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
                                hover:bg-blue-500 
                                bg-white text-gray-900
                                 duration-200 ease-in-out 
                                 transition"
                >
                  <div className="font-arcon text-sm">FWD</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:max-w-7xl flex flex-wrap     mx-auto mt-1 mb-2  px-auto py-2 lg:px-10 ">
        <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-10 -translate-y-1/2 transform">
            <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
              <img
                className="rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kobe Bryant"
                title="Kobe Bryant"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-center text-xl font-bold">Kobe Bryant</h3>
            <span className="text-sm">Forward</span>
          </div>
          <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-xl">
            <li className="flex flex-col">
              <span className="font-bold">PTS</span> 30.00
            </li>
            <li className=" flex flex-col">
              <span className="font-bold">AST</span> 4
            </li>
          </ul>
        </div>

        <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-10 -translate-y-1/2 transform">
            <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
              <img
                className="rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kobe Bryant"
                title="Kobe Bryant"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-center text-xl font-bold">Kobe Bryant</h3>
            <span className="text-sm">Forward</span>
          </div>
          <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-xl">
            <li className="flex flex-col">
              <span className="font-bold">PTS</span> 30.00
            </li>
            <li className=" flex flex-col">
              <span className="font-bold">AST</span> 4
            </li>
          </ul>
        </div>
        <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-10 -translate-y-1/2 transform">
            <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
              <img
                className="rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kobe Bryant"
                title="Kobe Bryant"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-center text-xl font-bold">Kobe Bryant</h3>
            <span className="text-sm">Forward</span>
          </div>
          <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-xl">
            <li className="flex flex-col">
              <span className="font-bold">PTS</span> 30.00
            </li>
            <li className=" flex flex-col">
              <span className="font-bold">AST</span> 4
            </li>
          </ul>
        </div>

        <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-10 -translate-y-1/2 transform">
            <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
              <img
                className="rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kobe Bryant"
                title="Kobe Bryant"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-center text-xl font-bold">Kobe Bryant</h3>
            <span className="text-sm">Forward</span>
          </div>
          <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-xl">
            <li className="flex flex-col">
              <span className="font-bold">PTS</span> 30.00
            </li>
            <li className=" flex flex-col">
              <span className="font-bold">AST</span> 4
            </li>
          </ul>
        </div>

        <div className="py-3 px-3 sm:px-5 lg:px-8 w-[47%] mb-14 sm:w-[23%] lg:w-[18%]  mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <div className="-mb-10 -translate-y-1/2 transform">
            <div className=" h-28 w-28 rounded-full border-2 border-white shadow-md mx-auto">
              <img
                className="rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kobe Bryant"
                title="Kobe Bryant"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-center text-xl font-bold">Kobe Bryant</h3>
            <span className="text-sm">Forward</span>
          </div>
          <ul className="mt-2 mb-2 mx-auto flex justify-between text-center text-xl">
            <li className="flex flex-col">
              <span className="font-bold">PTS</span> 30.00
            </li>
            <li className=" flex flex-col">
              <span className="font-bold">AST</span> 4
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
