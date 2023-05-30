import { async, TestBed } from '@angular/core/testing';
import { ImprimerAttestationCongeComponent } from './imprimer-attestation-conge.component';
describe('ImprimerAttestationCongeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ImprimerAttestationCongeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ImprimerAttestationCongeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=imprimer-attestation-conge.component.spec.js.map