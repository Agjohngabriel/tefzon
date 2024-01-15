import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Loader } from "../../../components/base/Loader";
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
        setLoading(1);
        const res = await axios.get(
          `${process.env.BACKEND_URL}/public-leagues`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
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
        setLoading(0);
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
            Authorization: `Bearer ${session?.data.data.token}`,
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
    Router.push("/home/leagues");
  };

  return (
    <MainLayout>
      {/* {isLoading === 1 && <Loader />} */}

      <div className="container font-inter lg:max-w-6xl bg-[#fff] border-inherit rounded-b-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20   px-2 py-3  lg:px-20 ">
        <div className="space-y-1 sm:flex items-center gap-x-5  w-full">
          <button
            onClick={goBack}
            className="flex items-center gap-x-2 bg-[#F0F0F0] text-[#333333] active:bg-pink-600 font-bold uppercase text-xs  px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
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
          <div className="flex flex-col  mb-7 w-full">
            <h1 className="font-oswald text-xl sm:text-3xl font-bold  sm:w-4/6 ">
              Join public league
            </h1>
            <p className="text-xs text-[#808080]  sm:w-4/6 ">
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

        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 ">
          {leagues.map((item: Team, index) => (
            <div
              key={index}
              className="w-full flex flex-col p-1 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg mb-5"
            >
              <div className="flex flex-row items-center justify-between ">
                <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                  <p className="rounded-lg font-[Oswald] text-2xl  py-1 px-4  text-[#240155] bg-[#795DE029]">
                    {item.name.split(" ").map((i) => i.charAt(0))}
                  </p>

                  <div className="flex flex-col">
                    <div className="text-[#3A3A3A] font-normal leading-none">
                      {item.name}
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <h2 className="font-inter text-xs text-[#94A3B8]">
                        {item.entry_fee !== "0" ? "Free" : item.entry_fee}
                      </h2>
                    </div>
                  </div>
                </div>
                <Link
                  href={{
                    pathname: "/home/leagues/details",
                    query: { id: item.id },
                  }}
                >
                  <a className="flex-no-shrink py-2 text-sm  ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17L14.58 11.9992L10 7"
                        stroke="#94A3B8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinPublic;
