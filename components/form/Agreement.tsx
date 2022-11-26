import Link from "next/link";
import React from "react";

export const Agreement = (props: {
  formStep: number;
  nextFormStep: any;
  updateFormData: any;
}) => {
  return (
    <div className={`p-2 sm:p-5 ${props.formStep === 2 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center pt-10 space-y-4 max-w-lg mx-auto">
        

        <h1 className="w-4/6 text-xl font-bold text-center text-gray-700 animate-fade-in-up">
        Subscription & Agreement
        </h1>
        
      </div>

      <div className="mt-8 p-2 sm:p-4">
        <div className="border-b border-gray-200">
          <div className="py-2 bg-white text-gray-700 font-montserrat uppercase animate-fade-in-up">
            Newsletter
          </div>

          <div className="font-arcon text-gray-400 bg-white font-medium text-xs leading-loose sm:w-5/6 animate-fade-in-down">
            This apartment is an inviting choice. Created as a space to spend
            time in, there's extra room in the open-plan living area, allowing
            guests to stretch out; whether relaxing on the sofa or enjoying the
            kitchen. The bedroom and bathroom are also spacious, and continue
            the sense of warm yet contemporary design, with touches of colour.
            This apartment is an inviting choice. Created as a space to spend
            time in, there's extra room in the open-plan living area, allowing
            guests to stretch out; whether relaxing on the sofa or enjoying the
            kitchen.
          </div>

          <div className="flex items-center py-10 animate-fade-in-up">
            <input
              type="checkbox"
              className="w-8 h-8 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
            />
            <label
              htmlFor="News"
              className="font-montserrat block ml-2 text-sm font-bold text-gray-900"
            >
              I agree to recieve football related news
            </label>
          </div>

          <div className="py-2 bg-white text-gray-700 font-montserrat uppercase animate-fade-in-down">
            Our Privacy Policy
          </div>

          <div className="text-gray-400 bg-white font-arcon text-xs leading-loose sm:w-5/6 animate-fade-in-up">
            This apartment is an inviting choice. Created as a space to spend
            time in, there's extra room in the open-plan living area, allowing
            guests to stretch out; whether relaxing on the sofa or enjoying the
            kitchen. The bedroom and bathroom are also spacious, and continue
            the sense of warm yet contemporary design, with touches of colour.
            This apartment is an inviting choice. Created as a space to spend
            time in, there's extra room in the open-plan living area, allowing
            guests to stretch out; whether relaxing on the sofa or enjoying the
            kitchen.
          </div>

          <div className="flex items-center  py-10 animate-fade-in-up">
            <input
              type="checkbox"
              className="w-8 h-8 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
            />
            <label
              htmlFor="Terms"
              className="font-montserrat block ml-2 text-sm font-bold text-gray-900"
            >
              I have agreed to the
              <Link href="##" passHref>
                <span className="text-violet-800"> Terms & Conditions</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
