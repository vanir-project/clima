import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaLluviaComponent } from './luna-lluvia.component';

describe('LunaLluviaComponent', () => {
  let component: LunaLluviaComponent;
  let fixture: ComponentFixture<LunaLluviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunaLluviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
