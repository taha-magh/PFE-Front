import { async, TestBed } from '@angular/core/testing';
import { ListTypeEmbalageComponent } from './list-type-embalage.component';
describe('ListTypeEmbalageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeEmbalageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeEmbalageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-embalage.component.spec.js.map