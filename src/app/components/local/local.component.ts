import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  public days=['Lun','Mar','Mie','Jue','Vie', 'Sab'];
  public hours = ['4PM', '5PM', '6PM', '7PM', '8PM', '9PM',];
  public mobileBtn = false;

  constructor() { }

  ngOnInit() {
  }

  public mobileBtnFunction(){
    this.mobileBtn = !this.mobileBtn;
  }

}
