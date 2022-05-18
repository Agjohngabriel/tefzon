import React from "react";
import MainLayout from "../../../components/MainLayout";
import { useSession } from "next-auth/react";

const CreateLeague = () => {
  const { data: session } = useSession();
  return (
    <MainLayout>
      <div className="container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 md:w-3/5 ml-24 mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
        <form autoComplete="off">
          <div className="flex flex-col  pt-10 space-y-4 max-w-lg mx-2">
            <h1 className="font-montserrat text-3xl text-black-150 w-4/6 ">
              Create a League
            </h1>
            <p className="font-arcon text-sm text-[#222222]/60  w-5/6">
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
                    <select className="font-arcon fill-white form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value=""></option>
                      <option value="">Public</option>
                      <option value="02">Private</option>
                    </select>
                  </div>
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                    Paid/Free
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="">Paid</option>
                      <option value="02">Free</option>
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
                    <input className="p-1 px-2 appearance-none outline-none w-full text-gray-700" />{" "}
                  </div>
                </div>

                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                    League duration
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input className="p-1 px-2 appearance-none outline-none w-full text-gray-700" />{" "}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row pt-2">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                    Amount
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input className="p-1 px-2 appearance-none outline-none w-full text-gray-700" />{" "}
                  </div>
                </div>

                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                    Winning type
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="">First - Third Position</option>
                      <option value="04">Prefer not to state</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row pt-2">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <label className="font-arcon text-[#222222]/60 text-sm mb-2 ml-1">
                    League code
                  </label>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="E-mail"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="w-full bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mt-5 py-6">
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
              <p className="text-[#222222]/60 text-sm font-arcon text-black-150 w-5/6 font-sm">
                https://www.tefzon.com/c/MzcxODgzjNKUI?ctht
              </p>

              <h2 className="text-[#240155]">Copy link</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <hr className="mt-20 max-w-6xl rounded-lg border-b-2 border-violet-500 mx-auto " />

        <div className="ml-16 max-w-6xl flex mb-5">
          <div className="rounded-2xl bg-gray-200 border mt-5  py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
          <div className="rounded-2xl bg-gray-200 border  mt-5 ml-10 py-5 px-3 w-1/6 h-24">
            {" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateLeague;
