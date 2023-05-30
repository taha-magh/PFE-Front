import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdExpertComponent } from './upd-expert.component';

describe('UpdExpertComponent', () => {
  let component: UpdExpertComponent;
  let fixture: ComponentFixture<UpdExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
