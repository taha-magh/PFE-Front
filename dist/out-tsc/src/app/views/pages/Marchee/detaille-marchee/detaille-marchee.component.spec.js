import { async, TestBed } from '@angular/core/testing';
import { DetailleMarcheeComponent } from './detaille-marchee.component';
describe('DetailleMarcheeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailleMarcheeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailleMarcheeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detaille-marchee.component.spec.js.map