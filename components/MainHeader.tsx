import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function MainHeader() {
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
          <Link href="/home/" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              Home
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </a>
          </Link>
       
          <Link href="/home/news" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              News
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </a>
          </Link>

          
          <Link href="/home/help" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group ">
              Help
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </a>
          </Link>
          <Link href="/home/contact" passHref>
            <a className="items-center justify-center w-full px-3 py-2 font-medium text-gray-600 rounded lg:inline-flex lg:w-auto under hover:text-indigo-500 relative group">
              Contact
              <span className="absolute bottom-1 right-0 w-0 h-1 bg-indigo-500  group-hover:w-full group-hover:transition-all rounded-full" />
            </a>
          </Link>
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
        </div>
      </motion.div>
    </nav>
  );
}

export default MainHeader;
