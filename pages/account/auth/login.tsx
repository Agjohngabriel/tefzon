import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import GuestLayout from "../../../components/GuestLayout";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  // const handlePasswordChange = (evnt: React.SyntheticEvent) => {
  // 	setPasswordInput(evnt.target.value);
  // };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const goToHome = () => {
    Router.push("/home/account");
  };

  return (
    <GuestLayout>
      <div className="container max-w-3xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-5 items-center justify-center w-auto">
        <h1 className="font-oswald text-4xl text-gray-700 pt-20 text-center">
          Login
        </h1>

        <p className="font-arcon text-xs text-gray-500 text-center my-10">
          Welcome back to Tefzone Fantasy, please login to your account to
          continue.
        </p>

        <div className="flex mx-auto items-center justify-center">
          <Link href="##">
            <div className="flex items-center justify-center px-8 py-2 space-x-2 transition-colors duration-300 border border-blue-800  group bg-blue-800 hover:bg-gray-500 focus:outline-none ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4 text-gray-100"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </span>
              <span className="text-xs font-montserrat text-white group-hover:text-white">
                Facebook
              </span>
            </div>
          </Link>

          <Link href="##">
            <div className="flex items-center justify-center mx-3 px-10 py-2 space-x-2 transition-colors duration-300 border border-gray-100  group bg-white hover:bg-gray-500 focus:outline-none ">
              <span>
                <img
                  className=" h-5 cursor-pointer"
                  src="https://i.imgur.com/arC60SB.png"
                  alt=""
                />
              </span>
              <span className="text-xs font-montserrat text-gray-800 group-hover:text-white">
                Google
              </span>
            </div>
          </Link>

          <Link href="##">
            <div className="flex items-center justify-center px-10 py-2 space-x-2 transition-colors duration-300 border border-blue-500  group bg-blue-500 hover:bg-gray-500 focus:outline-none ">
              <span>
                <svg
                  className="text-gray-100 group-hover:text-white"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </span>
              <span className="text-xs font-montserrat text-gray-100 group-hover:text-white">
                Twitter
              </span>
            </div>
          </Link>
        </div>

        <p className="font-arcon text-sm text-gray-500 text-center my-8">
          or login with
        </p>

        <div className="w-3/4  mx-auto">
          <div className="w-full py-4  flex-1 svelte-1l8159u">
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                placeholder="Enter e-mail"
                className="p-1 px-2 appearance-none h-12 outline-none w-full text-gray-700 font-arcon"
              />{" "}
            </div>
          </div>
          <div className="w-full  flex-1 svelte-1l8159u">
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                placeholder="Enter Password"
                className="p-1 px-2 appearance-none h-12 outline-none w-full text-gray-800 font-arcon"
                type={passwordType}
                // onInput={(e) => setPasswordInput(e.target.currentValue)}
              />
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal  rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                  <button
                    onClick={togglePassword}
                    className="text-base hover:scale-110 focus:outline-none flex justify-center py-1 rounded cursor-pointer                                 
                                                    
                                                    text-gray-500
                                                    duration-200 ease-in-out 
                                                    transition"
                  >
                    {passwordType === "password" ? (
                      <span className="material-icons">visibility</span>
                    ) : (
                      <span className="material-icons">visibility_off</span>
                    )}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Link href="##">
          <span className="flex items-center text-[#222222]/50 font-arcon text-sm justify-center mx-auto px-8 py-4 focus:outline-none">
            Forgot Password?
          </span>
        </Link>

        <div className="w-full mx-auto  py-5 flex-1 svelte-1l8159u">
          <button
            onClick={goToHome}
            className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex mx-auto justify-center px-28 py-2 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-violet-500 text-gray-200
										duration-200 ease-in-out 
										transition"
          >
            <div className="font-arcon text-xs font-medium px-10">Login</div>
          </button>
        </div>

        <p className="text-xs font-arcon text-gray-500 text-center my-8">
          Don't have an account?
          <a
            href="/account/auth/signup"
            className="items-center font-arcon text-indigo-700  text-xs justify-center mx-auto px-2 py-4 focus:outline-none"
          >
            Sign Up
          </a>
        </p>
      </div>
    </GuestLayout>
  );
};

export default Login;
