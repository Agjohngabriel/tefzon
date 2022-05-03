const Favourite = (props: { formStep: number; nextFormStep: number }) => {
  return (
    <div className={`p-5 ${props.formStep === 1 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center pt-20 space-y-4 max-w-lg mx-auto">
        <h1 className="font-bold text-lg text-gray-700 w-4/6 text-center">
          Your Favourites
        </h1>
        <p className="text-sm text-gray-500 text-center w-5/6">
          Please type carefully and fill out the form with Personal details. You
          can't edit these details once you submit the form.
        </p>
      </div>

      <div className="mt-8 p-4">
        <div className="w-full border">
          <section className="max-w-6xl mx-auto  ">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">
              <div className="w-full border  sahdow-lg p-8  flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/arsenal-logo-vector-200x200 1.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    arsenal
                  </p>
                </div>
              </div>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Manchester United Football Club Limited Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Manchester United
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Barcelona Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Barcelona
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Juventus Football Club Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Juventus
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Chelsea Football Club Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Chelsea
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Real Madrid C.F. Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Real Madrid
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Aston Villa Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Aston Villa
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Manchester City Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Manchester City
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Liverpool FC Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Liverpool FC
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Fcporto Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Fc porto
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Sevilla FC Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Sevilla
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Atlético de Madrid Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Atlético de Madrid
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Roma F. C. Soccer Academy Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Roma FC
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Ville de Lyon Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">Lyon</p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Paris Saint-Germain F.C. Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Paris Saint-Germain
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Realbetisbalompie Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Real Betis
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Palmeiras Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Palmeiras
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Cariverplate Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Cariverplate
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Argentina F.C. Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Argentina F.C
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/AFC Ajax Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    AFC Ajax
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Sporting CP Academy Toronto Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Sporting
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Sou_Flamengo Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    {" "}
                    Flamengo
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Tottenham Hotspur Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Tottenham
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/West Ham United Football Club Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    West Ham United{" "}
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Borussia Dortmund Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Borussia Dortmund
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Napoli Icon undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    SSC Napoli
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Crystal Palace F.C. Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Crystal Palace
                  </p>
                </div>
              </button>
              <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-26 w-26"
                    src="/img/Celtics Blog Logo undefined.png"
                    alt="club"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-normal mb-2">
                    Celtics
                  </p>
                </div>
              </button>
            </div>
          </section>
        </div>

        <div className=" p-2 mt-10 justify-center border-b border-gray-200 pb-10">
          <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-20 py-2  font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner 
                                            bg-gray-200 text-gray-500
                                            duration-200 ease-in-out 
                                            transition mx-auto"
          >
            <div className="font-sans text-sm font-bold px-10">
              Load more clubs
            </div>
          </button>
        </div>

        <div className=" p-2 mt-10 justify-center">
          <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-10 py-2s font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner rounded-lg
                                            bg-violet-500 text-gray-200
                                            duration-200 ease-in-out 
                                            transition mx-auto"
          >
            <div className="font-sans text-sm font-bold px-10">Next</div>
          </button>
          <button
            type="button"
            className="flex items-center text-gray-500 rounded py-2 focus:outline-none mx-auto"
          >
            <span className=" -mr-20 material-icons hover:text-green-500">
              arrow_backward
            </span>
            Back to favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
