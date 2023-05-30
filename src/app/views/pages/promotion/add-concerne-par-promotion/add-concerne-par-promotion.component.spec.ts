import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcerneParPromotionComponent } from './add-concerne-par-promotion.component';

describe('AddConcerneParPromotionComponent', () => {
  let component: AddConcerneParPromotionComponent;
  let fixture: ComponentFixture<AddConcerneParPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConcerneParPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConcerneParPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
