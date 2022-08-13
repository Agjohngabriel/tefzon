import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
function BreadCrumb() {
  const { data: session }: any = useSession();
  const Router = useRouter();
  async function logOut() {
    try {
      const out = await axios.get(
        `${process.env.BASE_URL}logout/${session?.data.user.id}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      if (out) {
        signOut();
      }
    } catch (e) {
      return null;
    }
  }
  return (
    <div className="bg-violet-500  lg:pt-[20px] md:pt-[5px] pt-3 justify-between ">
      <div className="flex z-[100] ">
        <div className="ml-5 sm:ml-20 w-1/2 mt-10 sm:mt-16  lg:mb-12">
          <h2 className="font-oswald text-gray-100 font-bold text-xl sm:text-2xl lg:text-5xl tracking-tighter leading-tight animate-fade-in-up">
            Tefzon Fantasy
          </h2>
        </div>
        <div className="sm:w-1/2 justify-end ">
          <div className="sm:mt-3 sm:ml-20 animate-pulse animate-fade-in-down">
            <img
              src="/img/Header Image.png"
              alt="soccer"
              className="relative"
            />
          </div>
        </div>
      </div>

      <div className="absolute flex-grow flex justify-between px-10  md:px-10   z-50 -mt-14 md:-mt-10 lg:-mt-14 w-98 overflow-x-auto scrollbar-hide ">
        
          <Link href="/home/leagues/join_public" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1 lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full inline-flex ${
                Router.pathname.startsWith("/home/account/status")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Public League
            </span>
          </Link>
        
        
          <Link href="/home/leagues/join_private" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full inline-flex justify-center ${
                Router.pathname.startsWith("/home/account/squad")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Private League
            </span>
          </Link>
        
        
          <Link href="/home/leagues/create" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center  sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full inline-flex justify-center${
                Router.pathname.startsWith("/home/account/transfer")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Create League
            </span>
          </Link>
        
        
          <Link href="/home/account/squad/select_squad" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full inline-flex justify-center ${
                Router.pathname.startsWith("/home/leagues")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Pick Team
            </span>
          </Link>
        
        
          <Link href="/home/transfer" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full ${
                Router.pathname.startsWith("/home/fixtures")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Transfer
            </span>
          </Link>
        
        
          <Link href="/home/fixtures" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full ${
                Router.pathname.startsWith("/home/leagues/scout")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Fixtures
            </span>
          </Link>
        
        
          <Link href="/home/statistics " passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full ${
                Router.pathname.startsWith("/home/leagues/stats")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Stats
            </span>
          </Link>
        
        
          <Link href="/home/account/wallet" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full ${
                Router.pathname.startsWith("/home/account/wallet")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Wallet
            </span>
          </Link>
        
        
          <Link href="/home/price" passHref>
            <span
              className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer w-full ${
                Router.pathname.startsWith("/home/leagues/prices")
                  ? "bg-white text-black-150"
                  : "bg-green text-white"
              } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
            >
              Price
            </span>
          </Link>
        
   {/* 
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer ${
                  Router.pathname.startsWith("/home/account/help")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Help
              </span>
            </Link>
        v> */}
        
          <button
            onClick={logOut}
            className="font-montserrat  md:inline-block text-xs lg:text-sm px-1  mx-1  lg:px-2 py-3 items-center sm:mx-2 lg:py-4 leading-none rounded cursor-pointer bg-green text-gray-200 hover:text-gray-700 md:font-semibold hover:bg-gray-100 mt-4 md:mt-0 w-full inline-flex "
          >
            Sign Out
          </button>
        
      </div>
    </div>
  );
}

export default BreadCrumb;
