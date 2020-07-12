export class WeekWeather {
  static fromJson(data: any) {
    let list = [];
    if (data.list && data.list.length > 0) {
      list = data.list.map((weather) => {
        return Weather.fromJson(weather);
      });
    }
    return new this(
      data.city,
      list
    );
  }
  constructor(
    public condition?: any,
    public list?: Array<Weather>
  ) {}
}

class Weather {
  static fromJson(data: any) {
    return new this(
      data.condition,
      data.wind,
      data.temp,
      data.humidity,
      data.pressure,
      data.feelsLike,
      data.date_
    ) ;
  }
  constructor(
    public condition?: any,
    public wind?: any,
    public temp?: number,
    public humidity?: number,
    public pressure?: number,
    public feelsLike?: number,
    public date_?: Date
  ) {}
}
