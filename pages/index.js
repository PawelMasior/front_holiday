import { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import partnerships from '../components/sources.json';
import features from '../components/features.json';

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
  { "name": '🛶 Eco-friendly', "checked": false, "dependent": ['all'] },
  { "name": '💻 Digital nomad', "checked": false, "dependent": ['all'] },
  { "name": '👪 Family friendly', "checked": false, "dependent": ['all'] },
  { "name": '👩‍❤️‍👨 Romantic', "checked": false, "dependent": ['all'] }
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
      <section id="top-view" className="h-[400px] lg:h-[900px] pt-8 pb-2 -mt-8 lg:-mt-36">
        <div className="bg-gradient-to-r from-teal-50 via-amber-50 to-purple-50 w-full h-full top-0 left-0">
            <div className="max-w-3xl mx-auto lg:pt-24 mx-auto flex justify-center">
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
                      <div className="w-3/5">
                          <p className="text-base font-bold text-left">Destination:</p>
                          <input type="text" placeholder="ex. Napoli, Italy" className="border-2 rounded-md p-2 text-center text-stone-800 w-full"/>
                      </div>
                      <div className="w-1/5">
                          <p className="text-base font-bold text-left">Date from:</p>
                          <input id="dateFrom" type="date" className="border-2 rounded-md p-2 text-center text-stone-800 w-full"/>
                      </div>
                      <div className="w-1/5">
                          <p className="text-base font-bold text-left">Date to:</p>
                          <input id="dateTo" type="date" className="border-2 border-stone-950 rounded-md p-2 text-center text-stone-800 w-full"/>
                      </div>
                  </div>

                    <div className="my-6">
                        <p className="pb-1 text-base font-bold text-left">Include in report:</p>
                        <div className="flex flex-wrap justify-left gap-2">
                          {items.map((item, index) => (
                              <button key={item.name} onClick={() => toggleReportItem(item.name)}
                              className={`px-3 py-1 wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg ${item.checked 
                                ? 'bg-stone-700  border-2 border-stone-950 text-white shadow-amber-50' 
                                : 'bg-stone-50 border-2 border-stone-400 text-black shadow-stone-100'}`}>
                              {item.name}
                              </button>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center px-2">
                </div>
              </div>
                  <div className="mt-6">
                      <p className="pb-1 text-base font-bold text-left">My preferences:</p>
                      <div className="flex flex-wrap justify-left gap-2">
                          {reportPref.map((preference) => (
                              <button
                                  key={preference.name}
                                  onClick={() => togglePreference(preference.name)}
                                  className={`px-3 py-1 wow animate__animated animate__fadeIn animated hover-up-2 duration-500 rounded-lg ${
                                      selectedPreferences.includes(preference.name) || preference.checked
                                      ? 'bg-stone-700  border-2 border-stone-950 text-white' 
                                      : 'bg-stone-50 border-2 border-blue-400 text-black '}`}>
                                  {preference.name}
                              </button>
                          ))}
                      </div>
                      <div className="pt-2 flex items-center">
                      <input
                        type="checkbox"
                        id="savePreferences"
                        className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
                        defaultChecked
                      />
                      <label htmlFor="savePreferences" className="pt-1 pl-1 text-sm text-stone-800">
                        Automatically save my settings
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="wow animate__animated animate__fadeIn animated hover-up-2 duration-500 ">
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-100 text-lg font-bold text-white rounded-md mb-8 duration-500">
                        Get Report
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </section>




        <section id="solution" className={"pt-20 pb-10 overflow-x-hidden"}>
            <div className={"container mx-auto"}>
                <div className="pt-4 center">
                    <a className="px-10 py-2 text-2xl rounded-lg text-stone-700 font-bold">
                    💥 Our AI solution will prepare a comprehensive to-do information just for you! 
                    Our AI will review available internet sources
                    </a>
                </div>
                <a className="px-10 py-2 text-2xl rounded-lg text-stone-700 font-bold">
                    - check for holidays
                    </a>
                    <a className="px-10 py-2 text-2xl rounded-lg text-stone-700 font-bold">
                    - adjust to the weather
                    </a>
                    <a className="px-10 py-2 text-2xl rounded-lg text-stone-700 font-bold">
                    - check if museum is opened now
                    </a>
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

        <section id="partnerships" className="py-16 overflow-x-hidden">
          <div className="bg-gradient-to-b from-sky-50 via-white to-white">
            <div className="pt-10 max-w-6xl mx-auto">
              <div className={"hidden lg:block flex flex-wrap lg:flex-nowrap"}>
                <p className={"pb-8 text-lg lg:text-2xl text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
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
                <p className={"pb-8 text-right text-lg lg:text-2xl text-stone-800 wow animate__animated animate__fadeIn"} data-wow-delay=".3s">
                ... and much more.
                </p>          
                </div>  
              </div>  
            </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
