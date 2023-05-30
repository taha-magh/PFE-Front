import { async, TestBed } from '@angular/core/testing';
import { DetailTypeTarifictionComponent } from './detail-type-tarifiction.component';
describe('DetailTypeTarifictionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailTypeTarifictionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailTypeTarifictionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-type-tarifiction.component.spec.js.map