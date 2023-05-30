import { async, TestBed } from '@angular/core/testing';
import { ModificationTypeEmbalageComponent } from './modification-type-embalage.component';
describe('ModificationTypeEmbalageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModificationTypeEmbalageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModificationTypeEmbalageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modification-type-embalage.component.spec.js.map