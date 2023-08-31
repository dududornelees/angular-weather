import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/modules/wheater/services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/wather-data.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCity = "Porto Alegre";
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData(this.initialCity);
  }

  getWeatherData(city: string) {
    this.weatherService
    .getWeatherData(city)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    });
  }

  onSubmit() {
    this.getWeatherData(this.initialCity);
    this.initialCity = "";
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
