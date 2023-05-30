import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleCommissaireComponent } from './detaille-commissaire.component';

describe('DetailleCommissaireComponent', () => {
  let component: DetailleCommissaireComponent;
  let fixture: ComponentFixture<DetailleCommissaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleCommissaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleCommissaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
