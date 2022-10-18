import Link from "next/link";
import { useState } from "react";
import GuestLayout from "../../../components/GuestLayout";

const ResetPasswordOtp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <GuestLayout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 pt-10 pb-20  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" max-w-sm sm:max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-2xl shadow-2xl shadow-indigo-500/50 mx-auto px-5 sm:px-5 py-5  w-auto">
          <div className="bg-white rounded-2xl p-10">
            <div className="px-2 sm:px- mb-4 text-center">
              <div className=" -translate-y-1/6 transform animate-fade-in-up">
                <img
                  src="/img/reset.png"
                  alt="verify"
                  title="verify"
                  className="mx-auto w-20"
                />
              </div>
              <h3 className=" text-2xl sm:text-3xl mt-5 lg:text-4xl text-center text-gray-700 font-oswald">
                OTP Verification
              </h3>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">+91 ******876</span>
              </div>
            </div>

            <form className="px-5 sm:px-32 mb-4  rounded">
              <div className="container mx-auto">
                <div className="max-w-sm mx-auto md:max-w-lg">
                  <div className="w-full">
                    <div
                      id="otp"
                      className="flex flex-row justify-center text-center px-2 mt-5"
                    >
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="first"
                        maxLength={1}
                      />
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="second"
                        maxLength={1}
                      />
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="third"
                        maxLength={1}
                      />
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fourth"
                        maxLength={1}
                      />
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="fifth"
                        maxLength={1}
                      />
                      <input
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id="sixth"
                        maxLength={1}
                      />
                    </div>

                    <div className="flex justify-center text-center mt-5">
                      <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                        <span className="font-bold">Resend OTP</span>
                        <i className="bx bx-caret-right ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full py-5 mx-auto svelte-1l8159u">
                <button
                  type="submit"
                  className="flex justify-center py-3 mx-auto text-base font-bold text-gray-200 transition duration-200 ease-in-out rounded shadow-xl cursor-pointer shadow-indigo-500/50 hover:scale-110 focus:outline-none px-8 sm:px-24 hover:bg-blue-500 bg-violet-500"
                >
                  <div className="px-10 text-sm font-medium font-arcon">
                    {isSubmitting ? "Loading..." : "Reset Password"}
                  </div>
                </button>
              </div>
              <hr className="my-6 border-t " />

              <div className="text-center">
                <Link href="/account/auth/login" passHref>
                  <a
                    type="button"
                    className="flex items-center mx-16 py-5 text-sm text-gray-600 hover:text-blue-800 justify-center  "
                  >
                    <span className="material-icons  ">arrow_backward</span>
                    <span className="-ml-24 ">Back to Log in</span>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ResetPasswordOtp;
