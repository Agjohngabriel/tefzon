import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

function GuestHeader() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex flex-wrap items-center p-3 px-6 py-3 mx-auto bg-green-400 md:px-10 lg:px-20 ">
      <Link href="/" passHref>
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
      <button
        className="inline-flex p-3 ml-auto text-gray-600 border-gray-600 rounded outline-none  hover:bg-green-600 lg:hidden hover:text-violet-500"
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
        <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <Link href="/" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
              Home
            </a>
          </Link>
          {/* <Link href="" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
            Price
            </a>
          </Link> */}
          <Link href="/home/scout" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
              Scout
            </a>
          </Link>
          <Link href="/home/statistics" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
              Statistics
            </a>
          </Link>
          <Link href="" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
              Help
            </a>
          </Link>
          <Link href="/home/contact" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-bold text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-blue-500 hover:bg-green-600 ">
              Contact
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default GuestHeader;
