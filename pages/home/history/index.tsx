import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../../components/MainLayout";

interface Team {
  name: string;
  winner_type: string;
  participants: string;
  start: string;
  id: number;
  code: number;
  type: string;
  status: string;
}

const Index = () => {
  const [openTab, setOpenTab] = useState(1);
  const [leagues, setLeagues] = useState([]);
  const { data: session }: any = useSession();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/user/leagues-history`,
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
        setLeagues(FavouritesFromApi);
      };
      getFavourites();
    }
  }, [session]);
  return (
    <MainLayout>
      <div className="container lg:max-w-7xl flex flex-wrap mx-auto px-auto py-2  lg:py-12 lg:px-10 ">
        <section className="container px-2 mx-auto">
          <div className="block relative flex items-center mb-5 ">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              value=""
              placeholder="Search for a league name"
              className="block w-full py-2 sm:py-3 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="bg-white rounded border shadow p-2 sm:p-10 pb-5  ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
              {/* <h1 className="font-inter text-sm sm:text-xl font-semibold text-[#3A3A3A] w-4/6 mb-5">
                  Today Oct 19, 2023
                </h1> */}

              {leagues.map((item: Team, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col p-1 border border-[#94A3B8] bg-white shadow-md hover:shodow-lg rounded-lg "
                >
                  <div className="flex flex-row items-center justify-between ">
                    <div className="flex justify-between justify-center space-x-2  sm:space-x-3  items-center">
                      <p className="rounded-lg font-[Oswald] text-2xl py-1 px-2  text-[#240155] bg-[#795DE029]">
                        {item.name.split(" ").map((i) => i.charAt(0))}
                      </p>

                      <div className="flex flex-col">
                        <div className="text-[#3A3A3A] font-normal leading-none">
                          {item.name}
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <h2 className="text-xs text-[#94A3B8] flex gap-x-2">
                            {item.type === (1 as any) ? (
                              <span className="flex items-center gap-x-0.5">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.30039 4.39995V3.94281C3.30039 2.42335 4.50468 1.19995 6.00039 1.19995C7.49611 1.19995 8.70039 2.42335 8.70039 3.94281V4.39995M3.30039 4.39995C2.80539 4.39995 2.40039 4.81138 2.40039 5.31424V9.88566C2.40039 10.3885 2.80539 10.7999 3.30039 10.7999H8.70039C9.19539 10.7999 9.60039 10.3885 9.60039 9.88566V5.31424C9.60039 4.81138 9.19539 4.39995 8.70039 4.39995M3.30039 4.39995H8.70039M6.00039 8.09995V6.89995"
                                    stroke="#795DE0"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                Private league
                              </span>
                            ) : (
                              "Public league"
                            )}{" "}
                            - {item.status}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={{
                        pathname: "/home/history/details",
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
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
