import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  created_at: string;
  code: number;
  entry_fee: string;
}

const JoinPublic = () => {
  const [leagues, setLeagues] = useState([]);
  const [message, setMessage] = useState("");
  const { data: session }: any = useSession();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });
  const [isLoading, setLoading] = useState(0);
  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/public-leagues`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
              "content-type": "application/json",
            },
          }
        );
        const response = await res.data.data;
        console.log(response);
        return response;
      };

      const getFavourites = async () => {
        const FavouritesFromApi = await fetchAll();
        setLeagues(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);

  const joinLeague = async ({ id, code }: any) => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/join/public/league/${id}`,

        {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      console.log(response);

      setMessage(response.message);
      // getFavourites();
    } catch (e: any) {
      setLoading(0);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(true);
      setErrorMsg(errorMessage);
    }
  };

  const goBack = () => {
    Router.push("/home/leagues/join");
  };

  return (
    <MainLayout>
      <div className="py-4">
        <div className="max-w-sm sm:max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/0 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-5 sm:px-10 py-5 my-5 items-center justify-center w-auto">
          <button
            onClick={goBack}
            className="flex items-center gap-x-2 bg-[#F0F0F0] text-[#333333] active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-5 ease-linear transition-all duration-150"
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
                  fill="#333333"
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
            Back
          </button>
          <div className="   py-1 px-1 w-full">
            <div className="flex flex-col space-y-4 mb-5">
              <h1 className=" sm:mt-5 text-xl sm:text-3xl font-bold  w-4/6 ">
                Join public league
              </h1>
              <p className="text-xs text-[#808080]  w-4/6 ">
                Play in public leagues and compete with other fans at Tefzon
              </p>
              {error === true && (
                <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                  <h1 className=" text-lg py-2 text-black-150  ">
                    {errorMsg.message}
                  </h1>
                </div>
              )}
              {message && (
                <div className="bg-indigo-400 w-1/2 text-center rounded shadow-md">
                  <h1 className=" text-lg py-2 text-black-150  ">{message}</h1>
                </div>
              )}
            </div>
          </div>
          <div className="flex font-inter">
            <div className="w-full sm:max-w-4xl ">
              {/* <h1 className=" text-[1rem]  text-black-0 w-4/6 tracking-tighter">
                List of live leagues
              </h1> */}
              <div className=" md:rounded-r-2xl  ">
                <table className="w-full">
                  <thead className="w-full bg-gradient-to-r from-[#F0F0F0] bg-[#F0F0F0">
                    <tr>
                      <th
                        className="p-2 text-left text-sm  text-black-0"
                        title="position"
                      >
                        League Name
                      </th>
                      <th
                        className="p-1 text-left text-sm  text-black-0"
                        title="club"
                      >
                        Entry Fee
                      </th>
                      <th
                        className="p-1 text-center text-sm  text-black-0"
                        title="played"
                      >
                        No. of Managers
                      </th>
                      <th
                        className="p-1 text-center  text-sm   text-black-0"
                        title="Goal Different"
                      >
                        Date Created
                      </th>
                      <th
                        className="p-1 text-center text-sm pr-4  text-black-0"
                        title="points"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagues.map((item: Team, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 py-3 "
                      >
                        <td className="pl-4 text-sm text-[#222222CC] font-normal">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-sm  leading-5 "
                          >
                            {item.name}
                          </p>
                        </td>
                        <td className="p-1 text-left ">
                          <p
                            tabIndex={0}
                            className="focus:outline-none text-sm text-[#222222CC] leading-5 "
                          >
                            {item.entry_fee !== "0" ? "Free" : item.entry_fee}
                          </p>
                        </td>
                        <td className="p-1 text-center text-sm text-[#222222CC]">
                          {item.participants}
                        </td>
                        <td className="p-1 text-center text-sm text-[#222222CC]">
                          {item.created_at}
                        </td>
                        <td className="p-4 text-center text-sm text-[#222222CC]">
                          
                          <Link
                            href={{
                              pathname: "/home/leagues/details",
                              query: { id: item.id },
                            }}
                          >
                            <a className="flex-no-shrink border border-[#6E4BEC] px-5 ml-4 py-2  text-sm shadow-sm hover:shadow-lg font-medium tracking-wider  text-[#6E4BEC] rounded-lg">
                              Join League
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* <button
                type="button"
                className="flex items-center  text-sm   rounded  focus:outline-none"
              >
                See more
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPublic;
