export interface WeatherData {
  id: number;
  dt: number;
  cod: number;
  name: string;
  base: string;
  timezone: number;
  visibility: number;
  coord: {
    lon: number;
    lat: number;
  },
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ],
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  wind: {
    speed: number;
    deg: number;
  },
  clouds: {
    all: number;
  },
  sys: {
    id: number;
    type: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
}
