import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NochePocoNubladoComponent } from './noche-poco-nublado.component';

describe('NochePocoNubladoComponent', () => {
  let component: NochePocoNubladoComponent;
  let fixture: ComponentFixture<NochePocoNubladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NochePocoNubladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NochePocoNubladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
