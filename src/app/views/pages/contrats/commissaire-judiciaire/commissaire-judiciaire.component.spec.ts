import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissaireJudiciaireComponent } from './commissaire-judiciaire.component';

describe('CommissaireJudiciaireComponent', () => {
  let component: CommissaireJudiciaireComponent;
  let fixture: ComponentFixture<CommissaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
