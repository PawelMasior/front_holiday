import { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import partnerships from '../components/sources.json';
import FormReport from '../components/FormReport'

const reportExamples = [
  { "ttl": '☀️ Weather', "sub": "Adjust report to weather forecasts." },
  { "ttl": '🏛️ Opening hours', "sub": "Verify if museums are opened." },
  { "ttl": '🎉 Holidays', "sub": "Check for local festivals and holidays." },
  { "ttl": '⭐ Reviews', "sub": "Select the best options based on user reviews." },
  { "ttl": '🍽️ Diet', "sub": "Adjust restaurant list to your eating preferences." },
];

function Home() {
  return (
    <>
      <Layout>
        <section id="top-view" className="-mt-8 lg:-mt-36">
          <div className="lg:pt-20 pt-16 pb-20 bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
            <div className="max-w-3xl mx-auto lg:pt-20 flex justify-center">
              <div className="px-4">
                <div className="text-4xl lg:text-6xl text-center">🗺️</div>
                  <h1 className="text-xl lg:text-4xl text-center text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                    Plan Less, Explore More.
                  </h1>
                  <h2 className="hidden lg:block pt-2 text-base text-center lg:text-xl text-stone-700">
                    Plan your perfect holiday with your personalized guide.
                  </h2>
                  <FormReport />
                </div>
              </div>
          </div>
        </section>
        
        <section id="key-features" className={"pt-6 lg:pt-20 pb-10 overflow-x-hidden"}>
          <div className={"max-w-5xl mx-auto"}>
            <div className={"px-4 flex flex-wrap lg:flex-nowrap"}>
              <div className={"w-full lg:w-3/5"}>

                <h1 className="pt-4 text-lg lg:text-2xl font-bold text-stone-900">
                  🧭 My Holiday Planner creates your own travel option list.
                </h1>
                <p className="pt-2 text-base lg:text-lg text-stone-900">
                  Our AI-driven solution reviews real-time internet data to create a report up to your preferences.
                </p>
                <p className="pt-4 text-base lg:text-lg text-stone-900 font-bold ">
                  What Holiday Planner can do - examples:
                </p>                
                <div className="pt-4 pl-4 flex flex-wrap justify-left gap-2">
                    {reportExamples.map((item, index) => (
                        <p className={`px-3 py-1 wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg`}>
                            <span className="font-bold">{item.ttl}:</span> {item.sub}
                        </p>
                    ))}
                </div>
              </div>
              <div className="hidden lg:block relative inset-0 w-1/3 ml-auto">
                <div className="flex items-center h-full wow animate__animated animate__fadeIn animated" data-wow-delay=".2s">
                  <img className="absolute top-0 left-0 w-40 ml-0 -mt--4 h-[200px]" src="/assets/imgs/elements/blob-tear-light.svg" />
                  <img className="absolute bottom-0 right-0 w-40 -mb-0 h-[200px]" src="/assets/imgs/elements/blob-tear-light.svg" />
                  <img className="rounded-full lg:max-w-lg lg:max-h-lg mx-auto h-[280px] relative mx-auto" src="/img/world_1.png"/>
                </div>
              </div>   
            </div>
          </div>
        </section>

        <section id="partnerships" className="py-16 overflow-x-hidden">

          <div className="bg-gradient-to-b from-white via-white to-white border-t-2 border-blue-200">
            <div className={"max-w-5xl mx-auto"}>
              <div className="px-4 pt-10 max-w-6xl mx-auto">
                <div className={" flex flex-wrap lg:flex-nowrap"}>
                  <p className={"pb-8 text-base lg:text-2xl font-bold text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                  🌐 Over 100 web sources:
                  </p>               
                </div>  
              </div>  
            </div>
          </div>
          <div className="max-w-5xl mx-auto">  
            <div className="flex justify-center pt-4">
              <div className="flex flex-wrap items-center px-2">
                {partnerships.map((item, index) => (
                  <div key={index} className="flex flex-wrap">
                    <a href={item.href} className="pb-4 flex flex-col">
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
          <div className="bg-gradient-to-t from-sky-50 via-white to-white">
          <div className="container mx-auto">
              <div className="pt-10 max-w-6xl mx-auto">
                <div className={"hidden lg:block flex flex-wrap lg:flex-nowrap"}>
                <p className={"pb-8 text-right text-lg lg:text-2xl text-stone-800 font-bold wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                ... and much more.
                </p>          
                </div>  
              </div>  
            </div>
            </div>
        </section>

      </Layout>
    </>
  );
}

export default Home;
