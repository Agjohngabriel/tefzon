import MainLayout from "../../../components/MainLayout";

const PlayerPointStats = () => {
  return (
    <MainLayout>
      <div className="px-1">
        <div className="bg-gray-100 rounded-sm border shadow-xl py-5 px-2 lg:p-5 w-full pb-10 ">
          <div className="max-w-md mx-auto  overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full">
                <div className="relative flex">
                  <input
                    type="text"
                    className="bg-white h-10 w-full font-arcon text-xs px-2 mr-3 mt-2 focus:outline-none hover:cursor-pointer"
                    name="search"
                    placeholder="Search"
                  />

                  <button
                    className=" hover:scale-110 focus:outline-none flex justify-center px-6 py-2   mb-2 cursor-pointer                                 
                                hover:bg-blue-500 
                                text-[#240155] border border-[#8139E6]
                                 duration-200 ease-in-out 
                                 transition"
                  >
                    <div className="font-arcon text-sm">Reset</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto md:flex-row py-10 ">
            <div className=" flex-1 svelte-1l8159u">
              <button
                //   onClick={() => fetchByPos(1)}
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  cursor-pointer                                 
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

          <div className="flex flex-col md:flex-row">
            <div className="w-full lg:mx-2 flex-1 svelte-1l8159u">
              <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                Sort by
              </label>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="">Total Point</option>
                  <option value="02">Goals</option>
                  <option value="03">Female</option>
                  <option value="04">Prefer not to state</option>
                </select>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <label className="text-gray-600 font-arcon text-sm mb-2 ml-1">
                Max Cost
              </label>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select className="form-select w-full px-3 py-2 bg-white font-arcon  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="">3.00</option>
                  <option value="02">Free</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
        <div className="-mb-20 -translate-y-1/2 transform">
          <img
            src="https://i.ibb.co/JWTX98g/Seek-Png-com-kobe-bryant-png-109287.png"
            alt="Kobe Bryant"
            title="Kobe Bryant"
            className="mx-auto h-64"
          />
        </div>
        <div className="text-center">
          <h3 className="text-center text-4xl font-bold">Kobe Bryant</h3>
          <span className="text-sm">Shooting Guard</span>
        </div>
        <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
          <li className="flex flex-col">
            <span className="font-bold">PTS</span> 25.00
          </li>
          <li className="mx-6 flex flex-col">
            <span className="font-bold">AST</span> 4.7
          </li>
          <li className="flex flex-col">
            <span className="font-bold">FG%</span> 44.7
          </li>
        </ul>
        <div className="text-center">
          <button className="rounded-xl bg-black px-24 py-2 text-white">
            Select player
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlayerPointStats;
