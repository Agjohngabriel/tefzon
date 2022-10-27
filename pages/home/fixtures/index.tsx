import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="inline-flex -ml-1 rounded">
        <Link href="/wallet" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2   ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
          Fixtures
        </h1>
      </div>

      <div id="sportmonks-widget" data-widget="livescore" data-info="xp4Q7blDCbmqUTDtGcI4xSUK0tIdK0DD7wOrMT1v4NS6aiIGaZ60sQhN3SKTB5UxKXG2e6CJuLFcZc0LN/Hsh4hAJtWlZBsWKVhzah7bmUCTQIBSZaGfVRrNLiGo0dMPykvZwOOgu1eb6GEkp4GDdqyR7nBPVI3iY2OBrUqSXYWhUabPh4RTbik65Nt2BP4XlVOEFZcnv0bthDukI9m3Pn1Ru+boI9cVFIGO1CUbbm+85NeMpTcuMUtemSbeLpFKxwldUmZTOCFDOq2L4e4n5MOmb3lHckFGsxr0wVy063uqE25wNqJuXFhtDYEB7YSLZqG08PEdcP12Cvpj77+bguMfSuaAwDNqkRs9BpgrecEiGy4UphnX5pXqHT/o4PyY2DOdvAu//eqKzE9CBLavM5Z/ePvFtKtzvHWNcabqhwdC6OM7NV6phX1E086pqI4MVTy6iMPwufL+J2WTpK4iQLV0TmnJiLVUuuRax5RdQvGS31wBzuwCLRI3utrlUNAVHBkDeiUJHI+NpEjCKkQcpHJpD+DBIFwERGGNmGO46FNdqxiGzEGacJX6JcLhpS2tGF+tie1AsgqKjYVOl9AdTr87APEhYILdEloQ/MrYM2Y4q33HBXPLZI+5JjzCtfotux/HALUI6IgjsMUoZqGNi1BKPSzchCix/43gAupk+CU=" data-switchtheme="false" data-tz="Africa/Lagos"></div>

    </MainLayout>
  );
};

export default Index;

{
  /* <div className="container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-2  w-auto">
<div className="flex flex-col max-w-3xl pt-10 mx-auto space-y-4">
  <div className="flex-1 mx-auto svelte-1l8159u ">
    <div className="flex items-center flex-shrink-0 mr-6 text-gray-600">
      <h1 className="text-4xl text-gray-700 font-oswald text-centeru">
        Fixtures
      </h1>
    </div>
    {/* <button
      className="flex justify-center px-5 py-2 text-base font-medium text-gray-700 transition duration-200 ease-in-out bg-white border rounded shadow-inner cursor-pointer shadow-gray-200/50 hover:scale-110 focus:outline-none hover:bg-blue-500"
    >
      <div className="flex py-1 text-xs font-medium font-arcon">
        <span className=" material-icons hover:text-white">
          calendar_month
        </span>
        <span className="pt-1 pl-3">Sync to Calendar</span>
      </div>
    </button> 
  </div>
  <div className="flex flex-col w-full py-10 md:flex-row">
    <div className="flex-1 w-full mx-2 svelte-1l8159u">
      <button
        className="flex justify-center px-5 py-2 text-base font-bold text-gray-200 transition duration-200 ease-in-out rounded cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500 bg-violet-400"
      >
        <div className="flex text-xs font-semibold font-arcon ">
          <span className=" material-icons hover:text-white">
            arrow_backward
          </span>{" "}
          <span className="pt-1">Previous</span>
        </div>
      </button>
    </div>
    <h1 className="w-4/6 px-5 pt-3 text-sm font-bold text-center text-gray-700 ">
      Gameweek 20 - Tue 26 Jan 17:30
    </h1>
    <div className="flex-1 w-full mx-2 svelte-1l8159u">
      <button
        className="flex justify-center px-5 py-2 text-base font-bold text-gray-200 transition duration-200 ease-in-out rounded cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500 bg-violet-400"
      >
        <div className="flex px-5 text-xs font-semibold font-arcon">
          <span className="pt-1"> Next</span>
          <span className="ml-20 material-icons hover:text-white ">
            arrow_forward
          </span>{" "}
        </div>
      </button>
    </div>
  </div>
</div>

<div className="pt-10 ">
  <p className="py-4 mx-auto text-xs tracking-wider text-center text-gray-800 font-arcon bg-stone-300">
    Sunday 21 February 2021
  </p>

  <div className="w-full leading-normal ">
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="pt-10 ">
  <p className="py-4 mx-auto text-xs tracking-wider text-center text-gray-800 font-arcon bg-stone-300">
    Monday 22 February 2021
  </p>

  <div className="w-full leading-normal ">
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="pt-10 ">
  <p className="py-4 mx-auto text-xs tracking-wider text-center text-gray-800 font-arcon bg-stone-300">
    Sunday 27 February 2021
  </p>

  <div className="w-full leading-normal ">
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center px-5 py-5 mx-auto text-sm border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">
          <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
        </div>
        <div className="flex-shrink-0 hidden w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
      </div>
      <p className="px-8 py-5 mx-16 tracking-tight text-center text-gray-600 whitespace-no-wrap border border-gray-300">
        19:00
      </p>
      <div className="flex items-center float-right">
        <div className="flex-shrink-0 hidden mr-3 w-14 h-14 sm:table-cell">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-right text-gray-900 whitespace-no-wrap">
            Team 2
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
