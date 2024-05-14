"use client";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { wind } from "@/lib/icons";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

function Wind() {
  const { forecast } = useGlobalContext();

  const speed = forecast?.wind?.speed;
  const degree = forecast?.wind?.deg;

  if (!speed || !degree) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div
      className="air-pollution pt-6 px-4 h-[14rem]  md:h-[16rem] border rounded-lg flex flex-col gap-8
      dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">{wind} Wind</h2>

      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.svg"
            alt="compass"
            width={110}
            height={110}
          />
          <Image
            src="/compass_arrow.svg"
            alt="compass"
            className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
            style={{
              transform: `rotate(${degree}deg) translateX(-50%)`,
              height: "100%",
            }}
            width={11}
            height={11}
          />
        </div>
        <p
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium"
        >
          {Math.round(speed)} m/s
        </p>
      </div>
    </div>
  );
}

export default Wind;