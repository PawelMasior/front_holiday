import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FiChevronRight } from 'react-icons/fi';
import {getDownloadURL, ref} from "firebase/storage";

const data = [
  {
    "tags": "Direct Market Data",
    "endpoint": "Historical Prices",
    "answer": [
      "This endpoint provides historical hourly price data for various cryptocurrencies.",
      "Market data stored by Lotan Group of currency prces at each hour.",
    ],
    "coins": 'BTC,ETH,USDT,XRP,BNB,USDC,STETH,SOL,ADA,OKB,DOGE,ARB,TRX,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,SUI,AVAX,UNI,SHIB,DAI,LEO,TUSD,XMR,ATOM,and 200 more...',
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_prices_x.json",
  },
  {
    "tags": "Direct Market Data",
    "endpoint": "Historical Market Capitalization",
    "answer": [
      " The Historical Market Capitalization endpoint offers historical data on the market capitalization of cryptocurrencies.",
    ],
    "coins": 'BTC,ETH,USDT,XRP,BNB,USDC,STETH,SOL,ADA,OKB,DOGE,ARB,TRX,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,SUI,AVAX,UNI,SHIB,DAI,LEO,TUSD,XMR,ATOM,and 200 more...',
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_mktcap_x.json",
  },
  {
    "tags": "Direct Market Data",
    "endpoint": "Historical Last24h Trade Volume",
    "answer": [
      "This endpoint offers historical data on the trading volume of cryptocurrencies over the last 24 hours.",
    ],
    "coins": 'BTC,ETH,USDT,XRP,BNB,USDC,STETH,SOL,ADA,OKB,DOGE,ARB,TRX,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,SUI,AVAX,UNI,SHIB,DAI,LEO,TUSD,XMR,ATOM,and 200 more...',
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_volumes_x.json",
  },
  {
    "tags": "Implied Market Data,Volatility",
    "endpoint": "Implied At-the-Money Index",
    "answer": [
      "The Implied At-the-Money (ATM) Index is derived from option prices, reflecting implied volatility for BTC and ETH; and offers insights into the implied volatility trends.",
      "The Implied At-the-Money (ATM) Index is computed using an in-house methodology. Implied volatility is a key parameter in this calculation and is determined by analyzing option prices for cryptocurrencies, specifically BTC and ETH. Implied volatility reflects the market's expectation of future price fluctuations for these cryptocurrencies.",
      "Option prices are essential inputs for the implied volatility calculation. Our system collects and processes option prices from various sources, enabling us to derive implied volatility. These options represent the right to buy or sell cryptocurrencies at specified prices and expiration dates.",
      "Our At-the-Money volatility reflects true market value with minimal data corruption, ex. liquidity, time lag and data sanitation.",
    ],
    "coins": "BTC,ETH",
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_implied_atm.json",
  },
  {
    "tags": "Only Lotan Group,Implied Market Data,Distribution",
    "endpoint": "Implied Risk-Neutral-Density statistics",
    "answer": [
      "This endpoint provides statistics related to market-implied risk-neutral distribution. It is derived from option prices and offers insights into the distribution trends.",
      "Sabr Interpolation: To extract market-implied risk-neutral distribution statistics, we employ Sabr interpolation. The Sabr model is a widely used mathematical framework for modeling volatility surfaces. It allows us to interpolate option prices and derive implied volatility, skew, and smile for different strike prices and maturities.",
      "We use the Sabr model to estimate option prices across a range of strikes and maturities. These prices are then utilized to build the risk-neutral density curve, which represents the market's expectation of future cryptocurrency price movements, accounting for volatility and skew.",
      "Breeden-Litzenberg Formula: The risk-neutral density parameters are derived using the Breeden-Litzenberg formula. This formula is a fundamental tool in financial mathematics for extracting risk-neutral density information from option prices. It allows us to convert option price data into valuable risk-neutral distribution insights.",
    ],
    "coins": "BTC,ETH",
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_implied_rnd_param.json",
  },
  {
    "tags": "Only Lotan Group,Implied Market Data,Distribution",
    "endpoint": "Implied Risk-Neutral-Density parameters",
    "answer": [
      "Access market-implied risk-neutral distribution parameters for BTC and ETH. These parameters are derived from option prices and provide insights into the characteristics of risk-neutral distributions.",
      "Sabr Interpolation: To extract market-implied risk-neutral distribution statistics, we employ Sabr interpolation. The Sabr model is a widely used mathematical framework for modeling volatility surfaces. It allows us to interpolate option prices and derive implied volatility, skew, and smile for different strike prices and maturities.",
      "We use the Sabr model to estimate option prices across a range of strikes and maturities. These prices are then utilized to build the risk-neutral density curve, which represents the market's expectation of future cryptocurrency price movements, accounting for volatility and skew.",
      "Breeden-Litzenberg Formula: The risk-neutral density parameters are derived using the Breeden-Litzenberg formula. This formula is a fundamental tool in financial mathematics for extracting risk-neutral density information from option prices. It allows us to convert option price data into valuable risk-neutral distribution insights.",
      "Generalized Extreme Value Distribution: Our methodology extends beyond basic risk-neutral density extraction. It parametrizes the risk-neutral density to the Generalized Extreme Value distribution, which provides a more nuanced understanding of tail risks and extreme events in cryptocurrency markets."
    ],
    "coins": "BTC,ETH",
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_implied_rnd_gev.json",
  },
  {
    "tags": "Only Lotan Group,Implied Market Data,Risk",
    "endpoint": "Implied Risk Indexes",
    "answer": [
      "The Implied Risk Indexes endpoint offers risk metrics, including Value-at-Risk and Expected Shortfall, derived from option prices for BTC and ETH. It provides insights into the market's implied risk levels.",
      "The Implied Risk Indexes endpoint leverages option prices and the Sabr model to calculate key risk metrics, including Value-at-Risk (VaR) and Expected Shortfall. These metrics are crucial for risk management and provide insights into the potential losses associated with cryptocurrency investments.",
      "Risk Metrics Extraction: By utilizing option prices and risk-neutral density information, we directly extract these risk metrics, offering valuable risk assessment tools for cryptocurrency traders and investors.",
    ],
    "coins": "BTC,ETH",
    "from": "2022-07-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_implied_rnd_risk.json",
  },
  {
    "tags": "Only Lotan Group,AI-generated Data,Volatility",
    "endpoint": "AI-generated, At-the-Money Index",
    "answer": [
      "This endpoint leverages AI modeling to extrapolate option prices from BTC and ETH markets to other cryptocurrencies. It provides an AI-generated At-the-Money (ATM) Index, showcasing implied volatility for select coins.",
    ],
    "coins": 'BTC,ETH,USDT,XRP,SOL,ADA,DOGE,ARB,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,AVAX,UNI,SHIB,DAI',
    "from": "2022-09-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/ai_atm.json",
  },
  {
    "tags": "Only Lotan Group,AI-generated Data,Distribution",
    "endpoint": "AI-generated Risk-Neutral-Density statistics",
    "answer": [
      "Our AI model extends cryptocurrency data to other coins by extrapolating option prices. This endpoint offers AI-generated risk-neutral distribution statistics for various cryptocurrencies, expanding insights into distribution trends.",
  ],
    "coins": 'BTC,ETH,USDT,XRP,SOL,ADA,DOGE,ARB,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,AVAX,UNI,SHIB,DAI',
    "from": "2022-09-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_ai_rnd_param.json",
  },
  {
    "tags": "Only Lotan Group,AI-generated Data,Distribution",
    "endpoint": "AI-generated Risk-Neutral-Density parameters",
    "answer": [
      "This endpoint provides AI-generated risk-neutral distribution parameters for select cryptocurrencies. It extends data analysis capabilities to understand the characteristics of risk-neutral distributions for a variety of coins.",
      "Generalized Extreme Value Distribution: Our methodology extends beyond basic risk-neutral density extraction. It parametrizes the risk-neutral density to the Generalized Extreme Value distribution, which provides a more nuanced understanding of tail risks and extreme events in cryptocurrency markets."
    ],
    "coins": 'BTC,ETH,USDT,XRP,SOL,ADA,DOGE,ARB,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,AVAX,UNI,SHIB,DAI',
    "from": "2022-09-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_ai_rnd_gev.json",
  },
  {
    "tags": "Only Lotan Group,AI-generated Data,Risk",
    "endpoint": "AI-generated Risk Indexes",
    "answer": [
      "The AI-generated Risk Indexes endpoint utilizes AI modeling to extend cryptocurrency data to other currencies. It provides AI-generated risk indexes, including parameters tailored to the Generalized Extreme Value distribution, for select coins.",
      "Risk Metrics Extraction: By utilizing option prices and risk-neutral density information, we directly extract these risk metrics, offering valuable risk assessment tools for cryptocurrency traders and investors.",
    ],
    "coins": 'BTC,ETH,USDT,XRP,SOL,ADA,DOGE,ARB,LINK,MATIC,XLM,APT,OP,DOT,LTC,WBTC,BCH,AVAX,UNI,SHIB,DAI',
    "from": "2022-09-01",
    "interval": "hourly",
    "sample": "https://storage.googleapis.com/lotangroup-static-content/data_api/_ai_rnd_risk.json",
  },
]

const badgeColors = {
  "Only Lotan Group": 'bg-cyan-50 text-cyan-700',
  "Direct Market Data": 'bg-lime-50 text-lime-700',
  "Implied Market Data": 'bg-green-50 text-green-700',
  "AI-generated Data": 'bg-teal-50 text-teal-700',
  "Volatility": 'bg-pink-50 text-pink-600',
  "Distribution": 'bg-purple-50 text-purple-600',
  "Risk": 'bg-red-50 text-red-600',
};

const Badge = ({ rounded = false, size = "default", classNames = "", color, children }) => {
  return (
    <div className={`text-xs lg:text-base font-semibold inline-flex text-center ${color} ${rounded && "rounded-lg"} ${classNames}`}>
      {children}
    </div>
  );
};


const Endpoint = ({ endpoint, answer, tags, badgeColors, coins, from, interval, sample }) => {
  const [hidden, setHidden] = useState(true);

  const tagList = tags.split(',');
  const coins_split = coins.split(',');

  return (
    <div className="w-full">
      <button onClick={() => setHidden(!hidden)} className="flex flex-row items-center justify-between w-full text-stone-800 bg-transparent text-left">
        <div className="pt-3 w-full">
          <div className="text-stone-900 text-base lg:text-lg font-semibold">{endpoint}</div>
          <div className="space-x-2 space-y-1">
            {tagList.map((tag, i) => (
              <Badge key={i} size="base" color={badgeColors[tag]} rounded className="">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <FiChevronRight className={`text-stone-600 transition ease-in-out duration-1000 transform ${hidden ? 'rotate-0' : 'rotate-90'}`} style={{ fontSize: '54px' }} />
      </button>
      <div className={`pl-2 prose prose-sm max-w-none py-3 w-full text-stone-800 font-medium text-base lg:text-lg  ${hidden ? 'hidden' : 'block'}`}>
          <div className="space-x-0">
            {answer.map((ccy, i) => (
                <div className="py-1 text-stone-700 text-base lg:text-lg ">
                {ccy}
              </div>
            ))}
          </div>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-2/5 py-2 lg:pr-2 text-stone-700">
        <div className="px-4 py-4 bg-white shadow-lg rounded-lg shadow-stone-100 wow animate__animated animate__fadeIn animated hover-up-2 duration-500" data-wow-delay=".1s">
          <h2 className="pt-1 text-stone-500 text-sm lg:text-base font-semibold">
                    Cryptocurrencies available
                  </h2>
                  {/* <p className="pt-1 ">{coins}</p> */}
                  <div className="space-x-1 flex flex-wrap">
                    {coins_split.map((ccy, i) => (
                      <p className="mt-1 px-2 pt-1 rounded-lg text-stone-600 text-base lg:text-lg bg-stone-100 font-bold" key={i}>{ccy}</p>
                    ))}
                  </div>
          </div>
          </div>
          <div className="w-full lg:w-1/5 py-2 lg:pr-2">
          <div className="px-4 py-4 bg-white shadow-lg rounded-lg shadow-stone-100 wow animate__animated animate__fadeIn animated hover-up-2 duration-500" data-wow-delay=".1s">
            <h2 className="pt-1 text-stone-500 text-sm lg:text-base font-semibold">
                    Available from
                  </h2>
                  <p className="pt-1 text-stone-600 text-base lg:text-lg font-bold">{from}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/5 py-2 lg:pr-2">
            <div className="px-4 py-4 bg-white shadow-lg rounded-lg shadow-stone-100 wow animate__animated animate__fadeIn animated hover-up-2 duration-500" data-wow-delay=".1s">
            <h2 className="pt-1 text-stone-500 text-sm lg:text-base font-semibold">
                  Collection interval
                  </h2>
                  <p className="pt-1 text-stone-600 text-base lg:text-lg font-bold">{interval}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/5 py-2 lg:pr-2">
            <div className="px-4 py-4 text-stone-600 bg-white shadow-lg rounded-lg shadow-stone-200 wow animate__animated animate__fadeIn animated hover-up-2 duration-500" data-wow-delay=".1s">
              <a href={sample}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <p className="ml-2 pt-1 text-lg font-bold " >Sample json</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FunctionQ = ({ items, badgeColors, filter }) => {
  const filteredItems = items.filter((item) => item.tags.includes(filter));

  return (
    <div className="w-full space-y-2 divide-y divide-gray-200 dark:divide-gray-800">
      {filteredItems.map((item, i) => (
        <Endpoint key={i} {...item} badgeColors={badgeColors} />
      ))}
    </div>
  );
};

const List = ({ badgeColors }) => {
  const [openTab, setOpenTab] = useState("Only Lotan Group");

  return (
    <div className="flex flex-wrap justify-center w-full space-y-2">
      <div className="flex flex-wrap gap-2 overflow-x-auto lg:flex-wrap lg:space-x-1 items-center">
        {Object.keys(badgeColors).map((tabTitle, key) => (
          <div key={key} className="flex-none">
            <button type="button" onClick={() => {setOpenTab(tabTitle);}}
              className={`p-1 font-semibold text-base lg:text-lg hover:text-stone-900 duration-1000 rounded-lg min-w-[120px] wow animate__animated animate__fadeIn animated hover-up-2 duration-500 ${
                openTab === tabTitle
                  ? `text-stone-900 ${badgeColors[tabTitle]}`
                  : `text-stone-900 ${badgeColors[tabTitle]}`
              }`}>
              {tabTitle}
            </button>
          </div>
        ))}
      </div>
      {Object.keys(badgeColors).map((tabTitle, key) => (
        <div key={key} className={`w-full pt-4 ${openTab !== tabTitle ? 'hidden' : 'block'}`}>
          <FunctionQ items={data} badgeColors={badgeColors} filter={tabTitle} />
        </div>
      ))}
    </div>
  );
};


const Content = () => {
  return (
    <>
      <List badgeColors={badgeColors} />
    </>
  );
};

export default Content;
