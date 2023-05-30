import { async, TestBed } from '@angular/core/testing';
import { CommissaireJudiciaireComponent } from './commissaire-judiciaire.component';
describe('CommissaireJudiciaireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommissaireJudiciaireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommissaireJudiciaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=commissaire-judiciaire.component.spec.js.map