import { async, TestBed } from '@angular/core/testing';
import { ModificationTypeTarifictionComponent } from './modification-type-tarifiction.component';
describe('ModificationTypeTarifictionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModificationTypeTarifictionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModificationTypeTarifictionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modification-type-tarifiction.component.spec.js.map