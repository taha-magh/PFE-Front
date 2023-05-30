import { async, TestBed } from '@angular/core/testing';
import { ImprimerFactureComponent } from './imprimer-facture.component';
describe('ImprimerFactureComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ImprimerFactureComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ImprimerFactureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=imprimer-facture.component.spec.js.map