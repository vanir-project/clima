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
    const pathIcon = determineIcon(data.condition);
    return new this(
      data.condition,
      data.wind,
      Number(data.temp).toFixed(1),
      data.humidity,
      data.pressure,
      Number(data.feelsLike).toFixed(1),
      pathIcon,
      new Date(data.date)
    ) ;
  }
  constructor(
    public condition?: any,
    public wind?: any,
    public temp?: string,
    public humidity?: number,
    public pressure?: number,
    public feelsLike?: string,
    public pathIcon?: string,
    public date_?: Date
  ) {}
}
function determineIcon(condition) {
  let icon = condition.icon;
  const allPathWeather = {
    '01d': 'sol.svg',
    '01n': 'luna.svg',
    '02d': 'dia_poco_nublado.svg',
    '02n': 'noche_poco_nublada.svg',
    '03d': 'nube.svg',
    '04d': 'nublado.svg',
    '09d': 'lluvia.svg',
    '10d': 'sol_lluvia.svg',
    '10n': 'luna_lluvia.svg',
    '11d': 'tormenta.svg',
    '13d': 'nieve.svg',
    '50d': 'niebla.svg',
    '04n': 'noche_poco_nublada.svg'
  };
  switch (icon) {
    case '11n': icon = '11d'; break;
    case '13n': icon = '13d'; break;
    case '09n': icon = '09d'; break;
    case '50n': icon = '50d'; break;
    case '03n': icon = '03d'; break;
    case '04n': icon = '04n'; break;
  }
  return allPathWeather[icon];
}
