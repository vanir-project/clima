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

  public removeDecimal(temp) {
    return Math.floor(Number(temp));
  }

  public formatedTotalWeahter(totalWeather) {
    let days = [];
    totalWeather.forEach((groupWeather, index) => {
      let temps = {
        min: undefined,
        max: undefined
      };
      groupWeather.forEach((weather, idx) => {
        if (idx === 0) {
          temps.min = Math.floor(Number(weather.data.temp));
          temps.max = Math.floor(Number(weather.data.temp));
        }
        if (Number(weather.data.temp) < temps.min) {
          return temps.min = Math.floor(Number(weather.data.temp));
        }
        if (Number(weather.data.temp) > temps.max) {
          return temps.max = Math.floor(Number(weather.data.temp));
        }
      });
      const midday = Math.trunc(groupWeather.length / 2);
      days.push({
        day: groupWeather[midday].day,
        data: groupWeather[midday].data,
        name: groupWeather[midday].name,
        minTemp: temps.min,
        maxTemp: temps.max
      });
    });
    return days;
  }

  public formatDays(weekWeather) {
    const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let totalWeather = [];
    let groupWeather = [];
    weekWeather.forEach((weather, idx) => {
      const index = groupWeather.findIndex((data) => {
        return data.day === weather.date_.getDate();
      });
      let nameDate = 'Hoy';
      if (weather.date_.getDay() !== new Date().getDay()) {
        nameDate = nameDays[weather.date_.getDay()] + ' ' + weather.date_.getDate();
      }
      if (index > -1 || idx === 0) {
        return groupWeather.push({
          day: weather.date_.getDate(),
          data: weather,
          name: nameDate
        });
      }
      totalWeather.push(groupWeather);
      return groupWeather = [{
        day: weather.date_.getDate(),
        data: weather,
        name: nameDate
      }];
    });
    this.days = this.days.concat(this.formatedTotalWeahter(totalWeather));
    return Promise.resolve(true);
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
