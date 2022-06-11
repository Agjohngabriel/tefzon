import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function GuestHeader() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap mx-auto px-6 py-3 lg:px-20  bg-green-400 p-3 ">
      <Link href="/" passHref>
        <a className="inline-flex items-center p-2 mr-4 ">
          <img src="/brand.png" alt="logo" width="150px" />
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-gray-600 border-gray-600 ml-auto hover:text-white outline-none"
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

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
              Home
            </a>
          </Link>
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
            Price
            </a>
          </Link>
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
            Scout
            </a>
          </Link>
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
            Statistics
            </a>
          </Link>
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
            Help
            </a>
          </Link>
          <Link href="" passHref>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 under hover:text-blue-500 font-bold items-center justify-center hover:bg-green-600 ">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default GuestHeader;
