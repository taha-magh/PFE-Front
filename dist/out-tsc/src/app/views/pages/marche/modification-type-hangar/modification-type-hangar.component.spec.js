import { async, TestBed } from '@angular/core/testing';
import { ModificationTypeHangarComponent } from './modification-type-hangar.component';
describe('ModificationTypeHangarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModificationTypeHangarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModificationTypeHangarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modification-type-hangar.component.spec.js.map