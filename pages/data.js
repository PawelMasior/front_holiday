import React from 'react';
import Layout from '../components/layout/Layout';
import FormInput from '../components/FormInput'

const Data = () => {
    return (
        <>
            <Layout>

            <section id="top-view" className="-mt-20 lg:-mt-36 relative">
                <div
                    className="pt-32 pb-20 w-full h-full top-0 left-0"
                    style={{
                    backgroundImage: 'url(/assets/imgs/backgrounds/clouds.jfif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    }}
                >
                    <div
                    // className="absolute inset-0 bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 opacity-60" // Adjust opacity here
                    className="absolute inset-0 bg-white opacity-65" // Adjust opacity here
                    style={{ zIndex: 1 }}
                    />
                    <div className="lg:mb-16 max-w-4xl mx-auto lg:pt-20 flex justify-center" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="px-4">
                        {/* <div className="text-4xl lg:text-6xl text-center">🗺️</div> */}
                        <h1 className="mt-8 lg:mt-8 text-2xl lg:text-4xl text-center text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                        🗺️ Your Plan, Your Experience.
                        </h1>
                        <h2 className="hidden lg:block pt-4 text-base text-center lg:text-xl text-stone-700">
                        Plan your perfect holiday with your personalized guide.
                        </h2>
                        <FormInput />
                    </div>
                    </div>
                </div>
                </section>

            </Layout>
        </>
    );
};

export default Data;