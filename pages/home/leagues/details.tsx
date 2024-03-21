import MainLayout from "../../../components/MainLayout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
// import FormattedDate from "../../../components/FormattedDate";
interface Manager {
  name: string;
  userName: string;
  IsOwner: string;
  id: number;
  date: string;
}
import { format, parseISO } from "date-fns";

const FormattedDate = ({ date }: any) => {
  const formatDate = (dateString: string) => {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, "MMM d yyyy | h:mmaaa");
  };

  return <span>{formatDate(date)}</span>;
};

function Details() {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const { id: leaugeId } = router.query;

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
          `${process.env.BACKEND_URL}/user/league/${leaugeId}`,
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
    }
  }, [session, leaugeId]);

  const joinLeague = async () => {
    try {
      setLoading(1);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/join/public/league`,

        {
          params: {
            id: leaugeId,
            useSquad: true,
          },
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      const response = await res.data;
      setMessage(response.message);
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
          id: leaugeId,
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
  console.log(details["created_at" as any]);
  return (
    <MainLayout>
      <div className="p-2 lg:ml-20">
        <button
          onClick={() => Router.back()}
          className="flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-sm font-montserrat px-4 mb-5 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
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
        <div className=" container max-w-2xl bg-[#fff] border-inherit rounded-xl shadow-2xl shadow-indigo-500/50  mt-5 mb-20 p-2 sm:p-6 w-auto">
          <div className=" w-full">
            <div className="mb-5 p-6 border rounded-lg">
              {error === true && (
                <div className="bg-red-800 text-center rounded shadow-md my-3">
                  <h1 className="font-montserrat text-base py-2 text-black-150  ">
                    {errorMsg.message}
                  </h1>
                </div>
              )}
              {message && (
                <div className="bg-indigo-400   text-center rounded shadow-md my-3">
                  <h1 className="font-montserrat text-base py-2 text-black-150  ">
                    {message}
                  </h1>
                </div>
              )}

              <div className="items-center py-3">
                <p className="font-inter text-xs px-1 text-[#94A3B8] ">
                  DATE CREATED
                </p>
                <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                  {details["created_at" as any] === undefined ? (
                    ""
                  ) : (
                    <FormattedDate date={details["created_at" as any]} />
                  )}
                </h1>
              </div>

              <div className="items-center py-">
                <p className="font-inter text-xs px-1 text-[#94A3B8] ">
                  ENTRY FEE:
                </p>
                <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                  ₦ {details["entry_fee" as any]}
                </h1>
                <p className="font-inter text-xs px-1 text-[#808080] "></p>
              </div>
              <div className="items-center py-3">
                <p className="font-inter text-xs px-1 text-[#808080] ">
                  Number of Managers:
                </p>
                <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                  {details["participants" as any]}
                </h1>
              </div>
              <div className="items-center py-3">
                <p className="font-inter text-xs px-1 text-[#808080] ">
                  Prize Distribution:
                </p>
                <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                  {details["winner_type" as any] === "single" &&
                    "1 winner (1st - 100%)"}
                  {details["winner_type" as any] === "double" &&
                    " 2 winners (1st - 60%, 2nd - 40%)"}
                  {details["winner_type" as any] === "triple" &&
                    "3 winners (1st - 60%, 2nd - 30%, 3rd - 10%)"}
                </h1>
              </div>
              <div className="flex gap-x-10">
                <div className=" items-center py-3">
                  <p className="font-inter text-xs px-1    text-[#808080] ">
                    START DATE
                  </p>
                  <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                    {details["start" as any] === undefined ? (
                      ""
                    ) : (
                      <FormattedDate date={details["start" as any]} />
                    )}
                  </h1>
                </div>
                <div className="items-center py-3">
                  <p className="font-inter text-xs px-1    text-[#808080] ">
                    END DATE
                  </p>
                  <h1 className="font-montserrat px-1 text-sm    text-[#3A3A3A]  ">
                    {details["end" as any] === undefined ? (
                      ""
                    ) : (
                      <FormattedDate date={details["end" as any]} />
                    )}
                  </h1>
                </div>
              </div>
            </div>

            <div>
              {details["allow_view_participants" as any] === 0 ? (
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
                  className="w-full px-5 my-5  focus:outline-none flex justify-between items-center py-4 rounded  cursor-pointer	hover:bg-[#F8F8F0] 
									border	border-[#F8F8F8] text-[#795DE0]	duration-200 ease-in-out transition"
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
                  onClick={() => getManagers()}
                  className="w-full px-5 my-5  focus:outline-none flex justify-between items-center py-4 rounded  cursor-pointer	hover:bg-[#F8F8F0] 
									border	border-[#F8F8F8] text-[#795DE0]	duration-200 ease-in-out transition"
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
                className="w-full my-5 shadow-sm shadow-indigo-500/50 hover:scale-90 focus:outline-none flex  justify-center lg:px-36 py-5 rounded  cursor-pointer	hover:bg-blue-500 
										bg-violet-500 text-gray-200	duration-200 ease-in-out transition"
              >
                <div className="font-inter text-xs font-medium px-1">
                  Join League
                </div>
              </button>
            </div>
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
                <div className=" flex justify-between  py-2">
                  <p className="text-2xl font-oswald text-[#240155]">
                    Managers
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
}

export default Details;
