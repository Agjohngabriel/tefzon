import { useRef, useState } from "react";
import Button from "../base/Button";
// import { useFormData } from "../../context";

const PersonalDetails = (props: {
  formStep: number;
  nextFormStep: any;
  updateFormData: any;
  errors: object;
}) => {
  const [passwordType, setPasswordType] = useState("password");
  const handleDateChange = () => {
    const day: string = (document.getElementById("day") as HTMLInputElement)
      .value;
    const month: string = (document.getElementById("month") as HTMLInputElement)
      .value;
    const year: string = (document.getElementById("year") as HTMLInputElement)
      .value;
    const date = `${day}/${month}/${year}`;
    props.updateFormData({ dob: date });
  };
  const handlePhoneChange = () => {
    const code: string = (document.getElementById("cd") as HTMLInputElement)
      .value;
    const ph: string = (document.getElementById("ph") as HTMLInputElement)
      .value;
    const phne = `${code}${ph}`;
    props.updateFormData({ phone: phne });
  };
  return (
    <div className={`p-5 ${props.formStep === 0 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center pt-10 space-y-4 max-w-lg mx-auto">
        <h1 className="font-montserrat text-lg text-gray-700 w-4/6 text-center">
          Personal Details
        </h1>
        <p className="font-arcon text-sm text-gray-500 text-center w-5/6">
          Please type carefully and fill out the form with Personal details. You
          can't edit these details once you submit the form.
        </p>
      </div>

      <div className="mt-8 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex-1 mx-2 svelte-1l8159u">
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                placeholder="First Name"
                onInput={(e) =>
                  props.updateFormData({ first_name: e.currentTarget.value })
                }
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                required
              />{" "}
            </div>
            {/* <span>{props.errors.email}</span> */}
          </div>
          <div className="w-full flex-1 mx-2 svelte-1l8159u">
            <div
              className={`bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u`}
            >
              <input
                placeholder="Last Name"
                onInput={(e) =>
                  props.updateFormData({ last_name: e.currentTarget.value })
                }
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                required
              />{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-8">
          <div className="w-full mx-2 flex-1 svelte-1l8159u">
            <div
              className={`bg-white my-2 p-1 flex border ${
                "email" in props.errors ? "border-red-500" : "border-gray-200"
              } rounded svelte-1l8159u`}
            >
              <input
                placeholder="E-mail"
                type="email"
                onInput={(e) =>
                  props.updateFormData({ email: e.currentTarget.value })
                }
                className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                required
              />{" "}
            </div>
            <span className="text-red-600 opacity-40">
              {"email" in props.errors
                ? "The email has already been taken"
                : ""}
            </span>
          </div>
          <div className="w-full mx-2 flex-1 svelte-1l8159u">
            {/* <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div> */}
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                placeholder="password"
                onInput={(e) =>
                  props.updateFormData({ password: e.currentTarget.value })
                }
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                required
                type={passwordType}
              />
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                  <button
                    onClick={() => {
                      if (passwordType === "password") {
                        setPasswordType("text");
                        return;
                      }
                      setPasswordType("password");
                    }}
                    type="button"
                    className="text-base hover:scale-110 focus:outline-none flex justify-center py-1 cursor-pointer                                 
                                  hover:bg-gray-300 shadow-inner rounded-lg
                                  bg-gray-200 text-gray-500
                                  duration-200 ease-in-out 
                                  transition"
                  >
                    <div className="font-sans text-sm font-light  px-3">
                      {passwordType === "password" ? "show" : "Hide"}
                    </div>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-4">
          <div className="w-full mx-2 flex-1 svelte-1l8159u">
            <label className="text-gray-600 font-normal text-sm mb-2 ml-1"></label>
            <div
              className={`bg-white my-2 p-1 flex border ${
                "username" in props.errors
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded svelte-1l8159u`}
            >
              <input
                placeholder="Username"
                type="text"
                onInput={(e) =>
                  props.updateFormData({ username: e.currentTarget.value })
                }
                className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                required
              />{" "}
            </div>
            <span className="text-red-600 opacity-40">
              {"username" in props.errors
                ? "The username has already been taken"
                : ""}
            </span>
          </div>

          <div className="w-full mx-2 flex-1 mt-2 svelte-1l8159u">
            <label className="text-gray-600 font-normal text-sm mb-9 ml-1">
              Date of birth
            </label>
            <div className="bg-white  svelte-1l8159u">
              <div className="sm:flex items-end -mb-1">
                <div className="sm:w-1/3">
                  <div>
                    <select
                      onChange={handleDateChange}
                      id="day"
                      className="form-select bg-white w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                      required
                    >
                      <option>Date </option>
                      <option value="01">01 </option>
                      <option value="02">02 </option>
                      <option value="03">03 </option>
                      <option value="04">04 </option>
                      <option value="05">05 </option>
                      <option value="06">06 </option>
                      <option value="07">07 </option>
                      <option value="08">08 </option>
                      <option value="09">09 </option>
                      <option value="10">10 </option>
                      <option value="11">11 </option>
                      <option value="12">12 </option>
                    </select>
                  </div>
                </div>
                <div className="sm:px-2 sm:w-1/3">
                  <div>
                    <select
                      onChange={handleDateChange}
                      id="month"
                      required
                      className="form-select w-full  bg-white px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    >
                      <option>Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                </div>
                <div className=" sm:w-1/3">
                  <select
                    onChange={handleDateChange}
                    id="year"
                    required
                    className="form-select w-full px-3 bg-white py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  >
                    <option>Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-7">
          <div className="sm:flex sm:w-1/2 items-end -mb-1">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <label className="text-gray-600 font-normal text-sm mb-2 ml-1"></label>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  onChange={(e) =>
                    props.updateFormData({ gender: e.currentTarget.value })
                  }
                  className="form-select w-full px-3 py-2  bg-white rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  required
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <label className="text-gray-600 font-normal text-sm mb-2 ml-1"></label>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  onChange={(e) =>
                    props.updateFormData({ country: e.currentTarget.value })
                  }
                  className="form-select w-full px-3 py-2  bg-white rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                >
                  <option>Select Country</option>
                  <option value="Niger">Niger</option>
                  <option value="Boni">Boni</option>
                  <option value="America">PAmerica</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-2/2 mx-2 mt-2 flex-1 svelte-1l8159u">
            <div className="w-full mx-2 flex-1 mt-2 svelte-1l8159u">
              <label className="text-gray-600 font-normal text-sm mb-9 ml-1">
                Phone Number
              </label>
              <div className="bg-white  svelte-1l8159u">
                <div className="flex  items-end -mb-1 ">
                  <div className="w-16 sm:w-1/3 mr-1">
                    <div>
                      <select
                        onChange={handlePhoneChange}
                        id="cd"
                        className="form-select bg-white w-full px-1 py-2.5 mb-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        required
                      >
                        <option>code </option>
                        <option value="+1">+1 </option>
                        <option value="+2">02 </option>
                        <option value="+3">03 </option>
                        <option value="+4">04 </option>
                        <option value="+5">05 </option>
                        <option value="+6">06 </option>
                        <option value="+7">07 </option>
                        <option value="+8">08 </option>
                        <option value="+9">09 </option>
                        <option value="+0">10 </option>
                        <option value="+1">11 </option>
                        <option value="+2">12 </option>
                      </select>
                    </div>
                  </div>
                  <div className=" w-2/3">
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                      <input
                        placeholder="Enter Phone Number"
                        type="number"
                        id="ph"
                        onInput={handlePhoneChange}
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                        required
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-2 mt-4 justify-center">
          {/* <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-10 py-2 font-bold cursor-pointer 
              
              hover:bg-blue-500 shadow-inner rounded-lg
              bg-violet-500 text-gray-200
               duration-200 ease-in-out 
               transition"
          >
            <div className="font-montserrat text-sm font-semibold px-10">
              Next
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
