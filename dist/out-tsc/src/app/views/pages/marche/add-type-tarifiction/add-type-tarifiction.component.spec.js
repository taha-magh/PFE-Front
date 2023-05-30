import { async, TestBed } from '@angular/core/testing';
import { AddTypeTarifictionComponent } from './add-type-Tarifiction.component';
describe('AddTypeTarifictionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTypeTarifictionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTypeTarifictionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-type-tarifiction.component.spec.js.map