import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Custom404 = () => {
    return (
        <>
            <Layout>
                <section className="pt-20 pb-32">
                    <div className="container text-center">
                        <img className="jump mb-4 mx-auto md:max-w-md mb-12 wow animate__animated animate__fadeIn" src="/assets/imgs/illustrations/error3.png" alt="Monst" />
                        {/* <span className="text-4xl text-slate-700 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">Błąd 404</span> */}
                        <h2 className="mb-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">404</h2>
                        <p className="mb-6 text-slate-400 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Following page does not exist.</p>
                        <div>
                            <Link href="/"><a 
                            className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-slate-700 hover:bg-slate-600 rounded wow animate__animated animate__fadeIn duration-500" data-wow-delay=".5s">
                                Main page
                                </a></Link>
                            <Link href="/contact">
                                <a className="block sm:inline-block py-4 px-8 text-xs text-slate-600 hover:text-amber-500 text-center font-semibold leading-none bg-slate-50 hover:bg-amber-50 rounded wow animate__animated animate__fadeIn duration-500" 
                                data-wow-delay=".6s">Contact us</a></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Custom404;