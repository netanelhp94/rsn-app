import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./slices/citiesSlice";
import abTestReducer from "./slices/abTestSlice";
import weatherReducer from "./slices/weatherSlice";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    abTest: abTestReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
