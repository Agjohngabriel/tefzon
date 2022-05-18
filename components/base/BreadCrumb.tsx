import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import axios from "axios";
function BreadCrumb() {
  const { data: session }: any = useSession();
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

      <div className="flex justify-between w-2/3 ml-24 ">
        <div className="w-full block flex-grow md:flex md:justify-between md:w-auto">
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Status
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Pick Team
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Transfer
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              League
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Fixtures
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              The Scout
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Stats
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Prize
            </a>
          </div>
          <div>
            <a
              href="/home/leagues/create"
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
            >
              Help
            </a>
          </div>
          <div>
            <button
              onClick={logOut}
              className="font-montserrat  block md:inline-block text-sm px-4 py-4 leading-none rounded bg-green-500 text-gray-200 hover:text-gray-700 font-semibold hover:bg-gray-100 mt-4 md:mt-0"
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
