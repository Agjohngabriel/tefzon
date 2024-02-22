import { useRouter } from "next/router";
import { useState } from "react";
import GuestLayout from "../../../components/GuestLayout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { client } from "../../../libs/axiosClient";
import Link from "next/link";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regError, setRegError] = useState({});
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const [passwordType, setPasswordType] = useState("password");
  const handlePhoneChange = () => {
    const code: string = (document.getElementById("cd") as HTMLInputElement)
      .value;
    const ph: string = (document.getElementById("ph") as HTMLInputElement)
      .value;
    const phne = `${code}${ph}`;
    setPhone(phne);
  };

  // Calculate the maximum date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const eighteenYearsAgo = currentYear - 18;
  const maximumDate = new Date(eighteenYearsAgo, 0, 1); // January 1st, 18 years ago

  // Format the maximum date as yyyy-mm-dd
  const maxDateFormatted = maximumDate.toISOString().split("T")[0];

  const formData = {
    username,
    email,
    name,
    phone,
    gender,
    dob,
    password,
    country,
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
            // window.location.reload();
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
    }
  }

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
        <div className="w-[40rem] bg-white rounded-xl shadow-2xl shadow-indigo-500/50  py-4 px-5 sm:p-10 ">
          <div className="my-2 w-full flex justify-between">
            <h1 className=" text-sm lg:text-xl font-oswald font-semibold text-left text-[#240155]">
              Welcome to Tefzon Fantasy
            </h1>
            <div className="">
              <p className="text-[10px] sm:text-xs text-left text-gray-500 ">
                Already have an account?
              </p>
              <div className="">
                <Link href="/account/auth/login" passHref>
                  <span className="flex items-center text-[#795DE0] font-inter text-xs sm:text-sm justify-start text-bold mx-auto focus:outline-none">
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
            {/* <PersonalDetails
              errors={regError}
              updateFormData={updateFormData}
            /> */}
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
                    {/* <span>{props.errors.email}</span> */}
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
                    {/* <span className="text-red-600 opacity-40">
              {"username" in props.errors
                ? "The username has already been taken"
                : ""}
            </span> */}
                  </div>
                </div>

                <div className="flex gap-x-3 flex-col  md:flex-row">
                  <div className="flex-1 w-full mx-auto  ">
                    <label className=" text-sm font-semibold text-[#3A3A3A]">
                      Email Address
                    </label>
                    <div
                      // className={`bg-white my-2 p-1 flex border ${
                      //   "email" in props.errors ? "border-red-500" : "border-gray-200"
                      // } rounded `}
                      className="bg-white my-2 p-1 flex border border-gray-100 rounded"
                    >
                      <input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-2 px-2  text-[#94A3B8] text-xs outline-none appearance-none"
                        required
                      />{" "}
                    </div>
                    {/* <span className="text-red-600 opacity-40">
              {"email" in props.errors
                ? "The email has already been taken"
                : ""}
            </span> */}
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
                              <span className="material-icons">visibility</span>
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
                        max={maxDateFormatted}
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
                        <option>Select Gender</option>
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
                          <option>Select Country</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Aland Islands">Aland Islands</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
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
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">
                            Brunei Darussalam
                          </option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
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
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curacao">Curacao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands (Malvinas)">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
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
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
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
                          <option value="Isle of Man">Isle of Man</option>
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
                          <option value="Liechtenstein">Liechtenstein</option>
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
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">
                            Netherlands Antilles
                          </option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
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
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
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
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Martin">Saint Martin</option>
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
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Serbia and Montenegro">
                            Serbia and Montenegro
                          </option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Sint Maarten">Sint Maarten</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia and the South Sandwich Islands">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="South Sudan">South Sudan</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">
                            Svalbard and Jan Mayen
                          </option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
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
                          <option value="Timor-Leste">Timor-Leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
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
                          <option value="Western Sahara">Western Sahara</option>
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
                          onChange={handlePhoneChange}
                          className="w-full p-1 text-sm  text-[#94A3B8] text-xs outline-none appearance-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center  py-5 animate-fade-in-up">
                  <input
                    type="checkbox"
                    onChange={() => setChecked(!checked)}
                    className="w-5 h-5 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                  />
                  <label
                    htmlFor="Terms"
                    className="font-montserrat block ml-2 text-sm font-normal text-gray-400"
                  >
                    I have agreed to the
                    <Link href="/home/terms" passHref>
                      <span className="text-violet-800 cursor-pointer">
                        {" "}
                        terms of service
                      </span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/home/terms" passHref>
                      <span className="text-violet-800 cursor-pointer">
                        {" "}
                        privacy policy.
                      </span>
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            <div className="justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  checked
                    ? " focus:outline-none   text-white hover:bg-blue-500 shadow-inner rounded-lg bg-violet-500 cursor-pointer"
                    : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none "
                } w-full text-base flex justify-center p-3.5 font-regular rounded-lg hover:text-white duration-300`}
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
