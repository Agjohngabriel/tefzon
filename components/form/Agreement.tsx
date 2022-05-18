import Link from "next/link";
import React from "react";

export const Agreement = (props: {
  formStep: number;
  nextFormStep: any;
  updateFormData: any;
}) => {
  return (
    <div className={`p-5 ${props.formStep === 2 ? "" : "hidden"}`}>
      <div className="flex flex-col items-center pt-10 space-y-4 max-w-lg mx-auto">
        <h1 className="font-montserrat text-lg text-gray-700 w-4/6 text-center">
          Subscription & Agreement
        </h1>
        <p className="font-arcon text-sm text-gray-500 text-center w-5/6">
          Please type carefully and fill out the form with Personal details. You
          can't edit these details once you submit the form.
        </p>
      </div>

      <div className="mt-8 p-4">
        <div className="border-b border-gray-200">
          <div className="py-2 bg-white text-gray-700 font-montserrat uppercase">
            Newsletter
          </div>

          <div className="font-arcon text-gray-400 bg-white font-medium text-xs leading-loose w-5/6">
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

          <div className="flex items-center py-10 ">
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

          <div className="py-2 bg-white text-gray-700 font-montserrat uppercase">
            Our Privacy Policy
          </div>

          <div className="text-gray-400 bg-white font-arcon text-xs leading-loose w-5/6">
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

          <div className="flex items-center  py-10">
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
                <span className="text-violet-800">Terms & Conditions</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
