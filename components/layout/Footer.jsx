import React from "react";
import Link from "next/link"
import Image from 'next/image'

const section_footer = "py-20"
const section_div = "container px-4 mx-auto wow animate__animated animate__fadeIn"
const div_content = "flex flex-wrap mb-6 lg:mb-20 -mx-3 text-center lg:text-left grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 "
const p_motto = "pt-2  max-w-md mx-auto font-regular lg:max-w-full lg:mx-0  lg:text-xl text-stone-400 leading-relaxed"
const div_block = "w-full lg:w-1/4 px-3 mb-8 lg:mb-0"
const h2_title = "mb-2 lg:mb-4 lg:text-lg font-bold text-stone-500"
const a_subtitle = "text-sm lg:text-sm font-medium text-stone-500 hover:text-stone-600 leading-relaxed"
const class_image = 'wow animate__animated animate__fadeIn animated hover-up-2 duration-500'

const Footer = () => {
    return (
        <>
            <section className={section_footer}>
                <div className={section_div} data-wow-delay=".3s">
                    <div className={div_content}>

                        <a href="/" className="w-full lg:w-2/5 px-3 mb-6 lg:mb-0 wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                            <div className="flex  lg:justify-start sm:justify-start lg:justify-start">
                                <div className={"pr-4 lg:pr-0 text-3xl font-semibold"}>
                                    {/* <img src="/assets/imgs/logos/logo_grey.svg" alt="site logo" width={200}/> */}
                                    <p className="text-stone-700">
                            🧭 Holiday Planner
                            </p>
                                </div>
                            </div>
                            <p className={"pt-4 lg:pl-10 mx-auto font-semibold lg:max-w-full lg:mx-0  lg:text-lg text-stone-700 "}>
                            Plan Less, Explore More.
                            </p>                           
                        </a>
                        <div className="flex flex-wrap w-full lg:w-3/5">
                            <div className={div_block}>
                                <a href="/#" className={h2_title}> o Information</a>
                                {/* <a className={a_subtitle}><p>General</p></a> */}
                                {/* <a href="/articles" className={a_subtitle}><p>Articles</p></a>
                                <a href="/about-team" className={a_subtitle}><p>Team</p></a> */}
                            </div>
                            <div className={div_block}>
                                <a className={h2_title} href="/contact"> o Contact</a>
                                {/* <a href="/contact" className={a_subtitle}><p>Investor Relations</p></a> */}
                                {/* <a href="/contact" className={a_subtitle}><p>Contact</p></a>
                                <a href="/contact" className={a_subtitle}><p>Careers</p></a>
                                <a href="/contact" className={a_subtitle}><p>Help</p></a> */}
                            </div>
                            <div className={div_block}>
                                <a className={h2_title}>Documents</a>
                                <a href="/document-terms-of-use" className={a_subtitle}><p>Terms of Use</p></a>
                                {/* <a href="/document-security-policy" className={a_subtitle}><p>Security Policy</p></a> */}
                                <a href="/document-privacy-policy" className={a_subtitle}><p>Privacy Policy</p></a>
                                {/* <a href="/document-sustainable-development" className={a_subtitle}><p>Sustainable Development</p></a> */}
                            </div> 
                            <div className={div_block}>
                                {/* <h2 className={h2_title}>Social Media</h2> */}
                                <div className='flex justify-left'>
                                    <div className='lg:gap-2 gap-2 grid grid-cols-6 lg:grid-cols-3'>
                                        <a className={class_image} href="https://twitter.com/lotan_group"><Image src='/logos/logo_x.png' alt="/" objectFit="contain" width={35} height={35} /></a>
                                        <a className={class_image} href="https://www.linkedin.com/company/lotangroup"><Image src='/logos/logo_linkedin.png' alt="/" objectFit="contain" width={35} height={35} /></a>
                                        <a className={class_image} href="https://www.youtube.com/channel/UC0xTj6RB2On0xjG5_-5IIpw"><Image src='/logos/logo_youtube.png' alt="/" objectFit="contain" width={35} height={35} /></a>
                                        <a className={class_image} href="https://www.tiktok.com/@lotangroup"><Image src='/logos/logo_tiktok.png' alt="/" objectFit="contain" width={35} height={35} /></a>
                                        <a className={class_image} href="https://www.reddit.com/user/lotangroup"><Image src='/logos/logo_reddit.png' alt="/"  objectFit="contain" width={35} height={35} /></a>
                                        <a className={class_image} href="https://t.me/s/lotangroup"><Image src='/logos/logo_telegram.png' alt="/"  objectFit="contain" width={35} height={35} /></a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                                            
                    </div>
                    {/* <div className=" lg:flex-row items-center lg:justify-between">
                    <p className="pb-2 text-sm text-stone-500 font-bold ">
                        Company Number: 8992639286 | VAT-5UE: PL8992639286 | Registered: Poland, Wrocław 53-129 Sudecka Str. 114/10
                        </p>
                        <p className="text-sm text-stone-400 font-medium ">
                        © 2024 Lotan Group. By using our service, you accept our terms and conditions.
                        </p>

                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Footer;
