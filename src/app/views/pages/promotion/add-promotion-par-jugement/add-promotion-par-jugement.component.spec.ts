import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromotionParJugementComponent } from './add-promotion-par-jugement.component';

describe('AddPromotionParJugementComponent', () => {
  let component: AddPromotionParJugementComponent;
  let fixture: ComponentFixture<AddPromotionParJugementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPromotionParJugementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromotionParJugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
