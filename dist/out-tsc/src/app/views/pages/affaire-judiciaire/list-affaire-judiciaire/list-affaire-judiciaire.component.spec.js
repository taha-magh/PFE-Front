import { async, TestBed } from '@angular/core/testing';
import { ListAffaireJudiciaireComponent } from './list-affaire-judiciaire.component';
describe('ListAffaireJudiciaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListAffaireJudiciaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListAffaireJudiciaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-affaire-judiciaire.component.spec.js.map