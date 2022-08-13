import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/wallet" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2   ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
          Fixtures
        </h1>
      </div>

      <div className="container">
        <div className="sm:flex">
          <div className="container flex max-w-4xl h-3/4 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20 mt-10 mb-20  px-2 py-6 lg:px-10  ">
            <div className="flex flex-col  pt-10 space-y-4 w-full mx-2">
              <h1 className="font-montserrat text-xl sm:text-3xl text-black-0 mb-5 ">
                League 1842968
              </h1>
              <p className="text-xs text-black-0 font-arcon text-center mt-24 w-full mx-auto py-4 bg-[#E1CEFF]  max-w-3xl mb-5   tracking-wider px-2 lg:px-1 ">
                League scoring started in the Gameweek 24.
              </p>

              <div className="w-full mx-2  flex svelte-1l8159u">
                <h1 className="font-montserrat text-base sm:text-xl text-black-0 mb-5  mt-3">
                  Select Phase
                </h1>
                <div className="bg-white mx-3 mb-10 p-1 flex border border-gray-200 rounded svelte-1l8159u w-1/3">
                  <select className="form-select w-full px-3 py-2 bg-white text-black-150 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="">Overall</option>
                    <option value="02">Male</option>
                    <option value="03">Female</option>
                    <option value="04">Prefer not to state</option>
                  </select>
                </div>
              </div>

              <table className="w-full">
                <thead className="w-1/2 bg-[#EFEFEF]">
                  <tr>
                    <th className="p-2 text-center font-montserrat text-black-0">
                      Rank
                    </th>
                    <th className="p-2 text-left w-2/3 font-montserrat text-black-0">
                      Team Manager
                    </th>
                    <th className="p-2 text-center font-montserrat text-black-0">
                      GW
                    </th>
                    <th className="p-2 text-center pr-4 font-montserrat text-black-0">
                      TOT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300 py-3">
                    <td className="p-2 text-sm font-normal">
                      1
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="p-2 text-left ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                      >
                        Aswinram
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs leading-normal font-arcon text-black-0"
                      >
                        Aswinram R
                      </p>
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      {" "}
                      56
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      316
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 py-3">
                    <td className="p-2 text-sm font-normal">
                      2
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_down
                      </span>
                    </td>
                    <td className="p-2 text-left ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                      >
                        Aswinram
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs leading-normal font-arcon text-black-0"
                      >
                        Aswinram R
                      </p>
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      56
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      316
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 py-3">
                    <td className="p-2 text-sm font-normal">
                      3
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="p-2 text-left ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-sm font-montserrat leading-5 text-[#240155]"
                      >
                        Aswinram
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-xs leading-normal font-arcon text-black-0"
                      >
                        Aswinram R
                      </p>
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      56
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      316
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full pl-5 flex-1 svelte-1l8159u pt-10">
            <button
              className="text-base  hover:scale-110 focus:outline-none flex justify-center  py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-stone-200 text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
            >
              <div className="flex font-sans text-xs font-montserrat px-2">
                <span className="pt-1 text-[#060606] opacity-60">
                  Report Offensive Name
                </span>
                <span className="ml-10 material-icons hover:text-gray-100">
                  arrow_forward
                </span>
              </div>
            </button>
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

export default Index;

{
  /* <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-2  w-auto">
<div className="flex flex-col  pt-10 space-y-4 max-w-3xl mx-auto">
  <div className="mx-auto flex-1 svelte-1l8159u ">
    <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
      <h1 className="font-oswald text-4xl text-gray-700  text-centeru">
        Fixtures
      </h1>
    </div>
    {/* <button
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
  <div className="flex flex-col w-full md:flex-row py-10">
    <div className="w-full mx-2 flex-1 svelte-1l8159u">
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
          </span>{" "}
          <span className="pt-1">Previous</span>
        </div>
      </button>
    </div>
    <h1 className="font-bold text-sm text-center text-gray-700 w-4/6 pt-3 px-5 ">
      Gameweek 20 - Tue 26 Jan 17:30
    </h1>
    <div className="w-full mx-2 flex-1 svelte-1l8159u">
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
          </span>{" "}
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
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
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
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
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
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5 border-b border-gray-300  text-sm  flex justify-center mx-auto">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="mx-16 tracking-tight px-8 text-gray-600 whitespace-no-wrap text-center border py-5 border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 w-14 h-14 hidden sm:table-cell mr-3">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap text-right">
            Team 2
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
