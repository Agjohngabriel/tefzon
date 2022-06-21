import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const Matches = () => {
  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/fixtures" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2   ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
         Matches
        </h1>
      </div>
      
      <div className="container lg:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20 mt-10 mb-20  px-2 py-6 lg:px-10 ">
        <div className="flex flex-col  pt-10 space-y-4 max-w-3xl mx-auto">
          <div className="mx-auto flex-1 svelte-1l8159u ">
            <div className="flex items-center flex-shrink-0 text-gray-600 ">
              <h1 className="font-oswald text-2xl sm:text-4xl text-gray-700 sm:pb-5 mx-auto text-center">
                Fixtures
              </h1>
            </div>
            <button
              className="text-base shadow-inner shadow-gray-200/50 border hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-medium cursor-pointer 
                        
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
          <div className="flex flex-col items-center w-full mx-auto sm:flex-row py-10">
            <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-violet-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex font-arcon text-xs font-semibold ">
                  <span className=" material-icons hover:text-white">
                    arrow_backward
                  </span>
                  <span className="pt-1">Previous</span>
                </div>
              </button>
            </div>
            <h1 className="font-bold text-xs sm:text-sm text-center text-gray-700 w-4/6 py-3 px-5 ">
              Gameweek 20 - Tue 26 Jan 17:30
            </h1>
            <div className="sm:w-full mx-2 flex-1 svelte-1l8159u">
              <button
                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                        
                        hover:bg-blue-500 
                        bg-violet-400 text-gray-200
                         duration-200 ease-in-out 
                         transition"
              >
                <div className="flex font-arcon text-xs font-semibold px-5">
                  <span className="pt-1"> Next</span>
                  <span className="ml-20 material-icons hover:text-white ">
                    arrow_forward
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 ">
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Sunday 21 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Monday 22 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
          <p className="text-xs text-gray-800 font-arcon text-center  py-4 bg-stone-300 mx-auto tracking-wider">
            Sunday 27 February 2021
          </p>

          <div className="w-full leading-normal ">
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
            <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="text-gray-900 whitespace-no-wrap">lookester city</p>
                </div>
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="mx-2 sm:mx-16 tracking-tight px-2 sm:px-8 text-gray-600 whitespace-no-wrap text-center border  py-3 sm:py-5 border-gray-300">
                19:00
              </p>
              <div className="flex items-center float-right">
                <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14  sm:table-cell mr-3">
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
    
      <div className="container mb-5 mx-auto">
        <hr className="mt-20  rounded-lg border-b-2 border-violet-500 mx-3" />

        <div className="mx-3  flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Matches;
