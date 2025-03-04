import { WeatherData } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
    weather: WeatherData | null
    loading: boolean
    error: string | null
}

const initialState: WeatherState = {
    weather: null,
    loading: false,
    error: null
}

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async (city: string, {rejectWithValue}) => {
    if (!city) return;
    try {
        const response = await fetch(`/api/weather/${encodeURIComponent(city)}`);
        if (!response.ok) throw new Error('Failed to fetch weather data');
        const data = await response.json();
        return data;
    } catch (err) {
        return rejectWithValue(err instanceof Error ? err.message : 'An error occurred');
    }
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchWeatherData.fulfilled, (state, action: PayloadAction<WeatherData>) => {
            state.loading = false
            state.weather = action.payload
        })
        builder.addCase(fetchWeatherData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default weatherSlice.reducer;