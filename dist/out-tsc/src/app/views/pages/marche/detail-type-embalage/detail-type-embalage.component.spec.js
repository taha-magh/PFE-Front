import { async, TestBed } from '@angular/core/testing';
import { DetailTypeEmbalageComponent } from './detail-type-embalage.component';
describe('DetailTypeEmbalageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailTypeEmbalageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailTypeEmbalageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-type-embalage.component.spec.js.map