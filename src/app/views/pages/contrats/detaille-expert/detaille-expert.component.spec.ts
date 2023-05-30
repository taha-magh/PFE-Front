import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleExpertComponent } from './detaille-expert.component';

describe('DetailleExpertComponent', () => {
  let component: DetailleExpertComponent;
  let fixture: ComponentFixture<DetailleExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
