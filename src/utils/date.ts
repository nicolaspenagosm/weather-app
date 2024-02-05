import { WeatherForecast } from "../store/weather-slice/weather-slice";

export const dayInMilis = 1000 * 60 * 60 * 24;

export const parseDate = (date: Date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
  return `${days[date.getDay()].substring(0, 3)}, ${date.getDate()} ${months[
    date.getMonth()
  ].substring(0, 3)}`;
};

export const isTomorrow = (date: Date) => {
  const now = new Date();
  return date.getTime() - now.getTime() <= dayInMilis;
};

export const getMilisUntilEndOfTheDay = (date: Date) => {
  return dayInMilis - ((date.getTime() - dayInMilis) % dayInMilis);
};

export const gateTodayLimitIndex = (forecast: WeatherForecast[]) => {
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
  if (mod >= rightToLeftNoonIdx)
    return Math.floor(index / measPerDay) * measPerDay + leftToRightNoonIdex;
  return index;
};