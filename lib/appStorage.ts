import { City, Variant } from "@/types";

const VARIANT_STORAGE_KEY = "ab_test_variant";
const RECENT_CITIES_STORAGE_KEY = "recent_cities";

export const getStoredVariant = (): Variant => {
    return localStorage.getItem(VARIANT_STORAGE_KEY) as Variant;
}

export const storeVariant = (variant: Variant) => {
    localStorage.setItem(VARIANT_STORAGE_KEY, variant);
}

export const getStoredRecentCities = (): City[] => {
    return JSON.parse(localStorage.getItem(RECENT_CITIES_STORAGE_KEY) || "[]") as City[];
}

export const storeRecentCities = (cities: City[]) => {
    localStorage.setItem(RECENT_CITIES_STORAGE_KEY, JSON.stringify(cities));
}