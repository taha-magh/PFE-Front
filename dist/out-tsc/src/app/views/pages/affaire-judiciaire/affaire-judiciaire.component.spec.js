import { async, TestBed } from '@angular/core/testing';
import { AffaireJudiciaireComponent } from './affaire-judiciaire.component';
describe('AffaireJudiciaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AffaireJudiciaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AffaireJudiciaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=affaire-judiciaire.component.spec.js.map