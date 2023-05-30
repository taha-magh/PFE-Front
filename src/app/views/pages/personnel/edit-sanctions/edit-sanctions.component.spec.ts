import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSanctionsComponent } from './edit-sanctions.component';

describe('EditSanctionsComponent', () => {
  let component: EditSanctionsComponent;
  let fixture: ComponentFixture<EditSanctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSanctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
