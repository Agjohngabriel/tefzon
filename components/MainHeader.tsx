import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

function MainHeader() {
  const { data: session }: any = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
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
        <motion.span
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
        </motion.span>
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
            <span className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
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
            </span>
          </Link>

          <button
            onClick={logOut}
            className="w-full flex items-center justify-start p-2 text-sm text-[#D00019] capitalize transition-colors duration-300 transform bg-gray-100  hover:bg-gray-500   rounded"
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
      </motion.div>
      <button
        className="inline-flex p-3 ml-auto text-[#795DE0] border-[#795DE0] rounded outline-none  hover:bg-green-600 lg:hidden hover:text-violet-500"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

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
        className={`${active ? "" : "hidden"}   w-full `}
      >
        <div className="flex gap-x-5  items-center w-full  py-3 lg:h-auto">
          <Link href="/home/account/profile" passHref>
            <span className="items-center justify-center w-full px-6 py-2 font-medium text-[#795DE0] rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              Profile
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </span>
          </Link>
          <button
            onClick={logOut}
            className="items-center justify-center w-full px-5 py-3  font-regular text-white bg-[#D00019] rounded flex lg:w-auto under hover:text-indigo-500 relative group"
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
                stroke="CurrentColor"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Log out</span>
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

export default MainHeader;
