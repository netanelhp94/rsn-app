import { useEffect } from 'react';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '@/store/slices/weatherSlice';

export const useWeatherQuery = (city: string) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchWeatherData(city));
  }, [city, dispatch]);
};