import { async, TestBed } from '@angular/core/testing';
import { ListTypeHangarComponent } from './list-type-Hangar.component';
describe('ListTypeHangarComponentt', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeHangarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeHangarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-hangar.component.spec.js.map