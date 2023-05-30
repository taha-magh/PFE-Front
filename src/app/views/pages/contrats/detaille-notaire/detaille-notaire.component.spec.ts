import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleNotaireComponent } from './detaille-notaire.component';

describe('DetailleNotaireComponent', () => {
  let component: DetailleNotaireComponent;
  let fixture: ComponentFixture<DetailleNotaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleNotaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleNotaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
