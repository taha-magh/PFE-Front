import { async, TestBed } from '@angular/core/testing';
import { AddConcerneParPromotionComponent } from './add-concerne-par-promotion.component';
describe('AddConcerneParPromotionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddConcerneParPromotionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddConcerneParPromotionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-concerne-par-promotion.component.spec.js.map