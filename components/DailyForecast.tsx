"use client";

import React from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { Skeleton } from "./ui/skeleton";
import moment from "moment";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { snow, drizzleIcon, rain, clearSky, cloudy } from "@/lib/icons";

const DailyForecast = () => {
  const { fiveDaysForecast, forecast } = useGlobalContext();
  const { weather } = forecast;
  const { city, list } = fiveDaysForecast;

  if (!fiveDaysForecast || !fiveDaysForecast.city || !fiveDaysForecast.list) {
    return <Skeleton className="h-[12rem] w-[16rem]" />;
  }

  if (!forecast || !forecast.weather || !forecast.weather[0]) {
    return <Skeleton className="h-[12rem] w-[16rem]" />;
  }

  const { main: weatherMain } = weather[0];
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];
  const temperature = Math.round(forecast.main.temp) - 274;
  console.log(temperature)
  const todaysForecast = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt.startsWith(todayDate);
    }
  );
  console.log(todaysForecast);

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

  return (
    <div className="pt-6 px-4 h-[14rem] md:h-[16rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2">
      <div className="h-full flex gap-10 overflow-hidden">
        {todaysForecast.length < 1 ? (
          <div>Loading..</div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todaysForecast.map(
                  (forecast: { dt_txt: string; main: { temp: number } }) => {
                    return (
                      <CarouselItem
                        key={forecast.dt_txt}
                        className="flex flex-col  gap-4 basis-[8.5rem] cursor-grab"
                      >
                        <p className=" text-gray-300">
                          {moment(forecast.dt_txt).format("HH:mm")}
                        </p>
                        <p>{getIcons()}</p>
                        <p className="mt-4">
                          {temperature}°C
                        </p>
                      </CarouselItem>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyForecast;
