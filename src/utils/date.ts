import { WeatherForecast } from "../store/weather-slice/weather-slice";

const dayInMilis = 1000 * 60 * 60 * 24;
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const parseDate = (date: Date) => {
  return `${daysOfTheWeek[date.getDay()].substring(
    0,
    3
  )}, ${date.getDate()} ${monthsOfTheYear[date.getMonth()].substring(0, 3)}`;
};

export const isTomorrow = (date: Date) => {
  const now = new Date();
  return date.getTime() - now.getTime() <= dayInMilis;
};

export const getMilisUntilEndOfTheDay = (date: Date) => {
  return dayInMilis - ((date.getTime() - dayInMilis) % dayInMilis);
};

export const getTodayLimitIndex = (forecast: WeatherForecast[]) => {
  const now = new Date();
  const milisUntilEndOfTheDay = getMilisUntilEndOfTheDay(now);
  const endOfTheDay = now.getTime() + milisUntilEndOfTheDay;
  return forecast.findIndex((el) => el.date >= endOfTheDay);
};

export const calculateDateIndx = (
  index: number,
  measPerDayIdx: number,
  measPerDay: number
) => {
  const rightToLeftNoonIdx = 3;
  const mod = index % measPerDayIdx;

  if (mod === 0) return index - rightToLeftNoonIdx;
  const leftToRightNoonIdex = measPerDay - rightToLeftNoonIdx;
  if (mod >= leftToRightNoonIdex)
    return Math.floor(index / measPerDay) * measPerDay + leftToRightNoonIdex;
  return index;
};
