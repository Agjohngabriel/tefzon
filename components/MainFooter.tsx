import Image from "next/image";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer
      className="
    // bg-violet-500 
    bg-gradient-to-r from-violet-500  via-indigo-600  to-violet-500  pt-16   relative z-10"
    >
      <div className="flex flex-wrap mx-auto md:mx-5 lg:mx-12">
        <div className="w-full sm:w-3/12 lg:w-3/12 px-4">
          <div className="w-full mb-10">
            <Link href="/" passHref>
              <span className="inline-block max-w-[160px] mb-6">
                <img src="/brand.png" alt="logo" className="max-w-full" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap w-full sm:w-3/12 lg:w-3/12 px-4">
          <div className="w-1/2 mb-10">
            <h4 className=" font-montserrat text-white text-lg  font-semibold mb-9">
              Pages
            </h4>
            <ul>
              <li>
                <Link href="/home" passHref>
                  <span
                    className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/home/account/squad" passHref>
                  <span
                    className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer
                            "
                  >
                    My Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/home/transfer" passHref>
                  <span
                    className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                  >
                    Transfer
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 mb-10">
            <h4 className="text-white text-lg  font-semibold mb-16"></h4>
            <ul>
              <li>
                <a
                  href="/home/leagues"
                  className="font-arcon
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                >
                  Leagues
                </a>
              </li>
              <li>
                <Link href="/home/fixtures" passHref>
                  <span
                    className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                  >
                    Fixtures
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/home/fixtures" passHref>
                  <span
                    className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                  >
                    Statistics
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex  sm:w-6/12">
          <div className="w-full sm:w-1/2 lg:w-1/2 px-4">
            <div className="w-full mb-10">
              <h4 className=" font-montserrat text-white text-lg  font-semibold mb-9">
                About
              </h4>
              <ul>
                <li>
                  <Link href="/home/privacy_policy" passHref>
                    <span
                      className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                    >
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/home/terms" passHref>
                    <span
                      className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                    >
                      Terms of Use
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="##" passHref>
                    <span
                      className="
                    font-inter
                            inline-block
                            text-base text-white
                            hover:text-primary
                            leading-loose
                            mb-2 
                            cursor-pointer"
                    >
                      Cookies Settings
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2 px-4">
            <div className="w-full mb-10">
              <h4 className="font-montserrat text-white text-lg  font-semibold mb-9">
                Follow Us
              </h4>
              <p className="text-base font-inter text-white mb-7">
                Find exclusive contents on our social networks
              </p>
              <div className="flex items-center mb-6">
                <Link href="##" passHref>
                  <span
                    className="
                        w-8
                        h-8
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border border-[#E5E5E5]
                        text-white
                        hover:text-white hover:bg-primary hover:border-primary
                        mr-3
                        sm:mr-4
                        lg:mr-3
                        xl:mr-4
                        "
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </span>
                </Link>

                <Link href="##" passHref>
                  <span
                    className="
                        w-8
                        h-8
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border border-[#E5E5E5]
                        text-white
                        hover:text-white hover:bg-primary hover:border-primary
                        mr-3
                        sm:mr-4
                        lg:mr-3
                        xl:mr-4
                        "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </span>
                </Link>

                <Link href="##" passHref>
                  <span
                    className="
                        w-8
                        h-8
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border border-[#E5E5E5]
                        text-white
                        hover:text-white hover:bg-primary hover:border-primary
                        mr-3
                        sm:mr-4
                        lg:mr-3
                        xl:mr-4
                        "
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="font-arcon bg-white block text-sm text-gray-700 sm:text-center dark:text-gray-400 py-5 -pb-5 px-5">
        All Rights Reserved © 2023 Tefzon Fantasy.
      </span>

      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
}
