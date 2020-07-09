import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  public days = ['Hoy', 'Martes 7', 'Miércoles 8', 'Jueves 9', 'Viernes 10', 'Sábado 11'];
  public hours = ['4PM', '5PM', '6PM', '7PM', '8PM', '9PM',];
  public mobileBtn = false;
  public boxDetail = [{
    icon: 'termi',
    descr: 'Térmica',
    value: '17.8°'
  }, {
    icon: 'viento',
    descr: 'Viento',
    value: '11',
    unid: 'km/h'
  }, {
    icon: 'humed',
    descr: 'Humedad',
    value: '92%'
  }, {
    icon: 'presion',
    descr: 'Presión',
    value: '1020',
    unid: 'hPa'
  }, {
    icon: 'deg3',
    descr: 'Viento',
    value: 'Norte',
    deg: 'rotate(50deg)'
  }, {
    icon: 'visibi3',
    descr: 'Visibilidad',
    value: '10',
    unid: 'km'
  }];

  constructor() { }

  ngOnInit() {
  }

  public mobileBtnFunction() {
    this.mobileBtn = !this.mobileBtn;
  }

}
