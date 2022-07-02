import MainLayout from "../../../components/MainLayout";

const PlayerStats = () => {
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

            <div className="flex mx-auto ml-3 lg:ml-20  py-10 ">
              <div className=" flex-1 svelte-1l8159u">
                <button
                  //   onClick={() => fetchByPos(1)}
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 sm:px-16 lg:20 py-2   cursor-pointer                                 
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
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 sm:px-16 lg:20 py-2  cursor-pointer                                 
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
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 sm:px-16 lg:20 py-2  cursor-pointer                                 
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
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 sm:px-16 lg:20 py-2  cursor-pointer                                 
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

      <div className="container lg:max-w-7xl flex flex-wrap  justify-between   mx-auto mt-1 mb-2  px-auto  lg:px-10 ">
        <div className="py-1 w-full sm:max-w-lg xl:max-w-xl">
          <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
            <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
              Top Scorers
            </h1>
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="w-full leading-normal">
                <thead>
                  <tr className="rounded-2xl">
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #Rank
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Goals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="py-1 w-full sm:max-w-lg xl:max-w-xl">
          <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
            <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
              Assists
            </h1>
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="rounded-2xl">
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #Rank
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Assists
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º{" "}
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8 Goals
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="py-1 max-w-xl sm:max-w-2xl xl:max-w-3xl  overflow-x-auto">
          <div className="mx-auto sm:-mx-4 sm:px-4 py-4 overflow-x-auto">
            <h1 className="font-montserrat text-xl sm:text-2xl  px-2 text-[#33175A] w-4/6 py-3">
              Cards
            </h1>
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="rounded-2xl">
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #Rank
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Yellow Card
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Red card
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 sm:px-2 py-5 border-b border-gray-200 bg-white text-sm">
                      1º{" "}
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-1 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-2 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                    <td className="px-2 sm:px-2 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1º
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        A.Banabas
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Funny Team
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        2
                      </p>
                    </td>
                    <td className="px-2 sm:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap text-center">
                        8
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlayerStats;
