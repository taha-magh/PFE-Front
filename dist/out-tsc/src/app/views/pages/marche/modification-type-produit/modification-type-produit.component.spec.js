import { async, TestBed } from '@angular/core/testing';
import { ModificationTypeProduitComponent } from './modification-type-produit.component';
describe('ModificationTypeProduitComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModificationTypeProduitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModificationTypeProduitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modification-type-produit.component.spec.js.map