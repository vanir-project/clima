import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navValue:string='local';
  public clima:string='dia-despejado';
  public effect:string='';
  public simulator = false;
  
  constructor() { }

  ngOnInit() {
    this.effectPngValue();
  }
  
  public simulatorValue(){
    this.simulator = !this.simulator;
  }

  public effectPngValue(){
    if(this.clima==='dia-despejado'){
      this.effect='soleado';
    } else if(this.clima==='dia-nublado'){
      this.effect='nubes-dia'
    }
  }
  
}
