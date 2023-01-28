import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../base/Loader";

interface FavouriteLeague {
  id: string;
  logo_path: string;
  name: string;
  current_season_id: string;
}

interface FavouriteTeam {
  id: string;
  logo_path: string;
  name: string;
}

const FavouriteLeague = (props: {
  formStep: number;
  nextFormStep: any;
  updateFormData: any;
}) => {
  const [favouriteleague, setFavouriteleague] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [favourite, setFavourite] = useState(new Set());
  const selectFavourite = ({ id, name, logo_path }: FavouriteTeam) => {
    setFavourite((favourite) => {
      favourite = new Set(favourite);
      favourite.add({ id, name, logo_path });
      return favourite;
    });
  };

  const update = () => {
    props.updateFormData({ favourite_leauge: favouriteleague });
  };
  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      const res = await axios.get(`${process.env.BACKEND_URL}/get/leagues`);

      const response = await res.data;
      setIsLoading(false);
      return response;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      // console.log(FavouritesFromApi);
      setLeagues(FavouritesFromApi);
    };

    getFavourites();
  }, []);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`sm:p-5 ${props.formStep === 1 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center max-w-lg  mx-auto space-y-4">
        <h1 className="w-4/6 text-lg font-bold text-center text-gray-700 animate-fade-in-up">
          Your Favourite League
        </h1>
        <p className="w-5/6 text-sm text-center text-gray-500 animate-fade-in-down">
          Select a league to choose favourite team and click to continue. You
          can't edit these details once you submit the form.
        </p>
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="p-4 mt-8">
          <div className="w-full border">
            <section className="max-w-6xl mx-auto ">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 ">
                {leagues.map((item: FavouriteLeague, index) => (
                  <button
                    onClick={async () => {
                      // selectFavourite({
                      //   id: item.id,
                      //   name: item.name,
                      //   logo_path: item.logo_path,
                      // });
                      // update();

                      const id = item.current_season_id;

                      setIsLoading(true);
                      const team = await axios.get(
                        `${process.env.BACKEND_URL}/get/league/teams/${id}`
                      );
                      const clubres = await team.data;
                      setIsLoading(false);

                      console.log(team.data);
                      setTeams(clubres);
                      setIsLoading(false);
                      setActive(!active);
                    }}
                    type="button"
                    className={`${
                      favouriteleague.has(item) ? "bg-red" : "bg-black"
                    } flex flex-col items-center justify-center w-full p-2 sm:p-4 border sahdow-lg sm:px-2 animate-fade-in-up transition duration-300 
                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100`}
                    key={item.id}
                    data-modal-toggle="default-modal"
                  >
                    <div className="mb-2 sm:mb-8">
                      <img
                        className="object-cover object-center w-9 h-9 rounded-full sm:h-28 sm:w-28"
                        src={item.logo_path}
                        alt="club"
                      />
                    </div>
                    <div className="text-center">
                      <p className="mb-2 text-xs font-normal text-gray-700 sm:text-sm">
                        {item.name}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div
            className={`${active ? "" : "hidden"}   sm:p-5 
            overflow-x-hidden overflow-y-auto fixed h-modal h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center bg-gray-700/50
            `}
          >
            <div className="relative w-full max-w-6xl px-4 h-full md:h-auto mx-auto sm:mt-12">
              {/* <!-- Modal content --> */}
              <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                    Select Your Favourite Team
                  </h3>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                {isLoading && <Loader />}
                {!isLoading && (
                  <div className="p-4  sm:mt-8">
                    <div className="w-full border">
                      <section className="max-w-6xl mx-auto ">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
                          {teams.map((club: FavouriteTeam, index) => (
                            <button
                              onClick={() => {
                                selectFavourite({
                                  id: club.id,
                                  name: club.name,
                                  logo_path: club.logo_path,
                                });
                                update();
                              }}
                              type="button"
                              className={`${
                                favourite.has(club) ? "bg-red" : "bg-black"
                              } flex flex-col items-center justify-center w-full p-4 border sahdow-lg sm:p-8 animate-fade-in-up transition duration-300 
                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100`}
                              key={club.id}
                            >
                              <div className="mb-4 sm:mb-8">
                                <img
                                  className="object-cover object-center w-5 h-5 rounded-full sm:h-20 sm:w-20"
                                  src={club.logo_path}
                                  alt="club"
                                />
                              </div>
                              <div className="text-center">
                                <p className="mb-2 text-xs font-normal text-gray-700 sm:text-sm">
                                  {club.name}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                )}

                {/* <!-- Modal footer --> */}
                <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => {
                      setActive(!active);
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                      });
                    }}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavouriteLeague;
