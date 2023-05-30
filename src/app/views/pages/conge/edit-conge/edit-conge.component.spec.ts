import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCongeComponent } from './edit-conge.component';

describe('EditCongeComponent', () => {
  let component: EditCongeComponent;
  let fixture: ComponentFixture<EditCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
