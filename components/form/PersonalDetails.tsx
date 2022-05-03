import { useRef } from "react";
import Button from "../base/Button";
import { useFormData } from "../../context";

const PersonalDetails = (props: { formStep: number; nextFormStep: number }) => {
  const formRef = useRef();
  const { setFormValues } = useFormData();

  async function handleSubmit() {
    //     try{
    //         formRef.current.setErrors({});
    //     }
  }
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="First Name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="Last Name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row pt-8">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="E-mail"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              {/* <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div> */}
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="password"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  type="password"
                />
                <div className="flex -mr-px">
                  <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <button
                      className="text-base hover:scale-110 focus:outline-none flex justify-center py-1 cursor-pointer                                 
                                  hover:bg-gray-300 shadow-inner rounded-lg
                                  bg-gray-200 text-gray-500
                                  duration-200 ease-in-out 
                                  transition"
                    >
                      <div className="font-sans text-sm font-light  px-3">
                        Show
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
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="">Select Gender</option>
                  <option value="02">Male</option>
                  <option value="03">Female</option>
                  <option value="04">Prefer not to state</option>
                </select>
              </div>
            </div>

            <div className="w-full mx-2 flex-1 mt-2 svelte-1l8159u">
              <label className="text-gray-600 font-normal text-sm mb-9 ml-1">
                Date of birth
              </label>
              <div className="bg-white  border border-gray-200  rounded svelte-1l8159u">
                <div className="flex items-end -mb-1">
                  <div className="w-1/3">
                    <div>
                      <select className="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">Date </option>
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
                  <div className="px-2 w-1/3">
                    <div>
                      <select className="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="">Month</option>
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
                  <div className=" w-1/3">
                    <select className="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="">Year</option>
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
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select className="form-select w-full px-3 py-2   rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="">Select Country</option>
                  <option value="02">Niger</option>
                  <option value="03">Boni</option>
                  <option value="04">PAmerica</option>
                </select>
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">                                                 */}
              <div className="mb-3 -mx-2 flex items-end ">
                <div className="px-2 w-1/4">
                  <div>
                    <label className="text-gray-600 font-normal text-sm mb-2 ml-1">
                      Mobile number
                    </label>
                    <select className="form-select w-full px-3 py-3 mb-1 border border-gray-200 rounded focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="01">Code</option>
                      <option value="02">+222</option>
                      <option value="03">+223</option>
                      <option value="04">+234</option>
                    </select>
                  </div>
                </div>

                <div className="px-2 w-3/4">
                  <div>
                    <input
                      className="w-full px-2 py-2 mb-1 border border-gray-200 rounded focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Enter number"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="flex p-2 mt-4 justify-center">
            <Button
              title="Next"
              bgcolor="bg-violet-500"
              color="text-grey-200"
              opacity="opacity-100"
              width="w-40"
            />

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
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
