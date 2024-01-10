import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

function MainHeader() {
  const { data: session }: any = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  async function logOut() {
    try {
      setIsLoading(true);
      const out = await axios.get(
        `${process.env.BACKEND_URL}/logout/${profile["id" as any]}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      if (out) {
        setIsLoading(false);
        signOut();
      }
    } catch (e) {
      return null;
    }
  }
  useEffect(() => {
    if (session) {
      const fetchProfile = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );
        const res = await respo.data;
        setIsLoading(false);
        return res;
      };
      const getProfile = async () => {
        const ProfileFromApi = await fetchProfile();
        setProfile(ProfileFromApi.data);
      };
      getProfile();
    }
  }, [session]);

  return (
    <nav className="flex flex-wrap items-center p-3 px-6 py-3 mx-auto bg-green-400 md:px-10 lg:px-20 ">
      <Link href="/home" passHref>
        <motion.a
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex items-center p-2 mr-4 "
        >
          <img src="/brand.png" alt="logo" width="150px" />
        </motion.a>
      </Link>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`hidden w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <Link href="/home/account/profile" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="#6E4BEC" />
                <path
                  d="M23 24V22C23 19.7909 21.2091 18 19 18H11C8.79086 18 7 19.7909 7 22V24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 14C17.2091 14 19 12.2091 19 10C19 7.79086 17.2091 6 15 6C12.7909 6 11 7.79086 11 10C11 12.2091 12.7909 14 15 14Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Link>
          <div className="relative inline-block group">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100 py-2.5"
              aria-expanded="false"
            >
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}

            <div className=" hidden group-hover:block absolute -right-7 z-[100] w-48 font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
              <button
                onClick={logOut}
                className="w-full flex items-center justify-start p-2 text-sm text-[#D00019] capitalize transition-colors duration-300 transform   hover:bg-gray-200   rounded"
              >
                <svg
                  className="w-5 h-5 mx-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6471 7.79998V5.69998C14.6471 5.14302 14.424 4.60888 14.0268 4.21505C13.6297 3.82122 13.091 3.59998 12.5294 3.59998H5.11765C4.55601 3.59998 4.01738 3.82122 3.62024 4.21505C3.22311 4.60888 3 5.14302 3 5.69998V18.3C3 18.8569 3.22311 19.3911 3.62024 19.7849C4.01738 20.1787 4.55601 20.4 5.11765 20.4H12.5294C13.091 20.4 13.6297 20.1787 14.0268 19.7849C14.424 19.3911 14.6471 18.8569 14.6471 18.3V16.2M8.29412 12H21M21 12L17.8235 8.84998M21 12L17.8235 15.15"
                    stroke="#D00019"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default MainHeader;
