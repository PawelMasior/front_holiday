import React from "react";

const Footer = () => {
    return (
        <section className="pt-16">
            <div className="max-w-5xl px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                <div className="flex flex-wrap mb-6 lg:mb-20 -mx-3 text-center lg:text-left grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
                    <div className="w-full lg:w-2/5 px-3 mb-6 lg:mb-0 wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                        <a href="/" className="block">
                            <p className="text-center lg:text-left text-stone-900 font-bold text-xl lg:text-2xl">
                                🧭 Dalongo
                            </p>
                            <p className="pt-4 lg:pl-10 lg:max-w-full lg:mx-0 lg:text-lg text-stone-900 font-bold">
                                Plan Less, Explore More.
                            </p>
                        </a>
                    </div>
                    <div className="flex flex-wrap w-full lg:w-3/5">
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <a href="/#" className="mb-2 lg:mb-4 lg:text-lg font-bold text-stone-800">
                                Information
                            </a>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <a href="/contact" className="mb-2 lg:mb-4 lg:text-lg font-bold text-stone-800">
                                Contact
                            </a>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold text-stone-800">Documents</p>
                            <a href="/document-terms-of-use" className="text-sm lg:text-sm font-medium text-stone-800 hover:text-stone-900 leading-relaxed">
                                Terms of Use
                            </a>
                            <a href="/document-privacy-policy" className="text-sm lg:text-sm font-medium text-stone-800 hover:text-stone-900 leading-relaxed">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
