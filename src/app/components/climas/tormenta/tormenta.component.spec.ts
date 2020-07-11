import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TormentaComponent } from './tormenta.component';

describe('TormentaComponent', () => {
  let component: TormentaComponent;
  let fixture: ComponentFixture<TormentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TormentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TormentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
