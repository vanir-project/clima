export class CurrentWeather {
  static fromJson(data: any) {

    const boxDetails = analyzeData(data);

    const condition = determineIcon(data.condition);

    return new this(
      data.condition,
      data.temp,
      data.tempMin,
      data.tempMax,
      data.city,
      data.country,
      boxDetails
    );
  }
  constructor(
    public condition?: any,
    public temp?: number,
    public tempMin?: number,
    public tempMax?: number,
    public city?: any,
    public country?: any,
    public boxDetails?: Array<BoxDetail>
  ) {}
}

function determineIcon(condition) {
  switch (condition.icon) {
    case '11n': condition.icon = '11d'; break;
    case '13n': condition.icon = '13d'; break;
    case '10n': condition.icon = '10d'; break;
    case '50n': condition.icon = '50d'; break;
    case '03n': condition.icon = '03d'; break;
  }
  return condition;
}

function analyzeData(data) {
  const boxDetails = [];
  const inBox = ['feelsLike', 'wind', 'pressure', 'humidity', 'visibility'];

  Object.keys(data).forEach((key) => {
    if (inBox.includes(key)) {
      if (key === 'wind') {
        return Object.keys(data[key]).forEach((field) => {
          return boxDetails.push(formatData(data[key][field], field));
        });
      }
      return boxDetails.push(formatData(data[key], key));
    }
  });
  boxDetails.sort((a, b) => {
    if (a.orden < b.orden) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  return boxDetails;
}

function formatData(condition, key) {
  let formatedData;
  switch (key) {
    case 'feelsLike': formatedData = BoxDetail.fromJson({orden: 1, icon: 'termi', descr: 'Térmica', value: condition + 'º'}); break;
    case 'speed': formatedData = BoxDetail.fromJson({orden: 2, icon: 'viento', descr: 'Viento', value: (condition * (3600/1000)).toFixed(1), unid: 'km/h'}); break;
    case 'humidity': formatedData = BoxDetail.fromJson({orden: 3, icon: 'humed', descr: 'Humedad', value: condition + '%'}); break;
    case 'pressure': formatedData = BoxDetail.fromJson({orden: 4, icon: 'presion', descr: 'Presión', value: condition, unid: 'hPa'}); break;
    case 'deg': formatedData = BoxDetail.fromJson({orden: 5, icon: 'deg3', descr: 'Viento', value: 'SO', deg: `rotate(${condition}deg)`}); break;
    case 'visibility': formatedData = BoxDetail.fromJson({orden: 6, icon: 'visibi3', descr: 'Visibilidad', value: (condition / 1000), unid: 'km'}); break;
  }
  return formatedData;
}

class BoxDetail {
  static fromJson(data: any) {
    return new this(
      data.icon,
      data.descr,
      data.value,
      data.unid,
      data.deg,
      data.orden
      );
    }
    constructor(
      public icon?: string,
      public descr?: string,
      public value?: any,
      public unid?: string,
      public deg?: string,
      public orden?: number
    ) {}
}
