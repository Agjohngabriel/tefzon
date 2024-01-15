import MainLayout from "../../../components/MainLayout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

interface Manager {
  name: string;
  userName: string;
  IsOwner: string;
  id: number;
  points: number;
}

function Details() {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const { id: leagueId } = router.query;

  const [message, setMessage] = useState("");
  const { data: session }: any = useSession();
  const [details, setDetails] = useState([]);
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });

  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/user/league/${leagueId}`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );
        const response = await res.data.data;
        return response;
      };

      const getDetails = async () => {
        const DetailsFromApi = await fetchAll();
        setDetails(DetailsFromApi);
      };
      getDetails();

      const getManagers = async () => {
        const resp = await axios.post(
          `${process.env.BACKEND_URL}/get-players-in-league-with-total-point`,
          {
            id: leagueId,
          },
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
              accept: "application/json",
            },
          }
        );
        const respo = await resp.data;
        return respo;
      };

      const getManager = async () => {
        const ResponseFromApi = await getManagers();
        if (ResponseFromApi.statusCode === 200) {
          setManagers(ResponseFromApi.data);
        }
      };
      getManager();
    }
  }, [session, leagueId]);

  return (
    <MainLayout>
      <div className="py-2">
        <button
          onClick={() => Router.back()}
          className="lg:ml-20 flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-base font-inter px-4 py-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
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
          {details["name" as any]}
        </button>

        <div className="container font-inter lg:max-w-6xl bg-[#fff] border-inherit rounded-b-xl shadow-sm   sm:ml-5 lg:ml-20   px-2 py-3  lg:px-20 ">
          <div className="relative md:rounded-r-2xl py-4 ">
            <div className="flex gap-x-2 items-center">
              <img src="/img/noto_crown.svg" alt="" />
              <p className="font-inter text-xs sm:text-base  text-[#DB9816]  text-left">
                Leaderboard
              </p>
            </div>

            <table className="w-full mt-2">
              <thead className="w-1/2 ">
                <tr>
                  <th
                    className="py-2  text-left text-xs sm:text-sm font-inter text-gray-900"
                    title="position"
                  >
                    Rank
                  </th>
                  <th
                    className="p-1 text-left w-2/3 text-xs sm:text-sm font-inter text-gray-900"
                    title="club"
                  >
                    Managers
                  </th>

                  <th
                    className="p-1 text-center text-xs sm:text-sm md:pr-4 font-inter text-black-0 "
                    title="points"
                  >
                    Total Points
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-3">
                {managers.map((item: Manager, index) => (
                  <tr
                    key={index}
                    className="py-1 cursor-pointer bg-[#F8F8F8] rounded-xl"
                  >
                    <td className="p-1 flex items-center text-xs sm:text-sm font-normal pl-3 sm:pl-5">
                      {index + 1}
                      <span className=" align-middle  material-icons text-3xl sm:text-5xl text-green ">
                        arrow_drop_up
                      </span>
                    </td>
                    <td className="p-1 text-left ">
                      <Link
                        href={{
                          pathname: "/home/history/statistics",
                          query: { id: item.id, leagueId },
                        }}
                      >
                        <a
                          tabIndex={0}
                          className="focus:outline-none text-xs sm:text-sm font-inter leading-5 "
                        >
                          <div className="flex items-center gap-x-2">
                            <p className="rounded-lg font-[Oswald] text-2xl py-1 px-2.5  text-[#240155] bg-[#795DE029]">
                              {item.name.split(" ").map((i) => i.charAt(0))}
                            </p>
                            <div>
                              <div className="text-[#240155] font-semibold">
                                @{item.userName}
                              </div>
                              <div> {item.name} </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </td>
                    <td className="p-1 text-center text-xs sm:text-sm font-arcon text-black-0">
                      {item.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Details;
