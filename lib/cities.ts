import { City } from "@/types";

export const checkExistOnRecentSearches = (recentSearches: City[], newSearch: string) => {
    for(let city of recentSearches) {
        if(newSearch.toLocaleLowerCase() === city.name.toLowerCase()) return true;
    }
    return false;
}