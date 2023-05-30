import { async, TestBed } from '@angular/core/testing';
import { AddTypeIndicateurSdlComponent } from './add-type-indicateur-sdl.component';
describe('AddTypeIndicateurSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTypeIndicateurSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTypeIndicateurSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-type-indicateur-sdl.component.spec.js.map