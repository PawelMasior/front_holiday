import React, {useState} from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from "../components/elements/ContactForm";
import RecaptchaProvider from "../components/elements/RecaptchaProvider";

const Index = () => {
  return (
    <Layout>
        <section className="pt-10 pb-10" id="contact">
        <div className={"container mx-auto"}>
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <div className="pt-4 flex justify-center">
            <a href="https://calendly.com/pawel-masior/let-s-talk" className="py-2 px-4 border-1 bg-teal-600 opacity-90 hover:opacity-100 hover-up-2 border-white rounded-xl text-center shadow-lg ">
                <div className="flex justify-center">
                    <h2 className="pt-0 text-white text-center font-medium text-lg lg:text-xl">
                    ☕ Setup a call
                    </h2>
                </div>
            </a>
        </div>   
        <div className="mb-10 text-center">
          <p className={"pt-4 text-stone-800  leading-loose"} data-wow-delay=".5s">
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
        </section>
    </Layout>
  );
};

export default Index;
