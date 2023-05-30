import { async, TestBed } from '@angular/core/testing';
import { UpdTypeIndicateurDelegataireComponent } from './upd-type-indicateur-delegataire.component';
describe('UpdTypeIndicateurDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdTypeIndicateurDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdTypeIndicateurDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-type-indicateur-delegataire.component.spec.js.map