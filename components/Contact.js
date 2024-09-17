import React, {useState} from 'react';
import Layout from '../components/layout/Layout';
import {SocialIcon} from "react-social-icons";
import Link from "next/link"
import ContactForm from "./ContactForm";
import RecaptchaProvider from "./RecaptchaProvider";

const Contact = () => {
  return (
    <div className={"container mx-auto"}>
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <div className="mb-4 text-center">
          <h2 className={"text-3xl mt-5 font-bold wow animate__animated animate__fadeIn"} data-wow-delay=".1s">
            Contact us
          </h2>
          <p className={"mt-6 text-2xl text-stone-600 font-bold wow animate__animated animate__fadeIn"}
             data-wow-delay=".5s">
            enquiries@lotangroup.com
          </p>
        </div>
        <div className="mb-10 text-center">
          <p className={"pt-2 text-stone-500 font-medium  leading-loose"} data-wow-delay=".5s">
            Or fill the form and we will respond at the earliest:
          </p>
        </div>
        <div>
          <RecaptchaProvider>
            <ContactForm/>
          </RecaptchaProvider>
        </div>
      </div>
    </div>
  );
};

export default Contact;

