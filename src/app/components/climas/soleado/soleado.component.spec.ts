import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleadoComponent } from './soleado.component';

describe('SoleadoComponent', () => {
  let component: SoleadoComponent;
  let fixture: ComponentFixture<SoleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
