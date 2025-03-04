import { WeatherData } from "@/types"
import WeatherIcon from "../WeatherIcon"
import { Droplets, Wind } from "lucide-react"

interface WeatherCardAProps {
  city: string
  weather: WeatherData
}

export default function WeatherCardA({ city, weather }: WeatherCardAProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-100 capitalize">
              {city}
            </h2>
            <span className="px-2 py-1 text-sm border border-gray-600 text-blue-300 rounded-full">
              Celsius
            </span>
          </div>

          <div className="flex items-center gap-4">
            <WeatherIcon description={weather.description} />
            <div>
              <p className="text-5xl font-bold text-gray-100">
                {Math.round(weather.temperature)}°C
              </p>
              <p className="text-lg text-gray-300 capitalize">
                {weather.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Droplets className="w-4 h-4" />
              Humidity
            </div>
            <dd className="text-2xl font-semibold text-gray-100">
              {weather.humidity}%
            </dd>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Wind className="w-4 h-4" />
              Wind Speed
            </div>
            <dd className="text-2xl font-semibold text-gray-100">
              {weather.windSpeed} m/s
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}