import { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import partnerships from '../components/sources.json';

const reportScope = [
  { "name": '🗽 Attractions', "idx": 'attractions', "checked": true, "expand": false },
  { "name": '🎉 Events', "idx": 'events', "checked": false, "expand": true },
  { "name": '🍽️ Restaurants', "idx": 'restaurants', "checked": true, "expand": true },
  { "name": '🛌 Accommodation', "idx": 'accommodation', "checked": false, "expand": true },
  { "name": '🚍 Transportation', "idx": 'transportation', "checked": false, "expand": false },
  { "name": '🍸 Nightlife', "idx": 'nightlife', "checked": false, "expand": false },
  { "name": '🏛️ Museums', "idx": 'museums', "checked": false, "expand": true },
  { "name": '🛍️ Shopping', "idx": 'shopping', "checked": false, "expand": false },
  { "name": '💆 Wellness', "idx": 'wellness', "checked": false, "expand": false },
  { "name": '🏞️ Outside the City', "idx": 'around_city', "checked": false, "expand": false },
  { "name": '🛡️ Safety & Health', "idx": 'safety_health', "checked": false, "expand": false },
];

const reportPref = [
  // All
  { "name": '🌍 Local', "checked": true, "dependent": ['all'] },
  { "name": '🧗 Adventure', "checked": false, "dependent": ['all'] },

  // Corresponding to Attractions
  { "name": '🏞️ Nature', "checked": false, "dependent": ['attractions', 'around_city'] },
  { "name": '📸 Spots', "checked": false, "dependent": ['attractions'] },
  
  // Corresponding to Around the City
  { "name": '🚶 Walking', "checked": false, "dependent": ['around_city'] },
  { "name": '🚲 Biking', "checked": false, "dependent": ['around_city', 'parks_nature'] },
  { "name": '🏖️ Beach Activities', "checked": false, "dependent": ['around_city'] },

  // Corresponding to Restaurants
  { "name": '🌾 Gluten-Free', "checked": false, "dependent": ['restaurants'] },
  { "name": '🥗 Vegan-Friendly', "checked": false, "dependent": ['restaurants'] },
  { "name": '🍷 Wine Tours', "checked": false, "dependent": ['restaurants', 'events'] },
  { "name": '🍺 Craft Beer', "checked": false, "dependent": ['restaurants', 'events'] },
  { "name": '👩🏻‍🍳 Cooking Classes', "checked": false, "dependent": ['restaurants'] },

  // Corresponding to Events
  { "name": '🎭 Culture', "checked": false, "dependent": ['events', 'museums'] },
  { "name": '🎉 Festivals', "checked": false, "dependent": ['events'] },

  // Corresponding to Accommodation
  { "name": '💻 Digital Nomad', "checked": false, "dependent": ['accommodation'] },
  { "name": '🧘 Wellness', "checked": false, "dependent": ['accommodation'] },
  { "name": '❤️ Romantic', "checked": false, "dependent": ['accommodation', 'nightlife'] },

  // Corresponding to Transportation
  { "name": '🚍 Public Transport', "checked": false, "dependent": ['transportation'] },
  { "name": '🚗 Car', "checked": false, "dependent": ['transportation'] },

  // Corresponding to Nightlife
  { "name": '🍸 Cocktail Bars', "checked": false, "dependent": ['nightlife'] },
  { "name": '🎶 Live Music', "checked": false, "dependent": ['nightlife'] },

  // Corresponding to Museums
  { "name": '📍 Guided Tours', "checked": false, "dependent": ['museums'] },
  { "name": '🖼️ Art Exhibitions', "checked": false, "dependent": ['museums'] },
  { "name": '🏛️ Historical Sites', "checked": false, "dependent": ['museums', 'around_city'] },

  // Corresponding to Shopping
  { "name": '🛍️ Local Markets', "checked": false, "dependent": ['shopping'] },
  { "name": '🎁 Souvenir', "checked": false, "dependent": ['shopping'] },

  // Corresponding to Wellness
  { "name": '💆 Spa', "checked": false, "dependent": ['wellness'] },
  { "name": '🧘 Yoga', "checked": false, "dependent": ['wellness'] },

  // Corresponding to Safety & Health
  { "name": '🩺 Health Recommendations', "checked": false, "dependent": ['safety_health'] },
  { "name": '🚑 Emergency Contacts', "checked": false, "dependent": ['safety_health'] }
];

const reportExamples = [
  { "ttl": '☀️ Weather', "sub": "Adjust report to weather forecasts." },
  { "ttl": '🏛️ Opening hours', "sub": "Verify if museums are opened." },
  { "ttl": '🎉 Holidays', "sub": "Check for local festivals and holidays." },
  { "ttl": '⭐ Reviews', "sub": "Select the best options based on user reviews." },
  { "ttl": '🍽️ Diet', "sub": "Adjust restaurant list to your eating preferences." },
];


function Home() {
  useEffect(() => {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14);
    const formatDate = (date) => date.toISOString().split('T')[0];
    document.getElementById('dateFrom').value = formatDate(today);
    document.getElementById('dateTo').value = formatDate(twoWeeksLater);
  }, []);

  const [items, setItems] = useState(reportScope);
  const [preferences, setPreferences] = useState(reportPref);

  const togglePreference = (preferenceName) => {
    setPreferences(
      preferences.map((preference) =>
        preference.name === preferenceName ? { ...preference, checked: !preference.checked } : preference
      )
    );
  };

  const toggleReportItem = (itemName) => {
    const updatedItems = items.map((item) =>
      item.name === itemName ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const visiblePreferences = preferences.filter(preference => {
    const dependencies = preference.dependent;
    if (dependencies.includes('all')) return true; // Show if dependent on 'all'
    return dependencies.some(dep => 
      items.find(item => item.idx === dep && item.checked)
    ); // Show if any dependency is checked
  });

  return (
    <>
      <Layout>
        <section id="top-view" className="pt-8 pb-2 -mt-8 lg:-mt-36">
          <div className="bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
            <div className="max-w-3xl mx-auto lg:pt-20 flex justify-center">
              <div className="pt-5 lg:pt-10 pb-16 px-4 text-center">
                <div className="text-4xl lg:text-6xl">🛫</div>
                <h1 className="text-xl lg:text-4xl text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                  Plan Less, Explore More.
                </h1>
                <h2 className="hidden lg:block pt-2 text-base lg:text-xl text-stone-700">
                  Plan your perfect holiday with your personalized guide.
                </h2>

                <div className="pt-6">
                  <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-5/6">
                      <div className="flex flex-wrap items-center justify-center">
                        <div className="pr-2 w-full lg:w-3/5 ">
                          <p className="text-sm lg:text-base font-bold text-left">Destination:</p>
                        </div>
                        <div className="pr-2 hidden lg:block w-1/2 lg:w-1/5">
                          <p className="text-sm lg:text-base font-bold text-left">Date from:</p>
                        </div>
                        <div className="pr-3 hidden lg:block w-1/2 lg:w-1/5">
                          <p className="text-sm lg:text-base font-bold text-left">Date to:</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/6"></div>   
                  </div>

                  <div className="flex flex-wrap lg:flex-nowrap items-center">
                    <div className="w-full lg:w-5/6">
                      <div className="flex flex-wrap items-center justify-center">
                        <div className="lg:pr-2 w-full lg:w-3/5">
                          <input 
                            type="text" 
                            placeholder="ex. Napoli, Italy" 
                            className="p-2 lg:p-1 border-2 rounded-md text-center text-stone-800 w-full"
                          />
                        </div>
                        <div className="lg:pr-2 lg:pt-0 pt-2 pr-1 w-1/2 lg:w-1/5">
                          <input 
                            id="dateFrom" 
                            type="date" 
                            className="p-2 lg:p-1 border-2 rounded-md text-center text-stone-800 w-full"
                          />
                        </div>
                        <div className="lg:pr-0 lg:pt-0 pt-2 pl-1 w-1/2 lg:w-1/5">
                          <input 
                            id="dateTo" 
                            type="date" 
                            className="p-2 lg:p-1 border-2 rounded-md text-center text-stone-800 w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-0 mt-2 w-full lg:w-1/6 flex justify-end lg:justify-end">
                      <button href="#" className="px-4 py-1 bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-600  rounded-lg wow animate__animated animate__fadeIn animated hover-up-2 duration-500">
                        <p className="text-white text-base lg:text-lg font-bold">🚀 Go!</p>
                      </button>
                    </div>   
                  </div>
                </div>

                <p className="pt-6 text-base font-bold text-left">My Interests (the best of):</p>
                <div className="pt-1 flex flex-wrap justify-left lg:gap-2 gap-1">
                  {items.map((item) => (
                    <button key={item.name} onClick={() => toggleReportItem(item.name)}
                      className={`px-1 lg:px-3 py-1 text-sm lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 border-2 rounded-lg ${item.checked 
                        ? 'bg-stone-700 border-stone-950 text-white' 
                        : 'bg-stone-50 border-stone-400 text-black'}`}>
                      {item.name}
                    </button>
                  ))}
                </div>

                <p className="pt-6 text-base font-bold text-left">My Preferences:</p>
                <div className="pt-0 flex items-center">
                    <input
                      type="checkbox"
                      id="savePreferences"
                      className="h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900"
                      defaultChecked
                    />
                    <label htmlFor="savePreferences" className="pt-1 pl-1 text-xs lg:text-sm text-left">
                      Save My Interests & Preferences
                    </label>
                </div>
                <div className="pt-2  flex flex-wrap justify-left lg:gap-2 gap-1">
                    {visiblePreferences.map((preference) => (
                      <button
                        key={preference.name}
                        onClick={() => togglePreference(preference.name)}
                        className={`px-1 lg:px-3 py-1 text-xs lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg ${
                          preference.checked
                          ? 'bg-stone-700 border-2 border-stone-950 text-white' 
                          : ' bg-stone-50 border-2 border-blue-500 text-black text-sm lg:text-base'}`}>
                        {preference.name}
                      </button>
                    ))}
                </div>
                </div>
              </div>
          </div>
        </section>
        
        <section id="key-features" className={"pt-6 lg:pt-20 pb-10 overflow-x-hidden"}>
          <div className={"container mx-auto"}>
            <div className={"flex flex-wrap lg:flex-nowrap"}>
              <div className={"w-full lg:w-3/5"}>

                <h1 className="pt-4 text-lg lg:text-2xl font-bold text-stone-900">
                  🧭 My Holiday Planner creates your own travel option list.
                </h1>
                <p className="pt-4 text-base lg:text-xl text-stone-900">
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

          <div className="bg-gradient-to-b from-sky-50 via-white to-white">
            <div className="container mx-auto ">
              <div className="pt-10 max-w-6xl mx-auto">
                <div className={"hidden lg:block flex flex-wrap lg:flex-nowrap"}>
                  <p className={"pb-8 text-lg lg:text-2xl font-bold text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                    Over 100 information sources:
                  </p>               
                </div>  
              </div>  
            </div>
          </div>
          <div className="max-w-6xl mx-auto">  
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
