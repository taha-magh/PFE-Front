import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSanctionsComponent } from './show-sanctions.component';

describe('ShowSanctionsComponent', () => {
  let component: ShowSanctionsComponent;
  let fixture: ComponentFixture<ShowSanctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSanctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
