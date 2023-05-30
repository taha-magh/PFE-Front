import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterPersonnelComponent } from './noter-personnel.component';

describe('NoterPersonnelComponent', () => {
  let component: NoterPersonnelComponent;
  let fixture: ComponentFixture<NoterPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoterPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoterPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
