import { async, TestBed } from '@angular/core/testing';
import { DetailleAvocatComponent } from './detaille-avocat.component';
describe('DetailleAvocatComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailleAvocatComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailleAvocatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detaille-avocat.component.spec.js.map