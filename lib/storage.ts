import { City } from "@/types";

export const addToRecentCities = (currentCities: City[], cityNameToAdd: string) => {
  const recentCities = [...currentCities];
  recentCities.unshift({
    name: cityNameToAdd,
    lastViewed: Date.now(),
    isFavorite: false,
  });

  // Keep only last 5 cities
  const updatedCities = recentCities.slice(0, 5);
  return updatedCities;
};
