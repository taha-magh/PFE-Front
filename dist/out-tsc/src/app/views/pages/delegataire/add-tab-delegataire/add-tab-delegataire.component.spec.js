import { async, TestBed } from '@angular/core/testing';
import { AddTabDelegataireComponent } from './add-tab-delegataire.component';
describe('AddTabDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddTabDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddTabDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-tab-delegataire.component.spec.js.map