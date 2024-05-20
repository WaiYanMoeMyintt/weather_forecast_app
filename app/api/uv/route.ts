import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const lat =  16.871311;
    const lon =  96.199379;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    return new Response(`Can't get API data at this moment`, { status: 500 });
  }
}
