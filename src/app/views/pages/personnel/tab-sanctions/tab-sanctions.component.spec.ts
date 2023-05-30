import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSanctionsComponent } from './tab-sanctions.component';

describe('TabSanctionsComponent', () => {
  let component: TabSanctionsComponent;
  let fixture: ComponentFixture<TabSanctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSanctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
