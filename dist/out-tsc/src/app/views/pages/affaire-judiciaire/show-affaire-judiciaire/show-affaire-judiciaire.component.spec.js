import { async, TestBed } from '@angular/core/testing';
import { ShowAffaireJudiciaireComponent } from './show-affaire-judiciaire.component';
describe('ShowAffaireJudiciaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ShowAffaireJudiciaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ShowAffaireJudiciaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=show-affaire-judiciaire.component.spec.js.map