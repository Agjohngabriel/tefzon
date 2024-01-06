import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import GuestLayout from "../../../components/GuestLayout";
import axios from "axios";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState({});
  const [error, setError] = useState(false);
  const router = useRouter();

  const fetchAll = async () => {
    await axios.get(`${process.env.BACKEND_URL}/auth/login/google`, {
      headers: {
        "content-type": "application/json",
      },
    });
  };

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      const error = router.query.error as string;
      const errormail = router.query.email as string;
      setLoginError(error); // Shown below the input field in my example
      setEmail(errormail); // To prefill the email after redirect
    }
  }, [router]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    const response = await signIn<"credentials">("credentials", {
      redirect: false,
      password,
      email,
      // callbackUrl,
    });
    if (response?.error) {
      console.log(response);
      setLoginError(response);
      setError(true);
      setIsSubmitting(false);
    }
    if (!response) {
      throw new Error("Received empty response from next auth");
    }

    if (!response.error) {
      // we're logged in! let's do a hard refresh to the desired url
      window.location.replace("/home");
      return;
    }
  }

  return (
    <GuestLayout>
      <div
        className=" bg-cover rounded-lg  text-white p-4 lg:py-8 lg:px-20  flex  justify-end "
        style={{
          backgroundImage: 'url("/img/authbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="w-[40rem] bg-white rounded-xl shadow-2xl shadow-indigo-500/50   px-5 sm:p-10 ">
          <div className="my-2 w-full flex justify-between">
            <h1 className=" text-sm lg:text-xl font-oswald font-semibold text-left text-[#240155]">
              Welcome to Tefzon Fantasy
            </h1>
            <div>
              <p className=" text-xs text-center text-gray-500 ">
                Don’t have an account yet?
              </p>
              <div className="">
                <Link href="/account/auth/signup" passHref>
                  <a className="flex items-center text-[#795DE0] font-inter text-sm justify-start text-bold mx-auto focus:outline-none">
                    Create Account
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <h1 className=" text-sm lg:text-xl font-semibold text-left text-[#3A3A3A]">
            Log in
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="flex-1 w-full  sm:py-2 svelte-1l8159u">
                <label className=" text-sm font-semibold text-[#3A3A3A]">
                  Email Address
                </label>
                <div
                  className={`bg-white my-2 p-1 flex border ${
                    error ? "border-red-500" : "border-gray-200"
                  } rounded svelte-1l8159u`}
                >
                  <input
                    placeholder="Enter email address"
                    type="email"
                    required
                    value={email}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    className="w-full h-9 p-1 px-2 text-xs text-[#94A3B8] outline-none appearance-none "
                  />{" "}
                </div>
                <span className="text-red-600 text-[0.7rem]">
                  {error ? "Invalid Email  Or Password" : ""}
                </span>
              </div>
              <div className="flex-1 w-full svelte-1l8159u">
                <label className=" text-sm font-semibold text-[#3A3A3A]">
                  Password
                </label>
                <div
                  className={`bg-white my-2 p-1 flex border ${
                    error ? "border-red-500" : "border-gray-200"
                  } rounded svelte-1l8159u`}
                >
                  <input
                    placeholder="Enter Password"
                    required
                    value={password}
                    onInput={(e) => setPassword(e.currentTarget.value)}
                    className="w-full h-9 p-1 px-2 text-xs text-[#94A3B8] outline-none appearance-none "
                    type={passwordType}
                  />
                  <div className="flex">
                    <span className="flex items-center px-3 leading-normal text-gray-600 whitespace-no-wrap border-0 rounded rounded-l-none">
                      <button
                        type="button"
                        onClick={() => {
                          if (passwordType === "password") {
                            setPasswordType("text");
                            return;
                          }
                          setPasswordType("password");
                        }}
                        className="flex justify-center py-1 text-base text-gray-500 transition duration-200 ease-in-out rounded cursor-pointer hover:scale-110 focus:outline-none"
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

            <div className="flex justify-end">
              <div className="w-[12rem]">
                <Link href="/account/auth/forgetpassword" passHref>
                  <a className="flex items-center text-[#795DE0] font-inter text-sm justify-end mx-auto px-8 py-4 focus:outline-none">
                    Forgot Password?
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex-1  pb-5 mx-auto svelte-1l8159u">
              <button
                type="submit"
                className="flex w-full justify-center py-3 mx-auto text-base font-bold text-gray-200 transition duration-200 ease-in-out rounded shadow-xl cursor-pointer shadow-indigo-500/50 hover:scale-110 focus:outline-none px-5  hover:bg-blue-500 bg-violet-500"
              >
                <div className="px-10 text-sm font-medium ">
                  {isSubmitting ? (
                    <span>Loading...</span>
                  ) : (
                    <span className="inline-flex space-x-2 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Login</span>
                    </span>
                  )}
                </div>
              </button>
            </div>
          </form>
          <p className="my-4 text-xs text-center text-gray-500 ">
            Or log in with
          </p>
          <div className="flex pb-5 justify-center item-center">
            <button
              aria-label="Continue with github"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700  px-4 animate-fade-in-down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-6 text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/get" })
              }
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700  px-4 animate-fade-in-up "
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
            </button>
            <button
              aria-label="Continue with twitter"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 px-4 animate-fade-in-up"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z"
                  fill="#1DA1F2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;
