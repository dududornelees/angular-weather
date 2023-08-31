import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "b2ceae7351663c1b87c56edba32be1c0"

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
