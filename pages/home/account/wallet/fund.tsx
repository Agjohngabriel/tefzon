import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../../../components/MainLayout";
import Swal from "sweetalert2";

interface Config {
  public_key: string;
  tx_ref: number;
  amount: number;
  currency: string;
  payment_options: string;
  customer: {
    email: string;
    phone_number: string;
    name: string;
  };
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
}
const Fund = () => {
  const { data: session }: any = useSession();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (session) {
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

      const fetchTransaction = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/get-transaction-history`,
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
      const getTransaction = async () => {
        const TransactionFromApi = await fetchTransaction();
        setTransactions(TransactionFromApi.data);
      };
      getTransaction();
    }
  }, [session]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handlePayment(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${process.env.BACKEND_URL}/pay`, amount, {
        headers: {
          Authorization: `Bearer ${session?.data.data.token}`,
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      setIsSubmitting(false);
      console.log(res.data.status);
      // window.location.href = `${res.data.link}`;
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data.errors;
      Swal.fire({
        title: `${errorMessage}`,
      });
      console.log(errorMessage);
      setError(true);
    }
  }

  return (
    <MainLayout>
      <div className="container py-2">
        <div className="md:flex">
          <div className="container lg:max-w-3xl h-3/4  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 sm:ml-4 lg:ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto">
            <div className="ml-3   flex items-center py-2 overflow-x-auto whitespace-nowrap">
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

              <Link href="/home/account/wallet" passHref>
                <a className="font-montserrat text-sm text-[#240155] dark:text-gray-200 ">
                  Wallet
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

              <h1 className="font-montserrat text-sm text-gray-600 dark:text-blue-400">
                Fund
              </h1>
            </div>
            <div className="flex flex-col  pt-5 space-y-4 max-w-2xl mx-2">
              <h1 className="font-montserrat text-2xl text-[#333333] w-4/6 ">
                Fund Wallet
              </h1>
              <p className="text-sm font-arcon text-black-150 opacity-60 mb-20 lg:w-5/6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
              <p className="text-sm  font-arcon text-black-150 opacity-60 mb-20 w-5/6">
                Transfer money to Tefzone wallet
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

              <form onSubmit={handlePayment} className="lg:w-2/3 md:w-4/5 pt-2">
                <div className="w-full xl:mx-2 flex-1 svelte-1l8159u">
                  <label className="text-black-150 opacity-60 font-arcon text-xs mb-2 ml-1">
                    Amount
                  </label>

                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <span className="text-black-150 font-arcon pl-2">(₦)</span>
                    <input
                      value={amount}
                      onInput={(e) => setAmount(e.currentTarget.value)}
                      required
                      className="px-2 appearance-none outline-none w-full text-sm text-gray-700 py-1"
                    />{" "}
                  </div>
                </div>

                <div className="w-full mx-2  py-5 flex-1 svelte-1l8159u">
                  <button
                    type="submit"
                    className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center sm:w-full py-2 rounded font-bold cursor-pointer 
                                opacity-50
										hover:bg-blue-500 
										bg-[#6E4BEC] text-gray-200
										duration-200 ease-in-out 
										transition"
                  >
                    <div className="font-montserrat text-sm px-20 lg:px-10">
                      Pay
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="container max-w-sm bg-[#6544DE]  border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5  mx-2 sm:ml-10  xl:ml-24 mt-10 mb-20  px-4 py-6 lg:px-5  w-auto">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full">
                  <div className="relative">
                    <i className="absolute fa fa-search text-gray-400 top-3 left-4"></i>
                    <input
                      value={search}
                      onInput={(e) => setSearch(e.currentTarget.value)}
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
                            {transactions.map((item, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-sm">Deposit</span>
                                <div className="flex-auto text-xs text-gray-400 my-1">
                                  <span className=" ">To: Tefzone wallet</span>
                                </div>
                              </div>
                            ))}
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

export default Fund;
