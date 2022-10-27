import { useState } from "react";
import Layout from "../../../components/Layouts";

const Index = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    //switch state
    setOpen(!open);
  };
  return (
    <Layout>
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">
            FAQ - Order, Shipping, Etc.
          </h2>
          <ul className="flex flex-col">
            <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>When will my order arrive?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                x-ref="tab"
                // :style="handleToggle()"
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
              >
                <p className="p-3 text-gray-900">
                  Shipping time is set by our delivery partners, according to
                  the delivery method chosen by you. Additional details can be
                  found in the order confirmation
                </p>
              </div>
            </li>
            <li className="bg-white my-2 shadow-lg" x-data="accordion(2)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>How do I track my order?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                x-ref="tab"
                // :style="handleToggle()"
              >
                <p className="p-3 text-gray-900">
                  Once shipped, you’ll get a confirmation email that includes a
                  tracking number and additional information regarding tracking
                  your order.
                </p>
              </div>
            </li>
            <li className="bg-white my-2 shadow-lg" x-data="accordion(3)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>What’s your return policy?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                x-ref="tab"
                // :style="handleToggle()"
              >
                <p className="p-3 text-gray-900">
                  We allow the return of all items within 30 days of your
                  original order’s date. If you’re interested in returning your
                  items, send us an email with your order number and we’ll ship
                  a return label.
                </p>
              </div>
            </li>
            <li className="bg-white my-2 shadow-lg" x-data="accordion(4)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>How do I make changes to an existing order?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                x-ref="tab"
                // :style="handleToggle()"
              >
                <p className="p-3 text-gray-900">
                  Changes to an existing order can be made as long as the order
                  is still in “processing” status. Please contact our team via
                  email and we’ll make sure to apply the needed changes. If your
                  order has already been shipped, we cannot apply any changes to
                  it. If you are unhappy with your order when it arrives, please
                  contact us for any changes you may require.
                </p>
              </div>
            </li>
            <li className="bg-white my-2 shadow-lg" x-data="accordion(5)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>What shipping options do you have?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                x-ref="tab"
                // :style="handleToggle()"
              >
                <p className="p-3 text-gray-900">
                  For USA domestic orders we offer FedEx and USPS shipping.
                </p>
              </div>
            </li>
            <li className="bg-white my-2 shadow-lg" x-data="accordion(6)">
              <h2
                onClick={toggleHandler}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>What payment methods do you accept?</span>
                <svg
                  // :className="handleRotate()"
                  className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              <div
                className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                x-ref="tab"
                // :style="handleToggle()"
              >
                <p className="p-3 text-gray-900">
                  Any method of payments acceptable by you. For example: We
                  accept MasterCard, Visa, American Express, PayPal, JCB
                  Discover, Gift Cards, etc.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
