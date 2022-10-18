import Link from "next/link";
import GuestLayout from "../../../components/GuestLayout";
import { useState } from "react";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  return (
    <GuestLayout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 pt-10 pb-20  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" max-w-sm sm:max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-5 sm:px-10 py-3  w-auto">
          <div className="px-2 sm:px-8 mb-4 text-center">
          <div className="mt-10 -translate-y-1/6 transform animate-fade-in-up">
              <img
                src="/img/reset.png"
                alt="verify"
                title="verify"
                className="mx-auto w-20 sm:w-24"
              />
            </div>
            <h3 className="pt-5 text-2xl sm:text-4xl lg:text-5xl text-center text-gray-700 font-oswald">
              Forgot Password?
            </h3>
            <p className="my-3 sm:my-6 text-sm text-gray-700  md:px-20">
              We get it, stuff happens. Just enter registered your email address
              below and we'll send you a link to reset your password!
            </p>
          </div>
          <form className="px-5 my-10 sm:px-32 mb-4  rounded">
            <div className="flex-1 w-full  sm:py-2 svelte-1l8159u">
              <div
                className={`bg-white my-2 p-1 flex border ${
                  error ? "border-red-500" : "border-gray-200"
                } rounded svelte-1l8159u`}
              >
                <input
                  placeholder="Enter Email Address..."
                  type="email"
                  required
                  value={email}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  className="w-full h-12 p-1 px-2 text-gray-700 outline-none appearance-none font-arcon"
                />
              </div>
              <span className="text-red-600 text-[0.7rem]">
                {error ? "Invalid Email  Or Password" : ""}
              </span>
            </div>

            <div className="flex-1 w-full py-5 mx-auto svelte-1l8159u">
              <button
                type="submit"
                className="flex justify-center py-3 mx-auto text-base font-bold text-gray-200 transition duration-200 ease-in-out rounded shadow-xl cursor-pointer shadow-indigo-500/50 hover:scale-110 focus:outline-none px-8 sm:px-28 hover:bg-blue-500 bg-violet-500"
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
    </GuestLayout>
  );
};

export default ForgotPassword;
