import Layout from "../../../components/Layouts";

const Index = () => {
  return (
    <Layout>
      <main className="mt-10 px-2 sm:px-20 mx-auto">
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
          <a
            className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-[24em] "
            href="./blog.html"
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                ["background-image" as any]:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              alt=""
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Nutrition
              </span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Pellentesque a consectetur velit, ac molestie ipsum. Donec
                sodales, massa et auctor.
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="w-full md:w-1/3 relative rounded h-[24em] "
            href="./blog.html"
          >
            <div
              className="absolute left-0 top-0 w-full h-full z-10"
              style={{
                ["background-image" as any]:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
                alt=""
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  Science
                </span>
                <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div className="flex mt-3">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      {" "}
                      Chrishell Staus{" "}
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {" "}
                      15 Aug{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/* <!-- post cards --> */}
          <div className="w-full lg:w-2/3">
            <a
              className="block rounded w-full lg:flex mb-10"
              href="./blog-single-1.html"
            >
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  ["background-image" as any]:
                    "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
                }}
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                    hendrerit.
                  </div>
                  <p className="text-gray-700 text-base">
                    Duis euismod est quis lacus elementum, eu laoreet dolor
                    consectetur. Pellentesque sed neque vel tellus lacinia
                    elementum. Proin consequat ullamcorper eleifend.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>

            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  ["background-image" as any]:
                    "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
                }}
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Integer commodo, sapien ut vulputate viverra
                  </div>
                  <p className="text-gray-700 text-base">
                    Nam malesuada aliquet metus, ac commodo augue mollis sit
                    amet. Nam bibendum risus sit amet metus semper consectetur.
                    Proin consequat ullamcorper eleifend. Nam bibendum risus sit
                    amet metus semper consectetur.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      Serenity Hughes{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  ["background-image" as any]:
                    "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
                }}
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Suspendisse varius justo eu risus laoreet fermentum non
                    aliquam dolor
                  </div>
                  <p className="text-gray-700 text-base">
                    Mauris porttitor, velit at tempus vulputate, odio turpis
                    facilisis dui, vitae eleifend odio ipsum at odio. Phasellus
                    luctus scelerisque felis eget suscipit.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- right sidebar --> */}
          <div className="w-full lg:w-1/3 px-3">
            {/* <!-- topics --> */}
            <div className="mb-4">
              <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                {" "}
                Popular Topics{" "}
              </h5>
              <ul>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                    Nutrition
                    <span className="text-gray-500 ml-auto">23 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                    Food & Diet
                    <span className="text-gray-500 ml-auto">18 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                    Workouts
                    <span className="text-gray-500 ml-auto">34 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                    Immunity
                    <span className="text-gray-500 ml-auto">9 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- divider --> */}
            <div className="border border-dotted"></div>
          </div>
        </div>
      </main>

      <main className="py-12 md:px-20 sm:px-14 px-6">
        <div className="sm:flex items-center shadow-md">
          <div className="md:px-10 sm:px-5">
            <h1 className="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p className="text-gray-700 mb-2 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className="flex justify-between mb-2">
              <span className="font-thin text-sm">May 20th 2020</span>
              <span className="sm:block hidden mb-2 text-gray-800 font-bold">
                Read more
              </span>
            </div>
          </div>
          <div>
            <img
              className="bg-cover"
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="mt-6 md:flex space-x-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div>
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                long established
              </h1>
              <p className="text-gray-700 mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">May 20th 2020</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div>
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                long established
              </h1>
              <p className="text-gray-700 mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">May 20th 2020</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div>
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                long established
              </h1>
              <p className="text-gray-700 mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">May 20th 2020</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </main>

      <div className="flex min-h-screen items-center justify-center px-2 sm:px-20 mx-auto py-10">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"
                className="w-full object-cover object-right-top"
                alt="omnichannel"
              />
            </div>
            <div className="p-10">
              <h3 className="text-xl font-medium text-gray-700">
                Omnichannel support center
              </h3>
              <p className="mt-2 text-slate-500">
                Chatwoot connects with popular customer communication channels
                like Email, Website live-chat, Facebook, Twitter, WhatsApp,
                Instagram, Line, etc., and helps you deliver a consistent
                customer experience across channels.
              </p>
              <a href="" className="mt-2 inline-flex text-sky-500">
                Read More →
              </a>
            </div>
          </div>
          <div className="flex rounded-md border border-slate-200">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-700">
                A live-chat that fits your brand
              </h3>
              <p className="mt-2 text-slate-500">
                Connect with your website visitors, communicate with them in
                realtime and give them quality support with a live-chat widget
                that fits your brand.
              </p>
              <a href="" className="mt-2 inline-flex text-sky-500">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png"
                  className="h-full w-full object-cover object-left-top"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex rounded-md border border-slate-200">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-700">
                Respond faster, with automated chatbots
              </h3>
              <p className="mt-2 text-slate-500">
                Integrate with chatbots using Rasa or Dialogflow to automate
                conversations. Qualify using chatbots and seamlessly handoff to
                human agents.
              </p>
              <a href="" className="mt-2 inline-flex text-sky-500">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png"
                  className="h-full w-full object-cover object-left-top"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-1 px-12">
        <div className="rounded-lg bg-[#6E4BEC]/60 text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          {/* <!-- LEFT PART --> */}
          <div className="flex flex-col lg:ml-10 max-w-sm lg:max-w-xl z-10">
            <div className="hero-text  pt-5">
              <h4 className="text-5xl text-center md:text-left font-bold text-white md:pb-2">
                Don't listen to what they say, Go See
              </h4>

              <p className="text-center md:text-left text-white opacity-70 md:pb-6">
                Your ultimate travel companion. Carries all the information you
                need while travelling
              </p>

              <div className="get-app flex space-x-5 justify-center md:justify-start">
                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="logo">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="419.955"
                      height="512"
                      viewBox="0 0 419.955 512"
                    >
                      <g transform="translate(-46.022)">
                        <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                        <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className=" text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download on the
                    </p>
                    <p className=" text-xs font-semibold text-gray-900">
                      Apple Store
                    </p>
                  </div>
                </button>
                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="image">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="436.057"
                      height="469.847"
                      viewBox="0 0 436.057 469.847"
                    >
                      <g transform="translate(-16.896)">
                        <path
                          d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                          fill="#2196f3"
                        />
                        <path
                          d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                          fill="#4caf50"
                        />
                        <path
                          d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                          fill="#ffc107"
                        />
                        <path
                          d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                          fill="#f44336"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className="text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download it from
                    </p>
                    <p className="text-xs font-semibold text-gray-900">
                      Google play
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT PART --> */}
          <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10 animate-fade-in-down">
            <div className="hero-image ">
              <svg
                width="327"
                height="227"
                viewBox="0 0 327 227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M327 198.804H0V198.956H327V198.804Z" fill="#EBEBEB" />
                <path
                  d="M294.235 208.574H272.574V208.726H294.235V208.574Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M176.488 206.722H156.725V206.874H176.488V206.722Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M271.921 202.939H226.213V203.091H271.921V202.939Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M143.618 203.959H34.3086V204.111H143.618V203.959Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M153.579 203.959H149.439V204.111H153.579V203.959Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M154.997 171.722H28.7161C27.7268 171.72 26.7786 171.354 26.0797 170.704C25.3808 170.054 24.9883 169.173 24.9883 168.254V3.43686C24.9969 2.52362 25.3932 1.65041 26.0912 1.0069C26.7892 0.363396 27.7324 0.00156443 28.7161 0H154.997C155.987 0 156.937 0.365296 157.638 1.01553C158.338 1.66576 158.731 2.54766 158.731 3.46722V168.254C158.731 169.174 158.338 170.056 157.638 170.706C156.937 171.356 155.987 171.722 154.997 171.722V171.722ZM28.7161 0.121444C27.7702 0.123053 26.8636 0.473064 26.1953 1.09465C25.5271 1.71624 25.1518 2.55861 25.1518 3.43686V168.254C25.1518 169.133 25.5271 169.975 26.1953 170.597C26.8636 171.218 27.7702 171.568 28.7161 171.57H154.997C155.943 171.568 156.851 171.218 157.52 170.597C158.189 169.976 158.566 169.133 158.568 168.254V3.43686C158.566 2.55805 158.189 1.71569 157.52 1.09428C156.851 0.472866 155.943 0.12305 154.997 0.121444H28.7161Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M296.465 171.722H170.178C169.188 171.72 168.239 171.354 167.539 170.704C166.839 170.055 166.445 169.174 166.443 168.254V3.43686C166.454 2.52307 166.851 1.64986 167.55 1.00652C168.25 0.363183 169.193 0.00154737 170.178 0H296.465C297.448 0.00316027 298.389 0.365697 299.086 1.00903C299.782 1.65237 300.178 2.52467 300.186 3.43686V168.254C300.186 169.172 299.795 170.052 299.097 170.702C298.4 171.352 297.453 171.718 296.465 171.722V171.722ZM170.178 0.121444C169.231 0.12305 168.324 0.472866 167.655 1.09428C166.985 1.71569 166.609 2.55805 166.607 3.43686V168.254C166.609 169.133 166.985 169.976 167.655 170.597C168.324 171.218 169.231 171.568 170.178 171.57H296.465C297.412 171.568 298.319 171.218 298.988 170.597C299.657 169.976 300.034 169.133 300.036 168.254V3.43686C300.034 2.55805 299.657 1.71569 298.988 1.09428C298.319 0.472866 297.412 0.12305 296.465 0.121444H170.178Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M254.222 61.1532H292.625C292.037 60.4126 291.272 59.8081 290.39 59.3868C289.509 58.9655 288.535 58.7388 287.544 58.7243C284.215 58.7243 287.334 60.0662 284.751 60.0662C282.168 60.0662 279.519 55.7246 271.298 55.7246C263.078 55.7246 269.886 58.9854 265.635 58.9854C261.384 58.9854 247.787 56.1132 254.222 61.1532Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M181.212 25.1755H233.094C232.295 24.1785 231.261 23.3653 230.07 22.7989C228.879 22.2324 227.564 21.9278 226.227 21.9086C221.727 21.9086 225.945 23.7303 222.453 23.7303C218.961 23.7303 215.364 17.8706 204.278 17.8706C193.193 17.8706 202.369 22.279 196.626 22.279C190.884 22.279 172.514 18.3625 181.212 25.1755Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M140.511 29.4377C136.515 29.4377 140.262 31.0407 137.169 31.0407C134.075 31.0407 130.871 25.8369 121.028 25.8369C111.349 25.8369 118.654 30.2635 114.063 30.4153H113.795C109.217 30.4153 104.462 22.7036 89.8715 22.7036C75.2807 22.7036 87.3536 28.5026 79.7999 28.5026C72.2462 28.5026 48.0613 23.3716 59.5259 32.3341H146.613C145.903 31.449 144.984 30.7273 143.925 30.225C142.867 29.7228 141.699 29.4534 140.511 29.4377V29.4377Z"
                  fill="#F0F0F0"
                />
                <path
                  d="M65.5045 11.8286C66.0171 11.9813 66.5104 12.1849 66.976 12.4358C67.4479 12.6969 67.8867 13.0065 68.284 13.3588C68.574 13.6284 68.8407 13.9187 69.0818 14.2271C69.4961 14.153 69.9159 14.1083 70.3375 14.0935C70.8972 14.0763 71.457 14.1211 72.0052 14.2271C72.532 14.3314 73.045 14.4882 73.5356 14.6946C74.0023 14.8989 74.4414 15.1536 74.8436 15.4537C74.3743 15.2537 73.88 15.1089 73.3721 15.0225C72.868 14.9327 72.3548 14.894 71.8417 14.9072C70.8206 14.9351 69.8192 15.1758 68.9118 15.6116L68.2578 15.9152L68.042 15.3079C67.7234 14.4326 67.1829 13.6412 66.4658 13.0005C66.126 12.6775 65.7488 12.3903 65.341 12.1443C64.9036 11.8884 64.4334 11.6844 63.9414 11.5371C64.473 11.5765 64.9977 11.6744 65.5045 11.8286V11.8286Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M46.3369 12.3812C46.7183 12.564 47.0778 12.7838 47.4094 13.037C47.7483 13.3011 48.0533 13.6007 48.3185 13.9296C48.5136 14.1759 48.6843 14.438 48.8286 14.7129C49.1652 14.7045 49.5019 14.7208 49.8358 14.7615C50.2833 14.8201 50.7221 14.926 51.1438 15.0772C51.5447 15.2252 51.9265 15.4146 52.2817 15.6419C52.6271 15.8545 52.9414 16.1076 53.2169 16.3949C52.8756 16.1773 52.5066 15.9998 52.1182 15.8666C51.7353 15.7352 51.3385 15.6416 50.9345 15.5873C50.1299 15.477 49.3089 15.5393 48.5343 15.7695L48.0046 15.9273L47.913 15.4294C47.7843 14.7003 47.468 14.0108 46.9909 13.4195C46.7528 13.1164 46.4761 12.8411 46.1668 12.5998C45.8509 12.3486 45.5014 12.1363 45.127 11.9683C45.5465 12.0608 45.9526 12.1994 46.3369 12.3812Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M253.504 6.6796C254.045 6.82913 254.567 7.03273 255.061 7.28682C255.559 7.54093 256.023 7.8509 256.441 8.20979C256.75 8.47654 257.033 8.76925 257.284 9.08419C257.714 8.99222 258.152 8.93332 258.592 8.90809C259.168 8.87897 259.745 8.91157 260.312 9.00525C260.858 9.09851 261.391 9.24716 261.901 9.44852C262.402 9.6419 262.874 9.89282 263.308 10.1954C262.817 10.0029 262.303 9.86634 261.777 9.78856C261.256 9.71086 260.728 9.6844 260.201 9.70962C259.148 9.76298 258.122 10.037 257.199 10.5112L256.545 10.8391L256.303 10.2318C255.948 9.33663 255.364 8.53455 254.603 7.89404C254.219 7.56842 253.798 7.2833 253.347 7.04393C252.889 6.79713 252.399 6.60534 251.889 6.47314C252.434 6.47835 252.977 6.54772 253.504 6.6796V6.6796Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M254.766 22.6493C255.12 22.7457 255.461 22.8759 255.786 23.0379C256.118 23.2056 256.428 23.4095 256.708 23.6451C256.919 23.8296 257.11 24.033 257.277 24.2524C257.561 24.1906 257.85 24.152 258.141 24.137C258.528 24.1141 258.916 24.1345 259.298 24.1977C259.662 24.2618 260.017 24.3616 260.358 24.4952C260.694 24.6233 261.011 24.7928 261.299 24.9992C260.977 24.8664 260.639 24.7706 260.292 24.7138C259.241 24.5485 258.16 24.7175 257.225 25.1936L256.8 25.4122L256.636 25.0053C256.403 24.4066 256.017 23.8692 255.511 23.4387C255.254 23.2215 254.971 23.0321 254.668 22.874C254.362 22.7065 254.035 22.5759 253.693 22.4854C254.056 22.5018 254.416 22.5568 254.766 22.6493V22.6493Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M271.371 20.0807C271.622 20.1486 271.865 20.2401 272.097 20.354C272.333 20.4736 272.553 20.6205 272.751 20.7912C272.901 20.9155 273.037 21.0538 273.156 21.2041C273.356 21.161 273.559 21.1326 273.764 21.1191C274.038 21.1074 274.312 21.1237 274.582 21.1676C274.841 21.2107 275.093 21.282 275.334 21.3802C275.568 21.4691 275.788 21.5876 275.988 21.7323C275.758 21.6382 275.517 21.5729 275.268 21.538C275.022 21.5017 274.772 21.4895 274.523 21.5016C274.026 21.5269 273.541 21.6556 273.104 21.8781L272.803 22.0299L272.685 21.7445C272.428 21.1048 271.935 20.5709 271.292 20.2386C271.077 20.1194 270.847 20.0274 270.605 19.9653C270.865 19.9731 271.122 20.0118 271.371 20.0807V20.0807Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M241.785 31.4237C242.153 31.5214 242.508 31.6557 242.845 31.8244C243.187 31.9927 243.507 32.1964 243.799 32.4317C244.016 32.6164 244.213 32.8197 244.388 33.0389C244.683 32.9781 244.982 32.9375 245.284 32.9174C245.685 32.8985 246.086 32.923 246.481 32.9903C246.859 33.0499 247.228 33.1518 247.579 33.2939C247.926 33.4282 248.253 33.6016 248.554 33.8101C248.214 33.6784 247.858 33.5846 247.494 33.5307C247.134 33.4762 246.767 33.4579 246.402 33.4761C245.672 33.5132 244.961 33.7043 244.323 34.0347L243.878 34.2533L243.714 33.8343C243.469 33.2149 243.068 32.659 242.544 32.2131C242.28 31.9796 241.988 31.7758 241.674 31.6058C241.355 31.4343 241.014 31.2997 240.66 31.2051C241.043 31.238 241.42 31.3113 241.785 31.4237V31.4237Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M244.51 48.4254C244.758 48.4886 244.997 48.5782 245.223 48.6926C245.457 48.8107 245.677 48.9533 245.877 49.1177C246.017 49.2447 246.148 49.3806 246.269 49.5245C246.464 49.4804 246.663 49.4539 246.864 49.4456C247.131 49.4289 247.399 49.4432 247.662 49.4881C247.916 49.5302 248.164 49.5995 248.401 49.6945C248.634 49.7832 248.854 49.8996 249.055 50.0406C248.827 49.9513 248.587 49.888 248.342 49.8524C248.1 49.8159 247.855 49.8037 247.61 49.816C247.123 49.8408 246.649 49.9674 246.223 50.1864L245.929 50.3382L245.811 50.0528C245.651 49.6389 245.383 49.2679 245.033 48.9719C244.856 48.8197 244.661 48.6872 244.451 48.5772C244.245 48.4653 244.025 48.3756 243.797 48.3101C244.039 48.3213 244.278 48.3601 244.51 48.4254V48.4254Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M265.754 43.4648C265.929 43.5106 266.098 43.5737 266.258 43.653C266.42 43.739 266.571 43.8408 266.709 43.9566C266.809 44.0445 266.901 44.14 266.984 44.242C267.124 44.2123 267.266 44.194 267.409 44.1874C267.596 44.1657 267.785 44.1657 267.971 44.1874C268.151 44.2165 268.327 44.2655 268.495 44.3331C268.658 44.3984 268.814 44.4798 268.959 44.576C268.636 44.4518 268.287 44.3978 267.939 44.4181C267.593 44.4366 267.256 44.5258 266.951 44.6792L266.742 44.7885L266.663 44.5881C266.55 44.2953 266.362 44.0326 266.114 43.823C265.99 43.7146 265.851 43.6208 265.702 43.5437C265.552 43.4625 265.392 43.3992 265.225 43.3555C265.405 43.3738 265.583 43.4105 265.754 43.4648V43.4648Z"
                  fill="#E0E0E0"
                />
                <path
                  d="M114.306 95.5945L56.5509 98.667L46.1719 71.0264L103.927 67.9478L114.306 95.5945Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M212.693 95.5945L270.448 98.667L280.827 71.0264L223.072 67.9478L212.693 95.5945Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M316.281 198.804H10.7188L36.8788 98.9038C36.8788 90.1538 290.121 90.1538 290.121 98.9038L316.281 198.804Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M310.65 180.344C213.136 194.43 113.863 194.43 16.3497 180.344C16.0038 180.294 15.672 180.181 15.3733 180.011C15.0746 179.842 14.8149 179.619 14.6089 179.357C14.403 179.094 14.2549 178.796 14.1732 178.48C14.0914 178.164 14.0777 177.836 14.1326 177.515C14.4509 175.616 14.7757 173.714 15.1071 171.807C15.1571 171.486 15.2757 171.178 15.456 170.901C15.6362 170.623 15.8744 170.382 16.1566 170.191C16.4388 170 16.7592 169.864 17.099 169.79C17.4388 169.716 17.791 169.706 18.1351 169.761C114.453 183.666 212.507 183.666 308.825 169.761C309.169 169.706 309.521 169.716 309.861 169.79C310.201 169.864 310.521 170 310.804 170.191C311.086 170.382 311.324 170.623 311.504 170.901C311.684 171.178 311.803 171.486 311.853 171.807C312.18 173.707 312.507 175.614 312.827 177.515C312.939 178.158 312.773 178.816 312.365 179.345C311.958 179.875 311.341 180.234 310.65 180.344V180.344Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M300.244 143.911C209.624 156.979 117.374 156.979 26.754 143.911C26.4081 143.861 26.0763 143.748 25.7776 143.578C25.4789 143.409 25.2191 143.186 25.0132 142.923C24.8073 142.661 24.6592 142.363 24.5775 142.047C24.4957 141.73 24.482 141.403 24.5369 141.082C24.8247 139.422 25.1081 137.764 25.3871 136.108C25.4412 135.789 25.5627 135.482 25.7446 135.207C25.9265 134.931 26.1652 134.691 26.4471 134.501C26.729 134.311 27.0485 134.174 27.3873 134.099C27.7262 134.023 28.0777 134.011 28.4217 134.062C117.937 146.966 209.061 146.966 298.576 134.062C298.92 134.011 299.272 134.023 299.61 134.099C299.949 134.174 300.269 134.311 300.551 134.501C300.832 134.691 301.071 134.931 301.253 135.207C301.435 135.482 301.556 135.789 301.611 136.108C301.894 137.764 302.177 139.422 302.461 141.082C302.516 141.403 302.502 141.73 302.42 142.047C302.339 142.363 302.19 142.661 301.984 142.923C301.779 143.186 301.519 143.409 301.22 143.578C300.921 143.748 300.59 143.861 300.244 143.911V143.911Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M291.553 107.478C206.691 119.701 120.308 119.701 35.4463 107.478C35.1001 107.428 34.7678 107.316 34.4687 107.146C34.1696 106.977 33.9094 106.755 33.7034 106.492C33.4973 106.229 33.3493 105.93 33.2679 105.614C33.1866 105.298 33.1734 104.969 33.2293 104.648C33.4691 103.191 33.7154 101.738 33.9683 100.288C34.0793 99.6434 34.4609 99.0654 35.0295 98.6808C35.5981 98.2963 36.3076 98.1363 37.0029 98.236C120.832 110.314 206.167 110.314 289.996 98.236C290.691 98.1363 291.401 98.2963 291.97 98.6808C292.538 99.0654 292.92 99.6434 293.031 100.288C293.279 101.742 293.526 103.195 293.77 104.648C293.826 104.969 293.813 105.298 293.731 105.614C293.65 105.93 293.502 106.229 293.296 106.492C293.09 106.755 292.83 106.977 292.53 107.146C292.231 107.316 291.899 107.428 291.553 107.478V107.478Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M163.499 226.226C233.531 226.226 290.303 223.148 290.303 219.352C290.303 215.556 233.531 212.479 163.499 212.479C93.4674 212.479 36.6953 215.556 36.6953 219.352C36.6953 223.148 93.4674 226.226 163.499 226.226Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M148.287 152.546C129.615 128.731 116.816 100.701 115.934 92.2246L147.227 99.2623C147.227 99.2623 157.535 128.633 163.067 145.496C168.829 163.026 144.016 210.292 144.016 210.292L136.436 209.564C143.84 183.016 140.544 163.822 148.287 152.546Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M136.588 207.201C137.798 202.465 140.839 185.876 142.219 175.45C152.264 174.563 158.569 176.694 158.569 176.694C158.569 178.237 150.296 199.842 145.129 212.654L136.588 207.201Z"
                  fill="#407BFF"
                />
                <path
                  d="M142.219 175.45C142.075 176.549 141.912 177.715 141.729 178.935C147.035 178.71 152.352 179.097 157.555 180.089C157.988 178.984 158.324 177.849 158.562 176.694C158.562 176.694 152.264 174.563 142.219 175.45Z"
                  fill="#263238"
                />
                <path
                  d="M145.585 97.0459C145.585 97.0459 147.986 98.5882 148.201 99.7055C150.235 101.479 154.781 113.064 155.35 118.456C155.919 123.849 159.803 126.15 158.574 132.101C154.892 130.018 138.051 138.27 138.051 138.27C133.329 135.61 132.571 129.587 129.549 125.616C126.338 121.401 122.892 112.864 121.263 107.873C119.543 102.62 118.791 98.9769 118.791 98.9769L145.585 97.0459Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M129.968 106.318C127.817 102.845 122.395 102.31 120.309 104.812C120.583 105.751 120.902 106.763 121.263 107.848C122.898 112.821 126.338 121.383 129.55 125.603C129.733 125.84 129.909 126.089 130.079 126.344C133.062 120.77 133.513 112.05 129.968 106.318Z"
                  fill="black"
                />
                <path
                  d="M159.365 215.411C153.054 213.377 149.313 211.95 147.685 208.459C147.685 208.459 149.353 208.732 148.117 206.789C146.881 204.846 143.238 203.558 142.231 206.236C142.231 206.236 138.006 204.415 135.848 206.084L133.232 214.197C133.191 214.354 133.184 214.516 133.212 214.675C133.24 214.835 133.302 214.987 133.394 215.124C133.486 215.261 133.606 215.379 133.748 215.472C133.889 215.565 134.05 215.631 134.219 215.666C138.11 216.365 140.452 216.176 144.219 216.802C148.633 217.53 151.622 218.466 156.874 218.623C160.059 218.696 160.673 215.836 159.365 215.411Z"
                  fill="#263238"
                />
                <path
                  d="M142.912 217.628L141.598 217.391L140.996 215.563L144.207 216.146L142.912 217.628Z"
                  fill="#263238"
                />
                <path
                  d="M146.34 218.15L145.032 217.913L144.424 216.085L147.642 216.668L146.34 218.15Z"
                  fill="#263238"
                />
                <path
                  d="M150.243 218.824L148.916 218.727L148.092 216.972L151.362 217.215L150.243 218.824Z"
                  fill="#263238"
                />
                <path
                  d="M153.95 219.194L152.616 219.14L151.727 217.415L155.003 217.549L153.95 219.194Z"
                  fill="#263238"
                />
                <path
                  d="M157.619 219.346L156.285 219.291L155.402 217.567L158.672 217.7L157.619 219.346Z"
                  fill="#263238"
                />
                <path
                  d="M135.62 216.692L134.305 216.455L133.697 214.627L136.915 215.21L135.62 216.692Z"
                  fill="#263238"
                />
                <path
                  d="M139.242 217.251L137.934 217.014L137.326 215.18L140.544 215.763L139.242 217.251Z"
                  fill="#263238"
                />
                <path
                  d="M162.611 50.6725C163.919 51.3769 165.227 52.1359 166.535 52.901C167.843 53.6661 169.118 54.4373 170.38 55.2388L172.284 56.4532L174.161 57.6677L177.79 60.0055L174.965 59.3618C176.489 59.3618 178.026 59.4529 179.576 59.3618C181.126 59.2707 182.689 59.2282 184.258 59.0704C185.828 58.9125 187.397 58.7182 188.98 58.4631C189.765 58.3356 190.556 58.202 191.341 58.0563L193.591 57.613L194.029 57.528C194.713 57.3949 195.425 57.4844 196.046 57.7815C196.667 58.0786 197.159 58.5652 197.439 59.1594C197.719 59.7537 197.771 60.4193 197.584 61.0445C197.398 61.6697 196.985 62.2162 196.416 62.5922L195.762 63.0173L195.167 63.3998C194.762 63.6488 194.369 63.8735 193.964 64.1042C193.153 64.5475 192.335 64.9725 191.498 65.3551C189.823 66.1354 188.095 66.8129 186.325 67.3832C184.545 67.9543 182.727 68.4208 180.884 68.7798C179.021 69.1492 177.136 69.4149 175.24 69.5753C174.49 69.638 173.736 69.5144 173.055 69.217L172.401 68.9255C170.838 68.2333 169.465 67.5957 168.072 66.8913C166.679 66.187 165.325 65.519 163.978 64.8025C162.63 64.086 161.296 63.3513 159.969 62.6044C158.641 61.8575 157.353 61.0863 156.045 60.2666C154.75 59.4335 153.851 58.1691 153.535 56.7364C153.219 55.3037 153.509 53.813 154.347 52.5742C155.184 51.3354 156.503 50.444 158.03 50.0852C159.557 49.7265 161.174 49.9282 162.545 50.6482L162.611 50.6725Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M156.463 45.3047C162.303 47.1992 169.752 53.9211 171.995 55.3785C174.977 57.3094 174.402 62.1368 172.845 64.2257C171.629 65.8651 169.471 67.6139 166.41 66.9642C163.349 66.3145 158.824 63.9281 158.824 63.9281C158.824 63.9281 149.347 42.639 156.463 45.3047Z"
                  fill="#407BFF"
                />
                <path
                  opacity="0.2"
                  d="M156.463 45.3047C162.303 47.1992 169.752 53.9211 171.995 55.3785C174.977 57.3094 174.402 62.1368 172.845 64.2257C171.629 65.8651 169.471 67.6139 166.41 66.9642C163.349 66.3145 158.824 63.9281 158.824 63.9281C158.824 63.9281 149.347 42.639 156.463 45.3047Z"
                  fill="black"
                />
                <path
                  d="M192.054 58.2142L198.162 55.8643L199.051 63.1509C199.051 63.1509 193.237 64.675 191.857 61.9365L192.054 58.2142Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M204.552 58.2203L204.395 60.8374C204.365 61.3426 204.143 61.8217 203.768 62.1888C203.393 62.5559 202.89 62.7872 202.348 62.8412L199.078 63.1752L198.162 55.8643L202.328 55.9918C202.632 56.0003 202.932 56.065 203.209 56.1821C203.486 56.2992 203.736 56.4663 203.943 56.6737C204.149 56.8811 204.31 57.1246 204.414 57.3901C204.519 57.6557 204.566 57.9379 204.552 58.2203V58.2203Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M77.8972 119.568C74.4441 115.888 70.834 117.023 69.2121 118.882C66.7138 121.729 66.3606 122.95 64.3659 125.986C62.0312 129.538 59.0555 130.88 59.0293 135.762C59.0293 137.815 62.2993 140.905 64.6733 138.143C67.0219 135.423 69.8909 133.13 73.1361 131.378C75.5624 131.226 78.924 130.516 76.8116 128.463C76.8116 128.463 80.1862 122.051 77.8972 119.568Z"
                  fill="#263238"
                />
                <path
                  d="M69.0547 118.438L70.0815 117.643L71.9912 118.359L69.4733 120.308L69.0547 118.438Z"
                  fill="#263238"
                />
                <path
                  d="M67.0488 121.007L67.8402 120.005L69.8806 120.272L67.9448 122.731L67.0488 121.007Z"
                  fill="#263238"
                />
                <path
                  d="M65.2617 123.587L65.9615 122.531L68.0151 122.634L66.3147 125.239L65.2617 123.587Z"
                  fill="#263238"
                />
                <path
                  d="M63.5488 126.392L64.2421 125.336L66.2956 125.439L64.5952 128.044L63.5488 126.392Z"
                  fill="#263238"
                />
                <path
                  d="M61.7891 128.482L62.6785 127.559L64.6797 128.008L62.5019 130.279L61.7891 128.482Z"
                  fill="#263238"
                />
                <path
                  d="M60.082 130.661L60.9649 129.732L62.9727 130.176L60.7949 132.453L60.082 130.661Z"
                  fill="#263238"
                />
                <path
                  d="M58.9121 133.643L59.3699 132.477L61.4104 132.21L60.292 135.064L58.9121 133.643Z"
                  fill="#263238"
                />
                <path
                  d="M90.7557 134.123C103.077 117.819 101.475 99.2623 113.43 92.2246L140.839 96.1958C140.839 96.1958 116.451 137.754 96.2035 154.185C81.3381 166.251 69.6773 125.087 69.6773 125.087C69.2849 120.958 71.1226 119.574 74.458 120.029C74.458 120.035 85.4845 125.087 90.7557 134.123Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M74.458 120.035C71.1226 119.58 69.2849 120.964 69.6773 125.093C71.1478 130.053 72.9632 134.919 75.112 139.66C73.6602 133.515 80.2525 126.526 85.249 127.419C82.0642 124.477 78.4278 121.988 74.458 120.035Z"
                  fill="#407BFF"
                />
                <path
                  d="M81.9734 124.656C77.9513 125.208 73.6218 129.623 72.8828 134.371C73.5368 136.041 74.2824 137.826 75.1064 139.63C73.6611 133.491 80.2534 126.496 85.25 127.388C84.2091 126.426 83.1155 125.514 81.9734 124.656Z"
                  fill="#263238"
                />
                <path
                  d="M112.448 92.2246C112.448 92.2246 109.898 93.5423 109.558 94.6535C107.347 96.2383 101.592 107.357 100.454 112.664C99.3161 117.971 95.3594 119.701 95.948 125.743C104.535 125.458 114.875 134.311 114.875 134.311C119.852 132.095 121.892 125.773 125.378 122.167C128.864 118.56 134.017 111.036 137.117 106.379C139.008 103.499 140.308 100.318 140.95 96.9974L112.448 92.2246Z"
                  fill="#263238"
                />
                <path
                  d="M114.999 92.3398C113.794 93.7696 112.82 95.3549 112.108 97.0458C110.068 98.3513 104.11 110.903 103.005 115.165C101.899 119.428 97.7007 122.112 98.1258 125.828C98.564 126.344 100.382 126.769 102.05 126.769C101.625 123.059 105.719 120.236 106.824 115.973C107.929 111.71 113.881 99.1589 115.928 97.8473C116.65 96.1632 117.623 94.5812 118.818 93.1474L114.999 92.3398Z"
                  fill="white"
                />
                <path
                  d="M121.207 48.4013C118.872 68.8828 112.168 88.7146 111.338 92.8801C142.305 95.2483 145.817 104.514 150.323 101.739C156.477 85.9518 162.67 70.9534 165.313 59.6045C165.963 56.8057 165.538 53.884 164.112 51.3455C162.686 48.8069 160.348 46.8116 157.504 45.7052C150.173 42.9149 142.592 40.7266 134.849 39.1655C133.291 38.8597 131.682 38.8615 130.125 39.1709C128.568 39.4803 127.098 40.0903 125.812 40.9613C124.525 41.8323 123.45 42.9448 122.657 44.2265C121.864 45.5083 121.37 46.9307 121.207 48.4013Z"
                  fill="#407BFF"
                />
                <path
                  d="M154.933 44.746C148.906 42.5881 142.723 40.8249 136.431 39.4692C136.296 39.7295 136.235 40.018 136.256 40.3065C136.277 40.5949 136.377 40.8734 136.549 41.1148C138.046 43.5437 143.233 45.7297 148.537 46.8834C149.649 47.1514 150.789 47.3062 151.937 47.3449C153.245 47.3449 154.141 46.9623 154.632 46.2154C154.909 45.7716 155.015 45.2533 154.933 44.746V44.746Z"
                  fill="white"
                />
                <path
                  d="M141.265 29.3223L151.121 31.2593C151.775 35.9227 151.121 38.7888 152.246 42.5475C153.462 44.7153 155.189 46.8831 148.891 45.5168C142.351 44.102 138.322 41.7278 138.021 40.7501C141.919 39.2807 141.265 33.8278 141.265 29.3223Z"
                  fill="#7F3E3B"
                />
                <path
                  opacity="0.2"
                  d="M141.127 36.0081C141.021 37.037 140.701 38.037 140.186 38.9531C145.195 40.5926 148.4 38.7163 150.283 36.0506C147.247 35.662 144.168 35.6477 141.127 36.0081V36.0081Z"
                  fill="black"
                />
                <path
                  d="M136.908 16.6378C133.566 18.5749 135.6 22.1028 132.33 24.1856C133.609 24.4282 134.939 24.2296 136.071 23.6269C136.071 23.6269 135.011 26.3837 133.69 27.2338C137.176 27.7742 141.002 26.2319 141.303 24.7503C141.604 23.2687 140.78 14.385 136.908 16.6378Z"
                  fill="#263238"
                />
                <path
                  d="M153.546 22.9589C153.742 28.9826 154.2 32.4984 151.23 35.8259C146.777 40.8294 138.523 38.7042 136.385 32.8445C134.462 27.5677 134.462 18.6052 140.551 15.733C141.9 15.097 143.401 14.789 144.913 14.8381C146.425 14.8871 147.9 15.2914 149.198 16.0133C150.496 16.7352 151.576 17.751 152.336 18.9657C153.097 20.1804 153.513 21.5543 153.546 22.9589V22.9589Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M152.318 28.3933C149.191 27.0331 148.806 22.6612 150.689 20.8395C148.773 18.2952 137.321 19.8558 132.188 14.8098C135.059 14.5608 138.119 15.0648 140.735 14.2633C143.351 13.4618 146.307 12.3323 150.689 13.0489C155.712 13.8747 157.164 16.5465 156.307 18.1738C160.133 18.7082 158.858 27.9804 152.318 28.3933Z"
                  fill="#263238"
                />
                <path
                  d="M139.4 33.6583C139.4 33.6583 141.362 32.8932 147.248 31.7759C146.934 33.2696 145.94 34.6298 142.958 35.1763C139.976 35.7228 139.4 33.6583 139.4 33.6583Z"
                  fill="#263238"
                />
                <path
                  d="M144.182 33.6517C143.273 33.8035 142.379 34.0207 141.507 34.3014C141.333 34.3663 141.186 34.4805 141.086 34.6277C140.986 34.7749 140.939 34.9476 140.951 35.1212C141.589 35.2978 142.265 35.3166 142.913 35.1758C144.049 35.0252 145.116 34.5813 145.993 33.8946C145.843 33.591 145.019 33.4999 144.182 33.6517Z"
                  fill="white"
                />
                <path
                  d="M139.654 33.5669C139.896 33.828 140.308 34.6235 140.962 34.6053C142.689 34.2732 144.389 33.8309 146.05 33.2815C146.567 33.1115 146.803 32.3464 146.999 31.8242C144.513 32.2572 142.059 32.8393 139.654 33.5669V33.5669Z"
                  fill="white"
                />
                <path
                  d="M156.706 27.9322C156.573 28.6709 156.282 29.3775 155.852 30.0113C155.422 30.645 154.861 31.1932 154.201 31.6241C152.422 32.7717 150.814 31.4601 150.702 29.5656C150.598 27.8593 151.396 25.2058 153.475 24.8172C155.555 24.4285 157.013 26.1105 156.706 27.9322Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M143.959 26.3105C144.011 26.8024 143.769 27.2153 143.422 27.2457C143.076 27.276 142.768 26.8935 142.716 26.4077C142.664 25.9219 142.906 25.5029 143.226 25.5029C143.547 25.5029 143.913 25.8248 143.959 26.3105Z"
                  fill="#263238"
                />
                <path
                  d="M137.738 27.185C137.79 27.6769 137.548 28.0898 137.202 28.1201C136.855 28.1505 136.548 27.774 136.495 27.2822C136.443 26.7903 136.685 26.3774 137.032 26.3531C137.378 26.3288 137.692 26.7175 137.738 27.185Z"
                  fill="#263238"
                />
                <path
                  d="M139.904 27.501C139.904 27.501 138.988 30.4035 137.805 31.8669C138.812 32.6016 140.362 32.1098 140.362 32.1098L139.904 27.501Z"
                  fill="#630F0F"
                />
                <path
                  d="M144.253 22.4974C144.269 22.4499 144.269 22.3991 144.253 22.3516C144.245 22.3144 144.229 22.2789 144.207 22.2474C144.184 22.2158 144.155 22.1888 144.121 22.1679C144.086 22.147 144.048 22.1326 144.008 22.1255C143.968 22.1185 143.927 22.119 143.887 22.127C143.4 22.2061 142.942 22.3918 142.548 22.6684C142.155 22.9451 141.838 23.3048 141.624 23.7179C141.593 23.7888 141.594 23.868 141.626 23.9384C141.658 24.0088 141.718 24.0648 141.794 24.0943C141.871 24.1206 141.956 24.1183 142.032 24.0877C142.107 24.0572 142.167 24.0009 142.199 23.9304V23.9304C142.378 23.612 142.635 23.3366 142.948 23.1259C143.261 22.9152 143.623 22.7748 144.004 22.716C144.065 22.7073 144.121 22.6817 144.165 22.6427C144.21 22.6036 144.24 22.5529 144.253 22.4974Z"
                  fill="#263238"
                />
                <path
                  d="M134.678 23.5966C134.716 23.6273 134.762 23.6489 134.811 23.6595C134.86 23.6701 134.911 23.6693 134.959 23.6573C135.332 23.5528 135.726 23.533 136.108 23.5996C136.491 23.6662 136.851 23.8172 137.157 24.0399C137.216 24.0929 137.294 24.1226 137.376 24.1226C137.458 24.1226 137.536 24.0929 137.595 24.0399C137.652 23.9854 137.684 23.9124 137.684 23.8364C137.684 23.7604 137.652 23.6875 137.595 23.633C137.212 23.3474 136.761 23.1518 136.279 23.063C135.798 22.9742 135.3 22.9948 134.829 23.123C134.79 23.1328 134.753 23.1497 134.721 23.1728C134.689 23.1958 134.662 23.2246 134.642 23.2573C134.622 23.2901 134.609 23.3262 134.604 23.3636C134.599 23.4009 134.602 23.4389 134.613 23.4751C134.622 23.5204 134.645 23.5623 134.678 23.5966V23.5966Z"
                  fill="#263238"
                />
                <path
                  d="M108.01 48.978C103.176 51.4069 110.24 61.6628 116.047 59.9991C120.023 57.4305 121.685 48.5773 108.01 48.978Z"
                  fill="#263238"
                />
                <path
                  d="M130.473 51.6137L128.923 52.5488L127.399 53.4353C126.379 54.0021 125.352 54.5546 124.319 55.0931C122.232 56.1557 120.12 57.1637 117.949 58.1291C115.777 59.0946 113.547 59.9508 111.258 60.7463C110.67 60.9406 110.127 61.1349 109.506 61.3231L107.648 61.8878L105.686 62.3736C105.032 62.5133 104.463 62.6226 103.842 62.738C99.1734 63.5348 94.4587 64.0782 89.722 64.3653C85.0721 64.6811 80.4549 64.845 75.7722 64.76C75.0343 64.7467 74.3265 64.4857 73.7798 64.0253C73.233 63.565 72.8844 62.9364 72.7982 62.2558C72.7121 61.5752 72.8943 60.8887 73.3112 60.3231C73.7281 59.7576 74.3514 59.3514 75.0659 59.1796H75.1051C79.5131 58.1231 83.9734 57.1576 88.3683 56.186C90.5657 55.6821 92.7566 55.2206 94.9083 54.6923C97.0599 54.164 99.205 53.6661 101.232 53.0832L102.71 52.646L104.018 52.2209L105.326 51.6137C105.771 51.4254 106.275 51.1826 106.739 50.97C108.662 50.1078 110.565 49.1484 112.481 48.1768C114.397 47.2053 116.301 46.1851 118.197 45.1407L123.828 42.0743L123.998 41.9832C125.373 41.2217 127.014 40.9909 128.57 41.3404C130.125 41.6899 131.471 42.5917 132.319 43.8523C133.166 45.113 133.448 46.6319 133.103 48.083C132.757 49.5341 131.813 50.8017 130.473 51.6137V51.6137Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M78.6167 59.3739L71.8086 58.4448L72.9466 66.029C72.9466 66.029 79.2184 66.1747 79.8397 63.0961L78.6167 59.3739Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M66.0536 62.3614L66.93 64.9603C67.102 65.4602 67.459 65.8875 67.9378 66.1665C68.4166 66.4454 68.9863 66.5581 69.546 66.4844L72.9533 66.029L71.8154 58.4448L67.6559 59.5743C67.3512 59.6561 67.0673 59.7937 66.8208 59.9792C66.5744 60.1646 66.3704 60.394 66.2211 60.6538C66.0717 60.9136 65.9799 61.1985 65.9512 61.4918C65.9224 61.7851 65.9573 62.0808 66.0536 62.3614V62.3614Z"
                  fill="#7F3E3B"
                />
                <path
                  d="M133.854 39.0139C129.446 38.1213 124.698 39.5604 122.618 40.5683C120.538 41.5763 113.94 46.4341 108.008 48.9783C118.341 51.3465 116.811 58.0866 116.045 59.9994C128.838 56.6779 130.277 53.6054 132.762 51.1522C135.247 48.699 137.34 39.7122 133.854 39.0139Z"
                  fill="#407BFF"
                />
                <path
                  opacity="0.2"
                  d="M133.854 39.0139C129.446 38.1213 124.698 39.5604 122.618 40.5683C120.538 41.5763 113.94 46.4341 108.008 48.9783C118.341 51.3465 116.811 58.0866 116.045 59.9994C128.838 56.6779 130.277 53.6054 132.762 51.1522C135.247 48.699 137.34 39.7122 133.854 39.0139Z"
                  fill="black"
                />
                <path
                  d="M161.65 63.5576C161.33 65.8286 159.688 67.4984 157.909 67.2859C156.13 67.0734 155.005 65.0574 155.326 62.7864C155.646 60.5154 157.321 58.8456 159.073 59.0642C160.826 59.2828 161.971 61.2866 161.65 63.5576Z"
                  fill="white"
                />
                <path
                  d="M145.607 19.1816C139.401 19.1209 135.693 20.6329 132.697 20.0682C136.248 18.4712 137.406 16.5949 140.186 16.2427C142.965 15.8905 145.607 19.1816 145.607 19.1816Z"
                  fill="#263238"
                />
                <path
                  d="M151.866 18.9209C149.904 20.0078 145.142 19.5281 142.873 20.19C146.28 20.7365 150.459 21.7262 152.336 20.8336C154.213 19.941 151.866 18.9209 151.866 18.9209Z"
                  fill="#263238"
                />
                <path
                  d="M152.878 19.595C153.666 19.4494 154.428 19.2 155.141 18.8542C155.765 18.4956 156.22 17.9319 156.416 17.2754C156.516 16.9429 156.545 16.5952 156.5 16.2524C156.455 15.9095 156.338 15.5783 156.155 15.2777C155.749 14.6338 155.163 14.1032 154.461 13.7414C152.956 12.9915 151.235 12.7025 149.543 12.9156C148.667 13.0828 147.763 13.0828 146.887 12.9156C146.045 12.6527 145.265 12.2403 144.592 11.7012C145.292 12.1889 146.087 12.5457 146.933 12.7517C147.793 12.8502 148.666 12.782 149.497 12.5513C151.289 12.2059 153.154 12.3994 154.82 13.1039C155.686 13.4892 156.424 14.0825 156.959 14.8223C157.524 15.6162 157.726 16.586 157.521 17.5183C157.311 18.4669 156.728 19.3089 155.886 19.8804C155.077 20.3596 154.195 20.7239 153.27 20.9613C153.078 21.0217 152.867 21.0086 152.685 20.9249C152.503 20.8412 152.364 20.6937 152.299 20.515C152.234 20.3362 152.248 20.1408 152.338 19.9717C152.429 19.8026 152.587 19.6736 152.78 19.6132H152.839L152.878 19.595Z"
                  fill="#263238"
                />
                <path
                  d="M142.18 18.6417C141.963 18.2379 141.65 17.885 141.265 17.6094C140.823 17.3433 140.326 17.1673 139.806 17.0933C138.654 16.9644 137.486 17.085 136.392 17.4455C135.816 17.6089 135.258 17.8224 134.725 18.0831C134.208 18.3503 133.672 18.6903 133.096 18.915C132.522 19.1733 131.896 19.3161 131.258 19.3339C130.637 19.3312 130.018 19.2598 129.414 19.1214C130.021 19.2033 130.636 19.2155 131.245 19.1579C131.84 19.0859 132.411 18.8954 132.92 18.5992C133.443 18.3199 133.9 17.992 134.424 17.6277C134.95 17.2954 135.508 17.0088 136.091 16.7715C137.283 16.2518 138.588 15.9961 139.904 16.0246C140.614 16.0529 141.309 16.2271 141.938 16.5347C142.579 16.8805 143.123 17.3609 143.527 17.9373C143.583 18.0171 143.622 18.1063 143.64 18.1998C143.659 18.2933 143.658 18.3893 143.636 18.4823C143.615 18.5754 143.574 18.6636 143.516 18.742C143.458 18.8204 143.384 18.8874 143.298 18.9393C143.213 18.9911 143.117 19.0267 143.016 19.0441C142.915 19.0614 142.812 19.0602 142.712 19.0405C142.611 19.0208 142.516 18.9829 142.432 18.9291C142.347 18.8752 142.275 18.8065 142.219 18.7267C142.216 18.7066 142.216 18.6861 142.219 18.666L142.18 18.6417Z"
                  fill="#263238"
                />
                <path
                  d="M135.246 12.8242C135.246 12.8242 137.385 14.8645 141.61 15.0102L143.48 13.4436C139.804 14.4333 135.246 12.8242 135.246 12.8242Z"
                  fill="#263238"
                />
                <path
                  d="M212.34 171.928C223.458 155.916 231.358 138.908 232.437 133.491L211.849 136.388C211.849 136.388 205.434 156.802 202.523 167.878C199.495 179.415 208.285 209.169 208.285 209.169L213.203 209.491C211.601 191.803 217.781 178.948 212.34 171.928Z"
                  fill="#CE7A63"
                />
                <path
                  d="M213.857 210.705C213.641 207.566 213.418 194.116 214.641 187.412C210.849 186.054 206.71 185.758 202.739 186.562C202.555 187.546 205.512 201.876 207.317 210.566L213.857 210.705Z"
                  fill="#263238"
                />
                <path
                  d="M197.749 212.32C201.889 211.179 204.289 210.644 205.78 208.616C205.78 208.616 204.688 208.616 205.734 207.505C206.781 206.394 210.528 205.744 210.816 207.56C210.816 207.56 213.131 206.849 214.282 208.167L214.851 213.632C214.859 213.736 214.844 213.841 214.807 213.939C214.769 214.038 214.71 214.128 214.634 214.204C214.557 214.281 214.464 214.342 214.361 214.383C214.257 214.425 214.146 214.446 214.034 214.446C211.47 214.446 210.012 214.057 207.533 214.021C204.636 213.978 202.654 214.537 199.253 214.488C197.2 214.427 196.886 212.563 197.749 212.32Z"
                  fill="#407BFF"
                />
                <path
                  d="M213.015 214.913H213.878L214.506 213.82H212.387L213.015 214.913Z"
                  fill="#407BFF"
                />
                <path
                  d="M210.64 214.846H211.503L212.131 213.753H210.012L210.64 214.846Z"
                  fill="#407BFF"
                />
                <path
                  d="M208.259 214.671H209.122L209.75 213.578H207.631L208.259 214.671Z"
                  fill="#407BFF"
                />
                <path
                  d="M205.886 214.846H206.749L207.377 213.753H205.258L205.886 214.846Z"
                  fill="#407BFF"
                />
                <path
                  d="M203.505 214.913H204.368L204.996 213.82H202.877L203.505 214.913Z"
                  fill="#407BFF"
                />
                <path
                  d="M201.132 214.913H201.995L202.623 213.82H200.504L201.132 214.913Z"
                  fill="#407BFF"
                />
                <path
                  d="M198.751 214.913H199.614L200.242 213.82H198.123L198.751 214.913Z"
                  fill="#407BFF"
                />
                <path
                  d="M242.091 171.048C237.009 154.343 236.99 142.126 233.837 136.874L218.285 138.695C218.285 138.695 226.087 161.812 230.188 172.56C236.486 185.147 250.514 201.184 250.514 201.184L254.942 198.512C247.735 186.089 247.336 179.403 242.091 171.048Z"
                  fill="#CE7A63"
                />
                <path
                  d="M257.355 201.209C255.772 198.604 249.599 187.2 247.663 181.006C243.831 181.301 240.176 182.629 237.146 184.826C237.428 185.737 246.302 196.843 251.724 203.577L257.355 201.209Z"
                  fill="#263238"
                />
                <path
                  d="M246.237 209.09C247.617 207.329 249.18 204.84 249.553 202.502C249.553 202.502 247.8 202.143 248.206 200.814C248.611 199.484 252.332 198.227 253.385 199.666C253.385 199.666 254.582 197.122 256.145 197.796L258.886 201.973C259.343 202.581 259.54 203.698 258.12 204.487C256.867 205.149 255.716 205.967 254.7 206.916C252.79 208.738 253.078 210.189 249.723 211.039C247.866 211.543 244.367 211.476 246.237 209.09Z"
                  fill="#407BFF"
                />
                <path
                  d="M258.669 204.506L259.212 203.929L258.761 202.83L257.439 204.238L258.669 204.506Z"
                  fill="#407BFF"
                />
                <path
                  d="M256.831 205.568L257.564 205.234L257.61 204.062L255.805 204.882L256.831 205.568Z"
                  fill="#407BFF"
                />
                <path
                  d="M255.328 206.783L256.002 206.352L255.851 205.18L254.203 206.248L255.328 206.783Z"
                  fill="#407BFF"
                />
                <path
                  d="M254.084 208.307L254.555 207.688L253.992 206.637L252.828 208.161L254.084 208.307Z"
                  fill="#407BFF"
                />
                <path
                  d="M252.731 209.782L253.281 209.211L252.843 208.112L251.502 209.503L252.731 209.782Z"
                  fill="#407BFF"
                />
                <path
                  d="M250.991 210.924L251.736 210.614L251.828 209.442L249.99 210.201L250.991 210.924Z"
                  fill="#407BFF"
                />
                <path
                  d="M249.096 211.476L249.893 211.313L250.233 210.183L248.271 210.59L249.096 211.476Z"
                  fill="#407BFF"
                />
                <path
                  d="M246.936 211.55L247.754 211.568L248.375 210.548L246.367 210.499L246.936 211.55Z"
                  fill="#407BFF"
                />
                <path
                  d="M213.046 135.052C213.046 135.052 211.404 135.92 211.195 136.624C209.776 137.663 206.617 146.662 206.434 150.159C206.251 153.657 203.864 155.278 204.89 159.079C208.69 161.812 217.925 163.397 217.925 163.397C220.868 161.52 222.274 157.076 224.072 154.404C225.982 151.574 227.172 145.429 228.029 142.162C228.931 138.719 230.187 137.705 230.187 137.705L213.046 135.052Z"
                  fill="#407BFF"
                />
                <path
                  opacity="0.2"
                  d="M225.348 145.733C219.409 149.983 218.553 157.41 220.057 161.363C221.672 159.213 222.771 156.359 224.072 154.428C225.439 152.394 226.44 148.659 227.212 145.502L225.348 145.733Z"
                  fill="black"
                />
                <path
                  d="M210.49 111.121C209.659 111.655 208.809 112.147 207.959 112.633C207.108 113.119 206.245 113.599 205.343 114.054C204.44 114.509 203.583 114.971 202.687 115.408C201.791 115.845 200.902 116.276 199.895 116.726L199.509 116.896C199.439 116.924 199.367 116.949 199.293 116.969C196.574 117.628 193.777 117.968 190.968 117.983C189.601 117.983 188.254 117.952 186.906 117.849C185.549 117.745 184.2 117.569 182.865 117.321C182.344 117.311 181.849 117.11 181.489 116.761C181.128 116.413 180.931 115.946 180.942 115.463C180.952 114.98 181.169 114.52 181.544 114.185C181.919 113.85 182.423 113.668 182.943 113.677H183.054C184.231 113.501 185.5 113.325 186.71 113.125C187.92 112.924 189.143 112.718 190.333 112.475C191.524 112.232 192.681 111.959 193.813 111.674C194.944 111.388 196.023 111.018 197.05 110.653L196.448 110.896L198.796 109.384C199.598 108.862 200.414 108.346 201.242 107.836C202.059 107.32 202.897 106.822 203.727 106.324C204.558 105.826 205.408 105.34 206.265 104.885C207.155 104.365 208.232 104.194 209.258 104.411C210.284 104.628 211.175 105.215 211.735 106.042C212.296 106.869 212.479 107.868 212.245 108.821C212.012 109.773 211.38 110.601 210.49 111.121Z"
                  fill="#CF7A64"
                />
                <path
                  d="M210.234 101.406C206.46 102.62 201.64 106.974 200.188 107.921C198.266 109.172 198.638 112.293 199.639 113.641C200.43 114.704 201.823 115.833 203.805 115.414C205.787 114.995 213.968 110.884 213.968 110.884C213.968 110.884 214.838 99.6993 210.234 101.406Z"
                  fill="#407BFF"
                />
                <path
                  d="M184.291 113.751L180.014 113.575L181.237 118.208C181.237 118.208 185.128 117.928 185.305 115.979L184.291 113.751Z"
                  fill="#CE7A63"
                />
                <path
                  d="M176.71 116.344L177.429 117.898C177.57 118.198 177.821 118.442 178.137 118.588C178.452 118.733 178.813 118.771 179.156 118.693L181.236 118.208L180.013 113.55L177.508 114.498C177.322 114.566 177.153 114.669 177.011 114.801C176.869 114.932 176.757 115.089 176.683 115.262C176.608 115.434 176.572 115.619 176.577 115.805C176.581 115.991 176.627 116.174 176.71 116.344V116.344Z"
                  fill="#CE7A63"
                />
                <path
                  d="M234.922 134.875C234.922 134.875 236.818 139.424 236.74 140.158C237.649 141.603 239.036 146.838 238.872 150.341C238.709 153.845 240.756 155.764 239.068 159.261C233.719 157.859 226.23 161.879 226.23 161.879C223.47 159.778 223.235 155.515 221.652 152.734C220.07 149.953 217.813 144.463 217.166 140.966C216.518 137.468 216.211 135.446 216.211 135.446L234.922 134.875Z"
                  fill="#407BFF"
                />
                <path
                  opacity="0.8"
                  d="M235.184 156.28C231.593 156.353 227.336 158.023 224.465 159.778C224.893 160.583 225.491 161.299 226.224 161.885C226.224 161.885 233.725 157.853 239.069 159.262C239.45 158.498 239.671 157.673 239.723 156.833C238.258 156.395 236.72 156.208 235.184 156.28V156.28Z"
                  fill="white"
                />
                <path
                  d="M233.687 106.075C233.137 119.379 235.851 134.007 235.276 135.744C215.218 134.602 212.785 138.531 210.136 138.173C207.769 127.54 206.899 116.562 206.029 109.099C205.584 105.304 206.742 102.183 210.725 101.205C215.696 100.054 220.767 99.3084 225.878 98.9769C226.907 98.9145 227.938 99.0542 228.905 99.3868C229.872 99.7194 230.753 100.237 231.489 100.907C232.226 101.577 232.803 102.383 233.181 103.274C233.56 104.164 233.732 105.119 233.687 106.075Z"
                  fill="#263238"
                />
                <path
                  d="M222.824 110.101C223.014 111.995 220.98 113.878 220.98 113.878C220.98 113.878 218.645 112.694 218.455 110.805C218.266 108.917 219.234 108.619 220.417 108.425C221.601 108.231 222.635 108.213 222.824 110.101Z"
                  fill="white"
                />
                <path
                  opacity="0.2"
                  d="M233.686 106.07C233.725 105.156 233.566 104.245 233.219 103.39C232.872 102.534 232.344 101.753 231.665 101.09C228.676 107.005 230.619 112.02 233.771 115.828C233.614 112.634 233.555 109.3 233.686 106.07Z"
                  fill="black"
                />
                <path
                  d="M212.471 100.835C216.541 99.9755 220.672 99.383 224.832 99.062C224.892 99.2407 224.901 99.4308 224.859 99.6137C224.816 99.7967 224.724 99.9664 224.59 100.106C223.393 101.527 219.855 102.487 216.343 102.766C215.604 102.846 214.858 102.846 214.119 102.766C213.784 102.756 213.457 102.662 213.174 102.494C212.891 102.326 212.662 102.091 212.51 101.813C212.371 101.502 212.357 101.155 212.471 100.835V100.835Z"
                  fill="white"
                />
                <path
                  d="M222.693 91.4902L215.499 93.6519C215.708 96.688 217.206 98.6736 214.145 100.228C213.4 100.605 212.098 102.183 216.264 101.849C220.587 101.503 223.406 100.331 223.694 99.7302C222.871 97.0538 222.533 94.2694 222.693 91.4902V91.4902Z"
                  fill="#CE7A63"
                />
                <path
                  opacity="0.2"
                  d="M215.819 95.7706C216.087 97.1915 216.303 98.3331 215.439 99.3046C218.422 98.916 220.815 96.7725 221.044 95.0541C220.166 94.8429 219.251 94.7975 218.353 94.9206C217.456 95.0437 216.594 95.3327 215.819 95.7706V95.7706Z"
                  fill="black"
                />
                <path
                  d="M210.888 81.5801C209.469 83.8207 212.229 85.1323 212.229 85.1323C212.229 85.1323 210.313 90.0386 211.666 93.1112C214.23 91.1499 214.825 84.0029 214.825 84.0029L210.888 81.5801Z"
                  fill="#263238"
                />
                <path
                  d="M223.669 88.2592C223.191 92.1333 223.132 94.4225 220.902 96.2988C217.554 99.1163 212.485 97.0457 211.7 93.1109C210.994 89.5708 211.89 83.8326 216.076 82.521C217.002 82.2297 217.993 82.1613 218.956 82.3224C219.918 82.4835 220.821 82.8687 221.58 83.442C222.339 84.0154 222.928 84.758 223.293 85.6005C223.659 86.443 223.788 87.3578 223.669 88.2592Z"
                  fill="#CE7A63"
                />
                <path
                  d="M221.706 87.4395C221.196 89.5283 219.208 92.0725 219.208 92.0725C217.574 91.8439 215.922 91.7403 214.27 91.7629C211.922 91.8357 210.797 91.3378 210.921 92.704C211.046 94.0703 211.765 95.2908 211.144 97.5618C210.522 99.8328 217.919 98.6852 220.921 97.0092C221.199 96.8521 221.423 96.6262 221.57 96.357C221.717 96.0877 221.78 95.7858 221.752 95.4851C221.47 92.1575 221.752 91.1435 222.543 89.8744C222.62 89.436 222.584 88.9869 222.439 88.5637C222.293 88.1406 222.042 87.7553 221.706 87.4395V87.4395Z"
                  fill="#263238"
                />
                <path
                  d="M214.334 89.334C213.871 90.2762 213.27 91.1548 212.549 91.945C212.772 92.114 213.032 92.2353 213.311 92.3003C213.591 92.3654 213.882 92.3726 214.164 92.3215L214.334 89.334Z"
                  fill="#BA4D3C"
                />
                <path
                  d="M222.693 91.4899C220.411 89.5286 222.183 87.3426 221.738 85.6545C221.294 83.9665 214.178 86.7779 211.124 82.6913C208.07 78.6047 214.276 75.0707 218.514 78.5197C223.746 82.7703 227.265 80.5721 226.545 84.5008C230.025 85.6546 225.695 93.263 222.693 91.4899Z"
                  fill="#263238"
                />
                <path
                  d="M225.779 84.7255C225.779 84.7255 227.826 83.7601 227.427 82.0659C228.86 83.7479 227.591 85.0595 225.779 84.7255Z"
                  fill="#263238"
                />
                <path
                  d="M225.382 91.6905C224.859 92.5378 223.996 93.158 222.981 93.415C221.628 93.7429 221.51 92.2006 221.83 90.9861C222.118 89.9174 223.027 88.7941 224.381 88.9884C225.735 89.1827 226.009 90.6339 225.382 91.6905Z"
                  fill="#CE7A63"
                />
                <path
                  d="M217.05 88.9214C217.05 89.2372 216.834 89.4861 216.612 89.474C216.389 89.4619 216.226 89.1947 216.239 88.8668C216.252 88.5389 216.455 88.3081 216.677 88.3203C216.9 88.3324 217.063 88.6057 217.05 88.9214Z"
                  fill="#263238"
                />
                <path
                  d="M212.982 88.9456C212.982 89.2613 212.766 89.5103 212.543 89.4981C212.321 89.486 212.158 89.2188 212.171 88.8909C212.184 88.563 212.386 88.3262 212.609 88.3383C212.831 88.3505 212.995 88.6541 212.982 88.9456Z"
                  fill="#263238"
                />
                <path
                  d="M217.912 86.6323C217.92 86.6023 217.92 86.5712 217.912 86.5412C217.912 86.5167 217.907 86.4925 217.897 86.47C217.887 86.4475 217.872 86.4272 217.853 86.4102C217.834 86.3932 217.811 86.3799 217.787 86.3711C217.762 86.3623 217.736 86.3582 217.71 86.359C217.39 86.3554 217.074 86.4224 216.787 86.5543C216.501 86.6863 216.252 86.8795 216.062 87.118C216.034 87.1594 216.025 87.209 216.036 87.2566C216.047 87.3041 216.077 87.3459 216.12 87.3731C216.166 87.399 216.22 87.4078 216.273 87.3976C216.325 87.3875 216.371 87.3591 216.402 87.3184C216.551 87.1266 216.747 86.9712 216.975 86.8654C217.203 86.7597 217.455 86.7068 217.71 86.7112C217.748 86.7192 217.788 86.7159 217.825 86.7018C217.861 86.6877 217.892 86.6634 217.912 86.6323V86.6323Z"
                  fill="#263238"
                />
                <path
                  d="M211.294 86.8326C211.323 86.846 211.356 86.853 211.388 86.853C211.421 86.853 211.454 86.846 211.483 86.8326C211.718 86.7502 211.971 86.7215 212.22 86.749C212.47 86.7764 212.708 86.8593 212.916 86.9904C212.957 87.0204 213.01 87.0341 213.063 87.0284C213.115 87.0227 213.163 86.9982 213.197 86.9601C213.213 86.9408 213.225 86.9186 213.232 86.8948C213.239 86.871 213.241 86.8461 213.237 86.8217C213.234 86.7973 213.225 86.7739 213.211 86.7528C213.197 86.7317 213.179 86.7134 213.158 86.699C212.899 86.5289 212.599 86.4195 212.285 86.3804C211.97 86.3413 211.651 86.3735 211.353 86.4743C211.319 86.4867 211.29 86.5069 211.267 86.5329C211.244 86.5589 211.229 86.5899 211.224 86.6229C211.218 86.6558 211.221 86.6897 211.233 86.7211C211.246 86.7525 211.266 86.7804 211.294 86.8022V86.8326Z"
                  fill="#263238"
                />
                <path
                  d="M234.164 101.879C235.472 102.742 236.59 103.592 237.754 104.503C238.918 105.413 240.043 106.324 241.142 107.302C243.441 109.275 245.543 111.437 247.42 113.763L247.591 113.975C247.981 114.468 248.191 115.064 248.192 115.675C248.172 117.244 248.021 118.81 247.741 120.357C247.505 121.839 247.172 123.272 246.825 124.693C246.479 126.113 246.067 127.516 245.622 128.907C245.177 130.297 244.706 131.657 244.144 133.036C244.003 133.474 243.689 133.847 243.266 134.08C242.842 134.314 242.339 134.391 241.857 134.296C241.375 134.201 240.95 133.941 240.664 133.568C240.379 133.195 240.256 132.737 240.318 132.283V132.252C240.403 130.862 240.521 129.447 240.632 128.051C240.743 126.654 240.848 125.263 240.939 123.879C241.031 122.494 241.103 121.122 241.149 119.786C241.196 118.515 241.165 117.241 241.057 115.973L241.829 117.886C240.972 117.011 239.998 116.143 239.01 115.269C238.022 114.394 236.956 113.556 235.904 112.706C234.851 111.856 233.752 111.03 232.634 110.198L229.364 107.769L229.318 107.733C228.906 107.44 228.559 107.074 228.299 106.657C228.039 106.24 227.87 105.779 227.802 105.301C227.734 104.823 227.767 104.338 227.901 103.872C228.035 103.406 228.266 102.97 228.582 102.587C228.898 102.204 229.291 101.883 229.741 101.641C230.19 101.4 230.686 101.243 231.201 101.179C231.716 101.116 232.239 101.147 232.74 101.272C233.242 101.396 233.712 101.611 234.125 101.904L234.164 101.879Z"
                  fill="#CF7A64"
                />
                <path
                  d="M241.379 130.607L238.848 134.007L243.91 135.568C243.91 135.568 245.8 132.234 244.054 131.02L241.379 130.607Z"
                  fill="#CE7A63"
                />
                <path
                  d="M239.638 138.234L241.515 138.501C241.876 138.552 242.244 138.484 242.556 138.307C242.867 138.13 243.101 137.857 243.215 137.535L243.909 135.568L238.847 134.007L238.356 136.57C238.322 136.757 238.327 136.949 238.373 137.135C238.419 137.32 238.504 137.495 238.623 137.65C238.743 137.805 238.894 137.936 239.068 138.036C239.242 138.136 239.436 138.203 239.638 138.234Z"
                  fill="#CE7A63"
                />
                <path
                  d="M227.06 99.0073C229.957 98.6996 232.875 99.3887 235.261 100.944C237.995 102.821 239.342 104.114 241.546 107.472C240.834 110.321 239.019 112.828 236.445 114.516C232.03 111.237 228.309 108.771 227.086 106.919C225.863 105.067 224.791 99.238 227.06 99.0073Z"
                  fill="#407BFF"
                />
                <path
                  opacity="0.8"
                  d="M204.792 155.892C204.556 156.947 204.59 158.039 204.89 159.08C208.69 161.812 217.924 163.397 217.924 163.397C218.707 162.876 219.386 162.233 219.932 161.496C216.681 160.695 208.192 157.956 204.792 155.892Z"
                  fill="white"
                />
                <path
                  d="M248.997 184.595C245.715 185.454 242.569 186.71 239.639 188.329C239.979 188.76 240.338 189.234 240.718 189.726C243.527 188.192 246.539 187.004 249.678 186.192C249.436 185.639 249.207 185.105 248.997 184.595Z"
                  fill="#407BFF"
                />
                <path
                  d="M250.377 187.752C247.408 188.579 244.554 189.729 241.875 191.177C242.222 191.626 242.588 192.094 242.967 192.568C245.547 191.201 248.288 190.115 251.136 189.331C250.868 188.803 250.619 188.281 250.377 187.752Z"
                  fill="#407BFF"
                />
                <path
                  d="M203.203 189.914C203.295 190.43 203.399 191.001 203.511 191.608C207.033 191.391 210.571 191.649 214.014 192.373C214.06 191.766 214.112 191.207 214.164 190.649C210.569 189.907 206.876 189.659 203.203 189.914Z"
                  fill="#407BFF"
                />
                <path
                  d="M203.844 193.381C203.948 193.928 204.06 194.505 204.177 195.094C207.41 194.932 210.651 195.166 213.817 195.792C213.817 195.185 213.863 194.632 213.902 194.062C210.596 193.425 207.214 193.196 203.844 193.381V193.381Z"
                  fill="#407BFF"
                />
                <path
                  d="M98.7021 213.481C107.308 206.014 108.591 194.304 101.567 187.325C94.5438 180.347 81.8737 180.743 73.2678 188.21C64.662 195.677 63.3792 207.387 70.4027 214.365C77.4261 221.343 90.0962 220.947 98.7021 213.481Z"
                  fill="white"
                />
                <path
                  d="M83.2857 219.656C80.7449 219.705 78.223 219.242 75.8937 218.298C73.5644 217.355 71.4832 215.954 69.7937 214.191C66.4321 210.621 64.9933 205.866 65.7323 200.802C67.2431 190.479 77.5043 182.033 88.6877 182.033C91.2283 181.984 93.75 182.448 96.0792 183.391C98.4084 184.335 100.49 185.736 102.18 187.498C105.541 191.068 106.98 195.823 106.241 200.887L105.914 200.844L106.241 200.887C104.73 211.234 94.4298 219.656 83.2857 219.656ZM88.6877 182.616C77.8575 182.616 67.8447 190.801 66.3798 200.863C65.9905 203.149 66.1397 205.486 66.8171 207.714C67.4945 209.942 68.6841 212.006 70.3038 213.766C71.9326 215.463 73.9384 216.812 76.183 217.72C78.4276 218.628 80.8575 219.073 83.3053 219.025C94.1355 219.025 104.142 210.839 105.613 200.778C106.002 198.491 105.853 196.154 105.175 193.926C104.498 191.699 103.309 189.634 101.689 187.874C100.057 186.182 98.0504 184.838 95.8061 183.935C93.5618 183.031 91.1333 182.589 88.6877 182.64V182.616Z"
                  fill="#263238"
                />
                <path
                  d="M86.8701 196.533C86.8622 196.589 86.8325 196.64 86.7867 196.677C86.741 196.714 86.6822 196.734 86.6216 196.733C86.588 196.729 86.5555 196.72 86.5261 196.704C86.4967 196.689 86.4708 196.668 86.4501 196.643C86.4294 196.618 86.4143 196.59 86.4056 196.559C86.3968 196.529 86.3947 196.497 86.3993 196.466L86.5039 195.743L80.474 199.447L81.1934 199.678C81.2257 199.687 81.2556 199.702 81.2814 199.722C81.3073 199.742 81.3285 199.767 81.3438 199.794C81.3591 199.822 81.3681 199.853 81.3704 199.884C81.3726 199.915 81.3681 199.946 81.3569 199.976C81.3387 200.022 81.306 200.063 81.2629 200.092C81.2198 200.121 81.1683 200.138 81.1149 200.14H81.0299L80.0293 199.824L81.3373 206.066L82.0109 205.24C82.0555 205.194 82.1179 205.166 82.1846 205.162C82.2513 205.158 82.317 205.179 82.3676 205.219C82.4182 205.26 82.4496 205.317 82.455 205.379C82.4605 205.441 82.4396 205.502 82.3968 205.55L81.5858 206.455H88.7798L88.2043 205.55C88.1871 205.523 88.1758 205.494 88.1709 205.463C88.1661 205.432 88.1678 205.401 88.176 205.371C88.1842 205.34 88.1987 205.312 88.2187 205.287C88.2387 205.262 88.2638 205.241 88.2926 205.225C88.3214 205.209 88.3532 205.199 88.3864 205.194C88.4195 205.19 88.4533 205.191 88.4858 205.199C88.5183 205.206 88.5489 205.22 88.5757 205.239C88.6026 205.257 88.6253 205.28 88.6425 205.307L89.1395 206.084L92.2133 199.842L91.2192 200.128H91.1473C91.0924 200.128 91.0389 200.112 90.9951 200.081C90.9513 200.05 90.9198 200.007 90.9053 199.957C90.8847 199.898 90.8903 199.833 90.9209 199.777C90.9516 199.722 91.0047 199.679 91.0688 199.66L91.9583 199.405L86.9813 195.695L86.8701 196.533Z"
                  fill="#263238"
                />
                <path
                  d="M86.9941 195.695L91.9711 199.417L92.7363 199.199L87.0988 194.979L86.9941 195.695Z"
                  fill="#263238"
                />
                <path
                  d="M89.5586 206.704L93.0248 199.715C93.034 199.679 93.034 199.641 93.0248 199.605L92.2073 199.842L89.127 206.06L89.5586 206.704Z"
                  fill="#263238"
                />
                <path
                  d="M81.0234 207.062H81.0758H89.1854L88.793 206.455H81.599L81.0234 207.062Z"
                  fill="#263238"
                />
                <path
                  d="M79.2969 199.587C79.2969 199.587 79.2969 199.624 79.2969 199.642L80.7226 206.643L81.2785 206.036L79.9705 199.794L79.2969 199.587Z"
                  fill="#263238"
                />
                <path
                  d="M86.5946 194.93L79.6426 199.198L80.4405 199.447L86.4703 195.743L86.5946 194.93Z"
                  fill="#263238"
                />
                <path
                  d="M87.4381 189.125L87.5624 188.287C87.5721 188.225 87.6078 188.169 87.6617 188.131C87.7157 188.094 87.7834 188.078 87.8501 188.086C87.8829 188.09 87.9145 188.1 87.9432 188.115C87.9718 188.13 87.9969 188.151 88.017 188.175C88.0371 188.199 88.0518 188.227 88.0602 188.257C88.0686 188.286 88.0705 188.317 88.066 188.347L87.9613 189.076L94.4555 185.087L94.037 183.046C92.2995 182.573 90.4979 182.334 88.6873 182.336C86.8196 182.341 84.961 182.578 83.161 183.04L82.1211 185.141L87.4381 189.125Z"
                  fill="#263238"
                />
                <path
                  d="M81.9252 185.105C81.9624 185.158 81.9758 185.222 81.9623 185.283C81.9488 185.344 81.9096 185.398 81.8533 185.433L81.6309 185.567L87.3338 189.817L87.4384 189.107L82.1214 185.123L83.1613 183.022C82.88 183.089 82.5988 183.168 82.3241 183.247L81.4085 185.069C81.4055 185.081 81.4055 185.093 81.4085 185.105L81.5786 185.002C81.6086 184.987 81.6414 184.978 81.6752 184.976C81.7089 184.973 81.7429 184.976 81.7752 184.986C81.8075 184.996 81.8374 185.011 81.8631 185.032C81.8889 185.052 81.91 185.077 81.9252 185.105V185.105Z"
                  fill="#263238"
                />
                <path
                  d="M87.9615 189.076L87.8438 189.884L94.8677 185.572L94.6584 185.415C94.6281 185.397 94.6022 185.373 94.5824 185.345C94.5626 185.317 94.5495 185.285 94.5437 185.252C94.538 185.219 94.5399 185.186 94.5493 185.153C94.5586 185.121 94.5752 185.091 94.598 185.065C94.6208 185.039 94.6492 185.018 94.6814 185.003C94.7136 184.988 94.7489 184.98 94.7849 184.978C94.8208 184.977 94.8567 184.983 94.8902 184.995C94.9236 185.007 94.9538 185.026 94.9789 185.05L95.1424 185.172L94.7565 183.259C94.5145 183.18 94.2791 183.113 94.0371 183.046L94.4557 185.087L87.9615 189.076Z"
                  fill="#263238"
                />
                <path
                  d="M86.4703 195.743L86.3656 196.466C86.361 196.497 86.3632 196.529 86.3719 196.559C86.3807 196.589 86.3958 196.618 86.4165 196.643C86.4372 196.668 86.463 196.688 86.4925 196.704C86.5219 196.719 86.5544 196.729 86.588 196.733V196.733C86.6486 196.734 86.7073 196.713 86.7531 196.677C86.7989 196.64 86.8285 196.588 86.8365 196.533L86.9608 195.695L87.0654 194.978L87.811 189.884L87.9287 189.076L88.0333 188.347C88.0379 188.317 88.0359 188.286 88.0275 188.257C88.0191 188.227 88.0045 188.199 87.9844 188.175C87.9643 188.151 87.9392 188.13 87.9105 188.115C87.8819 188.1 87.8503 188.09 87.8175 188.086C87.7508 188.078 87.683 188.094 87.6291 188.131C87.5752 188.169 87.5395 188.225 87.5297 188.287L87.4055 189.125L87.3009 189.835L86.5945 194.917L86.4703 195.743Z"
                  fill="#263238"
                />
                <path
                  d="M73.7111 197.826L72.9917 197.595C72.9594 197.586 72.9295 197.571 72.9036 197.551C72.8778 197.531 72.8566 197.507 72.8413 197.479C72.826 197.451 72.817 197.421 72.8147 197.389C72.8125 197.358 72.817 197.327 72.8282 197.298C72.8385 197.267 72.8552 197.239 72.8774 197.215C72.8996 197.191 72.9267 197.172 72.9572 197.158C72.9876 197.143 73.0209 197.135 73.0549 197.133C73.0889 197.131 73.123 197.135 73.1552 197.146L74.1558 197.461L72.802 190.843H70.6831C68.23 193.716 66.6332 197.138 66.0527 200.765L67.3607 201.73L73.7111 197.826Z"
                  fill="#263238"
                />
                <path
                  d="M67.2885 201.876C67.3551 201.865 67.4236 201.879 67.4797 201.914C67.5358 201.949 67.5751 202.003 67.5893 202.065L67.6351 202.295L74.5086 198.075L73.7107 197.826L67.3604 201.731L66.0524 200.765C66.0555 200.791 66.0555 200.818 66.0524 200.844C66.0524 201.063 66.0001 201.275 65.9805 201.488L67.125 202.344L67.0857 202.156C67.0791 202.125 67.0791 202.093 67.0857 202.063C67.0923 202.032 67.1054 202.003 67.1243 201.977C67.1431 201.951 67.1674 201.928 67.1955 201.911C67.2237 201.894 67.2553 201.882 67.2885 201.876V201.876Z"
                  fill="#263238"
                />
                <path
                  d="M74.1563 197.462L74.8561 197.687C74.8561 197.687 74.8561 197.65 74.8561 197.632L73.4239 190.6L73.2146 190.728C73.1729 190.756 73.1224 190.771 73.0707 190.77C73.0171 190.769 72.9654 190.752 72.923 190.721C72.8806 190.691 72.8496 190.649 72.8344 190.601C72.8192 190.553 72.8205 190.502 72.8383 190.455C72.8561 190.408 72.8893 190.368 72.9334 190.339L73.1034 190.23H71.2199C71.0368 190.436 70.8536 190.637 70.6836 190.837H72.8026L74.1563 197.462Z"
                  fill="#263238"
                />
                <path
                  d="M79.9963 199.806L80.9969 200.122H81.082C81.1353 200.12 81.1868 200.103 81.2299 200.074C81.273 200.045 81.3057 200.004 81.3239 199.958C81.3351 199.928 81.3397 199.897 81.3374 199.866C81.3351 199.835 81.3261 199.804 81.3108 199.776C81.2955 199.748 81.2743 199.724 81.2485 199.704C81.2226 199.684 81.1927 199.669 81.1604 199.66L80.441 199.429L79.6432 199.18L74.8559 197.668L74.1561 197.444L73.1555 197.128C73.1233 197.118 73.0892 197.113 73.0552 197.115C73.0212 197.117 72.9879 197.126 72.9575 197.14C72.927 197.154 72.8999 197.174 72.8777 197.198C72.8555 197.222 72.8388 197.25 72.8285 197.28C72.8173 197.309 72.8128 197.34 72.815 197.372C72.8173 197.403 72.8263 197.433 72.8416 197.461C72.8569 197.489 72.8781 197.513 72.9039 197.533C72.9298 197.553 72.9597 197.568 72.992 197.577L73.7114 197.808L74.5093 198.057L79.2965 199.569L79.9963 199.806Z"
                  fill="#263238"
                />
                <path
                  d="M98.8438 197.431L99.8378 197.146C99.87 197.136 99.9039 197.133 99.9375 197.136C99.9711 197.139 100.004 197.148 100.034 197.163C100.063 197.177 100.09 197.197 100.111 197.221C100.133 197.246 100.149 197.274 100.158 197.304C100.168 197.333 100.172 197.364 100.169 197.395C100.165 197.426 100.156 197.456 100.14 197.483C100.124 197.51 100.102 197.534 100.076 197.553C100.05 197.572 100.02 197.587 99.9883 197.595L99.1053 197.856L104.285 201.73L105.933 200.716C106.445 197.339 105.846 193.898 104.213 190.843H102.114L98.8438 197.431Z"
                  fill="#263238"
                />
                <path
                  d="M102.102 190.667C102.079 190.695 102.049 190.718 102.015 190.734C101.981 190.749 101.944 190.758 101.905 190.758C101.846 190.758 101.788 190.738 101.742 190.703L101.526 190.545L98.0534 197.547C98.0473 197.583 98.0473 197.62 98.0534 197.656L98.8709 197.419L102.141 190.831H104.24C104.123 190.618 104.005 190.418 103.881 190.224H101.919L102.082 190.345C102.107 190.365 102.126 190.389 102.141 190.416C102.155 190.443 102.163 190.472 102.165 190.502C102.167 190.532 102.162 190.562 102.151 190.591C102.141 190.619 102.124 190.645 102.102 190.667V190.667Z"
                  fill="#263238"
                />
                <path
                  d="M105.948 200.844C105.945 200.802 105.945 200.759 105.948 200.716L104.3 201.731L99.12 197.856L98.3613 198.075L103.933 202.247L104.045 202.01C104.074 201.954 104.126 201.91 104.19 201.889C104.253 201.867 104.323 201.869 104.385 201.894C104.415 201.908 104.443 201.926 104.466 201.949C104.488 201.972 104.506 201.999 104.518 202.028C104.529 202.058 104.534 202.089 104.533 202.12C104.531 202.151 104.523 202.182 104.509 202.21L104.43 202.374H104.463L105.81 201.542C105.843 201.305 105.882 201.075 105.948 200.844Z"
                  fill="#263238"
                />
                <path
                  d="M100.159 197.304C100.149 197.274 100.133 197.246 100.112 197.222C100.09 197.198 100.064 197.178 100.034 197.163C100.004 197.148 99.9716 197.139 99.9381 197.136C99.9045 197.133 99.8706 197.137 99.8384 197.146L98.8443 197.431L98.0268 197.668L92.7359 199.198L91.9773 199.417L91.0878 199.672C91.0238 199.692 90.9706 199.734 90.94 199.79C90.9093 199.845 90.9037 199.91 90.9243 199.97C90.9388 200.019 90.9704 200.062 91.0141 200.093C91.0579 200.124 91.1114 200.14 91.1663 200.14H91.2383L92.2323 199.854L93.0498 199.617L98.3472 198.087L99.1059 197.869L99.9888 197.608C100.022 197.599 100.054 197.585 100.081 197.565C100.108 197.545 100.13 197.519 100.146 197.491C100.162 197.462 100.172 197.431 100.174 197.399C100.176 197.366 100.171 197.334 100.159 197.304Z"
                  fill="#263238"
                />
                <path
                  d="M92.2907 210.997L92.8662 211.92C92.8836 211.947 92.8951 211.976 92.8999 212.007C92.9048 212.038 92.9028 212.069 92.8943 212.099C92.8857 212.129 92.8707 212.157 92.8502 212.182C92.8296 212.206 92.8039 212.227 92.7746 212.242C92.7379 212.265 92.6947 212.278 92.6504 212.278C92.6057 212.279 92.5616 212.268 92.5226 212.248C92.4836 212.228 92.451 212.199 92.428 212.163L91.9375 211.386L88.7656 217.768L89.6616 218.436C93.6241 217.255 97.186 215.135 99.9948 212.284L99.7332 211.015L92.2907 210.997Z"
                  fill="#263238"
                />
                <path
                  d="M100.008 210.924C99.9737 210.932 99.9377 210.932 99.9034 210.924C99.8433 210.897 99.7967 210.85 99.7735 210.792C99.7503 210.734 99.7523 210.67 99.7791 210.614L99.8838 210.401H91.8984L92.2908 211.009H99.7334L99.995 212.278C100.185 212.089 100.368 211.895 100.551 211.701L100.335 210.638L100.25 210.814C100.224 210.851 100.187 210.88 100.145 210.899C100.102 210.918 100.055 210.927 100.008 210.924Z"
                  fill="#263238"
                />
                <path
                  d="M91.9377 211.367L91.5584 210.705L88.1445 217.585H88.3931C88.4607 217.585 88.5256 217.61 88.5734 217.654C88.6212 217.699 88.6481 217.759 88.6481 217.822C88.649 217.853 88.643 217.884 88.6305 217.913C88.618 217.942 88.5993 217.969 88.5754 217.991C88.5515 218.013 88.5231 218.031 88.4917 218.042C88.4604 218.054 88.4268 218.059 88.3931 218.058H88.1838L88.9228 218.611C89.1779 218.544 89.4394 218.477 89.6945 218.399L88.7985 217.731L91.9377 211.367Z"
                  fill="#263238"
                />
                <path
                  d="M89.151 206.06L88.6539 205.283C88.6368 205.256 88.6141 205.233 88.5872 205.214C88.5603 205.196 88.5298 205.182 88.4973 205.175C88.4648 205.167 88.431 205.165 88.3979 205.17C88.3647 205.174 88.3328 205.185 88.3041 205.201C88.2753 205.217 88.2502 205.238 88.2302 205.263C88.2102 205.288 88.1956 205.316 88.1874 205.346C88.1792 205.377 88.1775 205.408 88.1824 205.439C88.1872 205.47 88.1986 205.499 88.2158 205.526L88.7913 206.431L89.1837 207.038L91.5577 210.705L91.9697 211.349L92.4602 212.126C92.4832 212.162 92.5158 212.191 92.5548 212.212C92.5938 212.232 92.6379 212.242 92.6826 212.242C92.7269 212.241 92.7701 212.228 92.8068 212.205C92.8504 212.171 92.88 212.124 92.8907 212.072C92.9014 212.02 92.8926 211.966 92.8657 211.92L92.2902 211.015L91.8978 210.408L89.5565 206.728L89.151 206.06Z"
                  fill="#263238"
                />
                <path
                  d="M76.9953 211.38L76.2498 212.175C76.2271 212.202 76.1983 212.223 76.1654 212.238C76.1326 212.252 76.0966 212.26 76.0601 212.26C75.9973 212.26 75.9368 212.238 75.8901 212.199C75.8426 212.155 75.8159 212.095 75.8159 212.032C75.8159 211.97 75.8426 211.91 75.8901 211.865L76.701 210.997H69.3239L68.6699 212.29C70.6901 215.152 73.6827 217.304 77.1719 218.405L78.323 217.695L76.9953 211.38Z"
                  fill="#263238"
                />
                <path
                  d="M78.3937 217.84C78.3937 217.777 78.4206 217.717 78.4684 217.673C78.5162 217.628 78.5811 217.603 78.6488 217.603H78.9365L77.5435 210.784L76.9941 211.391L78.3021 217.706L77.1511 218.417L77.9555 218.66L78.8515 218.107H78.6553C78.618 218.11 78.5806 218.104 78.546 218.091C78.5113 218.078 78.4803 218.058 78.4551 218.032C78.43 218.007 78.4114 217.976 78.4008 217.943C78.3901 217.909 78.3877 217.874 78.3937 217.84V217.84Z"
                  fill="#263238"
                />
                <path
                  d="M76.6735 210.997L77.2425 210.39H77.1902H69.2833L69.3356 210.657C69.3471 210.718 69.3323 210.781 69.2944 210.832C69.2565 210.883 69.1985 210.918 69.1329 210.93H69.0871C69.0275 210.931 68.9696 210.912 68.9239 210.876C68.8783 210.84 68.848 210.79 68.8386 210.736L68.7994 210.548L68.25 211.647C68.3873 211.859 68.5247 212.072 68.6686 212.254L69.3226 210.96L76.6735 210.997Z"
                  fill="#263238"
                />
                <path
                  d="M81.5858 206.455L82.3967 205.58C82.4395 205.533 82.4604 205.471 82.455 205.409C82.4495 205.348 82.4181 205.29 82.3676 205.25C82.317 205.209 82.2513 205.188 82.1846 205.192C82.1179 205.196 82.0555 205.224 82.0109 205.271L81.2718 206.072L80.7159 206.679L77.2432 210.426L76.6742 211.033L75.8633 211.865C75.8157 211.909 75.7891 211.969 75.7891 212.032C75.7891 212.095 75.8157 212.155 75.8633 212.199C75.91 212.238 75.9705 212.26 76.0333 212.26C76.0698 212.26 76.1058 212.252 76.1386 212.237C76.1715 212.223 76.2003 212.201 76.223 212.175L76.9685 211.379L77.5179 210.772L80.9972 207.025L81.5858 206.455Z"
                  fill="#263238"
                />
                <path
                  d="M104.371 201.895C104.309 201.869 104.239 201.867 104.176 201.889C104.112 201.91 104.06 201.954 104.031 202.01L103.919 202.247L99.8842 210.377L99.7795 210.59C99.7527 210.646 99.7506 210.71 99.7739 210.768C99.7971 210.826 99.8437 210.873 99.9038 210.9C99.9381 210.908 99.9741 210.908 100.008 210.9C100.058 210.899 100.106 210.885 100.147 210.86C100.189 210.836 100.222 210.801 100.244 210.76L100.329 210.584L104.416 202.35L104.495 202.186C104.516 202.132 104.515 202.072 104.492 202.018C104.469 201.965 104.426 201.921 104.371 201.895V201.895Z"
                  fill="#263238"
                />
                <path
                  d="M94.6187 185.087C94.5977 185.11 94.5821 185.138 94.5727 185.167C94.5633 185.197 94.5604 185.228 94.564 185.258C94.5677 185.289 94.5779 185.318 94.594 185.345C94.6101 185.372 94.6319 185.396 94.6579 185.415L94.8672 185.572L101.525 190.558L101.741 190.716C101.787 190.751 101.845 190.77 101.904 190.77C101.942 190.77 101.98 190.762 102.014 190.746C102.048 190.73 102.077 190.707 102.1 190.679C102.122 190.656 102.139 190.628 102.149 190.599C102.159 190.569 102.162 190.538 102.158 190.507C102.154 190.476 102.144 190.447 102.127 190.42C102.111 190.393 102.088 190.37 102.061 190.351L101.898 190.23L95.1419 185.202L94.9784 185.081C94.9297 185.037 94.8646 185.014 94.7972 185.015C94.7298 185.016 94.6656 185.042 94.6187 185.087Z"
                  fill="#263238"
                />
                <path
                  d="M88.6147 217.84C88.6147 217.778 88.5878 217.717 88.54 217.673C88.4921 217.628 88.4273 217.604 88.3596 217.604H78.6477C78.5801 217.604 78.5152 217.628 78.4674 217.673C78.4195 217.717 78.3927 217.778 78.3927 217.84C78.3918 217.872 78.3977 217.903 78.4102 217.932C78.4227 217.961 78.4415 217.987 78.4654 218.01C78.4892 218.032 78.5177 218.049 78.5491 218.061C78.5804 218.072 78.614 218.078 78.6477 218.077H88.3596C88.3934 218.078 88.4269 218.072 88.4583 218.061C88.4896 218.049 88.5181 218.032 88.542 218.01C88.5659 217.987 88.5846 217.961 88.5971 217.932C88.6096 217.903 88.6156 217.872 88.6147 217.84Z"
                  fill="#263238"
                />
                <path
                  d="M69.0863 210.924H69.1321C69.1977 210.912 69.2557 210.877 69.2936 210.826C69.3315 210.775 69.3463 210.712 69.3348 210.651L69.2825 210.384L67.6344 202.302L67.5886 202.071C67.5744 202.009 67.5352 201.955 67.4791 201.92C67.423 201.885 67.3544 201.872 67.2878 201.883C67.2547 201.888 67.2231 201.9 67.1949 201.917C67.1667 201.935 67.1425 201.957 67.1236 201.983C67.1048 202.009 67.0917 202.038 67.085 202.069C67.0784 202.1 67.0784 202.131 67.0851 202.162L67.1243 202.35L68.7985 210.548L68.8378 210.736C68.8486 210.789 68.8795 210.838 68.925 210.872C68.9705 210.907 69.0276 210.925 69.0863 210.924V210.924Z"
                  fill="#263238"
                />
                <path
                  d="M72.8684 190.667C72.8917 190.699 72.9229 190.725 72.9593 190.743C72.9958 190.761 73.0364 190.77 73.0777 190.77C73.1294 190.771 73.1799 190.756 73.2216 190.728L73.4308 190.6L81.632 185.566L81.8544 185.433C81.9078 185.397 81.9442 185.343 81.956 185.283C81.9679 185.223 81.9542 185.161 81.9178 185.11C81.8815 185.059 81.8253 185.023 81.7611 185.01C81.6968 184.996 81.6295 185.006 81.5731 185.038L81.4031 185.141L73.1104 190.23L72.9403 190.339C72.884 190.374 72.8448 190.428 72.8313 190.489C72.8178 190.551 72.8312 190.615 72.8684 190.667V190.667Z"
                  fill="#263238"
                />
              </svg>
            </div>
          </div>

          {/* <!-- DÉCORATION --> */}
          <div className="absolute bg-[#6E4BEC] opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;