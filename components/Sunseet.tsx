"use client";

import React from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { Skeleton } from "./ui/skeleton";
import { unitToTime } from "@/lib/mics";
import { sunset } from "@/lib/icons";

const Sunset = () => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast.sys || !forecast.sys.sunset) {
    return (
      <Skeleton className="h-[12rem] shadow-md w-full col-span-2 md:col-span-full" />
    );
  }

  const sunsetTime = unitToTime(forecast.sys.sunset, forecast.timezone);
  const sunriseTime = unitToTime(forecast.sys.sunrise, forecast.timezone);

  return (
    <div
      className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
        dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sunset} Sunset</h2>
        <p className="pt-4 text-2xl">{sunsetTime}</p>
      </div>
        <p>Sunrise {sunriseTime}</p>
    </div>
  );
};

export default Sunset;
