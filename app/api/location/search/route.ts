import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  if(!query) return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });

  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${apiKey}`
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('Failed to get location info');
    } else {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'An error occurred' }, { status: 500 })
  }
}