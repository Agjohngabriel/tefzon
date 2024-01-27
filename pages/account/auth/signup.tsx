import { useRouter } from "next/router";
import { useState } from "react";
import PersonalDetails from "../../../components/form/PersonalDetails";
import GuestLayout from "../../../components/GuestLayout";
// import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { client } from "../../../libs/axiosClient";
import Link from "next/link";
// import FavouriteLeague from "../../../components/form/FavouriteLeagues";
const Signup = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regError, setRegError] = useState({});
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const updateFormData = (newData: any) => {
    setFormData({ ...formData, ...newData });
  };

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const user = await client.post("register", formData);
      const response = user.data;
      if (response.statusCode === 422) {
        setEmailError(response.data.email[0]);
        setPhoneError(response.data.phone[0]);
        setUsernameError(response.data.username[0]);
        setIsSubmitting(false);
        MySwal.fire({
          icon: "error",
          title: `${response.message}`,
          html: `            
            <p>${emailError}</p>,
          <p>${phoneError}</p>,
           <p>${usernameError}</p>
          `,
        });
      } else {
        setIsSubmitting(false);
        MySwal.fire({
          title: "Registration was Successful",
          confirmButtonText: "Proceed to Login",
          showLoaderOnConfirm: true,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            router.push("/account/auth/login");
          }
        });
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.message;
      MySwal.fire({
        title: `${errorMessage}`,
      });
      setError(true);
      setRegError(errorMessage);
      setFormStep(0);
    }
  }

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  return (
    <GuestLayout>
      <div
        className=" bg-cover rounded-lg  text-white p-4 lg:py-8 lg:px-20  flex  justify-end "
        style={{
          backgroundImage: 'url("/img/authbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="w-[40rem] bg-white rounded-xl shadow-2xl shadow-indigo-500/50   px-5 sm:p-10 ">
          <div className="my-2 w-full flex justify-between">
            <h1 className=" text-sm lg:text-xl font-oswald font-semibold text-left text-[#240155]">
              Welcome to Tefzon Fantasy
            </h1>
            <div className="flex items-center gap-x-2">
              <p className=" text-xs text-center text-gray-500 ">
                Already have an account?
              </p>
              <div className="">
                <Link href="/account/auth/login" passHref>
                  <span className="flex items-center text-[#795DE0] font-inter text-sm justify-start text-bold mx-auto focus:outline-none">
                    Log in
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <h1 className=" text-sm lg:text-xl font-semibold text-left text-[#3A3A3A]">
            Create Account
          </h1>

          <form onSubmit={handleSubmit}>
            <PersonalDetails
              errors={regError}
              updateFormData={updateFormData}
            />

            <div className="justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-base hover:scale-110 focus:outline-none flex justify-center p-3.5 font-regular cursor-pointer                                 
                   hover:bg-blue-500 shadow-inner rounded-lg bg-violet-500 text-gray-200
                   duration-200 ease-in-out transition mx-auto w-full`}
              >
                {isSubmitting ? "Loadin..." : "Create an Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Signup;
