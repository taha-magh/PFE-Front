import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEvolutionComponent } from './dashboard-evolution.component';

describe('DashboardEvolutionComponent', () => {
  let component: DashboardEvolutionComponent;
  let fixture: ComponentFixture<DashboardEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
