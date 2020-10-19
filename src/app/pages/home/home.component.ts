import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navValue = 'local';
  public clima: string;
  public effect: string;
  public simulator = false;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    return this.weatherService.getCurrentWeather()
    .then((currentWeather) => {
      return this.getBackgroundWeather(currentWeather.condition);
    });
  }

  public simulatorValue(){
    this.simulator = !this.simulator;
  }

  public getBackgroundWeather(condition) {
      let icon = condition.icon;
      const allPathWeather = {
        '01d': {
          clima: 'dia-despejado',
          effect: 'soleado'
        },
        '01n': {
          clima: 'noche-despejada',
          effect: 'estrellas'
        },
        '02d': {
          clima: 'dia-poco-nublado',
          effect: 'dia-nubes'
        },
        '04n': {
          clima: 'noche-despejada',
          effect: 'estrellas-nubes'
        },
        '02n': {
          clima: 'noche-despejada',
          effect: 'estrellas-nubes'
        },
        '09d': {
          clima: 'dia-nublado',
          effect: 'dia-nubes-lluvia'
        },
        '03d': {
          clima: 'dia-nublado',
          effect: 'dia-nubes'
        },
        '03n': {
          clima: 'noche-nublada',
          effect: 'noche-nubes'
        },
        '09n': {
          clima: 'noche-lluviosa',
          effect: 'noche-nubes-lluvia'
        },
      };
      switch (icon) {
        case '11n': icon = '11d'; break;
        case '13n': icon = '13d'; break;
        case '50n': icon = '50d'; break;
        case '04d': icon = '02d'; break;
        case '10n': icon = '09n'; break;
      }
      this.clima = allPathWeather[icon].clima;
      this.effect = allPathWeather[icon].effect;
      return allPathWeather[icon];
    }
}
