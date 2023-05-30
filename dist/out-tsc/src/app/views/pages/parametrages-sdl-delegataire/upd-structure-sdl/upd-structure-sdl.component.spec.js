import { async, TestBed } from '@angular/core/testing';
import { UpdStructureSdlComponent } from './upd-structure-sdl.component';
describe('UpdStructureSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdStructureSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdStructureSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-structure-sdl.component.spec.js.map