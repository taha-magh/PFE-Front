/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SpinnerScreenComponent } from './spinner-screen.component';
describe('SpinnerScreenComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SpinnerScreenComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SpinnerScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=spinner-screen.component.spec.js.map