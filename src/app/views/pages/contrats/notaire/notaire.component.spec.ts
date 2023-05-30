import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaireComponent } from './notaire.component';

describe('NotaireComponent', () => {
  let component: NotaireComponent;
  let fixture: ComponentFixture<NotaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
