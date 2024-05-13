"use client";

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { kelvinToCelsius } from "@/lib/mics";
import {
  snow,
  drizzleIcon,
  rain,
  clearSky,
  cloudy,
  navigation,
} from "@/lib/icons";
import moment from "moment";
const Temperature = () => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;
  if (!forecast || !weather) return <div>Loading...</div>;

  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const messageStatus: number = parseInt(localTime.slice(0, 2));

  const { main: weatherMain, description } = weather[0];

  const temp = kelvinToCelsius(main?.temp) - 273;
  const minTemp = kelvinToCelsius(main?.temp_min) - 273;
  const maxTemp = kelvinToCelsius(main?.temp_max) - 273;

  const getIcons = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  //get current message
  useEffect(() => {
    if (messageStatus <= 12) {
      setMessage("Good Morning");
    } 
    else if (messageStatus >= 12 || messageStatus <= 17){
      setMessage("Good Afternoon");
    }
    else {
      setMessage("Good Night");
    }
   
  });

  //get current timezone
  useEffect(() => {
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      const formatTime = localMoment.format("HH:mm");
      const day = localMoment.format("dddd");

      setLocalTime(formatTime);
      setCurrentDay(day);
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="pt-6 pb-5 px-4  border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark-shadow-none">
      <p className="flex justify-between justify-between items-center">
        <span className="font-medium">{message}</span>
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="py-10 font-bold flex gap-1 items-center">
        <span className="font-medium">{name}</span>
        <span className="font-medium">{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>
      <div>
        <div>
          <span>{getIcons()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex items-center gap-2 ">
          <span>Low {minTemp}°</span>
          <span>High {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
