import axios from "axios";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";

const Index = () => {
  const goToSquad = () => {
    Router.push("/home/account/squad");
  };
  const goToWallet = () => {
    Router.push("/home/account/wallet");
  };
  const goToLeagues = () => {
    Router.push("/home/leagues");
  };
  const goToTransfer = () => {
    Router.push("/home/transfer");
  };
  const goToFixtures = () => {
    Router.push("/home/fixtures");
  };
  const goToPoints = () => {
    Router.push("/home/statistics");
  };
  const goToUpdateProfile = () => {
    Router.push("/home/account/update");
  };
  const { data: session }: any = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [profile, setProfile] = useState([]);

  async function logOut() {
    try {
      setIsLoading(true);
      const out = await axios.get(
        `${process.env.BACKEND_URL}/logout/${session?.data.user.id}`,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      if (out) {
        setIsLoading(false);
        signOut();
      }
    } catch (e) {
      return null;
    }
  }

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const respo = await axios.get(
        `${process.env.BACKEND_URL}/get-account-details`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await respo.data;
      setIsLoading(false);
      return response;
    };
    const getDetails = async () => {
      const DetailsFromApi = await fetchDetails();
      console.log(DetailsFromApi);
      setProfile(DetailsFromApi.user);
      setDetails(DetailsFromApi.user.accountdetails);
    };
    getDetails();
  }, [session]);

  const profiledetails = profile;
  const account = details;
  return (
    <MainLayout>
      <div className="flex items-center justify-center sm:py-20  mx-auto  px-4 py-6  bg-[#E4ECFB] shadow-inner w-auto">
        <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto   px-4 py-6  w-auto">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-8 px-2 sm:px-6 py-2">
              {/* <!-- Start Card List --> */}
              <div className="rounded-xl ">
                <div className="grid grid-cols-1 gap-6   grid-cols-2 lg:grid-cols-3 sm:mt-6">
                  {/* <!-- Start Navitem --> */}
                  <button
                    onClick={goToSquad}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full bg-[#e1effe] py-5 px-4 flex flex-col items-center">
                      <svg
                        width="29"
                        height="21"
                        viewBox="0 0 29 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 5.79902C6.5 6.98434 5.53532 7.94902 4.35 7.94902C3.16468 7.94902 2.2 6.98434 2.2 5.79902C2.2 4.61371 3.16468 3.64902 4.35 3.64902C5.53532 3.64902 6.5 4.61371 6.5 5.79902ZM26.8 5.79902C26.8 6.98434 25.8353 7.94902 24.65 7.94902C23.4647 7.94902 22.5 6.98434 22.5 5.79902C22.5 4.61371 23.4647 3.64902 24.65 3.64902C25.8353 3.64902 26.8 4.61371 26.8 5.79902ZM25.1878 15.199C24.8096 13.5038 23.8534 12.038 22.5333 11.0043C22.7432 10.9359 22.9671 10.899 23.2 10.899H26.1C27.2853 10.899 28.25 11.8637 28.25 13.049V14.499C28.25 14.8868 27.9378 15.199 27.55 15.199H25.1878ZM18.825 5.07402C18.825 7.46465 16.8906 9.39902 14.5 9.39902C12.1094 9.39902 10.175 7.46465 10.175 5.07402C10.175 2.68339 12.1094 0.749023 14.5 0.749023C16.8906 0.749023 18.825 2.68339 18.825 5.07402ZM14.5 13.074C15.676 13.074 16.7784 12.8014 17.7707 12.349H17.98C20.4477 12.349 22.45 14.3514 22.45 16.819V18.124C22.45 18.9106 21.8116 19.549 21.025 19.549H7.975C7.18843 19.549 6.55 18.9106 6.55 18.124V16.819C6.55 14.3514 8.55234 12.349 11.02 12.349H11.2299C12.2246 12.801 13.323 13.074 14.5 13.074ZM5.8 10.899C6.0329 10.899 6.25683 10.9359 6.46664 11.0043C5.14626 12.0382 4.18972 13.5041 3.80879 15.199H1.45C1.06218 15.199 0.75 14.8868 0.75 14.499V13.049C0.75 11.8637 1.71468 10.899 2.9 10.899H5.8Z"
                          stroke="#1e429f"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      My Squad
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button
                    onClick={goToLeagues}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full  flex flex-col items-center">
                      <svg
                        width="57"
                        height="58"
                        viewBox="0 0 57 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.734589"
                          width="57"
                          height="57"
                          rx="28.5"
                          fill="#E1EFFE"
                        />
                        <path
                          d="M45.6668 29C45.6668 38.2047 38.2048 45.6667 29.0002 45.6667C19.7954 45.6667 12.3335 38.2047 12.3335 29C12.3335 19.7953 19.7954 12.3333 29.0002 12.3333C38.2048 12.3333 45.6668 19.7953 45.6668 29Z"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M28.5127 24.5816C28.8032 24.3617 29.1965 24.3617 29.487 24.5816L33.2415 27.4233C33.532 27.6432 33.6535 28.0328 33.5425 28.3887L32.1085 32.9868C31.9975 33.3425 31.6793 33.5833 31.3203 33.5833H26.6793C26.3203 33.5833 26.0022 33.3425 25.8912 32.9868L24.4571 28.3887C24.3462 28.0328 24.4677 27.6432 24.7581 27.4233L28.5127 24.5816Z"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M29.0002 24V17.3333M34.0002 27.3333L40.6668 24.8333M32.3335 34L35.6668 39M25.6668 33.1667L22.3335 37.3333M24.0002 28.1667L17.3335 26.5"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.0002 13.1667L29.0277 16.704L34.0002 13.1667M12.3335 30.333L17.6611 26.398L14.926 20.2007M41.4507 40.4218L35.0265 39.2592L32.776 45.6667M42.3832 19.3264L40.3393 24.6496L45.6668 28.5845M22.35 44.6765L22.4192 37.6108L15.6723 37.6833"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Leagues
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button
                    onClick={goToWallet}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full  flex flex-col items-center">
                      <svg
                        width="57"
                        height="58"
                        viewBox="0 0 57 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.734589"
                          width="57"
                          height="57"
                          rx="28.5"
                          fill="#E1EFFE"
                        />
                        <path
                          d="M12.3335 29C12.3335 23.1042 12.3335 20.1563 14.0882 18.1882C14.3688 17.8734 14.6781 17.5822 15.0126 17.3181C17.1037 15.6667 20.2359 15.6667 26.5002 15.6667H31.5002C37.7645 15.6667 40.8967 15.6667 42.9877 17.3181C43.3222 17.5822 43.6315 17.8734 43.9122 18.1882C45.6668 20.1563 45.6668 23.1042 45.6668 29C45.6668 34.8958 45.6668 37.8437 43.9122 39.8118C43.6315 40.1267 43.3222 40.4177 42.9877 40.6818C40.8967 42.3333 37.7645 42.3333 31.5002 42.3333H26.5002C20.2359 42.3333 17.1037 42.3333 15.0126 40.6818C14.6781 40.4177 14.3688 40.1267 14.0882 39.8118C12.3335 37.8437 12.3335 34.8958 12.3335 29Z"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.6665 35.6667H28.1665"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M33.1665 35.6667H38.9998"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.3335 24H45.6668"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Wallet
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button
                    onClick={goToPoints}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full  flex flex-col items-center">
                      <svg
                        width="57"
                        height="58"
                        viewBox="0 0 57 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.734589"
                          width="57"
                          height="57"
                          rx="28.5"
                          fill="#E1EFFE"
                        />
                        <path
                          d="M30.8333 23.3333L25.1667 29M25.1667 23.3333L30.8333 29M21.625 33.9583H23.75M34.375 33.9583H28M40.75 21.9167V21.0242C40.75 19.3341 40.75 18.4883 40.5262 17.8083C40.3229 17.1768 39.9767 16.6007 39.5146 16.1248C39.0524 15.6489 38.4867 15.2859 37.8614 15.0642C37.1984 14.8333 36.3782 14.8333 34.7362 14.8333H21.2637C19.6218 14.8333 18.8016 14.8333 18.1386 15.0642C17.5135 15.2859 16.948 15.6486 16.4858 16.1243C16.0237 16.5999 15.6774 17.1757 15.4738 17.8069C15.25 18.4897 15.25 19.3341 15.25 21.0242V33.25M40.75 27.5833V40.8632C40.75 42.0787 39.3546 42.7247 38.472 41.9172C38.2244 41.6884 37.8996 41.5613 37.5625 41.5613C37.2254 41.5613 36.9006 41.6884 36.653 41.9172L35.9687 42.5433C35.535 42.9445 34.9658 43.1673 34.375 43.1673C33.7842 43.1673 33.215 42.9445 32.7812 42.5433C32.3475 42.1422 31.7783 41.9194 31.1875 41.9194C30.5967 41.9194 30.0275 42.1422 29.5937 42.5433C29.16 42.9445 28.5908 43.1673 28 43.1673C27.4092 43.1673 26.84 42.9445 26.4062 42.5433C25.9725 42.1422 25.4033 41.9194 24.8125 41.9194C24.2217 41.9194 23.6525 42.1422 23.2187 42.5433C22.785 42.9445 22.2158 43.1673 21.625 43.1673C21.0342 43.1673 20.465 42.9445 20.0312 42.5433L19.347 41.9172C19.0994 41.6884 18.7746 41.5613 18.4375 41.5613C18.1004 41.5613 17.7756 41.6884 17.528 41.9172C16.6454 42.7247 15.25 42.0787 15.25 40.8632V38.9167"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Points
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                <!-- Start Navitem --> */}
                  <button
                    onClick={goToTransfer}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full  flex flex-col items-center">
                      <svg
                        className="w-14 h-14"
                        width="83"
                        height="83"
                        viewBox="0 0 83 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="83" height="83" rx="41.5" fill="#E1EFFE" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.36 50.2851C24.1295 50.0543 24 49.7415 24 49.4153C24 49.0892 24.1295 48.7763 24.36 48.5456L31.7451 41.161C31.9784 40.9436 32.287 40.8252 32.6059 40.8308C32.9248 40.8364 33.229 40.9656 33.4545 41.1911C33.68 41.4166 33.8092 41.7208 33.8148 42.0397C33.8205 42.3585 33.7021 42.6671 33.4847 42.9004L28.2002 48.1845H47.3851C47.7116 48.1845 48.0246 48.3142 48.2555 48.545C48.4863 48.7758 48.616 49.0889 48.616 49.4153C48.616 49.7417 48.4863 50.0548 48.2555 50.2856C48.0246 50.5164 47.7116 50.6461 47.3851 50.6461H28.2002L33.4847 55.9302C33.7021 56.1635 33.8205 56.4721 33.8148 56.7909C33.8092 57.1098 33.68 57.414 33.4545 57.6395C33.229 57.865 32.9248 57.9942 32.6059 57.9998C32.287 58.0054 31.9784 57.8871 31.7451 57.6697L24.36 50.2851ZM31.384 34.6461C31.384 34.3197 31.5137 34.0066 31.7445 33.7758C31.9754 33.545 32.2884 33.4153 32.6149 33.4153H51.7998L46.5153 28.1312C46.3944 28.0185 46.2974 27.8827 46.2301 27.7317C46.1628 27.5807 46.1267 27.4177 46.1238 27.2525C46.1208 27.0872 46.1512 26.9231 46.2131 26.7698C46.275 26.6166 46.3672 26.4774 46.4841 26.3605C46.6009 26.2436 46.7402 26.1515 46.8934 26.0896C47.0467 26.0277 47.2109 25.9973 47.3761 26.0002C47.5414 26.0031 47.7044 26.0393 47.8554 26.1065C48.0063 26.1738 48.1422 26.2708 48.2549 26.3917L55.64 33.7763C55.8705 34.0071 56 34.3199 56 34.6461C56 34.9722 55.8705 35.2851 55.64 35.5158L48.2549 42.9004C48.1422 43.0214 48.0063 43.1184 47.8554 43.1856C47.7044 43.2529 47.5414 43.2891 47.3761 43.292C47.2109 43.2949 47.0467 43.2645 46.8934 43.2026C46.7402 43.1407 46.6009 43.0486 46.4841 42.9317C46.3672 42.8148 46.275 42.6756 46.2131 42.5223C46.1512 42.3691 46.1208 42.2049 46.1238 42.0397C46.1267 41.8744 46.1628 41.7115 46.2301 41.5605C46.2974 41.4095 46.3944 41.2736 46.5153 41.161L51.7998 35.8769H32.6149C32.2884 35.8769 31.9754 35.7472 31.7445 35.5164C31.5137 35.2856 31.384 34.9725 31.384 34.6461Z"
                          fill="#1E429F"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Transfers
                    </p>
                  </button>
                  {/* <!-- End Navitem -->
                 <!-- Start Navitem --> */}
                  <button
                    onClick={goToFixtures}
                    className="p-2 lg:p-8 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer"
                  >
                    <div className="rounded-full p-1  flex flex-col items-center">
                      <svg
                        width="57"
                        height="58"
                        viewBox="0 0 57 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.734589"
                          width="57"
                          height="57"
                          rx="28.5"
                          fill="#E1EFFE"
                        />
                        <path
                          d="M24.8542 38.25L23.2324 36.8802C22.3691 36.151 21.9375 35.7864 21.9375 35.3333C21.9375 34.8802 22.3691 34.5157 23.2324 33.7865L24.8542 32.4167M32.1458 32.4167L33.7676 33.7865C34.6308 34.5157 35.0625 34.8802 35.0625 35.3333C35.0625 35.7864 34.6308 36.151 33.7676 36.8802L32.1458 38.25"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.375 29.2935C15.375 22.6196 15.375 19.2826 17.3973 17.1683C17.472 17.0901 17.5485 17.0137 17.6266 16.939C19.7409 14.9167 23.0779 14.9167 29.7518 14.9167C31.3335 14.9167 32.0955 14.9222 32.8208 15.1928C33.5191 15.4535 34.1042 15.941 35.2743 16.916L38.4766 19.5847C40.0248 20.8749 40.7989 21.5199 41.212 22.4018C41.625 23.2837 41.625 24.2913 41.625 26.3066V30.9583C41.625 36.4267 41.625 39.1609 40.2324 41.0776C39.7827 41.6966 39.2383 42.241 38.6192 42.6908C36.7025 44.0833 33.9683 44.0833 28.5 44.0833C23.0316 44.0833 20.2975 44.0833 18.3807 42.6908C17.7617 42.241 17.2173 41.6966 16.7676 41.0776C15.375 39.1609 15.375 36.4267 15.375 30.9583V29.2935Z"
                          stroke="#1E429F"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm mt-1 text-center font-semibold">
                      Fixtures
                    </p>
                  </button>
                  {/* <!-- End Navitem --> */}
                </div>
                <div className="flex flex-col justify-center items-center lg:mt-3">
                  <button
                    onClick={logOut}
                    className=" mt-4 bg-indigo-600 hover:bg-indigo-700 shadow-xl text-white font-bold py-2 px-4 rounded"
                  >
                    Sign out
                  </button>
                </div>
              </div>
              {/* <!-- End Card List --> */}
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xxl:col-span-4 px-2 sm:px-6 py-6">
              {/* <!-- Start profile Card --> */}
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 border-2 border-white mt-2">
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      className="rounded-full w-auto"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-xl mt-1">
                    Hi {profiledetails["username" as any]}
                  </p>

                  <div
                    className="relative  p-4 rounded-lg shadow-xl w-full bg-cover bg-center h-20 mt-4"
                    style={{
                      ["background-image" as any]:
                        "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center pt-1">
                      <div>
                        <h3 className="text-center text-white text-lg">
                          Account Balance:
                        </h3>
                        <h3 className="text-center text-white text-3xl  font-bold">
                          ₦ {account["balance" as any]}.00
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1   grid-cols-4 mt-6">
                    {/* <!-- Start Navitem --> */}
                    <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-1 bg-white rounded-md shadow-xl border-l-4 border-blue-300">
                      <div>
                        <div className="font-bold text-2xl">
                          {" "}
                          {account["wins" as any]}
                        </div>
                        <div className="font-bold text-xs">Wins</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-1 bg-white rounded-md shadow-xl border-l-4 border-purple-300">
                      <div className="flex justify-between w-full"></div>
                      <div>
                        <div className="font-bold text-2xl text-center">
                          {" "}
                          {account["draw" as any]}
                        </div>
                        <div className="font-bold text-xs">Draws</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-1 bg-white rounded-md shadow-xl border-l-4 border-red-300">
                      <div className="flex justify-between w-full"></div>
                      <div>
                        <div className="font-bold text-2xl text-center">
                          {account["loss" as any]}
                        </div>
                        <div className="font-bold text-xs">Loss</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full  p-1 bg-white rounded-md shadow-xl border-l-4 border-green-300">
                      <div>
                        <div className="font-bold text-2xl text-center">
                          {account["cancelled" as any]}
                        </div>
                        <div className="font-bold text-xs">Cancelled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End profile Card -->
                <!-- Start Card List --> */}
              <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
                <div className="flex space-x-6 items-center">
                  <img
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    className="w-auto h-16 rounded-lg"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-base">Edit Profile</p>
                    <p className="font-semibold text-sm text-gray-400">
                      update your profile
                    </p>
                  </div>
                </div>

                <button
                  onClick={goToUpdateProfile}
                  className="flex space-x-2 items-center"
                >
                  <div className="bg-gray-300 rounded-md p-2 flex items-center">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L6 6L1 11" stroke="black" strokeWidth="2" />
                    </svg>
                  </div>
                </button>
              </div>
              {/* <!-- End Card List --> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
