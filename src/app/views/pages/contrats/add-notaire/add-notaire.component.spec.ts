import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotaireComponent } from './add-notaire.component';

describe('AddNotaireComponent', () => {
  let component: AddNotaireComponent;
  let fixture: ComponentFixture<AddNotaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
