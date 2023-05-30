import { async, TestBed } from '@angular/core/testing';
import { AddTypeEmbalageComponent } from './add-type-embalage.component';
describe('AddTypeEmbalageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTypeEmbalageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTypeEmbalageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-type-embalage.component.spec.js.map