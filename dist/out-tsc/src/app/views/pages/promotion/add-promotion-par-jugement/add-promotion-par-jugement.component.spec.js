import { async, TestBed } from '@angular/core/testing';
import { AddPromotionParJugementComponent } from './add-promotion-par-jugement.component';
describe('AddPromotionParJugementComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddPromotionParJugementComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddPromotionParJugementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-promotion-par-jugement.component.spec.js.map