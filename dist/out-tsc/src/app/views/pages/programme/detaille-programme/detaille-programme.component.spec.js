import { async, TestBed } from '@angular/core/testing';
import { DetailleProgrammeComponent } from './detaille-programme.component';
describe('DetailleProgrammeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailleProgrammeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailleProgrammeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detaille-programme.component.spec.js.map