import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDistributionComponent } from './dashboard-distribution.component';

describe('DashboardDistributionComponent', () => {
  let component: DashboardDistributionComponent;
  let fixture: ComponentFixture<DashboardDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
