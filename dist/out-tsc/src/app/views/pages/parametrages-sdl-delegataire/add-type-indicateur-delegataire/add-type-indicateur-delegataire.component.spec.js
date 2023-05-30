import { async, TestBed } from '@angular/core/testing';
import { AddTypeIndicateurDelegataireComponent } from './add-type-indicateur-delegataire.component';
describe('AddTypeIndicateurDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTypeIndicateurDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTypeIndicateurDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-type-indicateur-delegataire.component.spec.js.map