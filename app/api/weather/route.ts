import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const lat =  46.204391;
    const lon = 6.143158;
    const api = "29a6376f8bab0bb516a8f48864e7d3f5";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    return new Response(`Can't get api data at this moment`);
  }
}