"use client";

import React from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { Skeleton } from "./ui/skeleton";
import { sun } from "@/lib/icons";
import { UvProgress } from "./UvProgress";

const UV = () => {
  const { uvData } = useGlobalContext();
  const {daily} = uvData;
  if (!uvData || !daily) {
    return (
      <Skeleton className="h-[12rem] shadow-md w-full col-span-2 md:col-span-full" />
    );
  }

  const { uv_index_max, uv_index_clear_sky_max, time } = uvData.daily;
  const currentUVArray = uv_index_max[0].toFixed(0);
  const marginLeftPercentage = (currentUVArray / 14) * 100;
  const uvFilter = (uvIndex: number) => {
    if (uvIndex <= 2) {
      return {
        text: "Low",
        protection: "No protection required",
      };
    } else if (uvIndex <= 5) {
      return {
        text: "Moderate",
        protection: "Stay in shade near midday.",
      };
    } else if (uvIndex <= 7) {
      return {
        text: "High",
        protection: "Wear a hat and sunglasses.",
      };
    } else if (uvIndex <= 10) {
      return {
        text: "Very High",
        protection: "Apply sunscreen SPF 30+ every 2 hours.",
      };
    } else if (uvIndex > 10) {
      return {
        text: "Extreme",
        protection: "Avoid being outside.",
      };
    } else {
      return {
        text: "Extreme",
        protection: "Avoid being outside.",
      };
    }
  };
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sun}{currentUVArray} UV</h2>
        <div className="pt-2 flex flex-col gap-1">
          <p className="text-2xl">
          </p>
          <UvProgress
            value={marginLeftPercentage}
            max={14}
            className="progress"
          />
        </div>
      </div>

      <p className="text-sm">{uvFilter(currentUVArray).protection} </p>
    </div>
  );
};

export default UV;
