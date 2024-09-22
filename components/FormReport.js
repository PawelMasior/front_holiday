import { FiChevronRight } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

const reportScope = [
  { "name": '🗽 Attractions', "idx": 'attractions', "checked": true, "expand": false },
  { "name": '🎉 Events', "idx": 'events', "checked": false, "expand": true },
  { "name": '🍽️ Restaurants', "idx": 'restaurants', "checked": true, "expand": true },
  { "name": '🛌 Accommodation', "idx": 'accommodation', "checked": false, "expand": true },
  { "name": '🚍 Transportation', "idx": 'transportation', "checked": false, "expand": false },
  { "name": '🍸 Nightlife', "idx": 'nightlife', "checked": false, "expand": false },
  { "name": '🏛️ Museums', "idx": 'museums', "checked": false, "expand": true },
  // { "name": '🛍️ Shopping', "idx": 'shopping', "checked": false, "expand": false }, #redo to sports
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
];

const Form = () => {
  const [hidden_1, setHiddenLocal_1] = useState(true);
  // const [hidden_2, setHiddenLocal_2] = useState(true);
  // const [hidden_1, setHiddenLocal_1] = useState(true);

  useEffect(() => {
    const today = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14);
    const formatDate = (date) => date.toISOString().split('T')[0];
    document.getElementById('dateFrom').value = formatDate(today);
    document.getElementById('dateTo').value = formatDate(twoWeeksLater);
  }, []);

  // Timer effect to change hidden_1 after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHiddenLocal_1(false); // Change to false after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
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
    <div className="w-full h-full top-0 left-0">
      <div className="pt-6">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/6">
            <div className="flex flex-wrap items-center justify-center">
              <div className="pr-2 w-full lg:w-3/5">
                <p className="text-sm lg:text-base font-bold text-left">My Destination:</p>
              </div>
              <div className="pr-2 hidden lg:block w-1/2 lg:w-1/5">
                <p className="text-sm lg:text-base font-bold text-left">From:</p>
              </div>
              <div className="pr-3 hidden lg:block w-1/2 lg:w-1/5">
                <p className="text-sm lg:text-base font-bold text-left">To:</p>
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
                  className="p-2 lg:p-1 border-2 rounded-md text-center text-base font-bold text-stone-800 w-full"
                />
              </div>
              <div className="lg:pr-2 lg:pt-0 pt-2 pr-1 w-1/2 lg:w-1/5">
                <input
                  id="dateFrom"
                  type="date"
                  className="p-2 lg:p-1 border-2 rounded-md text-center text-base text-stone-800 w-full"
                />
              </div>
              <div className="lg:pr-0 lg:pt-0 pt-2 pl-1 w-1/2 lg:w-1/5">
                <input
                  id="dateTo"
                  type="date"
                  className="p-2 lg:p-1 border-2 rounded-md text-center text-base text-stone-800 w-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:mt-0 mt-2 w-full lg:w-1/6 flex justify-end lg:justify-end">
            <button
              href="#"
              className="px-4 py-1 bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-600 rounded-lg wow animate__animated animate__fadeIn animated hover-up-2 duration-500"
            >
              <p className="text-white text-lg lg:text-lg font-bold">🚀 Go!</p>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6 w-full">
        <button onClick={() => setHiddenLocal_1(!hidden_1)} className="flex flex-row items-center justify-between w-full text-stone-800 bg-transparent text-left">
            <div className="left-[-2px] relative flex items-center transition-transform ease-in-out duration-500">
              <FiChevronRight
                className={`text-blue-800 bg-transparent transform transition-transform duration-500 ease-in-out 
                  ${hidden_1 ? 'rotate-0' : 'rotate-90'} 
                  ${hidden_1 ? '' : 'hidden'} 
                  `}
                style={{ fontSize: '30px' }}
              />
            </div>
            <div className="w-full transform transition-transform duration-500 ease-in-out">
              <p className="pl-0 text-stone-900 text-lg lg:text-lg font-bold">
                Find me the best information about:
              </p>
            </div>
          </button>

        <div className={`lg:pl-0 transition-all duration-500 ease-in-out overflow-hidden ${hidden_1 ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
          <div className="pt-5 flex items-center">
            <p className="text-left text-stone-900 text-base lg:text-base font-bold">
            My Choices (
            </p>
            <span className="flex items-center"> {/* Added margin-left for spacing */}
              <input type="checkbox" id="savePreferences" defaultChecked className="m-1 h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900" />
              <label htmlFor="savePreferences" className="text-left text-stone-900 text-base lg:text-base font-bold">
              save)
              </label>
            </span>
          </div>
          <div className="pt-2 flex flex-wrap justify-left lg:gap-2 gap-1">
            {items.map((item) => (
              <button key={item.name} onClick={() => toggleReportItem(item.name)}
                className={`px-1 lg:px-3 py-1 text-sm lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 border-2 rounded-lg ${item.checked 
                  ? 'bg-stone-700 border-stone-950 text-white' 
                  : 'bg-stone-50 border-stone-400 text-black'}`}>
                {item.name}
              </button>
            ))}
          </div>
          <div className="lg:pl-0">
          <div className="pt-6 flex items-center">
            <p className="text-left text-stone-900 text-base lg:text-base font-bold">
            My Preferences (
            </p>
            <span className="flex items-center"> {/* Added margin-left for spacing */}
              <input type="checkbox" id="savePreferences" defaultChecked className="m-1 h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900" />
              <label htmlFor="savePreferences" className="text-left text-stone-900 text-base lg:text-base font-bold">
                save)
              </label>
            </span>
          </div>

            <div className="pt-2 flex flex-wrap justify-left lg:gap-2 gap-1">
              {visiblePreferences.map((preference) => (
                <button
                  key={preference.name}
                  onClick={() => togglePreference(preference.name)}
                  className={`px-1 lg:px-3 py-1 text-sm lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 border-2 rounded-lg ${
                    preference.checked
                      ? 'bg-stone-700 border-2 border-stone-950 text-white' 
                      : 'bg-stone-50 border-2 border-blue-500 text-black'}`}>
                  {preference.name}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Form;
