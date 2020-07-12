import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeekWeather } from '../../models';
import { CurrentWeather } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  public getCurrentWeather(): Promise<any> {
    return this.http.get(`${environment.API_URL}/api/weather-current`,
    {
      params: {
        idCity: '3435910'
      }
    })
    .toPromise()
    .then((data) => {
      return CurrentWeather.fromJson(data);
    });
  }

  public getWeekWeather(): Promise<any> {
    return this.http.get(`${environment.API_URL}/api/weather-week`,
      {
        params: {
          idCity: '3435910'
        }
      })
      .toPromise()
      .then((data) => {
        return WeekWeather.fromJson(data);
      });
  }
}
