import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdNotaireComponent } from './upd-notaire.component';

describe('UpdNotaireComponent', () => {
  let component: UpdNotaireComponent;
  let fixture: ComponentFixture<UpdNotaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdNotaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdNotaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
