import { async, TestBed } from '@angular/core/testing';
import { ListTypeIndicateurDelegataireComponent } from './list-type-indicateur-delegataire.component';
describe('ListTypeIndicateurDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeIndicateurDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeIndicateurDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-indicateur-delegataire.component.spec.js.map