import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauOrdreComponent } from './bureau-ordre.component';

describe('BureauOrdreComponent', () => {
  let component: BureauOrdreComponent;
  let fixture: ComponentFixture<BureauOrdreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureauOrdreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauOrdreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
