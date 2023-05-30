import { async, TestBed } from '@angular/core/testing';
import { AddTypeChevillardComponent } from './add-type-chevillard.component';
describe('AddTypeChevillardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTypeChevillardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTypeChevillardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-type-chevillard.component.spec.js.map