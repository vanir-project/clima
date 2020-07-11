import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubladoComponent } from './nublado.component';

describe('NubladoComponent', () => {
  let component: NubladoComponent;
  let fixture: ComponentFixture<NubladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
