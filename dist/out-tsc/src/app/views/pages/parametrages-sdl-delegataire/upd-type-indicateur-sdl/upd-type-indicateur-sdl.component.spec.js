import { async, TestBed } from '@angular/core/testing';
import { UpdTypeIndicateurSdlComponent } from './upd-type-indicateur-sdl.component';
describe('UpdTypeIndicateurSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdTypeIndicateurSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdTypeIndicateurSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-type-indicateur-sdl.component.spec.js.map