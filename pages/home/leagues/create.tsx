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
        `${process.env.BACKEND_URL}leagues`,
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
            Authorization: `Bearer ${session?.data.token}`,
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
      <div className="inline-flex rounded -ml-1">
        <Link href="/home" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2 ">
            Home
          </a>
        </Link>

        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Leagues
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <Link href="/home/leagues" passHref>
          <a className="font-montserrat text-sm text-[#240155] mt-10 px-2 ">
            Create
          </a>
        </Link>
      </div>
      <div className="container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 md:w-3/5 mt-10 mb-20  px-4 py-6 lg:px-20 md:ml-10 w-auto">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex flex-col  pt-10 space-y-4 max-w-lg mx-2">
            <h1 className="font-montserrat text-2xl sm:text-3xl text-black-150 w-4/6 ">
              Create a League
            </h1>
            <p className="font-arcon text-sm text-[#222222]/60  sm:w-5/6">
              Please type carefully and fill out the form with Personal details.
              You can't edit these details once you submit the form.
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

        {/* <div className="w-full bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mt-5 py-6">
          <h1 className="font-arcon text-md  text-[#222222]/60 px-5 pb-2 ">
            Invite paticipants
          </h1>
          <div className="  px-5  ">
            <div className="bg-[#F3F3F3] rounded-sm border shadow-xl p-5 w-full pb-10 ">
              <div className="flex flex-col  space-y-4">
                <p className="font-arcon text-[0.7rem] text-[#222222]/60 w-5/6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected
                </p>
                <div className="flex ">
                  <div className="bg-white  flex border border-gray-200 svelte-1l8159u w-full">
                    <input
                      placeholder="Enter email"
                      className="p-1 appearance-none outline-none w-full text-gray-700"
                    />{" "}
                  </div>
                  <button
                    type="button"
                    className="bg-[#6E4BEC] opacity-50 text-gray-200 shadow-inner rounded hover:bg-blue-500 px-2 py-2 focus:outline-none w-1/4 ml-2"
                  >
                    Sign Up
                  </button>
                </div>

                <main className="w-full px-5">
                  <section className="grid grid-cols-6">
                    <div className="">
                      <img
                        src="https://picsum.photos/200/200"
                        className="h-8 w-8 rounded-full"
                        alt="pics"
                      />
                    </div>

                    <div className="col-span-3 px-1 font-arcon flex flex-col">
                      <div className="text-[#222222]/70 text-sm font-arconpy-1">
                        {" "}
                        Sangwa Albine{" "}
                      </div>
                    </div>

                    <div className="col-span-2  justify-self-end">
                      <button className=" text-[#222222]/70 text-sm font-arcon text-md rounded-full py-1 px-4">
                        Organizer
                      </button>
                    </div>
                  </section>

                  <section className="grid grid-cols-6 mt-6">
                    <div className=" ">
                      <img
                        src="https://picsum.photos/200/200?i=200"
                        className="h-8 w-8 rounded-full"
                        alt="pics"
                      />
                    </div>

                    <div className="col-span-3 px-1 font-normal flex flex-col ">
                      <div className="text-[#222222]/70 text-sm font-arcon">
                        {" "}
                        Mbonyintege{" "}
                      </div>
                    </div>

                    <div className="col-span-2  justify-self-end">
                      <button className=" text-[#222222]/70 text-sm font-arcon font-normal text-md rounded-full py-1 px-4">
                        <span className="ml-2 material-icons hover:text-green-500">
                          more_vert
                        </span>
                      </button>
                    </div>
                  </section>
                </main>
              </div>
            </div>
            <div className="flex bg-white px-2 py-5 border">
              <p className="text-[#222222]/60 text-sm font-arcon  w-5/6 font-sm">
                https://www.tefzon.com/c/MzcxODgzjNKUI?ctht
              </p>

              <h2 className="text-[#240155]">Copy link</h2>
            </div>
          </div>
        </div> */}
      </div>

      <div className="container mb-5 mx-auto">
        <hr className="mt-20  rounded-lg border-b-2 border-violet-500 mx-3" />

        <div className="mx-3  flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
            {" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateLeague;
