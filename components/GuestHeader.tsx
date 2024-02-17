import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function GuestHeader() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex flex-wrap items-center p-3 px-6 py-3 mx-auto bg-green-400 md:px-10 lg:px-20 ">
      <Link href="/" passHref>
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
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="flex gap-x-5  items-center w-full lg:inline-flex  lg:ml-auto lg:w-auto py-3 lg:h-auto">
          <Link href="/account/auth/login" passHref>
            <span className="items-center justify-center w-full px-3 py-2 font-medium text-[#795DE0] rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              Log in
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </span>
          </Link>
          <Link href="/account/auth/signup" passHref>
            <span className="items-center justify-center w-full px-5 py-3  font-regular text-white bg-[#795DE0] rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group">
              Register
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </span>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default GuestHeader;
