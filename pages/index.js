import Layout from "../components/layout/Layout"

import partnerships from '../components/sources.json';
import features from '../components/features.json';

function Home() {
    return (
        <>
            <Layout>
                <section id="top-view" className={" h-[400px] lg:h-[700px]  pt-8 pb-2 -mt-8 lg:-mt-36"}>
                    <div className="bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50  w-full h-full top-0 left-0">
                        <div className="lg:pt-24 max-w-2xl mx-auto flex justify-center">
                            <div className="pt-4 px-4 ">
                                <div className="pt-24 text-3xl lg:text-5xl text-center text-stone-800 flex justify-center lg:leading-normal  wow animate__animated animate__fadeIn ">
                                    Plan Less, Explore More.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="key-features" className={"pt-20 pb-10 overflow-x-hidden"}>
                    <div className={"container mx-auto"}>
                        <div className={"flex flex-wrap lg:flex-nowrap"}>
                            <div className={"w-full lg:w-2/3"}>
                                <div className={"lg:pr-77 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                                    <div className="">
                                        {features.map((item, index) => (
                                            <div className={"pt-8 flex items-start py-2 wow animate__animated animate__fadeIn"} data-wow-delay=".2s">
                                                <div className={"flex flex-wrap items-center justify-between"}>
                                                    <h2 className={"w-full lg:w-2/3 text-xl lg:text-2xl text-stone-900 font-bold wow animate__animated animate__fadeIn"}>
                                                    {item.ttl}
                                                    </h2>
                                                    <p className="py-1 pr-3 text-stone-700 text-base lg:text-lg text-justify font-medium  leading-loose">
                                                    {item.sub}
                                                    </p>
                                                </div>
                                            </div> 
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block relative inset-0 w-1/3 ml-auto">
                                <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".2s">
                                    <img className="absolute top-0 left-0 w-40 -ml-12 -mt--4 h-[130px]" src="/assets/imgs/elements/blob-tear-light.svg" alt="Introduction" />
                                    <img className="absolute bottom-0 right-0 w-40 -mb-0 h-[130px]" src="/assets/imgs/elements/blob-tear-light.svg" alt="Introduction" />
                                    <img className="right-5 bottom-2 jump lg:max-w-lg lg:max-h-lg mx-auto h-[210px] relative mx-auto" src="/assets/imgs/illustrations/web_gold.svg" alt="Introduction"/>
                                </div>
                            </div>   
                        </div>
                    </div>
                </section>

                <section id="partnerships" className="py-16 overflow-x-hidden bg-gradient-to-b from-purple-50 via-white to-white">
                    <div className="max-w-6xl mx-auto">
                        <div className={"hidden lg:block flex flex-wrap lg:flex-nowrap"}>
                            <p className={"pb-8 text-lg lg:text-2xl text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                            Over 100 information sources:
                            </p>               
                        </div>    
                        <div className="flex justify-center pt-4">
                            <div className="flex flex-wrap items-center px-2">
                                {partnerships.map((item, index) => (
                                    <div key={index} className="flex flex-wrap items-center">
                                        <a href={item.href} className="pb-2 flex flex-col items-center">
                                            <img
                                                style={{ height: `30px` }}
                                                className="block lg:hidden px-2 py-2"
                                                src={item.src}
                                                alt=""
                                            />
                                            <img
                                                style={{ height: `50px` }}
                                                className="hidden lg:block px-6 py-2"
                                                src={item.src}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
export default Home