import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourriersComponent } from './list-courriers.component';

describe('ListCourriersComponent', () => {
  let component: ListCourriersComponent;
  let fixture: ComponentFixture<ListCourriersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCourriersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
