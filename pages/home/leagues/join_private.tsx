import MainLayout from "../../../components/MainLayout";

const JoinPrivate = () => {
  return (
    <MainLayout>
      <div className=" container max-w-6xl bg-gradient-to-br from-[##FFFFFF]/100 via-[##F2F6FF]/50 to-[##E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
        <div className="   py-1 px-1 w-full">
          <div className="flex flex-col space-y-4 mb-5">
            <h1 className="font-montserrat text-2xl text-black-150 w-4/6 ">
              Join private league
            </h1>

            <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
              <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                eRROR 502: Please enter the right league code
              </h1>
            </div>
            <div className="flex flex-col md:flex-row pt-2">
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <label className="text-black-150 font-montserrat text-[1rem] mb-2 ml-1">
                  Search league to join
                </label>
                <div className=" my-2  flex border border-gray-200 rounded svelte-1l8159u">
                  <form className=" flex w-full">
                    <input
                      className="p-1 px-2 bg-[#E7EEFB] border border-[#888B8B] appearance-none outline-none w-full font-sm text-xs text-black-150 font-arcon"
                      placeholder="Live league"
                    />
                    <button className="px-8 rounded-r bg-[#6E4BEC] opacity-50  text-gray-100 font-montserrat p-2 border-indigo-500">
                      Search
                    </button>
                  </form>
                </div>
              </div>

              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <label className="text-black-150 font-montserrat text-[1rem] mb-2 ml-1">
                  Join league with a code
                </label>
                <div className=" my-2  flex border border-gray-200 rounded svelte-1l8159u">
                  <form className=" flex w-full">
                    <input
                      className="p-1 px-2 bg-[#E7EEFB] border border-[#888B8B] appearance-none outline-none w-full font-sm text-xs text-black-150 font-arcon"
                      placeholder="Enter league code"
                    />
                    <button className="px-1 rounded-r bg-[#6E4BEC] opacity-50  text-gray-100 font-montserrat p-2 border-indigo-500 w-1/2">
                      Join League
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className=" w-3/4 ">
            <h1 className="font-montserrat text-[1rem]  text-black-0 w-4/6 tracking-tighter">
              List of live leagues
            </h1>

            <div className="-ml-6 relative overflow-x-auto  sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                  <tr className=" dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-arcon text-black-150 opacity-80 "
                    >
                      Gameweek24"
                    </th>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Private
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      Paid
                    </td>
                    <td className="px-6 py-4 font-arcon text-black-150 opacity-80">
                      12 August, 2021
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="##"
                        className="font-montserrat text-[#240155] dark:text-indigo-500 hover:underline"
                      >
                        Join League
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              type="button"
              className="flex items-center font-montserrat text-sm  text-[#240155] rounded  focus:outline-none"
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <div className="container ml-24 max-w-6xl">
        <hr className="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

        <div className="w-full flex mb-5">
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

export default JoinPrivate;
