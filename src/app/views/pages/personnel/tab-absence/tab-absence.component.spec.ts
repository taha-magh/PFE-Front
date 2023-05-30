import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAbsenceComponent } from './tab-absence.component';

describe('TabAbsenceComponent', () => {
  let component: TabAbsenceComponent;
  let fixture: ComponentFixture<TabAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
