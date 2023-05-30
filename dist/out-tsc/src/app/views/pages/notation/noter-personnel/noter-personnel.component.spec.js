import { async, TestBed } from '@angular/core/testing';
import { NoterPersonnelComponent } from './noter-personnel.component';
describe('NoterPersonnelComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NoterPersonnelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoterPersonnelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=noter-personnel.component.spec.js.map