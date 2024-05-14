import moment from "moment";

export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin);
};

export const airQulaityIndexText = [
  {
    rating: 10,
    description: "excellent",
  },
  {
    rating: 20,
    description: "good",
  },
  {
    rating: 30,
    description: "satisfactory",
  },
  {
    rating: 40,
    description: "fair",
  },
  {
    rating: 50,
    description: "moderate",
  },
  {
    rating: 60,
    description: "moderate",
  },
  {
    rating: 70,
    description: "poor",
  },
  {
    rating: 80,
    description: "poor",
  },
  {
    rating: 90,
    description: "very poor",
  },
  {
    rating: 100,
    description: "very poor",
  },
];

export const unitToTime = (unit: number, timezone: number) => {
  return moment
    .unix(unit)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};
