"use client";
import { useEffect } from "react";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import RecentSearches from "@/app/components/RecentSearches";
import SearchBar from "@/app/components/SearchBar";
import { WeatherDisplay } from "@/app/components/WeatherDisplay";
import { getVariant } from "@/lib/abTest";
import { getStoredRecentCities, getStoredVariant, storeRecentCities } from "@/lib/appStorage";
import { checkExistOnRecentSearches } from "@/lib/cities";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAbTest } from "@/store/slices/abTestSlice";
import { fetchCities, setCities, setSelectedCity } from "@/store/slices/citiesSlice";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { cities, selectedCity, loading: loadiingCities } = useSelector((state: RootState) => state.cities);

  useEffect(() => {
    if(!getStoredVariant()) {
      const variant = getVariant();
      dispatch(setAbTest(variant));
    }

    const storedRecentSearches = getStoredRecentCities();
    if(storedRecentSearches.length) {
      dispatch(setCities(storedRecentSearches));
    }
  }, []);

  const handleSearch = async (city: string) => {
    const isCityExistOnRecentSearches = checkExistOnRecentSearches(cities, city);
    if(isCityExistOnRecentSearches) {
      dispatch(setSelectedCity(city));
      return;
    }
    dispatch(fetchCities(city));
  };

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800 p-4">
        <div className="flex justify-between md:items-center mb-3 flex-col gap-2 md:flex-row">
          <div className="flex flex-col gap-4">
            <p className="text-blue-300">
              Enter a city name to get the current weather conditions
            </p>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} loading={loadiingCities} />

        {selectedCity && <WeatherDisplay/> }

        <RecentSearches />
      </main>
    </ErrorBoundary>
  );
}
