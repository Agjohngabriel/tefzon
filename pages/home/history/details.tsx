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
  const [isLoading, setLoading] = useState(0);
  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/user/league/${leagueId}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
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
              Authorization: `Bearer ${session?.user.token}`,
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
        <div className="bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 rounded-3xl border shadow-2xl p-2 sm:p-10  max-w-4xl lg:ml-20 mt-10 mb-20 ">
          <div className="relative md:rounded-r-2xl ">
            <button
              onClick={() => Router.back()}
              className="flex items-center gap-x-2 bg-[#F0F0F0] text-[#333333] active:bg-pink-600 font-bold uppercase text-xs px-4 mb-5 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
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
            <h1 className="font-Montserrat font-semibold text-xl sm:text-4xl text-[#000] mt-2 mx-auto text-left">
              {details["name" as any]}
            </h1>
            <p className="font-Montserrat text-xs sm:text-base  text-[#808080] sm:pb-5 mx-auto text-left">
              Last updated:{" "}
              <span className="w-[1.2rem] overflow-hidden">
                {details["start" as any]}
              </span>{" "}
              - {details["start" as any]}
            </p>
            <table className="w-full mt-2">
              <thead className="w-1/2 bg-gradient-to-r from-gray-300 to-[#EFEFEF]">
                <tr>
                  <th
                    className="py-2 pl-5 text-left text-sm font-montserrat text-gray-900"
                    title="position"
                  >
                    Rank
                  </th>
                  <th
                    className="p-1 text-left w-2/3 text-sm font-montserrat text-gray-900"
                    title="club"
                  >
                    Managers
                  </th>

                  <th
                    className="p-1 text-center text-sm pr-4 font-montserrat text-black-0"
                    title="points"
                  >
                    Total Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {managers.map((item: Manager, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-300 py-1 cursor-pointer ${
                      item.IsOwner === (1 as any) ? "bg-[#9783E3]/60" : ""
                    }`}
                  >
                    <td className="p-1 text-sm font-normal pl-5">
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
                          className="focus:outline-none text-sm font-montserrat leading-5 "
                        >
                          <div className="text-[#240155] font-bold">
                            {item.name}
                          </div>
                          <div> {item.userName}</div>
                        </a>
                      </Link>
                    </td>
                    <td className="p-1 text-center text-sm font-arcon text-black-0">
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
