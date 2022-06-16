import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const TeamStats = () => {
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
          Statistics
        </h1>
      </div>


        <div className="container mx-auto px-4 sm:px-8 bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 shadow-lg shadow-indigo-500/50">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Team
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        M.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        W.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        D.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        L.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        NW
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        G.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                        A.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">
                        +/-.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Pts.
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden xl:table-cell">
                        L1
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden xl:table-cell">
                        L2
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden xl:table-cell">
                        L3
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden xl:table-cell">
                        L4
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden xl:table-cell">
                        L5
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">1º</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          10
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          8
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          2
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          18
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden lg:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          7
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          11
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          26
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          L
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          D
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden xl:table-cell">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          W
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default TeamStats;
