import { City } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addToRecentCities } from "@/lib/storage";
import { storeRecentCities } from "@/lib/appStorage";

interface citiesState {
    cities: City[]
    selectedCity: string
    loading: boolean
}

const initialState: citiesState = {
    cities: [],
    selectedCity: '',
    loading: false
}

export const fetchCities = createAsyncThunk('cities/fetchCities', async (city: string, {rejectWithValue}) => {
    try {
        const response = await fetch(`/api/location/search?query=${city}`);
        const data = await response.json();
        if (data.length > 0) {
            return city;
        }
        throw new Error('No cities found');
    } catch (err) {
        return rejectWithValue(err instanceof Error ? err.message : 'Failed to fetch cities')
    }
})

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setSelectedCity: (state, action: PayloadAction<string>) => {
            state.selectedCity = action.payload
        },
        setCities: (state, action: PayloadAction<City[]>) => {
            state.cities = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCities.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCities.fulfilled, (state, action: PayloadAction<string | undefined>) => {
            state.loading = false
            if (action.payload) {
                const updatedCities = addToRecentCities(state.cities, action.payload);
                storeRecentCities(updatedCities);

                state.cities = updatedCities
                state.selectedCity = action.payload
            }
        })
        builder.addCase(fetchCities.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { setSelectedCity, setCities } = citiesSlice.actions;
export default citiesSlice.reducer;