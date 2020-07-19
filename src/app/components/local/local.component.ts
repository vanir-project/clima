import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { CurrentWeather, WeekWeather } from '../../models';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  public days: Array<any> = [];
  public currentDay = new Date();
  public currentWeather: CurrentWeather;
  public weekWeather: WeekWeather;
  public hours: Array<any>;
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
      this.days.push({
        day: new Date().getDate(),
        data: currentWeather,
        name: 'Hoy',
        minTemp: currentWeather.tempMin,
        maxTemp: currentWeather.tempMax
      });
      return this.weatherService.getWeekWeather();
    })
    .then((weekWeather) => {
      this.hours = weekWeather.list.slice(0, 5);
      this.weekWeather = weekWeather;
      return this.formatDays(weekWeather.list);
    })
    .catch((err) => {
      console.error(err.message);
    });
  }

  public formatedTotalWeahter(totalWeather) {
    let days = [];
    totalWeather.forEach((groupWeather) => {
      console.log(groupWeather);
      let temps = {
        min: undefined,
        max: undefined
      };
      groupWeather.forEach((weather, index) => {
        if (index === 0) {
          temps.min = Number(weather.data.temp);
          temps.max = Number(weather.data.temp);
        }
        if (Number(weather.data.temp) < temps.min) {
          return temps.min = Number(weather.data.temp);
        }
        if (Number(weather.data.temp) > temps.max) {
          return temps.max = Number(weather.data.temp);
        }
      });
      console.log(temps);
      return days;
    });
  }

  public formatDays(weekWeather) {
    const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    // let totalWeather = [];
    // let groupWeather = [];
    console.log(weekWeather);
    weekWeather.forEach((weather, idx) => {
      const index = this.days.findIndex((data) => {
        return data.day === weather.date_.getDate();
      });
      let nameDate = '';
      if (weather.date_.getDay() !== new Date().getDay()) {
        nameDate = nameDays[weather.date_.getDay()] + ' ' + weather.date_.getDate();
      }
      if (index > -1) {
        if (Number(weather.temp) < this.days[index].minTemp) {
          return this.days[index].minTemp = Number(weather.temp);
        }
        if (Number(weather.temp) > this.days[index].maxTemp) {
          return this.days[index].maxTemp = Number(weather.temp);
        }
        return true;
      }
      console.log(this.days);
      this.days.push({
        day: weather.date_.getDate(),
        data: weather,
        name: nameDate,
        minTemp: Number(weather.temp),
        maxTemp: Number(weather.temp)
      });
    });
  }

  public formatHours(hours) {
    if (hours < 10) {
      return `0${hours} hs`;
    }
    return `${hours} hs`;
  }

  public formatMinutes() {
    const minutes = this.currentDay.getMinutes();
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  }

  public mobileBtnFunction() {
    this.mobileBtn = !this.mobileBtn;
  }

}
