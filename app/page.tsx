import React from "react";
import Navbar from "@/components/Navbar";
import Temperature from "@/components/Temperature";
import AirPollutation from "@/components/AirPollutation";
import Sunseet from "@/components/Sunseet";
import Wind from "@/components/Wind";
import DailyForecast from "@/components/DailyForecast";
import UV from "@/components/UV";
const Main = () => {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
              <AirPollutation />
              <Sunseet />
              <Wind />
              <DailyForecast />
              <UV />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
