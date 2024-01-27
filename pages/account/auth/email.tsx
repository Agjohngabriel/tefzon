import Link from "next/link";
import GuestLayout from "../../../components/GuestLayout";

const Email = () => {
  return (
    <GuestLayout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 pt-10 pb-20  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" max-w-sm sm:max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto px-5  py-5  w-auto">
          <div className="bg-white rounded-2xl p-10 max-w-lg  ">
            <div className="mt-10 -translate-y-1/2 transform animate-fade-in-up">
              <img
                src="/img/verify.png"
                alt="verify"
                title="verify"
                className="mx-auto w-14 sm:w-20"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 animate-fade-in-down">
              <h1 className="font-oswald text-3xl sm:text-3xl  text-gray-700 sm:w-4/6 text-center">
                Check your mail 
              </h1>
              <p className="font-arcon text-sm text-gray-500 text-center sm:w-5/6 animate-fade-in-up">
                We sent a password reset link to kolagk@gmail.com. Confirming
                the message allow you to complete the process.
              </p>
              <Link href="/home/account" passHref>
                <div className="w-full sm:w-auto bg-indigo-500 text-gray-200 shadow-inner rounded hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <div className="font-montserrat text-sm font-semibold px-10">
                    Login
                  </div>
                </div>
              </Link>

              <div className="text-center ">
                <Link href="/account/auth/forgetpassword" passHref>
                  <span className="inline-block text-xs text-indigo-700 align-baseline hover:text-blue-800">
                    Didn't recieve the email? <span className="font-semibold">Click to resend</span> 
                  </span>
                </Link>
              </div>
              <div className="text-center">
                <Link href="/account/auth/login" passHref>
                  <span
                    className="flex items-center mx-16  text-sm text-gray-600 hover:text-blue-800 justify-center  "
                  >
                    <span className="material-icons  ">arrow_backward</span>
                    <span className="-ml-24 ">Back to Log in</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Email;
