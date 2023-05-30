import { async, TestBed } from '@angular/core/testing';
import { BureauOrdreComponent } from './bureau-ordre.component';
describe('BureauOrdreComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BureauOrdreComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BureauOrdreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bureau-ordre.component.spec.js.map