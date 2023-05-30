import { async, TestBed } from '@angular/core/testing';
import { ListSousEspeceComponent } from './list-sous-espece.component';
describe('ListSousEspeceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListSousEspeceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListSousEspeceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-sous-espece.component.spec.js.map