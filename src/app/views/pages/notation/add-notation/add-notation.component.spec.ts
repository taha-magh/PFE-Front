import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotationComponent } from './add-notation.component';

describe('AddNotationComponent', () => {
  let component: AddNotationComponent;
  let fixture: ComponentFixture<AddNotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
