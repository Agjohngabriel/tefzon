import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/wallet" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-24 mt-10 px-2 ">
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
        <div className="flex">
          <div className="container flex max-w-4xl h-3/4 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50  ml-20 mt-10 mb-20  px-2 py-6 lg:px-10  ">
            <div className="flex flex-col  pt-10 space-y-4 w-full mx-2">
              <h1 className="font-montserrat text-3xl text-black-0 mb-5 ">
                League 1842968
              </h1>
              <p className="text-xs text-black-0 font-arcon text-center mt-24 w-full py-4 bg-[#E1CEFF]">
                League scoring started in the Gameweek 24.
              </p>

              <div className="w-full mx-2  flex svelte-1l8159u">
                <h1 className="font-montserrat text-xl text-black-0 mb-5  mt-3">
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
                      <span className=" align-middle  material-icons text-5xl text-green ">
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
                      1
                      <span className=" align-middle  material-icons text-5xl text-green ">
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
                      {" "}
                      56
                    </td>
                    <td className="p-2 text-center font-arcon text-black-0">
                      316
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 py-3">
                    <td className="p-2 text-sm font-normal">
                      1
                      <span className=" align-middle  material-icons text-5xl text-green ">
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
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full mx-4 flex-1 svelte-1l8159u pt-10">
            <button
              className="text-base  hover:scale-110 focus:outline-none flex justify-center px-5 py-2 rounded font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-stone-200 text-gray-700
                                 duration-200 ease-in-out 
                                 transition"
            >
              <div className="flex font-sans text-xs font-montserrat px-2">
                <span className="pt-1 text-[#060606] opacity-60">
                  {" "}
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

      <div className="container mb-5">
        <hr className="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

        <div className="ml-16 max-w-6xl flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
