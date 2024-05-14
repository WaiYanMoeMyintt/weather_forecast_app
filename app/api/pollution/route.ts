import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
    try {
        const lat =  	15.55177;
        const lon = 32.53241;
        const api = "29a6376f8bab0bb516a8f48864e7d3f5";
        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`;

        const getAPI = await axios.get(url);
        return NextResponse.json(getAPI.data);
    }
    catch(error){
        return `You cant get api data at right now ${error}`;
    }
}