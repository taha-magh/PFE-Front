import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRetraiteComponent } from './list-retraite.component';

describe('ListRetraiteComponent', () => {
  let component: ListRetraiteComponent;
  let fixture: ComponentFixture<ListRetraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRetraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
