import { async, TestBed } from '@angular/core/testing';
import { DetailTypeProduitComponent } from './detail-type-produit.component';
describe('DetailTypeProduitComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailTypeProduitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailTypeProduitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-type-produit.component.spec.js.map