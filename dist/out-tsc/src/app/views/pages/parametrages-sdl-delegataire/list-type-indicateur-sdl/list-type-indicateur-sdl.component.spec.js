import { async, TestBed } from '@angular/core/testing';
import { ListTypeIndicateurSdlComponent } from './list-type-indicateur-sdl.component';
describe('ListTypeIndicateurSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListTypeIndicateurSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListTypeIndicateurSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-type-indicateur-sdl.component.spec.js.map