import { useState } from 'react';
import Layout from "../components/layout/Layout";
import partnerships from '../components/sources.json';
import features from '../components/features.json';

const reportItems = [
    { name: '😋 Restaurants', checked: true },
    { name: '🥳 Events', checked: true },
    { name: '😴 Accommodation', checked: false },
    { name: '😴 Museums', checked: false },
    { name: 'Safety', checked: false },
    { name: 'Health', checked: false },
    { name: 'Shopping', checked: false },
    { name: 'Around', checked: false },
    { name: 'Attractions', checked: false },
    { name: 'Transportation', checked: false },
    { name: '🥳 Nightlife', checked: false },
    { name: 'Wellness', checked: false }
];

function Home() {
  // Call hooks inside the component
  const [items, setItems] = useState(reportItems);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const toggleReportItem = (itemName) => {
    setItems(
      items.map((item) =>
        item.name === itemName ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== preference));
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  return (
    <>
      <Layout>
      <section id="top-view" className="h-[400px] lg:h-[900px] pt-8 pb-2 -mt-8 lg:-mt-36">
        <div className="bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
            <div className="max-w-4xl mx-auto lg:pt-24 max-w-4xl mx-auto flex justify-center">
            <div className="pt-10 px-4 text-center">
                <div className="text-4xl lg:text-8xl text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                🛫
                </div>

                <div className="text-4xl lg:text-6xl text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                Plan Less, Explore More.
                </div>

                <p className="text-lg lg:text-2xl text-stone-700 mt-4">
                Plan your perfect holiday with your personalized guide.
                </p>

                <div className="py-8">
                <div className="flex justify-center gap-x-4">
                    <div className="w-1/5">
                    <p className="text-base font-bold text-left">Date from:</p>
                    <input
                        type="date"
                        className="border-2 rounded-md p-2 text-center text-stone-800 w-full"
                    />
                    </div>
                    <div className="w-1/5">
                    <p className="text-base font-bold text-left">Date to:</p>
                    <input
                        type="date"
                        className="border-2 rounded-md p-2 text-center text-stone-800 w-full"
                    />
                    </div>
                    <div className="w-3/5">
                    <p className="text-base font-bold text-left">Destination:</p>
                    <input
                        type="text"
                        placeholder="Destination: ex. Napoli, Italy"
                        className="border-2 rounded-md p-2 text-center text-stone-800 w-full lg:w-2/3"
                    />
                    </div>
                </div>

                <div className="my-6">
                    <p className="pb-1 text-lg font-semibold">Include in report:</p>
                    <div className="flex justify-center space-x-2">
                    {items.map((item) => (
                        <button
                        key={item.name}
                        onClick={() => toggleReportItem(item.name)}
                        className={`px-3 py-1 rounded-md ${
                            item.checked ? 'bg-sky-400 text-white' : 'bg-stone-200 text-black'
                        }`}
                        >
                        {item.name}
                        </button>
                    ))}
                    </div>
                </div>

                {/* My Preferences Buttons */}
                <div className="mb-8">
                    <p className="pb-1 text-lg font-semibold">My preferences:</p>
                    <div className="flex justify-center space-x-2">
                    {['Low budget', 'Vegan', 'Luxury', 'Adventure'].map((preference) => (
                        <button
                        key={preference}
                        onClick={() => togglePreference(preference)}
                        className={`px-3 py-1 rounded-md ${
                            selectedPreferences.includes(preference)
                            ? 'bg-purple-400 text-white'
                            : 'bg-stone-200 text-black'
                        }`}
                        >
                        {preference}
                        </button>
                    ))}
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    id="savePreferences"
                    className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
                    defaultChecked
                    />
                    <label htmlFor="savePreferences" className="pt-1 text-base text-stone-800">
                    Automatically save my preferences
                    </label>
                </div>
                <button className="bg-amber-500 text-lg font-bold text-white px-4 py-2 rounded-md hover:bg-amber-700 mb-8 duration-500">
                    🛫 Prepare a plan
                </button>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-stone-900 text-white px-4 py-2 rounded-md hover:bg-stone-800">
                    Start for free (100 credits)
                    </button>
                    <button className="bg-stone-200 text-black px-4 py-2 rounded-md hover:bg-stone-300">
                    Talk to us
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


        <section id="key-features" className={"pt-20 pb-10 overflow-x-hidden"}>
          <div className={"container mx-auto"}>
            <div className={"flex flex-wrap lg:flex-nowrap"}>
              <div className={"w-full lg:w-2/3"}>
                <div className="pt-4">
                    <a className="px-10 py-2 bg-stone-100 bg-opacity-30 border-stone-400 border-2 rounded-lg text-stone-700 font-bold">
                    💥 Get 2 months free with yearly plan
                    </a>
                </div>
                <div className={"lg:pr-77 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                  <div className="">
                    {features.map((item, index) => (
                      <div className={"pt-8 flex items-start py-2 wow animate__animated animate__fadeIn"} data-wow-delay=".2s">
                        <div className={"flex flex-wrap items-center justify-between"}>
                          <h2 className={"w-full lg:w-2/3 text-xl lg:text-2xl text-stone-900 font-bold wow animate__animated animate__fadeIn"}>
                            {item.ttl}
                          </h2>
                          <p className="py-1 pr-3 text-stone-700 text-base lg:text-lg text-justify font-medium leading-loose">
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
                  <img className="absolute top-0 left-0 w-40 -ml-12 -mt--4 h-[130px]" src="/assets/imgs/elements/blob-tear-light.svg" />
                  <img className="absolute bottom-0 right-0 w-40 -mb-0 h-[130px]" src="/assets/imgs/elements/blob-tear-light.svg" />
                  <img className="rounded-xl right-5 bottom-2 jump lg:max-w-lg lg:max-h-lg mx-auto h-[210px] relative mx-auto" src="/img/world_1.png"/>
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

export default Home;
