import { async, TestBed } from '@angular/core/testing';
import { ListStructureSdlComponent } from './list-structure-sdl.component';
describe('ListStructureSdlComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListStructureSdlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListStructureSdlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-structure-sdl.component.spec.js.map