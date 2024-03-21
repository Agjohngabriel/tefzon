import { useState } from "react";
import MainLayout from "../../../components/MainLayout";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import Router from "next/router";

const CreatePrivateLeague = () => {
  const { data: session }: any = useSession();
  const [name, setName] = useState("");
  const [type, setType] = useState("1");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [fee, setFee] = useState("");
  const [winner, setWinner] = useState("single");
  const [enabled, setEnabled] = useState(false);
  const [pat, setPat] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MySwal = withReactContent(Swal);
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const [code, setCode] = useState("");
  const endDateTime = end + "T" + endTime;
  const startDateTime = start + "T" + startTime;

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/leagues`,
        {
          name: name,
          participants: pat,
          type: type,
          start: startDateTime,
          end: endDateTime,
          entry_fee: fee,
          winner_type: winner,
          allow_view_participants: enabled,
          useSquad: true,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.data.data.token}`,
          },
        }
      );
      if (response.data.data !== null) {
        setIsSubmitting(false);
        setModal(true);
        console.log(response.data.data.code);
        setCode(response.data.data.code);
      } else {
        setIsSubmitting(false);
        MySwal.fire({
          title: `${response.data.message}`,
        });
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.data;
      console.log(errorMessage);
      setError(errorMessage);
    }
  }

  const goBack = () => {
    Router.push("/home/leagues");
  };

  return (
    <MainLayout>
      <div className=" justify-center py-4  mx-auto  px-4  pb-20  bg-[#E4ECFB] shadow-inner w-auto">
        <div className="sm:ml-5 lg:ml-20">
          <button
            onClick={goBack}
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
            Create your league
          </button>
        </div>
        <div className=" max-w-sm sm:max-w-3xl bg-white  border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto lg:mx-20 px-2 sm:px-5 py-2 sm:py-5  w-auto">
          <div className="rounded-2xl p-5 sm:p-5   ">
            <form autoComplete="off" onSubmit={handleSubmit}>
              {error === true && (
                <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                  <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                    {error}
                  </h1>
                </div>
              )}

              <div className=" p-1">
                <div>
                  <div className="flex flex-col md:flex-row ">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u hidden">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        League type
                      </label>
                      <div className="font-inter bg-[#F8F8F8] my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          name="type"
                          value={"1"}
                          onInput={(e) => setType(e.currentTarget.value)}
                          required
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      {/* <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        League Name
                      </label> */}
                      <div className=" my-2 p-1 bg-[#F8F8F8] flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          name="name"
                          onInput={(e) => setName(e.currentTarget.value)}
                          required
                          placeholder=" League Name"
                          className="p-1 bg-[#F8F8F8] px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      {/* <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        Entry Fee (₦)
                      </label> */}
                      <div className="bg-[#F8F8F8] my-1 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setFee(e.currentTarget.value)}
                          name="fee"
                          className="p-1 px-2 bg-[#F8F8F8] appearance-none outline-none w-full text-gray-700"
                          required
                          placeholder="Entry Fee (₦)"
                        />{" "}
                      </div>
                      <p className="flex gap-x-1 items-center text-xs text-[#DB9816]">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L5 7M5 3.51758V3.5M1 5C1 2.79086 2.79086 1 5 1C7.20914 1 9 2.79086 9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5Z"
                            stroke="#DB9816"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Enter 0 if there’s no entry fee
                      </p>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      {/* <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        No. of Players
                      </label> */}
                      <div className="bg-[#F8F8F8] my-1 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          name="pat"
                          onInput={(e) => setPat(e.currentTarget.value)}
                          required
                          placeholder=" No. of Players"
                          className="p-1 bg-[#F8F8F8] px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        Start Date
                      </label>
                      <div className="bg-[#F8F8F8] my-1 p-1 flex items-center border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setStart(e.currentTarget.value)}
                          name="start"
                          type="date"
                          className="p-1 bg-[#F8F8F8] px-2 border-none appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                        {/* <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M4.34247 5H11.5996M3.84723 1V2.20015M11.9996 1V2.2M14.3996 5.2L14.3996 12.0001C14.3996 13.6569 13.0565 15.0001 11.3996 15.0001H4.59961C2.94276 15.0001 1.59961 13.6569 1.59961 12.0001V5.2C1.59961 3.54315 2.94276 2.2 4.59961 2.2H11.3996C13.0565 2.2 14.3996 3.54314 14.3996 5.2Z"
                            stroke="#795DE0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg> */}
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        End Date
                      </label>
                      <div className="bg-[#F8F8F8] my-1 p-1 flex items-center border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setEnd(e.currentTarget.value)}
                          name="end"
                          type="date"
                          className="p-1 px-2 border-none bg-[#F8F8F8] appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                        {/* <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M4.34247 5H11.5996M3.84723 1V2.20015M11.9996 1V2.2M14.3996 5.2L14.3996 12.0001C14.3996 13.6569 13.0565 15.0001 11.3996 15.0001H4.59961C2.94276 15.0001 1.59961 13.6569 1.59961 12.0001V5.2C1.59961 3.54315 2.94276 2.2 4.59961 2.2H11.3996C13.0565 2.2 14.3996 3.54314 14.3996 5.2Z"
                            stroke="#795DE0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        Start Time
                      </label>
                      <div className="bg-[#F8F8F8] my-1 p-1 flex items-center border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setStartTime(e.currentTarget.value)}
                          name="startTime"
                          type="time"
                          className="p-1 bg-[#F8F8F8] px-2 border-none appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        End Time
                      </label>
                      <div className="bg-[#F8F8F8] my-1 p-1 flex items-center border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setEndTime(e.currentTarget.value)}
                          name="endTime"
                          type="time"
                          className="p-1 px-2 border-none bg-[#F8F8F8] appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ">
                        Winning type
                      </label>
                      <div className="bg-[#F8F8F8] my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setWinner(e.currentTarget.value)}
                          name="winner_type"
                          required
                          className="form-select w-full px-3 py-2 bg-[#F8F8F8] border-none  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="single">1 winner (1st - 100%)</option>
                          <option value="double">
                            2 winners (1st - 60%, 2nd - 40%)
                          </option>
                          <option value="triple">
                            3 winners (1st - 60%, 2nd - 30%, 3rd - 10%)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-x-2 items-center pt-2">
                    <p className="font-inter text-xs text-[#222222]/60 ">
                      Allow participants to view each other’s selected players
                    </p>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
                      <div className="flex">
                        <label className="inline-flex relative items-center mr-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={enabled}
                            readOnly
                          />
                          <div
                            onClick={() => {
                              setEnabled(!enabled);
                            }}
                            className="w-9 h-5 border border-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#67D74B]"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full  py-5 flex-1 svelte-1l8159u">
                    <button
                      type="submit"
                      className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex  justify-center lg:px-28 py-4 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-violet-500 text-gray-200
										duration-200 ease-in-out 
										transition"
                    >
                      <div className="font-inter text-xs font-medium px-10">
                        {isSubmitting ? "Loading..." : "Create League"}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-5 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-xl sm:p-8  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2"></div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(false);
                    router.push("/home/leagues");
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
              </div>{" "}
              <div className="mx-auto   py-5 px-2 w-full">
                <div className="flex flex-col space-y-4 justify-center max-w-2xl mx-auto">
                  <div className=" ">
                    <img src="/img/sux.png" alt="soccer" className="mx-auto" />
                  </div>
                  <h1 className="font-montserrat text-center text-[#3A3A3A] font-semibold text-xl sm:text-2xl text-black-150   ">
                    League successfully created!
                  </h1>

                  {/* <!-- Start Navitem --> */}
                  <div className="py-4 px-5 md:px-16 flex  items-center bg-[#795DE0] text-white rounded-md justify-between shadow-xl ">
                    {code}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(code);
                        setCopied(true);
                      }}
                      className="flex gap-x-2 items-center bg-[#795DE0] text-white rounded-md justify-center  cursor-pointer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 13.125L4 7C4 4.79086 5.79086 3 8 3L14.125 3M10 21L16.75 21C17.9926 21 19 19.9926 19 18.75L19 9C19 7.75736 17.9926 6.75 16.75 6.75L10 6.75C8.75736 6.75 7.75 7.75736 7.75 9L7.75 18.75C7.75 19.9926 8.75736 21 10 21Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setModal(false);
                      router.push("/home/leagues");
                    }}
                    className="p-4  flex flex-col items-center border border-[#795DE0] text-[#795DE0] rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default CreatePrivateLeague;
