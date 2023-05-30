import { async, TestBed } from '@angular/core/testing';
import { EditSousEspeceComponent } from './edit-sous-espece.component';
describe('EditSousEspeceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditSousEspeceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditSousEspeceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-sous-espece.component.spec.js.map