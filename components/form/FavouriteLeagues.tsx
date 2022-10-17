import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Loader } from "../base/Loader";

interface FavouriteLeague {
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
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session }: any = useSession();

  const selectFavourite = ({ id, name, logo_path }: FavouriteLeague) => {
    setFavouriteleague((favouriteleague) => {
        favouriteleague = new Set(favouriteleague);
        favouriteleague.add({ id, name, logo_path });
      return favouriteleague;
    });
  };
  const update = () => {
    props.updateFormData({ favourite_leauge: favouriteleague });
  };
  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.BACKEND_URL}/get/favourite-league`,
        {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
            "content-type": "application/json",
          },
        }
      );
      const response = await res.data;
      setIsLoading(false);
      return response;
    };

    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setTeams(FavouritesFromApi);
    };

    getFavourites();
  }, []);

  return (
    <div className={`p-5 ${props.formStep === 2 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center max-w-lg pt-20 mx-auto space-y-4">
        <h1 className="w-4/6 text-lg font-bold text-center text-gray-700 animate-fade-in-up">
          Your Favourite League
        </h1>
        <p className="w-5/6 text-sm text-center text-gray-500 animate-fade-in-down">
          Please type carefully and fill out the form with Personal details. You
          can't edit these details once you submit the form.
        </p>
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="p-4 mt-8">
          <div className="w-full border">
            <section className="max-w-6xl mx-auto ">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 ">
                {teams.map((item: FavouriteLeague, index) => (
                  <button
                    onClick={() => {
                      selectFavourite({
                        id: item.id,
                        name: item.name,
                        logo_path: item.logo_path,
                      });
                      // update();
                    }}
                    type="button"
                    className={`${
                        favouriteleague.has(item) ? "bg-red" : "bg-black"
                    } flex flex-col items-center justify-center w-full p-4 border sahdow-lg sm:p-8 animate-fade-in-up transition duration-300 
                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100`}
                    key={item.id}
                  >
                    <div className="mb-4 sm:mb-8">
                      <img
                        className="object-cover object-center w-5 h-5 rounded-full sm:h-20 sm:w-20"
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

          {/* <div className="justify-center p-2 pb-10 mt-10 border-b border-gray-200 ">
          <button
            className="flex justify-center px-20 py-2 mx-auto text-base font-bold text-gray-500 transition duration-200 ease-in-out bg-gray-200 shadow-inner cursor-pointer hover:scale-110 focus:outline-none hover:bg-blue-500"
          >
            <div className="px-10 font-sans text-sm font-bold">
              Load more clubs
            </div>
          </button>
        </div> */}
        </div>
      )}
    </div>
  );
};

export default FavouriteLeague;
