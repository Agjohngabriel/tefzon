import { useState } from "react";
import MainLayout from "../../../components/MainLayout";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Link from "next/link";

const CreateLeague = () => {
  const { data: session }: any = useSession();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [start, setStart] = useState("");
  const [fee, setFee] = useState("");
  const [winner, setWinner] = useState("");
  const [entry, setEntry] = useState("");
  const [pat, setPat] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MySwal = withReactContent(Swal);

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
          duration: duration,
          start: start,
          entry_fee: fee,
          winner_type: winner,
          entry_type: entry,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.data.data.token}`,
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
            // router.push('/account/auth/login')
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
                <p className="font-arcon text-sm text-[#222222]/60  sm:w-5/6">
                  Please type carefully and fill out the form with Personal
                  details. You can't edit these details once you submit the
                  form.
                </p>
              </div>

              <div className="mt-8 p-1">
                <div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        League type
                      </label>
                      <div className="font-arcon bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setType(e.currentTarget.value)}
                          required
                          className="font-arcon fill-white form-select w-full px-3 py-2  bg-white  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Entry Type
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setEntry(e.currentTarget.value)}
                          required
                          className="form-select w-full px-3 py-2  bg-white rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="paid">Paid</option>
                          <option value="free">Free</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        League title
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
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Duration
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setDuration(e.currentTarget.value)}
                          name="duration"
                          required
                          className="form-select w-full px-3 py-2  bg-white rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Amount
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setFee(e.currentTarget.value)}
                          name="entry_fee"
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>

                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Winning type
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select
                          onChange={(e) => setWinner(e.currentTarget.value)}
                          name="winner_type"
                          className="form-select w-full px-3 py-2 bg-white  rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="single">Single</option>
                          <option value="double">Double</option>
                          <option value="triple">Triple</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row pt-2">
                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Start Date
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setStart(e.currentTarget.value)}
                          name="start"
                          type="date"
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>

                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                      <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                        Participants
                      </label>
                      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input
                          onInput={(e) => setPat(e.currentTarget.value)}
                          name="participants"
                          type="number"
                          className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mx-auto  py-5 flex-1 svelte-1l8159u">
                    <button
                      type="submit"
                      className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex mx-auto justify-center lg:px-28 py-2 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-violet-500 text-gray-200
										duration-200 ease-in-out 
										transition"
                    >
                      <div className="font-arcon text-xs font-medium px-10">
                        {isSubmitting ? "Loading..." : "Create"}
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
