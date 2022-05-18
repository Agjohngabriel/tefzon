import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


interface Favorite{
  id:string,
  logo_path:string,
  name:string
}


const Favourite = (props: {
  formStep: number;
  nextFormStep: any;
  updateFormData: any;
}) => {
  const [favourite, setFavourite] = useState([]);
  const { data: session }: any = useSession();

  const fetchAll = async () => {
    const res = await axios.get(`${process.env.BASE_URL}get/league/teams`, {
      headers: {
        Authorization: `Bearer ${session?.data.token}`,
        "content-type": "application/json",
      },
    });
    const response = await res.data;
    console.log(response);
    return response;
  };

  useEffect(() => {
    const getFavourites = async () => {
      const FavouritesFromApi = await fetchAll();
      setFavourite(FavouritesFromApi);
    };

    getFavourites();
  }, [fetchAll]);

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
              {favourite.map((item: Favorite, index) => (
                <button className="w-full border  sahdow-lg p-8 flex flex-col justify-center items-center">
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-26 w-26"
                      src={item.logo_path}
                      alt="club"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-700 font-normal mb-2">
                      {item.name}
                    </p>
                  </div>
                </button>
              ))}
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
      </div>
    </div>
  );
};

export default Favourite;
