import { setSelectedCity } from "@/store/slices/citiesSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function RecentSearches() {
  const dispatch = useDispatch<AppDispatch>();
  const { cities } = useSelector((state: RootState) => state.cities);
  const { loading: loadingWeather } = useSelector((state: RootState) => state.weather);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-300">
        Recent Searches
      </h2>
      {cities.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <div key={city.name} className="flex gap-2">
              <button
                disabled={loadingWeather}
                onClick={() => dispatch(setSelectedCity(city.name))}
                className="px-4 py-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 capitalize"
              >
                {city.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No recent searches</p>
      )}
    </div>
  );
}
