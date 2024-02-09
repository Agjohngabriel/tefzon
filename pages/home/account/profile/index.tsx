import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProfileLayout from "../../../../components/ProfileLayout";
import Router, { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
interface Profile {
  name: string;
  // other properties of the profile
}

interface Transaction {
  detail: string;
  type: string;
  created_at: string;
  amount: number;
}

interface BankDetails {
  name: string;
  code: string;
  id: number;
}
import { format, parseISO } from "date-fns";

const FormattedDate = ({ date }: any) => {
  const formatDate = (dateString: string) => {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, "MMM d yyyy | h:mmaaa");
  };

  return <span>{formatDate(date)}</span>;
};

const Index = (proxi: Profile) => {
  const { data: session }: any = useSession();
  const [openTab, setOpenTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [details, setDetails] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [current_password, setCurrent_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_password_confirmation, setNew_password_confirmation] =
    useState("");

  useEffect(() => {
    setName(profile["name" as any]);
    setUserName(profile["username" as any]);
    setEmail(profile["email" as any]);
    setPhone(profile["phone" as any]);
    setCountry(profile["country" as any]);
    setGender(profile["gender" as any]);
    setPassword(profile["password" as any]);
    setCurrent_password(profile["password" as any]);
  }, [profile]);

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
      const fetchAccounts = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/get/withdrawal-account`,
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
      const getAccounts = async () => {
        const AccountsFromApi = await fetchAccounts();
        setAccounts(AccountsFromApi.data[0]);
      };
      getAccounts();

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

  const [passwordType, setPasswordType] = useState("password");
  const handleDateChange = () => {
    const day: string = (document.getElementById("day") as HTMLInputElement)
      .value;
    const month: string = (document.getElementById("month") as HTMLInputElement)
      .value;
    const year: string = (document.getElementById("year") as HTMLInputElement)
      .value;
    const date = `${year}-${month}-${day}`;
    setDob(date);
  };
  const handlePhoneChange = () => {
    const code: string = (document.getElementById("cd") as HTMLInputElement)
      .value;
    const ph: string = (document.getElementById("ph") as HTMLInputElement)
      .value;
    const phne = `${code}${ph}`;
    setPhone(phne);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const updateProfile = {
    username,
    email,
    name,
    phone,
    gender,
    dob,
    password,
    country,
  };

  const updatePassword = {
    current_password,
    new_password,
    new_password_confirmation,
  };

  async function handleProfileSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const id = profile["id" as any];
    try {
      const res = await axios.put(
        `${process.env.BACKEND_URL}/user/profile/${id}`,
        updateProfile,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (res) {
        setIsSubmitting(false);
        MySwal.fire({
          title: "Update was Successful",
        });
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data.errors;
      MySwal.fire({
        title: `${errorMessage}`,
      });
      console.log(errorMessage);
      setError(true);
    }
  }

  async function handlePasswordSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/change/password`,
        updatePassword,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (res) {
        setIsSubmitting(false);
        MySwal.fire({
          title: "Password Update Successful",
        });
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data.errors;
      MySwal.fire({
        title: `${errorMessage}`,
      });
      console.log(errorMessage);
      setError(true);
    }
  }

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchTransactions = async () => {
        setIsLoading(true);
        const respo = await axios.get(
          `${process.env.BACKEND_URL}/get-transaction-history`,
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
      const getTransactions = async () => {
        const TransactionsFromApi = await fetchTransactions();
        setTransactions(TransactionsFromApi.data);
      };
      getTransactions();
    }
  }, [session]);

  const [modal, setModal] = useState(false);
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  const [amount, setAmount] = useState("");
  async function handlePayment(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${process.env.BACKEND_URL}/pay`, amount, {
        headers: {
          Authorization: `Bearer ${session?.data.data.token}`,
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      setIsSubmitting(false);
      console.log(res.data.status);
      console.log(res.data.data.link);

      window.location.href = `${res.data.data.link}`;
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data.errors;
      Swal.fire({
        title: `${errorMessage}`,
      });
      console.log(errorMessage);
      setError(true);
    }
  }

  const [banks, setBanks] = useState([]);
  const [bank, setBank] = useState("Select Bank");
  const [bank_code, setBank_code] = useState("");
  const [bank_name, setBank_name] = useState("");
  const [account_name, setAccount_name] = useState("");
  const [account_number, setAccount_number] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        // Make a GET request to the Flutterwave API endpoint for bank list
        const response = await axios.get(
          `${process.env.BACKEND_URL}/getBanks`,
          {
            headers: {
              Authorization: `Bearer ${session?.data.data.token}`,
              "content-type": "application/json",
            },
          }
        );

        // Set the retrieved bank data to the state
        setBanks(response.data.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, [session?.data.data.token]);

  const addWithdrawalAccount = {
    is_default: enabled,
    account_number,
    account_name,
    bank_code,
    bank_name: bank,
  };
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/create/withdrawal-account`,
        addWithdrawalAccount,
        {
          headers: {
            Authorization: `Bearer ${session?.data.data.token}`,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (res) {
        setIsSubmitting(false);
        MySwal.fire({
          title: `${res.data.message}`,
        });
        setWithdrawalModal(false);
      }
    } catch (e: any) {
      setIsSubmitting(false);
      const errorMessage = e.response.data.errors;
      MySwal.fire({
        title: `${errorMessage}`,
      });
      console.log(errorMessage);
      setError(true);
    }
  }
  return (
    <ProfileLayout>
      <div className="container font-montserrat lg:max-w-6xl  bg-[#fff] border-inherit rounded-b-xl shadow-lg shadow-indigo-500/50 sm:ml-5 lg:ml-20 sm:px-5  px-2 py-3 lg:py-5 ">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 border-r pr-5">
            <div className="flex gap-x-2 md:gap-x-3 pt-3  text-[#240155]">
              <div className="bg-[#F8F8F8] font-bold font-oswald text-4xl overflow-hidden py-3 px-6 rounded-lg">
                {proxi?.name?.split(" ").map((i) => i.charAt(0))}
              </div>
              <div className="">
                <h1 className="font-semibold sm:text-xl ">
                  {profile["name" as any]}
                </h1>
                <h1 className="text-xs ">@{profile["username" as any]}</h1>
                <div className="flex gap-x-1 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                  >
                    <path
                      d="M20.6399 14.7568V17.1969C20.6399 18.3014 19.7445 19.1969 18.6399 19.1969H4.39982C3.29527 19.1969 2.39985 18.3015 2.39982 17.1969L2.39948 6.79694C2.39944 5.69235 3.29488 4.79688 4.39948 4.79688H18.6399C19.7445 4.79688 20.6399 5.69231 20.6399 6.79688V9.1678M21.5999 14.7568H18.4799C17.0219 14.7568 15.8399 13.5748 15.8399 12.1168C15.8399 10.6587 17.0219 9.47676 18.4799 9.47676H21.5999V14.7568Z"
                      stroke="#240155"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="text-[#94A3B8] text-xs">
                    Balance: ₦ {details["balance" as any]}.00
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full py-8">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                className={`${
                  openTab === 1 ? "border  border-[#264A83]  " : ""
                } w-full flex flex-col p-2   bg-[#E4ECFB]/10  hover:shodow-lg rounded-lg mb-3`}
              >
                <div className="flex flex-row items-center justify-between ">
                  <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                    <div className="flex gap-x-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="#795DE0"
                          fillOpacity="0.16"
                        />
                        <path
                          d="M4.7998 10.8373C4.7998 9.57876 5.85123 8.55853 7.9998 8.55853C10.1484 8.55853 11.1998 9.57876 11.1998 10.8373C11.1998 11.0375 11.0537 11.1998 10.8735 11.1998H5.12608C4.94588 11.1998 4.7998 11.0375 4.7998 10.8373Z"
                          stroke="#240155"
                          strokeWidth="0.5"
                        />
                        <path
                          d="M9.1998 5.9998C9.1998 6.66255 8.66255 7.1998 7.9998 7.1998C7.33706 7.1998 6.7998 6.66255 6.7998 5.9998C6.7998 5.33706 7.33706 4.7998 7.9998 4.7998C8.66255 4.7998 9.1998 5.33706 9.1998 5.9998Z"
                          stroke="#240155"
                          strokeWidth="0.5"
                        />
                      </svg>
                      <h2 className="text-[#94A3B8] text-sm">Profile</h2>
                    </div>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L14.58 11.9992L10 7"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                className={`${
                  openTab === 2 ? "border  border-[#264A83]  " : ""
                } w-full flex flex-col p-2  bg-[#E4ECFB]/10  hover:shodow-lg rounded-lg mb-3`}
              >
                <div className="flex flex-row items-center justify-between ">
                  <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                    <div className="flex gap-x-2 items-center">
                      <svg
                        className="w-7 h-7"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="#795DE0"
                          fillOpacity="0.16"
                        />
                        <path
                          d="M6.19961 6.93314V6.62838C6.19961 5.61541 7.00247 4.7998 7.99961 4.7998C8.99675 4.7998 9.79961 5.61541 9.79961 6.62838V6.93314M6.19961 6.93314C5.86961 6.93314 5.59961 7.20742 5.59961 7.54266V10.5903C5.59961 10.9255 5.86961 11.1998 6.19961 11.1998H9.79961C10.1296 11.1998 10.3996 10.9255 10.3996 10.5903V7.54266C10.3996 7.20742 10.1296 6.93314 9.79961 6.93314M6.19961 6.93314H9.79961M7.99961 9.3998V8.5998"
                          stroke="#240155"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                        />
                      </svg>

                      <h2 className="text-[#94A3B8] text-sm">Password</h2>
                    </div>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L14.58 11.9992L10 7"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                className={`${
                  openTab === 3 ? "border  border-[#264A83]  " : ""
                } w-full flex flex-col p-2  bg-[#E4ECFB]/10  hover:shodow-lg rounded-lg mb-3`}
              >
                <div className="flex flex-row items-center justify-between ">
                  <div className="flex justify-between justify-center space-x-3  sm:space-x-4  items-center">
                    <div className="flex gap-x-2 items-center">
                      <svg
                        className="w-7 h-7"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="#795DE0"
                          fillOpacity="0.16"
                        />
                        <path
                          d="M10.88 8.92006V8.92006C10.88 9.73746 10.2173 10.4001 9.39992 10.4001H6.7999C5.69535 10.4001 4.79993 9.50471 4.7999 8.40016L4.79987 7.60016C4.79983 6.49557 5.69527 5.6001 6.79987 5.6001H9.42299C10.2277 5.6001 10.88 6.25241 10.88 7.05707V7.05707M11.2 8.92006H10.16C9.67395 8.92006 9.27996 8.52607 9.27996 8.04006C9.27996 7.55405 9.67395 7.16006 10.16 7.16006H11.2V8.92006Z"
                          stroke="#240155"
                          strokeWidth="0.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h2 className="text-[#94A3B8] text-sm">Wallet</h2>
                    </div>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L14.58 11.9992L10 7"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-8 ">
            {" "}
            <div className="container w-full px-2 md:px-10 mx-auto">
              <div
                className={
                  openTab === 1 ? "block animate-fade-in-up" : "hidden"
                }
              >
                <div className="rounded-3xl px-2  py-5 max-w-3xl ">
                  <h2 className=" text-lg font-bold text-[#3A3A3A]">
                    Personal Info
                  </h2>
                  <form
                    onSubmit={handleProfileSubmit}
                    className="animate-fade-in-down"
                  >
                    <div className={`animate-fade-in-up`}>
                      <div className="py-5 animate-fade-in-down">
                        <div className="flex gap-x-3 flex-col md:flex-row">
                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              Full Name
                            </label>
                            <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                              <input
                                placeholder="Enter full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full py-2 px-2 text-[#94A3B8] text-xs outline-none appearance-none"
                                required
                              />{" "}
                            </div>
                          </div>
                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              User Name
                            </label>

                            <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                              <input
                                placeholder="Enter User name"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full py-2 px-2 text-[#94A3B8] text-xs outline-none appearance-none"
                                required
                              />{" "}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-x-3 flex-col  md:flex-row">
                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              Email Address
                            </label>
                            <div className="bg-white my-2 p-1 flex border border-gray-100 rounded">
                              <input
                                placeholder="E-mail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-2 px-2  text-[#94A3B8] text-xs outline-none appearance-none"
                                required
                              />{" "}
                            </div>
                          </div>

                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              password
                            </label>

                            <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                              <input
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-1 px-2  text-[#94A3B8] text-xs outline-none appearance-none"
                                required
                                type={passwordType}
                              />
                              <div className="flex">
                                <span className="flex items-center px-3 leading-semibold text-[#3A3A3A] whitespace-no-wrap border-0 rounded rounded-l-none">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (passwordType === "password") {
                                        setPasswordType("text");
                                        return;
                                      }
                                      setPasswordType("password");
                                    }}
                                    className="flex justify-center py-1 text-base text-gray-500 transition duration-200 ease-in-out rounded cursor-pointer hover:scale-110 focus:outline-none"
                                  >
                                    {passwordType === "password" ? (
                                      <span className="material-icons">
                                        visibility
                                      </span>
                                    ) : (
                                      <span className="material-icons">
                                        visibility_off
                                      </span>
                                    )}
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-x-3 flex-col  md:flex-row">
                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              Date of Birth
                            </label>
                            <div className="bg-white my-2 p-1 flex border border-gray-100 rounded">
                              <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full py-2 px-2  text-[#94A3B8] text-xs outline-none appearance-none"
                                required
                              />
                            </div>
                          </div>
                          <div className="flex-1 w-full mx-auto  ">
                            <label className=" text-sm font-semibold text-[#3A3A3A]">
                              Gender
                            </label>
                            <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                              <select
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full px-3 py-2 transition-colors bg-white rounded-md cursor-pointer form-select text-gray-400 text-xs focus:outline-none focus:border-indigo-500"
                                required
                              >
                                <option>{gender}</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-x-3 flex-col lg:flex-row ">
                          <div className="items-end -mb-1 sm:flex lg:w-1/2">
                            <div className="flex-1 w-full mx-auto  ">
                              <label className=" text-sm font-semibold text-[#3A3A3A]">
                                Country
                              </label>
                              <div className="flex p-1 md:my-2 bg-white border border-gray-200 rounded ">
                                <select
                                  onChange={(e) => setCountry(e.target.value)}
                                  className="w-full px-3 py-2 transition-colors bg-white rounded-md cursor-pointer form-select text-gray-400 text-xs focus:outline-none focus:border-indigo-500"
                                >
                                  <option>{country}</option>
                                  <option value="Afghanistan">
                                    Afghanistan
                                  </option>
                                  <option value="Aland Islands">
                                    Aland Islands
                                  </option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">
                                    American Samoa
                                  </option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bonaire, Sint Eustatius and Saba">
                                    Bonaire, Sint Eustatius and Saba
                                  </option>
                                  <option value="Bosnia and Herzegovina">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">
                                    Bouvet Island
                                  </option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="Brunei Darussalam">
                                    Brunei Darussalam
                                  </option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">
                                    Burkina Faso
                                  </option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">
                                    Cayman Islands
                                  </option>
                                  <option value="Central African Republic">
                                    Central African Republic
                                  </option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">
                                    Christmas Island
                                  </option>
                                  <option value="Cocos (Keeling) Islands">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, Democratic Republic of the Congo">
                                    Congo, Democratic Republic of the Congo
                                  </option>
                                  <option value="Cook Islands">
                                    Cook Islands
                                  </option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote D'Ivoire">
                                    Cote D'Ivoire
                                  </option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Curacao">Curacao</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">
                                    Czech Republic
                                  </option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">
                                    Dominican Republic
                                  </option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">
                                    El Salvador
                                  </option>
                                  <option value="Equatorial Guinea">
                                    Equatorial Guinea
                                  </option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands (Malvinas)">
                                    Falkland Islands (Malvinas)
                                  </option>
                                  <option value="Faroe Islands">
                                    Faroe Islands
                                  </option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">
                                    French Guiana
                                  </option>
                                  <option value="French Polynesia">
                                    French Polynesia
                                  </option>
                                  <option value="French Southern Territories">
                                    French Southern Territories
                                  </option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">
                                    Guinea-Bissau
                                  </option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and Mcdonald Islands">
                                    Heard Island and Mcdonald Islands
                                  </option>
                                  <option value="Holy See (Vatican City State)">
                                    Holy See (Vatican City State)
                                  </option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran, Islamic Republic of">
                                    Iran, Islamic Republic of
                                  </option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">
                                    Isle of Man
                                  </option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">
                                    Korea, Democratic People's Republic of
                                  </option>
                                  <option value="Korea, Republic of">
                                    Korea, Republic of
                                  </option>
                                  <option value="Kosovo">Kosovo</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">
                                    Lao People's Democratic Republic
                                  </option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libyan Arab Jamahiriya">
                                    Libyan Arab Jamahiriya
                                  </option>
                                  <option value="Liechtenstein">
                                    Liechtenstein
                                  </option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Macedonia, the Former Yugoslav Republic of">
                                    Macedonia, the Former Yugoslav Republic of
                                  </option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">
                                    Marshall Islands
                                  </option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia, Federated States of">
                                    Micronesia, Federated States of
                                  </option>
                                  <option value="Moldova, Republic of">
                                    Moldova, Republic of
                                  </option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">
                                    Netherlands
                                  </option>
                                  <option value="Netherlands Antilles">
                                    Netherlands Antilles
                                  </option>
                                  <option value="New Caledonia">
                                    New Caledonia
                                  </option>
                                  <option value="New Zealand">
                                    New Zealand
                                  </option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">
                                    Norfolk Island
                                  </option>
                                  <option value="Northern Mariana Islands">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian Territory, Occupied">
                                    Palestinian Territory, Occupied
                                  </option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">
                                    Papua New Guinea
                                  </option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">
                                    Philippines
                                  </option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">
                                    Puerto Rico
                                  </option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">
                                    Russian Federation
                                  </option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint Barthelemy">
                                    Saint Barthelemy
                                  </option>
                                  <option value="Saint Helena">
                                    Saint Helena
                                  </option>
                                  <option value="Saint Kitts and Nevis">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="Saint Lucia">
                                    Saint Lucia
                                  </option>
                                  <option value="Saint Martin">
                                    Saint Martin
                                  </option>
                                  <option value="Saint Pierre and Miquelon">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="Saint Vincent and the Grenadines">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="Saudi Arabia">
                                    Saudi Arabia
                                  </option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Serbia and Montenegro">
                                    Serbia and Montenegro
                                  </option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">
                                    Sierra Leone
                                  </option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Sint Maarten">
                                    Sint Maarten
                                  </option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">
                                    Solomon Islands
                                  </option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">
                                    South Africa
                                  </option>
                                  <option value="South Georgia and the South Sandwich Islands">
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="South Sudan">
                                    South Sudan
                                  </option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">
                                    Switzerland
                                  </option>
                                  <option value="Syrian Arab Republic">
                                    Syrian Arab Republic
                                  </option>
                                  <option value="Taiwan, Province of China">
                                    Taiwan, Province of China
                                  </option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, United Republic of">
                                    Tanzania, United Republic of
                                  </option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">
                                    Timor-Leste
                                  </option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">
                                    Turkmenistan
                                  </option>
                                  <option value="Turks and Caicos Islands">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">
                                    United Arab Emirates
                                  </option>
                                  <option value="United Kingdom">
                                    United Kingdom
                                  </option>
                                  <option value="United States">
                                    United States
                                  </option>
                                  <option value="United States Minor Outlying Islands">
                                    United States Minor Outlying Islands
                                  </option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">
                                    Virgin Islands, British
                                  </option>
                                  <option value="Virgin Islands, U.s.">
                                    Virgin Islands, U.s.
                                  </option>
                                  <option value="Wallis and Futuna">
                                    Wallis and Futuna
                                  </option>
                                  <option value="Western Sahara">
                                    Western Sahara
                                  </option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1   ">
                            <div className="flex-1 w-full mx-auto  ">
                              <label className=" text-sm font-semibold text-[#3A3A3A]">
                                Phone Number
                              </label>
                              <div className="flex items-center p-1 my-1 bg-white border border-gray-200 rounded ">
                                <span className="flex items-center px-3 text-[#3A3A3A] whitespace-no-wrap border-0 ">
                                  <select
                                    onChange={handlePhoneChange}
                                    id="cd"
                                    className="form-select bg-white w-[3.5rem] text-xs  py-2.5  border-0 rounded-md focus:outline-none focus:border-indigo-500  text-gray-400 transition-colors cursor-pointer"
                                    required
                                  >
                                    <option value="234">+234</option>
                                    <option value="93">+93</option>
                                    <option value="358">+358</option>
                                    <option value="355">+355</option>
                                    <option value="213">+213</option>
                                    <option value="1684">+1684</option>
                                    <option value="376">+376</option>
                                    <option value="244">+244</option>
                                    <option value="1264"> +1264</option>
                                    <option value="672"> +672</option>
                                    <option value="1268">+1268</option>
                                    <option value="54"> +54</option>
                                    <option value="374"> +374</option>
                                    <option value="297"> +297</option>
                                    <option value="61"> +61</option>
                                    <option value="43"> +43</option>
                                    <option value="994"> +994</option>
                                    <option value="1242"> +1242</option>
                                    <option value="973"> +973</option>
                                    <option value="880"> +880</option>
                                    <option value="1246"> +1246</option>
                                    <option value="375"> +375</option>
                                    <option value="32"> +32</option>
                                    <option value="501"> +501</option>
                                    <option value="229"> +229</option>
                                    <option value="1441"> +1441</option>
                                    <option value="975"> +975</option>
                                    <option value="591"> +591</option>
                                    <option value="599">+599</option>
                                    <option value="387">+387</option>
                                    <option value="267"> +267</option>
                                    <option value="55">+55</option>
                                    <option value="55"> +55</option>
                                    <option value="246">+246</option>
                                    <option value="673"> +673</option>
                                    <option value="359">+359</option>
                                    <option value="226">+226</option>
                                    <option value="257">+257</option>
                                    <option value="855">+855</option>
                                    <option value="237">+237</option>
                                    <option value="1">+1</option>
                                    <option value="238">+238</option>
                                    <option value="1345">+1345</option>
                                    <option value="236">+236</option>
                                    <option value="235">+235</option>
                                    <option value="56">+56</option>
                                    <option value="86">+86</option>
                                    <option value="61">+61</option>
                                    <option value="672"> +672</option>
                                    <option value="57">+57</option>
                                    <option value="269">+269</option>
                                    <option value="242">+242</option>
                                    <option value="242">+242</option>
                                    <option value="682">+682</option>
                                    <option value="506">+506</option>
                                    <option value="225">+225</option>
                                    <option value="385">+385</option>
                                    <option value="53">+53</option>
                                    <option value="599"> +599</option>
                                    <option value="357">+357</option>
                                    <option value="420">+420</option>
                                    <option value="45">+45</option>
                                    <option value="253">+253</option>
                                    <option value="1767">+1767</option>
                                    <option value="1809">+1809</option>
                                    <option value="593">+593</option>
                                    <option value="20">+20</option>
                                    <option value="503">+503</option>
                                    <option value="240"> +240</option>
                                    <option value="291"> +291</option>
                                    <option value="372"> +372</option>
                                    <option value="251"> +251</option>
                                    <option value="500">+500</option>
                                    <option value="298"> +298</option>
                                    <option value="679"> +679</option>
                                    <option value="358"> +358</option>
                                    <option value="33"> +33</option>
                                    <option value="594"> +594</option>
                                    <option value="689"> +689</option>
                                    <option value="262">+262</option>
                                    <option value="241"> +241</option>
                                    <option value="220"> +220</option>
                                    <option value="995"> +995</option>
                                    <option value="49"> +49</option>
                                    <option value="233"> +233</option>
                                    <option value="350"> +350</option>
                                    <option value="30"> +30</option>
                                    <option value="299"> +299</option>
                                    <option value="1473"> +1473</option>
                                    <option value="590"> +590</option>
                                    <option value="1671"> +1671</option>
                                    <option value="502"> +502</option>
                                    <option value="44"> +44</option>
                                    <option value="224"> +224</option>
                                    <option value="245"> +245</option>
                                    <option value="592"> +592</option>
                                    <option value="509"> +509</option>
                                    <option value="0">+0</option>
                                    <option value="39">+39</option>
                                    <option value="504"> +504</option>
                                    <option value="852"> +852</option>
                                    <option value="36"> +36</option>
                                    <option value="354"> +354</option>
                                    <option value="91"> +91</option>
                                    <option value="62"> +62</option>
                                    <option value="98">+98</option>
                                    <option value="964"> +964</option>
                                    <option value="353"> +353</option>
                                    <option value="44">+44</option>
                                    <option value="972"> +972</option>
                                    <option value="39"> +39</option>
                                    <option value="1876"> +1876</option>
                                    <option value="81"> +81</option>
                                    <option value="44"> +44</option>
                                    <option value="962"> +962</option>
                                    <option value="7"> +7</option>
                                    <option value="254"> +254</option>
                                    <option value="686"> +686</option>
                                    <option value="850">+850</option>
                                    <option value="82">+82</option>
                                    <option value="381">+381</option>
                                    <option value="965">+965</option>
                                    <option value="996"> +996</option>
                                    <option value="856">+856</option>
                                    <option value="371"> +371</option>
                                    <option value="961"> +961</option>
                                    <option value="266"> +266</option>
                                    <option value="231"> +231</option>
                                    <option value="218"> +218</option>
                                    <option value="423">+423</option>
                                    <option value="370"> +370</option>
                                    <option value="352"> +352</option>
                                    <option value="853"> +853</option>
                                    <option value="389">+389</option>
                                    <option value="261"> +261</option>
                                    <option value="265"> +265</option>
                                    <option value="60"> +60</option>
                                    <option value="960"> +960</option>
                                    <option value="223"> +223</option>
                                    <option value="356"> +356</option>
                                    <option value="692"> +692</option>
                                    <option value="596"> +596</option>
                                    <option value="222"> +222</option>
                                    <option value="230"> +230</option>
                                    <option value="269"> +269</option>
                                    <option value="52"> +52</option>
                                    <option value="691">+691</option>
                                    <option value="373">+373</option>
                                    <option value="377"> +377</option>
                                    <option value="976"> +976</option>
                                    <option value="382"> +382</option>
                                    <option value="1664"> +1664</option>
                                    <option value="212"> +212</option>
                                    <option value="258"> +258</option>
                                    <option value="95"> +95</option>
                                    <option value="264"> +264</option>
                                    <option value="674"> +674</option>
                                    <option value="977"> +977</option>
                                    <option value="31"> +31</option>
                                    <option value="599">+599</option>
                                    <option value="687">+687</option>
                                    <option value="64"> +64</option>
                                    <option value="505">+505</option>
                                    <option value="227"> +227</option>
                                    <option value="234">+234</option>
                                    <option value="683">+683</option>
                                    <option value="672">+672</option>
                                    <option value="1670">+1670</option>
                                    <option value="47">+47</option>
                                    <option value="968">+968</option>
                                    <option value="92"> +92</option>
                                    <option value="680"> +680</option>
                                    <option value="970">+970</option>
                                    <option value="507"> +507</option>
                                    <option value="675">+675</option>
                                    <option value="595">+595</option>
                                    <option value="51"> +51</option>
                                    <option value="63">+63</option>
                                    <option value="64"> +64</option>
                                    <option value="48"> +48</option>
                                    <option value="351"> +351</option>
                                    <option value="1787"> +1787</option>
                                    <option value="974"> +974</option>
                                    <option value="262"> +262</option>
                                    <option value="40">+40</option>
                                    <option value="70">+70</option>
                                    <option value="250"> +250</option>
                                    <option value="590">+590</option>
                                    <option value="290"> +290</option>
                                    <option value="1869">+1869</option>
                                    <option value="1758"> +1758</option>
                                    <option value="590">+590</option>
                                    <option value="508">+508</option>
                                    <option value="1784">+1784</option>
                                    <option value="684"> +684</option>
                                    <option value="378">+378</option>
                                    <option value="239"> +239</option>
                                    <option value="966"> +966</option>
                                    <option value="221"> +221</option>
                                    <option value="381"> +381</option>
                                    <option value="381">+381</option>
                                    <option value="248"> +248</option>
                                    <option value="232"> +232</option>
                                    <option value="65">+65</option>
                                    <option value="1"> +1</option>
                                    <option value="421"> +421</option>
                                    <option value="386"> +386</option>
                                    <option value="677"> +677</option>
                                    <option value="252"> +252</option>
                                    <option value="27"> +27</option>
                                    <option value="500">+500</option>
                                    <option value="211">+211</option>
                                    <option value="34"> +34</option>
                                    <option value="94"> +94</option>
                                    <option value="249"> +249</option>
                                    <option value="597"> +597</option>
                                    <option value="47">+47</option>
                                    <option value="268"> +268</option>
                                    <option value="46">+46</option>
                                    <option value="41">+41</option>
                                    <option value="963">+963</option>
                                    <option value="886">+886</option>
                                    <option value="992">+992</option>
                                    <option value="255">+255</option>
                                    <option value="66"> +66</option>
                                    <option value="670"> +670</option>
                                    <option value="228"> +228</option>
                                    <option value="690"> +690</option>
                                    <option value="676"> +676</option>
                                    <option value="1868">+1868</option>
                                    <option value="216"> +216</option>
                                    <option value="90"> +90</option>
                                    <option value="7370"> +7370</option>
                                    <option value="1649">+1649</option>
                                    <option value="688"> +688</option>
                                    <option value="256"> +256</option>
                                    <option value="380"> +380</option>
                                    <option value="971">+971</option>
                                    <option value="44"> +44</option>
                                    <option value="1"> +1</option>

                                    <option value="598"> +598</option>
                                    <option value="998">+998</option>
                                    <option value="678"> +678</option>
                                    <option value="58">+58</option>
                                    <option value="84">+84</option>
                                    <option value="1284">+1284</option>
                                    <option value="1340">+1340</option>
                                    <option value="681"> +681</option>
                                    <option value="212">+212</option>
                                    <option value="967"> +967</option>
                                    <option value="260"> +260</option>
                                    <option value="263"> +263</option>
                                  </select>
                                </span>

                                <input
                                  placeholder="Enter Phone Number"
                                  type="phone"
                                  id="ph"
                                  value={phone}
                                  onChange={handlePhoneChange}
                                  className="w-full p-1 text-sm  text-[#94A3B8] text-xs outline-none appearance-none"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="my-7 bg-[#9783E3] text-[#fff] text-center active:bg-gay-200 font-light text-xs px-4 py-3 sm:py-4 w- sm:w-[30rem] rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                      Update changes
                    </button>
                  </form>
                </div>
              </div>

              <div
                className={
                  openTab === 2 ? "block animate-fade-in-up" : "hidden"
                }
              >
                <div className="rounded-3xl p-2  pb-5 max-w-3xl h-[30rem]">
                  <h2 className=" text-lg font-bold text-[#3A3A3A] py-2">
                    Change password
                  </h2>
                  <form
                    onSubmit={handlePasswordSubmit}
                    className="animate-fade-in-down max-w-xl"
                  >
                    <div className=" space-y-5">
                      <div className="flex-1 w-full mx-auto ">
                        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                          <input
                            value={current_password}
                            onChange={(e) =>
                              setCurrent_password(e.target.value)
                            }
                            className="w-full p-1 px-2 text-gray-700 outline-none appearance-none"
                            required
                            type={passwordType}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center px-3 leading-normal text-gray-600 whitespace-no-wrap bg-white border-0 rounded rounded-l-none">
                              <button
                                onClick={() => {
                                  if (passwordType === "password") {
                                    setPasswordType("text");
                                    return;
                                  }
                                  setPasswordType("password");
                                }}
                                type="button"
                              >
                                <div className="px-3 font-sans text-sm font-light">
                                  {passwordType === "password" ? (
                                    <span className="material-icons">
                                      visibility
                                    </span>
                                  ) : (
                                    <span className="material-icons">
                                      visibility_off
                                    </span>
                                  )}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 w-full mx-auto  ">
                        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                          <input
                            value={new_password}
                            onChange={(e) => setNew_password(e.target.value)}
                            className="w-full p-1 px-2 text-gray-700 outline-none appearance-none"
                            required
                            type={passwordType}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center px-3 leading-normal text-gray-600 whitespace-no-wrap bg-white border-0 rounded rounded-l-none">
                              <button
                                onClick={() => {
                                  if (passwordType === "password") {
                                    setPasswordType("text");
                                    return;
                                  }
                                  setPasswordType("password");
                                }}
                                type="button"
                              >
                                <div className="px-3 font-sans text-sm font-light">
                                  {passwordType === "password" ? (
                                    <span className="material-icons">
                                      visibility
                                    </span>
                                  ) : (
                                    <span className="material-icons">
                                      visibility_off
                                    </span>
                                  )}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 w-full mx-auto ">
                        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded ">
                          <input
                            value={new_password_confirmation}
                            onChange={(e) =>
                              setNew_password_confirmation(e.target.value)
                            }
                            className="w-full p-1 px-2 text-gray-700 outline-none appearance-none"
                            required
                            type={passwordType}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center px-3 leading-normal text-gray-600 whitespace-no-wrap bg-white border-0 rounded rounded-l-none">
                              <button
                                onClick={() => {
                                  if (passwordType === "password") {
                                    setPasswordType("text");
                                    return;
                                  }
                                  setPasswordType("password");
                                }}
                                type="button"
                              >
                                <div className="px-3 font-sans text-sm font-light">
                                  {passwordType === "password" ? (
                                    <span className="material-icons">
                                      visibility
                                    </span>
                                  ) : (
                                    <span className="material-icons">
                                      visibility_off
                                    </span>
                                  )}
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="my-7 bg-[#9783E3] text-[#fff] text-center active:bg-gay-200 font-light text-xs px-4 py-2 sm:py-4 sm:w-[20rem] rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Update changes
                    </button>
                  </form>
                </div>
              </div>

              <div
                className={
                  openTab === 3 ? "block animate-fade-in-up" : "hidden"
                }
              >
                <div className="flex flex-col  pt-5 space-y-4 max-w-2xl mx-2">
                  <div className="sm:w-3/5 md:w-full lg:w-4/5   h-40   bg-[#5F5999] rounded-xl relative text-white shadow-lg">
                    <img
                      className="relative object-cover w-full h-full rounded-xl"
                      src="/img/cardbg.png"
                      alt="cardbg"
                    />
                    <div className="w-full px-8 absolute top-8">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-arcon text-sm">Tefzone Wallet</p>
                        </div>
                      </div>
                      <div className="">
                        <p className="font-montserrat tracking-more-wider text-2xl">
                          ₦ {details["balance" as any]} .00
                        </p>
                      </div>
                      <div className="py-2 pr-6">
                        <div className="flex justify-between">
                          <div className="">
                            <p className="font-light text-xs">
                              {accounts["bank_name" as any]}
                            </p>
                            <p className="font-light text-xs">
                              {accounts["account_name" as any]}
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                              {accounts["account_number" as any]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-3/5 md:w-full lg:w-4/5  ">
                    <div className="lg:flex flex-col md:flex-row gap-x-2 pb-5 items-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setModal(true);
                        }}
                        className="w-full text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center gap-x-1 items-center mt-2 xl-px-20  py-4 rounded  font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#6E4BEC] opacity-50 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8633 2.88449C13.6007 2.61974 13.2446 2.471 12.8733 2.471L4.47333 2.471C4.10203 2.471 3.74594 2.61973 3.48338 2.88449M8.67255 14.5288L8.67255 6.52881M8.67255 6.52881L5.47255 9.58558M8.67255 6.52881L11.8726 9.58558"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-montserrat text-sm font-semibold">
                          Fund Wallet
                        </span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setWithdrawalModal(true);
                        }}
                        className="w-full text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex gap-x-1 items-center  justify-center mt-2 py-4 rounded  font-bold cursor-pointer 
                                
                                hover:bg-blue-500 
                                bg-[#6E4BEC] opacity-50 text-gray-200
                                 duration-200 ease-in-out 
                                 transition"
                      >
                        <span className="font-montserrat text-sm font-semibold">
                          Withdraw Money
                        </span>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.81006 14.1155C3.07261 14.3803 3.42871 14.529 3.80001 14.529L12.2 14.529C12.5713 14.529 12.9274 14.3803 13.19 14.1155M8.00079 2.47119V10.4712M8.00079 10.4712L11.2008 7.41442M8.00079 10.4712L4.80079 7.41442"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <h2 className=" text-lg md:text-xl font-bold text-[#240155] py-2">
                      Transaction History
                    </h2>

                    {transactions.map((item: Transaction, index) => (
                      <div key={index} className="details">
                        <div className="flex items-center gap-x-2 py-1 px-2 text-sm">
                          <div className="rounded-full h-10 w-10 bg-[#795DE0]/20"></div>
                          <div className="flex flex-col">
                            <span className="text-sm">{item.type}</span>
                            <div className="flex-auto text-xs text-gray-400 my-1">
                              <span className=" ">{item.detail}</span>
                            </div>
                          </div>
                          <div className="flex flex-col ml-auto text-right">
                            <span className="text-sm">₦{item.amount}</span>
                            <div className="flex-auto text-xs text-gray-400 my-1">
                              <span className=" ">
                                {details["created_at" as any] === undefined ? (
                                  ""
                                ) : (
                                  <FormattedDate date={item.created_at} />
                                )}{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-dashed border-b-2 my-1 ">
                          <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -left-1.5"></div>
                          <div className="absolute rounded-full w-3 h-3 bg-blue-900 -mt-1 -right-1.5"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-md sm:p-6  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2">
                  <p className="text-xs  text-gray-900 ">Amount</p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="default-modal"
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

              <form onSubmit={handlePayment} className=" pt-2">
                <div className="w-full  flex-1 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <span className="text-black-150 font-arcon pl-2">(₦)</span>
                    <input
                      value={amount}
                      onInput={(e) => setAmount(e.currentTarget.value)}
                      required
                      placeholder="Amount"
                      className="px-2 appearance-none outline-none w-full text-sm text-gray-700 py-1"
                    />{" "}
                  </div>
                </div>

                <div className="w-full mx-2  py-5 flex-1 svelte-1l8159u">
                  <button
                    type="submit"
                    className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center sm:w-full py-2 rounded font-bold cursor-pointer 
                                opacity-50
										hover:bg-blue-500 
										bg-[#6E4BEC] text-gray-200
										duration-200 ease-in-out 
										transition"
                  >
                    <div className="font-montserrat text-sm px-20 lg:px-10">
                      Proceed to Paystack
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {withdrawalModal && (
        <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#000000]/50 ">
          <div className="flex items-end justify-center sm:min-h-screen md:px-4 pt-4 pb-10 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pb-4 overflow-hidden text-center align-bottom transition-all transform bg-white rounded-2xl shadow-xl  top-20 md:top-0  sm:my-5 w-full sm:max-w-md sm:p-6  sm:align-middle">
              <div className="flex items-start justify-between ">
                <div className=" flex justify-between font-semibold py-2">
                  <p className="text-xs  text-gray-900 ">Withdraw Fund</p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setWithdrawalModal(false);
                  }}
                  type="button"
                  className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="default-modal"
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

              <form className="space-y-3">
                <div className="w-full  flex-1 svelte-1l8159u">
                  <div className="relative inline-block group  my-2 w-full">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-2 py-3 text-xs font-regular text-gray-400 transition-colors cursor-pointer bg-white border border-gray-100 rounded-md  text-left"
                    >
                      {bank}
                      <svg
                        className="h-5 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}

                    <div className=" hidden group-hover:block absolute  z-[100]  font-[Lato] p-2  origin-top-right bg-white rounded-md shadow-xl">
                      <div className=" h-[12rem] overflow-hidden overflow-y-auto scrollbar-hide">
                        {banks.map((item: BankDetails) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setBank(item.name);
                              setBank_code(item.code);
                            }}
                            className="text-left w-full block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full  flex-1 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      className="p-1 px-2 appearance-none outline-none w-full text-sm text-gray-700"
                      placeholder="Account Name"
                      value={account_name}
                      onChange={(e) => setAccount_name(e.currentTarget.value)}
                      required
                    />{" "}
                  </div>
                </div>
                <div className="w-full  flex-1 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Account number"
                      value={account_number}
                      required
                      onChange={(e) => setAccount_number(e.currentTarget.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-sm text-gray-700"
                    />{" "}
                  </div>
                </div>

                <div className="w-full flex-1 svelte-1l8159u hidden">
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input
                      placeholder="Bank Code"
                      className="px-2 appearance-none outline-none w-full text-sm text-gray-700 py-1"
                      value={bank_code}
                      required
                    />{" "}
                  </div>
                </div>
                <div className="flex gap-x-2 items-center pt-2">
                  <p className="font-inter text-xs text-[#222222]/60 ">
                    Set as Default
                  </p>
                  <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="flex">
                      <label className="inline-flex relative items-center mr-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={enabled}
                          readOnly
                        />
                        <div
                          onClick={() => {
                            setEnabled(!enabled);
                          }}
                          className="w-9 h-5 border border-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#67D74B]"
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full  py-5 flex-1 svelte-1l8159u">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-base shadow-xl shadow-indigo-500/50 hover:scale-110 focus:outline-none flex justify-center w-full sm:w-full py-2 rounded font-bold cursor-pointer 
                                
										hover:bg-blue-500 
										bg-[#6E4BEC] opacity-50 text-gray-200
										duration-200 ease-in-out 
										transition"
                  >
                    <div className="font-sans text-sm font-semibold px-10">
                      Submit
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default Index;
