import { WeatherData } from "@/types"
import WeatherIcon from "../WeatherIcon"
import { Droplets, Wind } from "lucide-react"

interface WeatherCardAProps {
  city: string
  weather: WeatherData
}

export default function WeatherCardB({ city, weather }: WeatherCardAProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <div>
        <div className="flex items-center mb-4 justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent capitalize">
            {city}
          </h2>
          <span className="px-2 py-1 text-sm border border-gray-600 text-blue-300 rounded-full">
            Celsius
          </span>
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <WeatherIcon description={weather.description} />
          <div>
            <p className="text-6xl font-bold text-blue-400">
              {Math.round(weather.temperature)}°<span className="text-xl">C</span>
            </p>
            <p className="text-lg text-gray-300 capitalize">
              {weather.description}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 md:gap-8">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <div className="ml-1">
                <div className="text-gray-400 mb-1">
                  Humidity
                </div>
                <dd className="text-2xl font-semibold text-gray-100">
                  {weather.humidity}%
                </dd>
              </div>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg">
             <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-blue-500" />
              <div className="ml-1">
                <div className="text-gray-400 mb-1">
                  Wind Speed
                </div>
                <dd className="text-2xl font-semibold text-gray-100">
                  {weather.windSpeed}%
                </dd>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded-lg">
             <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-blue-500" />
              <div className="ml-1">
                <div className="text-gray-400 mb-1">
                  Feels like
                </div>
                <dd className="text-2xl font-semibold text-gray-100">
                  {weather.feelsLike}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}