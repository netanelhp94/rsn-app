"use client";

import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import WeatherCardA from "./WeatherCardVariants/WeatherCardA";
import WeatherCardB from "./WeatherCardVariants/WeatherCardB";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function WeatherDisplay() {
  const { loading, error, weather } = useSelector((state: RootState) => state.weather);
  const { selectedCity } = useSelector((state: RootState) => state.cities);
  const { weatherCardVariant } = useSelector((state: RootState) => state.abTest);
  useWeatherQuery(selectedCity);
  
  if (loading)
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-800 rounded-xl shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="w-full p-6 bg-red-900/20 rounded-xl shadow-lg">
        <div className="text-red-400 text-center">
          <span className="font-semibold">Error:</span> {error}
        </div>
      </div>
    );

  if (!weather) return null;

  const WeatherCard = weatherCardVariant === "A" ? WeatherCardA : WeatherCardB;
  
  return (
    <WeatherCard city={selectedCity} weather={weather} />
  )
}
