import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolLluviaComponent } from './sol-lluvia.component';

describe('SolLluviaComponent', () => {
  let component: SolLluviaComponent;
  let fixture: ComponentFixture<SolLluviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolLluviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
