import React from "react";


const section_footer = "pt-16"
const section_div = "max-w-5xl px-4 mx-auto wow animate__animated animate__fadeIn"
const div_content = "flex flex-wrap mb-6 lg:mb-20 -mx-3 text-center lg:text-left grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 "
const div_block = "w-full lg:w-1/3 px-3 mb-8 lg:mb-0"
const h2_title = "mb-2 lg:mb-4 lg:text-lg font-bold text-stone-800"
const a_subtitle = "text-sm lg:text-sm font-medium text-stone-800 hover:text-stone-900 leading-relaxed"

const Footer = () => {
    return (
        <>
            <section className={section_footer}>
                <div className={section_div} data-wow-delay=".3s">
                    <div className={div_content}>
                        <a href="/" className="w-full lg:w-2/5 px-3 mb-6 lg:mb-0 wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                            <p className="text-center lg:text-left text-stone-900 font-bold text-xl lg:text-2xl ">
                            🧭 My Holiday Planner
                            </p>
                            <p className={"pt-4 lg:pl-10 lg:max-w-full lg:mx-0 lg:text-lg text-stone-900 font-bold"}>
                            Plan Less, Explore More.
                            </p>                           
                        </a>
                        <div className="flex flex-wrap w-full lg:w-3/5">
                            <div className={div_block}>
                                <a href="/#" className={h2_title}> o Information</a>
                            </div>
                            <div className={div_block}>
                                <a className={h2_title} href="/contact"> o Contact</a>
                            </div>
                            <div className={div_block}>
                                <a className={h2_title}>Documents</a>
                                <a href="/document-terms-of-use" className={a_subtitle}><p>Terms of Use</p></a>
                                <a href="/document-privacy-policy" className={a_subtitle}><p>Privacy Policy</p></a>
                            </div> 
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
