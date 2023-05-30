import { async, TestBed } from '@angular/core/testing';
import { ParametragesSdlDelegataireComponent } from './parametrages-sdl-delegataire.component';
describe('ParametragesSdlDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ParametragesSdlDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ParametragesSdlDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=parametrages-sdl-delegataire.component.spec.js.map