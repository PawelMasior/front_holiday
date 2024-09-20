import { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import partnerships from '../components/sources.json';

const reportScope = [
  { "name": '🍽️ Restaurants', "idx": 'restaurants', "checked": true, "expand": true },
  { "name": '🎉 Events', "checked": true, "expand": true },
  { "name": '🏞️ Attractions', "idx": 'attractions', "checked": false, "expand": false },
  { "name": '🛌 Accommodation', "checked": false, "expand": true },
  { "name": '🌍 Around the city', "checked": false, "expand": false },
  { "name": '🚍 Transportation', "checked": false, "expand": false },
  { "name": '🍸 Nightlife', "checked": false, "expand": false },
  { "name": '🏛️ Museums', "idx": 'museums', "checked": false, "expand": true },
  { "name": '🛡️ Safety', "checked": false, "expand": false },
  { "name": '🏥 Health', "checked": false, "expand": true },
  { "name": '🛍️ Shopping', "checked": false, "expand": false },
  { "name": '💆 Wellness', "checked": false, "expand": false }
];

const reportPref = [
  { "name": '🌍 Local', "checked": true, "dependent": ['all'] },
  { "name": '🧗 Adventure', "checked": true, "dependent": ['all'] },
  { "name": '💸 Low budget', "checked": true, "dependent": ['all'] },
  { "name": '🌾 Gluten free', "checked": false, "dependent": ['restaurants'] },
  { "name": '🥗 Vegan', "checked": false, "dependent": ['restaurants'] },
  { "name": '🏛️ History', "checked": false, "dependent": ['museums'] },
  { "name": '🍷 Wine tasting', "checked": false, "dependent": ['restaurants'] },
  { "name": '🍺 Beer tasting', "checked": false, "dependent": ['restaurants'] },
  { "name": '🛶 Eco-friendly', "checked": false, "dependent": ['all'] },
  { "name": '💻 Digital nomad', "checked": false, "dependent": ['all'] },
  { "name": '👪 Family friendly', "checked": false, "dependent": ['all'] },
  { "name": '👩‍❤️‍👨 Romantic', "checked": false, "dependent": ['all'] },
  { "name": '🚲 Biking', "checked": false, "dependent": ['all'] }
];

const reportExamples = [
  { "ttl": '☀️ Weather', "sub": "Adjust report to weather forecasts." },
  { "ttl": '🏛️ Opening hours', "sub": "Verify if museums are opened." },
  { "ttl": '🎉 Holidays', "sub": "Check for local festivals and holidays." },
  { "ttl": '⭐ Reviews', "sub": "Select the best options based on user reviews." },
  { "ttl": '🍽️ Diet', "sub": "Adjust restaurant list to your eating preferences." },
];


function Home() {
  const [items, setItems] = useState(reportScope);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const toggleReportItem = (itemName) => {
    setItems(
      items.map((item) =>
        item.name === itemName ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14);

    const formatDate = (date) => date.toISOString().split('T')[0];

    document.getElementById('dateFrom').value = formatDate(today);
    document.getElementById('dateTo').value = formatDate(twoWeeksLater);
  }, []);


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
        <section id="top-view" className="pt-8 pb-2 -mt-8 lg:-mt-36">
          <div className="bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
              <div className="max-w-3xl mx-auto lg:pt-20 flex justify-center">
                <div className="pt-5 lg:pt-10 px-4 text-center">
                    <div className="text-4xl lg:text-6xl">
                    🛫
                    </div>
                    <h1 className="text-xl lg:text-6xl text-stone-800 font-bold lg:leading-normal animate__animated animate__fadeIn">
                    Plan Less, Explore More.
                    </h1>
                    <p className="hidden lg:block pt-2 text-base lg:text-xl text-stone-700">
                    Plan your perfect holiday with your personalized guide.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center items-center justify-center">
                    <div className="pt-2 lg:pt-4 w-full lg:w-3/5 px-1">
                    <p className="text-sm lg:text-base font-bold text-left">Destination:</p>
                          <input type="text" placeholder="ex. Napoli, Italy" className="p-1 lg:p-2 border-2 rounded-md p-2 text-center text-stone-800 w-full"/>
                      </div>
                      <div className="pt-2 lg:pt-4 w-full lg:w-1/5 px-1">
                          <p className="text-sm lg:text-base font-bold text-left">Date from:</p>
                          <input id="dateFrom" type="date" className="p-1 lg:p-2 border-2 rounded-md text-center text-stone-800 w-full"/>
                      </div>
                      <div className="pt-2 lg:pt-4 w-full lg:w-1/5 px-1">
                          <p className="text-sm lg:text-base font-bold text-left">Date to:</p>
                          <input id="dateTo" type="date" className="p-1 lg:p-2 border-2 border-stone-950 rounded-md text-center text-stone-800 w-full"/>
                      </div>
                    </div>

                    <div className="pt-6">
                        <p className="pb-1 text-base font-bold text-left">My Interests (the best of):</p>
                        <div className="flex flex-wrap justify-left lg:gap-2 gap-1">
                          {items.map((item, index) => (
                              <button key={item.name} onClick={() => toggleReportItem(item.name)}
                              className={`px-1 lg:px-3 py-1 text-xs lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg ${item.checked 
                                ? 'bg-stone-700  border-2 border-stone-950 text-white' 
                                : 'bg-stone-50 border-2 border-stone-400 text-black '}`}>
                              {item.name}
                              </button>
                          ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="pb-1 text-base font-bold text-left">My Preferences:</p>
                        <div className="flex flex-wrap justify-left lg:gap-2 gap-1">
                            {reportPref.map((preference) => (
                                <button
                                    key={preference.name}
                                    onClick={() => togglePreference(preference.name)}
                                    className={`px-1 lg:px-3 py-1 text-xs lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg ${
                                        selectedPreferences.includes(preference.name) || preference.checked
                                        ? 'bg-stone-700  border-2 border-stone-950 text-white' 
                                        : 'bg-stone-50 border-2 border-teal-400 text-black '}`}>
                                    {preference.name}
                                </button>
                            ))}
                        </div>
                        <div className="pt-3 flex items-center">
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
                    </div>

                    <div className="pt-1 pb-20 flex flex-col items-end">
                      <a href="#" className="px-4 py-1 bg-white border-2 border-blue-500 rounded-lg wow animate__animated animate__fadeIn animated hover-up-2 duration-500 ">
                        <p className="text-stone-900 text-lg font-bold">
                        🚀 Go!
                        </p>
                      </a>
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
          <div className="container mx-auto">

          <div className="bg-gradient-to-b from-sky-50 via-white to-white">
            <div className="pt-10 max-w-6xl mx-auto">
              <div className={"hidden lg:block flex flex-wrap lg:flex-nowrap"}>
                <p className={"pb-8 text-lg lg:text-2xl font-bold text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                  Over 100 information sources:
                </p>               
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
