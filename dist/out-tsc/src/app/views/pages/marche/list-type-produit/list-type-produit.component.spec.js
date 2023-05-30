import { async, TestBed } from '@angular/core/testing';
import { ListTypeProduitComponent } from './list-type-Produit.component';
describe('ListTypeProduitComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeProduitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeProduitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-produit.component.spec.js.map