import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainLayout from "../../../../components/MainLayout";

const Index = () => {
  const { data: session }: any = useSession();
  // const [account, setAccount] = useState({
  //   balance: "",
  // });
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const respo = await axios.get(
        `${process.env.BACKEND_URL}/get-account-details`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await respo.data;
      setIsLoading(false);
      return response;
    };
    const getDetails = async () => {
      const DetailsFromApi = await fetchDetails();
      setDetails(DetailsFromApi.data);
    };
    getDetails();
  }, [session]);

  return (
    <MainLayout>
      <div className="container">
        <div className="md:flex">
          <div className="container lg:max-w-3xl h-3/4  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#AEBEDF]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 sm:ml-4 lg:ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto">
            <div className="ml-3 flex items-center py-2 overflow-x-auto whitespace-nowrap">
              <Link href="/home" passHref>
                <a className="text-[#240155] dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </a>
              </Link>
           
              <span className="mx-2 text-[#8139E6] dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <h1 className="text-gray-600 dark:text-blue-400">Wallet</h1>
            </div>
            <div className="flex flex-col  pt-5 space-y-4 max-w-2xl mx-2">
              <h1 className="font-montserrat text-2xl text-[#333333] w-4/6 ">
                Wallet
              </h1>
              <p className="text-sm font-arcon text-black-150 opacity-60 mb-20 lg:w-5/6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in same form by
                injected.
              </p>

              <div className="sm:w-3/5 md:w-full lg:w-4/5  xl:w-3/5 h-40   bg-[#5F5999] rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110">
                <img
                  className="relative object-cover w-full h-full rounded-xl"
                  src="/img/cardbg.png"
                  alt="cardbg"
                />

                <div className="w-full px-8 absolute top-8">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-arcon text-sm">Tefzone Wallet</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-montserrat tracking-more-wider text-2xl">
                      ₦ {details["balance" as any]} .00
                    </p>
                  </div>
                  <div className="pt-2 pr-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-light text-xs">
                          {details["account_name" as any]}
                        </p>
                        <p className="font-medium tracking-wider text-sm">
                          {details["account_no" as any]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:flex flex-col md:flex-row py-10">
                <div className="w-full xl:mx-2 flex-1 svelte-1l8159u">
                  <Link href="/home/account/wallet/fund">
                    <a
                      className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center mt-2 xl-px-20  py-4 rounded md:mx-2 lg-mx-0 font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#6E4BEC] opacity-50 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <span className="font-montserrat text-sm font-semibold">
                        Fund Wallet
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="w-full lg:mx-2 flex-1 svelte-1l8159u">
                  <Link href="/home/account/wallet/withdraw">
                    <a
                      className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center mt-2 lg:px-16 py-4 rounded md:mx-2 xl:mx-0 font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#6E4BEC] opacity-50 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                    >
                      <span className="font-montserrat text-sm font-semibold">
                        Withdraw Money
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-sm bg-[#6544DE]  border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 mx-2 sm:ml-10  xl:ml-24 mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full">
                  <div className="relative">
                    <i className="absolute fa fa-search text-gray-400 top-3 left-4"></i>
                    <input
                      type="text"
                      className="bg-gray-100 h-10 w-full font-arcon text-[#522593] text-xs px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                      name="sesrch"
                      placeholder="search transantions"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  ">
              <h1 className="font-montserrat text-2xl  text-white  mt-5 py-4 ">
                Recent Transactions
              </h1>
              <div className="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
                <div className="flex flex-col">
                  <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                    <div className="flex-none sm:flex">
                      <div className="flex-auto justify-evenly">
                        <div className="border-b border-dashed border-b-2 my-3"></div>
                        {/* Transaction History */}
                        <div className="details">
                          <div className="flex items-center py-1 px-2 text-sm">
                            <div className="flex flex-col">
                              <span className="text-sm">Deposit</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" ">To: Tefzone wallet</span>
                              </div>
                            </div>
                            <div className="flex flex-col ml-auto text-right">
                              <span className="text-sm">₦5,000</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" "> 10/08/2021</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-dashed border-b-2 my-1 ">
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -left-1.5"></div>
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -right-1.5"></div>
                          </div>
                        </div>

                        <div className="details">
                          <div className="flex items-center py-1 px-2 text-sm">
                            <div className="flex flex-col">
                              <span className="text-sm">Deposit</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" ">To: Tefzone wallet</span>
                              </div>
                            </div>
                            <div className="flex flex-col ml-auto text-right">
                              <span className="text-sm">₦5,000</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" "> 10/08/2021</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-dashed border-b-2 my-1 ">
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -left-1.5"></div>
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -right-1.5"></div>
                          </div>
                        </div>
                        <div className="details">
                          <div className="flex items-center py-1 px-2 text-sm">
                            <div className="flex flex-col">
                              <span className="text-sm">Deposit</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" ">To: Tefzone wallet</span>
                              </div>
                            </div>
                            <div className="flex flex-col ml-auto text-right">
                              <span className="text-sm">₦5,000</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" "> 10/08/2021</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-dashed border-b-2 my-1 ">
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -left-1.5"></div>
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -right-1.5"></div>
                          </div>
                        </div>
                        <div className="details">
                          <div className="flex items-center py-1 px-2 text-sm">
                            <div className="flex flex-col">
                              <span className="text-sm">Deposit</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" ">To: Tefzone wallet</span>
                              </div>
                            </div>
                            <div className="flex flex-col ml-auto text-right">
                              <span className="text-sm">₦5,000</span>
                              <div className="flex-auto text-xs text-gray-400 my-1">
                                <span className=" "> 10/08/2021</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-dashed border-b-2 my-1 ">
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -left-1.5"></div>
                            <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -right-1.5"></div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="flex items-center text-[#4D44B5] text-md font-medium font-montserrat rounded  py-5 focus:outline-none"
                        >
                          Load more
                          <span className="ml-2 material-icons hover:text-blue-500">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
