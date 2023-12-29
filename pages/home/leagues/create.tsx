import { useState } from "react";
import MainLayout from "../../../components/MainLayout";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Link from "next/link";
import { useRouter } from 'next/router'

const CreateLeague = () => {
  const { data: session }: any = useSession();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [fee, setFee] = useState("");
  const [winner, setWinner] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [pat, setPat] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MySwal = withReactContent(Swal);

  const router = useRouter()
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const user = await axios.post(
        `${process.env.BACKEND_URL}/leagues`,
        {
          name: name,
          participants: pat,
          type: type,
          start: start,
          end: end,
          entry_fee: fee,
          winner_type: winner,
          allow_view_participants: enabled,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );
      if (user) {
        setIsSubmitting(false);
        MySwal.fire({
          title: "Successful",
          confirmButtonText: "Proceed",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            router.push('/home/leagues')
          }
        });
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data;
      console.log(errorMessage);
      setError(errorMessage);
    }
  }
  return (
    <MainLayout>
      <div className=" justify-center py-4 sm:py-10  mx-auto  px-4  pb-20  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" max-w-sm sm:max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto lg:mx-20 px-2 sm:px-5 py-2 sm:py-5  w-auto">
          <div className="bg-white rounded-2xl p-5 sm:p-10   ">
            <div className=" flex items-center  overflow-x-auto whitespace-nowrap">
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

              <Link href="/home/leagues" passHref>
                <a className="text-[#240155] dark:text-gray-200 ">Leagues</a>
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

              <h1 className="text-gray-600 dark:text-blue-400">Create</h1>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="flex flex-col  pt-10 space-y-4 max-w-lg mx-2">
                <h1 className="font-montserrat text-xl sm:text-3xl text-black-150 w-4/6 ">
                  Create a League
                </h1>
                <p className="font-inter text-sm text-[#222222]/60  sm:w-5/6">
                  Please type carefully and fill out the form with Personal
                  details. You can't edit these details once you submit the
                  form.
                </p>
              </div>

              {error === true && (
                <div className="bg-red-800 w-1/2 text-center rounded shadow-md">
                  <h1 className="font-montserrat text-lg py-2 text-black-150  ">
                    {error}
                  </h1>
                </div>
              )}

              <div className="mt-8 p-1">
                <div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        League type
                      </label>
                      <div className="font-inter bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setType(e.currentTarget.value)}
                          required
                          className="font-inter fill-white form-select w-full px-3 py-2  bg-white  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="0">Public</option>
                          <option value="1">Private</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        Entry Fee (N)
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setFee(e.currentTarget.value)}
                          name="fee"
                          className="p-2 px-2 appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        League Name
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          name="name"
                          onInput={(e) => setName(e.currentTarget.value)}
                          required
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        No. of Players
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          name="pat"
                          onInput={(e) => setPat(e.currentTarget.value)}
                          required
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        Start Date
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setStart(e.currentTarget.value)}
                          name="start"
                          type="date"
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        End Date
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setEnd(e.currentTarget.value)}
                          name="end"
                          type="date"
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                          required
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-inter text-[#222222]/60 text-sm mb-2 ml-1">
                        Winning type
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setWinner(e.currentTarget.value)}
                          name="winner_type"
                          required
                          className="form-select w-full px-3 py-2 bg-white  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
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
                        {isSubmitting ? "Loading..." : "Create Leauge"}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateLeague;
