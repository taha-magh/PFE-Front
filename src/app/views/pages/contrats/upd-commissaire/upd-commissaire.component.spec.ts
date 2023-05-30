import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCommissaireComponent } from './upd-commissaire.component';

describe('UpdCommissaireComponent', () => {
  let component: UpdCommissaireComponent;
  let fixture: ComponentFixture<UpdCommissaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdCommissaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCommissaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
