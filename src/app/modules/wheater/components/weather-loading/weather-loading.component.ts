import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-loading',
  templateUrl: './weather-loading.component.html',
  styleUrls: ['./weather-loading.component.scss']
})
export class WeatherLoadingComponent {
  spinnerIcon = faSpinner;
}
