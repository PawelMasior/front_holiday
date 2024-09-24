import { FiChevronRight } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import reportScope from '../components/scope.json';

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
        const anyFocusChecked = updatedfocus.some((focus) => focus.checked);
        return { ...item, focus: updatedfocus, checked: anyFocusChecked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="w-full  top-0 left-0">
      <div className="pt-6">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/6">
            <div className="flex flex-wrap items-center justify-center">
              <div className="pr-2 w-full lg:w-3/5">
                <p className="text-sm lg:text-base font-bold text-left">Destination:</p>
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
            Select your preferences:
            </p>
          </div>
        </button>
        <div className={`lg:pl-0 transition-all duration-500 ease-in-out overflow-hidden ${hidden_1 ? 'max-h-0 opacity-0' : 'max-h-full opacity-100'}`}>
          <div className="lg:pl-2">
            {/* <div className="hidden lg:block pt-2 flex flex-wrap justify-left">
                <div className="pt-2 w-full flex flex-wrap lg:flex-nowrap">
                  <div className="w-full lg:w-1/4 flex-grow-0 flex-shrink-0">
                  <div className=" flex items-center">
                      <span className="flex items-center"> 
                        <input type="checkbox" id="savePreferences" defaultChecked className="mr-1 h-4 w-4 rounded-lg focus:ring-stone-800 accent-stone-900" />
                        <label htmlFor="savePreferences" className="text-left text-stone-900 text-sm lg:text-base font-bold">
                        Save my choices
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/4 flex-grow-0 flex-shrink-0">
                    <p className="text-left text-stone-950 text-sm lg:text-base font-bold">
                      Select your preferences:
                    </p>
                  </div>
                </div>
            </div> */}
            <div className="flex flex-wrap justify-left">
              {items.flatMap(
                (item) =>
                   (
                    <div key={item.name} className="lg:mb-2 w-full flex flex-wrap lg:flex-nowrap lg:border-t-2 border-stone-300">
                      <div className="pt-3 lg:pt-2 w-full lg:w-1/4 flex-grow-0 flex-shrink-0 flex  items-start ">
                        <button
                          key={item.name}
                          onClick={() => toggleReportItem(item.name)}
                          className={`px-1 lg:px-3 py-1 w-[190px] text-base text-left lg:text-lg text-stone-950 font-bold`}
                        >
                        {item.name}:
                      </button>
                      </div>
                      <div className="w-full lg:w-3/4 flex-grow-0 flex-shrink-1">
                        <div className="pt-2 flex flex-wrap lg:gap-2 gap-1">
                          {item.focus.map((focus) => (
                            <button
                              key={focus.name}
                              onClick={() => togglePreference(item.name, focus.name)}
                              className={`px-2 py-1 text-sm lg:text-base wow animate__animated animate__fadeIn animated hover-up-2 duration-500 border-2 rounded-lg ${
                                focus.checked
                                  ? 'bg-stone-700 border-2 border-stone-950 text-white'
                                  : 'bg-white border-2 border-stone-800 text-black'
                              }`}
                            >
                              {focus.name}
                            </button>
                          ))}
                        </div>
                      </div>
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
