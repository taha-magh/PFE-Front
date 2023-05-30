import { async, TestBed } from '@angular/core/testing';
import { UpdTabSdlComponent } from './upd-tab-sdl.component';
describe('UpdTabSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdTabSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdTabSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-tab-sdl.component.spec.js.map