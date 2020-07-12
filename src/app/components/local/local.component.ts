import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { CurrentWeather, WeekWeather } from '../../models';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  public days = ['Hoy', 'Martes 7', 'Miércoles 8', 'Jueves 9', 'Viernes 10', 'Sábado 11'];
  public currentDay = new Date();
  public currentWeather: CurrentWeather;
  public weekWeather: WeekWeather;
  public hours = ['4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];
  public mobileBtn = false;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.currentDay = new Date();
      return true;
    }, 1000);
    return this.weatherService.getCurrentWeather()
    .then((currentWeather) => {
      this.currentWeather = currentWeather;
      return this.weatherService.getWeekWeather();
    })
    .then((weekWeather) => {
      this.weekWeather = weekWeather;
      console.log('Week weather: ', weekWeather);
      console.log('Current weather:  ', this.currentWeather)
    })
    .catch((err) => {
      console.error(err.message);
    });
  }

  public mobileBtnFunction() {
    this.mobileBtn = !this.mobileBtn;
  }

}
