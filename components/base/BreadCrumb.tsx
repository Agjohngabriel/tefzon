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
    <div className="bg-violet-500 pt-20 lg:pt-[20px] md:pt-[5px] sm:pt-[2px] justify-between ">
      <div className="flex z-[100] ">
        <div className="ml-24 lg:w-1/2 mt-16  mb-12">
          <h2 className="font-oswald text-gray-100 font-bold text-5xl tracking-tighter leading-tight">
            Tefzon Fantasy
          </h2>
        </div>
        <div className="lg:w-1/2 justify-end  ">
          <div className="mt-3 ml-20">
            <img
              src="/img/Header Image.png"
              alt="soccer"
              className="relative"
            />
          </div>
        </div>
      </div>

      <div className="absolute flex justify-between w-3/4 ml-24 z-50 -mt-12">
        <div className="w-full block flex-grow md:flex md:justify-between md:w-auto">
          <div>
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/account/status")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Status
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/account/squad/select_squad" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/leagues/teams")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Pick Team
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/account/transfer" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/account/transfer")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Transfer
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/leagues/" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/leagues")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                League
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/fixtures" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/fixtures")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Fixtures
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/leagues/scout")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                The Scout
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/leagues/stats")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Stats
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/account/wallet" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/account/wallet")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Wallet
              </span>
            </Link>
          </div>
          <div>
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/leagues/prices")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Price
              </span>
            </Link>
          </div>
          {/* <div>
            <Link href="/home/leagues/create" passHref>
              <span
                className={`font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded ${
                  Router.pathname.startsWith("/home/account/help")
                    ? "bg-white text-black-150"
                    : "bg-green text-white"
                } hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0`}
              >
                Help
              </span>
            </Link>
          </div> */}
          <div>
            <button
              onClick={logOut}
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
