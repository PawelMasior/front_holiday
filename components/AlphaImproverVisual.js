import React from 'react';

const data = [
    {
      title: "Improve Simulations",
    },
    {
      title: "Strategy Adjustments",
    },

    {
      title: "Performance Insights",
    },    
    {
      title: "New Token Listing",
    },
    {
      title: "AI Recommendations",
    },
  ]

const AlphaImproverVisual = () => {
  return (
    <>
      <div>
        <div className="pt-4 flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-3/5 relative">
                <div className="flex items-center h-full " data-wow-delay=".1s">
                    <img className="absolute top-0 lg:left-8 lg:h-[130px] h-[80px]" src="/assets/imgs/elements/blob-tear-indigolight.svg" alt="Introduction" />
                    <img className="absolute bottom-6 right-8 lg:h-[130px] h-[80px]" src="/assets/imgs/elements/blob-tear-indigolight.svg" alt="Introduction" />
                    <img className="relative lg:left-36 bottom-10 top-0 lg:w-[445px]  wow animate__animated animate__fadeIn animated hover-up-2 duration-500" src="/alphaimprover/monitor2.png" alt="Introduction"/>
                </div>
            </div>   
            <div className={"pt-4 w-full lg:w-2/5"}>
              <div className="pl-4 space-y-5">
                {data.map((item, index) => (
                  <div className="flex items-start wow animate__animated animate__fadeIn animated hover-up-2 duration-500" data-wow-delay=".1s">
                    <div className="mr-2 text-indigo-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between">
                        <h2 className="pt-1 text-lg lg:text-xl text-stone-700 font-bold">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

    </>
    );
};

export default AlphaImproverVisual;