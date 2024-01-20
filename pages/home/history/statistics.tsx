import MainLayout from "../../../components/MainLayout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";

interface Manager {
  name: string;
  userName: string;
  IsOwner: string;
  id: number;
  points: number;
}

function Statistics() {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const { id: userId, leagueId } = router.query;

  const [message, setMessage] = useState("");
  const { data: session }: any = useSession();
  const [details, setDetails] = useState([]);
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    message: "",
  });
  const [isLoading, setLoading] = useState(0);
  useEffect(() => {
    if (session) {
      const fetchAll = async () => {
        const res = await axios.get(
          `${process.env.BACKEND_URL}/squad-with-points?id=${leagueId}&user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );
        const response = await res.data.data;
        return response;
      };

      const getDetails = async () => {
        const DetailsFromApi = await fetchAll();
        setDetails(DetailsFromApi);
      };
      getDetails();
    }
  }, [session, leagueId, userId]);

  return (
    <MainLayout>
      <div className="px-3 lg:px-20 py-10">
        <button
          onClick={() => Router.back()}
          className=" flex items-center gap-x-2 text-[#795DE0] active:bg-pink-600 font-bold text-base font-inter px-4 py-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_432_19217)">
              <path
                d="M-3.35782e-07 12.0028L3.84095 15.8438L3.84095 12.7588L24 12.7588L24 11.2468L3.84095 11.2468L3.84095 8.16179L-3.35782e-07 12.0028Z"
                fill="CurrentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_432_19217">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24 24) rotate(180)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* {details["name" as any]} */}
        </button>
        <div className="bg-[#F8F8F8] rounded-xl border shadow-2xl shadow-[#766AA480] p-2   sm:px-10 max-w-4xl flex justify-between ">
          <div className="text-center space-y-1 p-1">
            <h2 className="text-xs font-light text-[#94A3B8]">Average Point</h2>
            <h2 className="text-xl font-regular">44</h2>
          </div>
          <div className="text-center space-y-1 p-1 ">
            <h2 className="text-xs font-light text-[#94A3B8]">Your Score</h2>
            <h2 className="text-xl font-regular">78</h2>
          </div>
          <div className="text-center space-y-1 p-1">
            <h2 className="text-xs font-light">Highest Point</h2>
            <h2 className="text-xl font-regular">80</h2>
          </div>
        </div>

        <div className="container max-w-4xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded shadow-2xl shadow-indigo-500/50  mt-10 mb-20  w-auto">
          <div
            className="rounded border shadow-xl py-16 px-5 w-full  "
            style={{
              backgroundImage: 'url("/img/pitch.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div>
              <div className="flex justify-center mt-[5rem]  py-12 mx-auto">
                {/* {teams.goalkeepers.map((item: Players, player_id: number) => ( */}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>
              </div>

              <div className="flex   py-12 mx-auto sm:w-3/4">
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>
              </div>

              <div className="flex   py-16 sm:mx-auto -mx-3 sm:w-3/4">
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>
              </div>

              <div className="flex   pt-16 mx-auto sm:w-3/4">
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>{" "}
                <button
                  type="button"
                  className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                >
                  <div className="-my-[1.5rem] mx-auto">
                    <img
                      className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                      src="/img/Vector 11.svg"
                      // alt={item.player_name}
                      // title={item.player_name}

                      alt=""
                    />
                  </div>
                  <div className="w-full mx-auto ">
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                    >
                      {/* {item.player_name.split(" ", 1)} */}Peter Cech
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                    >
                      {/* {item.rating} */}5
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="bg-[#605E6333] h-20">
              <div className="flex justify-between  mt-10 sm:mx-auto -mx-3 sm:w-3/4">
                <div>
                  <button
                    type="button"
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src="/img/Vector 11.svg"
                        // alt={item.player_name}
                        // title={item.player_name}

                        alt=""
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {/* {item.player_name.split(" ", 1)} */}Peter Cech
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                      >
                        {/* {item.rating} */}5
                      </p>
                    </div>
                  </button>
                  <h2 className="text-center font-medium py-1">GK</h2>
                </div>
                <div>
                  <button
                    type="button"
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src="/img/Vector 11.svg"
                        // alt={item.player_name}
                        // title={item.player_name}

                        alt=""
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {/* {item.player_name.split(" ", 1)} */}Peter Cech
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                      >
                        {/* {item.rating} */}5
                      </p>
                    </div>
                  </button>
                  <h2 className="text-center font-medium py-1">1 - FWD</h2>
                </div>{" "}
                <div>
                  <button
                    type="button"
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src="/img/Vector 11.svg"
                        // alt={item.player_name}
                        // title={item.player_name}

                        alt=""
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {/* {item.player_name.split(" ", 1)} */}Peter Cech
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                      >
                        {/* {item.rating} */}5
                      </p>
                    </div>
                  </button>
                  <h2 className="text-center font-medium py-1">2-DEF</h2>
                </div>{" "}
                <div>
                  <button
                    type="button"
                    className=" rounded mt-2 mx-auto  hover:scale-105 transition transform duration-500 cursor-pointer"
                  >
                    <div className="-my-[1.5rem] mx-auto">
                      <img
                        className="-translate-y-1/2 transform object-cover object-center mx-auto w-[3rem]"
                        src="/img/Vector 11.svg"
                        // alt={item.player_name}
                        // title={item.player_name}

                        alt=""
                      />
                    </div>
                    <div className="w-full mx-auto ">
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem]  font-inter py-1  px-1.5 sm:px-5  tracking-wider rounded text-[#240155] bg-[#D9DADD] mb-1 flex justify-center text-center"
                      >
                        {/* {item.player_name.split(" ", 1)} */}Peter Cech
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-[.65rem] text-center rounded py-0.5 w-[4rem]  mx-auto  -mb-6 font-arcon leading-normal  text-[#240155] bg-[#fff]"
                      >
                        {/* {item.rating} */}5
                      </p>
                    </div>
                  </button>
                  <h2 className="text-center font-medium py-1">3-MID</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Statistics;
