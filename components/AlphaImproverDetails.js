import React from 'react';

const dataDetails = [

  {
    order: 'right',
    title: "Improve Simulations",
    imageSrc: "https://storage.googleapis.com/lotangroup-static-content/web/alphaimprover_simulations.jpg",
    tags: [
      { text: "Stop-Loss & Take-Profit" },
      { text: "Min. & Max. Hold Days" },
      { text: "Open & Close Time" },
    ],
    text: "Advocate for systematic approach with fixed rules: increase activity and secure user profits with more trade orders.",
  },
  {
    order: 'right',
    title: "Strategy Adjustments",
    imageSrc: "https://storage.googleapis.com/lotangroup-static-content/web/alphaimprover_strategyprofile.jpg",
    tags: [
      { text: "Follower" },
      { text: "Moderator" },
      { text: "Specialist" },
      { text: "Alternative" },
      { text: "Holder" },
      { text: "Generator" },
    ],
    text: "Suggest adjustments to trading approach with predefined strategy standards.",
  },
  {
    order: 'right',
    title: "Diversify Risk",
    imageSrc: "https://storage.googleapis.com/lotangroup-static-content/web/alphaimprover_portfoliorisks.jpg",
    tags: [
      { text: "Diversify" },
      { text: "Implied Volatility" },
      { text: "Value at Risk" },
      { text: "Expected Shortfall" },
    ],
    text: "Point out high market risk currencies to diversify the portfolio with new trade orders.",
  },
  {
    order: 'right',
    title: "Currency Insights",
    imageSrc: "https://storage.googleapis.com/lotangroup-static-content/web/alphaimprover_traderecords.jpg",
    tags: [
      { text: "Tokens" },
      { text: "Offer" },
      { text: "Positions" },
      { text: "Trade orders" },
      { text: "Performance" },
      { text: "Value" },
    ],
    text: "Inform about alternative available tokens in at the exchange and visualise user trade orders.",
  },
  {
    order: 'right',
    title: "Detailed Performance",
    imageSrc: "https://storage.googleapis.com/lotangroup-static-content/web/alphaimprover_performance.jpg",
    tags: [
      { text: "Performance" },
      { text: "Realization" },
      { text: "Value" },
      { text: "Positions" },
      { text: "Benchmark" },
    ],
    text: "Performance metrics with key observations. Clear and easy for the user - all in one place.",
  },
];


const AlphaImproverDetails = () => {
  return (
    <div className={"max-w-5xl mx-auto"}>
      {dataDetails.map((card, index) => (
        // <Detail key={index} card={card} />
        <div className={`pb-6 flex flex-wrap  hover-up-2 duration-500`}>
        <div className={`px-4 lg:w-2/5 lg:order-1`}>
          <h3 className={`pt-2 text-stone-800 text-lg lg:text-2xl text-center font-bold sm:hidden sm:block`}>
            {card.title}
          </h3>
          <div class="relative">
            <img className={"h-full w-full object-cover rounded-lg relative z-20 shadow-lg shadow-indigo-100	"} src={card.imageSrc} alt=""/>
          </div>
        </div>
        <div className={`px-4 lg:w-3/5 lg:pt-2 lg:order-2`}>
          <h3 className={`lg:pt-2 text-stone-800 text-xl lg:text-2xl text-center font-bold hidden md:block`}>
            {card.title}
          </h3>
          <p className={`pt-2 text-stone-700 text-base lg:text-lg text-justify font-bold`}>
            {card.text}
          </p>
          <div className={`relative pt-2 hidden lg:block`}>
            {card.tags.map((link, index) => (
              <div key={index} className="relative inline-block max-w-full" style={{ marginRight: '0.5rem' }}>
                <div className="pl-1 rounded-full bg-white relative z-20 text-indigo-600 font-bold shadow-lg shadow-white">
                   #{link.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    ))}
    </div>
  );
};

export default AlphaImproverDetails;




