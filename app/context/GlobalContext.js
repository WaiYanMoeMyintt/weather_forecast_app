"use client";

import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast,setForecast] = useState({});
  const [airQuality,setAirQuality] = useState({});
  const [fiveDaysForecast,setFiveDaysForecast] = useState({});

  const fetchForecast = async () => {
      try {
        const res = await axios.get(`api/weather/`);
        setForecast(res.data);
      } catch (error) {
        console.log("Error fetching forecast data: ", error.message);
      }
  };

  const fetchAirQuality = async () => {
      try {
          const res = await axios.get(`api/pollution/`);
          console.log(res.data);
          setAirQuality(res.data);
      } catch (error) {
          console.log("Error fetching air quality data: ", error.message);
      }
  };

  const fetchFiveDaysForecast = async () => {
    try {
        const res = await axios.get(`api/fiveday/`);
        console.log(`Five days forecast ${res.data}`)
        setFiveDaysForecast(res.data);
    } catch (error) {
        console.log("Error fetching air quality data: ", error.message);
    }
};

  useEffect(() => {
      fetchForecast();
      fetchAirQuality();
      fetchFiveDaysForecast();
  }, []);

  return (
      <GlobalContext.Provider value={{ forecast, airQuality, fiveDaysForecast }}>
          <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
      </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
