import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotationComponent } from './edit-notation.component';

describe('EditNotationComponent', () => {
  let component: EditNotationComponent;
  let fixture: ComponentFixture<EditNotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
