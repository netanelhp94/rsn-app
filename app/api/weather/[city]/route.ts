import { NextResponse } from 'next/server'

export async function GET(request: Request, {params}: { params: { city: string } }) {
  const { city } = await params;
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error('Failed to fetch weather dasssta');
    } else {
      const data = await response.json();
      return NextResponse.json({
        temperature: data.main.temp,
        description: data.weather[0].description, 
        humidity: data.main.humidity, 
        windSpeed: data.wind.speed,
        feelsLike: data.main.feels_like
      });
    }
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'An error occurred' }, { status: 500 })
  }
}