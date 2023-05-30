import { async, TestBed } from '@angular/core/testing';
import { UpdtProgrammeComponent } from './updt-programme.component';
describe('UpdtProgrammeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdtProgrammeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdtProgrammeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updt-programme.component.spec.js.map