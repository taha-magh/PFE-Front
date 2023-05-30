import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliquerSanctionsComponent } from './appliquer-sanctions.component';

describe('AppliquerSanctionsComponent', () => {
  let component: AppliquerSanctionsComponent;
  let fixture: ComponentFixture<AppliquerSanctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliquerSanctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliquerSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
