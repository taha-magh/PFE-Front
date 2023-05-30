import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormationComponent } from './show-formation.component';

describe('ShowFormationComponent', () => {
  let component: ShowFormationComponent;
  let fixture: ComponentFixture<ShowFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
