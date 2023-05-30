import { async, TestBed } from '@angular/core/testing';
import { ListPesonnelCommuneComponent } from './list-pesonnel-commune.component';
describe('ListPesonnelCommuneComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListPesonnelCommuneComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListPesonnelCommuneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-pesonnel-commune.component.spec.js.map