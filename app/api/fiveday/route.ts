import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = "29a6376f8bab0bb516a8f48864e7d3f5";

    const lat =  16.871311;
    const lon =  96.199379;

    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const dailyRes = await fetch(dailyUrl, {
      next: { revalidate: 3600 },
    });

    const dailyData = await dailyRes.json();

    return NextResponse.json(dailyData);
  } catch (error) {
    return new Response("Error in getting daily data ", { status: 500 });
  }
}