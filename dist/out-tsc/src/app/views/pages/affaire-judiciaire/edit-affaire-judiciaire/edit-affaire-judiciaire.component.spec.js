import { async, TestBed } from '@angular/core/testing';
import { EditAffaireJudiciaireComponent } from './edit-affaire-judiciaire.component';
describe('EditAffaireJudiciaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditAffaireJudiciaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditAffaireJudiciaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-affaire-judiciaire.component.spec.js.map