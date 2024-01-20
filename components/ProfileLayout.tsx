import axios from "axios";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import Auth from "./Auth";
import BreadCrumb from "./base/BreadCrumb";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function ProfileLayout(props: { children: ReactNode }) {
  const { data: session }: any = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (session) {
      const fetchDetails = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/get-account-details`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
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
        setDetails(DetailsFromApi.data);
      };
      getDetails();

      const fetchProfile = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );
        const res = await respo.data;
        setIsLoading(false);
        return res;
      };
      const getProfile = async () => {
        const ProfileFromApi = await fetchProfile();
        setProfile(ProfileFromApi.data);
      };
      getProfile();
    }
  }, [session]);
  return (
    <Auth>
      <MainHeader />
      <BreadCrumb />
      <div className="bg-[#E4ECFB] pb-5">{props.children}</div>
      <MainFooter />
    </Auth>
  );
}
