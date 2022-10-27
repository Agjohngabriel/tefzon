import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainLayout from "../../../../components/MainLayout";

const Index = () => {
  const { data: session }: any = useSession();
  const [account, setAccount] = useState({
    balance: "",
  });
  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(
        `${process.env.BASE_URL}get-account-details`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await res.data;
      console.log(response);
      return response;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setAccount(FavouritesFromApi);
    };
    getFavourites();
  }, [session]);
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
      </div>
      <div className="container">
        <div className="md:flex">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
            <div
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              style={{
                ["background-image" as any]:
                  "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
              }}
            >
              <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div>
                  <h3 className="text-center text-white text-lg">
                    Total Balance
                  </h3>
                  <h3 className="text-center text-white text-3xl mt-2 font-bold">
                    RM 27,580
                  </h3>
                  <div className="flex space-x-4 mt-4">
                    <button
                      className="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Transfer
                    </button>
                    <button
                      className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline 
                                   focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              style={{
                ["background-image" as any]:
                  "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
              }}
            >
              <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                <div>
                  <div className="text-white text-lg flex space-x-2 items-center">
                    <div className="bg-white rounded-md p-2 flex items-center">
                      <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                    </div>
                    <p>Finished Appt</p>
                  </div>
                  <h3 className="text-white text-3xl mt-2 font-bold">120</h3>
                  <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                    4 not confirmed
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              style={{
                ["background-image" as any]:
                  "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
              }}
            >
              <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                <div>
                  <div className="text-white text-lg flex space-x-2 items-center">
                    <div className="bg-white rounded-md p-2 flex items-center">
                      <i className="fas fa-clipboard-check fa-sm text-blue-800"></i>
                    </div>
                    <p>Finished Appt</p>
                  </div>
                  <h3 className="text-white text-3xl mt-2 font-bold">72</h3>
                  <h3 className="text-white text-lg mt-2 ">
                    3.4%{" "}
                    <span className="font-semibold text-blue-200">
                      vs last month
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container lg:max-w-3xl h-3/4  bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#AEBEDF]/100 border-inherit rounded-xl shadow-lg shadow-indigo-500/50 md:w-3/5 sm:ml-4 lg:ml-24 mt-10 mb-20  px-2 py-6 lg:px-10  w-auto">
            <div className="flex flex-col  pt-10 space-y-4 max-w-2xl mx-2">
              <h1 className="font-montserrat text-2xl text-[#333333] w-4/6 ">
                Wallet
              </h1>
              <p className="text-sm font-arcon text-black-150 opacity-60 mb-20 lg:w-5/6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in same form by
                injected.
              </p>

              <div className="sm:w-3/5 md:w-full lg:w-4/5  xl:w-3/5 h-48  bg-[#5F5999] rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110">
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
                      ₦{account.balance}
                    </p>
                  </div>
                  {/* <div className="pt-8 pr-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-arcon opacity-50 text-xs mb-3">
                          Number
                        </p>
                        <p className="font-montserrat opacity-80 tracking-wider text-sm">
                          1234 5678 9012 9012
                        </p>
                      </div>
                    </div>
                  </div> */}
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
                      className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center mt-2 xl:px-20 py-4 rounded md:mx-2 xl:mx-0 font-bold cursor-pointer 
                                
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
              <div className="  px-1  ">
                <div className="bg-gray-100 rounded-sm border shadow-xl p-5 w-full pb-10 ">
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-300 py-3">
                    <div className="flex items-start justify-between w-full ">
                      <div className=" w-full">
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-sm font-montserrat leading-5 text-black-150 opacity-90"
                        >
                          Deposite
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal font-arcon text-black-150 opacity-60 pt-1"
                        >
                          To: Tefzone wallet
                        </p>
                      </div>

                      <div className=" pl-20 lg:pl-24 w-full text-right">
                        <p
                          tabIndex={0}
                          className="focus:outline-none  text-sm leading-5 font-arcon text-black-150 opacity-90"
                        >
                          ₦5,000
                        </p>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-xs leading-normal pt-1 font-arcon text-black-150 opacity-60"
                        >
                          10/08/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex items-center text-[#4D44B5] text-md font-montserrat rounded  py-5 focus:outline-none"
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
