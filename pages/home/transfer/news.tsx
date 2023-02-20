import MainLayout from "../../../components/MainLayout";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader } from "../../../components/base/Loader";

const TransferNews = () => {
  return (
    <MainLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="ml-3 md:ml-5 lg:ml-14  flex items-center py-8 overflow-x-auto whitespace-nowrap">
          <Link href="/home" passHref>
            <a className="text-[#240155] dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </Link>
          <span className="mx-2 text-[#8139E6] dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <Link href="/home/transfer" passHref>
            <a className="text-[#240155] dark:text-gray-200 ">Transfer</a>
          </Link>

          <span className="mx-2 text-[#8139E6] dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <h1 className="text-gray-600 dark:text-blue-400">Transfer News</h1>
        </div>

        <div className="container px-6 py-5 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between pb-5">
            <div>
              <div className="flex items-center gap-x-3">
                <h1 className="font-semibold text-xl sm:text-3xl text-[#33175A]  text-center">
                  Transfer News
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">
                  Want to know
                </p>

                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Amelia. Anderson
                    </h1>
                    <p className="text-sm text-[#8139E6] dark:text-gray-400">
                      Lead Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 className="text-blue-500 capitalize">Design instument</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-[#8139E6] dark:text-gray-400 "
                >
                  How to raise $100k+ by using blox ui kit on your design
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">UI Resource</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-[#8139E6] dark:text-gray-400 "
                >
                  Should you creat UI Product by using Blox?
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-[#8139E6] dark:text-gray-400 "
                >
                  Top 10 Blocks you can get on Blox's collection.
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium kits</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-[#8139E6] dark:text-gray-400 "
                >
                  Top 10 Ui kit you can get on Blox's collection.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TransferNews;
