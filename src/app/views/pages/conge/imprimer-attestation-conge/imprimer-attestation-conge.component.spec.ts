import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerAttestationCongeComponent } from './imprimer-attestation-conge.component';

describe('ImprimerAttestationCongeComponent', () => {
  let component: ImprimerAttestationCongeComponent;
  let fixture: ComponentFixture<ImprimerAttestationCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerAttestationCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerAttestationCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
