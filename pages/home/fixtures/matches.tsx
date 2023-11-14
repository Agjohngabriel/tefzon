import Link from "next/link";
import Layout from "../../../components/Layouts";

const Matches = () => {
  return (
    <Layout>
      <div className="md:py-5">
        <div className="inline-flex rounded -ml-1">
          <Link href="/home/fixtures" passHref>
            <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 my-10 px-2   ">
              Home
            </a>
          </Link>
          <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
            navigate_next
          </span>

          <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  my-10 px-2 ">
            Matches
          </h1>
        </div>

        <div className="container lg:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20  mb-5 px-2 py-3 lg:px-10 ">
          <div className="flex flex-col pt-5 sm:pt-10 space-y-4 max-w-3xl mx-auto">
            <div className="  ">
              <div className="mx-auto flex items-center  justify-between text-gray-600 ">
                <h1 className="font-oswald text-2xl sm:text-4xl text-gray-700 pb-2 sm:pb-5 text-center">
                  Fixtures
                </h1>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-3xl px-">
                  <select className="form-select w-full px-10 py-2 text-sm  font-arcon text-black-150 opacity-100 rounded-3xl focus:outline-none bg-white focus:border-indigo-500 transition-colors cursor-pointer border border-gray-100">
                    <option value="">Choose a League</option>
                    <option value="">Choose a League</option>
                    <option value="">Choose a League</option>
                  </select>
                </div>
              </div>

              <button
                className="mx-auto text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-white text-gray-700
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex font-arcon text-xs font-medium py-1">
                  <span className=" material-icons hover:text-white">
                    calendar_month
                  </span>
                  <span className="pl-3  pt-1">Sync to Calendar</span>
                </div>
              </button>
            </div>
            <div className="flex  items-center w-full mx-auto sm:flex-row py-2 sm:py-10">
              <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
                <button
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-indigo-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
                >
                  <div className="flex items-center -mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 sm:w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>

                    <span className="mx-1  text-xs sm:text-sm">previous</span>
                  </div>
                </button>
              </div>
              <h1 className="font-bold text-xs sm:text-xl text-center text-gray-100 w-4/6 sm:w-full py-3 px-2 shadow-xl shadow-[#4f38a4] bg-[#6E4BEC]/50">
                Gameweek 27:
                <span className="pl-3 font-normal">Sat 6 Mar 12:00</span>
              </h1>
             
              <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
                <button
                  className="text-base  hover:scale-110 focus:outline-none flex justify-center px-3 lg:px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-indigo-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
                >
                  <div className="flex items-center -mx-1">
                    <span className="mx-1 text-xs sm:text-sm">Next</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 sm:w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 ">
            <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
              Sunday 21 February 2022
            </p>

            <div className="w-full leading-normal ">
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 ">
            <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
              Monday 22 February 2021
            </p>

            <div className="w-full leading-normal ">
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 ">
            <p className="text-xs text-gray-800 font-arcon text-center  py-2 bg-gradient-to-r from-violet-500 via-indigo-200 to-indigo-400  mx-auto tracking-wider">
              Monday 22 February 2021
            </p>

            <div className="w-full leading-normal ">
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 sm:py-5 border-b border-gray-300 text-xs  sm:text-sm  flex justify-center mx-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      lookester city
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-2 sm:py-3 border-gray-300">
                  19:00
                </p>
                <div className="flex items-center float-right">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10  sm:table-cell mr-3">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Teamchester city
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Matches;
