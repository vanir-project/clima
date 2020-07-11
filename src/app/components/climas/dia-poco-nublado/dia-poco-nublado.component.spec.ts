import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaPocoNubladoComponent } from './dia-poco-nublado.component';

describe('DiaPocoNubladoComponent', () => {
  let component: DiaPocoNubladoComponent;
  let fixture: ComponentFixture<DiaPocoNubladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaPocoNubladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaPocoNubladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
