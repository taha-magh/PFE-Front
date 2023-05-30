import { async, TestBed } from '@angular/core/testing';
import { ListTypeTarifictionComponent } from './list-type-Tarifiction.component';
describe('ListTypeTarifictionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeTarifictionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeTarifictionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-tarifiction.component.spec.js.map