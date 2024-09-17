import React from 'react';

const data = [
    {
      title: "Crypto Exchanges",
      text: "Increase your users loyalty and engagement with Alpha Improver as a regular reporting tool - adjusted to your design and objectives.",
      imageSrc: "/alphaimprover/web_exchange.svg",
    },
    {
      title: "Traders & Investors",
      text: "Get insights and optimize your trading strategies: learn systematic approach and gain insights by analyzing your strategy profile.",
      imageSrc: "/alphaimprover/web_trader.svg",
    },
    {
      title: "Market Makers",
      text: "Analyze your market-making strategies: see risks, explore logs, and fine-tune your model with customized content output.",
      imageSrc: "/alphaimprover/web_maker.svg",
    }
  ];
  
const AlphaImproverFor = () => {
  return (
    <div className={"flex flex-wrap text-center"}>
      {data.map((item, index) => (
        <div className={"hover-up-5 w-full lg:w-1/3 px-2 mb-6 wow animate__animated animate__fadeIn duration-500"} data-wow-delay=".3s">
          <div className={"p-2 lg:min-h-[365px] bg-white shadow rounded-2xl"}>
            <img className={"h-28 mx-auto my-2"} src={item.imageSrc} alt="" />
            <h3 className={"pt-2 text-stone-800 font-bold text-xl "}>{item.title}</h3>
            <p className={"pt-1 px-3 text-lg text-stone-700 text-justify font-bold leading-loose"}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlphaImproverFor;
