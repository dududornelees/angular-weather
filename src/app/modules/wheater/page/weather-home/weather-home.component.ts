import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/modules/wheater/services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/wather-data.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCity = "";
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;
  isLoading = false;
  isError = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData("Porto Alegre");
  }

  getWeatherData(city: string) {
    this.isLoading = true;
    this.isError = false;

    this.weatherService
    .getWeatherData(city)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res) => {
        this.weatherData = res;
        this.isError = false;
      },
      complete: () => this.isLoading = false,
      error: (error) => {
        this.isError = true;
        this.isLoading = false;
      }
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
