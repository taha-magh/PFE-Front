import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeRetraiteComponent } from './add-demande-retraite.component';

describe('AddDemandeRetraiteComponent', () => {
  let component: AddDemandeRetraiteComponent;
  let fixture: ComponentFixture<AddDemandeRetraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDemandeRetraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandeRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
