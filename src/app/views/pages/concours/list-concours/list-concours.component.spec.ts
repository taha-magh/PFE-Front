import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConcoursComponent } from './list-concours.component';

describe('ListConcoursComponent', () => {
  let component: ListConcoursComponent;
  let fixture: ComponentFixture<ListConcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
