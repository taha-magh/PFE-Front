import { async, TestBed } from '@angular/core/testing';
import { AddDemandeRetraiteComponent } from './add-demande-retraite.component';
describe('AddDemandeRetraiteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddDemandeRetraiteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddDemandeRetraiteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-demande-retraite.component.spec.js.map