import React from 'react';

const dataFor = [
  { "text": "Crypto Exchanges"},
  { "text": "Traders & Investors"},
  // { "text": "Market Makers"}
]

const dataAdded = [
  {
      text: "Increase user activity", 
      expl: 'Increase the number of trade orders by advocating for systematic trading approach.'
  },
  {
      text: "Extend user retention", 
      expl: 'Help bad performance users to redefine the strategy and to start over.'
  },
  {
      text: "Personalized academy", 
      expl: 'Build up user loyalty by providing training content with personalized insights.'
  },
]  

const AlphaImproverAbout = () => {
  return (
    <>
      <div>
        <div className={"lg:pt-2 lg:pb-2"}>
            <h2 className={"text-indigo-600 text-center text-3xl lg:text-4xl font-bold "}>
            Alpha Improver
            </h2>
            <h3 className={"pt-2 text-stone-800 text-center text-lg lg:text-xl font-bold "}>
            Competitive Advantage for Crypto Exchanges 
            </h3>
            <div className={"lg:pt-4 flex justify-center items-center"}>
                <div className={""}>
                    <div className="hidden lg:block">
                      <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
                        {dataAdded.map((item, index) => (
                          <div className="px-4 col-span-1 p-0 bg-white w-full rounded-xl shadow-lg shadow-indigo-100 wow animate__animated animate__fadeIn animated hover-up-2 duration-500" key={index}>
                            <div className="flex items-center  pr-2" data-wow-delay=".1s">
                              <span>
                                <svg className={`pl-0 pt-3 w-12 h-12 text-indigo-600`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"  stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </span>
                              <p className="pt-2 -ml-2 flex text-center text-stone-800 text-lg lg:text-xl text-justify font-bold leading-loose">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>       
            </div>
            <p className="lg:pt-6 lg:pb-2 pt-2 lg:px-20 text-stone-800 text-justify text-base lg:text-lg font-medium lg:font-bold text-justify leading-loose"  data-wow-delay=".1s">
            Alpha Improver report (PDFs and Dashboard) unlocks opportunities from users' trading logs 
            with actionable points to promote systematic, active and robust trading strategies for users
            </p>      
        </div>
      </div>

    </>
    );
};

export default AlphaImproverAbout;