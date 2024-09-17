import React from 'react';

const data = [
    {
      title: "Raw Market data",
      desc: "Access to historical market complete data for cryptocurrencies: prices, market capitalization and trade volumes.  " 
    },
    {
      title: "Implied Market data",
      desc: "Access to financial engineering details & historical points: risk indexes, and volatility trends derived from market-priced derivatives." 
    },
    {
      title: "AI-generated data",
      desc: "Access to real-time and historical AI-generated volatility valuations, risk indexes, and derivative valuations for over 50 cryptocurrencies.",
    }
  ];
  
const Component = ({ item }) => (
  <div className={"hover-up-2 w-full lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn duration-500"} data-wow-delay=".3s">
    <div className={"p-2 lg:min-h-[250px] bg-white shadow rounded-2xl"}>
      <h3 className={"pt-5 text-stone-800 font-bold text-xl"}>{item.title}</h3>
      <p className={"pt-2 px-3 text-lg text-stone-700 text-justify font-medium leading-loose"}>
        {item.desc}</p>
    </div>
  </div>
);

const DataScope = () => {
  return (
    <div className={"flex flex-wrap text-center"}>
      {data.map((item, index) => (
        <Component key={index} item={item} />
      ))}
    </div>
  );
};

export default DataScope;

