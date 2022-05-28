import Router, { useRouter } from "next/router";
import { useState } from "react";
import { Agreement } from "../../../components/form/Agreement";
import Favourite from "../../../components/form/Favourite";
import PersonalDetails from "../../../components/form/PersonalDetails";
import GuestLayout from "../../../components/GuestLayout";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { client } from "../../../libs/axiosClient";
const Signup = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regError, setRegError] = useState({});
  const [error, setError] = useState(false);
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
      if (user) {
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
      const errorMessage = e.response.data.errors;
      setError(true);
      setRegError(errorMessage);
      setFormStep(0);
    }
  }

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  return (
    <GuestLayout>
      <div className="flex items-center justify-center pb-20  mx-auto mt-10 mb-20  px-4 py-6 lg:px-20  w-auto">
        <div className="bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 rounded-2xl border shadow-xl p-10 pb-10 w-full">
          <h1 className="font-oswald text-2xl text-gray-700 pb-10 text-center">
            Create Your Account
          </h1>
          <div className="bg-white">
            <div className="mx-4 p-4">
              <div className="flex items-center">
                <div className="flex items-center text-white relative ">
                  <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#240155]/100 border-[#240155]/100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user-plus "
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                  </div>
                </div>
                <div
                  className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                    formStep >= 0 ? "border-gray-300" : "border-[#240155]/50"
                  } `}
                ></div>
                <div className="flex items-center text-gray-500 relative">
                  <div
                    className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                      formStep >= 1
                        ? "bg-[#240155]/100 border-[#240155]/100"
                        : "border-gray-300"
                    } `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bookmark "
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                    formStep >= 0 ? "border-gray-300" : "border-[#240155]/50"
                  }`}
                ></div>

                <div className="flex items-center text-gray-500 relative">
                  <div
                    className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                      formStep >= 2
                        ? "bg-[#240155]/100 border-[#240155]/100"
                        : "border-gray-300"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail "
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              {formStep >= 0 && (
                <PersonalDetails
                  errors={regError}
                  updateFormData={updateFormData}
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                />
              )}
              {formStep >= 1 && (
                <Favourite
                  updateFormData={updateFormData}
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                />
              )}

              {formStep >= 2 && (
                <Agreement
                  updateFormData={updateFormData}
                  formStep={formStep}
                  nextFormStep={nextFormStep}
                />
              )}
              {/* <Button
            Onclick={() => nextFormStep}
              title="Next"
              bgcolor="bg-violet-500"
              color="text-grey-200"
              opacity="opacity-100"
              width="w-40"
            /> */}

              <div className=" p-2 mt-10 justify-center">
                {formStep == 2 ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`text-base hover:scale-110 focus:outline-none flex justify-center p-3.5 font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner rounded-lg
                                            bg-violet-500 text-gray-200
                                            duration-200 ease-in-out 
                                            transition mx-auto w-72`}
                  >
                    {isSubmitting ? "Loadin..." : "Complete Registration"}
                  </button>
                ) : (
                  <a
                    onClick={nextFormStep}
                    type="button"
                    className={`text-base hover:scale-110 focus:outline-none flex justify-center p-3.5 font-bold cursor-pointer                                 
                                            hover:bg-blue-500 shadow-inner rounded-lg
                                            bg-violet-500 text-gray-200
                                            duration-200 ease-in-out 
                                            transition mx-auto w-72`}
                  >
                    Next
                  </a>
                )}

                {formStep > 0 && (
                  <button
                    onClick={prevFormStep}
                    type="button"
                    className="flex items-center text-gray-500 rounded py-2 focus:outline-none mx-auto"
                  >
                    <span className=" -mr-20 material-icons hover:text-green-500">
                      arrow_backward
                    </span>
                    {formStep == 1 && <span>Back to Personal Details</span>}
                    {formStep == 2 && <span>Back to favourites</span>}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        {}
      </div>
    </GuestLayout>
  );
};

export default Signup;
