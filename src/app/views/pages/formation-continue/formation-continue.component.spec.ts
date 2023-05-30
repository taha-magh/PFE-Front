import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationContinueComponent } from './formation-continue.component';

describe('FormationContinueComponent', () => {
  let component: FormationContinueComponent;
  let fixture: ComponentFixture<FormationContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
