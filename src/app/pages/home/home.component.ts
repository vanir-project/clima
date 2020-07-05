import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navValue:string='local';
  public clima:string='dia-despejado';
  public effect:string='soleado';
  public simulator = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  public simulatorValue(){
    this.simulator = !this.simulator;
  }
  
}
