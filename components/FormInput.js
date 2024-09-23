import { FiChevronRight } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

const reportScope = [
  {
    "name": '🗽 Attractions',
    "checked": true,
    "focus": [
      { "name": '📸 Scenic Spots', "checked": false },
      { "name": '🏛️ Historical Sites', "checked": false },
      { "name": '🎢 Theme Parks', "checked": false }
    ]
  },
  {
    "name": '🎉 Events',
    "checked": false,
    "focus": [
      { "name": '🎉 Festivals', "checked": false },
      { "name": '🎶 Concerts', "checked": false },
      { "name": '⚽ Sport', "checked": false },
      { "name": '🎟️ Exhibitions', "checked": false }
    ]
  },
  {
    "name": '🍽️ Restaurants',
    "checked": true,
    "focus": [
      { "name": '🔪 Local', "checked": false },
      { "name": '⭐ Michelin Star', "checked": false },
      { "name": '🌾 Gluten-Free', "checked": false },
      { "name": '🥗 Vegan', "checked": false },
      { "name": '👩🏻‍🍳 Classes', "checked": false },
    ]
  },
  {
    "name": '🛌 Accommodation',
    "checked": false,
    "focus": [
      { "name": '💻 Digital Nomad', "checked": false },
      { "name": '🏨 Hotels', "checked": false },
      { "name": '❤️ Romantic', "checked": false },
    ]
  },

  {
    "name": '🍸 Nightlife',
    "checked": false,
    "focus": [
      { "name": '🍸 Bars', "checked": false },
      { "name": '🎶 Live Music', "checked": false },
      { "name": '🎧 Nightclubs', "checked": false },
      { "name": '🕺 Dance', "checked": false },
      { "name": '🎤 Karaoke', "checked": false }
    ]
  },
  {
    "name": '🏛️ Museums',
    "checked": false,
    "focus": [
      { "name": '🖼️ Art', "checked": false },
      { "name": '📜 History', "checked": false },
      { "name": '🔬 Science', "checked": false },
      { "name": '🧒 For Children', "checked": false }
    ]
  },
  {
    "name": '💆 Wellness',
    "checked": false,
    "focus": [
      { "name": '💆‍♀️ Spa', "checked": false },
      { "name": '🧘 Yoga', "checked": false },
      { "name": '🏋️‍♂️ Gym', "checked": false },
    ]
  },
  {
    "name": '🚍 Transportation',
    "checked": false,
    "focus": [
      { "name": '🚅 Train', "checked": false },
      { "name": '🚍 Bus', "checked": false },
      { "name": '🚗 Car', "checked": false },
      { "name": '🚴 Bike', "checked": false },
    ]
  },
  {
    "name": '🏞️ Outside the City',
    "checked": false,
    "focus": [
      { "name": '🏞️ Nature', "checked": false },
      { "name": '🚶 Hiking', "checked": false },
      { "name": '🚲 Biking', "checked": false },
      { "name": '🏖️ Beach', "checked": false },
      { "name": '🍷 Wine Tours', "checked": false },
    ]
  },
  {
    "name": '🛡️ Safety & Health',
    "checked": false,
    "focus": [
      { "name": '🏥 Hospitals', "checked": false },
      { "name": '🩺 COVID-19', "checked": false },
      { "name": '🚨 Emergency', "checked": false }
    ]
  }
];

const Form = () => {
  const [hidden_1, setHiddenLocal_1] = useState(true);

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
      setHiddenLocal_1(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [items, setItems] = useState(reportScope);

  const toggleReportItem = (itemName) => {
    const updatedItems = items.map((item) =>
      item.name === itemName ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const togglePreference = (itemName, preferenceName) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName) {
        const updatedfocus = item.focus.map((pref) =>
          pref.name === preferenceName ? { ...pref, checked: !pref.checked } : pref
        );
        return { ...item, focus: updatedfocus };
      }
      return item;
    });
    setItems(updatedItems);
  };

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
          <div className="lg:mt-0 mt-4 w-full lg:w-1/6 flex justify-end lg:justify-end">
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
            <p className="pl-0 text-stone-900 text-base lg:text-lg font-bold">
              Find me the best information about:
            </p>
          </div>
        </button>

        <div className={`lg:pl-0 transition-all duration-500 ease-in-out overflow-hidden ${hidden_1 ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
          <div className="pt-5 flex items-center">
            <p className="text-left text-stone-950 text-base lg:text-lg font-bold">
            My Choices (
            </p>
            <span className="flex items-center">
              <input type="checkbox" id="savefocus" defaultChecked className="m-1 h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900" />
              <label htmlFor="savefocus" className="text-left text-stone-900 text-base lg:text-base font-bold">
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
              <p className="text-left text-stone-950 text-base lg:text-lg font-bold">
                My Preference (
              </p>
              <span className="flex items-center">
                <input type="checkbox" id="savefocus" defaultChecked className="m-1 h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900" />
                <label htmlFor="savefocus" className="text-left text-stone-900 text-base lg:text-base font-bold">
                  save)
                </label>
              </span>
            </div>
            <div className="pt-2 flex flex-wrap justify-left">
              {items.flatMap((item) =>
                item.checked && (
                  <div key={item.name} className="pl-2 pb-2 w-full flex flex-wrap lg:gap-2 gap-1">
                    {/* Display item name before focus buttons */}
                    <p className="pl-3 py-1 font-bold text-stone-900">{item.name}:</p>

                      {item.focus.map((focus) => (
                        <button
                          key={focus.name}
                          onClick={() => togglePreference(item.name, focus.name)}
                          className={` px-2 py-1 text-sm lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 border-2 rounded-lg ${
                            focus.checked
                              ? 'bg-stone-700 border-2 border-stone-950 text-white'
                              : 'bg-stone-50 border-2 border-blue-500 text-black'
                          }`}
                        >
                          {focus.name}
                        </button>
                      ))}
                  </div>
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
