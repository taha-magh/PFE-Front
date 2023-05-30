import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConcoursComponent } from './show-concours.component';

describe('ShowConcoursComponent', () => {
  let component: ShowConcoursComponent;
  let fixture: ComponentFixture<ShowConcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
