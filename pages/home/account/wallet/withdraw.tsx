import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../../../components/MainLayout";

const WalletWithdraw = () => {
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
            Authorization: `Bearer ${session?.data.token}`,
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
      console.log(DetailsFromApi);
      setDetails(DetailsFromApi);
    };
    getDetails();
  }, [session]);

  const account = details;
  return (
    <MainLayout>
      <div className="inline-flex rounded -ml-1">
        <Link href="/home" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2  ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/account/wallet" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Wallet
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/account/wallet/withdraw" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Withdraw
          </a>
        </Link>
      </div>
      <div className="container">
        <div className="md:flex">
          <div className="container max-w-3xl h-3/4  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 sm:ml-4 lg:ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto">
            <div className="flex flex-col  pt-10 space-y-4 max-w-2xl mx-2">
              <h1 className="font-montserrat text-2xl font-medium text-[#333333] w-4/6 ">
                Withdraw Money
              </h1>
              <p className="text-sm font-arcon text-black-150 opacity-60 mb-20 lg:w-5/6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in same form by
                injected.
              </p>
              <p className="text-sm  font-arcon text-black-150 opacity-60 mb-20 w-5/6">
                Withdraw money from Tefzone wallet
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
                      ₦ {account["balance" as any]}
                    </p>
                  </div>
                  <div className="pt-2 pr-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-light text-xs">
                          {account["account_name" as any]}
                        </p>
                        <p className="font-medium tracking-wider text-sm">
                          {account["account_no" as any]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 md:w-4/5 pt-2">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className=" font-arcon text-black-150 opacity-60 text-xs mb-2 ml-1">
                    To
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <select className="form-select w-full px-3 py-2 text-sm  font-arcon text-black-150 opacity-100 rounded-md focus:outline-none bg-white focus:border-indigo-500 transition-colors cursor-pointer border border-gray-100">
                      <option value="">Select Bank</option>
                      <option value={account["bank_name" as any]}>{account["bank_name" as any]}</option>
                    </select>
                  </div>
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-black-150 opacity-60 text-xs mb-2 ml-1">
                    Account number
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input className="p-1 px-2 appearance-none outline-none w-full text-sm text-gray-700" />{" "}
                  </div>
                </div>

                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-black-150 opacity-60 text-xs mb-2 ml-1">
                    Amount
                  </label>

                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <span className="font-arcon text-black-150 opacity-100 pl-2">
                      (₦)
                    </span>
                    <input className="px-2 appearance-none outline-none w-full text-sm text-gray-700 py-1" />{" "}
                  </div>
                </div>
                <div className="w-full mx-2  py-5 flex-1 svelte-1l8159u">
                  <button
                    className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center w-full sm:w-full py-2 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-[#6E4BEC] opacity-50 text-gray-200
										duration-200 ease-in-out 
										transition"
                  >
                    <div className="font-sans text-sm font-semibold px-10">
                      Withdraw Money
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-sm bg-[#6544DE]  border-inherit rounded-xl shadow-lg shadow-indigo-500/50  mx-2 md:w-3/5 ml-4 sm:ml-10  xl:ml-24 mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
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

export default WalletWithdraw;
