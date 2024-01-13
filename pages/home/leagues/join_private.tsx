import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Loader } from "../../../components/base/Loader";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  code: number;
  entry_fee: string;
  created_at: string;
}

interface Manager {
  name: string;
  userName: string;
  IsOwner: string;
  id: number;
}

const JoinPrivate = () => {
  const [league, setLeague] = useState([]);
  const [managers, setManagers] = useState([]);
  const [modal, setModal] = useState(false);
  const { data: session }: any = useSession();
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });
  const [isLoading, setLoading] = useState(0);

  async function handleGetLeague(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setLoading(1);
    try {
      setLoading(1);
      const res = await axios.post(
        `${process.env.BACKEND_URL}/get-league-by-code`,
        {
          code,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
      setLeague(response.data);
      setLoading(0);

      // if (response.statusCode === 200) {
      //   console.log(response.data);
      // }
      // getDetails();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  }

  const joinLeague = async () => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/join/public/league/${league["id" as any]}`,

        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
      setLoading(0);
      // getDetails();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  };

  const getManagers = async () => {
    try {
      setLoading(1);

      const res = await axios.post(
        `${process.env.BACKEND_URL}/get-players-in-league`,
        {
          id: league["id" as any],
        },
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
      setManagers(response.data);
      setLoading(0);
      if (response.statusCode === 200) {
        setModal(true);
      }
      // getDetails();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  };

  const goBack = () => {
    Router.push("/home/leagues");
  };
  return (
    <MainLayout>
      {isLoading === 1 && <Loader />}
      <button
        onClick={() => Router.back()}
        className="lg:ml-20 flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-base font-montserrat px-4 py-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_432_19217)">
            <path
              d="M-3.35782e-07 12.0028L3.84095 15.8438L3.84095 12.7588L24 12.7588L24 11.2468L3.84095 11.2468L3.84095 8.16179L-3.35782e-07 12.0028Z"
              fill="CurrentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_432_19217">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(24 24) rotate(180)"
              />
            </clipPath>
          </defs>
        </svg>
        Join private league
      </button>

      <div className="container font-montserrat lg:max-w-6xl bg-[#fff] border-inherit rounded-b-xl shadow-sm   sm:ml-5 lg:ml-20   px-2 py-3  lg:px-20 ">
       
        <div className="   py-1 px-1 w-full">
          <div className="flex flex-col space-y-4 mb-5">
            {error === true && (
              <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                  {errorMsg.message}
                </h1>
              </div>
            )}
            {message && (
              <div className="bg-indigo-400 w-1/2 text-center rounded shadow-md">
                <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                  {message}
                </h1>
              </div>
            )}
            <div className="flex flex-col md:flex-row pt-2">
              <div className="w-full  flex-1 svelte-1l8159u">
                <label className="text-sm text-[#808080] font-montserrat  mb-2 ">
                  Enter the invitational league code provided by the league
                  creator.
                </label>
                <div className=" my-2  flex  svelte-1l8159u">
                  <form
                    onSubmit={handleGetLeague}
                    className="w-full md:w-[32rem] "
                  >
                    <div className="relative w-full">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        value={code}
                        onInput={(e) => setCode(e.currentTarget.value)}
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter league code"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Load League
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {league["id" as any] && (
              <div className="mb-5  border max-w-lg p-4">
                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    League Name:
                  </h1>
                  <p className="font-inter text-xs px-1 text-[#808080] ">
                    {league["name" as any]}
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    Entry Fee:
                  </h1>
                  <p className="font-inter text-xs px-1 text-[#808080] ">
                    ₦ {league["entry_fee" as any]}
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    Number of Managers:
                  </h1>
                  <p className="font-inter text-xs px-1 text-[#808080] ">
                    {league["participants" as any]}
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    Start Date:
                  </h1>
                  <p className="font-inter text-xs px-1    text-[#808080] ">
                    {league["start" as any]}
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    End Date:
                  </h1>
                  <p className="font-inter text-xs px-1    text-[#808080] ">
                    {league["end" as any]}
                  </p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h1 className="font-montserrat px-1 text-sm   font-semibold text-[#3A3A3A]  ">
                    Prize Distribution:
                  </h1>
                  <p className="font-inter text-xs px-1    text-[#808080] ">
                    {league["name" as any]}
                  </p>
                </div>

                {league["allow_view_participants" as any] === 0 ? (
                  <button
                    onClick={(e) => {
                      Swal.fire({
                        text: "Not allowed to view Managers in League",
                        showClass: {
                          popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `,
                        },
                        hideClass: {
                          popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `,
                        },
                      });
                    }}
                    className="my-5 shadow-sm shadow-indigo-500/50 hover:scale-110 focus:outline-none flex  items-center lg:px-32 py-4 rounded  cursor-pointer	hover:bg-[#F8F8F0] 
										bg-[#F8F8F8] text-[#795DE0]	duration-200 ease-in-out transition"
                  >
                    <div className="font-inter text-xs font-medium ">
                      View managers
                    </div>{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17L14.58 11.9992L10 7"
                        stroke="#795DE0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setModal(true);
                    // }}
                    onClick={() => getManagers()}
                    className="my-5 shadow-sm shadow-indigo-500/50 hover:scale-110 focus:outline-none flex  items-center lg:px-32 py-4 rounded  cursor-pointer	hover:bg-[#F8F8F0] 
										bg-[#F8F8F8] text-[#795DE0]	duration-200 ease-in-out transition"
                  >
                    <div className="font-inter text-xs font-medium ">
                      View managers
                    </div>{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17L14.58 11.9992L10 7"
                        stroke="#795DE0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                <button
                  onClick={() => joinLeague()}
                  className="my-5 shadow-sm shadow-indigo-500/50 hover:scale-110 focus:outline-none flex  justify-center lg:px-36 py-5 rounded  cursor-pointer	hover:bg-blue-500 
										bg-violet-500 text-gray-200	duration-200 ease-in-out transition"
                >
                  <div className="font-inter text-xs font-medium px-1">
                    Join League
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 font-Montserrat ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-md sm:p-6  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2">
                  <p className="text-lg  text-[#3A3A3A] ">
                    {managers.length} Managers - 1 winner
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="default-modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="">
                {managers.map((item: Manager, index) => (
                  <div
                    key={index}
                    className="flex  space-x-3  sm:space-x-4  items-center"
                  >
                    <p className="rounded-lg font-[Oswald] text-2xl px-4 py-2  text-[#240155] bg-[#795DE029]">
                      {item.name.split(" ").map((i) => i.charAt(0))}
                    </p>

                    <div className="text-left ">
                      <div className="text-[#3A3A3A] font-normal pb-1 leading-none">
                        {item.userName}

                        {item.IsOwner === (1 as any) && (
                          <span className="bg-[#795DE029] text-[#795DE0] font-regular rounded ml-2 text-sm p-1">
                            Creator
                          </span>
                        )}
                      </div>
                      <h2 className="text-xs text-[#94A3B8]">{item.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default JoinPrivate;
