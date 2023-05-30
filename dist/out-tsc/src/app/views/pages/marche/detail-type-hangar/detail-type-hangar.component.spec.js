import { async, TestBed } from '@angular/core/testing';
import { DetailTypeHangarComponent } from './detail-type-hangar.component';
describe('DetailTypeHangarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailTypeHangarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailTypeHangarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-type-hangar.component.spec.js.map