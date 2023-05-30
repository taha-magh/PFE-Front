import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProlongementComponent } from './add-prolongement.component';

describe('AddProlongementComponent', () => {
  let component: AddProlongementComponent;
  let fixture: ComponentFixture<AddProlongementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProlongementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProlongementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
