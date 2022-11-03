const GuestBreadCrumb = () => {
  return (
    <div>
      <div className="bg-violet-500  lg:pt-[20px] md:pt-[5px] pt-3  justify-between relative overflow-hidden ">
        <div className="flex justify-between  ">
          <div className="ml-8 sm:ml-20 w-1/2 mt-2 sm:mt-16 md:mt-12 lg:mb-12 ">
            <h2 className="font-oswald text-gray-100 font-bold text-xl sm:text-2xl lg:text-5xl tracking-tighter leading-tight  ">
              Tefzon Fantasy
            </h2>
          </div>
          <div className="w-1/2 justify-end ">
            <div className="sm:mt-3 ">
              <img
                src="/img/soccer 3 3.png"
                alt="soccer"
                className="relative animate-pulse z-50"
              />
            </div>
          </div>
        </div>
        {/* <div className="absolute -bottom-32 -left-40  w-60 md:w-80 h-60 md:h-80 border-2 md: rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20  w-60 md:w-80 h-60 md:h-80 border-2 md: rounded-full border-opacity-30 border-t-8"></div> */}
        <div className="absolute -top-40 -right-0 w-60 md:w-80 h-60 md:h-80 border-2 md:border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-60 md:w-80 h-60 md:h-80 border-2 md:border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

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
    </div>
  );
};

export default GuestBreadCrumb;
