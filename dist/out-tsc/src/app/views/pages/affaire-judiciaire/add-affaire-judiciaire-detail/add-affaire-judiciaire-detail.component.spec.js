import { async, TestBed } from '@angular/core/testing';
import { AddAffaireJudiciaireDetailComponent } from './add-affaire-judiciaire-detail.component';
describe('AddAffaireJudiciaireDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddAffaireJudiciaireDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddAffaireJudiciaireDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-affaire-judiciaire-detail.component.spec.js.map