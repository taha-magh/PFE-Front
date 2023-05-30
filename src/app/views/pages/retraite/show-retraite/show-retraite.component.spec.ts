import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRetraiteComponent } from './show-retraite.component';

describe('ShowRetraiteComponent', () => {
  let component: ShowRetraiteComponent;
  let fixture: ComponentFixture<ShowRetraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRetraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
