import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommissaireComponent } from './add-commissaire.component';

describe('AddCommissaireComponent', () => {
  let component: AddCommissaireComponent;
  let fixture: ComponentFixture<AddCommissaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommissaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommissaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
